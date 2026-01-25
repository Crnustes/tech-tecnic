import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';
import {
  Code,
  CheckCircle2,
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Sparkles,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import { convertCOPtoUSD } from '@/utils/pricing';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';
import { getFaqSchema, getServiceSchema } from '@/utils/schema';

const pageCopy = {
  es: {
    metaTitle: 'Desarrollo Web en Bogota | WordPress, React, Next.js | Tech Tecnic',
    metaDescription:
      'Desarrollo web profesional en Bogota. Landing pages, e-commerce y aplicaciones web con WordPress, React y Next.js. Diseno moderno y optimizado para SEO.',
    metaKeywords: [
      'desarrollo web bogota',
      'desarrollo wordpress colombia',
      'ecommerce woocommerce',
      'react nextjs bogota',
      'diseno web profesional',
      'landing page bogota',
      'tienda online colombia',
    ],
    heroBadge: 'Desarrollo Web Profesional',
    heroTitleTop: 'Sitios Web que',
    heroTitleMid: 'Convierten Visitantes',
    heroTitleBottom: 'en Clientes',
    heroText:
      'Desarrollo web profesional en Bogota. Desde landing pages hasta e-commerce completos con tecnologia de vanguardia.',
    stats: [
      { value: '50+', label: 'Sitios creados' },
      { value: '15', label: 'Dias promedio' },
      { value: '98%', label: 'Satisfaccion' },
    ],
    ctaPrimary: 'Cotizar mi proyecto',
    ctaSecondary: 'Ver precios',
    whyTitle: 'Por que elegir nuestro desarrollo web?',
    whySubtitle: 'Tecnologia moderna con resultados medibles',
    features: [
      {
        title: 'Alto Rendimiento',
        description: 'Sitios web optimizados para cargar en menos de 3 segundos.',
      },
      {
        title: 'Seguridad SSL',
        description: 'Certificados SSL incluidos para proteger tu sitio y mejorar SEO.',
      },
      {
        title: '100% Responsive',
        description: 'Diseno perfecto en movil, tablet y desktop.',
      },
      {
        title: 'SEO Optimizado',
        description: 'Configurado para posicionarse en Google desde el dia uno.',
      },
    ],
    packagesTitle: 'Planes de Desarrollo Web',
    packagesSubtitle: 'Elige el paquete perfecto para tu proyecto',
    packagesBadge: 'Paquetes y Precios',
    packages: [
      {
        name: 'Landing Page',
        priceCOP: 400000,
        description: 'Perfecta para emprendedores y pequenos negocios',
        features: [
          '1 pagina profesional',
          'Diseno responsivo',
          'Formulario de contacto',
          'Integracion WhatsApp',
          'Google Analytics',
          'Dominio + Hosting 1 ano',
        ],
        color: 'from-cyan-500 to-blue-500',
      },
      {
        name: 'Sitio Corporativo',
        priceCOP: 900000,
        description: 'Para empresas que buscan presencia profesional',
        features: [
          '5-7 paginas',
          'Blog o noticias',
          'Correos corporativos',
          'SEO avanzado',
          'Chat en vivo',
          'Capacitacion incluida',
        ],
        popular: true,
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'E-Commerce',
        priceCOP: 1800000,
        description: 'Tienda online completa con WooCommerce',
        features: [
          'Productos ilimitados',
          'Pasarelas de pago',
          'Panel de administracion',
          'Inventario y reportes',
          'Email marketing',
          'Soporte 3 meses',
        ],
        color: 'from-orange-500 to-red-500',
      },
    ],
    techTitle: 'Tecnologias que usamos',
    techSubtitle: 'Las mejores herramientas para tu proyecto',
    technologies: [
      { name: 'WordPress', desc: 'CMS mas popular del mundo' },
      { name: 'WooCommerce', desc: 'E-commerce poderoso' },
      { name: 'React', desc: 'Interfaces modernas' },
      { name: 'Next.js', desc: 'Performance excepcional' },
      { name: 'Tailwind CSS', desc: 'Diseno profesional' },
      { name: 'Elementor', desc: 'Diseno visual avanzado' },
    ],
    localTitle: 'Desarrollo Web en Bogota con Garantia',
    localText:
      'Somos una agencia local en Bogota, Colombia. Conocemos el mercado y creamos sitios web optimizados para tu audiencia colombiana.',
    localHighlights: ['Atencion personalizada', 'Entrega en 15 dias', 'Precios justos'],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: 'Cuanto tarda el desarrollo de un sitio web?',
        a: 'Depende del alcance. En promedio entregamos sitios estandar en 15 dias.',
      },
      {
        q: 'El servicio incluye SEO y seguridad?',
        a: 'Si. Incluimos configuracion SEO basica, SSL y buenas practicas de rendimiento.',
      },
      {
        q: 'Puedo escalar a e-commerce despues?',
        a: 'Si. Podemos ampliar el sitio a tienda online o integrar nuevas funcionalidades.',
      },
    ],
    ctaTitle: 'Listo para crear tu sitio web?',
    ctaDescription:
      'Contactanos hoy y recibe una cotizacion personalizada para tu proyecto de desarrollo web en Bogota.',
    ctaButton: 'Cotizar mi sitio web',
    popularLabel: 'Mas Popular',
  },
  en: {
    metaTitle: 'Web Development Agency in Bogota | WordPress, React, Next.js | Tech Tecnic',
    metaDescription:
      'Professional web development in Bogota for Colombia, Latam, and USA. Landing pages, e-commerce, and web apps with WordPress, React, and Next.js.',
    metaKeywords: [
      'web development agency',
      'web development bogota',
      'wordpress development colombia',
      'woocommerce ecommerce',
      'react nextjs bogota',
      'nextjs agency',
      'latin america web agency',
    ],
    heroBadge: 'Professional Web Development',
    heroTitleTop: 'Websites that',
    heroTitleMid: 'Turn Visitors',
    heroTitleBottom: 'into Clients',
    heroText:
      'Professional web development in Bogota. From landing pages to full e-commerce with modern technology.',
    stats: [
      { value: '50+', label: 'Websites delivered' },
      { value: '15', label: 'Average days' },
      { value: '98%', label: 'Satisfaction' },
    ],
    ctaPrimary: 'Get a quote',
    ctaSecondary: 'View pricing',
    whyTitle: 'Why choose our web development?',
    whySubtitle: 'Modern technology with measurable results',
    features: [
      {
        title: 'High Performance',
        description: 'Websites optimized to load in under 3 seconds.',
      },
      {
        title: 'SSL Security',
        description: 'SSL certificates included to protect your site and improve SEO.',
      },
      {
        title: '100% Responsive',
        description: 'Perfect design on mobile, tablet and desktop.',
      },
      {
        title: 'SEO Optimized',
        description: 'Configured to rank in Google from day one.',
      },
    ],
    packagesTitle: 'Web Development Plans',
    packagesSubtitle: 'Choose the right package for your project',
    packagesBadge: 'Packages and Pricing',
    packages: [
      {
        name: 'Landing Page',
        priceCOP: 400000,
        description: 'Ideal for founders and small businesses',
        features: [
          '1 professional page',
          'Responsive design',
          'Contact form',
          'WhatsApp integration',
          'Google Analytics',
          'Domain + hosting 1 year',
        ],
        color: 'from-cyan-500 to-blue-500',
      },
      {
        name: 'Business Website',
        priceCOP: 900000,
        description: 'For companies that need a professional presence',
        features: [
          '5-7 pages',
          'Blog or news',
          'Business email accounts',
          'Advanced SEO',
          'Live chat',
          'Training included',
        ],
        popular: true,
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'E-Commerce',
        priceCOP: 1800000,
        description: 'Full online store with WooCommerce',
        features: [
          'Unlimited products',
          'Payment gateways',
          'Admin dashboard',
          'Inventory and reports',
          'Email marketing',
          '3 months support',
        ],
        color: 'from-orange-500 to-red-500',
      },
    ],
    techTitle: 'Technologies we use',
    techSubtitle: 'The best tools for your project',
    technologies: [
      { name: 'WordPress', desc: 'Most popular CMS in the world' },
      { name: 'WooCommerce', desc: 'Powerful e-commerce' },
      { name: 'React', desc: 'Modern interfaces' },
      { name: 'Next.js', desc: 'Outstanding performance' },
      { name: 'Tailwind CSS', desc: 'Professional design' },
      { name: 'Elementor', desc: 'Advanced visual builder' },
    ],
    localTitle: 'Web Development in Bogota with Guarantee',
    localText:
      'We are a local agency in Bogota, Colombia. We know the market and build websites optimized for Colombian audiences.',
    localHighlights: ['Personalized support', 'Delivery in 15 days', 'Fair pricing'],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'How long does a website take?',
        a: 'It depends on scope. Standard websites are delivered in about 15 days on average.',
      },
      {
        q: 'Does it include SEO and security?',
        a: 'Yes. We include basic SEO setup, SSL, and performance best practices.',
      },
      {
        q: 'Can I scale to e-commerce later?',
        a: 'Yes. We can expand the site into a store or add new features.',
      },
    ],
    ctaTitle: 'Ready to build your website?',
    ctaDescription: 'Contact us today and get a custom quote for your web project in Bogota.',
    ctaButton: 'Request my website quote',
    popularLabel: 'Most Popular',
  },
};

