import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Blocks, 
  Zap, 
  Link2, 
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Lock,
  TrendingUp,
  Sparkles,
  Code2,
  Webhook,
  Settings
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Integraciones y APIs en Bogotá | Zapier, Make, HubSpot | Tech Tecnic',
  description: 'Servicios de integración de sistemas y APIs en Bogotá. Conecta tus herramientas con Zapier, Make, HubSpot, Zoho y más. Sincronización automática de datos.',
  keywords: [
    'integraciones apis bogotá',
    'zapier colombia',
    'make integromat',
    'integración crm',
    'apis personalizadas',
    'sincronización datos',
    'webhooks colombia',
    'automatización integraciones'
  ],
  openGraph: {
    title: 'Integraciones y APIs | Tech Tecnic Bogotá',
    description: 'Conecta todas tus herramientas y sistemas para un flujo de trabajo sin fricciones.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios/integraciones',
  },
};

const benefits = [
  {
    icon: Link2,
    title: 'Todo Conectado',
    description: 'Tus herramientas trabajando juntas en armonía.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: RefreshCw,
    title: 'Sincronización Automática',
    description: 'Datos actualizados en tiempo real entre sistemas.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Mayor Productividad',
    description: 'Elimina trabajo manual y duplicación de datos.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lock,
    title: 'Seguro y Confiable',
    description: 'Conexiones encriptadas y backups automáticos.',
    color: 'from-orange-500 to-red-500',
  },
];

