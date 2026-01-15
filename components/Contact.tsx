
import React from 'react';
import { SOCIAL_LINKS, NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[70vh] flex flex-col items-center justify-center px-8 md:px-24 text-center bg-white dark:bg-neutral-950">
      <div className="serif text-7xl md:text-[14rem] mb-28 tracking-tighter leading-none italic font-black text-black dark:text-white">
        Collaborate.
      </div>
      
      <a 
        href="mailto:kn.zain@hotmail.com" 
        className="text-4xl md:text-6xl border-b-2 border-current pb-10 hover:opacity-40 transition-all mb-48 inline-block font-light tracking-tighter italic"
      >
        kn.zain@hotmail.com
      </a>

      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-24 py-28 border-t border-current border-opacity-10">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] font-mono uppercase tracking-[0.8em] hover:opacity-40 transition-opacity font-black"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-32 text-[11px] font-mono uppercase tracking-[1.5em] opacity-20 font-black">
        &copy; {new Date().getFullYear()} {NAME} — RELEASE_8.8.0
      </div>
    </section>
  );
};

export default Contact;
