import React from 'react';
import { certifications } from '@/data/portfolio';

export default function CertificatesCard() {
  const quantity = certifications.length;
  // Adjust the radius (translateZ) based on the number of cards
  // 350px works well for 6-10 cards. Increase if they overlap too much.
  const radius = 350; 

  return (
    <div className="relative flex h-125 w-full items-center justify-center">
      {/* 3D Animation Definition */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotating-3d {
          from { transform: perspective(1200px) rotateX(-10deg) rotateY(0deg); }
          to { transform: perspective(1200px) rotateX(-10deg) rotateY(360deg); }
        }
      `}} />

      {/* The Carousel Container */}
      <div 
        className="relative flex h-[160px] w-[220px] animate-[rotating-3d_30s_linear_infinite] items-center justify-center hover:[animation-play-state:paused]"
        style={{ 
          transformStyle: 'preserve-3d',
          // Note: We don't use overflow-hidden here so back cards remain visible
          ['--quantity' as any]: quantity 
        } as React.CSSProperties}
      >
        {certifications.map((cert, index) => (
          <a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute inset-0 flex flex-col justify-end border border-[#00894d]/40 bg-[#545d62] text-white no-underline transition-all duration-500 hover:border-[#00894d] hover:shadow-[0_0_25px_rgba(0,137,77,0.4)]"
            style={{ 
              // We removed backface-visibility: hidden to ensure they show when rotated
              transform: `rotateY(calc((360deg / ${quantity}) * ${index})) translateZ(${radius}px)`,
            }}
          >
            {/* Image Background - Higher opacity so it's visible from a distance */}
            <div 
              className="absolute inset-0 bg-contain bg-center transition-opacity duration-300 group-hover:opacity-70"
              style={{ backgroundImage: `url(${cert.image || '/cert-placeholder.png'})` }} 
            />
            
            {/* Content Overlay */}
            <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3">
              <h4 className="text-[11px] font-bold leading-tight line-clamp-2 text-white">
                {cert.name}
              </h4>
              <p className="mt-1 text-[9px] leading-snug opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-3 text-gray-200">
                {cert.description}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[8px] font-semibold uppercase tracking-tighter text-[#00894d]">
                  {cert.provider}
                </span>
                {/* Visual indicator that it's a link */}
                <div className="size-3 bg-[#00894d]/20 p-0.5 opacity-0 group-hover:opacity-100">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#00894d]">
                     <path d="M7 17L17 7M17 7H7M17 7V17" />
                   </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Optional: Radial Shadow/Glow at the bottom to give it "grounding" */}
      <div className="absolute bottom-10 h-10 w-64 bg-[#00894d]/20 blur-2xl" />
    </div>
  );
}