import React from 'react';
import { portfolioInfo } from '@/data/portfolio';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function ContactCard() {
  return (
    <div className="group relative w-[350px] h-[250px] mx-auto">
      {/* Outer Card Container */}
      <div className="relative w-full h-full bg-[#1a1f22] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-none group-hover:scale-110 shadow-2xl flex items-center justify-center">
        
        {/* Animated Gold Border Reveal */}
        <div className="absolute inset-0 border-2 border-[#bd9f67] opacity-0 rotate-[10deg] transition-all duration-500 ease-in-out group-hover:inset-[15px] opacity-100 group-hover:opacity-100 group-hover:rotate-0" />

        <div className="flex flex-auto gap-2 absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500">
          <a href={portfolioInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#bd9f67] hover:text-white transition-colors">
            <Github size={15} />
          </a>
          <a href={portfolioInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#bd9f67] hover:text-white transition-colors">
            <Linkedin size={15} />
          </a>
        </div>

        {/* Name Expansion Logic - Centered Wrapper */}
        <div className="-top-2 relative flex items-center justify-center transition-all duration-500 [transform-style:preserve-3d]">
          
          {/* S -> Srijan Expansion */}
          <div className="flex items-center h-[40px] w-[22px] overflow-hidden transition-all duration-700 ease-in-out group-hover:w-[105px]">
            {/* Initial S - Fixed width to keep R stable */}
            <span className="shrink-0 text-2xl font-bold text-[#bd9f67] w-[28px] text-center m-auto">S</span>
            <span className="text-[#bd9f67] -ml-5 mt-1 font-bold tracking-[0.1em] uppercase text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
              rijan
            </span>
          </div>

          {/* R -> Ravisankar Expansion */}
          <div className="flex items-center gap-0 h-[40px] w-[22px] overflow-hidden transition-all duration-700 ease-in-out group-hover:w-[165px]">
            {/* Initial R - Fixed width to keep spacing consistent */}
            <span className="shrink-0 text-2xl font-bold text-[#bd9f67] w-[28px] text-center">R</span>
            <span className="text-[#bd9f67] -ml-1 mt-1 font-bold tracking-[0.1em] uppercase text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
              avisankar
            </span>
          </div>
        </div>

        {/* Bottom Email Reveal */}
        <div className="absolute bottom-13 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500">
          <a href={`mailto:${portfolioInfo.socialLinks.email}`} className="group flex items-center gap-2 text-[#bd9f67] hover:text-white transition-colors">
            <Mail className="size-3 transition-transform group-hover:scale-110" />
            <span className='text-xs'>srijanvr@gmail.com</span>
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500">
          <a href={`tel:${portfolioInfo.socialLinks.phone}`} className="group flex items-center gap-2 text-[#bd9f67] hover:text-white transition-colors">
            <Phone className="size-3 transition-transform group-hover:scale-110" />
            <span className='text-xs'>+1 807-620-0780</span>
          </a>
        </div>
      </div>
    </div>
  );
}