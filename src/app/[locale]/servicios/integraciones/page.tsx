import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';
import {
  Blocks,
  Zap,
  Link2,
  Database,
  Cloud,
  CheckCircle2,
  RefreshCw,
  Lock,
  TrendingUp,
  Sparkles,
  Code2,
  Webhook,
  Settings,
  ArrowRight,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import { convertCOPtoUSD } from '@/utils/pricing';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';
import { getBreadcrumbSchema, getFaqSchema, getServiceSchema } from '@/utils/schema';

const pageCopy = {
  es: {
    metaTitle: 'Integraciones y APIs en Bogota | Zapier, Make, HubSpot | Tech Tecnic',
    metaDescription:
      'Servicios de integracion de sistemas y APIs en Bogota. Conecta tus herramientas con Zapier, Make, HubSpot, Zoho y mas.',
    metaKeywords: [
      'integraciones apis bogota',
      'zapier colombia',
      'make integromat',
      'integracion crm',
      'apis personalizadas',
      'sincronizacion datos',
      'webhooks colombia',
      'automatizacion integraciones',
    ],
    heroBadge: 'Integraciones y APIs',
    heroTitleTop: 'Conecta todas',
    heroTitleMid: 'tus herramientas',
    heroTitleBottom: 'en un solo lugar',
    heroText:
      'Integraciones profesionales en Bogota. Conectamos tu CRM, email, WhatsApp, e-commerce y mas para un flujo sin fricciones.',
    heroBullets: [
      'Zapier, Make y APIs personalizadas',
      'Sincronizacion automatica de datos',
      'Sin duplicar informacion manualmente',
      'Todo tu ecosistema conectado',
    ],
    ctaPrimary: 'Conectar mis sistemas',
    ctaSecondary: 'Ver ejemplos',
    benefitsTitle: 'Por que integrar tus sistemas?',
    benefitsSubtitle: 'Trabaja mas inteligente, no mas duro',
    benefits: [
      { title: 'Todo Conectado', description: 'Tus herramientas trabajando juntas en armonia.' },
      { title: 'Sincronizacion Automatica', description: 'Datos actualizados en tiempo real entre sistemas.' },
      { title: 'Mayor Productividad', description: 'Elimina trabajo manual y duplicacion de datos.' },
      { title: 'Seguro y Confiable', description: 'Conexiones encriptadas y backups automaticos.' },
    ],
    typesBadge: 'Tipos de Integraciones',
    typesTitle: 'Servicios de Integracion',
    typesSubtitle: 'Soluciones para cada necesidad tecnica',
    types: [
      {
        title: 'Zapier & Make',
        description: 'Automatizaciones sin codigo que conectan +5000 apps.',
        features: [
          'Configuracion de Zaps y Scenarios',
          'Flujos multi-paso avanzados',
          'Manejo de errores y notificaciones',
          'Filtros y condiciones logicas',
          'Documentacion completa',
        ],
        tools: ['Zapier', 'Make (Integromat)', 'n8n', 'Pabbly Connect'],
      },
      {
        title: 'Integracion con CRMs',
        description: 'Conecta tu CRM con tus herramientas de marketing y ventas.',
        features: [
          'HubSpot, Zoho, Salesforce',
          'Sincronizacion bidireccional',
          'Captura automatica de leads',
          'Actualizacion de contactos',
          'Reportes unificados',
        ],
        tools: ['HubSpot', 'Zoho CRM', 'Salesforce', 'Pipedrive', 'Odoo'],
      },
      {
        title: 'APIs Personalizadas',
        description: 'Desarrollo de APIs REST para integraciones especificas.',
        features: [
          'APIs RESTful profesionales',
          'Documentacion Swagger/OpenAPI',
          'Autenticacion OAuth/JWT',
          'Rate limiting y seguridad',
          'Webhooks personalizados',
        ],
        tools: ['Node.js', 'Python', 'PHP', 'Laravel', 'Express'],
      },
      {
        title: 'Integraciones Cloud',
        description: 'Conecta servicios en la nube para workflows eficientes.',
        features: [
          'Google Workspace integrations',
          'Microsoft 365 / Azure',
          'AWS services integration',
          'Stripe, PayPal payments',
          'Storage (Drive, Dropbox, S3)',
        ],
        tools: ['Google', 'Microsoft', 'AWS', 'Stripe', 'Twilio'],
      },
    ],
    useCasesTitle: 'Ejemplos de Integraciones',
    useCasesSubtitle: 'Flujos automatizados para tu negocio',
    useCases: [
      {
        title: 'Marketing Automation',
        description: 'Leads -> CRM -> Email marketing -> Analytics',
      },
      {
        title: 'E-commerce Sync',
        description: 'Pedidos -> Inventario -> Facturacion -> Envios -> Notificaciones',
      },
      {
        title: 'Customer Support',
        description: 'Tickets -> CRM -> WhatsApp -> Email -> Base de conocimiento',
      },
      {
        title: 'Sales Pipeline',
        description: 'Leads -> Calificacion -> CRM -> Propuestas -> Facturacion',
      },
    ],
    popularTitle: 'Integraciones Populares',
    popularSubtitle: 'Conectamos con las herramientas que ya usas',
    popularFooter: 'No ves tu herramienta? Podemos integrarla.',
    popularCta: 'Contactanos',
    pricingTitle: 'Planes de Integracion',
    pricingSubtitle: 'Desde integraciones simples hasta arquitecturas enterprise',
    popularLabel: 'Mas Popular',
    packages: [
      {
        name: 'Integracion Simple',
        priceCOP: 600000,
        description: 'Conecta 2-3 herramientas basicas',
        features: [
          '2-3 integraciones',
          'Configuracion con Zapier/Make',
          'Flujos de 1-3 pasos',
          'Documentacion basica',
          'Testing y validacion',
          '1 mes de soporte',
        ],
        color: 'from-emerald-500 to-teal-500',
      },
      {
        name: 'Integracion Profesional',
        priceCOP: 1200000,
        description: 'Multiples sistemas conectados',
        features: [
          '5-7 integraciones',
          'Flujos multi-paso avanzados',
          'Sincronizacion bidireccional',
          'Manejo de errores completo',
          'Webhooks personalizados',
          '3 meses de soporte',
        ],
        popular: true,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'API Enterprise',
        priceCOP: null,
        description: 'APIs y arquitectura a medida',
        features: [
          'API REST personalizada',
          'Integraciones ilimitadas',
          'Arquitectura escalable',
          'Seguridad enterprise',
          'Documentacion completa',
          'Soporte dedicado',
        ],
        color: 'from-purple-500 to-pink-500',
      },
    ],
    customPriceLabel: 'Personalizado',
    apiTitle: 'Necesitas una API personalizada?',
    apiDescription:
      'Desarrollamos APIs REST profesionales con documentacion completa, autenticacion segura y escalabilidad enterprise.',
    apiFeatures: [
      'RESTful API siguiendo mejores practicas',
      'Documentacion Swagger/OpenAPI',
      'Autenticacion OAuth 2.0 / JWT',
      'Rate limiting y cache',
      'Webhooks para eventos en tiempo real',
    ],
    apiCardTitle: 'Consultoria tecnica incluida',
    apiCardText:
      'Te ayudamos a disenar la arquitectura de integracion perfecta para tu negocio.',
    apiCardButton: 'Hablar con un experto',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: 'Que tipo de integraciones realizan?',
        a: 'Integramos CRMs, ERPs, marketing, pagos y sistemas internos con APIs y automatizaciones.',
      },
      {
        q: 'Usan Zapier o Make?',
        a: 'Si. Implementamos flujos con Zapier o Make segun el caso y la complejidad.',
      },
      {
        q: 'Se puede sincronizar datos en tiempo real?',
        a: 'Si. Configuramos sincronizacion y webhooks para mantener datos alineados.',
      },
    ],
    ctaTitle: 'Listo para conectar tus sistemas?',
    ctaDescription:
      'Agenda una consultoria tecnica gratuita y descubre como podemos integrar tus herramientas.',
    ctaButton: 'Consultoria gratuita',
  },
  en: {
    metaTitle: 'API Integrations in Bogota | Zapier, Make, HubSpot | Tech Tecnic',
    metaDescription:
      'System and API integration services in Bogota for Colombia, Latam, and USA. Connect tools with Zapier, Make, HubSpot, and custom APIs.',
    metaKeywords: [
      'api integration agency',
      'api integrations bogota',
      'zapier integrations',
      'make automation',
      'crm integration',
      'custom apis',
      'webhooks',
      'data sync',
    ],
    heroBadge: 'Integrations and APIs',
    heroTitleTop: 'Connect all',
    heroTitleMid: 'your tools',
    heroTitleBottom: 'in one place',
    heroText:
      'Professional integrations in Bogota. We connect your CRM, email, WhatsApp, e-commerce and more for frictionless workflows.',
    heroBullets: [
      'Zapier, Make and custom APIs',
      'Automatic data synchronization',
      'No more manual duplication',
      'Your whole stack connected',
    ],
    ctaPrimary: 'Connect my systems',
    ctaSecondary: 'View examples',
    benefitsTitle: 'Why integrate your systems?',
    benefitsSubtitle: 'Work smarter, not harder',
    benefits: [
      { title: 'Everything Connected', description: 'Your tools working together in harmony.' },
      { title: 'Automatic Sync', description: 'Real-time data updates between systems.' },
      { title: 'Higher Productivity', description: 'Remove manual work and data duplication.' },
      { title: 'Secure and Reliable', description: 'Encrypted connections and automated backups.' },
    ],
    typesBadge: 'Integration Types',
    typesTitle: 'Integration Services',
    typesSubtitle: 'Solutions for every technical need',
    types: [
      {
        title: 'Zapier & Make',
        description: 'No-code automation connecting 5000+ apps.',
        features: [
          'Zap and Scenario setup',
          'Advanced multi-step flows',
          'Error handling and alerts',
          'Filters and logic conditions',
          'Complete documentation',
        ],
        tools: ['Zapier', 'Make (Integromat)', 'n8n', 'Pabbly Connect'],
      },
      {
        title: 'CRM Integrations',
        description: 'Connect your CRM with marketing and sales tools.',
        features: [
          'HubSpot, Zoho, Salesforce',
          'Two-way synchronization',
          'Automatic lead capture',
          'Contact updates',
          'Unified reporting',
        ],
        tools: ['HubSpot', 'Zoho CRM', 'Salesforce', 'Pipedrive', 'Odoo'],
      },
      {
        title: 'Custom APIs',
        description: 'REST API development for specific integrations.',
        features: [
          'Professional REST APIs',
          'Swagger/OpenAPI documentation',
          'OAuth/JWT authentication',
          'Rate limiting and security',
          'Custom webhooks',
        ],
        tools: ['Node.js', 'Python', 'PHP', 'Laravel', 'Express'],
      },
      {
        title: 'Cloud Integrations',
        description: 'Connect cloud services for efficient workflows.',
        features: [
          'Google Workspace integrations',
          'Microsoft 365 / Azure',
          'AWS services integration',
          'Stripe, PayPal payments',
          'Storage (Drive, Dropbox, S3)',
        ],
        tools: ['Google', 'Microsoft', 'AWS', 'Stripe', 'Twilio'],
      },
    ],
    useCasesTitle: 'Integration Examples',
    useCasesSubtitle: 'Automated flows for your business',
    useCases: [
      {
        title: 'Marketing Automation',
        description: 'Leads -> CRM -> Email marketing -> Analytics',
      },
      {
        title: 'E-commerce Sync',
        description: 'Orders -> Inventory -> Billing -> Shipping -> Alerts',
      },
      {
        title: 'Customer Support',
        description: 'Tickets -> CRM -> WhatsApp -> Email -> Knowledge base',
      },
      {
        title: 'Sales Pipeline',
        description: 'Leads -> Qualification -> CRM -> Proposals -> Billing',
      },
    ],
    popularTitle: 'Popular Integrations',
    popularSubtitle: 'We connect the tools you already use',
    popularFooter: 'Dont see your tool? We can integrate it.',
    popularCta: 'Contact us',
    pricingTitle: 'Integration Plans',
    pricingSubtitle: 'From simple integrations to enterprise architecture',
    popularLabel: 'Most Popular',
    packages: [
      {
        name: 'Simple Integration',
        priceCOP: 600000,
        description: 'Connect 2-3 core tools',
        features: [
          '2-3 integrations',
          'Zapier/Make setup',
          '1-3 step flows',
          'Basic documentation',
          'Testing and validation',
          '1 month support',
        ],
        color: 'from-emerald-500 to-teal-500',
      },
      {
        name: 'Professional Integration',
        priceCOP: 1200000,
        description: 'Multiple systems connected',
        features: [
          '5-7 integrations',
          'Advanced multi-step flows',
          'Two-way sync',
          'Complete error handling',
          'Custom webhooks',
          '3 months support',
        ],
        popular: true,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'API Enterprise',
        priceCOP: null,
        description: 'Custom APIs and architecture',
        features: [
          'Custom REST API',
          'Unlimited integrations',
          'Scalable architecture',
          'Enterprise security',
          'Complete documentation',
          'Dedicated support',
        ],
        color: 'from-purple-500 to-pink-500',
      },
    ],
    customPriceLabel: 'Custom',
    apiTitle: 'Need a custom API?',
    apiDescription:
      'We build professional REST APIs with complete documentation, secure authentication and enterprise scalability.',
    apiFeatures: [
      'RESTful API following best practices',
      'Swagger/OpenAPI documentation',
      'OAuth 2.0 / JWT authentication',
      'Rate limiting and caching',
      'Webhooks for real-time events',
    ],
    apiCardTitle: 'Technical consulting included',
    apiCardText: 'We help design the right integration architecture for your business.',
    apiCardButton: 'Talk to an expert',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'What type of integrations do you build?',
        a: 'We integrate CRMs, ERPs, marketing, payments, and internal systems using APIs and automations.',
      },
      {
        q: 'Do you use Zapier or Make?',
        a: 'Yes. We build flows with Zapier or Make depending on complexity and needs.',
      },
      {
        q: 'Can you sync data in real time?',
        a: 'Yes. We set up synchronization and webhooks to keep data aligned.',
      },
    ],
    ctaTitle: 'Ready to connect your systems?',
    ctaDescription:
      'Book a free technical consultation and discover how we can integrate your tools.',
    ctaButton: 'Free consultation',
  },
};

