
import React from 'react';
import { ARTWORK } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 overflow-hidden bg-white dark:bg-neutral-950">
      <div className="px-8 md:px-24 mb-12 flex flex-col items-center text-center">
        <h2 className="text-[10px] uppercase tracking-[0.8em] opacity-30 mb-8 font-black">Visual Curation</h2>
        <div className="serif text-4xl md:text-8xl italic font-light tracking-tighter">Aesthetica.</div>
      </div>

      <div className="flex gap-8 animate-scroll whitespace-nowrap px-4">
        {[...ARTWORK, ...ARTWORK].map((src, i) => (
          <div
            key={i}
            className="inline-block w-[300px] md:w-[550px] aspect-[4/5] flex-shrink-0 group relative overflow-hidden transition-all duration-1000 border border-current border-opacity-5 rounded-sm bg-neutral-100 dark:bg-neutral-900"
          >
            <img
              src={src}
              alt={`Curated Visual ${i}`}
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
              <span className="text-[11px] uppercase tracking-[0.6em] font-mono bg-black/70 backdrop-blur-xl px-6 py-3">Source::Ref_0{(i % (ARTWORK.length || 1)) + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto px-8 text-center">
        <p className="text-lg md:text-xl lg:text-3xl leading-tight opacity-40 italic font-light serif max-w-2xl mx-auto">
          "Architecture and engineering are not just about structure, but about the visual rhythm they create in space."
        </p>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll {
          animation: scroll 100s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default About;
