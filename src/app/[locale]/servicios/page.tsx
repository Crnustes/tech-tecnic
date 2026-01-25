import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { enabledServices } from '@/config/servicesCatalog';
import ContactCTA from '@/components/ContactCTA';
import ServiceCards from '@/components/ServiceCards';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';
import { getFaqSchema, getItemListSchema } from '@/utils/schema';
import { convertPriceString } from '@/utils/pricing';

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

const pageCopy = {
  es: {
    metaTitle: 'Servicios de Desarrollo Web e IA | Tech Tecnic Bogota',
    metaDescription:
      'Servicios profesionales de desarrollo web, SEO, automatizacion con IA e integraciones en Bogota, Colombia. Impulsa tu negocio con tecnologia de vanguardia.',
    metaKeywords: [
      'desarrollo web bogota',
      'SEO colombia',
      'automatizacion IA',
      'agencia digital bogota',
      'desarrollo wordpress',
      'ecommerce colombia',
      'posicionamiento web',
    ],
    badge: 'Servicios Profesionales',
    titleTop: 'Servicios de',
    titleBottom: 'Desarrollo Digital',
    intro:
      'Soluciones tecnologicas a medida en Bogota, Colombia para empresas que buscan crecer en el mundo digital.',
    stats: ['50+ Proyectos Exitosos', 'Atencion en Bogota', 'Soporte Continuo'],
    cta: 'Ver mas detalles',
    whyTitle: 'Por que elegir Tech Tecnic?',
    whySubtitle: 'Somos tu socio tecnologico en Bogota para transformar ideas en realidad',
    whyCards: [
      {
        title: 'Experiencia Local',
        description: 'Conocemos el mercado colombiano y las necesidades de empresas en Bogota.',
      },
      {
        title: 'Tecnologia Moderna',
        description: 'Usamos las ultimas herramientas y frameworks para garantizar calidad.',
      },
      {
        title: 'Soporte Continuo',
        description: 'No te dejamos solo despues del lanzamiento. Te acompanamos en tu crecimiento.',
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: 'Que servicios ofrece Tech Tecnic?',
        a: 'Desarrollo web, SEO, automatizacion con IA, integraciones, mantenimiento y apps moviles.',
      },
      {
        q: 'Trabajan solo en Bogota?',
        a: 'Atendemos Bogota y proyectos en Colombia, Latam y USA.',
      },
      {
        q: 'Como solicito una cotizacion?',
        a: 'Puedes escribirnos por WhatsApp o usar el formulario de contacto.',
      },
    ],
  },
  en: {
    metaTitle: 'Web Development and AI Services | Tech Tecnic Bogota',
    metaDescription:
      'Professional web development, SEO, AI automation and integrations in Bogota, Colombia. Boost your business with modern technology.',
    metaKeywords: [
      'web development bogota',
      'SEO colombia',
      'AI automation',
      'digital agency bogota',
      'wordpress development',
      'ecommerce colombia',
      'search positioning',
    ],
    badge: 'Professional Services',
    titleTop: 'Digital',
    titleBottom: 'Development Services',
    intro:
      'Custom technology solutions in Bogota, Colombia for companies ready to grow in the digital world.',
    stats: ['50+ Successful Projects', 'Local Support in Bogota', 'Ongoing Support'],
    cta: 'View details',
    whyTitle: 'Why choose Tech Tecnic?',
    whySubtitle: 'We are your tech partner in Bogota to turn ideas into reality',
    whyCards: [
      {
        title: 'Local Experience',
        description: 'We know the Colombian market and the needs of companies in Bogota.',
      },
      {
        title: 'Modern Technology',
        description: 'We use the latest tools and frameworks to ensure quality.',
      },
      {
        title: 'Continuous Support',
        description: 'We stay with you after launch and support your growth.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'What services does Tech Tecnic offer?',
        a: 'Web development, SEO, AI automation, integrations, maintenance, and mobile apps.',
      },
      {
        q: 'Do you work only in Bogota?',
        a: 'We serve Bogota and projects across Colombia, Latam, and the USA.',
      },
      {
        q: 'How can I request a quote?',
        a: 'You can message us on WhatsApp or use the contact form.',
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios';
  const canonicalUrl = buildLocalizedUrl(path, locale);

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: copy.metaKeywords,
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      type: 'website',
      url: canonicalUrl,
      locale: locale === 'es' ? 'es_CO' : 'en_US',
    },
    alternates: {
      canonical: canonicalUrl,
      ...buildAlternates(path),
    },
  };
}

export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const t = await getTranslations();

  const services = enabledServices.map((service) => {
    const translationKey = slugToTranslationKey[service.slug] || service.slug;
    return {
      icon: service.icon,
      title: t(`services.catalog.${translationKey}.title`),
      slug: service.slug,
      description: t(`services.catalog.${translationKey}.description`),
      features: t.raw(`services.catalog.${translationKey}.features`) as string[],
      color: service.color,
      price: service.price ? convertPriceString(service.price, locale) : undefined,
    };
  });
  const schemaData = getItemListSchema(
    services.map((service) => ({
      name: service.title,
      url: buildLocalizedUrl(`/servicios/${service.slug}`, locale),
    })),
    locale
  );
  const faqSchema = getFaqSchema(copy.faq, locale);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">{copy.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {copy.titleTop}
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              {copy.titleBottom}
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">{copy.intro}</p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {copy.stats.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-slate-900/50 border border-white/10 p-8 hover:border-t_primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-t_primary/10"
                >
                  {/* Gradient glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Price */}
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl font-bold text-white group-hover:text-t_primary transition-colors">
                        {service.title}
                      </h2>
                      <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                        {service.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
                          />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/servicios/${service.slug}`}
                      className={`group/btn flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold hover:scale-105 transition-transform shadow-lg`}
                    >
                      {copy.cta}
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.whyTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.whySubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.whyCards.map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <ServiceCards />

      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{copy.faqTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {copy.faq.map((item) => (
              <details key={item.q} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <summary className="cursor-pointer text-white font-semibold">{item.q}</summary>
                <p className="mt-2 text-gray-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}
