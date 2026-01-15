
import React, { useState, useEffect } from 'react';
import { HELLOS } from '../constants';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll and force top
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    if (index < HELLOS.length - 1) {
      const timer = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 180); // Slightly slower, more readable
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          document.body.style.overflow = ''; // Unlock scroll
          onComplete();
        }, 600);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-neutral-950 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="overflow-hidden">
          <span className="serif text-4xl md:text-7xl font-light italic tracking-tighter block animate-in fade-in slide-in-from-bottom-4 duration-300">
            {HELLOS[index]}.
          </span>
        </div>
        <div className="w-8 h-[1px] bg-current opacity-20"></div>
      </div>
    </div>
  );
};

export default Preloader;
