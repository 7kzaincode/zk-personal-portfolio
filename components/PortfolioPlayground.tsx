import React from 'react';
import { Ball } from './animation/ball';
import { MotionSample, releaseVelocity } from './animation/geometry';

type Controls = { replay: () => void; stop: () => void; inspect: () => unknown };
declare global { interface Window { __portfolioPlayground?: Controls } }

export default function PortfolioPlayground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);
  const controls = React.useRef<Controls | null>(null);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current, target = targetRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !target || !ctx) return;
    const ball = new Ball();
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let disposed = false, raf = 0, last = 0, running = false;
    let width = 0, height = 0;
    let pointer: number | null = null, samples: MotionSample[] = [];
    let grabOffset = { x: 0, y: 0 };
    let initialTimer = 0, settleTimer = 0, allowIntro = true;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ball.draw(ctx);
      target.style.transform = `translate(${ball.x - 22}px, ${ball.y - 22}px)`;
      target.hidden = !ball.enabled || ball.phase === 'waiting';
      target.style.cursor = ball.phase === 'held' ? 'grabbing' : 'grab';
    };
    const loop = (now: number) => {
      if (disposed) return;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (ball.enabled) ball.update(dt);
      render();
      if (!document.hidden && ball.moving) raf = requestAnimationFrame(loop);
      else { running = false; last = 0; }
    };
    const wake = () => {
      if (disposed || document.hidden || running) return;
      running = true; last = 0; raf = requestAnimationFrame(loop);
    };
    const cancelGrab = () => {
      if (pointer !== null && target.hasPointerCapture(pointer)) target.releasePointerCapture(pointer);
      pointer = null; samples = [];
      if (ball.phase === 'held') ball.release({ x: 0, y: 0 });
    };
    const clearInitial = () => { allowIntro = false; window.clearTimeout(initialTimer); initialTimer = 0; };
    const stop = () => { clearInitial(); window.clearTimeout(settleTimer); cancelGrab(); ball.rest(); render(); wake(); };
    const replay = () => {
      clearInitial(); cancelGrab();
      // Replay returns to the words before their geometry is measured.
      window.scrollTo({ top: 0, behavior: 'instant' });
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => { if (!disposed) { ball.replay(); wake(); } }, 540);
    };
    const resize = () => {
      cancelGrab(); width = window.innerWidth; height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ball.resize(width, height); render(); wake();
    };
    const onMotion = () => {
      setReduced(media.matches); ball.enabled = !media.matches;
      if (media.matches) { clearInitial(); window.clearTimeout(settleTimer); stop(); ball.lightAll(); }
      else if (ball.phase !== 'waiting') { ball.rest(); }
      render();
    };
    const onScroll = () => {
      if (window.scrollY <= height * 0.25) return;
      clearInitial(); window.clearTimeout(settleTimer); cancelGrab();
      // Only the choreography concedes to scrolling. A free ball is left
      // entirely alone: interrupting it re-clamped its velocity on every
      // scroll event, which visibly froze it mid-air during section swaps.
      if (ball.phase === 'flight' || ball.phase === 'windup' || ball.phase === 'roll') {
        ball.interrupt();
        wake();
      }
    };
    const onVisibility = () => {
      if (document.hidden) { cancelAnimationFrame(raf); running = false; last = 0; cancelGrab(); }
      else wake();
    };
    const onFontsLoaded = () => {
      if (['flight', 'windup', 'roll'].includes(ball.phase)) { ball.interrupt(); wake(); }
    };
    const down = (event: PointerEvent) => {
      if (!ball.enabled || pointer !== null || (event.pointerType === 'mouse' && event.button !== 0)) return;
      event.preventDefault(); clearInitial(); window.clearTimeout(settleTimer);
      pointer = event.pointerId; grabOffset = { x: event.clientX - ball.x, y: event.clientY - ball.y };
      samples = [{ x: event.clientX, y: event.clientY, time: performance.now() }];
      target.setPointerCapture(pointer); ball.grab(ball.x, ball.y); wake();
    };
    const move = (event: PointerEvent) => {
      if (event.pointerId !== pointer) return;
      event.preventDefault(); const now = performance.now();
      samples.push({ x: event.clientX, y: event.clientY, time: now }); samples = samples.filter(s => now - s.time < 120);
      ball.move(event.clientX - grabOffset.x, event.clientY - grabOffset.y); render();
    };
    const up = (event: PointerEvent) => {
      if (event.pointerId !== pointer) return;
      const velocity = event.type === 'pointercancel' || event.type === 'lostpointercapture' ? { x: 0, y: 0 } : releaseVelocity(samples, performance.now());
      const captured = pointer; pointer = null; samples = [];
      if (captured !== null && target.hasPointerCapture(captured)) target.releasePointerCapture(captured);
      ball.release(velocity); wake();
    };
    const keys = (event: KeyboardEvent) => {
      const impulse: Record<string, { x: number; y: number }> = { ArrowLeft: { x: -340, y: -220 }, ArrowRight: { x: 340, y: -220 }, ArrowUp: { x: 0, y: -560 }, ArrowDown: { x: 0, y: 260 }, ' ': { x: 0, y: -560 }, Enter: { x: 0, y: -560 } };
      if (!impulse[event.key]) return;
      event.preventDefault(); clearInitial(); window.clearTimeout(settleTimer); ball.interrupt(); ball.release(impulse[event.key]); wake();
    };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') stop(); };
    // A drag that starts on empty page space must not begin a text selection;
    // a drag that starts on actual text still selects normally.
    const guardSelection = (event: PointerEvent) => {
      const el = event.target as HTMLElement | null;
      if (el && !el.closest('p, a, h1, nav, span, button, input, textarea')) event.preventDefault();
    };
    const hover = () => { ball.hovered = true; render(); };
    const leave = () => { ball.hovered = false; render(); };
    const api: Controls = {
      replay, stop,
      inspect: () => ({ ball: ball.inspect(), reduced: media.matches, running, width, height }),
    };
    controls.current = api;
    if (import.meta.env.DEV) window.__portfolioPlayground = api;
    target.addEventListener('pointerdown', down); target.addEventListener('pointermove', move);
    target.addEventListener('pointerup', up); target.addEventListener('pointercancel', up); target.addEventListener('lostpointercapture', up);
    target.addEventListener('keydown', keys); target.addEventListener('pointerenter', hover); target.addEventListener('pointerleave', leave);
    target.addEventListener('focus', hover); target.addEventListener('blur', leave);
    window.addEventListener('resize', resize); window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', escape); document.addEventListener('visibilitychange', onVisibility); media.addEventListener('change', onMotion);
    window.addEventListener('pointerdown', guardSelection);
    document.fonts.addEventListener('loadingdone', onFontsLoaded);
    resize(); onMotion();
    Promise.race([document.fonts.ready, new Promise(resolve => window.setTimeout(resolve, 1600))]).then(() => {
      if (!disposed && allowIntro && !media.matches && window.scrollY < height * 0.25) {
        initialTimer = window.setTimeout(() => { initialTimer = 0; if (!disposed) { ball.replay(); wake(); } }, 450);
      }
    });
    return () => {
      disposed = true; clearInitial(); window.clearTimeout(settleTimer); cancelAnimationFrame(raf); cancelGrab(); ball.dispose();
      target.removeEventListener('pointerdown', down); target.removeEventListener('pointermove', move); target.removeEventListener('pointerup', up);
      target.removeEventListener('pointercancel', up); target.removeEventListener('lostpointercapture', up); target.removeEventListener('keydown', keys);
      target.removeEventListener('pointerenter', hover); target.removeEventListener('pointerleave', leave); target.removeEventListener('focus', hover); target.removeEventListener('blur', leave);
      window.removeEventListener('resize', resize); window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', escape); document.removeEventListener('visibilitychange', onVisibility); media.removeEventListener('change', onMotion);
      window.removeEventListener('pointerdown', guardSelection);
      document.fonts.removeEventListener('loadingdone', onFontsLoaded);
      controls.current = null;
      if (import.meta.env.DEV) delete window.__portfolioPlayground;
    };
  }, []);

  return <>
    <canvas ref={canvasRef} aria-hidden="true" className="playground-canvas" />
    <button ref={targetRef} hidden className="ball-target" aria-label="Ball: drag to throw, or use arrow keys and Space to bounce" />
    <div className="playground-controls">
      {!reduced && <button onClick={() => controls.current?.replay()} aria-label="Replay ball animation"><span aria-hidden="true">↻</span> Replay ball</button>}
    </div>
  </>;
}
