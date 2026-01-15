
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
        className="absolute inset-0 bg-white dark:bg-neutral-950 animate-in fade-in duration-500" 
        onClick={onClose}
      />
      
      {/* Container */}
      <div className="relative w-full max-w-7xl h-full bg-white dark:bg-neutral-950 overflow-y-auto custom-scrollbar animate-in zoom-in duration-500">
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 md:p-10 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-md">
          <span className="text-[9px] font-mono uppercase tracking-[0.5em] opacity-40">PROJECT // {project.id.toUpperCase()}</span>
          <button onClick={onClose} className="text-4xl font-thin hover:opacity-50 transition-opacity">
            &times;
          </button>
        </div>

        <div className="px-6 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center min-h-[70vh]">
          {/* Left Column */}
          <div className="space-y-12">
            <h2 className="serif text-6xl md:text-8xl italic font-normal tracking-tighter leading-[0.9]">
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
              <p className="text-xl md:text-2xl font-light italic opacity-70 leading-relaxed serif">
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
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden border border-black dark:border-white border-opacity-10 shadow-sm">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale contrast-125" 
            />
            <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none"></div>
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
