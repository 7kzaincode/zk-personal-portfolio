import React from 'react';
import { EXPERIENCES, PROJECTS, SOCIAL_LINKS, Experience } from './constants';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const SOCIAL_LABELS: Record<string, string> = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  mail: 'Email',
  twitter: 'X',
  resume: 'Resume',
};
const socialLabel = (label: string) =>
  SOCIAL_LABELS[label] ?? label.charAt(0).toUpperCase() + label.slice(1);

const SectionLabel: React.FC<{ num: string; label: string }> = ({ num, label }) => (
  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#b3aca2] mb-7 flex items-center gap-3">
    <span>{num}</span>
    <span className="h-px w-6 bg-[#ddd6c9]" />
    <span className="text-[#1b1b1b]">{label}</span>
  </div>
);

const ExpItem: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div>
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-[#1b1b1b]" style={{ fontWeight: 600 }}>
        {exp.role}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-[#9a948b] whitespace-nowrap">
        {exp.period}
      </span>
    </div>
    <div className="mb-2">
      {exp.link ? (
        <a
          className="text-[#B4532A] hover:underline underline-offset-2 decoration-1"
          href={exp.link}
          target="_blank"
          rel="noreferrer"
        >
          {exp.company}
        </a>
      ) : (
        <span>{exp.company}</span>
      )}
    </div>
    <p className="text-[17px] leading-[1.6]">{exp.description}</p>
  </div>
);

const SubLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`font-mono text-[10px] uppercase tracking-[0.2em] text-[#9a948b] mb-5 ${className}`}>{children}</p>
);

const App: React.FC = () => {
  const [active, setActive] = React.useState('about');

  const current = EXPERIENCES.filter((e) => /present/i.test(e.period));
  const past = EXPERIENCES.filter((e) => !/present/i.test(e.period));

  React.useEffect(() => {
    const ids = ['about', 'experience', 'projects'];
    const onScroll = () => {
      const line = window.innerHeight * 0.3; // detection line, 30% down the viewport
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#57534c]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 pt-16 md:pt-28 pb-10 grid md:grid-cols-[180px_1fr] gap-12 md:gap-20">

        {/* ----------  Sidebar  ---------- */}
        <aside className="reveal md:sticky md:top-28 md:self-start space-y-6">
          <h1 className="font-serif text-[#1b1b1b] text-[28px] leading-none" style={{ fontWeight: 600 }}>
            Zain Khan
          </h1>

          <nav className="flex md:flex-col gap-5 md:gap-2.5 font-mono text-[12px]">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`transition-colors w-fit ${
                  active === n.id ? 'text-[#B4532A]' : 'text-[#57534c] hover:text-[#B4532A]'
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap md:flex-col gap-x-4 gap-y-1.5 font-mono text-[11px] md:pt-2">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#9a948b] hover:text-[#B4532A] transition-colors w-fit"
              >
                {socialLabel(s.label)}
              </a>
            ))}
          </div>
        </aside>

        {/* ----------  Content  ---------- */}
        <main className="font-serif text-[19px] leading-[1.7] space-y-16">

          {/* About */}
          <section id="about" className="reveal scroll-mt-28" style={{ animationDelay: '120ms' }}>
            <SectionLabel num="01" label="About" />
            <p className="mb-5">
              I'm a Computer Engineering student at the{' '}
              <a className="text-[#B4532A] hover:underline underline-offset-2 decoration-1" href="https://uwaterloo.ca/" target="_blank" rel="noreferrer">
                University of Waterloo
              </a>
              , focused on robotics, hardware, and software for physical systems.
            </p>
            <p className="mb-5">
              Currently, I'm building enterprise web apps at{' '}
              <a className="text-[#B4532A] hover:underline underline-offset-2 decoration-1" href="https://www.leaptools.com/" target="_blank" rel="noreferrer">
                Leap Tools
              </a>
              . At this stage I'm trying to build range: writing production software, learning how real
              systems are designed, and slowly moving closer to the kind of work where code touches the
              world instead of just living on a screen.
            </p>
            <p>
              Long term, I want to work in robotics and hardware-adjacent AI, somewhere between software,
              machines, and the real world.
            </p>
          </section>

          {/* Experience */}
          <section id="experience" className="reveal scroll-mt-28" style={{ animationDelay: '240ms' }}>
            <SectionLabel num="02" label="Experience" />

            <div className="space-y-9">
              {current.map((exp) => (
                <ExpItem key={exp.id} exp={exp} />
              ))}
            </div>

            {past.length > 0 && (
              <>
                <SubLabel className="mt-12">Previously</SubLabel>
                <div className="space-y-9">
                  {past.map((exp) => (
                    <ExpItem key={exp.id} exp={exp} />
                  ))}
                </div>
              </>
            )}
          </section>

          {/* Projects */}
          <section id="projects" className="reveal scroll-mt-28" style={{ animationDelay: '360ms' }}>
            <SectionLabel num="03" label="Projects" />
            <div className="space-y-8">
              {PROJECTS.map((project) => (
                <div key={project.id}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#B4532A] hover:underline underline-offset-2 decoration-1"
                    style={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </a>
                  {project.award && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#B4532A] font-medium mt-1.5">
                      ★ {project.award}
                    </p>
                  )}
                  <p className="text-[17px] leading-[1.6] mt-0.5">{project.description}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#b3aca2] mt-1.5">
                    {project.tags.slice(0, 4).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* Ceiling: content vanishes into the cream before it reaches the Zain Khan line.
          Mirrors the main grid so the cover sits only over the content column. */}
      <div className="hidden md:block fixed top-0 inset-x-0 z-40 pointer-events-none">
        <div className="max-w-4xl mx-auto px-10 grid grid-cols-[180px_1fr] gap-20">
          <div />
          <div className="h-32 bg-gradient-to-b from-[#FBF8F1] from-80% to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default App;
