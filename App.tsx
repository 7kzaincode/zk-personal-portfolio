import React from 'react';
import PortfolioPlayground from './components/PortfolioPlayground';
import { EXPERIENCES, PROJECTS, SOCIAL_LINKS, Experience, DetailedProject } from './constants';

const SOCIAL_LABELS: Record<string, string> = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  mail: 'Email',
  twitter: 'X',
  resume: 'Resume',
};
const socialLabel = (label: string) =>
  SOCIAL_LABELS[label] ?? label.charAt(0).toUpperCase() + label.slice(1);

const LINK = 'text-[#B4532A] hover:underline underline-offset-2 decoration-1';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* The ball lights these words on its way in. They must render already dim on
   the very first paint: dimming them later from the intro (which waits on
   fonts) paints them orange for a beat and then fades them - the flash. With
   reduced motion the intro never runs, so they render lit. */
const START_DIM =
  typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const HIT_LINK = `${LINK}${START_DIM ? ' dim' : ''}`;
const TRACK = 0.5;
const trackPx = () => window.innerHeight * TRACK;

/* ------------------------------------------------------------------ content */

const ExpItem: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div>
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-[#1b1b1b]" style={{ fontWeight: 600 }}>
        {exp.role}
      </span>
      <span className="font-sans text-[12px] text-[#a8a199] whitespace-nowrap">{exp.period}</span>
    </div>

    {exp.link ? (
      <a className={LINK} href={exp.link} target="_blank" rel="noreferrer">
        {exp.company}
      </a>
    ) : (
      <span>{exp.company}</span>
    )}

    <p className="text-[17px] leading-[1.6] pt-2">{exp.description}</p>
  </div>
);

/* Projects flow down two columns on desktop, so all of them share one screen.
   break-inside keeps a single project from splitting across the column gap. */
const ProjectItem: React.FC<{ project: DetailedProject }> = ({ project }) => (
  <div className="mb-7 break-inside-avoid">
    <a href={project.link} target="_blank" rel="noreferrer" className={LINK} style={{ fontWeight: 600 }}>
      {project.title}
    </a>

    {project.award && (
      <p className="font-sans text-[12px] text-[#B4532A] mt-0.5">{project.award}</p>
    )}

    <p className="text-[16px] leading-[1.55] mt-1">{project.description}</p>
    <p className="font-sans text-[12px] text-[#b3aca2] mt-1.5">
      {project.tags.slice(0, 4).join(' · ')}
    </p>
  </div>
);

const About = () => (
  <div>
    <p className="mb-5">
      I'm a Computer Engineering student at the{' '}
      <a data-hit="uw" className={HIT_LINK} href="https://uwaterloo.ca/" target="_blank" rel="noreferrer">
        University of Waterloo
      </a>
      , focused on robotics, hardware, and software for physical systems.
    </p>
    <p className="mb-5">
      I just wrapped up my co-op at{' '}
      <a data-hit="leap" className={HIT_LINK} href="https://www.leaptools.com/" target="_blank" rel="noreferrer">
        Leap Tools
      </a>
      , building bespoke apps.
    </p>
    <p className="mb-5">
      Eventually I'd like to work on{' '}
      <a
        data-hit="robots"
        className={HIT_LINK}
        href="https://en.wikipedia.org/wiki/Ultimate_Robot_Knock-out_Legend"
        target="_blank"
        rel="noreferrer"
      >
        robots
      </a>
      , ideally the kind that can hit back.
    </p>
    <p>
      You can reach me on{' '}
      <a data-hit="x" className={HIT_LINK} href="https://x.com/sevenkzain" target="_blank" rel="noreferrer">
        X
      </a>{' '}
      or{' '}
      <a data-hit="email" className={HIT_LINK} href="mailto:kn.zain@hotmail.com">
        email
      </a>
      , either works.
    </p>
  </div>
);

