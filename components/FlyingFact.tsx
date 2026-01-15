
import React, { useState, useEffect } from 'react';

interface FlyingFactProps {
  text: string;
}

const FlyingFact: React.FC<FlyingFactProps> = ({ text }) => {
  const [position] = useState({ 
    top: Math.random() * 90 + 5, 
    left: Math.random() * 90 + 5 
  });
  const [speed] = useState(15 + Math.random() * 20);
  const [delay] = useState(Math.random() * -30);

  return (
    <div 
      className="absolute z-10 pointer-events-auto"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        animation: `float-around ${speed}s ease-in-out infinite alternate`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="group cursor-default whitespace-nowrap">
        <span className="block text-[8px] md:text-[10px] font-mono uppercase tracking-[0.3em] opacity-20 group-hover:opacity-100 group-hover:scale-110 group-hover:text-neutral-500 transition-all duration-500 bg-neutral-100/30 dark:bg-neutral-800/30 px-3 py-1.5 rounded-sm border border-current border-opacity-5 backdrop-blur-[2px]">
          {text}
        </span>
      </div>
    </div>
  );
};

export default FlyingFact;
