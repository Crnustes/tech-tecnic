import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Search, 
  TrendingUp, 
  MapPin, 
  BarChart3, 
  Target,
  CheckCircle2,
  Star,
  Zap,
  Users,
  Globe,
  Sparkles
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'SEO y Posicionamiento Web en Bogotá | Tech Tecnic',
  description: 'Servicios de SEO local y posicionamiento web en Bogotá. Aumenta tu visibilidad en Google, atrae más clientes y mejora tu ranking con estrategias probadas.',
  keywords: [
    'seo bogotá',
    'posicionamiento web colombia',
    'seo local bogotá',
    'google my business',
    'posicionamiento google',
    'agencia seo colombia',
    'optimización seo',
    'consultor seo bogotá'
  ],
  openGraph: {
    title: 'SEO y Posicionamiento Web en Bogotá | Tech Tecnic',
    description: 'Aumenta tu visibilidad en Google con nuestros servicios de SEO local en Bogotá.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios/seo-geo',
  },
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Más Tráfico Orgánico',
    description: 'Aumenta las visitas a tu sitio web sin pagar por publicidad.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    title: 'Visibilidad Local',
    description: 'Aparece en búsquedas locales cuando clientes te buscan cerca.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Más Clientes',
    description: 'Atrae clientes potenciales que buscan exactamente lo que ofreces.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Resultados Medibles',
    description: 'Reportes mensuales con métricas claras de tu crecimiento.',
    color: 'from-orange-500 to-red-500',
  },
];

const services = [
  {
    title: 'SEO Técnico',
    items: [
      'Optimización de velocidad de carga',
      'Core Web Vitals',
      'Estructura de URLs amigables',
      'Sitemap XML y robots.txt',
      'Schema Markup (datos estructurados)',
      'Indexación en Google Search Console',
    ],
  },
  {
    title: 'SEO On-Page',
    items: [
      'Investigación de keywords',
      'Optimización de títulos y meta descripciones',
      'Estructura de contenido (H1, H2, H3)',
      'Optimización de imágenes (alt text)',
      'Enlaces internos estratégicos',
      'Contenido optimizado para conversión',
    ],
  },
  {
    title: 'SEO Local (GEO)',
    items: [
      'Google My Business optimizado',
      'Citas locales en directorios',
      'Reseñas y reputación online',
      'Keywords geo-localizadas',
      'Google Maps optimization',
      'Local Schema markup',
    ],
  },
  {
    title: 'Analytics & Reportes',
    items: [
      'Google Analytics 4 configurado',
      'Google Tag Manager',
      'Seguimiento de conversiones',
      'Reportes mensuales detallados',
      'Análisis de competencia',
      'Recomendaciones estratégicas',
    ],
  },
];

const packages = [
  {
    name: 'SEO Básico',
    price: '$500.000',
    period: '/mes',
    description: 'Ideal para pequeños negocios que comienzan',
    features: [
      'Auditoría SEO inicial',
      'Optimización on-page (5 páginas)',
      'Google My Business básico',
      '5 keywords objetivo',
      'Reporte mensual',
      'Soporte por email',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'SEO Profesional',
    price: '$900.000',
    period: '/mes',
    description: 'Para empresas que buscan crecer',
    features: [
      'Todo lo del plan Básico',
      'Optimización on-page (15 páginas)',
      'Google My Business completo',
      '15 keywords objetivo',
      'Link building mensual',
      'Reporte detallado + reunión',
    ],
    popular: true,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'SEO Avanzado',
    price: '$1.500.000',
    period: '/mes',
    description: 'Para empresas competitivas',
    features: [
      'Todo lo del plan Profesional',
      'Optimización ilimitada',
      'Estrategia de contenido',
      '30+ keywords objetivo',
      'Link building avanzado',
      'Consultor dedicado',
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

const results = [
  { metric: '+250%', label: 'Tráfico orgánico promedio', icon: TrendingUp },
  { metric: 'Top 3', label: 'Posiciones en Google', icon: Star },
  { metric: '+180%', label: 'Leads calificados', icon: Target },
  { metric: '6 meses', label: 'Promedio de resultados', icon: Zap },
];

export default function SEOGeoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Search className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-400 font-medium">SEO & Posicionamiento Local</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Aparece en</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Google
                </span>
                <br />
                <span className="text-white">cuando te buscan</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Posicionamiento SEO en <strong className="text-white">Bogotá</strong> y Colombia. 
                Aumenta tu visibilidad, atrae más clientes y domina tu mercado local.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-300">Resultados en 6 meses</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-300">Sin contratos largos</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/573026742059?text=Hola,%20quiero%20una%20auditoría%20SEO%20gratuita"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  Auditoría SEO Gratis
                </Link>
                <Link
                  href="#precios"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  Ver planes
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              {results.map((result, i) => {
                const Icon = result.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-orange-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
                    <div className="text-sm text-gray-400">{result.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Por qué invertir en SEO?
            </h2>
            <p className="text-gray-400 text-lg">
              El SEO es la inversión más rentable a largo plazo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Nuestros Servicios</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Estrategia SEO 360°
            </h2>
            <p className="text-gray-400 text-lg">
              Todo lo que necesitas para posicionar tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Search className="w-6 h-6 text-orange-400" />
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-orange-400 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Planes de SEO Mensual
            </h2>
            <p className="text-gray-400 text-lg">
              Elige el plan que se ajuste a tus objetivos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                  pkg.popular 
                    ? 'border-orange-500 scale-105 shadow-2xl shadow-orange-500/20' 
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
                  <Search className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm">{pkg.period}</span>
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
                  href={`https://wa.me/573026742059?text=Hola,%20quiero%20información%20sobre%20el%20plan%20SEO%20${pkg.name}`}
                  target="_blank"
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? `bg-gradient-to-r ${pkg.color} text-white hover:scale-105`
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  Comenzar ahora
                </Link>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              💡 <strong className="text-white">Nota:</strong> Los resultados de SEO toman entre 3-6 meses. 
              Te recomendamos un compromiso mínimo de 6 meses para ver resultados significativos.
            </p>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <MapPin className="w-16 h-16 text-orange-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                SEO Local en Bogotá
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                El 46% de las búsquedas en Google son locales. Si tienes un negocio físico 
                en Bogotá, el SEO local es esencial para que te encuentren.
              </p>
              <ul className="space-y-3">
                {[
                  'Aparece en Google Maps',
                  'Atrae clientes cercanos',
                  'Aumenta el tráfico a tu local',
                  'Destaca sobre tu competencia',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-orange-500/30">
              <Globe className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                ¿Tu negocio aparece en Google?
              </h3>
              <p className="text-gray-400 mb-6">
                Solicita una auditoría SEO gratuita y descubre cómo mejorar tu posicionamiento.
              </p>
              <Link
                href="https://wa.me/573026742059?text=Hola,%20quiero%20una%20auditoría%20SEO%20gratuita"
                target="_blank"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Solicitar auditoría gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        title="¿Listo para posicionar tu negocio en Google?"
        description="Solicita una auditoría SEO gratuita y descubre el potencial de tu sitio web."
        primaryText="Auditoría SEO Gratis"
      />
    </div>
  );
}