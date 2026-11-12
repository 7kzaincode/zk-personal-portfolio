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
  /** Typed out in order: as the reader scrolls, or in time with the video. */
  paragraphs: string[];
  /** Defaults to ['Thank you.', 'Zain']. */
  signoff?: string[];
  /** A recording of Zain saying the letter: a YouTube link (unlisted is
      fine), e.g. 'https://youtu.be/abc123', or a file like
      '/video/giliat.mp4'. When set, the video sits on the right and the text
      is typed as he speaks; scrolling no longer drives anything. */
  video?: string;
  /** True when the recording has had its background replaced with the page
      colour (see scripts/cutout). The player then has no frame, so he seems
      to be standing on the page. Only for a video file, not YouTube. */
  cutout?: boolean;
  /** Optional: the second at which each line (greeting first, then each
      paragraph, then the sign-off lines) starts being spoken. Without it the
      text is spread evenly over the video's length. */
  cues?: number[];
  /** Optional line after the sign-off. */
  ps?: string;
}

const CALENDLY = 'https://calendly.com/zain-zainkhan';

/* The 11-character id out of any of YouTube's link shapes, or null if the
   video is not on YouTube. */
const youtubeId = (src?: string) =>
  src?.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/)?.[1] ??
  null;

/* What the typing needs to know about whichever player is in use. */
type Clock = { time: () => number; duration: () => number; ended: () => boolean };

/* YouTube's player script, loaded once, on the first page that needs it. */
let youtubeApi: Promise<any> | null = null;
const loadYoutube = () =>
  (youtubeApi ??= new Promise((resolve) => {
    const w = window as any;
    if (w.YT?.Player) return resolve(w.YT);
    const earlier = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      earlier?.();
      resolve(w.YT);
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  }));

const LINK = 'text-[#B4532A] hover:underline underline-offset-2 decoration-1';
const url = (label: string) => SOCIAL_LINKS.find((s) => s.label === label)?.url ?? '#';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* The typing happens on a line across the screen. Text above it has been
   written; text below it has not. The line starts this far down and glides to
   the bottom edge as the page scrolls, so the last word lands exactly when
   the page runs out: there is nothing to scroll past the end of the letter. */
const WRITE_LINE = 0.55;

type Seg = { text: string; href?: string; note?: string };
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
        if (seg.note) {
          /* The name, on a page with a video: he has said it out loud, so it
             carries a small apology in case he said it wrong. */
          return (
            <span key={i} className={cut[i] === seg.text.length ? 'name-note' : ''} tabIndex={cut[i] === seg.text.length ? 0 : -1}>
              {inner}
              {cut[i] === seg.text.length && <span className="name-tip" role="tooltip">{seg.note}</span>}
            </span>
          );
        }
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

/* The picture a link preview shows (LinkedIn, iMessage, Slack). Rendered at
   /<slug>?card and photographed by `npm run og -- <slug>`. */
export const OutreachCard: React.FC<{ letter: OutreachLetter; slug: string }> = ({ letter, slug }) => (
  <div className="fixed left-0 top-0 w-[1200px] h-[630px] bg-[#FBF8F1] text-[#57534c] px-[80px] pt-[56px] flex flex-col">
    <div className="font-sans text-[30px] leading-[1.6] pb-7 border-b-2 border-[#e9e3d6]">
      {[
        ['from', 'Zain Khan'],
        ['to', letter.to],
      ].map(([k, v]) => (
        <div key={k} className="flex gap-8">
          <span className="w-20 text-[#a8a199]">{k}</span>
          <span>{v}</span>
        </div>
      ))}
    </div>
    <p className="font-serif text-[#1b1b1b] text-[80px] leading-[1.12] mt-9 max-w-[1040px]" style={{ fontWeight: 500 }}>
      {letter.subject}
      <span className="inline-block w-[4px] h-[0.9em] ml-2 bg-[#B4532A] align-baseline translate-y-[0.1em]" />
    </p>
    <div className="mt-auto pb-[52px] flex items-center justify-between font-sans text-[32px]">
      <span className="text-[#B4532A]">zainkhan.dev/{slug}</span>
      <span className="w-[36px] h-[36px] rounded-full bg-[#B4532A]" />
    </div>
  </div>
);

/* A recording whose background is already the page colour. With no frame, no
   controls bar and its edges faded out, the rectangle disappears and he is
   simply there on the page. Click him to play or pause. */
