import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const SITE = 'https://zainkhan.dev';

/* Link previews are made by robots that do not run scripts, so each letter
   gets its own copy of index.html at dist/<slug>/index.html with its title,
   description and picture (public/og/<slug>.png, if it exists) written in. */
const outreachPages = (): Plugin => ({
  name: 'outreach-pages',
  apply: 'build',
  closeBundle() {
    const dist = path.resolve(__dirname, 'dist');
    const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
    const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    for (const file of fs.readdirSync(path.resolve(__dirname, 'outreach'))) {
      if (!file.endsWith('.ts')) continue;
      const slug = file.slice(0, -3);
      const src = fs.readFileSync(path.resolve(__dirname, 'outreach', file), 'utf8');
      const field = (name: string) => {
        const m = src.match(new RegExp(`\\b${name}:\\s*("(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')`));
        return m ? (new Function(`return ${m[1]}`)() as string) : '';
      };
      const title = esc(`for ${field('to')}, from Zain Khan`);
      const subject = esc(field('subject'));
      const hasCard = fs.existsSync(path.resolve(__dirname, 'public/og', `${slug}.png`));
      const tags = [
        `<meta name="robots" content="noindex" />`,
        `<meta name="description" content="${subject}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:url" content="${SITE}/${slug}" />`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${subject}" />`,
        ...(hasCard
          ? [
              `<meta property="og:image" content="${SITE}/og/${slug}.png" />`,
              `<meta property="og:image:width" content="1200" />`,
              `<meta property="og:image:height" content="630" />`,
              `<meta name="twitter:card" content="summary_large_image" />`,
              `<meta name="twitter:image" content="${SITE}/og/${slug}.png" />`,
            ]
          : []),
      ].join('\n  ');
      const page = html
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace('</head>', `  ${tags}\n</head>`);
      fs.mkdirSync(path.join(dist, slug), { recursive: true });
      fs.writeFileSync(path.join(dist, slug, 'index.html'), page);
    }
  },
});

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), outreachPages()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
