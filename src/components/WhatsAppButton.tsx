'use client';

import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';

interface WhatsAppButtonProps {
  message: string;
  service: string;
  action?: 'click_cta_hero' | 'click_cta_footer' | 'click_cta_trial';
  label: string;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

export default function WhatsAppButton({
  message,
  service,
  action = 'click_cta_hero',
  label,
  icon: Icon,
  className = '',
  children,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'whatsapp_click',
        eventCategory: 'WhatsApp',
        eventAction: action,
        eventLabel: label,
        service,
      });
    }
  };

  const phone = '573337151064';
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <Link
      href={href}
      target="_blank"
      onClick={handleClick}
      data-gtm-category="WhatsApp"
      data-gtm-action={action}
      data-gtm-label={label}
      className={className}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </Link>
  );
}
