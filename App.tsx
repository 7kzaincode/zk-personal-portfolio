
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ProjectModal from './components/ProjectModal';
import { Theme, Project } from './types';
import { NAME } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [loading, setLoading] = useState(true);
  const [isAppVisible, setIsAppVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setIsAppVisible(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      theme === Theme.LIGHT ? 'bg-white text-black' : 'bg-neutral-950 text-white'
    }`}>
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
        <Projects onSelectProject={setSelectedProject} />
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
