
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-48 px-8 md:px-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-32">
          <span className="text-[11px] font-mono opacity-30 tracking-tighter font-bold">02 /</span>
          <h2 className="text-[11px] uppercase tracking-[1em] opacity-40 font-black">Projects</h2>
        </div>

        <div className="grid grid-cols-1">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project as Project)}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-20 md:py-28 border-b border-current border-opacity-5 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-all cursor-pointer px-8"
            >
              <div className="flex items-baseline gap-12 z-10">
                <span className="serif text-5xl md:text-[10rem] opacity-[0.04] group-hover:opacity-10 transition-opacity font-black leading-none">0{idx + 1}</span>
                <div className="space-y-4">
                  <h3 className="serif text-4xl md:text-8xl tracking-tighter italic leading-none group-hover:translate-x-6 transition-transform duration-1000 ease-out">{project.title}</h3>
                  <p className="text-xs md:text-sm font-mono opacity-40 uppercase tracking-[0.4em] group-hover:translate-x-12 transition-transform duration-1000 ease-out">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-12 md:mt-0 z-10 opacity-30 group-hover:opacity-100 transition-opacity">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-[0.5em] border border-current border-opacity-20 px-6 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="absolute right-12 opacity-0 group-hover:opacity-[0.03] transition-all duration-1000 pointer-events-none translate-x-16 group-hover:translate-x-0">
                 <span className="serif text-[22rem] italic font-black select-none leading-none">{project.title.charAt(0)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
