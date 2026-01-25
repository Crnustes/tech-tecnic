import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';
import {
  Shield,
  Zap,
  Clock,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Database,
  TrendingUp,
  Sparkles,
  Bug,
  FileText,
  HeadphonesIcon,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import { convertCOPtoUSD } from '@/utils/pricing';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';
import { getFaqSchema, getServiceSchema } from '@/utils/schema';

const pageCopy = {
  es: {
    metaTitle: 'Mantenimiento Web en Bogota | Soporte y Seguridad 24/7 | Tech Tecnic',
    metaDescription:
      'Servicio de mantenimiento web profesional en Bogota. Actualizaciones, seguridad, backups, optimizacion y soporte tecnico para tu sitio WordPress o web. Planes desde $150.000/mes.',
    metaKeywords: [
      'mantenimiento web bogota',
      'soporte wordpress colombia',
      'mantenimiento sitio web',
      'seguridad web colombia',
      'backup sitio web',
      'actualizacion wordpress',
      'optimizacion web',
      'soporte tecnico web',
    ],
    badge: 'Mantenimiento y Soporte Web',
    heroTitleTop: 'Tu sitio web',
    heroTitleMid: 'siempre seguro',
    heroTitleBottom: 'y actualizado',
    heroText:
      'Mantenimiento web profesional en Bogota. Actualizaciones, seguridad, backups y soporte tecnico para que te enfoques en tu negocio.',
    trustPoints: [
      'Sin preocuparte por actualizaciones',
      'Proteccion contra hackers y malware',
      'Backups diarios automaticos',
      'Soporte cuando lo necesites',
    ],
    ctaPrimary: 'Ver planes',
    ctaSecondary: 'Por que es importante?',
    problemsTitle: 'Que puede salir mal sin mantenimiento?',
    problemsSubtitle: 'Los riesgos de no mantener tu sitio web actualizado',
    problems: [
      {
        title: 'Sitio hackeado',
        description: 'Vulnerabilidades no parcheadas abren la puerta a ataques.',
        stat: '30.000 sitios',
        statLabel: 'hackeados diariamente',
        color: 'from-red-500 to-orange-500',
        icon: AlertTriangle,
      },
      {
        title: 'Sitio lento',
        description: 'Plugins desactualizados y falta de optimizacion.',
        stat: '53%',
        statLabel: 'de usuarios abandonan',
        color: 'from-yellow-500 to-orange-500',
        icon: Zap,
      },
      {
        title: 'Errores y bugs',
        description: 'Incompatibilidades entre plugins y temas.',
        stat: '70%',
        statLabel: 'tiene problemas',
        color: 'from-purple-500 to-pink-500',
        icon: Bug,
      },
      {
        title: 'Sin backups',
        description: 'Un error puede borrar todo tu sitio para siempre.',
        stat: '60%',
        statLabel: 'no tiene backups',
        color: 'from-blue-500 to-cyan-500',
        icon: Database,
      },
    ],
    servicesBadge: 'Que incluye?',
    servicesTitle: 'Mantenimiento Web Completo',
    servicesSubtitle: 'Todo lo que tu sitio necesita en un solo plan',
    services: [
      {
        title: 'Actualizaciones Constantes',
        description: 'Mantenemos WordPress, plugins y temas siempre actualizados.',
        items: [
          'Actualizacion de WordPress core',
          'Plugins y temas actualizados',
          'Testing antes de actualizar',
          'Rollback si algo falla',
          'Compatibilidad garantizada',
        ],
        icon: RefreshCw,
      },
      {
        title: 'Seguridad y Proteccion',
        description: 'Protegemos tu sitio contra malware, hackers y vulnerabilidades.',
        items: [
          'Firewall y proteccion activa',
          'Escaneo de malware semanal',
          'Certificado SSL renovado',
          'Proteccion contra DDoS',
          'Limpieza de sitios hackeados',
        ],
        icon: Shield,
      },
      {
        title: 'Backups Automaticos',
        description: 'Copias de seguridad diarias en la nube, siempre disponibles.',
        items: [
          'Backup diario automatico',
          'Almacenamiento en la nube',
          'Retencion de 30 dias',
          'Restauracion en minutos',
          'Base de datos y archivos',
        ],
        icon: Database,
      },
      {
        title: 'Optimizacion y Velocidad',
        description: 'Tu sitio siempre rapido con optimizacion continua.',
        items: [
          'Optimizacion de imagenes',
          'Cache y CDN configurado',
          'Limpieza de base de datos',
          'Core Web Vitals mejorados',
          'Monitoreo de rendimiento',
        ],
        icon: Zap,
      },
      {
        title: 'Soporte Tecnico',
        description: 'Ayuda cuando la necesites, sin costos adicionales.',
        items: [
          'Soporte por email/WhatsApp',
          'Respuesta en 24 horas',
          'Cambios menores incluidos',
          'Monitoreo 24/7',
          'Reportes mensuales',
        ],
        icon: HeadphonesIcon,
      },
      {
        title: 'Reportes Mensuales',
        description: 'Transparencia total sobre el estado de tu sitio.',
        items: [
          'Reporte de actualizaciones',
          'Estado de seguridad',
          'Metricas de rendimiento',
          'Backups realizados',
          'Recomendaciones',
        ],
        icon: FileText,
      },
    ],
    statsTitle: 'Por que es critico el mantenimiento web',
    stats: [
      { stat: '18.5%', label: 'de sitios WordPress estan desactualizados', icon: Clock },
      { stat: '90%', label: 'de los hackeos ocurren por falta de actualizacion', icon: Shield },
      { stat: '43%', label: 'de sitios web pequenos no tienen backups', icon: Database },
      { stat: '1 seg', label: 'de retraso reduce conversiones en 7%', icon: Zap },
    ],
    pricingTitle: 'Planes de Mantenimiento',
    pricingSubtitle: 'Elige el plan perfecto para tu sitio web',
    popularLabel: 'Mas Popular',
    packages: [
      {
        name: 'Plan Basico',
        priceCOP: 150000,
        period: '/mes',
        description: 'Para sitios pequenos y blogs',
        features: [
          'Actualizaciones mensuales',
          '1 Backup semanal',
          'Monitoreo de seguridad basico',
          'Soporte por email',
          '1 cambio menor incluido',
          'Reporte mensual',
        ],
        ideal: 'Ideal para: Blogs, sitios informativos pequenos',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Plan Profesional',
        priceCOP: 250000,
        period: '/mes',
        description: 'Para sitios corporativos',
        popular: true,
        features: [
          'Actualizaciones automaticas',
          'Backup diario automatico',
          'Seguridad avanzada + Firewall',
          'Optimizacion de velocidad',
          'Soporte prioritario (WhatsApp)',
          '3 cambios menores incluidos',
          'Certificado SSL incluido',
          'Limpieza de malware incluida',
        ],
        ideal: 'Ideal para: Empresas, sitios corporativos',
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Plan E-commerce',
        priceCOP: 400000,
        period: '/mes',
        description: 'Para tiendas online',
        features: [
          'Todo lo del plan Profesional',
          'Backup diario + redundancia',
          'Monitoreo 24/7 de uptime',
          'Optimizacion WooCommerce',
          'Soporte prioritario 24/7',
          '5 cambios menores incluidos',
          'CDN incluido',
          'Auditoria mensual completa',
        ],
        ideal: 'Ideal para: E-commerce, tiendas online',
        color: 'from-purple-500 to-pink-500',
      },
    ],
    includesTitle: 'Todos los planes incluyen:',
    includesAll: [
      'Monitoreo de uptime 24/7',
      'Actualizaciones de seguridad',
      'Backups automaticos',
      'Optimizacion de velocidad',
      'Certificado SSL renovado',
      'Soporte tecnico incluido',
      'Reportes mensuales detallados',
      'Sin contratos largos (cancela cuando quieras)',
    ],
    ctaTitle: 'Listo para proteger tu sitio web?',
    ctaDescription: 'Contrata mantenimiento web profesional y olvidate de preocupaciones tecnicas.',
    ctaButton: 'Contratar mantenimiento',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: 'Que incluye el mantenimiento web?',
        a: 'Incluye monitoreo, actualizaciones, backups automaticos y optimizacion continua.',
      },
      {
        q: 'Incluyen seguridad y SSL?',
        a: 'Si. Mantenemos medidas de seguridad activas y buenas practicas para tu sitio.',
      },
      {
        q: 'Pueden mejorar el rendimiento?',
        a: 'Si. Optimizamos velocidad y Core Web Vitals como parte del servicio.',
      },
    ],
  },
  en: {
    metaTitle: 'Web Maintenance in Bogota | 24/7 Support and Security | Tech Tecnic',
    metaDescription:
      'Professional web maintenance in Bogota for Colombia, Latam, and USA. Updates, backups, security, and performance optimization.',
    metaKeywords: [
      'web maintenance agency',
      'web maintenance bogota',
      'wordpress maintenance',
      'website security',
      'website backups',
      'performance optimization',
      'website monitoring',
    ],
    badge: 'Web Maintenance and Support',
    heroTitleTop: 'Your website',
    heroTitleMid: 'always secure',
    heroTitleBottom: 'and updated',
    heroText:
      'Professional web maintenance in Bogota. Updates, security, backups, and support so you can focus on your business.',
    trustPoints: [
      'No worries about updates',
      'Protection from hackers and malware',
      'Daily automated backups',
      'Support when you need it',
    ],
    ctaPrimary: 'View plans',
    ctaSecondary: 'Why it matters',
    problemsTitle: 'What can go wrong without maintenance?',
    problemsSubtitle: 'The risks of leaving your website outdated',
    problems: [
      {
        title: 'Hacked site',
        description: 'Unpatched vulnerabilities open the door to attacks.',
        stat: '30,000 sites',
        statLabel: 'hacked daily',
        color: 'from-red-500 to-orange-500',
        icon: AlertTriangle,
      },
      {
        title: 'Slow site',
        description: 'Outdated plugins and lack of optimization.',
        stat: '53%',
        statLabel: 'of users leave',
        color: 'from-yellow-500 to-orange-500',
        icon: Zap,
      },
      {
        title: 'Errors and bugs',
        description: 'Incompatibilities between plugins and themes.',
        stat: '70%',
        statLabel: 'have issues',
        color: 'from-purple-500 to-pink-500',
        icon: Bug,
      },
      {
        title: 'No backups',
        description: 'One error can erase your entire website.',
        stat: '60%',
        statLabel: 'have no backups',
        color: 'from-blue-500 to-cyan-500',
        icon: Database,
      },
    ],
    servicesBadge: 'What is included?',
    servicesTitle: 'Complete Web Maintenance',
    servicesSubtitle: 'Everything your site needs in one plan',
    services: [
      {
        title: 'Constant Updates',
        description: 'We keep WordPress, plugins, and themes updated.',
        items: [
          'WordPress core updates',
          'Updated plugins and themes',
          'Testing before updates',
          'Rollback if something fails',
          'Guaranteed compatibility',
        ],
        icon: RefreshCw,
      },
      {
        title: 'Security and Protection',
        description: 'We protect your site against malware and hackers.',
        items: [
          'Firewall and active protection',
          'Weekly malware scanning',
          'Renewed SSL certificate',
          'DDoS protection',
          'Hacked site cleanup',
        ],
        icon: Shield,
      },
      {
        title: 'Automated Backups',
        description: 'Daily cloud backups always available.',
        items: [
          'Daily automatic backup',
          'Cloud storage',
          '30-day retention',
          'Restore in minutes',
          'Database and files',
        ],
        icon: Database,
      },
      {
        title: 'Optimization and Speed',
        description: 'Your site stays fast with continuous optimization.',
        items: [
          'Image optimization',
          'Cache and CDN setup',
          'Database cleanup',
          'Improved Core Web Vitals',
          'Performance monitoring',
        ],
        icon: Zap,
      },
      {
        title: 'Technical Support',
        description: 'Help when you need it, no extra costs.',
        items: [
          'Email/WhatsApp support',
          'Response within 24 hours',
          'Minor changes included',
          '24/7 monitoring',
          'Monthly reports',
        ],
        icon: HeadphonesIcon,
      },
      {
        title: 'Monthly Reports',
        description: 'Total transparency about your website status.',
        items: [
          'Update report',
          'Security status',
          'Performance metrics',
          'Backups completed',
          'Recommendations',
        ],
        icon: FileText,
      },
    ],
    statsTitle: 'Why web maintenance is critical',
    stats: [
      { stat: '18.5%', label: 'of WordPress sites are outdated', icon: Clock },
      { stat: '90%', label: 'of hacks happen due to missing updates', icon: Shield },
      { stat: '43%', label: 'of small sites do not have backups', icon: Database },
      { stat: '1 sec', label: 'of delay reduces conversions by 7%', icon: Zap },
    ],
    pricingTitle: 'Maintenance Plans',
    pricingSubtitle: 'Choose the perfect plan for your website',
    popularLabel: 'Most Popular',
    packages: [
      {
        name: 'Basic Plan',
        priceCOP: 150000,
        period: '/month',
        description: 'For small sites and blogs',
        features: [
          'Monthly updates',
          '1 weekly backup',
          'Basic security monitoring',
          'Email support',
          '1 minor change included',
          'Monthly report',
        ],
        ideal: 'Ideal for: Blogs, small informational sites',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Professional Plan',
        priceCOP: 250000,
        period: '/month',
        description: 'For corporate sites',
        popular: true,
        features: [
          'Automatic updates',
          'Daily automatic backup',
          'Advanced security + Firewall',
          'Speed optimization',
          'Priority support (WhatsApp)',
          '3 minor changes included',
          'SSL certificate included',
          'Malware cleanup included',
        ],
        ideal: 'Ideal for: Companies, corporate sites',
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'E-commerce Plan',
        priceCOP: 400000,
        period: '/month',
        description: 'For online stores',
        features: [
          'Everything in Professional',
          'Daily backup + redundancy',
          '24/7 uptime monitoring',
          'WooCommerce optimization',
          'Priority support 24/7',
          '5 minor changes included',
          'CDN included',
          'Full monthly audit',
        ],
        ideal: 'Ideal for: E-commerce, online stores',
        color: 'from-purple-500 to-pink-500',
      },
    ],
    includesTitle: 'All plans include:',
    includesAll: [
      '24/7 uptime monitoring',
      'Security updates',
      'Automated backups',
      'Speed optimization',
      'Renewed SSL certificate',
      'Technical support included',
      'Detailed monthly reports',
      'No long-term contracts (cancel anytime)',
    ],
    ctaTitle: 'Ready to protect your website?',
    ctaDescription: 'Hire professional web maintenance and forget about technical worries.',
    ctaButton: 'Start maintenance',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'What does web maintenance include?',
        a: 'It includes monitoring, updates, automated backups, and ongoing optimization.',
      },
      {
        q: 'Do you cover security and SSL?',
        a: 'Yes. We keep security measures active and follow best practices.',
      },
      {
        q: 'Can you improve performance?',
        a: 'Yes. We optimize speed and Core Web Vitals as part of the service.',
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
  const path = '/servicios/mantenimiento';
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

export default async function MantenimientoPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/mantenimiento';
  const schemaData = getServiceSchema(locale, copy.metaTitle, copy.metaDescription, path);
  const faqSchema = getFaqSchema(copy.faq, locale);

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
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">{copy.badge}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">{copy.heroTitleTop}</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {copy.heroTitleMid}
                </span>
                <br />
                <span className="text-white">{copy.heroTitleBottom}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">{copy.heroText}</p>

              <div className="space-y-3 mb-8">
                {copy.trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message={
                    locale === 'es'
                      ? 'Hola, quiero informacion sobre mantenimiento web para mi sitio'
                      : 'Hi, I want information about web maintenance for my website'
                  }
                  service="mantenimiento"
                  action="click_cta_hero"
                  label="Mantenimiento"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  {copy.ctaPrimary}
                </WhatsAppButton>
                <Link
                  href="#problemas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-green-400/30" />
                </div>

                <div className="absolute top-8 right-8 px-4 py-2 rounded-lg bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-white text-sm font-semibold animate-float">
                  99.9% Uptime
                </div>
                <div className="absolute bottom-8 left-8 px-4 py-2 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-white text-sm font-semibold animate-float delay-1000">
                  Daily Backup
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problemas" className="relative py-20 bg-gradient-to-b from-transparent via-red-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.problemsTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.problemsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <div
                  key={problem.title}
                  className="group p-6 rounded-2xl bg-slate-900/50 border border-red-500/20 hover:border-red-500/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${problem.color} bg-clip-text text-transparent mb-2`}>
                    {problem.stat}
                  </div>
                  <div className="text-xs text-gray-500 mb-3">{problem.statLabel}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-gray-400 text-sm">{problem.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">{copy.servicesBadge}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{copy.servicesTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.servicesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copy.services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-green-500/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-green-400 mt-0.5" />
                        <span className="text-gray-300 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.statsTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.stats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.stat} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                  <Icon className="w-10 h-10 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.pricingTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.pricingSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {copy.packages.map((pkg) => {
              const price = formatPrice(pkg.priceCOP);
              return (
                <div
                  key={pkg.name}
                  className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                    pkg.popular
                      ? 'border-green-500 scale-105 shadow-2xl shadow-green-500/20'
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
                    <Shield className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      ${price.formatted}
                    </span>
                    <span className="text-gray-500 text-sm"> {pkg.period} {price.currency}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400">{pkg.ideal}</p>
                  </div>

                  <PricingButton
                    planName={pkg.name}
                    service="mantenimiento"
                    message={
                      locale === 'es'
                        ? `Hola, quiero contratar el ${pkg.name} de Mantenimiento`
                        : `Hi, I want to sign up for the ${pkg.name} Maintenance plan`
                    }
                    color={pkg.popular ? pkg.color : ''}
                  >
                    {locale === 'es' ? 'Contratar ahora' : 'Start now'}
                  </PricingButton>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{copy.includesTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {copy.includesAll.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
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

      <ContactCTA title={copy.ctaTitle} description={copy.ctaDescription} primaryText={copy.ctaButton} />
    </div>
  );
}
