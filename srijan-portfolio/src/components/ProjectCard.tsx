import React from 'react';
import { Github, Globe, ExternalLink, Code2, Link, Eye, Telescope, Timer, Wallet, Brain, Binoculars, Video } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveDemo?: string;
  sourceCode?: string;
  coverImage: string;
  icon: string;
  video?: string;
  frontendCode?: string;
  backendCode?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Timer, Wallet, Brain, Binoculars
};

const ProjectCard = ({ title, description, technologies, liveDemo, sourceCode, icon, video, frontendCode, backendCode }: ProjectCardProps) => {
  const ProjectIcon = icon && iconMap[icon] ? iconMap[icon] : Code2;

  return (
    /* Parent Container with Perspective */
    <div className="group relative w-[290px] h-[300px] [perspective:1000px] mx-auto">
      
      {/* Main Card: Handles Rotation and Dynamic Shadow */}
      <div className="relative h-full w-full rounded-[50px] bg-gradient-to-br from-[rgb(0,255,214)] to-[rgb(8,226,96)] transition-all duration-500 ease-in-out [transform-style:preserve-3d] 
        group-hover:[transform:rotate3d(1,1,0,30deg)] 
        shadow-[rgba(5,71,17,0)_40px_50px_25px_-40px,rgba(5,71,17,0.2)_0px_25px_25px_-5px]
        group-hover:shadow-[rgba(5,71,17,0.3)_30px_50px_25px_-40px,rgba(5,71,17,0.1)_0px_25px_30px_0px]"
        style={{
          
        }}
        >
        
        {/* 1. 3D Concentric Circles (Top Right) */}

        {/* 1. Logo Circles Section */}
        <div className="absolute right-0 top-0 [transform-style:preserve-3d]">
          {/* Circle 1 */}
          {/* <span 
            className="absolute block aspect-square rounded-full transition-all duration-500 ease-in-out shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(0,249,203,0.2)] w-[170px] top-2 right-2" 
            style={{ transform: 'translate3d(0, 0, 20px)' }} 
          /> */}
          
          {/* Circle 2 */}
          {/* <span 
            className="absolute block aspect-square rounded-full transition-all duration-500 ease-in-out shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[1px] bg-[rgba(0,249,203,0.2)] w-[140px] top-[10px] right-[10px] delay-[400ms] group-hover:[transform:translate3d(0,0,60px)]" 
            style={{ transform: 'translate3d(0, 0, 40px)' }} 
          /> */}
          
          {/* Circle 3 */}
          {/* <span 
            className="absolute block aspect-square rounded-full transition-all duration-500 ease-in-out shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(0,249,203,0.2)] w-[110px] top-[17px] right-[17px] delay-[800ms] group-hover:[transform:translate3d(0,0,80px)]" 
            style={{ transform: 'translate3d(0, 0, 60px)' }} 
          /> */}
          
          {/* Circle 4 */}
          <span 
            className="absolute block aspect-square rounded-full transition-all duration-500 ease-in-out shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(0,249,203,0.2)] w-[80px] top-[23px] right-[23px] delay-[1200ms] group-hover:[transform:translate3d(0,0,100px)]" 
            style={{ transform: 'translate3d(0, 0, 80px)' }} 
          />
          
          {/* Circle 5 (The Icon Container) */}
          {/* <span 
            className="absolute block aspect-square rounded-full transition-all duration-500 ease-in-out shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(0,249,203,0.2)] w-[50px] top-[30px] right-[30px] delay-[1600ms] grid place-content-center group-hover:[transform:translate3d(0,0,120px)]" 
            style={{ transform: 'translate3d(0, 0, 100px)' }}
          >
            {"<SR/>"}
          </span> */}
          <span 
            className="absolute block aspect-square rounded-full transition-all duration-500 ease-in-out shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] backdrop-blur-[5px] bg-[rgba(0,249,203,0.2)] w-[50px] top-[30px] right-[30px] delay-[1600ms] grid place-content-center group-hover:[transform:translate3d(0,0,120px)]" 
            style={{ transform: 'translate3d(0, 0, 100px)' }}
          >
            {/* Render the icon component with styling */}
            <ProjectIcon className="size-6 text-green-900 drop-shadow-[0_0_8px_rgba(0,137,77,0.5)]" />
          </span>
        </div>

        {/* 2. Glass Layer */}
        <div 
          className="absolute inset-2 border-l border-b border-white bg-gradient-to-b from-[rgba(255,255,255,0.349)] to-[rgba(255,255,255,0.815)] transition-all duration-500 ease-in-out [transform:translate3d(0,0,25px)]"
          style={{ 
            borderRadius: '55px', 
            borderTopRightRadius: '100%',
          }}
        />

        {/* 3. Text Content */}
        <div className="relative z-10 p-8 pt-[50px] [transform:translate3d(0,0,26px)]">
          <span className="block text-xl font-[900] text-[#00894d]">{title}</span>
          <span className="mt-5 block text-[15px] leading-tight text-[rgba(0,137,78,0.76)] font-medium">
            {description}
          </span>
          {/* Technologies Section */}
          <div className="mt-5 flex flex-wrap [transform:translate3d(0,0,26px)]">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className=" border border-[#00894d]/30 bg-[#00894d]/10 px-2.5 py-0.5 text-[11px] font-extralight uppercase tracking-tighter text-[#00894d] backdrop-blur-md transition-colors hover:bg-[#00894d]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Bottom Bar: Handles Pop-out Social Buttons */}
        <div className="absolute p-2 bottom-5 left-5 right-9 flex flex-row-reverse  items-center [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
          <div className="flex gap-2.5 [transform-style:preserve-3d]">
            {/* Social Button 1: Source Code (0.4s Delay) */}
            {sourceCode && (
              <a
                href={sourceCode}
                target="_blank"
                rel="noreferrer"
                className="w-[30px] aspect-square p-[5px] bg-white rounded-full border-none grid place-content-center hover:bg-black group/btn group-hover:[transform:translate3d(0,0,50px)]"
                style={{
                  /* FIXED: Exact shadows from your original CSS */
                  boxShadow: '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)',
                  /* FIXED: Proper commas and explicit shadow transition */
                  transition: 'transform 0.2s ease-in-out 0.4s, box-shadow ease-in-out, background-color 0.2s ease-in-out 0s',
                }}
                /* Apply the deeper shadow on hover using inline style for priority */
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 7px 5px -5px rgba(5, 71, 17, 0.5)';
                }}
              >
                <svg 
                  role="img" 
                  viewBox="0 0 24 24" 
                  className="w-[18px] h-[18px] fill-[#00894d] group-hover/btn:fill-white transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            )}

            {frontendCode && (
              <a
                href={frontendCode}
                target="_blank"
                rel="noreferrer"
                className="w-[30px] aspect-square p-[5px] bg-white rounded-full border-none grid place-content-center hover:bg-black group/btn group-hover:[transform:translate3d(0,0,50px)]"
                style={{
                  /* FIXED: Exact shadows from your original CSS */
                  boxShadow: '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)',
                  /* FIXED: Proper commas and explicit shadow transition */
                  transition: 'transform 0.2s ease-in-out 0.4s, box-shadow ease-in-out, background-color 0.2s ease-in-out 0s',
                }}
                /* Apply the deeper shadow on hover using inline style for priority */
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 7px 5px -5px rgba(5, 71, 17, 0.5)';
                }}
              >
                <svg 
                  role="img" 
                  viewBox="0 0 24 24" 
                  className="w-[18px] h-[18px] fill-[#00894d] group-hover/btn:fill-white transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            )}

            {backendCode && (
              <a
                href={backendCode}
                target="_blank"
                rel="noreferrer"
                className="w-[30px] aspect-square p-[5px] bg-white rounded-full border-none grid place-content-center hover:bg-black group/btn group-hover:[transform:translate3d(0,0,50px)]"
                style={{
                  /* FIXED: Exact shadows from your original CSS */
                  boxShadow: '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)',
                  /* FIXED: Proper commas and explicit shadow transition */
                  transition: 'transform 0.2s ease-in-out 0.6s, box-shadow ease-in-out, background-color 0.2s ease-in-out 0s',
                }}
                /* Apply the deeper shadow on hover using inline style for priority */
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 7px 5px -5px rgba(5, 71, 17, 0.5)';
                }}
              >
                <svg 
                  role="img" 
                  viewBox="0 0 24 24" 
                  className="w-[18px] h-[18px] fill-[#00894d] group-hover/btn:fill-white transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            )}

            {/* Social Button 2: Live Demo (0.6s Delay) */}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noreferrer"
                className="w-[30px] aspect-square p-[5px] bg-white rounded-full border-none grid place-content-center hover:bg-black group/btn group-hover:[transform:translate3d(0,0,50px)]"
                style={{
                  /* FIXED: Exact shadows from your original CSS */
                  boxShadow: '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)',
                  /* FIXED: Proper commas and explicit shadow transition */
                  transition: 'transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.4s, background-color 0.2s ease-in-out 0s',
                }}
                /* Apply the deeper shadow on hover using inline style for priority */
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 7px 5px -5px rgba(5, 71, 17, 0.5)';
                }}
              >
                <Telescope 
                  size={19} 
                  className="text-[#00894d] group-hover/btn:text-white" 
                  style={{ transition: 'color 0.2s ease-in-out 0s' }}
                />
              </a>
            )}
            
            {/* Social Button 3: Video Demo (0.6s Delay) */}
            {video && (
              <a
                href={video}
                target="_blank"
                rel="noreferrer"
                className="w-[30px] aspect-square p-[5px] bg-white rounded-full border-none grid place-content-center hover:bg-black group/btn group-hover:[transform:translate3d(0,0,50px)]"
                style={{
                  /* FIXED: Exact shadows from your original CSS */
                  boxShadow: '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)',
                  /* FIXED: Proper commas and explicit shadow transition */
                  transition: 'transform 0.2s ease-in-out 0.2s, box-shadow 0.2s ease-in-out 0.4s, background-color 0.2s ease-in-out 0s',
                }}
                /* Apply the deeper shadow on hover using inline style for priority */
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '-5px 20px 10px 0px rgba(5, 71, 17, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 7px 5px -5px rgba(5, 71, 17, 0.5)';
                }}
              >
                <Video 
                  size={19} 
                  className="text-[#00894d] group-hover/btn:text-white" 
                  style={{ transition: 'color 0.2s ease-in-out 0s' }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;