const icons = [Zap, Shield, Smartphone, TrendingUp];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/desarrollo-web';
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

export default async function DesarrolloWebPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/desarrollo-web';
  const schemaData = getServiceSchema(locale, copy.metaTitle, copy.metaDescription, path);
  const faqSchema = getFaqSchema(copy.faq, locale);

  const getPrice = (priceCOP: number) => {
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
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">{copy.heroBadge}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">{copy.heroTitleTop}</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {copy.heroTitleMid}
                </span>
                <br />
                <span className="text-white">{copy.heroTitleBottom}</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                {copy.heroText}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {copy.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message={
                    locale === 'es'
                      ? 'Hola, quiero cotizar desarrollo web para mi proyecto'
                      : 'Hi, I want a quote for web development for my project'
                  }
                  service="desarrollo-web"
                  action="click_cta_hero"
                  label="Desarrollo Web"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  {copy.ctaPrimary}
                </WhatsAppButton>
                <Link
                  href="#paquetes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>

            {/* Right - Image/Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-32 h-32 text-cyan-400/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.whyTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {copy.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paquetes" className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-t_primary" />
              <span className="text-sm text-t_primary font-medium">{copy.packagesBadge}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{copy.packagesTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.packagesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {copy.packages.map((pkg) => {
              const price = getPrice(pkg.priceCOP);
              return (
                <div
                  key={pkg.name}
                  className={`relative p-5 sm:p-6 md:p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                    pkg.popular
                      ? 'border-purple-500 lg:scale-105 shadow-2xl shadow-purple-500/20'
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
                    <Code className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      ${price.formatted}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{price.currency}</span>
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
                    service="desarrollo-web"
                    message={
                      locale === 'es'
                        ? `Hola, quiero cotizar el plan ${pkg.name} de Desarrollo Web`
                        : `Hi, I want a quote for the ${pkg.name} Web Development plan`
                    }
                    color={pkg.popular ? pkg.color : ''}
                  >
                    {locale === 'es' ? 'Solicitar cotizacion' : 'Request quote'}
                  </PricingButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.techTitle}</h2>
            <p className="text-gray-400">{copy.techSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {copy.technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
              >
                <div className="font-bold text-white mb-1">{tech.name}</div>
                <div className="text-xs text-gray-400">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{copy.localTitle}</h2>
          <p className="text-gray-400 text-lg mb-8">{copy.localText}</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">{copy.localHighlights[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">{copy.localHighlights[1]}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">{copy.localHighlights[2]}</span>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA */}
      <ContactCTA title={copy.ctaTitle} description={copy.ctaDescription} primaryText={copy.ctaButton} />
    </div>
  );
}
