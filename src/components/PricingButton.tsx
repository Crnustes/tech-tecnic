'use client';

import Link from 'next/link';

interface PricingButtonProps {
  planName: string;
  service: string;
  message: string;
  color: string;
  children: React.ReactNode;
}

export default function PricingButton({
  planName,
  service,
  message,
  color,
  children,
}: PricingButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'plan_click',
        eventCategory: 'Pricing',
        eventAction: 'select_plan',
        eventLabel: planName,
        service,
        plan: planName,
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
      data-gtm-category="Pricing"
      data-gtm-action="select_plan"
      data-gtm-label={planName}
      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r ${color} text-white font-semibold hover:scale-105 transition-transform`}
    >
      {children}
    </Link>
  );
}
