// Photographs http://localhost:3000/<slug>?card into public/og/<slug>.png,
// the picture link previews show. Needs the dev server running (npm run dev)
// and Google Chrome installed.   usage: npm run og -- <slug>
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) throw new Error('usage: npm run og -- <slug>');
if (!existsSync(`outreach/${slug}.ts`)) throw new Error(`no outreach/${slug}.ts`);

const chrome =
  process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const out = path.resolve(`public/og/${slug}.png`);
const profile = mkdtempSync(path.join(tmpdir(), 'og-card-'));
try {
  execFileSync(
    chrome,
    [
      '--headless=new',
      `--user-data-dir=${profile}`,
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=1200,630',
      '--virtual-time-budget=6000',
      `--screenshot=${out}`,
      `http://localhost:${process.env.PORT ?? 3000}/${slug}?card`,
    ],
    { stdio: 'ignore' }
  );
} finally {
  rmSync(profile, { recursive: true, force: true });
}
console.log(`wrote ${out}`);
