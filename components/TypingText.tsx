
import React, { useState, useEffect, useRef } from 'react';

interface TypingTextProps {
  start?: boolean;
}

const phrases = [
  'computer engineering @ the university of waterloo',
  'one day i hope to live a simple life as a shepherd',
  'software engineer intern @ leap tools',
];

const TypingText: React.FC<TypingTextProps> = ({ start = false }) => {
  const [displayText, setDisplayText] = useState('');
  const textRef = useRef('');
  const phaseRef = useRef<string>('waiting');
  const timerRef = useRef<number>(0);
  const phraseIndexRef = useRef(0);

  const mistakeAt = 'comput';
  const wrongSuffix = 're';

  useEffect(() => {
    if (!start) return;

    const jitter = (base: number, variance: number) =>
      base + Math.random() * variance;

    const currentPhrase = () => phrases[phraseIndexRef.current];

    const tick = () => {
      const text = textRef.current;
      const phase = phaseRef.current;
      const isFirstPhrase = phraseIndexRef.current === 0;

      switch (phase) {
        case 'waiting': {
          phaseRef.current = isFirstPhrase ? 'typing_with_mistake' : 'typing';
          timerRef.current = window.setTimeout(tick, 0);
          break;
        }

        case 'typing_with_mistake': {
          if (text.length < mistakeAt.length) {
            textRef.current = currentPhrase().slice(0, text.length + 1);
            setDisplayText(textRef.current);
            timerRef.current = window.setTimeout(tick, jitter(45, 50));
          } else {
            phaseRef.current = 'mistake';
            timerRef.current = window.setTimeout(tick, jitter(35, 30));
          }
          break;
        }

        case 'mistake': {
          const typedWrong = text.slice(mistakeAt.length);
          if (typedWrong.length < wrongSuffix.length) {
            textRef.current = mistakeAt + wrongSuffix.slice(0, typedWrong.length + 1);
            setDisplayText(textRef.current);
            timerRef.current = window.setTimeout(tick, jitter(50, 40));
          } else {
            phaseRef.current = 'pausing_on_mistake';
            timerRef.current = window.setTimeout(tick, jitter(250, 200));
          }
          break;
        }

        case 'pausing_on_mistake': {
          phaseRef.current = 'deleting_mistake';
          timerRef.current = window.setTimeout(tick, jitter(50, 30));
          break;
        }

        case 'deleting_mistake': {
          if (text.length > mistakeAt.length) {
            textRef.current = text.slice(0, -1);
            setDisplayText(textRef.current);
            timerRef.current = window.setTimeout(tick, jitter(35, 25));
          } else {
            phaseRef.current = 'fixing';
            timerRef.current = window.setTimeout(tick, jitter(80, 60));
          }
          break;
        }

        case 'fixing': {
          if (text.length < currentPhrase().length) {
            textRef.current = currentPhrase().slice(0, text.length + 1);
            setDisplayText(textRef.current);
            timerRef.current = window.setTimeout(tick, jitter(40, 45));
          } else {
            phaseRef.current = 'pausing_at_end';
            timerRef.current = window.setTimeout(tick, 1500);
          }
          break;
        }

        case 'typing': {
          if (text.length < currentPhrase().length) {
            textRef.current = currentPhrase().slice(0, text.length + 1);
            setDisplayText(textRef.current);
            timerRef.current = window.setTimeout(tick, jitter(45, 50));
          } else {
            phaseRef.current = 'pausing_at_end';
            timerRef.current = window.setTimeout(tick, 1500);
          }
          break;
        }

        case 'pausing_at_end': {
          phaseRef.current = 'deleting';
          timerRef.current = window.setTimeout(tick, jitter(25, 20));
          break;
        }

        case 'deleting': {
          if (text.length > 0) {
            textRef.current = text.slice(0, -1);
            setDisplayText(textRef.current);
            timerRef.current = window.setTimeout(tick, jitter(20, 15));
          } else {
            phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
            phaseRef.current = 'waiting';
            timerRef.current = window.setTimeout(tick, jitter(250, 150));
          }
          break;
        }
      }
    };

    timerRef.current = window.setTimeout(tick, 1800);
    return () => clearTimeout(timerRef.current);
  }, [start]);

  return (
    <span className="inline-block font-mono font-medium opacity-30 text-[10px] sm:text-sm md:text-lg uppercase tracking-[0.15em] sm:tracking-[0.3em] md:tracking-[0.4em] italic leading-none">
      {displayText}
      <span className="animate-pulse ml-4 inline-block w-[2px] h-[0.7em] bg-current align-middle opacity-20" />
    </span>
  );
};

export default TypingText;
