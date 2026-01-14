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
  Lock,
  TrendingUp,
  Sparkles,
  Server,
  Bug,
  FileText,
  HeadphonesIcon
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Mantenimiento Web en Bogotá | Soporte y Seguridad 24/7 | Tech Tecnic',
  description: 'Servicio de mantenimiento web profesional en Bogotá. Actualizaciones, seguridad, backups, optimización y soporte técnico para tu sitio WordPress o web. Planes desde $150.000/mes.',
  keywords: [
    'mantenimiento web bogotá',
    'soporte wordpress colombia',
    'mantenimiento sitio web',
    'seguridad web colombia',
    'backup sitio web',
    'actualización wordpress',
    'optimización web',
    'soporte técnico web'
  ],
  openGraph: {
    title: 'Mantenimiento Web Profesional en Bogotá | Tech Tecnic',
    description: 'Mantén tu sitio web seguro, rápido y actualizado con nuestro servicio de mantenimiento mensual.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios/mantenimiento',
  },
};

const problems = [
  {
    icon: AlertTriangle,
    title: 'Sitio hackeado',
    description: 'Vulnerabilidades no parcheadas abren la puerta a ataques.',
    stat: '30.000 sitios',
    statLabel: 'hackeados diariamente',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Sitio lento',
    description: 'Plugins desactualizados y falta de optimización.',
    stat: '53%',
    statLabel: 'de usuarios abandonan',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Bug,
    title: 'Errores y bugs',
    description: 'Incompatibilidades entre plugins y temas.',
    stat: '70%',
    statLabel: 'tiene problemas',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Sin backups',
    description: 'Un error puede borrar todo tu sitio para siempre.',
    stat: '60%',
    statLabel: 'no tiene backups',
    color: 'from-blue-500 to-cyan-500',
  },
];

const services = [
  {
    icon: RefreshCw,
    title: 'Actualizaciones Constantes',
    description: 'Mantenemos WordPress, plugins y temas siempre actualizados.',
    items: [
      'Actualización de WordPress core',
      'Plugins y temas actualizados',
      'Testing antes de actualizar',
      'Rollback si algo falla',
      'Compatibilidad garantizada',
    ],
  },
  {
    icon: Shield,
    title: 'Seguridad y Protección',
    description: 'Protegemos tu sitio contra malware, hackers y vulnerabilidades.',
    items: [
      'Firewall y protección activa',
      'Escaneo de malware semanal',
      'Certificado SSL renovado',
      'Protección contra DDoS',
      'Limpieza de sitios hackeados',
    ],
  },
  {
    icon: Database,
    title: 'Backups Automáticos',
    description: 'Copias de seguridad diarias en la nube, siempre disponibles.',
    items: [
      'Backup diario automático',
      'Almacenamiento en la nube',
      'Retención de 30 días',
      'Restauración en minutos',
      'Base de datos y archivos',
    ],
  },
  {
    icon: Zap,
    title: 'Optimización y Velocidad',
    description: 'Tu sitio siempre rápido con optimización continua.',
    items: [
      'Optimización de imágenes',
      'Caché y CDN configurado',
      'Limpieza de base de datos',
      'Core Web Vitals mejorados',
      'Monitoreo de rendimiento',
    ],
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte Técnico',
    description: 'Ayuda cuando la necesites, sin costos adicionales.',
    items: [
      'Soporte por email/WhatsApp',
      'Respuesta en 24 horas',
      'Cambios menores incluidos',
      'Monitoreo 24/7',
      'Reportes mensuales',
    ],
  },
  {
    icon: FileText,
    title: 'Reportes Mensuales',
    description: 'Transparencia total sobre el estado de tu sitio.',
    items: [
      'Reporte de actualizaciones',
      'Estado de seguridad',
      'Métricas de rendimiento',
      'Backups realizados',
      'Recomendaciones',
    ],
  },
];

