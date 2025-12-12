import type { Metadata } from 'next';
import Link from 'next/link';
import { Code, Search, Bot, Blocks, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Servicios de Desarrollo Web e IA | Tech Tecnic Bogotá',
  description: 'Servicios profesionales de desarrollo web, SEO, automatización con IA e integraciones en Bogotá, Colombia. Impulsa tu negocio con tecnología de vanguardia.',
  keywords: [
    'desarrollo web bogotá',
    'SEO colombia',
    'automatización IA',
    'agencia digital bogotá',
    'desarrollo wordpress',
    'ecommerce colombia',
    'posicionamiento web'
  ],
  openGraph: {
    title: 'Servicios de Desarrollo Web e IA | Tech Tecnic Bogotá',
    description: 'Servicios profesionales de desarrollo web, SEO, automatización con IA e integraciones en Bogotá.',
    type: 'website',
    locale: 'es_CO',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios',
  },
};

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    slug: 'desarrollo-web',
    description: 'Sitios web modernos, rápidos y optimizados con WordPress, React o Next.js.',
    features: [
      'Landing pages de alto impacto',
      'E-commerce con WooCommerce',
      'Aplicaciones web personalizadas',
      'Diseño responsive y moderno',
    ],
    color: 'from-cyan-500 to-blue-500',
    price: 'Desde $400.000 COP',
  },
  {
    icon: Search,
    title: 'SEO + Posicionamiento Local',
    slug: 'seo-geo',
    description: 'Posicionamiento orgánico y local para aumentar tu visibilidad en Google.',
    features: [
      'SEO técnico y on-page',
      'Google My Business optimizado',
      'Keywords locales (Bogotá)',
      'Reportes mensuales de ranking',
    ],
    color: 'from-orange-500 to-red-500',
    price: 'Desde $500.000 COP/mes',
  },
  {
    icon: Bot,
    title: 'IA y Automatización',
    slug: 'automatizacion-ia',
    description: 'Automatiza procesos con IA, chatbots inteligentes y flujos personalizados.',
    features: [
      'Chatbots con IA (WhatsApp, Web)',
      'Automatización de tareas',
      'Integración con CRMs',
      'Análisis predictivo con IA',
    ],
    color: 'from-purple-500 to-pink-500',
    price: 'Desde $800.000 COP',
  },
  {
    icon: Blocks,
    title: 'Integraciones',
    slug: 'integraciones',
    description: 'Conecta tus herramientas favoritas para un flujo de trabajo sin fricciones.',
    features: [
      'APIs personalizadas',
      'Zapier y Make (Integromat)',
      'Conexión con Zoho, HubSpot',
      'Sincronización de datos',
    ],
    color: 'from-emerald-500 to-teal-500',
    price: 'Desde $600.000 COP',
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">Servicios Profesionales</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Servicios de
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              Desarrollo Digital
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Soluciones tecnológicas a medida en <strong className="text-white">Bogotá, Colombia</strong>
            {' '}para empresas que buscan crecer en el mundo digital
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>50+ Proyectos Exitosos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Atención en Bogotá</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Soporte Continuo</span>
            </div>
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
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
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/servicios/${service.slug}`}
                      className={`group/btn flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold hover:scale-105 transition-transform shadow-lg`}
                    >
                      Ver más detalles
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
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Por qué elegir Tech Tecnic?
            </h2>
            <p className="text-gray-400 text-lg">
              Somos tu socio tecnológico en Bogotá para transformar ideas en realidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experiencia Local',
                description: 'Conocemos el mercado colombiano y las necesidades de empresas en Bogotá.',
              },
              {
                title: 'Tecnología Moderna',
                description: 'Usamos las últimas herramientas y frameworks para garantizar calidad.',
              },
              {
                title: 'Soporte Continuo',
                description: 'No te dejamos solo después del lanzamiento. Te acompañamos en tu crecimiento.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}