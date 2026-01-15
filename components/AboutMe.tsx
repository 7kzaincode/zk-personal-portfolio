
import React from 'react';
import { BIO } from '../constants';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="py-24 px-8 md:px-24 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.8em] opacity-30 font-black mb-8">About</h2>
        </div>
        <p className="serif text-3xl md:text-5xl leading-tight font-normal tracking-tight">
          {BIO}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