const SECTIONS = [
  { id: 'about', label: 'About', render: () => <About /> },
  {
    id: 'experience',
    label: 'Experience',
    render: () => (
      <div className="space-y-8">
        {EXPERIENCES.map((exp) => (
          <ExpItem key={exp.id} exp={exp} />
        ))}
      </div>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    render: () => (
      <div className="md:columns-2 md:gap-x-14">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    ),
  },
];

const App: React.FC = () => {
  const [active, setActive] = React.useState(0);

  /* The whole stage is designed against a 1440px canvas and scaled with a
     transform so any browser width sees the same proportions. transform, not
     CSS zoom: transform's getBoundingClientRect semantics are standardized
     (rects come back in visual pixels), so the ball's word-targeting agrees
     with its unscaled canvas in every browser. The wrapper is laid out at the
     perceived (unscaled) viewport size and scaled down/up from the top-left;
     the Projects glide rides in the same transform, in design pixels, and the
     CSS transition on .stage-scale animates both. */
  React.useEffect(() => {
    const el = document.querySelector<HTMLElement>('.stage-scale');
    if (!el) return;
    const apply = () => {
      if (window.innerWidth < 768) {
        el.style.width = '';
        el.style.height = '';
        el.style.transform = '';
        el.style.transformOrigin = '';
        return;
      }
      // Dampened: the stage grows at about half the viewport's rate, so a big
      // monitor gets comfortably larger type rather than accessibility-mode
      // type. 2560px wide lands near 1.43x instead of a linear 1.78x.
      const k = Math.min(1.5, Math.max(0.92, 1 + (window.innerWidth / 1440 - 1) * 0.55));
      el.style.width = `${window.innerWidth / k}px`;
      el.style.height = `${window.innerHeight / k}px`;
      el.style.transformOrigin = 'top left';
      el.style.transform = `scale(${k}) translateX(${active === 2 ? -127 : 0}px)`;
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, [active]);

  /* A refresh should always land on About. Browsers otherwise restore the old
     scroll position, which here means reopening on whichever section you left. */
  React.useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  /* A 1px line across the middle of the viewport. Whichever scroll track crosses
     it owns the screen. No scroll handler, no layout reads, and because the
     content is fixed, nothing on screen ever moves. */
  React.useEffect(() => {
    const tracks = Array.from(document.querySelectorAll<HTMLElement>('[data-track]'));
    if (!tracks.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute('data-track')));
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    tracks.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const jumpTo = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    window.scrollTo({
      top: i * trackPx(),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  const pad = `${((1 - TRACK) / 2) * 100}vh`;
  const track = `${TRACK * 100}vh`;

  return (
    <div className="bg-[#FBF8F1] text-[#57534c]">
      <PortfolioPlayground />

      {/* ----------  The stage: fixed, so nothing here ever moves  ---------- */}
      <div className="reveal fixed inset-0 z-10 pointer-events-none">
        <div className="stage-scale h-full">
          <div className="h-full max-w-4xl mx-auto px-6 md:px-10 grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-[180px_1fr] gap-6 md:gap-20 pt-16 md:pt-0">

          <aside className="pointer-events-auto md:self-center space-y-6">
            <h1 className="font-serif text-[#1b1b1b] text-[28px] leading-none w-fit" style={{ fontWeight: 600 }}>
              Zain Khan
            </h1>

            <nav className="flex md:flex-col gap-5 md:gap-2 font-sans text-[13px]">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => jumpTo(e, i)}
                  className={`transition-colors w-fit ${
                    active === i ? 'text-[#B4532A]' : 'text-[#57534c] hover:text-[#B4532A]'
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap md:flex-col gap-x-4 gap-y-1 font-sans text-[12px] md:pt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#a8a199] hover:text-[#B4532A] transition-colors w-fit"
                >
                  {socialLabel(s.label)}
                </a>
              ))}
            </div>
          </aside>

          {/* Every section occupies the same box. Only opacity changes. */}
          <div className="relative min-h-0">
            {SECTIONS.map((s, i) => {
              const on = active === i;
              return (
                <section
                  key={s.id}
                  aria-hidden={!on}
                  inert={!on}
                  className={`stage-section absolute inset-0 flex flex-col overflow-y-auto font-serif text-[19px] leading-[1.6] ${
                    s.id === 'projects' ? 'md:w-[810px]' : ''
                  } ${on ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  style={{
                    opacity: on ? 1 : 0,
                    // the outgoing text clears out before the incoming text arrives,
                    // so the two never sit on top of each other half-lit
                    transition: on
                      ? 'opacity 190ms cubic-bezier(.2,.6,.2,1) 110ms'
                      : 'opacity 110ms cubic-bezier(.2,.6,.2,1)',
                  }}
                >
                  {s.render()}
                </section>
              );
            })}
          </div>
          </div>
        </div>
      </div>

      {/* ----------  Scroll tracks: invisible, they only give the page length  ---------- */}
      <div style={{ height: pad }} aria-hidden="true" />
      {SECTIONS.map((s, i) => (
        <div key={s.id} id={s.id} data-track={i} style={{ height: track }} aria-hidden="true" />
      ))}
      <div style={{ height: pad }} aria-hidden="true" />
    </div>
  );
};

export default App;
