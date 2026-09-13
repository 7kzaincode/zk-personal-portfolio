// Real browser input tests complement gstack's visual inspection. Run with the
// local Vite server on :3000. Screenshots/videos are written to test-results/.
import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../test-results/animations/', import.meta.url));
await mkdir(root, { recursive: true });
const browser = await chromium.launch({ headless: true });
let checks = 0;
const pass = name => { checks++; console.log(`PASS ${name}`); };
const state = page => page.evaluate(() => window.__portfolioPlayground.inspect());
const idle = page => page.waitForFunction(() => { const s = window.__portfolioPlayground.inspect(); return s.ball.phase === 'rest' && !s.running; }, null, { timeout: 15000 });
const contexts = [];
try {
  for (const viewport of (process.argv.includes('--reduced-only') ? [] : [{ width: 1440, height: 900 }, { width: 390, height: 844 }])) {
    const context = await browser.newContext({ viewport, recordVideo: { dir: root, size: viewport } }); contexts.push(context);
    const page = await context.newPage();
    await page.addInitScript(() => {
      window.ballRenderErrors = [];
      const translate = CanvasRenderingContext2D.prototype.translate;
      CanvasRenderingContext2D.prototype.translate = function (x, y) {
        if (this.canvas.classList.contains('playground-canvas')) {
          const ball = window.__portfolioPlayground?.inspect().ball;
          if (ball && Math.hypot(x - ball.x, y - ball.y) > 20) window.ballRenderErrors.push({ x, y, ball });
        }
        return translate.call(this, x, y);
      };
    });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('http://127.0.0.1:3000/');
    await page.waitForFunction(() => window.__portfolioPlayground?.inspect().ball.leg === 5);
    await idle(page);
    assert.equal(await page.locator('[data-hit].dim').count(), 0);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    pass(`${viewport.width}: complete intro, settled loop, no horizontal overflow`);
    assert.deepEqual(await page.evaluate(() => window.ballRenderErrors), [], 'rendered ball never flashes at stale coordinates');
    pass(`${viewport.width}: full intro has no stale-position flash at X`);
    for (const size of [
      { width: viewport.width, height: viewport.height + 240 },
      { width: 375, height: 568 },
      { width: 1050, height: 1100 },
      viewport,
    ]) {
      await page.setViewportSize(size);
      await page.waitForFunction(size => {
        const s = window.__portfolioPlayground.inspect();
        return s.width === size.width && s.height === size.height;
      }, size);
      await idle(page);
      const resized = (await state(page)).ball;
      assert.ok(Math.abs(resized.y - resized.floor) < .01, 'settled ball follows resized floor');
      const box = await page.getByRole('button', { name: /^Ball:/ }).boundingBox();
      assert.ok(Math.abs(box.y + 22 - resized.floor) < 1, 'hit target follows ball');
    }
    pass(`${viewport.width}: repeated taller, shorter and breakpoint resizes keep ball grounded`);

    // Use the actual public button and catch the moving ball by pointer capture.
    await page.getByRole('button', { name: 'Replay ball animation' }).click();
    await page.waitForFunction(() => window.__portfolioPlayground.inspect().ball.phase === 'flight');
    const target = page.getByRole('button', { name: /^Ball:/ });
    await target.dispatchEvent('pointerenter');
    let caught = false;
    for (let attempt = 0; attempt < 8 && !caught; attempt++) {
      const s = await state(page);
      await page.mouse.move(s.ball.x, s.ball.y);
      await page.mouse.down();
      caught = (await state(page)).ball.phase === 'held';
      if (!caught) await page.mouse.up();
    }
    assert.equal(caught, true, 'catch during the entrance');
    await page.mouse.move(viewport.width / 2, viewport.height / 2, { steps: 8 });
    await page.waitForTimeout(160);
    await page.mouse.up();
    assert.ok(Math.abs((await state(page)).ball.vx) < 1, 'hold then release should drop');
    assert.equal(await page.locator('[data-hit].dim').count(), 0);
    pass(`${viewport.width}: catch introductory ball, drag, hold and drop`);

    await idle(page);
    await target.focus(); await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(100);
    const bounced = await state(page);
    assert.ok(bounced.ball.y < bounced.ball.floor - 10);
    await page.keyboard.press('Escape');
    assert.equal((await state(page)).ball.phase, 'rest');
    pass(`${viewport.width}: keyboard bounce and Escape`);

    const ready = await state(page);
    await page.mouse.move(ready.ball.x, ready.ball.y); await page.mouse.down();
    for (let i = 1; i <= 5; i++) {
      await page.mouse.move(ready.ball.x + i * 16, ready.ball.y - i * 15);
      await page.waitForTimeout(12);
    }
    await page.mouse.up();
    const thrown = await state(page);
    assert.ok(thrown.ball.vx > 100 && thrown.ball.vy < -100, `flick: ${JSON.stringify(thrown.ball)}`);
    await page.keyboard.press('Escape');
    pass(`${viewport.width}: real mouse flick transfers momentum`);

    const robots = page.getByRole('link', { name: 'robots', exact: true });
    assert.equal(await robots.getAttribute('href'), 'https://en.wikipedia.org/wiki/Ultimate_Robot_Knock-out_Legend');
    // Keep the regression local while verifying native new-tab navigation.
    await context.route('https://en.wikipedia.org/**', route => route.fulfill({ body: 'League destination' }));
    const popupPromise = page.waitForEvent('popup');
    await robots.click();
    const popup = await popupPromise;
    await popup.waitForLoadState();
    assert.ok(popup.url().endsWith('/wiki/Ultimate_Robot_Knock-out_Legend'));
    await popup.close();
    assert.equal(await page.getByRole('button', { name: 'Stop animation' }).count(), 0);
    pass(`${viewport.width}: robots follows its original link with no animation`);

    await page.getByRole('button', { name: 'Replay ball animation' }).click();
    await page.waitForFunction(() => window.__portfolioPlayground.inspect().ball.phase === 'windup');
    const contact = await page.evaluate(async () => {
      const gaps = [];
      while (window.__portfolioPlayground.inspect().ball.phase === 'windup') {
        const ball = window.__portfolioPlayground.inspect().ball;
        const email = document.querySelector('[data-hit="email"]');
        const style = getComputedStyle(email), rect = email.getBoundingClientRect();
        const matrix = new DOMMatrix(style.transform === 'none' ? undefined : style.transform);
        const h = parseFloat(style.height), w = parseFloat(style.width);
        const ox = rect.left - Math.min(0, h * matrix.b);
        const oy = rect.top + h * matrix.a - Math.min(0, w * matrix.b);
        const localY = -(ball.x - ox) * matrix.b + (ball.y - oy) * matrix.a;
        const ctx = document.createElement('canvas').getContext('2d');
        ctx.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        const m = ctx.measureText(email.textContent);
        const inset = (parseFloat(style.lineHeight) - m.fontBoundingBoxAscent - m.fontBoundingBoxDescent) / 2 + m.fontBoundingBoxAscent - m.actualBoundingBoxAscent;
        gaps.push(Math.abs(localY + h - inset + 9));
        await new Promise(resolve => requestAnimationFrame(resolve));
      }
      return { samples: gaps.length, maxGap: Math.max(...gaps) };
    });
    assert.ok(contact.samples > 3 && contact.maxGap < 2, `catapult contact: ${JSON.stringify(contact)}`);
    pass(`${viewport.width}: ball stays attached to the tilting email surface`);
    await page.getByRole('button', { name: 'Replay ball animation' }).click();
    await page.waitForFunction(() => window.__portfolioPlayground.inspect().ball.phase === 'windup');
    await page.setViewportSize({ width: viewport.width - 20, height: viewport.height - 20 });
    await page.waitForFunction(expected => window.__portfolioPlayground.inspect().width === expected, viewport.width - 20);
    assert.ok(['free', 'rest'].includes((await state(page)).ball.phase));
    assert.equal(await page.locator('[data-hit="email"]').evaluate(el => el.style.transform), '');
    assert.equal(await page.locator('[data-hit].dim').count(), 0);
    pass(`${viewport.width}: resize during catapult`);

    await page.getByRole('button', { name: 'Replay ball animation' }).click();
    await page.waitForFunction(() => window.__portfolioPlayground.inspect().ball.phase === 'flight');
    await page.getByRole('link', { name: 'Experience', exact: true }).click();
    await page.waitForTimeout(700);
    assert.equal(await page.locator('[data-hit].dim').count(), 0);
    assert.equal(await page.locator('section:not([inert])').count(), 1);
    assert.ok(['free', 'rest'].includes((await state(page)).ball.phase));
    assert.equal(errors.length, 0, errors.join('\n'));
    pass(`${viewport.width}: navigation interrupts safely, no page errors`);
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce', isMobile: true, hasTouch: true }); contexts.push(context);
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000/');
  await page.waitForFunction(() => window.__portfolioPlayground);
  await page.waitForTimeout(800);
  assert.equal((await state(page)).ball.enabled, false);
  assert.equal(await page.locator('[data-hit].dim').count(), 0);
  assert.equal(await page.getByRole('button', { name: 'Stop animation' }).count(), 0);
  pass('reduced motion: no intro or robot controls');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.getByRole('button', { name: 'Replay ball animation' }).tap();
  await page.waitForFunction(() => window.__portfolioPlayground.inspect().ball.phase === 'flight');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(150);
  await page.waitForFunction(() => !window.__portfolioPlayground.inspect().ball.enabled);
  assert.equal(await page.locator('[data-hit].dim').count(), 0);
  pass('changing reduced-motion preference mid-flight cancels cleanly');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.waitForFunction(() => window.__portfolioPlayground.inspect().ball.enabled);
  const touch = await context.newCDPSession(page);
  const ready = (await state(page)).ball;
  await touch.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: ready.x, y: ready.y, id: 1 }] });
  assert.equal((await state(page)).ball.phase, 'held');
  await touch.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 190, y: 450, id: 1 }] });
  await page.waitForTimeout(150);
  await touch.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  assert.ok(Math.abs((await state(page)).ball.vx) < 1);
  assert.equal(await page.evaluate(() => window.scrollY), 0);
  pass('touch: grab, drag and drop without scrolling the page');
  await context.close();
  console.log(`${checks} browser checks passed.`);
} finally {
  for (const context of contexts) await context.close().catch(() => {});
  await browser.close();
}
