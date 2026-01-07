import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioInfo, skills, projects, education, coursework, certifications, hackathons } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Download, ExternalLink, Github, Mail, MapPin, Phone, Linkedin, ChevronDown, Code2, Layers, Wrench, GraduationCap, Award, Trophy, BookOpen, Container, Terminal, GitBranch, Server, Shield, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import ProjectCard from '@/components/ProjectCard';
import ContactCard from '@/components/ContactCard';
import SkillsCard from '@/components/SkillsCard';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Layers, Wrench, Container, Terminal, GitBranch, Server, Shield, Cloud,
};

/**
 * Homepage - Cinematic Portfolio for Srijan Ravisankar
 * Modern, immersive design with smooth animations
 */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      <SEOHead
        title="Srijan Ravisankar | Full-Stack Developer"
        description="Full-stack developer specializing in React, TypeScript, and cloud technologies. Building performant, scalable applications."
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* GIF Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mt-auto"
            style={{
              backgroundImage: "url('/flickering-developer.gif')",
              backgroundAttachment: 'fixed'
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Animated Background Gradients (optional - on top of GIF) */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05),transparent_50%)]" />
            {/* Floating elements */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{ 
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
              animate={{ 
                x: [0, -40, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              {/* Name - removed the GIF background from text */}
              <motion.h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="bg-white from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent font-medium">
                  {portfolioInfo.name.split(' ')[0]}
                </span>
                <br />
                <span className="text-muted-foreground font-light">
                  {portfolioInfo.name.split(' ')[1]}
                </span>
              </motion.h1>

              {/* Title Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Badge variant="secondary" className="text-sm md:text-base px-4 py-2 font-medium tracking-wide">
                  {portfolioInfo.title}
                </Badge>
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {portfolioInfo.tagline}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button size="lg" asChild className="group">
                  <Link to="/portfolio">
                    View Projects
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/resume/Srijan_Ravisankar_Resume.pdf" download>
                    <Download className="mr-2 size-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center justify-center gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href={portfolioInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="size-5" />
                </a>
                <a href={portfolioInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="size-5" />
                </a>
                <a href={`mailto:${portfolioInfo.socialLinks.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="size-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="size-6 text-muted-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-background relative">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    About Me
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {portfolioInfo.about.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4" />
                    <span>{portfolioInfo.socialLinks.location}</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-[conic-gradient(from_0deg,hsl(var(--primary)/0.1),transparent,hsl(var(--primary)/0.1))]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10 p-0">
                      {/* <Code2 className="size-24 text-primary/40 mx-auto mb-4" />
                      <p className="text-xl font-medium">Building the future,</p>
                      <p className="text-muted-foreground">one line at a time</p> */}
                      <img src="/Srijan-Professional-Image-1.png" alt="Company Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground text-lg">
                  A selection of my recent technical work
                </p>
              </div>
            </ScrollReveal>

            {/* <div className="grid md:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <Card className="group overflow-hidden h-full bg-card hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {project.period}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4">
                        {project.liveDemo && (
                          <Button size="sm" variant="default" asChild className="group/btn">
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="size-3 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.sourceCode && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                              <Github className="size-3 mr-1" />
                              Source
                            </a>
                          </Button>
                        )}
                        {project.frontendCode && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.frontendCode} target="_blank" rel="noopener noreferrer">
                              <Github className="size-3 mr-1" />
                              Frontend
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div> */}

            {/* Projects Section in Home.tsx */}
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  {/* Spread the project object props into the new component */}
                  <ProjectCard {...project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {/* <section id="skills" className="py-24 md:py-32 px-6 lg:px-8 bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Technical Skills
                </h2>
                <p className="text-muted-foreground text-lg">
                  Technologies and tools I work with
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = iconMap[skill.icon] || Code2;
                return (
                  <ScrollReveal key={skill.category} delay={index * 0.1}>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <IconComponent className="size-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg">{skill.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item) => (
                            <Badge key={item} variant="secondary" className="font-normal">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* Skills Section in Home.tsx */}
        <section id="skills" className="py-24 md:py-32 px-6 lg:px-8 bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Technical Skills
                </h2>
                <p className="text-muted-foreground text-lg">
                  Technologies and tools I work with
                </p>
              </div>
            </ScrollReveal>

            {/* The Accordion Skills Card Replacement */}
            <ScrollReveal delay={0.2}>
              <div className="hidden md:block">
                <SkillsCard />
              </div>
              
              {/* Mobile Fallback: Keep the grid for mobile devices as the accordion is too wide */}
              <div className="grid md:hidden gap-4">
                {skills.map((skill) => (
                  <Card key={skill.category} className="bg-card/50">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-[#ff5a91] mb-2">{skill.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map(item => (
                          <Badge key={item} variant="secondary">{item}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Education & Coursework Section */}
        <section id="education" className="py-24 md:py-32 px-6 lg:px-8 bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="size-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                  </div>
                  <Card className="bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{education.institution}</h3>
                        <p className="text-muted-foreground">{education.degree}</p>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">CGPA: {education.cgpa}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="size-4" />
                          {education.location}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Expected Graduation: {education.expectedGraduation}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>

              {/* Coursework */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BookOpen className="size-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Coursework</h2>
                  </div>
                  <Card className="bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {coursework.map((course) => (
                          <Badge key={course} variant="secondary" className="font-normal">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="size-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Certifications
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  Professional credentials and skills badges
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = iconMap[cert.icon] || Award;
                return (
                  <ScrollReveal key={cert.name} delay={index * 0.05}>
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                          <IconComponent className="size-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.provider}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hackathons Section */}
        <section id="hackathons" className="py-24 md:py-32 px-6 lg:px-8 bg-accent/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Trophy className="size-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Hackathons & Competitions
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              {hackathons.map((hackathon, index) => (
                <ScrollReveal key={hackathon.name} delay={index * 0.1}>
                  <Card className="bg-card/50 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl font-bold">{hackathon.name}</h3>
                          <p className="text-muted-foreground">{hackathon.date}</p>
                        </div>
                        <Badge className="w-fit bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                          <Trophy className="size-3 mr-1" />
                          {hackathon.award}
                        </Badge>
                      </div>
                      <ul className="space-y-3">
                        {hackathon.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Updated Contact CTA Section in Home.tsx */}
        <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center text-center space-y-12">
                
                {/* The New Card Replacement */}
                <ContactCard />

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-[url('/design-glitter.gif')] bg-cover bg-center bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                    Ready to Contribute to Your Engineering Team!
                  </h2>
                  <p className="text-muted-foreground max-w-lg mx-auto">
                    I'm currently seeking internships and full-time opportunities for 2026. 
                    Feel free to reach out via the links in the card above.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
