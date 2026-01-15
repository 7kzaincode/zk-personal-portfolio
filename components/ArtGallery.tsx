
import React from 'react';
import { ARTWORK } from '../constants';

interface ArtGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ArtGallery: React.FC<ArtGalleryProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl h-full bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-y-auto custom-scrollbar shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="sticky top-6 right-6 ml-auto mr-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:scale-110 transition-transform"
        >
          <span className="text-2xl">&times;</span>
        </button>

        <div className="p-8 md:p-16">
          <div className="mb-12">
            <h2 className="serif text-4xl md:text-5xl mb-4">Aesthetica</h2>
            <p className="opacity-60 text-sm tracking-widest uppercase">Curated visual inspiration</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {ARTWORK.map((src, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden rounded-sm bg-neutral-200 dark:bg-neutral-800">
                <img 
                  src={src} 
                  alt={`Artwork ${i}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="text-white text-xs tracking-widest uppercase border border-white/40 px-3 py-1">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtGallery;
