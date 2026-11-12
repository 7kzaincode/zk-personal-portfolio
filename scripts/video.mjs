// Turns a raw recording into the video for someone's page:
//   npm run video -- <slug> <path to recording>
// It cuts Zain out of his background (Apple's Vision framework, on this Mac),
// puts him on the site's page colour, compresses the result to
// public/video/<slug>.mp4 and switches that person's letter to use it.
// Needs macOS, Xcode's command line tools (swiftc) and ffmpeg.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const [slug, input] = process.argv.slice(2);
if (!slug || !input) throw new Error('usage: npm run video -- <slug> <path to recording>');
const letter = `outreach/${slug}.ts`;
if (!existsSync(letter)) throw new Error(`no ${letter}`);
if (!existsSync(input)) throw new Error(`no file at ${input}`);

const run = (cmd, args) => execFileSync(cmd, args, { stdio: ['ignore', 'pipe', 'inherit'] }).toString();
const FPS = 24;
const SIDE = 960; // longest side of the finished video, in pixels

// the cut-out tool is compiled once and reused until its source changes
const bin = 'node_modules/.cache/cutout';
if (!existsSync(bin) || statSync(bin).mtimeMs < statSync('scripts/cutout.swift').mtimeMs) {
  console.log('compiling the cut-out tool (first run only)...');
  mkdirSync(path.dirname(bin), { recursive: true });
  run('swiftc', ['-O', '-o', bin, 'scripts/cutout.swift']);
}

const work = mkdtempSync(path.join(tmpdir(), 'outreach-video-'));
const frames = path.join(work, 'in');
const cut = path.join(work, 'out');
mkdirSync(frames);
mkdirSync(cut);
try {
  console.log('1/3 reading the recording...');
  run('ffmpeg', [
    '-loglevel', 'error', '-y', '-i', input,
    '-vf', `fps=${FPS},scale='if(gt(iw,ih),${SIDE},-2)':'if(gt(iw,ih),-2,${SIDE})'`,
    path.join(frames, 'f%05d.png'),
  ]);

  console.log('2/3 cutting you out of the background (a few minutes per minute of video)...');
  console.log('    ' + run(bin, [frames, cut]).trim());

  console.log('3/3 compressing...');
  mkdirSync('public/video', { recursive: true });
  const out = `public/video/${slug}.mp4`;
  run('ffmpeg', [
    '-loglevel', 'error', '-y',
    '-framerate', String(FPS), '-i', path.join(cut, 'f%05d.png'),
    '-i', input,
    '-map', '0:v:0', '-map', '1:a:0?',
    '-vf', 'scale=in_range=full:out_range=tv:out_color_matrix=bt709,format=yuv420p',
    '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '23',
    '-c:a', 'aac', '-b:a', '96k', '-ac', '1',
    '-shortest', '-movflags', '+faststart',
    out,
  ]);

  // point the letter at it
  let src = readFileSync(letter, 'utf8').replace(/\n  (video|cutout): .*,/g, '');
  src = src.replace(/(\n  greeting: .*,)/, `$1\n  video: "/video/${slug}.mp4",\n  cutout: true,`);
  if (!src.includes(`video: "/video/${slug}.mp4"`)) throw new Error(`could not add the video to ${letter}`);
  writeFileSync(letter, src);

  const mb = (statSync(out).size / 1e6).toFixed(1);
  console.log(`done: ${out} (${mb} MB), and ${letter} now uses it.`);
  console.log(`check it at http://localhost:3000/${slug} before pushing.`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
