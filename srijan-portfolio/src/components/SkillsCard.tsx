import React from 'react';
import { skills } from '@/data/portfolio';

export default function SkillsCard() {
  return (
    <div className="flex w-full max-w-3xl mx-auto h-[350px] gap-2 p-2 bg-accent rounded-sm border border-accent-foreground/10 shadow-2xl">
      {skills.map((skill) => (
        <div 
          key={skill.category}
          className="group relative h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-300 ease-in-out hover:flex-[4] bg-accent border border-accent-foreground hover:border-accent-foreground"
        >
          {/* Vertical Title (Hidden on hover) */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:pointer-events-none">
            <span className="m-auto rotate-[-90deg] text-[#00894d] font-light tracking-[0.2em] uppercase text-3xl min-w-[300px] text-center">
              {skill.category}
            </span>
          </div>

          {/* Expanded Content (Visible on hover) */}
          <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4">
            <h3 className="text-[#00894d] font-light text-xl tracking-wider uppercase border-b border-accent-foreground pb-2 mb-2">
              {skill.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skill.items.map((item) => (
                <span 
                  key={item} 
                  className="px-3 py-1 text-md font-medium text-accent-foreground bg-accent-foreground/10 border border-accent-foreground/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}