const packages = [
  {
    name: 'Plan Básico',
    price: '$150.000',
    period: '/mes',
    description: 'Para sitios pequeños y blogs',
    popular: false,
    features: [
      'Actualizaciones mensuales',
      '1 Backup semanal',
      'Monitoreo de seguridad básico',
      'Soporte por email',
      '1 cambio menor incluido',
      'Reporte mensual',
    ],
    ideal: 'Ideal para: Blogs, sitios informativos pequeños',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Plan Profesional',
    price: '$250.000',
    period: '/mes',
    description: 'Para sitios corporativos',
    popular: true,
    features: [
      'Actualizaciones automáticas',
      'Backup diario automático',
      'Seguridad avanzada + Firewall',
      'Optimización de velocidad',
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
    price: '$400.000',
    period: '/mes',
    description: 'Para tiendas online',
    popular: false,
    features: [
      'Todo lo del plan Profesional',
      'Backup diario + redundancia',
      'Monitoreo 24/7 de uptime',
      'Optimización WooCommerce',
      'Soporte prioritario 24/7',
      '5 cambios menores incluidos',
      'CDN incluido',
      'Auditoría mensual completa',
    ],
    ideal: 'Ideal para: E-commerce, tiendas online',
    color: 'from-purple-500 to-pink-500',
  },
];

const whyMaintenance = [
  {
    stat: '18.5%',
    label: 'de sitios WordPress están desactualizados',
    icon: Clock,
  },
  {
    stat: '90%',
    label: 'de los hackeos ocurren por falta de actualización',
    icon: Shield,
  },
  {
    stat: '43%',
    label: 'de sitios web pequeños no tienen backups',
    icon: Database,
  },
  {
    stat: '1 seg',
    label: 'de retraso reduce conversiones en 7%',
    icon: Zap,
  },
];

const includesAll = [
  'Monitoreo de uptime 24/7',
  'Actualizaciones de seguridad',
  'Backups automáticos',
  'Optimización de velocidad',
  'Certificado SSL renovado',
  'Soporte técnico incluido',
  'Reportes mensuales detallados',
  'Sin contratos largos (cancela cuando quieras)',
];

export default function MantenimientoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Mantenimiento y Soporte Web</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Tu sitio web</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  siempre seguro
                </span>
                <br />
                <span className="text-white">y actualizado</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Mantenimiento web profesional en <strong className="text-white">Bogotá</strong>. 
                Actualizaciones, seguridad, backups y soporte técnico para que te enfoques en tu negocio.
              </p>

              {/* Trust Points */}
              <div className="space-y-3 mb-8">
                {[
                  'Sin preocuparte por actualizaciones',
                  'Protección contra hackers y malware',
                  'Backups diarios automáticos',
                  'Soporte cuando lo necesites',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message="Hola, quiero información sobre mantenimiento web para mi sitio"
                  service="mantenimiento"
                  action="click_cta_hero"
                  label="Mantenimiento"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  Ver planes
                </WhatsAppButton>
                <Link
                  href="#problemas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  ¿Por qué es importante?
                </Link>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-green-400/30" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 px-4 py-2 rounded-lg bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-white text-sm font-semibold animate-float">
                  99.9% Uptime
                </div>
                <div className="absolute bottom-8 left-8 px-4 py-2 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-white text-sm font-semibold animate-float delay-1000">
                  Backup Diario
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problemas" className="relative py-20 bg-gradient-to-b from-transparent via-red-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Qué puede salir mal sin mantenimiento?
            </h2>
            <p className="text-gray-400 text-lg">
              Los riesgos de no mantener tu sitio web actualizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, i) => {
              const Icon = problem.icon;
              return (
                <div
                  key={i}
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

      {/* Services Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">¿Qué Incluye?</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Mantenimiento Web Completo
            </h2>
            <p className="text-gray-400 text-lg">
              Todo lo que tu sitio necesita en un solo plan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-green-500/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
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

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Por qué es crítico el mantenimiento web
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMaintenance.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <Icon className="w-10 h-10 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Planes de Mantenimiento
            </h2>
            <p className="text-gray-400 text-lg">
              Elige el plan perfecto para tu sitio web
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                  pkg.popular 
                    ? 'border-green-500 scale-105 shadow-2xl shadow-green-500/20' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${pkg.color} text-white text-sm font-semibold`}>
                      Más Popular
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
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
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
                  message={`Hola, quiero contratar el ${pkg.name} de Mantenimiento`}
                  color={pkg.popular ? pkg.color : ''}
                >
                  Contratar ahora
                </PricingButton>
              </div>
            ))}
          </div>

          {/* All plans include */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Todos los planes incluyen:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {includesAll.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        title="¿Listo para proteger tu sitio web?"
        description="Contrata mantenimiento web profesional y olvídate de preocupaciones técnicas."
        primaryText="Contratar mantenimiento"
      />
    </div>
  );
}