import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
  Sparkles
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Desarrollo Web en Bogotá | WordPress, React, Next.js | Tech Tecnic',
  description: 'Desarrollo web profesional en Bogotá. Landing pages, e-commerce y aplicaciones web con WordPress, React y Next.js. Diseño moderno y optimizado para SEO.',
  keywords: [
    'desarrollo web bogotá',
    'desarrollo wordpress colombia',
    'ecommerce woocommerce',
    'react nextjs bogotá',
    'diseño web profesional',
    'landing page bogotá',
    'tienda online colombia'
  ],
  openGraph: {
    title: 'Desarrollo Web Profesional en Bogotá | Tech Tecnic',
    description: 'Creamos sitios web modernos, rápidos y optimizados para tu negocio en Bogotá.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios/desarrollo-web',
  },
};

const features = [
  {
    icon: Zap,
    title: 'Alto Rendimiento',
    description: 'Sitios web optimizados para cargar en menos de 3 segundos.',
  },
  {
    icon: Shield,
    title: 'Seguridad SSL',
    description: 'Certificados SSL incluidos para proteger tu sitio y mejorar SEO.',
  },
  {
    icon: Smartphone,
    title: '100% Responsive',
    description: 'Diseño perfecto en móvil, tablet y desktop.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimizado',
    description: 'Configurado para posicionarse en Google desde el día uno.',
  },
];

const packages = [
  {
    name: 'Landing Page',
    price: '$400.000',
    description: 'Perfecta para emprendedores y pequeños negocios',
    features: [
      '1 página profesional',
      'Diseño responsivo',
      'Formulario de contacto',
      'Integración WhatsApp',
      'Google Analytics',
      'Dominio + Hosting 1 año',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Sitio Corporativo',
    price: '$900.000',
    description: 'Para empresas que buscan presencia profesional',
    features: [
      '5-7 páginas',
      'Blog o noticias',
      'Correos corporativos',
      'SEO avanzado',
      'Chat en vivo',
      'Capacitación incluida',
    ],
    popular: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'E-Commerce',
    price: '$1.800.000',
    description: 'Tienda online completa con WooCommerce',
    features: [
      'Productos ilimitados',
      'Pasarelas de pago',
      'Panel de administración',
      'Inventario y reportes',
      'Email marketing',
      'Soporte 3 meses',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

const technologies = [
  { name: 'WordPress', desc: 'CMS más popular del mundo' },
  { name: 'WooCommerce', desc: 'E-commerce poderoso' },
  { name: 'React', desc: 'Interfaces modernas' },
  { name: 'Next.js', desc: 'Performance excepcional' },
  { name: 'Tailwind CSS', desc: 'Diseño profesional' },
  { name: 'Elementor', desc: 'Diseño visual avanzado' },
];

export default function DesarrolloWebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Code className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Desarrollo Web Profesional</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Sitios Web que</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Convierten Visitantes
                </span>
                <br />
                <span className="text-white">en Clientes</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Desarrollo web profesional en <strong className="text-white">Bogotá</strong>. 
                Desde landing pages hasta e-commerce completos con tecnología de vanguardia.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Sitios creados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">15</div>
                  <div className="text-sm text-gray-400">Días promedio</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">98%</div>
                  <div className="text-sm text-gray-400">Satisfacción</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/573026742059?text=Hola,%20quiero%20cotizar%20desarrollo%20web"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  Cotizar mi proyecto
                </Link>
                <Link
                  href="#paquetes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  Ver precios
                </Link>
              </div>
            </div>

            {/* Right - Image/Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                {/* Aquí puedes poner una imagen real o un mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-32 h-32 text-cyan-400/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Por qué elegir nuestro desarrollo web?
            </h2>
            <p className="text-gray-400 text-lg">
              Tecnología moderna con resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
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
      <section id="paquetes" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-t_primary" />
              <span className="text-sm text-t_primary font-medium">Paquetes y Precios</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Planes de Desarrollo Web
            </h2>
            <p className="text-gray-400 text-lg">
              Elige el paquete perfecto para tu proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                  pkg.popular 
                    ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20' 
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
                  <Code className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">COP</span>
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
                  href={`https://wa.me/573026742059?text=Hola,%20quiero%20cotizar%20el%20plan%20${pkg.name}`}
                  target="_blank"
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? `bg-gradient-to-r ${pkg.color} text-white hover:scale-105`
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  Solicitar cotización
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tecnologías que usamos
            </h2>
            <p className="text-gray-400">
              Las mejores herramientas para tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Desarrollo Web en Bogotá con Garantía
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Somos una agencia local en Bogotá, Colombia. Conocemos el mercado y creamos 
            sitios web optimizados para tu audiencia colombiana.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Atención personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Entrega en 15 días</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Precios justos</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        title="¿Listo para crear tu sitio web?"
        description="Contáctanos hoy y recibe una cotización personalizada para tu proyecto de desarrollo web en Bogotá."
        primaryText="Cotizar mi sitio web"
      />
    </div>
  );
}