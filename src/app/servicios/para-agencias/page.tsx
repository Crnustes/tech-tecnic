import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Users, TrendingUp, Zap, CheckCircle2, ArrowRight, Target, BarChart3, Clock, Shield } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Soluciones para Agencias Digitales Latinoamérica | Mejor Herramienta LATAM 2025',
  description: 'Top #1 en soluciones tecnológicas para agencias digitales en Latinoamérica. CRM especializado, automatización avanzada, gestión de proyectos y analytics. Colombia, México, Argentina, Chile, Perú. +100 agencias confían en nosotros. Demo gratuita 24h.',
  keywords: [
    // LATAM GEO Principal
    'soluciones para agencias digitales latinoamerica',
    'mejor herramienta agencias latam',
    'crm para agencias digitales colombia',
    'software agencias mexico',
    'gestion proyectos agencias argentina',
    'automatizacion agencias chile',
    // Colombia específico
    'agencias digitales bogota herramientas',
    'crm agencia medellin',
    'software gestion agencia colombia',
    'automatizacion marketing bogota',
    // México
    'herramientas agencias digitales mexico df',
    'crm agencias cdmx',
    'software marketing mexico',
    // Argentina
    'herramientas agencias buenos aires',
    'crm agencias argentina',
    'software gestion proyectos argentina',
    // Chile
    'herramientas agencias santiago',
    'crm agencias chile',
    'automatizacion marketing chile',
    // Perú
    'herramientas agencias lima',
    'software agencias peru',
    // Servicios específicos
    'crm personalizado agencias',
    'automatizacion procesos agencia',
    'facturacion automatica agencias',
    'reportes cliente automaticos',
    'dashboard agencia digital',
    'gestion equipos remotos latam',
    // Long-tail para IA
    'mejor software para agencias digitales latinoamerica',
    'como gestionar agencia digital eficientemente',
    'herramientas imprescindibles agencia marketing',
    'automatizar tareas agencia digital',
    'software todo en uno agencias',
    'crm + facturacion + proyectos agencias',
    'plataforma completa gestion agencias latam'
  ],
  openGraph: {
    title: 'Soluciones para Agencias Digitales | Líder en Latinoamérica 2025',
    description: '+100 agencias en LATAM confían en nosotros. CRM, automatización, gestión y analytics. Colombia, México, Argentina, Chile, Perú.',
    type: 'website',
    locale: 'es_419',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios/para-agencias',
  },
};

