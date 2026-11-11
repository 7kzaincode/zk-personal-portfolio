
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