const benefitsMeta = [
  { icon: Link2, color: 'from-emerald-500 to-teal-500' },
  { icon: RefreshCw, color: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
  { icon: Lock, color: 'from-orange-500 to-red-500' },
];

const typeMeta = [
  { icon: Zap, color: 'from-emerald-500 to-teal-500' },
  { icon: Database, color: 'from-blue-500 to-cyan-500' },
  { icon: Code2, color: 'from-purple-500 to-pink-500' },
  { icon: Cloud, color: 'from-orange-500 to-red-500' },
];

const useCaseMeta = [TrendingUp, Database, Blocks, Link2];

const popularIntegrations = [
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zoho', category: 'CRM' },
  { name: 'Google Sheets', category: 'Data' },
  { name: 'Slack', category: 'Communication' },
  { name: 'WhatsApp', category: 'Messaging' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Mailchimp', category: 'Email' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Trello', category: 'Project Mgmt' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'WooCommerce', category: 'E-commerce' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/integraciones';
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

export default async function IntegracionesPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/integraciones';
  const schemaData = getServiceSchema(locale, copy.metaTitle, copy.metaDescription, path);
  const faqSchema = getFaqSchema(copy.faq, locale);
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'es' ? 'Inicio' : 'Home', url: buildLocalizedUrl('/', locale) },
      { name: locale === 'es' ? 'Servicios' : 'Services', url: buildLocalizedUrl('/servicios', locale) },
      { name: locale === 'es' ? 'Integraciones' : 'Integrations', url: buildLocalizedUrl(path, locale) },
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Blocks className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">{copy.heroBadge}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">{copy.heroTitleTop}</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  {copy.heroTitleMid}
                </span>
                <br />
                <span className="text-white">{copy.heroTitleBottom}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">{copy.heroText}</p>

              <div className="space-y-3 mb-8">
                {copy.heroBullets.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message={
                    locale === 'es'
                      ? 'Hola, quiero integrar mis herramientas y sistemas'
                      : 'Hi, I want to integrate my tools and systems'
                  }
                  service="integraciones"
                  action="click_cta_hero"
                  label="Integraciones"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  {copy.ctaPrimary}
                </WhatsAppButton>
                <Link
                  href="#casos-uso"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>

            {/* Right - Integration Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl">
                    <Blocks className="w-12 h-12 text-white" />
                  </div>
                </div>

                {[
                  { icon: Database, pos: 'top-8 left-1/2 -translate-x-1/2' },
                  { icon: Cloud, pos: 'right-8 top-1/2 -translate-y-1/2' },
                  { icon: Code2, pos: 'bottom-8 left-1/2 -translate-x-1/2' },
                  { icon: Zap, pos: 'left-8 top-1/2 -translate-y-1/2' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`absolute ${item.pos} w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float`}
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      <Icon className="w-8 h-8 text-emerald-400" />
                    </div>
                  );
                })}
              </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.benefits.map((benefit, i) => {
              const Icon = benefitsMeta[i].icon;
              return (
                <div
                  key={benefit.title}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefitsMeta[i].color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Types Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">{copy.typesBadge}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{copy.typesTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.typesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.types.map((type, i) => {
              const Icon = typeMeta[i].icon;
              return (
                <div
                  key={type.title}
                  className="group p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-500"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${typeMeta[i].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-400 mb-6">{type.description}</p>

                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 mb-3">
                      {locale === 'es' ? 'Herramientas:' : 'Tools:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section id="casos-uso" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.useCasesTitle}</h2>
            <p className="text-gray-400">{copy.useCasesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {copy.useCases.map((useCase, i) => {
              const Icon = useCaseMeta[i];
              return (
                <div
                  key={useCase.title}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-400 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.popularTitle}</h2>
            <p className="text-gray-400">{copy.popularSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularIntegrations.map((integration) => (
              <div
                key={integration.name}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all text-center"
              >
                <div className="font-semibold text-white text-sm mb-1">{integration.name}</div>
                <div className="text-xs text-gray-500">{integration.category}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              {copy.popularFooter}{' '}
              <Link href="#contacto" className="text-emerald-400 hover:underline">
                {copy.popularCta}
                <ArrowRight className="inline-block w-4 h-4 ml-1" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.pricingTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.pricingSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {copy.packages.map((pkg) => {
              const price = pkg.priceCOP ? formatPrice(pkg.priceCOP) : null;
              return (
                <div
                  key={pkg.name}
                  className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                    pkg.popular
                      ? 'border-emerald-500 scale-105 shadow-2xl shadow-emerald-500/20'
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
                    <Blocks className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    {price ? (
                      <>
                        <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                          ${price.formatted}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">{price.currency}</span>
                      </>
                    ) : (
                      <span className={`text-3xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                        {copy.customPriceLabel}
                      </span>
                    )}
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
                    service="integraciones"
                    message={
                      locale === 'es'
                        ? `Hola, quiero informacion sobre ${pkg.name} de Integraciones`
                        : `Hi, I want information about ${pkg.name} Integrations`
                    }
                    color={pkg.popular ? pkg.color : ''}
                  >
                    {price ? (locale === 'es' ? 'Comenzar ahora' : 'Get started') : (locale === 'es' ? 'Contactar' : 'Contact')}
                  </PricingButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Technical Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Webhook className="w-16 h-16 text-emerald-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">{copy.apiTitle}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">{copy.apiDescription}</p>
              <ul className="space-y-3">
                {copy.apiFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-emerald-500/30">
              <Settings className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{copy.apiCardTitle}</h3>
              <p className="text-gray-400 mb-6">{copy.apiCardText}</p>
              <WhatsAppButton
                message={
                  locale === 'es'
                    ? 'Hola, necesito una API personalizada para mi proyecto'
                    : 'Hi, I need a custom API for my project'
                }
                service="integraciones"
                action="click_cta_footer"
                label="API Personalizada"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                {copy.apiCardButton}
              </WhatsAppButton>
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
