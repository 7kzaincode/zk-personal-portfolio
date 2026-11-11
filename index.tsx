
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import type { OutreachLetter } from './components/OutreachPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

/* zainkhan.dev/<slug> shows the letter in outreach/<slug>.ts. Each letter is
   its own lazy chunk, so the home page never downloads them. Any path without
   a letter is just the home page. */
const params = new URLSearchParams(window.location.search);

/* Page views (Vercel Web Analytics) show when someone opened their letter.
   Visiting any page once with ?me marks this browser as mine, and from then on
   it is never counted; ?me=0 undoes it. Link-preview robots do not run
   scripts, so they are not counted either. */
const isMine = () => {
  try {
    if (params.has('me')) {
      if (params.get('me') === '0') localStorage.removeItem('zk-me');
      else localStorage.setItem('zk-me', '1');
      const off = localStorage.getItem('zk-me') === '1';
      const note = document.createElement('div');
      note.textContent = off ? "this browser's visits are no longer counted" : "this browser's visits are counted again";
      note.style.cssText =
        'position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:99;padding:8px 14px;border-radius:4px;background:#1b1b1b;color:#FBF8F1;font:12px Inter,system-ui,sans-serif';
      document.body.appendChild(note);
      window.setTimeout(() => note.remove(), 4000);
      window.history.replaceState(null, '', window.location.pathname);
    }
    return localStorage.getItem('zk-me') === '1';
  } catch {
    return false;
  }
};
if (!isMine() && import.meta.env.PROD && !params.has('card')) {
  const w = window as unknown as { va?: (...args: unknown[]) => void; vaq?: unknown[] };
  w.va = w.va || ((...args: unknown[]) => (w.vaq = w.vaq || []).push(args));
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  document.head.appendChild(script);
}

const letters = import.meta.glob<{ default: OutreachLetter }>('./outreach/*.ts');
const slug = decodeURIComponent(window.location.pathname)
  .replace(/^\/+|\/+$/g, '')
  .toLowerCase();
const loadLetter = /^[a-z0-9-]+$/.test(slug) ? letters[`./outreach/${slug}.ts`] : undefined;

const renderHome = () =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

if (loadLetter) {
  Promise.all([loadLetter(), import('./components/OutreachPage')])
    .then(([letter, page]) => {
      const OutreachPage = page.default;
      root.render(
        <React.StrictMode>
          {params.has('card') ? (
            <page.OutreachCard letter={letter.default} slug={slug} />
          ) : (
            <OutreachPage letter={letter.default} />
          )}
        </React.StrictMode>
      );
    })
    .catch(renderHome);
} else {
  renderHome();
}
