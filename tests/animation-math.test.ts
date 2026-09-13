import assert from 'node:assert/strict';
import test from 'node:test';
import { releaseVelocity } from '../components/animation/geometry.ts';
test('throw velocity is independent of pointer event frequency', () => {
  const samples = (count: number) => Array.from({ length: count + 1 }, (_, i) => ({ x: i * 80 / count, y: -i * 40 / count, time: 1000 + i * 80 / count }));
  const slowDevice = releaseVelocity(samples(4), 1080), fastDevice = releaseVelocity(samples(24), 1080);
  assert.equal(slowDevice.x, 1000); assert.equal(slowDevice.y, -500);
  assert.deepEqual(slowDevice, fastDevice);
});

test('holding still before release drops the ball', () => {
  assert.deepEqual(releaseVelocity([{ x: 0, y: 0, time: 1000 }, { x: 80, y: 0, time: 1080 }], 1210), { x: 0, y: 0 });
});
