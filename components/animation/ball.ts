import { clamp, mix, Point, smooth } from './geometry';

const ORDER = ['uw', 'leap', 'robots', 'email', 'x'];
export type BallPhase = 'waiting' | 'flight' | 'windup' | 'roll' | 'free' | 'held' | 'rest';
type Flight = { from: Point; to: Point; start: number; duration: number; arc: number };
export class Ball {
  x = 0; y = 0; vx = 0; vy = 0;
  radius = 9; width = 0; height = 0;
  phase: BallPhase = 'waiting';
  time = 0; leg = 0; enabled = true; hovered = false;
  private flight: Flight | null = null;
  private phaseStart = 0;
  private catapultAt = -100;
  private emailRect: DOMRect | null = null;
  private emailInset = 0;
  private measureContext = document.createElement('canvas').getContext('2d')!;
  private rollEnd = 0;
  private squash = 0; private axis = 0;
  private trail: Point[] = [];
  private marks: { x: number; y: number; life: number; wall: boolean }[] = [];
  private recoils = new Map<HTMLElement, number>();
  private email: HTMLElement | null = null;
  private trailAt = 0;
  private accumulator = 0;
  private previous: Point = { x: 0, y: 0 };
  private targets = () => Array.from(document.querySelectorAll<HTMLElement>('[data-hit]'));
  get floor() { return this.height - this.radius - 8; }
  get moving() { return this.enabled && this.phase !== 'waiting' && (this.phase !== 'rest' || this.squash > 0.003 || this.marks.length > 0 || this.trail.length > 0 || this.recoils.size > 0 || this.time - this.catapultAt < 0.8); }

  resize(width: number, height: number) {
    const changed = this.width !== width || this.height !== height;
    this.width = width; this.height = height;
    if (changed && this.phase !== 'waiting') this.interrupt();
    this.x = clamp(this.x, this.radius, width - this.radius);
    // A sleeping ball belongs to the floor, not the old viewport's y value.
    this.y = this.phase === 'rest' ? this.floor : clamp(this.y, this.radius, this.floor);
    this.accumulator = 0;
    this.previous = { x: this.x, y: this.y };
    this.marks = []; this.trail = [];
  }
  private target(key: string) {
    const el = document.querySelector<HTMLElement>(`[data-hit="${key}"]`);
    const rect = el?.getClientRects()[0];
    return rect?.width ? { x: rect.left + rect.width / 2, y: rect.top + (key === 'email' ? this.inkInset(el!) : 0) - this.radius } : null;
  }
  // Inline-block bounds include leading above the glyphs. Contact belongs on
  // the ink, not that invisible line box. Measure with the loaded CSS font.
  private inkInset(el: HTMLElement) {
    const style = getComputedStyle(el), ctx = this.measureContext;
    ctx.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const metrics = ctx.measureText(el.textContent ?? 'email');
    const lineHeight = parseFloat(style.lineHeight) || el.offsetHeight;
    return (lineHeight - metrics.fontBoundingBoxAscent - metrics.fontBoundingBoxDescent) / 2
      + metrics.fontBoundingBoxAscent - metrics.actualBoundingBoxAscent;
  }
  lightAll() { this.targets().forEach(el => el.classList.remove('dim')); }
  private resetWord() {
    if (this.email) { this.email.style.removeProperty('transform'); this.email.style.removeProperty('transform-origin'); }
    this.email = null; this.emailRect = null; this.catapultAt = -100;
  }
  replay() {
    this.interrupt();
    const first = this.target(ORDER[0]);
    if (!this.enabled || !first) { this.phase = 'rest'; return; }
    this.targets().forEach(el => el.classList.add('dim'));
    this.time = 0; this.trailAt = 0; this.leg = 0; this.vx = 0; this.vy = 0; this.accumulator = 0;
    this.trail = []; this.marks = []; this.squash = 0; this.recoils.clear();
    // Three bounded variations, not random trajectories through the copy.
    let entry = 0;
    try { entry = (Number(sessionStorage.getItem('portfolio-ball-entry') ?? '-1') + 1) % 3; sessionStorage.setItem('portfolio-ball-entry', String(entry)); } catch { /* storage is optional */ }
    this.x = entry === 0 ? -20 : entry === 1 ? this.width + 20 : clamp(first.x + 70, 30, this.width - 30);
    this.y = entry === 2 ? -20 : Math.max(24, first.y - 140);
    this.previous = { x: this.x, y: this.y };
    this.fly(first, 0.95, entry === 2 ? 0 : 22);
  }
  private fly(to: Point, duration?: number, arc?: number) {
    const distance = Math.hypot(to.x - this.x, to.y - this.y);
    this.flight = { from: { x: this.x, y: this.y }, to, start: this.time,
      duration: duration ?? clamp(0.53 + distance / 1000, 0.6, 0.83),
      arc: arc ?? Math.min(65, Math.max(22, Math.min(this.y, to.y) - 24)) };
    this.phase = 'flight';
  }
  interrupt() {
    this.lightAll(); this.resetWord(); this.flight = null; this.trail = [];
    for (const el of this.recoils.keys()) el.classList.remove('hit');
    this.recoils.clear();
    if (this.phase !== 'rest' && this.phase !== 'held' && this.phase !== 'waiting') {
      this.release({ x: clamp(this.vx, -180, 180), y: clamp(this.vy, -180, 220) });
    }
  }
  rest() {
    this.interrupt(); this.phase = 'rest'; this.x = clamp(this.x, 28, this.width - 28); this.y = this.floor;
    this.previous = { x: this.x, y: this.y }; this.vx = this.vy = 0; this.trail = []; this.marks = []; this.squash = 0;
  }
  grab(x: number, y: number) { this.interrupt(); this.phase = 'held'; this.move(x, y); this.vx = this.vy = 0; }
  move(x: number, y: number) {
    this.x = clamp(x, this.radius, this.width - this.radius); this.y = clamp(y, this.radius, this.floor);
    this.previous = { x: this.x, y: this.y };
  }
  release(velocity: Point) { this.phase = 'free'; this.vx = velocity.x; this.vy = velocity.y; this.accumulator = 0; this.previous = { x: this.x, y: this.y }; }
  dispose() { this.interrupt(); this.phase = 'rest'; }

