
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

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/95 dark:bg-neutral-950/98 backdrop-blur-xl animate-in fade-in duration-500" 
        onClick={onClose}
      />
      
      {/* Container */}
      <div className="relative w-full max-w-6xl h-full bg-white dark:bg-neutral-900 shadow-2xl overflow-y-auto custom-scrollbar animate-in zoom-in duration-500">
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex justify-between items-center p-8 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-40">Project Details</span>
          <button onClick={onClose} className="text-3xl font-thin hover:opacity-50 transition-opacity">
            &times;
          </button>
        </div>

        <div className="p-8 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="serif text-5xl md:text-8xl italic font-light tracking-tighter leading-none">{project.title}</h2>
            
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono uppercase tracking-widest border border-current border-opacity-10 px-4 py-2 rounded-full opacity-60">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">What it is</h4>
                <p className="text-xl md:text-2xl font-light italic opacity-70 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {detailedProject?.why && (
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">Why I built it</h4>
                  <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed">
                    {detailedProject.why}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-10">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-6 text-sm uppercase tracking-[0.5em] border-b border-current pb-3 hover:opacity-50 transition-opacity"
              >
                View Live Site &rarr;
              </a>
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden group border border-current border-opacity-5">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110" />
            <div className="absolute inset-0 bg-neutral-950/10 pointer-events-none"></div>
          </div>
        </div>
        
        <div className="p-20 text-center opacity-10 text-[9px] uppercase tracking-[1em] italic">
          End of project overview
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
