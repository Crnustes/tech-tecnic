import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Bot,
  Zap,
  MessageSquare,
  Workflow,
  CheckCircle2,
  Clock,
  TrendingDown,
  Users,
  Sparkles,
  Database,
  Mail,
  Calendar,
  ShoppingCart,
  BarChart3,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';
import { convertCOPtoUSD } from '@/utils/pricing';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';

const pageCopy = {
  es: {
    metaTitle: 'Automatizacion con IA en Bogota | Chatbots y Procesos | Tech Tecnic',
    metaDescription:
      'Automatizacion empresarial con Inteligencia Artificial en Bogota. Chatbots inteligentes, flujos automatizados, integracion con CRMs y mas. Ahorra tiempo y costos.',
    metaKeywords: [
      'automatizacion IA bogota',
      'chatbot inteligente colombia',
      'automatizacion empresarial',
      'inteligencia artificial bogota',
      'chatbot whatsapp',
      'automatizacion procesos',
      'ia para empresas',
      'zapier make colombia',
    ],
    badge: 'Automatizacion e Inteligencia Artificial',
    heroTitleTop: 'Automatiza con',
    heroTitleMid: 'Inteligencia Artificial',
    heroTitleBottom: 'y crece mas rapido',
    heroText:
      'Chatbots inteligentes, automatizacion de procesos y soluciones con IA en Bogota. Ahorra tiempo, reduce costos y escala tu negocio.',
    points: [
      'Chatbots para WhatsApp y Web',
      'Automatizacion de tareas repetitivas',
      'Integracion con tus herramientas',
      'ROI medible desde el primer mes',
    ],
    ctaPrimary: 'Consultoria gratuita',
    ctaSecondary: 'Ver casos de uso',
    benefitsTitle: 'Por que automatizar con IA?',
    benefitsSubtitle: 'Beneficios comprobados para tu negocio',
    benefits: [
      {
        title: 'Ahorra Tiempo',
        description: 'Automatiza tareas repetitivas y libera tiempo para lo importante.',
        stat: '70% menos tiempo',
        color: 'from-purple-500 to-pink-500',
        icon: Clock,
      },
      {
        title: 'Reduce Costos',
        description: 'Disminuye costos operativos automatizando procesos manuales.',
        stat: '60% reduccion',
        color: 'from-blue-500 to-cyan-500',
        icon: TrendingDown,
      },
      {
        title: 'Mejor Servicio',
        description: 'Atiende clientes 24/7 con respuestas instantaneas y precisas.',
        stat: '24/7 disponible',
        color: 'from-green-500 to-emerald-500',
        icon: Users,
      },
      {
        title: 'Mas Productividad',
        description: 'Tu equipo se enfoca en tareas estrategicas de alto valor.',
        stat: '+85% eficiencia',
        color: 'from-orange-500 to-red-500',
        icon: BarChart3,
      },
    ],
    solutionsBadge: 'Soluciones',
    solutionsTitle: 'Que podemos automatizar?',
    solutionsSubtitle: 'Soluciones de IA para cada necesidad de tu negocio',
    useCases: [
      {
        title: 'Chatbots Inteligentes',
        description: 'Chatbots con IA para WhatsApp, web y redes sociales.',
        features: [
          'Respuestas en lenguaje natural',
          'Integracion con WhatsApp Business',
          'Captura automatica de leads',
          'Transferencia a agentes humanos',
          'Entrenamiento personalizado',
        ],
        color: 'from-purple-500 to-pink-500',
        icon: MessageSquare,
      },
      {
        title: 'Automatizacion de Procesos',
        description: 'Flujos automatizados que conectan tus herramientas.',
        features: [
          'Automatizacion con Zapier/Make',
          'Sincronizacion de datos',
          'Notificaciones automaticas',
          'Procesamiento de documentos',
          'Workflows personalizados',
        ],
        color: 'from-blue-500 to-cyan-500',
        icon: Workflow,
      },
      {
        title: 'Integracion con CRMs',
        description: 'Conecta tu IA con HubSpot, Zoho, Odoo y mas.',
        features: [
          'Captura automatica de contactos',
          'Actualizacion de registros',
          'Seguimiento de leads',
          'Reportes automaticos',
          'APIs personalizadas',
        ],
        color: 'from-green-500 to-emerald-500',
        icon: Database,
      },
      {
        title: 'Email Marketing Automatizado',
        description: 'Campanas inteligentes basadas en comportamiento.',
        features: [
          'Segmentacion automatica',
          'Emails personalizados',
          'Follow-ups inteligentes',
          'A/B testing automatizado',
          'Analisis predictivo',
        ],
        color: 'from-orange-500 to-red-500',
        icon: Mail,
      },
    ],
    examplesTitle: 'Casos de uso por industria',
    examplesSubtitle: 'Automatizacion aplicada a tu sector',
    automationExamples: [
      {
        title: 'E-commerce',
        description: 'Confirmacion de pedidos, seguimiento de envios, recuperacion de carritos abandonados.',
        icon: ShoppingCart,
      },
      {
        title: 'Agendamiento',
        description: 'Reservas automaticas, recordatorios, confirmaciones y reagendamiento inteligente.',
        icon: Calendar,
      },
      {
        title: 'Soporte',
        description: 'Atencion 24/7, respuestas a FAQs, escalamiento a agentes humanos.',
        icon: Users,
      },
      {
        title: 'Gestion de Datos',
        description: 'Captura de leads, actualizacion de bases de datos, sincronizacion entre plataformas.',
        icon: Database,
      },
    ],
    pricingTitle: 'Planes de Automatizacion',
    pricingSubtitle: 'Desde chatbots hasta soluciones enterprise personalizadas',
    popularLabel: 'Mas Popular',
    packages: [
      {
        name: 'Chatbot Basico',
        priceCOP: 800000,
        description: 'Chatbot para atencion al cliente',
        features: [
          'Chatbot entrenado (hasta 50 preguntas)',
          'Integracion WhatsApp o Web',
          'Respuestas automatizadas',
          'Panel de administracion',
          'Analisis basico',
          '1 mes de soporte',
        ],
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'Automatizacion Pro',
        priceCOP: 1500000,
        description: 'Flujos completos y integraciones',
        features: [
          'Todo lo del plan Basico',
          'Integracion con CRM',
          '5 flujos automatizados (Zapier/Make)',
          'Chatbot avanzado (100+ preguntas)',
          'Reportes y analytics',
          '3 meses de soporte',
        ],
        popular: true,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'IA Enterprise',
        priceLabelEs: 'Personalizado',
        priceLabelEn: 'Custom',
        description: 'Solucion completa para empresas',
        features: [
          'Todo lo del plan Pro',
          'IA personalizada con modelos propios',
          'Automatizaciones ilimitadas',
          'Multiples integraciones',
          'Consultoria estrategica',
          'Soporte prioritario dedicado',
        ],
        color: 'from-orange-500 to-red-500',
      },
    ],
    ctaTitle: 'Listo para automatizar tu negocio?',
    ctaDescription: 'Agenda una consultoria gratuita y descubre como la IA puede transformar tu operacion.',
    ctaButton: 'Consultoria gratuita',
  },
  en: {
    metaTitle: 'AI Automation in Bogota | Chatbots and Processes | Tech Tecnic',
    metaDescription:
      'Business automation with AI in Bogota. Intelligent chatbots, automated workflows, CRM integrations and more. Save time and reduce costs.',
    metaKeywords: [
      'ai automation bogota',
      'intelligent chatbot colombia',
      'business automation',
      'artificial intelligence bogota',
      'whatsapp chatbot',
      'process automation',
      'ai for business',
      'zapier make colombia',
    ],
    badge: 'Automation and Artificial Intelligence',
    heroTitleTop: 'Automate with',
    heroTitleMid: 'Artificial Intelligence',
    heroTitleBottom: 'and grow faster',
    heroText:
      'Intelligent chatbots, process automation and AI solutions in Bogota. Save time, reduce costs, and scale your business.',
    points: [
      'Chatbots for WhatsApp and web',
      'Automation of repetitive tasks',
      'Integration with your tools',
      'Measurable ROI from month one',
    ],
    ctaPrimary: 'Free consultation',
    ctaSecondary: 'View use cases',
    benefitsTitle: 'Why automate with AI?',
    benefitsSubtitle: 'Proven benefits for your business',
    benefits: [
      {
        title: 'Save Time',
        description: 'Automate repetitive tasks and focus on what matters.',
        stat: '70% less time',
        color: 'from-purple-500 to-pink-500',
        icon: Clock,
      },
      {
        title: 'Reduce Costs',
        description: 'Lower operational costs by automating manual processes.',
        stat: '60% reduction',
        color: 'from-blue-500 to-cyan-500',
        icon: TrendingDown,
      },
      {
        title: 'Better Service',
        description: 'Serve clients 24/7 with instant and accurate answers.',
        stat: '24/7 available',
        color: 'from-green-500 to-emerald-500',
        icon: Users,
      },
      {
        title: 'More Productivity',
        description: 'Your team focuses on high-value strategic tasks.',
        stat: '+85% efficiency',
        color: 'from-orange-500 to-red-500',
        icon: BarChart3,
      },
    ],
    solutionsBadge: 'Solutions',
    solutionsTitle: 'What can we automate?',
    solutionsSubtitle: 'AI solutions for every business need',
    useCases: [
      {
        title: 'Intelligent Chatbots',
        description: 'AI chatbots for WhatsApp, web, and social media.',
        features: [
          'Natural language responses',
          'WhatsApp Business integration',
          'Automatic lead capture',
          'Handoff to human agents',
          'Custom training',
        ],
        color: 'from-purple-500 to-pink-500',
        icon: MessageSquare,
      },
      {
        title: 'Process Automation',
        description: 'Automated workflows that connect your tools.',
        features: [
          'Automation with Zapier/Make',
          'Data synchronization',
          'Automated notifications',
          'Document processing',
          'Custom workflows',
        ],
        color: 'from-blue-500 to-cyan-500',
        icon: Workflow,
      },
      {
        title: 'CRM Integrations',
        description: 'Connect your AI with HubSpot, Zoho, Odoo and more.',
        features: [
          'Automatic contact capture',
          'Record updates',
          'Lead tracking',
          'Automated reporting',
          'Custom APIs',
        ],
        color: 'from-green-500 to-emerald-500',
        icon: Database,
      },
      {
        title: 'Automated Email Marketing',
        description: 'Smart campaigns based on behavior.',
        features: [
          'Automatic segmentation',
          'Personalized emails',
          'Smart follow-ups',
          'Automated A/B testing',
          'Predictive analysis',
        ],
        color: 'from-orange-500 to-red-500',
        icon: Mail,
      },
    ],
    examplesTitle: 'Use cases by industry',
    examplesSubtitle: 'Automation applied to your sector',
    automationExamples: [
      {
        title: 'E-commerce',
        description: 'Order confirmations, shipment tracking, abandoned cart recovery.',
        icon: ShoppingCart,
      },
      {
        title: 'Scheduling',
        description: 'Automatic bookings, reminders, confirmations, and rescheduling.',
        icon: Calendar,
      },
      {
        title: 'Support',
        description: '24/7 assistance, FAQ answers, escalation to human agents.',
        icon: Users,
      },
      {
        title: 'Data Management',
        description: 'Lead capture, database updates, synchronization across platforms.',
        icon: Database,
      },
    ],
    pricingTitle: 'Automation Plans',
    pricingSubtitle: 'From chatbots to enterprise-grade solutions',
    popularLabel: 'Most Popular',
    packages: [
      {
        name: 'Chatbot Starter',
        priceCOP: 800000,
        description: 'Customer support chatbot',
        features: [
          'Trained chatbot (up to 50 questions)',
          'WhatsApp or Web integration',
          'Automated responses',
          'Admin dashboard',
          'Basic analytics',
          '1 month support',
        ],
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'Automation Pro',
        priceCOP: 1500000,
        description: 'Full workflows and integrations',
        features: [
          'Everything in Starter',
          'CRM integration',
          '5 automated workflows (Zapier/Make)',
          'Advanced chatbot (100+ questions)',
          'Reports and analytics',
          '3 months support',
        ],
        popular: true,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'AI Enterprise',
        priceLabelEs: 'Personalizado',
        priceLabelEn: 'Custom',
        description: 'Full solution for enterprises',
        features: [
          'Everything in Pro',
          'Custom AI models',
          'Unlimited automations',
          'Multiple integrations',
          'Strategic consulting',
          'Priority dedicated support',
        ],
        color: 'from-orange-500 to-red-500',
      },
    ],
    ctaTitle: 'Ready to automate your business?',
    ctaDescription: 'Schedule a free consultation and see how AI can transform your operations.',
    ctaButton: 'Free consultation',
  },
};

