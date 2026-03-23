
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  filterTech?: string | null;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject, filterTech }) => {
  // Filter projects based on selected tech
  const filteredProjects = filterTech
    ? PROJECTS.filter(project =>
      project.tags.some(tag => tag.toLowerCase().includes(filterTech.toLowerCase()) || filterTech.toLowerCase().includes(tag.toLowerCase()))
    )
    : PROJECTS;

  return (
    <section id="work" className="py-24 px-8 md:px-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-20">
          <span className="text-[11px] font-mono opacity-30 tracking-tighter font-bold">02 /</span>
          <h2 className="text-[11px] uppercase tracking-[1em] opacity-40 font-black">Projects</h2>
          {filterTech && (
            <span className="text-[9px] font-mono opacity-30 tracking-wider">
              → Filtered by {filterTech}
            </span>
          )}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center">
            <p className="serif text-2xl opacity-40">No projects found with {filterTech}</p>
            <p className="text-xs font-mono opacity-20 mt-4 uppercase tracking-widest">Try selecting a different technology</p>
          </div>
        ) : (
          <div className="grid grid-cols-1">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project as Project)}
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-16 md:py-20 border-b border-current border-opacity-5 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-all cursor-pointer px-8"
              >
                <div className="flex items-baseline gap-4 md:gap-12 z-10">
                  <span className="serif text-3xl md:text-[10rem] opacity-[0.04] group-hover:opacity-10 transition-opacity font-black leading-none">0{idx + 1}</span>
                  <div className="space-y-4">
                    <h3 className="serif text-3xl sm:text-4xl md:text-8xl tracking-tighter italic leading-none group-hover:translate-x-6 transition-transform duration-1000 ease-out">{project.title}</h3>
                    <p className="text-xs md:text-sm font-mono opacity-40 uppercase tracking-[0.4em] group-hover:translate-x-12 transition-transform duration-1000 ease-out">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-12 md:mt-0 z-10 opacity-30 group-hover:opacity-100 transition-opacity">
                  {project.tags.slice(0, 3).map(tag => {
                    const isFilteredTag = filterTech && (tag.toLowerCase().includes(filterTech.toLowerCase()) || filterTech.toLowerCase().includes(tag.toLowerCase()));
                    return (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono uppercase tracking-[0.5em] border border-current px-6 py-2 rounded-full transition-all ${isFilteredTag ? 'border-opacity-60 font-medium' : 'border-opacity-20'
                          }`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="absolute right-12 opacity-0 group-hover:opacity-[0.03] transition-all duration-1000 pointer-events-none translate-x-16 group-hover:translate-x-0 hidden md:block">
                  <span className="serif text-[22rem] italic font-black select-none leading-none">{project.title.charAt(0)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

