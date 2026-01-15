
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
        return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
      case 'github':
        return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
      case 'mail':
        return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
      case 'twitter':
        return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -8.505 M20 4l-6.768 8.505"></path></svg>;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      
      {/* Moving Background Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02] dark:opacity-[0.04]">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-diag-scroll flex flex-col gap-12">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex gap-20 whitespace-nowrap">
              {Array.from({ length: 12 }).map((_, j) => (
                <span key={j} className="serif text-[4vw] font-normal tracking-tighter lowercase">
                  {NAME} · {NAME}
                </span>
              ))}
            </div>
          ))}
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

        <div className={`flex justify-center gap-6 items-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full border border-current border-opacity-10 text-current opacity-30 hover:opacity-100 hover:border-opacity-100 transition-all hover:scale-110"
              aria-label={link.label}
            >
              {getIcon(link.label)}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes diag-scroll {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-20%, -20%); }
        }
        .animate-diag-scroll {
          animation: diag-scroll 160s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
