import React from 'react';
import { SOCIAL_LINKS } from '../constants';

/* One file in /outreach per person: outreach/<slug>.ts default-exports one of
   these, and the page is live at zainkhan.dev/<slug>. Paragraphs are plain
   strings; [text](url) makes a link. */
export interface OutreachLetter {
  /** First name, as it should appear after "to". */
  to: string;
  /** Shown after "re", and used as the subject of the reply mailto. */
  subject: string;
  /** "hey Giliat," */
  greeting: string;
  /** Typed out in order as the reader scrolls. */
  paragraphs: string[];
  /** Defaults to ['Thanks', 'Zain']. */
  signoff?: string[];
  /** Optional line after the sign-off. */
  ps?: string;
}

const LINK = 'text-[#B4532A] hover:underline underline-offset-2 decoration-1';
const url = (label: string) => SOCIAL_LINKS.find((s) => s.label === label)?.url ?? '#';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* The typing happens on a line across the screen. Text above it has been
   written; text below it has not. The line starts this far down and glides to
   the bottom edge as the page scrolls, so the last word lands exactly when
   the page runs out: there is nothing to scroll past the end of the letter. */
const WRITE_LINE = 0.55;

type Seg = { text: string; href?: string };
const parse = (s: string): Seg[] =>
  s
    .split(/(\[[^\]]+\]\([^)]+\))/g)
    .filter(Boolean)
    .map((part) => {
      const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      return m ? { text: m[1], href: m[2] } : { text: part };
    });
const length = (segs: Seg[]) => segs.reduce((n, s) => n + s.text.length, 0);

const Caret = () => (
  <span className="relative inline-block w-0 align-baseline" aria-hidden="true">
    <span className="caret absolute left-[1px] bottom-[-0.12em] w-[1.5px] h-[1.05em] bg-[#B4532A]" />
  </span>
);

/* The whole line is always laid out, so nothing reflows as it is typed: the
   characters not yet written are simply invisible. */
