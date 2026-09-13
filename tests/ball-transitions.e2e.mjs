import { chromium } from 'playwright';
import assert from 'node:assert/strict';

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3000/');
  await page.evaluate(() => document.fonts.ready);
  const results = await page.evaluate(async () => {
    const { Ball } = await import('/components/animation/ball.ts');
    const results = [];
    const check = (name, run) => {
      const ball = new Ball(); ball.resize(1200, 800);
      try { run(ball); results.push({ name, pass: true }); }
      catch (error) { results.push({ name, pass: false, error: error.message }); }
      finally { ball.dispose(); }
    };
    const near = (a, b) => { if (Math.abs(a - b) > .001) throw Error(`${a} != ${b}`); };
    const drawn = ball => {
      let position;
      const ctx = new Proxy({}, { set: () => true, get: (_, key) => key === 'translate' ? (x, y) => { position = { x, y }; } : () => {} });
      ball.draw(ctx); return position;
    };
    check('X roll-to-fall never renders stale entrance coordinates', ball => {
      ball.replay();
      for (let i = 0; i < 1500 && ball.phase !== 'roll'; i++) ball.update(1 / 240);
      if (ball.phase !== 'roll') throw Error('did not reach X');
      while (ball.phase === 'roll') ball.update(1 / 240);
      near(drawn(ball).x, ball.x); near(drawn(ball).y, ball.y);
      ball.update(1 / 1000);
      if (Math.hypot(drawn(ball).x - ball.x, drawn(ball).y - ball.y) > 1) throw Error('substep teleport');
    });
    check('settled ball follows both taller and shorter viewport floors', ball => {
      ball.rest();
      for (const [w, h] of [[1200, 1100], [390, 844], [390, 1200], [1400, 700]]) {
        ball.resize(w, h); near(ball.y, ball.floor); near(drawn(ball).y, ball.floor);
        if (ball.phase !== 'rest') throw Error('rest was lost');
      }
    });
    check('flight interruption renders current coordinates before first physics step', ball => {
      ball.replay(); ball.update(.2); ball.interrupt();
      near(drawn(ball).x, ball.x); near(drawn(ball).y, ball.y);
    });
    check('replay resets trail clock and removes interrupted word recoil', ball => {
      ball.replay(); ball.update(.95);
      if (!document.querySelector('[data-hit].hit')) throw Error('no recoil to test');
      ball.time = 90; ball.trailAt = 90; ball.replay();
      if (document.querySelector('[data-hit].hit')) throw Error('stale recoil');
      ball.update(.02);
      if (!ball.trail.length) throw Error('trail clock is stale');
    });
    check('waiting ball does not run an idle animation loop', ball => {
      if (ball.moving) throw Error('waiting ball still animates');
    });
    for (const fps of [30, 60, 144, 240]) {
      check(`three entrance variants settle without rendering jumps at ${fps}fps`, ball => {
        for (let replay = 0; replay < 3; replay++) {
          ball.replay();
          for (let frame = 0; frame < fps * 20 && ball.moving; frame++) {
            ball.update(1 / fps);
            const p = drawn(ball);
            if (!Number.isFinite(p.x + p.y)) throw Error('non-finite position');
            if (Math.hypot(p.x - ball.x, p.y - ball.y) > 20) throw Error('rendered position jumped');
          }
          if (ball.phase !== 'rest' || ball.moving) throw Error('failed to sleep');
          near(ball.y, ball.floor);
          if (document.querySelector('[data-hit].hit, [data-hit].dim')) throw Error('stale link class');
        }
      });
    }
    check('wall and ceiling throws, resize mid-fall, then drop all settle', ball => {
      ball.grab(1100, 100); ball.release({ x: 1900, y: -1900 });
      for (let i = 0; i < 60; i++) ball.update(1 / 120);
      ball.resize(390, 844);
      for (let i = 0; i < 2400 && ball.moving; i++) ball.update(1 / 120);
      if (ball.phase !== 'rest') throw Error('throw never settled');
      near(ball.y, ball.floor);
      ball.grab(190, 300); ball.release({ x: 0, y: 0 });
      for (let i = 0; i < 2400 && ball.moving; i++) ball.update(1 / 120);
      near(ball.y, ball.floor);
    });
    return results;
  });
  for (const result of results) console.log(`${result.pass ? 'PASS' : 'FAIL'} ${result.name}${result.error ? ': ' + result.error : ''}`);
  assert.ok(results.every(r => r.pass), 'ball transition regressions');
} finally { await browser.close(); }