const Cutout: React.FC<{ src: string; videoRef: React.RefObject<HTMLVideoElement | null> }> = ({ src, videoRef }) => {
  const [playing, setPlaying] = React.useState(false);
  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };
  const fade =
    'linear-gradient(to right, transparent, #000 7%, #000 93%, transparent), linear-gradient(to bottom, transparent, #000 6%, #000 88%, transparent)';
  return (
    <div className="relative max-w-[640px]">
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="auto"
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="block w-full cursor-pointer"
        style={{ WebkitMaskImage: fade, maskImage: fade, WebkitMaskComposite: 'source-in', maskComposite: 'intersect' }}
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute left-1/2 bottom-2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-[#1b1b1b] text-[#FBF8F1] font-sans text-[12px] hover:bg-[#B4532A] transition-all duration-300"
        style={{ opacity: playing ? 0 : 1, pointerEvents: playing ? 'none' : 'auto' }}
      >
        ▶ play
      </button>
    </div>
  );
};

const OutreachPage: React.FC<{ letter: OutreachLetter }> = ({ letter }) => {
  const signoff = letter.signoff ?? ['Thank you.', 'Zain'];

  /* Every typed line, in reading order. */
  const lines = React.useMemo(() => {
    const all = [
      { kind: 'p', text: letter.greeting },
      ...letter.paragraphs.map((text) => ({ kind: 'p', text })),
      ...signoff.map((text, i) => ({ kind: i === 0 ? 'sign-first' : 'sign', text })),
      ...(letter.ps ? [{ kind: 'ps', text: letter.ps }] : []),
    ];
    let start = 0;
    return all.map((l, i) => {
      let segs = parse(l.text);
      const at = l.text.indexOf(letter.to);
      if (i === 0 && letter.video && at >= 0) {
        segs = [
          { text: l.text.slice(0, at) },
          {
            text: letter.to,
            note: letter.to.includes(' and ') ? 'sorry if I said your names wrong' : 'sorry if I said your name wrong',
          },
          { text: l.text.slice(at + letter.to.length) },
        ].filter((seg) => seg.text);
      }
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
  const endRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const youtubeRef = React.useRef<HTMLDivElement>(null);
  const clock = React.useRef<Clock | null>(null);
  const yt = youtubeId(letter.video);
  const done = typed >= total;

  /* Either player ends up behind the same three questions: what time is it,
     how long is it, and has it finished. */
  React.useEffect(() => {
    if (!letter.video) return;
    if (!yt) {
      const v = videoRef.current;
      if (v) clock.current = { time: () => v.currentTime, duration: () => v.duration || 0, ended: () => v.ended };
      return;
    }
    let player: any;
    let gone = false;
    loadYoutube().then((YT) => {
      const box = youtubeRef.current;
      if (gone || !box) return;
      // YouTube swaps the element it is given for its own iframe, so hand it
      // one React does not own
      const mount = document.createElement('div');
      box.replaceChildren(mount);
      player = new YT.Player(mount, {
        videoId: yt,
        width: '100%',
        height: '100%',
        host: 'https://www.youtube-nocookie.com',
        playerVars: { rel: 0, playsinline: 1 },
        events: {
          onReady: () => {
            clock.current = {
              time: () => player.getCurrentTime?.() ?? 0,
              duration: () => player.getDuration?.() ?? 0,
              ended: () => player.getPlayerState?.() === 0,
            };
          },
        },
      });
    });
    return () => {
      gone = true;
      clock.current = null;
      player?.destroy?.();
      youtubeRef.current?.replaceChildren();
    };
  }, [letter.video, yt]);

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

    /* With a video, the text keeps time with the speaker instead: each line
       is typed across the seconds it is spoken in. */
    const fromVideo = () => {
      const c = clock.current;
      const duration = c?.duration() ?? 0;
      if (!c || !duration) return;
      if (c.ended()) return void (target.current = total);
      const t = c.time();
      const cues = letter.cues;
      let n = 0;
      if (cues?.length) {
        lines.forEach((line, i) => {
          const from = cues[i] ?? duration;
          const to = cues[i + 1] ?? duration;
          n += Math.round(line.len * Math.max(0, Math.min(1, (t - from) / Math.max(0.2, to - from))));
        });
      } else {
        n = Math.round(total * Math.min(1, t / (duration * 0.97)));
      }
      target.current = Math.max(target.current, n);
    };

    const measure = () => {
      if (letter.video) return fromVideo();
      // typing ends when the end of the letter reaches the bottom of the
      // screen; what sits below it (the calendar) is just more page
      const end = endRef.current;
      const max = end
        ? end.getBoundingClientRect().bottom + window.scrollY + 56 - window.innerHeight
        : document.documentElement.scrollHeight - window.innerHeight;
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
      if (letter.video) fromVideo();
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
  }, [lines, total, letter.video, letter.cues]);

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
        .name-note { position: relative; cursor: help; border-bottom: 1px dotted #B4532A; outline: none; }
        .name-tip {
          position: absolute; left: 0; top: calc(100% + 6px); z-index: 5; white-space: nowrap;
          padding: 5px 9px; border-radius: 4px; background: #1b1b1b; color: #FBF8F1;
          font: 12px Inter, system-ui, sans-serif; opacity: 0; pointer-events: none;
          transform: translateY(-3px); transition: opacity .18s, transform .18s;
        }
        .name-note:hover .name-tip, .name-note:focus .name-tip { opacity: 1; transform: none; }
      `}</style>

      <div className={letter.video ? 'flex flex-col-reverse lg:flex-row lg:items-start' : ''}>
      <main
        className={`w-full max-w-[660px] px-6 md:px-14 pt-10 md:pt-14 font-serif text-[18px] md:text-[19px] leading-[1.6] ${
          letter.video ? 'lg:w-[54%] lg:shrink-0' : ''
        }`}
      >
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
          ref={endRef}
          className="mt-7 pt-4 border-t border-[#e9e3d6] flex flex-wrap gap-x-5 gap-y-1 font-sans text-[13px] transition-opacity duration-700"
          style={{ opacity: done ? 1 : 0, pointerEvents: done ? 'auto' : 'none' }}
          inert={!done}
        >
          <a className={LINK} href={mailto}>Reply by email</a>
          <a className={LINK} href={url('resume')} target="_blank" rel="noreferrer">Resume</a>
          <a className={LINK} href={url('linkedin')} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className={LINK} href="/">The rest of my site</a>
        </div>

        {/* Booking a time should take no more than scrolling a little further. */}
        <div
          className="mt-10 transition-opacity duration-700"
          style={{ opacity: done ? 1 : 0, pointerEvents: done ? 'auto' : 'none' }}
          inert={!done}
        >
          <p className="font-sans text-[12px] text-[#a8a199] mb-3">book a time</p>
          {done && (
            <iframe
              title="Book a time with Zain"
              src={`${CALENDLY}?hide_gdpr_banner=1&background_color=fbf8f1&text_color=57534c&primary_color=b4532a`}
              className="w-full h-[720px] border border-[#e9e3d6] rounded-[6px] bg-[#FBF8F1]"
              loading="lazy"
            />
          )}
          <a className={`${LINK} font-sans text-[13px] inline-block mt-3`} href={CALENDLY} target="_blank" rel="noreferrer">
            or open the calendar in a new tab
          </a>
        </div>

        <div className="h-14 md:h-16" aria-hidden="true" />
      </main>

      {letter.video && (
        <aside className="lg:sticky lg:top-0 lg:flex-1 min-w-0 px-6 md:px-14 lg:pl-0 pt-10 md:pt-14">
          {yt ? (
            <div className="w-full max-w-[640px] aspect-video rounded-[6px] overflow-hidden bg-[#efe9dc]">
              <div ref={youtubeRef} className="w-full h-full" />
            </div>
          ) : letter.cutout ? (
            <Cutout src={letter.video} videoRef={videoRef} />
          ) : (
            <video
              ref={videoRef}
              src={letter.video}
              controls
              playsInline
              preload="metadata"
              className="w-full max-w-[640px] rounded-[6px] bg-[#efe9dc]"
            />
          )}
          {!done && (
            <button
              type="button"
              onClick={() => (target.current = total)}
              className="mt-2 font-sans text-[11px] text-[#a8a199] hover:text-[#B4532A]"
            >
              or just read it
            </button>
          )}
        </aside>
      )}
      </div>

      <button
        type="button"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.4, behavior: 'smooth' })}
        aria-hidden={done || !!letter.video}
        tabIndex={done ? -1 : 0}
        hidden={!!letter.video}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 px-3 py-2 font-sans text-[11px] text-[#a8a199] hover:text-[#B4532A] transition-opacity duration-500"
        style={{ opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'auto' }}
      >
        keep scrolling <span aria-hidden="true">↓</span>
      </button>
    </div>
  );
};

export default OutreachPage;
