import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
}

/**
 * SEO component for managing page meta tags
 * Handles title, description, and Open Graph tags
 */
export function SEOHead({ 
  title, 
  description, 
  image = '/resume-preview.png',
  type = 'website'
}: SEOHeadProps) {
  const location = useLocation();
  
  const fullTitle = title ? title : "Srijan Ravisankar Developer Portfolio";
  
  const fullDescription = description || "Explore my featured projects and technical journey.";
  
  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', fullDescription);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', fullDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Srijan Ravisankar', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', fullDescription);
    updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('author', 'Srijan Ravisankar');
    updateMetaTag('keywords', `Portfolio, Srijan Ravisankar, Full-stack developer specializing in React, TypeScript, and cloud technologies. Building performant, scalable applications, Explore my featured projects and technical journey`);
  }, [fullTitle, fullDescription, fullUrl, image, type]);

  return null;
}
