
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
    return (
        <section className="px-10 md:px-20 lg:px-40 py-20 min-h-screen flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="mb-14">
                    <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-40 mb-2">Experience</h2>
                    <div className="h-px w-full bg-current opacity-5"></div>
                </div>

                <div className="space-y-16">
                    {EXPERIENCES.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="group relative border-l border-current border-opacity-10 pl-8 hover:border-opacity-30 transition-all duration-500"
                        >
                            <div className="absolute left-0 top-0 w-2 h-2 bg-current opacity-20 -translate-x-[5px] rotate-45 group-hover:opacity-60 transition-opacity"></div>

                            <div className="mb-6">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                                    <h3 className="serif-display text-4xl md:text-5xl opacity-90 group-hover:opacity-100 transition-opacity">
                                        {exp.company}
                                    </h3>
                                    <span className="text-xs font-mono uppercase tracking-widest opacity-30">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="serif text-xl opacity-60 mb-1">{exp.role}</p>
                                {exp.link && (
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-mono uppercase tracking-wider opacity-40 hover:opacity-80 transition-opacity inline-flex items-center gap-2"
                                    >
                                        Visit Site
                                        <span className="text-[8px]">↗</span>
                                    </a>
                                )}
                            </div>

                            <p className="serif text-lg leading-relaxed opacity-70 mb-6 max-w-3xl">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[9px] font-mono uppercase tracking-wider px-3 py-1.5 border border-current border-opacity-10 opacity-40 group-hover:opacity-60 transition-opacity"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
