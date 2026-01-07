import { Link, useLocation } from 'react-router-dom';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { portfolioInfo } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

/**
 * Main header component with scroll-aware styling
 * Handles in-page smooth scrolling for single-page navigation
 */
export function Header({ showGif = false }: { showGif?: boolean }) {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isTransparent = location.pathname === '/' && !isScrolled && !showGif;

  // Custom scroll handler to navigate to sections on the same page
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Extract ID from href (e.g., "#about" -> "about")
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Offset for the fixed header (h-16 is 64px, adding 16px buffer = 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Still links to home root */}
          <Link
            to="/"
            className={cn("text-lg font-semibold tracking-widest text-foreground hover:text-foreground/80 transition-colors")}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn("flex items-center gap-2", isTransparent ? 'text-white' : 'text-foreground')}
            >
              {/* <span>&lt;</span> */}
              <span>SRIJAN RAVISANKAR</span>
              {/* <span>/&gt;</span> */}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={cn(
                    "relative px-4 py-2 text-md transition-colors cursor-pointer",
                    "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {link.name}
                </a>
              </motion.div>
            ))}
            
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
              <motion.a
                href={portfolioInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                <Github className="size-4" />
              </motion.a>
              <motion.a
                href={portfolioInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                <Linkedin className="size-4" />
              </motion.a>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={cn(
                        "px-4 py-3 text-lg font-medium rounded-lg transition-colors cursor-pointer",
                        "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {link.name}
                    </a>
                  ))}
                  
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border px-4">
                    <a
                      href={portfolioInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="size-5" />
                    </a>
                    <a
                      href={portfolioInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="size-5" />
                    </a>
                    <a
                      href={`mailto:${portfolioInfo.socialLinks.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="size-5" />
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}