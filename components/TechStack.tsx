
import React from 'react';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  const groups = [
    { label: "Core / Systems", items: ["C/C++", "ARM Assembly", "Verilog", "Python"] },
    { label: "Frontend / UI", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { label: "Data / Logic", items: ["SQL", "PostgreSQL", "Supabase", "PHP", "Google Gemini API"] },
    { label: "Infrastructure", items: ["Git", "Node.js", "Vercel"] }
  ];

  return (
    <div className="mt-20 pt-16 border-t border-current border-opacity-10">
      <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-40 mb-12">System Architecture / Stack</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {groups.map((group) => (
          <div key={group.label} className="space-y-6">
            <h4 className="text-[8px] font-mono uppercase tracking-widest opacity-30 border-b border-current border-opacity-5 pb-2">{group.label}</h4>
            <div className="flex flex-col gap-4">
              {group.items.map((tech) => (
                <div key={tech} className="group flex items-baseline gap-3">
                  <span className="text-[9px] font-mono opacity-20">::</span>
                  <span className="serif text-xl opacity-60 group-hover:opacity-100 transition-opacity cursor-default">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
