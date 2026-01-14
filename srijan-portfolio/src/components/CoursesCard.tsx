import React from 'react';

interface MarqueeProps {
  items: Courses[];
  direction?: 'left' | 'right';
  speed?: string;
}

const MarqueeRow = ({ items, direction = 'left', speed = '20s' }: MarqueeProps) => {
  return (
    <div className="group relative flex overflow-hidden py-2" 
         style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}} />

      <div className={cn(
        "flex w-max animate-infinite-scroll hover:[animation-play-state:paused]",
        direction === 'left' ? "animate-[marquee-left_linear_infinite]" : "animate-[marquee-right_linear_infinite]"
      )}
      style={{ animationDuration: speed }}>
        {/* Render items twice for a perfect infinite loop */}
        {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="mx-4 flex flex-col items-start justify-center whitespace-nowrap border border-primary/25 bg-secondary/50 px-8 py-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/100 hover:bg-secondary hover:shadow-[0_0_20px_rgba(0,137,77,0.15)]"
            >
              <div className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                  {item.code}
                </div>

              {/* Course Name */}
              <div className="text-md font-bold tracking-tight text-foreground">
                {item.name}
              </div>
              
              <div className="flex items-center gap-3 mt-1">
                {/* Institution */}
                <div className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                  {item.institution}
                </div>
                
                {/* Separator Dot */}
                <span className="text-muted-foreground/30">•</span>
                
                {/* Grade */}
                <div className="text-sm text-primary">
                  {item.grade}
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default function CoursesCard() {  
  // Split your coursework into 3 rows
  const row1 = coursework.slice(0, 7);
  const row2 = coursework.slice(7, 21);
  const row3 = coursework.slice(21, 30);

  return (
    <div className="flex flex-col gap-4 py-8">
      <MarqueeRow items={row1} direction="left" speed="50s" />
      <MarqueeRow items={row2} direction="right" speed="50s" />
      <MarqueeRow items={row3} direction="left" speed="50s" />
    </div>
  );
}

// Helper for class joining (ensure this matches your project's utils)
import { cn } from '@/lib/utils';
import { coursework, Courses } from '@/data/portfolio';