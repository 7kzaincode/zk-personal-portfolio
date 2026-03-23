
import React, { useEffect } from 'react';
import { Project } from '../types';
import { DetailedProject } from '../constants';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const detailedProject = project as DetailedProject;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
    } else {
      root.classList.add('dark');
      document.body.classList.add('dark');
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white dark:bg-neutral-950 animate-in fade-in duration-500"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative w-full max-w-7xl h-full bg-white dark:bg-neutral-950 overflow-y-auto custom-scrollbar animate-in zoom-in duration-500">

        {/* Header */}
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 md:p-10 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-md">
          <span className="text-[9px] font-mono uppercase tracking-[0.5em] opacity-40">PROJECT // {project.id.toUpperCase()}</span>
          <div className="flex items-center gap-6">
            <button onClick={toggleTheme} className="opacity-40 hover:opacity-100 transition-opacity" aria-label="Toggle theme">
              <svg className="w-4 h-4 hidden dark:block" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <svg className="w-4 h-4 block dark:hidden" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            </button>
            <button onClick={onClose} className="text-4xl font-thin hover:opacity-50 transition-opacity">
              &times;
            </button>
          </div>
        </div>

        <div className="px-6 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center min-h-[70vh]">
          {/* Left Column */}
          <div className="space-y-12">
            <h2 className="serif text-4xl md:text-6xl lg:text-8xl italic font-normal tracking-tighter leading-[0.9]">
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] font-mono uppercase tracking-widest border border-black dark:border-white border-opacity-20 px-5 py-2 rounded-full opacity-60">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-10 max-w-xl">
              <p className="text-lg md:text-xl font-light italic opacity-70 leading-relaxed serif">
                {project.description}
              </p>

              {detailedProject?.why && (
                <p className="text-sm md:text-base font-light opacity-50 leading-relaxed">
                  {detailedProject.why}
                </p>
              )}
            </div>

            <div className="pt-8">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.5em] border-b-2 border-current pb-2 hover:opacity-50 transition-all font-black"
              >
                LAUNCH INSTANCE &rarr;
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain p-4 dark:invert"
            />
          </div>
        </div>

        <div className="py-24 text-center opacity-10 text-[9px] font-mono uppercase tracking-[1em] italic">
          END OF PROJECT DETAILS
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