const integrationTypes = [
  {
    icon: Zap,
    title: 'Zapier & Make',
    description: 'Automatizaciones sin código que conectan +5000 apps.',
    features: [
      'Configuración de Zaps y Scenarios',
      'Flujos multi-paso avanzados',
      'Manejo de errores y notificaciones',
      'Filtros y condiciones lógicas',
      'Documentación completa',
    ],
    tools: ['Zapier', 'Make (Integromat)', 'n8n', 'Pabbly Connect'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Database,
    title: 'Integración con CRMs',
    description: 'Conecta tu CRM con todas tus herramientas de marketing y ventas.',
    features: [
      'HubSpot, Zoho, Salesforce',
      'Sincronización bidireccional',
      'Captura automática de leads',
      'Actualización de contactos',
      'Reportes unificados',
    ],
    tools: ['HubSpot', 'Zoho CRM', 'Salesforce', 'Pipedrive', 'Odoo'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code2,
    title: 'APIs Personalizadas',
    description: 'Desarrollo de APIs REST para integraciones específicas.',
    features: [
      'APIs RESTful profesionales',
      'Documentación Swagger/OpenAPI',
      'Autenticación OAuth/JWT',
      'Rate limiting y seguridad',
      'Webhooks personalizados',
    ],
    tools: ['Node.js', 'Python', 'PHP', 'Laravel', 'Express'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
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
    color: 'from-orange-500 to-red-500',
  },
];

const useCases = [
  {
    title: 'Marketing Automation',
    description: 'Leads de formularios → CRM → Email marketing → Analytics',
    icon: TrendingUp,
  },
  {
    title: 'E-commerce Sync',
    description: 'Pedidos → Inventario → Facturación → Envíos → Notificaciones',
    icon: Database,
  },
  {
    title: 'Customer Support',
    description: 'Tickets → CRM → WhatsApp → Email → Base de conocimiento',
    icon: Blocks,
  },
  {
    title: 'Sales Pipeline',
    description: 'Leads → Calificación → CRM → Propuestas → Facturación',
    icon: Link2,
  },
];

const packages = [
  {
    name: 'Integración Simple',
    price: '$600.000',
    description: 'Conecta 2-3 herramientas básicas',
    features: [
      '2-3 integraciones',
      'Configuración con Zapier/Make',
      'Flujos de 1-3 pasos',
      'Documentación básica',
      'Testing y validación',
      '1 mes de soporte',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Integración Profesional',
    price: '$1.200.000',
    description: 'Múltiples sistemas conectados',
    features: [
      '5-7 integraciones',
      'Flujos multi-paso avanzados',
      'Sincronización bidireccional',
      'Manejo de errores completo',
      'Webhooks personalizados',
      '3 meses de soporte',
    ],
    popular: true,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'API Enterprise',
    price: 'Personalizado',
    description: 'APIs y arquitectura a medida',
    features: [
      'API REST personalizada',
      'Integraciones ilimitadas',
      'Arquitectura escalable',
      'Seguridad enterprise',
      'Documentación completa',
      'Soporte dedicado',
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

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

export default function IntegracionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Blocks className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">Integraciones y APIs</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Conecta todas</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  tus herramientas
                </span>
                <br />
                <span className="text-white">en un solo lugar</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Integraciones profesionales en <strong className="text-white">Bogotá</strong>. 
                Conectamos tu CRM, email, WhatsApp, e-commerce y más para un flujo de trabajo sin fricciones.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-8">
                {[
                  'Zapier, Make y APIs personalizadas',
                  'Sincronización automática de datos',
                  'Sin duplicar información manualmente',
                  'Todo tu ecosistema conectado',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/573026742059?text=Hola,%20quiero%20integrar%20mis%20herramientas"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  <Link2 className="w-5 h-5" />
                  Conectar mis sistemas
                </Link>
                <Link
                  href="#casos-uso"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  Ver ejemplos
                </Link>
              </div>
            </div>

            {/* Right - Integration Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8">
                {/* Central hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl">
                    <Blocks className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Orbiting icons */}
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
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Por qué integrar tus sistemas?
            </h2>
            <p className="text-gray-400 text-lg">
              Trabaja más inteligente, no más duro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
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
              <span className="text-sm text-emerald-400 font-medium">Tipos de Integraciones</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Servicios de Integración
            </h2>
            <p className="text-gray-400 text-lg">
              Soluciones para cada necesidad técnica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <div
                  key={i}
                  className="group p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-400 mb-6">{type.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 mb-3">Herramientas:</p>
                    <div className="flex flex-wrap gap-2">
                      {type.tools.map((tool, j) => (
                        <span
                          key={j}
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Ejemplos de Integraciones
            </h2>
            <p className="text-gray-400">
              Flujos automatizados para tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={i}
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Integraciones Populares
            </h2>
            <p className="text-gray-400">
              Conectamos con las herramientas que ya usas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularIntegrations.map((integration, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all text-center"
              >
                <div className="font-semibold text-white text-sm mb-1">{integration.name}</div>
                <div className="text-xs text-gray-500">{integration.category}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              ¿No ves tu herramienta? Podemos integrarla. <Link href="#contacto" className="text-emerald-400 hover:underline">Contáctanos</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Planes de Integración
            </h2>
            <p className="text-gray-400 text-lg">
              Desde integraciones simples hasta arquitecturas enterprise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                  pkg.popular 
                    ? 'border-emerald-500 scale-105 shadow-2xl shadow-emerald-500/20' 
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
                  <Blocks className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </span>
                  {pkg.price !== 'Personalizado' && (
                    <span className="text-gray-500 text-sm ml-2">COP</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/573026742059?text=Hola,%20quiero%20información%20sobre%20${pkg.name}`}
                  target="_blank"
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? `bg-gradient-to-r ${pkg.color} text-white hover:scale-105`
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {pkg.price === 'Personalizado' ? 'Contactar' : 'Comenzar ahora'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Webhook className="w-16 h-16 text-emerald-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Necesitas una API personalizada?
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Desarrollamos APIs REST profesionales con documentación completa, 
                autenticación segura y escalabilidad enterprise.
              </p>
              <ul className="space-y-3">
                {[
                  'RESTful API siguiendo mejores prácticas',
                  'Documentación Swagger/OpenAPI',
                  'Autenticación OAuth 2.0 / JWT',
                  'Rate limiting y cache',
                  'Webhooks para eventos en tiempo real',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-emerald-500/30">
              <Settings className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Consultoría técnica incluida
              </h3>
              <p className="text-gray-400 mb-6">
                Te ayudamos a diseñar la arquitectura de integración perfecta para tu negocio.
              </p>
              <Link
                href="https://wa.me/573026742059?text=Hola,%20necesito%20una%20API%20personalizada"
                target="_blank"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Hablar con un experto
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        title="¿Listo para conectar tus sistemas?"
        description="Agenda una consultoría técnica gratuita y descubre cómo podemos integrar tus herramientas."
        primaryText="Consultoría gratuita"
      />
    </div>
  );
}