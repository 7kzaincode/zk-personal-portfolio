
import React, { useState, useEffect } from 'react';
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

  const handlePreloaderComplete = () => {
    setLoading(false);
    setIsAppVisible(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-1000 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <MouseTrail />
      {loading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`fixed top-10 right-10 z-[100] transition-opacity duration-1000 ${isAppVisible ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={toggleTheme}
          className="text-[10px] uppercase tracking-[0.8em] font-black hover:opacity-40 transition-all mix-blend-difference"
        >
          {theme === Theme.LIGHT ? 'DARK_MODE' : 'LIGHT_MODE'}
        </button>
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
