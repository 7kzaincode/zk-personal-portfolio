
import React from 'react';

interface MarqueeProps {
  text: string;
  speed?: number;
  reverse?: boolean;
  opacity?: number;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  speed = 20, 
  reverse = false, 
  opacity = 0.05,
  className = "" 
}) => {
  const repeatedText = `${text}  ·  `.repeat(15);

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none pointer-events-none ${className}`}>
      <div 
        className="flex"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
          opacity
        }}
      >
        <span className="text-[6vw] font-light inline-block whitespace-pre">
          {repeatedText}
        </span>
        <span className="text-[6vw] font-light inline-block whitespace-pre">
          {repeatedText}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