  private land() {
    const key = ORDER[this.leg];
    const el = document.querySelector<HTMLElement>(`[data-hit="${key}"]`);
    if (el) {
      el.classList.remove('dim');
      // Email is already a moving surface. A separate CSS recoil would move
      // it away from the ball during the first part of the catapult.
      if (key !== 'email') { el.classList.add('hit'); this.recoils.set(el, this.time); }
    }
    this.squash = 0.23; this.axis = 0; this.leg++;
    if (key === 'email') {
      this.email = el; this.emailRect = el?.getBoundingClientRect() ?? null;
      this.emailInset = el ? this.inkInset(el) : 0;
      this.squash = 0;
      this.catapultAt = this.time; this.phase = 'windup'; this.vx = this.vy = 0;
    } else if (this.leg < ORDER.length) {
      const target = this.target(ORDER[this.leg]);
      if (target) this.fly(target); else this.interrupt();
    } else {
      this.phase = 'roll'; this.phaseStart = this.time;
      this.rollEnd = (el?.getClientRects()[0]?.left ?? this.x) - this.radius * 0.4;
      this.vx = -42; this.vy = 0;
    }
  }
  private catapultAngle(t: number) {
    if (t < 0.12) return 0;
    if (t < 0.46) return mix(0, 8, smooth((t - 0.12) / 0.34));
    if (t < 0.54) return mix(8, -12, smooth((t - 0.46) / 0.08));
    if (t < 0.64) return mix(-12, 3, smooth((t - 0.54) / 0.1));
    return mix(3, 0, smooth(clamp((t - 0.64) / 0.14)));
  }
  update(dt: number) {
    this.time += dt;
    for (const [el, at] of this.recoils) if (this.time - at > 0.3) { el.classList.remove('hit'); this.recoils.delete(el); }
    const catTime = this.time - this.catapultAt;
    if (this.email && catTime <= 0.78) {
      this.email.style.transformOrigin = '0% 100%';
      this.email.style.transform = `rotate(${this.catapultAngle(catTime)}deg)`;
    } else if (this.email) this.resetWord();
    this.squash *= Math.exp(-dt * 14);
    if (this.phase === 'flight' && this.flight) {
      const f = this.flight, t = clamp((this.time - f.start) / f.duration);
      this.x = mix(f.from.x, f.to.x, t); this.y = mix(f.from.y, f.to.y, t) - 4 * f.arc * t * (1 - t);
      this.vx = (f.to.x - f.from.x) / f.duration;
      this.vy = (f.to.y - f.from.y - 4 * f.arc * (1 - 2 * t)) / f.duration;
      if (t === 1) this.land();
    } else if (this.phase === 'windup' && this.emailRect) {
      const r = this.emailRect, angle = this.catapultAngle(catTime) * Math.PI / 180;
      const localX = r.width * mix(0.5, 0.72, smooth(clamp(catTime / 0.46)));
      const localY = -r.height + this.emailInset - this.radius;
      this.x = r.left + localX * Math.cos(angle) - localY * Math.sin(angle);
      this.y = r.bottom + localX * Math.sin(angle) + localY * Math.cos(angle);
      if (catTime >= 0.5) {
        const target = this.target('x');
        if (target) this.fly(target, 0.55, Math.min(75, this.y - 20)); else this.interrupt();
      }
    } else if (this.phase === 'roll') {
      this.x += this.vx * dt;
      // Every handoff to physics must seed its previous position. Otherwise the
      // first interpolated frame draws the ball back at its entrance position.
      if (this.x <= this.rollEnd || this.time - this.phaseStart > 0.45) this.release({ x: this.vx, y: 0 });
    } else if (this.phase === 'free') {
      this.accumulator += dt;
      const step = 1 / 120;
      while (this.accumulator >= step) {
        this.previous = { x: this.x, y: this.y };
        this.vy += 1350 * step; this.vx *= Math.exp(-0.13 * step);
        this.x += this.vx * step; this.y += this.vy * step;
        let impact = 0;
        if (this.x < this.radius || this.x > this.width - this.radius) {
          this.x = clamp(this.x, this.radius, this.width - this.radius); impact = Math.abs(this.vx);
          this.vx *= -0.67; this.axis = Math.PI / 2;
          if (impact > 260) this.marks.push({ x: this.x, y: this.y, life: 1, wall: true });
        }
        if (this.y < this.radius) { this.y = this.radius; impact = Math.abs(this.vy); this.vy *= -0.65; this.axis = 0; }
        if (this.y > this.floor) {
          this.y = this.floor; impact = Math.abs(this.vy); this.vy *= -0.54; this.vx *= 0.83; this.axis = 0;
          if (impact < 85) this.vy = 0;
          if (impact > 300) this.marks.push({ x: this.x, y: this.height - 5, life: 1, wall: false });
        }
        if (impact) this.squash = Math.min(0.28, impact / 2400);
        if (this.y >= this.floor - 0.1) {
          this.vx *= Math.exp(-step * 4);
          if (Math.abs(this.vx) < 3 && this.vy === 0) { this.phase = 'rest'; this.vx = 0; }
        }
        this.accumulator -= step;
      }
    }
    this.marks = this.marks.slice(-5).filter(mark => (mark.life -= dt / 1.5) > 0);
    if (this.time - this.trailAt >= 1 / 90) {
      if ((this.phase === 'free' || this.phase === 'flight') && Math.hypot(this.vx, this.vy) > 340) this.trail.push({ x: this.x, y: this.y });
      else this.trail.shift();
      this.trail = this.trail.slice(-7); this.trailAt = this.time;
    }
  }
  draw(ctx: CanvasRenderingContext2D) {
    if (!this.enabled || this.phase === 'waiting') return;
    const alpha = clamp(this.accumulator * 120);
    const x = this.phase === 'free' ? mix(this.previous.x, this.x, alpha) : this.x;
    const y = this.phase === 'free' ? mix(this.previous.y, this.y, alpha) : this.y;
    ctx.save();
    for (const m of this.marks) {
      ctx.fillStyle = `rgba(180,83,42,${m.life * 0.12})`; ctx.beginPath(); ctx.ellipse(m.x, m.y, m.wall ? 2 : 10, m.wall ? 8 : 2, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.lineCap = 'round';
    for (let i = 1; i < this.trail.length; i++) {
      ctx.strokeStyle = `rgba(180,83,42,${0.1 * i / this.trail.length})`; ctx.lineWidth = 2 + i * 0.7;
      ctx.beginPath(); ctx.moveTo(this.trail[i - 1].x, this.trail[i - 1].y); ctx.lineTo(this.trail[i].x, this.trail[i].y); ctx.stroke();
    }
    const near = clamp(1 - (this.floor - y) / 260);
    ctx.fillStyle = `rgba(87,83,76,${0.025 + near * 0.10})`; ctx.beginPath(); ctx.ellipse(x, this.height - 5, 11 - near * 2, 2.5, 0, 0, Math.PI * 2); ctx.fill();
    let deformation = this.squash, axis = this.axis;
    if (deformation < 0.03 && this.phase !== 'held' && this.phase !== 'rest') { deformation = Math.min(0.16, Math.hypot(this.vx, this.vy) / 6000); axis = Math.atan2(this.vy, this.vx); }
    ctx.translate(x, y); ctx.rotate(axis); ctx.scale(1 + deformation, 1 / (1 + deformation));
    ctx.fillStyle = '#B4532A'; ctx.beginPath(); ctx.arc(0, 0, this.radius, 0, Math.PI * 2); ctx.fill();
    if (this.hovered) { ctx.strokeStyle = 'rgba(180,83,42,.28)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(0, 0, this.radius + 5, 0, Math.PI * 2); ctx.stroke(); }
    ctx.restore();
  }
  inspect() { return { phase: this.phase, time: this.time, x: this.x, y: this.y, vx: this.vx, vy: this.vy, floor: this.floor, leg: this.leg, enabled: this.enabled }; }
}
