
import React from 'react';
import { ARTWORK } from '../constants';

const ArtCarousel: React.FC = () => {
  return (
    <section className="py-32 overflow-hidden">
      <div className="px-8 md:px-24 mb-16 flex flex-col items-center text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] opacity-40 mb-6">Visual Context</h2>
        <div className="serif text-4xl md:text-6xl italic">Aesthetica.</div>
        <p className="mt-6 text-[10px] uppercase tracking-widest opacity-40 max-w-sm">Curated collection of visual textures and structures that inform my engineering logic.</p>
      </div>

      <div className="flex gap-12 animate-scroll whitespace-nowrap px-8">
        {[...ARTWORK, ...ARTWORK].map((src, i) => (
          <div 
            key={i} 
            className="inline-block w-[300px] md:w-[450px] aspect-[3/4] flex-shrink-0 group relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <img 
              src={src} 
              alt={`Art ${i}`} 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-[10px] uppercase tracking-[0.3em] font-light">Pinterest / Inspo</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ArtCarousel;
