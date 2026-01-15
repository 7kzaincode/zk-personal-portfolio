import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  start?: boolean;
}

const TypingText: React.FC<TypingTextProps> = ({ start = false }) => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<
    'waiting' | 'typing' | 'mistake' | 'pausing_on_mistake' | 'deleting_mistake' | 'fixing' | 'pausing_at_end' | 'deleting'
  >('waiting');

  const targetText = 'computer engineering @ the university of waterloo';
  const mistakeAt = 'compu';
  const wrongSuffix = 'rte'; // compurte

  useEffect(() => {
    if (!start) return;

    let timer: number;

    const tick = () => {
      switch (phase) {
        case 'waiting': {
          setPhase('typing');
          break;
        }

        case 'typing': {
          if (text.length < mistakeAt.length) {
            setText(targetText.slice(0, text.length + 1));
            timer = window.setTimeout(tick, 50);
          } else {
            setPhase('mistake');
            timer = window.setTimeout(tick, 80);
          }
          break;
        }

        case 'mistake': {
          const typedWrong = text.slice(mistakeAt.length);
          if (typedWrong.length < wrongSuffix.length) {
            setText(mistakeAt + wrongSuffix.slice(0, typedWrong.length + 1));
            timer = window.setTimeout(tick, 80); // slower, noticeable
          } else {
            setPhase('pausing_on_mistake');
            timer = window.setTimeout(tick, 700); // pause so user reads it
          }
          break;
        }

        case 'pausing_on_mistake': {
          setPhase('deleting_mistake');
          timer = window.setTimeout(tick, 40);
          break;
        }

        case 'deleting_mistake': {
          if (text.length > mistakeAt.length) {
            setText(text.slice(0, -1));
            timer = window.setTimeout(tick, 35); // human backspace
          } else {
            setPhase('fixing');
            timer = window.setTimeout(tick, 60);
          }
          break;
        }

        case 'fixing': {
          if (text.length < targetText.length) {
            setText(targetText.slice(0, text.length + 1));
            timer = window.setTimeout(tick, 45);
          } else {
            setPhase('pausing_at_end');
            timer = window.setTimeout(tick, 2500);
          }
          break;
        }

        case 'pausing_at_end': {
          setPhase('deleting');
          timer = window.setTimeout(tick, 15);
          break;
        }

        case 'deleting': {
          if (text.length > 0) {
            setText(text.slice(0, -1));
            timer = window.setTimeout(tick, 15);
          } else {
            setPhase('typing');
            timer = window.setTimeout(tick, 600);
          }
          break;
        }
      }
    };

    timer = window.setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, [text, phase, start]);

  return (
    <span className="inline-block font-mono font-medium opacity-30 text-lg md:text-2xl uppercase tracking-[0.6em] italic leading-none">
      {text}
      <span className="animate-pulse ml-4 inline-block w-[2px] h-[0.7em] bg-current align-middle opacity-20" />
    </span>
  );
};

export default TypingText;
