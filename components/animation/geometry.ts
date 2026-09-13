export type Point = { x: number; y: number };
export const clamp = (n: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, n));
export const mix = (a: number, b: number, t: number) => a + (b - a) * t;
export const smooth = (t: number) => t * t * (3 - 2 * t);
export type MotionSample = Point & { time: number };
/** Pixels/second over a recent window. Stale motion produces a drop, not a throw. */
export function releaseVelocity(samples: MotionSample[], now: number): Point {
  const recent = samples.filter(s => now - s.time <= 90);
  if (recent.length < 2 || now - recent[recent.length - 1].time > 45) return { x: 0, y: 0 };
  const first = recent[0], last = recent[recent.length - 1];
  const seconds = (last.time - first.time) / 1000;
  if (seconds < 0.004) return { x: 0, y: 0 };
  return { x: clamp((last.x - first.x) / seconds, -1900, 1900), y: clamp((last.y - first.y) / seconds, -1900, 1900) };
}
