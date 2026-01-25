import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';
import {
  Search,
  TrendingUp,
  MapPin,
  BarChart3,
  Target,
  CheckCircle2,
  Star,
  Zap,
  Users,
  Globe,
  Sparkles,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import { convertCOPtoUSD } from '@/utils/pricing';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';
import { getBreadcrumbSchema, getFaqSchema, getServiceSchema } from '@/utils/schema';

const pageCopy = {
  es: {
    metaTitle: 'SEO y Posicionamiento Web en Bogota | Tech Tecnic',
    metaDescription:
      'Servicios de SEO local y posicionamiento web en Bogota. Aumenta tu visibilidad en Google, atrae mas clientes y mejora tu ranking con estrategias probadas.',
    metaKeywords: [
      'seo bogota',
      'posicionamiento web colombia',
      'seo local bogota',
      'google my business',
      'posicionamiento google',
      'agencia seo colombia',
      'optimizacion seo',
      'consultor seo bogota',
    ],
    badge: 'SEO y Posicionamiento Local',
    heroTitleTop: 'Aparece en',
    heroTitleMid: 'Google',
    heroTitleBottom: 'cuando te buscan',
    heroText:
      'Posicionamiento SEO en Bogota y Colombia. Aumenta tu visibilidad, atrae mas clientes y domina tu mercado local.',
    trust: ['Resultados en 6 meses', 'Sin contratos largos'],
    ctaPrimary: 'Auditoria SEO Gratis',
    ctaSecondary: 'Ver planes',
    benefitsTitle: 'Por que invertir en SEO?',
    benefitsSubtitle: 'El SEO es la inversion mas rentable a largo plazo',
    benefits: [
      {
        title: 'Mas Trafico Organico',
        description: 'Aumenta las visitas a tu sitio web sin pagar por publicidad.',
        color: 'from-green-500 to-emerald-500',
        icon: TrendingUp,
      },
      {
        title: 'Visibilidad Local',
        description: 'Aparece en busquedas locales cuando clientes te buscan cerca.',
        color: 'from-blue-500 to-cyan-500',
        icon: MapPin,
      },
      {
        title: 'Mas Clientes',
        description: 'Atrae clientes potenciales que buscan exactamente lo que ofreces.',
        color: 'from-purple-500 to-pink-500',
        icon: Users,
      },
      {
        title: 'Resultados Medibles',
        description: 'Reportes mensuales con metricas claras de tu crecimiento.',
        color: 'from-orange-500 to-red-500',
        icon: BarChart3,
      },
    ],
    servicesBadge: 'Nuestros Servicios',
    servicesTitle: 'Estrategia SEO 360',
    servicesSubtitle: 'Todo lo que necesitas para posicionar tu negocio',
    services: [
      {
        title: 'SEO Tecnico',
        items: [
          'Optimizacion de velocidad de carga',
          'Core Web Vitals',
          'Estructura de URLs amigables',
          'Sitemap XML y robots.txt',
          'Schema Markup (datos estructurados)',
          'Indexacion en Google Search Console',
        ],
      },
      {
        title: 'SEO On-Page',
        items: [
          'Investigacion de keywords',
          'Optimizacion de titulos y meta descripciones',
          'Estructura de contenido (H1, H2, H3)',
          'Optimizacion de imagenes (alt text)',
          'Enlaces internos estrategicos',
          'Contenido optimizado para conversion',
        ],
      },
      {
        title: 'SEO Local (GEO)',
        items: [
          'Google My Business optimizado',
          'Citas locales en directorios',
          'Resenas y reputacion online',
          'Keywords geo-localizadas',
          'Google Maps optimization',
          'Local Schema markup',
        ],
      },
      {
        title: 'Analytics y Reportes',
        items: [
          'Google Analytics 4 configurado',
          'Google Tag Manager',
          'Seguimiento de conversiones',
          'Reportes mensuales detallados',
          'Analisis de competencia',
          'Recomendaciones estrategicas',
        ],
      },
    ],
    pricingTitle: 'Planes de SEO Mensual',
    pricingSubtitle: 'Elige el plan que se ajuste a tus objetivos',
    popularLabel: 'Mas Popular',
    packages: [
      {
        name: 'SEO Basico',
        priceCOP: 500000,
        period: '/mes',
        description: 'Ideal para pequenos negocios que comienzan',
        features: [
          'Auditoria SEO inicial',
          'Optimizacion on-page (5 paginas)',
          'Google My Business basico',
          '5 keywords objetivo',
          'Reporte mensual',
          'Soporte por email',
        ],
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'SEO Profesional',
        priceCOP: 900000,
        period: '/mes',
        description: 'Para empresas que buscan crecer',
        features: [
          'Todo lo del plan Basico',
          'Optimizacion on-page (15 paginas)',
          'Google My Business completo',
          '15 keywords objetivo',
          'Link building mensual',
          'Reporte detallado + reunion',
        ],
        popular: true,
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'SEO Avanzado',
        priceCOP: 1500000,
        period: '/mes',
        description: 'Para empresas competitivas',
        features: [
          'Todo lo del plan Profesional',
          'Optimizacion ilimitada',
          'Estrategia de contenido',
          '30+ keywords objetivo',
          'Link building avanzado',
          'Consultor dedicado',
        ],
        color: 'from-purple-500 to-pink-500',
      },
    ],
    note:
      'Nota: Los resultados de SEO toman entre 3-6 meses. Recomendamos un compromiso minimo de 6 meses para ver resultados significativos.',
    localTitle: 'SEO Local en Bogota',
    localText:
      'El 46% de las busquedas en Google son locales. Si tienes un negocio fisico en Bogota, el SEO local es esencial para que te encuentren.',
    localItems: [
      'Aparece en Google Maps',
      'Atrae clientes cercanos',
      'Aumenta el trafico a tu local',
      'Destaca sobre tu competencia',
    ],
    localCardTitle: 'Tu negocio aparece en Google?',
    localCardText:
      'Solicita una auditoria SEO gratuita y descubre como mejorar tu posicionamiento.',
    localCardButton: 'Solicitar auditoria gratis',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: 'Cuando se ven resultados de SEO?',
        a: 'Los resultados suelen verse entre 3 y 6 meses, segun competencia y estado actual.',
      },
      {
        q: 'Incluye SEO local y Google My Business?',
        a: 'Si. Optimizamos tu ficha, citas locales y presencia en Google Maps.',
      },
      {
        q: 'Hay permanencia minima?',
        a: 'Recomendamos un minimo de 6 meses para resultados significativos.',
      },
    ],
    ctaTitle: 'Listo para posicionar tu negocio en Google?',
    ctaDescription: 'Solicita una auditoria SEO gratuita y descubre el potencial de tu sitio web.',
    ctaButton: 'Auditoria SEO Gratis',
  },
  en: {
    metaTitle: 'SEO Agency in Bogota | Local SEO and GEO | Tech Tecnic',
    metaDescription:
      'Local SEO and web positioning in Bogota. Rank on Google, attract clients, and grow in Colombia, Latam, and USA.',
    metaKeywords: [
      'seo agency bogota',
      'local seo colombia',
      'google maps optimization',
      'seo agency colombia',
      'geo seo',
      'google business profile',
      'seo consultant bogota',
    ],
    badge: 'SEO and Local Positioning',
    heroTitleTop: 'Show up on',
    heroTitleMid: 'Google',
    heroTitleBottom: 'when they search for you',
    heroText:
      'SEO positioning in Bogota and Colombia. Increase visibility, attract more clients, and dominate your local market.',
    trust: ['Results in 6 months', 'No long contracts'],
    ctaPrimary: 'Free SEO Audit',
    ctaSecondary: 'View plans',
    benefitsTitle: 'Why invest in SEO?',
    benefitsSubtitle: 'SEO is the most profitable long-term investment',
    benefits: [
      {
        title: 'More Organic Traffic',
        description: 'Increase website visits without paying for ads.',
        color: 'from-green-500 to-emerald-500',
        icon: TrendingUp,
      },
      {
        title: 'Local Visibility',
        description: 'Appear in local searches when clients look for you nearby.',
        color: 'from-blue-500 to-cyan-500',
        icon: MapPin,
      },
      {
        title: 'More Clients',
        description: 'Attract leads who need exactly what you offer.',
        color: 'from-purple-500 to-pink-500',
        icon: Users,
      },
      {
        title: 'Measurable Results',
        description: 'Monthly reports with clear growth metrics.',
        color: 'from-orange-500 to-red-500',
        icon: BarChart3,
      },
    ],
    servicesBadge: 'Our Services',
    servicesTitle: 'SEO Strategy 360',
    servicesSubtitle: 'Everything you need to rank your business',
    services: [
      {
        title: 'Technical SEO',
        items: [
          'Site speed optimization',
          'Core Web Vitals',
          'Friendly URL structure',
          'XML sitemap and robots.txt',
          'Schema Markup (structured data)',
          'Indexing in Google Search Console',
        ],
      },
      {
        title: 'On-Page SEO',
        items: [
          'Keyword research',
          'Title and meta description optimization',
          'Content structure (H1, H2, H3)',
          'Image optimization (alt text)',
          'Strategic internal linking',
          'Conversion-ready content',
        ],
      },
      {
        title: 'Local SEO (GEO)',
        items: [
          'Optimized Google My Business',
          'Local citations in directories',
          'Reviews and online reputation',
          'Geo-targeted keywords',
          'Google Maps optimization',
          'Local Schema markup',
        ],
      },
      {
        title: 'Analytics and Reporting',
        items: [
          'Google Analytics 4 setup',
          'Google Tag Manager',
          'Conversion tracking',
          'Detailed monthly reports',
          'Competitor analysis',
          'Strategic recommendations',
        ],
      },
    ],
    pricingTitle: 'Monthly SEO Plans',
    pricingSubtitle: 'Choose the plan that fits your goals',
    popularLabel: 'Most Popular',
    packages: [
      {
        name: 'SEO Starter',
        priceCOP: 500000,
        period: '/month',
        description: 'Ideal for small businesses getting started',
        features: [
          'Initial SEO audit',
          'On-page optimization (5 pages)',
          'Basic Google My Business',
          '5 target keywords',
          'Monthly report',
          'Email support',
        ],
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'SEO Professional',
        priceCOP: 900000,
        period: '/month',
        description: 'For companies ready to grow',
        features: [
          'Everything in Starter',
          'On-page optimization (15 pages)',
          'Full Google My Business',
          '15 target keywords',
          'Monthly link building',
          'Detailed report + call',
        ],
        popular: true,
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'SEO Advanced',
        priceCOP: 1500000,
        period: '/month',
        description: 'For competitive industries',
        features: [
          'Everything in Professional',
          'Unlimited optimization',
          'Content strategy',
          '30+ target keywords',
          'Advanced link building',
          'Dedicated consultant',
        ],
        color: 'from-purple-500 to-pink-500',
      },
    ],
    note:
      'Note: SEO results take 3-6 months. We recommend a minimum 6-month commitment to see significant results.',
    localTitle: 'Local SEO in Bogota',
    localText:
      '46% of Google searches are local. If you have a physical business in Bogota, local SEO is essential for visibility.',
    localItems: [
      'Appear in Google Maps',
      'Attract nearby customers',
      'Increase foot traffic',
      'Stand out from competitors',
    ],
    localCardTitle: 'Does your business show up on Google?',
    localCardText: 'Request a free SEO audit and discover how to improve your ranking.',
    localCardButton: 'Request free audit',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'When do SEO results show?',
        a: 'Results typically appear in 3 to 6 months, depending on competition and current state.',
      },
      {
        q: 'Do you include local SEO and Google Business?',
        a: 'Yes. We optimize your listing, local citations, and Google Maps presence.',
      },
      {
        q: 'Is there a minimum commitment?',
        a: 'We recommend at least 6 months to see meaningful results.',
      },
    ],
    ctaTitle: 'Ready to rank your business on Google?',
    ctaDescription: 'Request a free SEO audit and unlock your website potential.',
    ctaButton: 'Free SEO Audit',
  },
};

