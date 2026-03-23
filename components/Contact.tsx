
import React, { useEffect, useRef, useCallback } from 'react';
import { SOCIAL_LINKS, NAME } from '../constants';

const Contact: React.FC = () => {
  const webringRef = useRef<HTMLDivElement>(null);

  const loadWebring = useCallback(() => {
    if (!webringRef.current) return;
    webringRef.current.innerHTML = '';
    const isDark = document.documentElement.classList.contains('dark');
    const script = document.createElement('script');
    script.src = 'https://uwaterloo.network/embed.js';
    script.setAttribute('data-webring', '');
    script.setAttribute('data-user', 'zain-khan');
    script.setAttribute('data-color', isDark ? 'white' : 'black');
    webringRef.current.appendChild(script);
  }, []);

  useEffect(() => {
    loadWebring();
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === 'class') {
          loadWebring();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [loadWebring]);

  const footerLinks = SOCIAL_LINKS.filter(link => link.label !== 'resume');

  return (
    <section id="contact" className="min-h-[50vh] flex flex-col items-center justify-center px-8 md:px-24 text-center bg-white dark:bg-neutral-950">
      <div className="serif text-5xl md:text-7xl lg:text-[14rem] mb-16 tracking-tighter leading-none italic font-black text-black dark:text-white">
        Collaborate.
      </div>

      <a
        href="mailto:kn.zain@hotmail.com"
        className="text-2xl md:text-4xl lg:text-6xl border-b-2 border-current pb-10 hover:opacity-40 transition-all mb-24 inline-block font-light tracking-tighter italic"
      >
        kn.zain@hotmail.com
      </a>

      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-current border-opacity-10">
        {footerLinks.map((link) => (
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

      <div ref={webringRef} className="mt-16 flex justify-center" />
    </section>
  );
};

export default Contact;
