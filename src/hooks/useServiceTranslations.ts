'use client';

import { useTranslations, useLocale } from 'next-intl';
import { servicesCatalog } from '@/config/servicesCatalog';
import { convertCOPtoUSD } from '@/utils/pricing';

// Mapeo de slugs a claves de traducción
const slugToTranslationKey: Record<string, string> = {
  'desarrollo-web': 'desarrolloWeb',
  'seo-geo': 'seoGeo',
  'automatizacion-ia': 'automatizacionIa',
  'integraciones': 'integraciones',
  'mantenimiento': 'mantenimiento',
  'apps-moviles': 'appMoviles',
  'chatbot-wp-ia': 'chatbotWhatsApp',
  'automatizaciones': 'automatizaciones',
};

export function useServiceTranslations(slug: string) {
  const t = useTranslations();
  const locale = useLocale();
  
  // Obtener la clave de traducción basada en el slug
  const translationKey = slugToTranslationKey[slug] || slug;
  
  // Obtener cada propiedad de traducción
  const title = t(`services.catalog.${translationKey}.title`);
  const subtitle = t(`services.catalog.${translationKey}.subtitle`);
  const description = t(`services.catalog.${translationKey}.description`);
  const features = t.raw(`services.catalog.${translationKey}.features`) as string[];
  
  // Obtener el servicio de la config
  const service = servicesCatalog.find(s => s.slug === slug);
  
  // Extraer precio COP de la config
  const priceCOP = service?.price ? parseInt(service.price.match(/\d+/)?.[0] || '0') * 1000 : 0;
  const priceUSD = convertCOPtoUSD(priceCOP);

  return {
    title,
    subtitle,
    description,
    features,
    service,
    priceCOP,
    priceUSD,
    locale,
    formatPrice: (amount: number) => {
      if (locale === 'es') {
        return `$${amount.toLocaleString('es-CO')} COP`;
      } else {
        return `$${amount.toLocaleString('en-US')} USD`;
      }
    },
  };
}