const floatingIcons = [
  { Icon: Zap, className: 'absolute top-8 right-8 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-float' },
  { Icon: MessageSquare, className: 'absolute bottom-8 left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-float delay-1000' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/automatizacion-ia';
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

export default async function AutomatizacionIAPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];

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
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">{copy.badge}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">{copy.heroTitleTop}</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {copy.heroTitleMid}
                </span>
                <br />
                <span className="text-white">{copy.heroTitleBottom}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">{copy.heroText}</p>

              <div className="space-y-3 mb-8">
                {copy.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message={
                    locale === 'es'
                      ? 'Hola, quiero automatizar mi negocio con IA'
                      : 'Hi, I want to automate my business with AI'
                  }
                  service="automatizacion-ia"
                  action="click_cta_hero"
                  label="Automatizacion IA"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
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

            {/* Right - Animated Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="w-32 h-32 text-purple-400/30 animate-pulse" />
                </div>

                {floatingIcons.map(({ Icon, className }) => (
                  <div key={className} className={className}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                ))}
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
            {copy.benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}>
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="casos-uso" className="relative py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">{copy.solutionsBadge}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{copy.solutionsTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.solutionsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {copy.useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={useCase.title}
                  className="group p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-400 mb-6">{useCase.description}</p>

                  <ul className="space-y-3">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-purple-400 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.examplesTitle}</h2>
            <p className="text-gray-400">{copy.examplesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.automationExamples.map((example) => {
              const Icon = example.icon;
              return (
                <div
                  key={example.title}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{example.title}</h3>
                  <p className="text-gray-400 text-sm">{example.description}</p>
                </div>
              );
            })}
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
              const isCustom = !pkg.priceCOP;
              const priceLabel = locale === 'es' ? pkg.priceLabelEs : pkg.priceLabelEn;
              const price = pkg.priceCOP ? formatPrice(pkg.priceCOP) : null;
              return (
                <div
                  key={pkg.name}
                  className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                    pkg.popular
                      ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20'
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
                    <Bot className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {isCustom ? priceLabel : `$${price.formatted}`}
                    </span>
                    {!isCustom && <span className="text-gray-500 text-sm ml-2">{price.currency}</span>}
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
                    service="automatizacion-ia"
                    message={
                      locale === 'es'
                        ? `Hola, quiero informacion sobre ${pkg.name}`
                        : `Hi, I want information about ${pkg.name}`
                    }
                    color={pkg.popular ? pkg.color : ''}
                  >
                    {isCustom ? (locale === 'es' ? 'Contactar' : 'Contact us') : locale === 'es' ? 'Comenzar ahora' : 'Get started'}
                  </PricingButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA title={copy.ctaTitle} description={copy.ctaDescription} primaryText={copy.ctaButton} />
    </div>
  );
}
