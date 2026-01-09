import React, { useState, useEffect } from 'react';
import { portfolioInfo } from '@/data/portfolio';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function ContactCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile, always show expanded state. On desktop, use hover state.
  const shouldExpand = isMobile ? true : isExpanded;

  return (
    <div 
      className="group relative w-[350px] h-[250px] mx-auto"
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
    >
      {/* Outer Card Container */}
      <div className="relative h-full w-full bg-[#1a1f22] border border-white/5 overflow-hidden transition-all duration-500 ease-in-out shadow-2xl flex items-center justify-center group-hover:rounded-none group-hover:scale-110 rounded-sm">
        
        {/* Animated Gold Border Reveal */}
        <div className={`absolute inset-0 border-2 border-[#bd9f67] transition-all duration-500 ease-in-out ${
          shouldExpand ? 'inset-[15px] rotate-0' : 'rotate-[10deg]'
        }`} />

        <div className={`flex flex-auto gap-2 absolute top-8 left-1/2 -translate-x-1/2 transition-all duration-500 delay-500 ${
          shouldExpand ? 'opacity-100' : 'opacity-0'
        }`}>
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
          <div className={`flex items-center h-[40px] overflow-hidden transition-all duration-700 ease-in-out ${
            shouldExpand ? 'w-[105px]' : 'w-[22px]'
          } group-hover:w-[105px]`}>
            <span className="shrink-0 text-2xl font-bold text-[#bd9f67] w-[28px] text-center m-auto">S</span>
            <span className={`text-[#bd9f67] -ml-5 mt-1 font-bold tracking-[0.1em] uppercase text-xl transition-opacity duration-300 delay-300 ${
              shouldExpand ? 'opacity-100' : 'opacity-0'
            } group-hover:opacity-100`}>
              rijan
            </span>
          </div>

          {/* R -> Ravisankar Expansion */}
          <div className={`flex items-center gap-0 h-[40px] overflow-hidden transition-all duration-700 ease-in-out ${
            shouldExpand ? 'w-[165px]' : 'w-[22px]'
          } group-hover:w-[165px]`}>
            <span className="shrink-0 text-2xl font-bold text-[#bd9f67] w-[28px] text-center">R</span>
            <span className={`text-[#bd9f67] -ml-1 mt-1 font-bold tracking-[0.1em] uppercase text-xl transition-opacity duration-300 delay-300 ${
              shouldExpand ? 'opacity-100' : 'opacity-0'
            } ${!isMobile ? 'group-hover:opacity-100' : ''}`}>
              avisankar
            </span>
          </div>
        </div>

        {/* Bottom Email Reveal */}
        <div className={`absolute bottom-13 left-1/2 -translate-x-1/2 transition-all duration-500 delay-500 ${
          shouldExpand ? 'opacity-100' : 'opacity-0'
        } ${!isMobile ? 'group-hover:opacity-100' : ''}`}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=srijanvr@gmail.com&su=Inquiry%20from%20Portfolio"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-[#bd9f67] hover:text-white transition-colors"
          >
            <Mail className="size-3 transition-transform group-hover:scale-110" />
            <span className='text-xs'>srijanvr@gmail.com</span>
          </a>
        </div>
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 delay-500 ${
          shouldExpand ? 'opacity-100' : 'opacity-0'
        } ${!isMobile ? 'group-hover:opacity-100' : ''}`}>
          <a href={`tel:${portfolioInfo.socialLinks.phone}`} className="group flex items-center gap-2 text-[#bd9f67] hover:text-white transition-colors">
            <Phone className="size-3 transition-transform group-hover:scale-110" />
            <span className='text-xs'>+1 807-620-0780</span>
          </a>
        </div>
      </div>
    </div>
  );
}