const Typed: React.FC<{ segs: Seg[]; count: number; caret: boolean }> = ({ segs, count, caret }) => {
  let left = count;
  let caretAt = -1;
  const cut = segs.map((seg, i) => {
    const n = Math.max(0, Math.min(seg.text.length, left));
    left -= n;
    if (n > 0) caretAt = i;
    return n;
  });
  return (
    <>
      {segs.map((seg, i) => {
        const inner = (
          <>
            {seg.text.slice(0, cut[i])}
            {caret && caretAt === i && <Caret />}
            {cut[i] < seg.text.length && <span className="invisible">{seg.text.slice(cut[i])}</span>}
          </>
        );
        return seg.href ? (
          <a
            key={i}
            className={LINK}
            href={seg.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={cut[i] ? 0 : -1}
            style={{ pointerEvents: cut[i] ? 'auto' : 'none' }}
          >
            {inner}
          </a>
        ) : (
          <React.Fragment key={i}>{inner}</React.Fragment>
        );
      })}
    </>
  );
};

const OutreachPage: React.FC<{ letter: OutreachLetter }> = ({ letter }) => {
  const signoff = letter.signoff ?? ['Thanks', 'Zain'];

  /* Every typed line, in reading order. */
  const lines = React.useMemo(() => {
    const all = [
      { kind: 'p', text: letter.greeting },
      ...letter.paragraphs.map((text) => ({ kind: 'p', text })),
      ...signoff.map((text, i) => ({ kind: i === 0 ? 'sign-first' : 'sign', text })),
      ...(letter.ps ? [{ kind: 'ps', text: letter.ps }] : []),
    ];
    let start = 0;
    return all.map((l) => {
      const segs = parse(l.text);
      const len = length(segs);
      const line = { ...l, segs, len, start };
      start += len;
      return line;
    });
  }, [letter]);
  const total = lines.reduce((n, l) => n + l.len, 0);

  const [typed, setTyped] = React.useState(() => (reducedMotion() ? total : 0));
  const refs = React.useRef<(HTMLElement | null)[]>([]);
  const target = React.useRef(0);
  const done = typed >= total;

  React.useEffect(() => {
    document.title = `for ${letter.to} · Zain Khan`;
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    return () => meta.remove();
  }, [letter.to]);

  /* It is an ordinary page: scrolling moves it, and you can scroll back up.
     Scrolling also decides how much has been written, because each line is
     typed as it rises past the write line. What is written stays written. */
  React.useEffect(() => {
    if (reducedMotion()) return;
    let raf = 0;
    let last = 0;
    let carry = 0;

    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // a letter that fits on one screen has nothing to scroll: write it all
      const progress = max > 4 ? Math.min(1, window.scrollY / max) : 1;
      const y = window.innerHeight * (WRITE_LINE + (1 - WRITE_LINE) * progress);
      let n = 0;
      lines.forEach((line, i) => {
        const el = refs.current[i];
        if (!el) return;
        const r = el.getBoundingClientRect();
        n += Math.round(line.len * Math.max(0, Math.min(1, (y - r.top) / Math.max(1, r.height))));
      });
      if (progress >= 0.995) n = total;
      target.current = Math.max(target.current, n);
    };

    /* The hand chases the target at typing speed, a little faster when it has
       fallen far behind, so a hard scroll does not take a minute to catch up. */
    const tick = (now: number) => {
      const dt = Math.min(64, now - (last || now));
      last = now;
      setTyped((t) => {
        const gap = target.current - t;
        if (gap <= 0) return t;
        carry += (dt / 1000) * Math.max(90, gap * 5);
        const add = Math.floor(carry);
        carry -= add;
        return Math.min(target.current, t + add);
      });
      raf = requestAnimationFrame(tick);
    };

    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [lines, total]);

  const caretLine = lines.reduce((at, l, i) => (typed > l.start ? i : at), 0);
  const mailto = `${url('mail')}?subject=${encodeURIComponent(`re: ${letter.subject}`)}`;
  const spacing: Record<string, string> = {
    p: 'mb-4',
    'sign-first': 'mt-6',
    sign: '',
    ps: 'mt-5 text-[16px]',
  };

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#57534c]">
      <style>{`
        @keyframes caret-blink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
        .caret { animation: caret-blink 1s steps(1) infinite; }
      `}</style>

      <main className="max-w-[660px] px-6 md:px-14 pt-10 md:pt-14 font-serif text-[18px] md:text-[19px] leading-[1.6]">
        <div className="reveal font-sans text-[12px] leading-[1.9] pb-4 mb-6 border-b border-[#e9e3d6]">
          {[
            ['from', 'Zain Khan'],
            ['to', letter.to],
            ['re', letter.subject],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-4">
              <span className="w-8 shrink-0 text-[#a8a199]">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>

        {lines.map((line, i) => (
          <p
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={spacing[line.kind]}
          >
            <Typed
              segs={line.segs}
              count={Math.max(0, Math.min(line.len, typed - line.start))}
              caret={!reducedMotion() && i === caretLine && typed > 0}
            />
          </p>
        ))}

        <div
          className="mt-7 pt-4 border-t border-[#e9e3d6] flex flex-wrap gap-x-5 gap-y-1 font-sans text-[13px] transition-opacity duration-700"
          style={{ opacity: done ? 1 : 0, pointerEvents: done ? 'auto' : 'none' }}
          inert={!done}
        >
          <a className={LINK} href={mailto}>Reply by email</a>
          <a className={LINK} href={url('resume')} target="_blank" rel="noreferrer">Resume</a>
          <a className={LINK} href={url('linkedin')} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className={LINK} href="/">The rest of my site</a>
        </div>

        <div className="h-14 md:h-16" aria-hidden="true" />
      </main>

      <button
        type="button"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.4, behavior: 'smooth' })}
        aria-hidden={done}
        tabIndex={done ? -1 : 0}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 px-3 py-2 font-sans text-[11px] text-[#a8a199] hover:text-[#B4532A] transition-opacity duration-500"
        style={{ opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'auto' }}
      >
        keep scrolling <span aria-hidden="true">↓</span>
      </button>
    </div>
  );
};

export default OutreachPage;