const results = [
  { metric: '+250%', labelEs: 'Trafico organico promedio', labelEn: 'Average organic traffic', icon: TrendingUp },
  { metric: 'Top 3', labelEs: 'Posiciones en Google', labelEn: 'Google rankings', icon: Star },
  { metric: '+180%', labelEs: 'Leads calificados', labelEn: 'Qualified leads', icon: Target },
  { metric: '6 months', labelEs: 'Promedio de resultados', labelEn: 'Average time to results', icon: Zap },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/seo-geo';
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

export default async function SEOGeoPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/seo-geo';
  const schemaData = getServiceSchema(locale, copy.metaTitle, copy.metaDescription, path);
  const faqSchema = getFaqSchema(copy.faq, locale);
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'es' ? 'Inicio' : 'Home', url: buildLocalizedUrl('/', locale) },
      { name: locale === 'es' ? 'Servicios' : 'Services', url: buildLocalizedUrl('/servicios', locale) },
      { name: locale === 'es' ? 'SEO y Posicionamiento' : 'SEO and Positioning', url: buildLocalizedUrl(path, locale) },
    ],
    locale
  );
  const allServicesLabel = locale === 'es' ? 'Ver todos los servicios' : 'View all services';
  const allServicesUrl = buildLocalizedUrl('/servicios', locale);

  const formatPrice = (priceCOP: number) => {
    const amount = locale === 'es' ? priceCOP : convertCOPtoUSD(priceCOP);
    const currency = locale === 'es' ? 'COP' : 'USD';
    const formatted = locale === 'es'
      ? amount.toLocaleString('es-CO')
      : amount.toLocaleString('en-US');
    return { formatted, currency };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Search className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-400 font-medium">{copy.badge}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">{copy.heroTitleTop}</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  {copy.heroTitleMid}
                </span>
                <br />
                <span className="text-white">{copy.heroTitleBottom}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">{copy.heroText}</p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {copy.trust.map((item) => (
                  <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message={
                    locale === 'es'
                      ? 'Hola, quiero una auditoria SEO gratuita para mi sitio'
                      : 'Hi, I want a free SEO audit for my website'
                  }
                  service="seo-geo"
                  action="click_cta_hero"
                  label="SEO Audit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  {copy.ctaPrimary}
                </WhatsAppButton>
                <Link
                  href="#precios"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              {results.map((result) => {
                const Icon = result.icon;
                const label = locale === 'es' ? result.labelEs : result.labelEn;
                return (
                  <div
                    key={result.metric}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-orange-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.benefitsTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.benefitsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {copy.benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">{copy.servicesBadge}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{copy.servicesTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.servicesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Search className="w-6 h-6 text-orange-400" />
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-orange-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.pricingTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.pricingSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {copy.packages.map((pkg) => {
              const price = formatPrice(pkg.priceCOP);
              const period = locale === 'es' ? pkg.period : pkg.period;
              return (
                <div
                  key={pkg.name}
                  className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                    pkg.popular
                      ? 'border-orange-500 scale-105 shadow-2xl shadow-orange-500/20'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${pkg.color} text-white text-sm font-semibold`}>
                        {copy.popularLabel}
                      </div>
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6`}>
                    <Search className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      ${price.formatted}
                    </span>
                    <span className="text-gray-500 text-sm"> {period} {price.currency}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <PricingButton
                    planName={pkg.name}
                    service="seo-geo"
                    message={
                      locale === 'es'
                        ? `Hola, quiero informacion sobre el plan SEO ${pkg.name}`
                        : `Hi, I want information about the ${pkg.name} SEO plan`
                    }
                    color={pkg.popular ? pkg.color : ''}
                  >
                    {locale === 'es' ? 'Comenzar ahora' : 'Get started'}
                  </PricingButton>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">{locale === 'es' ? 'Nota:' : 'Note:'}</strong> {copy.note}
            </p>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <MapPin className="w-16 h-16 text-orange-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">{copy.localTitle}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">{copy.localText}</p>
              <ul className="space-y-3">
                {copy.localItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-orange-500/30">
              <Globe className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{copy.localCardTitle}</h3>
              <p className="text-gray-400 mb-6">{copy.localCardText}</p>
              <WhatsAppButton
                message={
                  locale === 'es'
                    ? 'Hola, quiero una auditoria SEO gratuita para mi sitio'
                    : 'Hi, I want a free SEO audit for my website'
                }
                service="seo-geo"
                action="click_cta_footer"
                label="SEO Audit"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                {copy.localCardButton}
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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

      <section className="relative py-6">
        <div className="text-center">
          <Link href={allServicesUrl} className="text-t_primary hover:text-t_accent transition-colors">
            {allServicesLabel}
          </Link>
        </div>
      </section>

      <ContactCTA title={copy.ctaTitle} description={copy.ctaDescription} primaryText={copy.ctaButton} />
    </div>
  );
}
