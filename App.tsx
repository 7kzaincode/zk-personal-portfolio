
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero.tsx';
import AboutMe from './components/AboutMe.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import TechStack from './components/TechStack.tsx';
import Preloader from './components/Preloader.tsx';
import ProjectModal from './components/ProjectModal.tsx';
import MouseTrail from './components/MouseTrail.tsx';
import { Theme, Project } from './types.ts';
import { NAME } from './constants.ts';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [loading, setLoading] = useState(true);
  const [isAppVisible, setIsAppVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [pullY, setPullY] = useState(0);
  const [swingAngle, setSwingAngle] = useState(0);
  const isPulling = useRef(false);
  const pullYRef = useRef(0);
  const lastDx = useRef(0);
  const startX = useRef(0);
  const startY = useRef(0);
  const animRef = useRef<number>(0);

  // Initialize theme from system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.DARK);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === Theme.DARK) {
      root.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const startSwing = (energy: number) => {
    cancelAnimationFrame(animRef.current);
    const s = { angle: 0, vel: energy };
    const step = () => {
      s.vel += -0.15 * s.angle;
      s.vel *= 0.93;
      s.angle += s.vel;
      setSwingAngle(s.angle);
      if (Math.abs(s.vel) > 0.05 || Math.abs(s.angle) > 0.05) {
        animRef.current = requestAnimationFrame(step);
      } else {
        setSwingAngle(0);
      }
    };
    animRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setIsAppVisible(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-1000 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <MouseTrail />
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`fixed top-0 right-10 z-[100] transition-opacity duration-1000 ${isAppVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div style={{ transformOrigin: 'top center', transform: `rotate(${swingAngle}deg)` }}>
          <div
            className="flex flex-col items-center cursor-grab active:cursor-grabbing mix-blend-difference select-none touch-none"
            onPointerDown={(e) => {
              e.preventDefault();
              cancelAnimationFrame(animRef.current);
              setSwingAngle(0);
              isPulling.current = true;
              pullYRef.current = 0;
              lastDx.current = 0;
              startX.current = e.clientX;
              startY.current = e.clientY;

              const onMove = (ev: PointerEvent) => {
                if (!isPulling.current) return;
                const dx = ev.clientX - startX.current;
                const dy = ev.clientY - startY.current;
                const dist = Math.min(Math.sqrt(dx * dx + dy * dy), 50);
                lastDx.current = dx;
                pullYRef.current = dist;
                setPullY(dist);
              };

              const onRelease = () => {
                window.removeEventListener('pointermove', onMove);
                window.removeEventListener('pointerup', onRelease);
                window.removeEventListener('pointercancel', onRelease);

                if (!isPulling.current) return;
                isPulling.current = false;
                const distance = pullYRef.current;
                const dx = lastDx.current;
                pullYRef.current = 0;
                lastDx.current = 0;
                setPullY(0);
                if (distance > 10) {
                  toggleTheme();
                  const direction = dx >= 0 ? 1 : -1;
                  startSwing(distance * 0.25 * direction);
                }
              };

              window.addEventListener('pointermove', onMove);
              window.addEventListener('pointerup', onRelease);
              window.addEventListener('pointercancel', onRelease);
            }}
          >
            {/* Cord */}
            <div className="w-px bg-current opacity-40" style={{ height: `${48 + pullY}px` }} />
            {/* Pull handle */}
            <div className="w-2.5 h-2.5 rounded-full border border-current opacity-50 mt-0.5" />
          </div>
        </div>
      </div>

      <div className={`fixed top-10 left-10 z-[100] mix-blend-difference pointer-events-none transition-opacity duration-1000 ${isAppVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-1.5 bg-current rotate-45 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[1em] opacity-40 leading-none">{NAME}</span>
        </div>
      </div>

      <main className={`relative transition-all duration-[1200ms] ease-out ${isAppVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Hero isLoaded={isAppVisible} />
        <AboutMe />
        <About />
        <Experience />
        <div className="px-10 md:px-20 lg:px-40 py-16">
          <div className="max-w-6xl mx-auto">
            <TechStack onTechClick={setSelectedTech} selectedTech={selectedTech} />
          </div>
        </div>
        <Projects onSelectProject={setSelectedProject} filterTech={selectedTech} />
        <Contact />
      </main>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <div className="fixed inset-0 pointer-events-none z-[4000] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default App;
