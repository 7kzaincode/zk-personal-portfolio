// Turns a raw recording into the video for someone's page:
//   npm run video -- <slug> <path to recording> [seconds to keep]
// It cuts Zain out of his background (Apple's Vision framework, on this Mac),
// puts him on the site's page colour, compresses the result to
// public/video/<slug>.mp4 and switches that person's letter to use it.
// Frames are streamed between the steps, so it needs almost no free disk.
// Needs macOS, Xcode's command line tools (swiftc) and ffmpeg.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const [slug, input, keep] = process.argv.slice(2);
if (!slug || !input) throw new Error('usage: npm run video -- <slug> <path to recording> [seconds to keep]');
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

// the size the frames will be once scaled (ffprobe reports a phone video's
// rotation separately, so swap the sides when it is on its side)
const probe = JSON.parse(
  run('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height:stream_side_data=rotation', '-of', 'json', input])
).streams[0];
const turned = Math.abs(probe.side_data_list?.[0]?.rotation ?? 0) % 180 === 90;
const [srcW, srcH] = turned ? [probe.height, probe.width] : [probe.width, probe.height];
const scale = SIDE / Math.max(srcW, srcH);
const even = (n) => Math.max(2, Math.round((n * scale) / 2) * 2);
const [w, h] = [even(srcW), even(srcH)];

mkdirSync('public/video', { recursive: true });
const out = `public/video/${slug}.mp4`;
const q = (s) => `'${String(s).replace(/'/g, `'\\''`)}'`;
const limit = keep ? `-t ${Number(keep)}` : '';
console.log(`cutting you out of the background at ${w}x${h} (a few minutes per minute of video)...`);
execFileSync(
  'sh',
  [
    '-c',
    `set -o pipefail; ` +
      `ffmpeg -loglevel error -i ${q(input)} ${limit} -vf fps=${FPS},scale=${w}:${h} -f rawvideo -pix_fmt rgba - | ` +
      `${q(bin)} ${w} ${h} | ` +
      `ffmpeg -loglevel error -y -f rawvideo -pix_fmt rgba -s ${w}x${h} -framerate ${FPS} -i - ${limit} -i ${q(input)} ` +
      `-map 0:v:0 -map '1:a:0?' ` +
      `-vf scale=in_range=full:out_range=tv:out_color_matrix=bt709,format=yuv420p ` +
      `-colorspace bt709 -color_primaries bt709 -color_trc bt709 -color_range tv ` +
      // a laptop mic records far too quietly: clean it up and bring it to normal web volume
      `-af highpass=f=70,afftdn=nr=10:nf=-45,loudnorm=I=-16:TP=-1.5:LRA=11,aresample=44100 ` +
      `-c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k -ac 1 -shortest -movflags +faststart ${q(out)}`,
  ],
  { stdio: 'inherit', shell: false }
);

// point the letter at it
let src = readFileSync(letter, 'utf8').replace(/\n  (video|cutout): .*,/g, '');
src = src.replace(/(\n  greeting: .*,)/, `$1\n  video: "/video/${slug}.mp4",\n  cutout: true,`);
if (!src.includes(`video: "/video/${slug}.mp4"`)) throw new Error(`could not add the video to ${letter}`);
writeFileSync(letter, src);

// what he actually said, and when: the page text and its timings come from this
const stt = 'node_modules/.cache/stt';
try {
  if (!existsSync(`${stt}/bin/python`)) {
    console.log('setting up speech-to-text (first run only, downloads about 600 MB)...');
    run('python3', ['-m', 'venv', '--system-site-packages', stt]);
    run(`${stt}/bin/pip`, ['install', '-q', 'openai-whisper']);
  }
  mkdirSync('node_modules/.cache/transcripts', { recursive: true });
  const words = `node_modules/.cache/transcripts/${slug}.json`;
  console.log('\nwhat you said (the second each phrase starts):\n');
  console.log(execFileSync(`${stt}/bin/python`, ['scripts/transcribe.py', out, words], { stdio: ['ignore', 'pipe', 'ignore'] }).toString());
  console.log(`word-by-word timings: ${words}`);
  console.log(`now make the text in ${letter} match this, and set its cues.\n`);
} catch (e) {
  console.log(`(could not transcribe: ${String(e.message).split('\n')[0]}. the video itself is fine.)`);
}

const mb = (statSync(out).size / 1e6).toFixed(1);
console.log(`done: ${out} (${mb} MB), and ${letter} now uses it.`);
console.log(`check it at http://localhost:3000/${slug} before pushing.`);
