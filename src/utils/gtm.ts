/**
 * Google Tag Manager tracking utilities
 * Add data-* attributes to elements for GTM tracking
 */

export interface GTMEvent {
  event: string;
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
  service?: string;
  plan?: string;
}

/**
 * Push event to dataLayer for GTM
 */
export const trackEvent = (eventData: GTMEvent) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(eventData);
  }
};

/**
 * Track WhatsApp CTA click
 */
export const trackWhatsAppClick = (service: string, action: string = 'click') => {
  trackEvent({
    event: 'whatsapp_click',
    eventCategory: 'WhatsApp',
    eventAction: action,
    eventLabel: service,
    service,
  });
};

/**
 * Track form submission
 */
export const trackFormSubmit = (formName: string, service?: string) => {
  trackEvent({
    event: 'form_submit',
    eventCategory: 'Form',
    eventAction: 'submit',
    eventLabel: formName,
    service,
  });
};

/**
 * Track plan selection
 */
export const trackPlanClick = (planName: string, service: string) => {
  trackEvent({
    event: 'plan_click',
    eventCategory: 'Pricing',
    eventAction: 'select_plan',
    eventLabel: planName,
    service,
    plan: planName,
  });
};

/**
 * Generate WhatsApp link with tracking
 */
export const getWhatsAppLink = (message: string, service: string): string => {
  const phone = '573337151064';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

/**
 * Generate data attributes for GTM tracking
 */
export const getGTMAttributes = (
  category: string,
  action: string,
  label?: string
): Record<string, string> => {
  return {
    'data-gtm-category': category,
    'data-gtm-action': action,
    ...(label && { 'data-gtm-label': label }),
  };
};