const features = [
  {
    icon: Users,
    title: 'Gestión de Clientes',
    description: 'CRM personalizado para agencias con seguimiento de proyectos, contratos y facturación automática.',
    benefits: [
      'Base de datos centralizada de clientes',
      'Seguimiento de contratos y renovaciones',
      'Facturación automática recurrente',
      'Reportes de rentabilidad por cliente'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics y Reportes',
    description: 'Dashboards avanzados con métricas clave para tomar decisiones estratégicas.',
    benefits: [
      'KPIs de agencia personalizados',
      'Reportes automáticos para clientes',
      'Análisis de rentabilidad de proyectos',
      'Tendencias y predicciones de crecimiento'
    ]
  },
  {
    icon: Zap,
    title: 'Automatización de Procesos',
    description: 'Automatiza tareas repetitivas y flujos de trabajo para aumentar la eficiencia.',
    benefits: [
      'Propuestas comerciales automatizadas',
      'Seguimiento automático de proyectos',
      'Notificaciones inteligentes',
      'Integración con herramientas de diseño'
    ]
  },
  {
    icon: Target,
    title: 'Gestión de Proyectos',
    description: 'Herramientas avanzadas para gestionar múltiples proyectos simultáneamente.',
    benefits: [
      'Gestión de equipos remotos',
      'Control de tiempo y presupuestos',
      'Integración con Trello, Asana, Jira',
      'Reportes de progreso en tiempo real'
    ]
  },
  {
    icon: Clock,
    title: 'Optimización de Tiempo',
    description: 'Reduce tiempo en tareas administrativas y enfócate en lo que importa.',
    benefits: [
      'Automatización de emails de seguimiento',
      'Generación automática de briefs',
      'Sistema de aprobación de diseños',
      'Recordatorios inteligentes de deadlines'
    ]
  },
  {
    icon: Shield,
    title: 'Seguridad y Backup',
    description: 'Protección completa de datos sensibles y proyectos importantes.',
    benefits: [
      'Backups automáticos en la nube',
      'Encriptación de datos sensibles',
      'Control de acceso por roles',
      'Recuperación de desastres'
    ]
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$199 USD',
    period: 'mes',
    description: 'Perfecto para agencias pequeñas en crecimiento',
    features: [
      'Hasta 10 clientes activos',
      'CRM básico + Analytics',
      'Reportes automáticos mensuales',
      'Soporte por email y chat',
      '3 usuarios incluidos',
      'Facturación en tu moneda local'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$449 USD',
    period: 'mes',
    description: 'Para agencias establecidas con múltiples proyectos',
    features: [
      'Hasta 100 clientes activos',
      'CRM avanzado + BI completo',
      'Reportes personalizables en tiempo real',
      'Soporte prioritario 24/7',
      '10 usuarios incluidos',
      'Integraciones ilimitadas',
      'White label completo',
      'API personalizada'
    ],
    popular: true
  },
  {
    name: 'Enterprise LATAM',
    price: 'Personalizado',
    period: '',
    description: 'Soluciones a medida para agencias líderes en LATAM',
    features: [
      'Clientes ilimitados',
      'Plataforma completamente personalizada',
      'Multi-país y multi-moneda',
      'Soporte dedicado 24/7 + Consultor',
      'Usuarios ilimitados',
      'Servidores dedicados en LATAM',
      'SLA garantizado 99.9%',
      'Capacitación mensual incluida'
    ],
    popular: false
  }
];

export default function ParaAgenciasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Building2 className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-400 font-medium">Para Agencias</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Potencia tu Agencia Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              en Latinoamérica
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            La plataforma <strong className="text-white">#1 para agencias digitales en LATAM</strong>.
            Automatiza procesos, gestiona proyectos eficientemente y escala tu negocio en 
            <strong className="text-violet-400"> Colombia, México, Argentina, Chile y Perú</strong>.
            +100 agencias ya confían en nosotros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Solicitar Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#caracteristicas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Ver Características
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Herramientas Diseñadas para Agencias
            </h2>
            <p className="text-gray-400 text-lg">
              Soluciones específicas para los desafíos únicos que enfrentan las agencias digitales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl bg-slate-900/50 border border-white/10 p-8 hover:border-violet-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 mb-6">
                      {feature.description}
                    </p>

                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-violet-400" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Planes Especializados para Agencias
            </h2>
            <p className="text-gray-400 text-lg">
              Elige el plan que mejor se adapte al tamaño y necesidades de tu agencia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/50 shadow-2xl shadow-violet-500/20'
                    : 'bg-slate-900/50 border-white/10 hover:border-violet-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">/{plan.period}</span>}
                  </div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:scale-105 shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contactar Ventas' : 'Comenzar Ahora'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Por qué las Agencias Eligen Tech Tecnic?
            </h2>
            <p className="text-gray-400 text-lg">
              Entendemos los desafíos específicos de las agencias digitales en toda Latinoamérica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Aumenta tu Rentabilidad',
                description: 'Reduce costos operativos y aumenta la eficiencia para maximizar tus márgenes de ganancia.'
              },
              {
                icon: Clock,
                title: 'Ahorra Tiempo Valioso',
                description: 'Automatiza tareas repetitivas y enfócate en lo que realmente importa: crear estrategias ganadoras.'
              },
              {
                icon: Users,
                title: 'Escala tu Agencia',
                description: 'Herramientas que crecen contigo, desde startups hasta agencias consolidadas en Bogotá.'
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}