
import React from 'react';
import { NAME, SOCIAL_LINKS } from '../constants';
import TypingText from './TypingText';

interface HeroProps {
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'linkedin':
        return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
      case 'github':
        return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>;
      case 'mail':
        return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>;
      case 'twitter':
        return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
      case 'resume':
        return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2z" /></svg>;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">

      {/* Elegant grid pattern background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-neutral-950/50 dark:to-neutral-950"></div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-current opacity-5"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-current opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-current opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-current opacity-5"></div>
      </div>

      {/* Subtle watermark */}
      <div className="absolute inset-0 z-[1] pointer-events-none select-none flex items-center justify-center overflow-hidden">
        <div className="serif text-[25vw] font-black tracking-tighter lowercase leading-none opacity-[0.02] dark:opacity-[0.03]">
          {NAME.split(' ')[0]}
        </div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center">
          {NAME.split(' ').map((part, i) => (
            <h1
              key={i}
              className={`text-[24vw] md:text-[16rem] font-normal serif tracking-tighter leading-[0.85] select-none lowercase transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {part}
            </h1>
          ))}
        </div>

        <div className={`mt-6 mb-24 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <TypingText start={isLoaded} />
        </div>

        {/* Social icons */}
        <div className={`flex justify-center gap-6 items-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-900 dark:hover:border-neutral-100 hover:scale-110 transition-transform duration-200"
              aria-label={link.label}
            >
              {getIcon(link.label)}
            </a>
          ))}
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-16 bg-current"></div>
        <div className="w-1.5 h-1.5 rotate-45 border border-current"></div>
      </div>
    </div>
  );
};

export default Hero;
