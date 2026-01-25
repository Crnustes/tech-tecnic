'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { servicesCatalog } from '@/config/servicesCatalog';
import { convertCOPtoUSD } from '@/utils/pricing';
import { buildLocalizedUrl } from '@/utils/seo';

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

export default function ServiceCards() {
  const t = useTranslations();
  const locale = useLocale();

  const activeServices = servicesCatalog.filter(service => service.enabled !== false);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeServices.map((service) => {
          const translationKey = slugToTranslationKey[service.slug] || service.slug;

          const title = t(`services.catalog.${translationKey}.title`);
          const subtitle = t(`services.catalog.${translationKey}.subtitle`);
          const description = t(`services.catalog.${translationKey}.description`);
          const features = t.raw(`services.catalog.${translationKey}.features`) as string[];

          const priceCOP = service.price ? parseInt(service.price.match(/\d+/)?.[0] || '0') * 1000 : 0;
          const priceUSD = convertCOPtoUSD(priceCOP);

          return (
            <Link
              key={service.id}
              href={buildLocalizedUrl(`/servicios/${service.slug}`, locale)}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-white/10 overflow-hidden hover:border-t_primary/50 transition-all hover:shadow-2xl hover:shadow-t_primary/20"
            >
              <div className="p-8">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-t_primary transition-colors">
                  {title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">{subtitle}</p>

                <p className="text-gray-300 text-sm mb-6 line-clamp-3">{description}</p>

                <ul className="space-y-2 mb-6">
                  {features?.slice(0, 2).map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-t_primary mt-1">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-end">
                    <div>
                      {locale === 'es' ? (
                        <p className="text-sm text-gray-400 mb-1">Desde</p>
                      ) : (
                        <p className="text-sm text-gray-400 mb-1">From</p>
                      )}
                      <p className="text-2xl font-bold text-t_primary">
                        {locale === 'es' ? (
                          <>
                            ${priceCOP.toLocaleString('es-CO')}
                            <span className="text-sm text-gray-400 ml-1">COP</span>
                          </>
                        ) : (
                          <>
                            ${priceUSD.toLocaleString('en-US')}
                            <span className="text-sm text-gray-400 ml-1">USD</span>
                          </>
                        )}
                      </p>
                    </div>
                    <div className="text-t_accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-2xl">-&gt;</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-t_primary to-t_accent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
