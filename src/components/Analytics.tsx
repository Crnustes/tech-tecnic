// Google Analytics Component
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    
    if (!GA_ID) {
      console.warn('Google Analytics ID not found. Set NEXT_PUBLIC_GA_ID in .env');
      return;
    }

    // Load GA script
    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_ID, {
        page_path: window.location.pathname,
      });
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;
    
    const url = pathname + searchParams.toString();
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}

// Event tracking helper
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Específicos para Tech Tecnic
export const trackContactForm = (success: boolean) => {
  trackEvent(
    success ? 'form_submit_success' : 'form_submit_error',
    'contact',
    'contact_form'
  );
};

export const trackWhatsAppClick = () => {
  trackEvent('click', 'engagement', 'whatsapp_button');
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('view', 'service', serviceName);
};

export const trackBlogRead = (postTitle: string, readTime: string) => {
  trackEvent('read', 'blog', postTitle, parseInt(readTime));
};

// Type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
