
import React from 'react';

interface TechStackProps {
  onTechClick?: (tech: string | null) => void;
  selectedTech?: string | null;
}

const TechStack: React.FC<TechStackProps> = ({ onTechClick, selectedTech }) => {
  const groups = [
    { label: "Core / Systems", items: ["C/C++", "ARM Assembly", "Verilog", "Python"] },
    { label: "Frontend / UI", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { label: "Data / Logic", items: ["SQL", "PostgreSQL", "Supabase", "PHP", "Google Gemini API"] },
    { label: "Infrastructure", items: ["Git", "Node.js", "Vercel"] }
  ];

  const handleTechClick = (tech: string) => {
    if (onTechClick) {
      // Toggle: if clicking the same tech, deselect it
      onTechClick(selectedTech === tech ? null : tech);
    }
  };

  return (
    <div className="mt-12 pt-12 border-t border-current border-opacity-10">
      <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-40 mb-8">System Architecture / Stack</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {groups.map((group) => (
          <div key={group.label} className="space-y-4">
            <h4 className="text-[8px] font-mono uppercase tracking-widest opacity-30 border-b border-current border-opacity-5 pb-2">{group.label}</h4>
            <div className="flex flex-col gap-3">
              {group.items.map((tech) => {
                const isSelected = selectedTech === tech;
                return (
                  <div
                    key={tech}
                    className="group flex items-baseline gap-3 cursor-pointer"
                    onClick={() => handleTechClick(tech)}
                  >
                    <span className={`text-[9px] font-mono transition-opacity ${isSelected ? 'opacity-60' : 'opacity-20'}`}>::</span>
                    <span className={`serif text-xl transition-all ${isSelected
                        ? 'opacity-100 font-medium'
                        : 'opacity-60 group-hover:opacity-100'
                      }`}>
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {selectedTech && (
        <div className="mt-8 text-center">
          <button
            onClick={() => onTechClick?.(null)}
            className="text-[9px] font-mono uppercase tracking-wider opacity-40 hover:opacity-80 transition-opacity"
          >
            Clear Filter ×
          </button>
        </div>
      )}
    </div>
  );
};

export default TechStack;
