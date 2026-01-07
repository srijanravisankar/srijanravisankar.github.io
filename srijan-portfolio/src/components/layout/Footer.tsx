import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioInfo } from '@/data/portfolio';
import { Link } from 'react-router-dom';

/**
 * Modern footer with social links and quick navigation
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="grid md:grid-cols-3 gap-8 py-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="text-lg font-semibold tracking-tight flex items-center gap-2">
              <span className="text-primary">&lt;</span>
              <span>SR</span>
              <span className="text-primary">/&gt;</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {portfolioInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href={portfolioInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href={portfolioInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href={`mailto:${portfolioInfo.socialLinks.email}`}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              {portfolioInfo.socialLinks.email}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-3 border-t border-border flex flex-col sm:flex-row items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {portfolioInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
