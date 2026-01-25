import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Bot,
  Zap,
  Database,
  Shield,
  Gauge,
  Users,
  Calendar,
  ShoppingCart,
  Rocket,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';
import { convertCOPtoUSD } from '@/utils/pricing';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';
import { getBreadcrumbSchema, getFaqSchema } from '@/utils/schema';

const pageCopy = {
  es: {
    metaTitle: 'Chatbot WhatsApp con IA | Automatizacion 24/7 | Tech Tecnic',
    metaDescription:
      'Bot de WhatsApp con IA para atencion automatizada, captura de leads y soporte 24/7. Integracion con web, apps y CRM.',
    metaKeywords: [
      'chatbot whatsapp ia',
      'bot whatsapp negocio',
      'automatizacion whatsapp',
      'whatsapp business api',
      'chatbot con ia colombia',
    ],
    badge: 'Bot WhatsApp con IA',
    heroTitleTop: 'Bot de WhatsApp',
    heroTitleMid: 'con Inteligencia Artificial',
    heroTitleBottom: 'para tu negocio',
    heroText:
      'Automatiza atencion en WhatsApp con IA. Se integra con tu web, app movil o CRM. Prueba rapida y escala a produccion cuando estes listo.',
    trustBadges: ['WhatsApp Business', 'IA Generativa', 'Multi-plataforma', 'Respuesta instant.'],
    bullets: [
      'Bot de WhatsApp con IA conversacional avanzada',
      'Entrenamiento con tus datos (FAQs, productos, PDFs)',
      'Integracion con web, apps moviles y CRM',
      'Captura y calificacion automatica de leads',
    ],
    ctaPrimary: 'Solicitar prueba',
    ctaSecondary: 'Ver detalles',
    useCasesTitle: 'Casos de uso principales',
    useCasesSubtitle: 'Resultados rapidos donde mas impacta el negocio',
    useCases: [
      { title: 'Atencion en WhatsApp', desc: 'Respuestas automaticas 24/7 con IA conversacional.' },
      { title: 'Ventas', desc: 'Catalogo, seguimiento de pedidos y cierres automatizados.' },
      { title: 'Agendamiento', desc: 'Reservas y confirmaciones directas por WhatsApp.' },
      { title: 'Leads a CRM', desc: 'Captura y sincronizacion automatica con tu CRM.' },
    ],
    flowTitle: 'Arquitectura y flujo',
    flowSubtitle: 'Validacion agil y escalado seguro a produccion',
    flowSteps: [
      { title: '1. Recoleccion de Contenido', desc: 'Paginas, FAQs y PDFs para entrenar el chatbot.' },
      { title: '2. Entrenamiento Inicial', desc: 'Indexacion y creacion del modelo con tu informacion.' },
      { title: '3. Prueba en Staging', desc: 'Widget de prueba y ajustes con tu equipo.' },
      { title: '4. Go Live', desc: 'Activacion en produccion y conexion a CRM.' },
    ],
    lanes: [
      { title: 'Canales', items: ['WhatsApp Business API', 'Widget Web', 'App Movil'] },
      { title: 'Capa IA', items: ['IA Conversacional', 'Retrieval + Reglas', 'Guardrails'] },
      { title: 'Integraciones', items: ['CRM (HubSpot/Zoho)', 'E-commerce', 'Calendarios'] },
    ],
    pricingTitle: 'Planes y precios',
    pricingSubtitle: 'Empieza en prueba y escala cuando tengas el ROI claro',
    packages: [
      {
        name: 'Prueba Rapida',
        priceType: 'free',
        priceLabel: 'Desde $0',
        color: 'from-indigo-500 to-violet-500',
        features: ['Entrenamiento inicial', 'Widget en staging', 'Feedback y ajustes'],
      },
      {
        name: 'Pro Produccion',
        priceType: 'fixed',
        priceCOP: 800000,
        color: 'from-blue-500 to-cyan-500',
        features: ['Go live WordPress', 'WhatsApp opcional', 'Leads al CRM', 'Panel basico'],
        popular: true,
      },
      {
        name: 'Enterprise',
        priceType: 'custom',
        priceLabel: 'Personalizado',
        color: 'from-orange-500 to-red-500',
        features: ['Flujos avanzados', 'Integraciones multiples', 'SLA y soporte dedicado'],
      },
    ],
    trialBadge: 'Version de Prueba disponible',
    trialText: 'Valida el valor sin compromiso y activa produccion cuando lo necesites.',
    trialButton: 'Iniciar prueba',
    faq: [
      {
        q: 'Necesito WhatsApp Business?',
        a: 'Si. Usamos WhatsApp Business API oficial. Te ayudamos con el setup si no lo tienes.',
      },
      {
        q: 'Como se entrena el bot?',
        a: 'Con tus FAQs, catalogo de productos, PDFs y flujos personalizados. IA generativa + reglas.',
      },
      {
        q: 'Se integra con mi web/app?',
        a: 'Si. Conectamos con cualquier web, app movil o CRM via API, webhooks o plataformas como Zapier.',
      },
      {
        q: 'Privacidad y cumplimiento?',
        a: 'Cumplimos con politicas de WhatsApp. Implementamos guardrails y almacenamiento seguro.',
      },
    ],
    structuredName: 'Chatbot WhatsApp con IA',
    structuredDesc:
      'Bot de WhatsApp con inteligencia artificial para automatizacion de atencion, captura de leads y soporte 24/7. Integracion con web, apps y CRM.',
  },
  en: {
    metaTitle: 'WhatsApp AI Chatbot | 24/7 Automation and Sales | Tech Tecnic',
    metaDescription:
      'WhatsApp AI chatbot for support, lead capture, and sales automation. Integrates with web, apps, and CRM.',
    metaKeywords: [
      'whatsapp ai chatbot',
      'whatsapp automation',
      'whatsapp business api',
      'lead capture chatbot',
      'sales automation chatbot',
      'ai chatbot for business',
    ],
    badge: 'WhatsApp AI Bot',
    heroTitleTop: 'WhatsApp Bot',
    heroTitleMid: 'with Artificial Intelligence',
    heroTitleBottom: 'for your business',
    heroText:
      'Automate WhatsApp support with AI. Integrates with your website, mobile app, or CRM. Start fast and scale to production when ready.',
    trustBadges: ['WhatsApp Business', 'Generative AI', 'Multi-platform', 'Instant replies'],
    bullets: [
      'WhatsApp bot with advanced conversational AI',
      'Training with your data (FAQs, products, PDFs)',
      'Integration with web, mobile apps, and CRM',
      'Automatic lead capture and qualification',
    ],
    ctaPrimary: 'Request a trial',
    ctaSecondary: 'View details',
    useCasesTitle: 'Top use cases',
    useCasesSubtitle: 'Fast impact where the business feels it most',
    useCases: [
      { title: 'WhatsApp Support', desc: '24/7 automated replies with conversational AI.' },
      { title: 'Sales', desc: 'Catalog, order follow-up, and automated closing.' },
      { title: 'Scheduling', desc: 'Bookings and confirmations directly in WhatsApp.' },
      { title: 'Leads to CRM', desc: 'Automatic capture and sync with your CRM.' },
    ],
    flowTitle: 'Architecture and flow',
    flowSubtitle: 'Agile validation and safe scale to production',
    flowSteps: [
      { title: '1. Content Collection', desc: 'Pages, FAQs, and PDFs to train the chatbot.' },
      { title: '2. Initial Training', desc: 'Indexing and model creation with your information.' },
      { title: '3. Staging Test', desc: 'Test widget and tuning with your team.' },
      { title: '4. Go Live', desc: 'Production activation and CRM connection.' },
    ],
    lanes: [
      { title: 'Channels', items: ['WhatsApp Business API', 'Web Widget', 'Mobile App'] },
      { title: 'AI Layer', items: ['Conversational AI', 'Retrieval + Rules', 'Guardrails'] },
      { title: 'Integrations', items: ['CRM (HubSpot/Zoho)', 'E-commerce', 'Calendars'] },
    ],
    pricingTitle: 'Plans and pricing',
    pricingSubtitle: 'Start with a trial and scale once ROI is clear',
    packages: [
      {
        name: 'Quick Trial',
        priceType: 'free',
        priceLabel: 'From $0',
        color: 'from-indigo-500 to-violet-500',
        features: ['Initial training', 'Staging widget', 'Feedback and tuning'],
      },
      {
        name: 'Pro Production',
        priceType: 'fixed',
        priceCOP: 800000,
        color: 'from-blue-500 to-cyan-500',
        features: ['Go live on WordPress', 'Optional WhatsApp', 'Leads to CRM', 'Basic dashboard'],
        popular: true,
      },
      {
        name: 'Enterprise',
        priceType: 'custom',
        priceLabel: 'Custom',
        color: 'from-orange-500 to-red-500',
        features: ['Advanced flows', 'Multiple integrations', 'SLA and dedicated support'],
      },
    ],
    trialBadge: 'Trial version available',
    trialText: 'Validate value with zero risk and move to production when you need it.',
    trialButton: 'Start trial',
    faq: [
      {
        q: 'Do I need WhatsApp Business?',
        a: 'Yes. We use the official WhatsApp Business API. We help with the setup if needed.',
      },
      {
        q: 'How is the bot trained?',
        a: 'With your FAQs, product catalog, PDFs, and custom flows. Generative AI + rules.',
      },
      {
        q: 'Does it integrate with my web/app?',
        a: 'Yes. We connect any website, mobile app, or CRM via API, webhooks, or platforms like Zapier.',
      },
      {
        q: 'Privacy and compliance?',
        a: 'We comply with WhatsApp policies. We implement guardrails and secure storage.',
      },
    ],
    structuredName: 'WhatsApp AI Chatbot',
    structuredDesc:
      'WhatsApp bot with artificial intelligence for automated support, lead capture, and 24/7 assistance. Integrated with web, apps, and CRM.',
  },
};

