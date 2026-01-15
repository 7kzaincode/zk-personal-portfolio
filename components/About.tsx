
import React, { useState } from 'react';
import { ARTWORK } from '../constants';

const About: React.FC = () => {
  // Fallback images in case local ones aren't found in the user's environment yet
  const fallbacks = [
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501472312651-726afe119ff1?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515405299444-24a1efee20ae?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547891319-184a7551c1ca?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <section id="about" className="py-32 overflow-hidden bg-white dark:bg-neutral-950">
      <div className="px-8 md:px-24 mb-20 flex flex-col items-center text-center">
        <h2 className="text-[10px] uppercase tracking-[0.8em] opacity-30 mb-8 font-black">Visual Curation</h2>
        <div className="serif text-4xl md:text-8xl italic font-light tracking-tighter">Aesthetica.</div>
      </div>

      <div className="flex gap-8 animate-scroll whitespace-nowrap px-4">
        {[...ARTWORK, ...ARTWORK].map((src, i) => {
          const [imgSrc, setImgSrc] = useState(src);
          const handleImageError = () => {
             // If local image fails, swap to a beautiful aesthetic fallback
             setImgSrc(fallbacks[i % fallbacks.length]);
          };

          return (
            <div 
              key={i} 
              className="inline-block w-[300px] md:w-[550px] aspect-[4/5] flex-shrink-0 group relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-current border-opacity-5 rounded-sm bg-neutral-100 dark:bg-neutral-900"
            >
              <img 
                src={imgSrc} 
                onError={handleImageError}
                alt={`Curated Visual ${i}`} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-10 left-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                 <span className="text-[11px] uppercase tracking-[0.6em] font-mono bg-black/70 backdrop-blur-xl px-6 py-3">Source::Ref_0{(i % (ARTWORK.length || 1)) + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-32 max-w-4xl mx-auto px-8 text-center">
        <p className="text-xl md:text-3xl leading-tight opacity-40 italic font-light serif max-w-2xl mx-auto">
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