const trustIcons = [Bot, Zap, Shield, Gauge];
const useCaseIcons = [Users, ShoppingCart, Calendar, Database];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/chatbot-wp-ia';
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

const buildStructuredData = (locale: SupportedLocale) => {
  const copy = pageCopy[locale];
  const price = locale === 'es' ? 800000 : convertCOPtoUSD(800000);
  const currency = locale === 'es' ? 'COP' : 'USD';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: copy.structuredName,
    provider: { '@type': 'Organization', name: 'Tech Tecnic' },
    areaServed: 'Bogota, Colombia',
    serviceType: 'WhatsApp Business Automation with AI',
    description: copy.structuredDesc,
    offers: {
      '@type': 'Offer',
      price: `${price}`,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
    },
  };
};

export default async function ChatbotWpIaPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const faqSchema = getFaqSchema(copy.faq, locale);
  const path = '/servicios/chatbot-wp-ia';
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === 'es' ? 'Inicio' : 'Home', url: buildLocalizedUrl('/', locale) },
      { name: locale === 'es' ? 'Servicios' : 'Services', url: buildLocalizedUrl('/servicios', locale) },
      { name: locale === 'es' ? 'Chatbot WhatsApp con IA' : 'WhatsApp AI Chatbot', url: buildLocalizedUrl(path, locale) },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData(locale)),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-400 font-medium">{copy.badge}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">{copy.heroTitleTop}</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                  {copy.heroTitleMid}
                </span>
                <br />
                <span className="text-white">{copy.heroTitleBottom}</span>
              </h1>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">{copy.heroText}</p>
              <div className="flex flex-wrap gap-3 mb-8 text-sm text-gray-300">
                {copy.trustBadges.map((label, i) => {
                  const Icon = trustIcons[i];
                  return (
                    <span key={label} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Icon className="w-4 h-4" />
                      {label}
                    </span>
                  );
                })}
              </div>
              <div className="space-y-3 mb-8">
                {copy.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-gray-300">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message={
                    locale === 'es'
                      ? 'Hola, quiero probar el Bot de WhatsApp con IA para mi negocio'
                      : 'Hi, I want to try the WhatsApp AI Bot for my business'
                  }
                  service="chatbot-wp-ia"
                  action="click_cta_hero"
                  label="Chatbot WhatsApp IA"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  {copy.ctaPrimary}
                </WhatsAppButton>
                <Link
                  href="#detalle"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 p-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MessageSquare className="w-32 h-32 text-indigo-400/30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.useCasesTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.useCasesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.useCases.map((item, i) => {
              const Icon = useCaseIcons[i];
              return (
                <div key={item.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="detalle" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.flowTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.flowSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.flowSteps.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {copy.lanes.map((col) => (
              <div key={col.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((it) => (
                    <li key={it} className="text-gray-300">
                      - {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.pricingTitle}</h2>
            <p className="text-gray-400">{copy.pricingSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {copy.packages.map((p) => {
              const price = p.priceType === 'fixed' && typeof p.priceCOP === 'number'
                ? formatPrice(p.priceCOP)
                : null;
              return (
                <div key={p.name} className="group relative rounded-2xl bg-slate-900/50 border border-white/10 p-8 hover:border-indigo-400/50 transition-all">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">
                    {p.priceType === 'fixed' && price
                      ? `$${price.formatted} ${price.currency}`
                      : p.priceLabel}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                        <span className="text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <PricingButton
                    planName={p.name}
                    service="chatbot-wp-ia"
                    message={
                      locale === 'es'
                        ? `Hola, quiero informacion sobre el plan ${p.name} del Bot WhatsApp con IA`
                        : `Hi, I want information about the ${p.name} WhatsApp AI Bot plan`
                    }
                    color={p.color}
                  >
                    {locale === 'es' ? 'Empezar' : 'Get started'}
                  </PricingButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-400 font-medium">{copy.trialBadge}</span>
          </div>
          <p className="text-gray-300 mb-6">{copy.trialText}</p>
          <WhatsAppButton
            message={
              locale === 'es'
                ? 'Quiero activar la prueba del Bot de WhatsApp con IA'
                : 'I want to activate the WhatsApp AI Bot trial'
            }
            service="chatbot-wp-ia"
            action="click_cta_trial"
            label="Chatbot WhatsApp IA - Trial"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            {copy.trialButton}
          </WhatsAppButton>
          <div className="text-left max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
            {copy.faq.map((f) => (
              <details key={f.q} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <summary className="cursor-pointer text-white font-semibold">{f.q}</summary>
                <p className="mt-2 text-gray-300">{f.a}</p>
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

      <ContactCTA />
    </div>
  );
}
