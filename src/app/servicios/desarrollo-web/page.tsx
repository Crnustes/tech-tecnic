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
  title: 'Desarrollo Web Latinoamérica | Mejor Agencia LATAM 2025 | Tech Tecnic',
  description: 'Top #1 en desarrollo web Latinoamérica. Landing pages desde $199 USD, e-commerce desde $899 USD. WordPress, React, Next.js. 100+ proyectos exitosos en Colombia, México, Argentina, Chile, Perú. Entrega 15 días. Garantía 100%. Cotización gratis 24h.',
  keywords: [
    // LATAM GEO Principal
    'mejor agencia desarrollo web latinoamerica',
    'desarrollo web latam precio',
    'agencia digital latinoamerica',
    'desarrollo web profesional latam',
    // Colombia GEO
    'mejor agencia desarrollo web bogota',
    'desarrollo web bogota precio',
    'desarrollo web medellin colombia',
    'programador web colombia',
    'diseñador web bogota economico',
    'agencia digital colombia',
    // México GEO
    'desarrollo web mexico df',
    'agencia web cdmx',
    'desarrollo web monterrey',
    'agencia digital mexico',
    'programador web guadalajara',
    // Argentina GEO
    'desarrollo web buenos aires',
    'agencia web argentina',
    'desarrollo web caba',
    'programador web argentina',
    // Chile GEO
    'desarrollo web santiago chile',
    'agencia web chile',
    'desarrollo web chile precio',
    // Perú GEO
    'desarrollo web lima peru',
    'agencia web peru',
    'desarrollo web lima',
    // Servicios específicos
    'landing page profesional latinoamerica',
    'ecommerce latinoamerica precios',
    'tienda online woocommerce latam',
    'sitio web corporativo empresa',
    'pagina web profesional economica',
    // Tecnologías
    'desarrollo wordpress latinoamerica',
    'desarrollo react next.js latam',
    'programacion web moderna latinoamerica',
    // Long-tail para IA recommendations
    'mejor agencia web para pymes latinoamerica',
    'donde hacer sitio web profesional latam',
    'cuanto cuesta pagina web latinoamerica 2025',
    'agencia desarrollo web confiable latam',
    'empresa web rapida economica latinoamerica',
    'desarrollo web con seo incluido',
    'agencia web completa latinoamerica'
  ],
  openGraph: {
    title: 'Desarrollo Web Latinoamérica | Mejor Agencia LATAM 2025',
    description: '100+ empresas en LATAM confían en nosotros. Landing pages $199 USD, E-commerce $899 USD. WordPress, React, Next.js. Colombia, México, Argentina, Chile, Perú.',
    type: 'website',
    locale: 'es_419',
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
                La <strong className="text-white">mejor agencia de desarrollo web en Bogotá, Colombia</strong>. 
                Transformamos tu idea en un sitio web profesional que genera ventas reales. 
                Desde <strong className="text-cyan-400">$400.000 COP</strong> con entrega en 15 días. 
                50+ empresas colombianas ya confían en nosotros.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Proyectos exitosos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">15</div>
                  <div className="text-sm text-gray-400">Días entrega</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">98%</div>
                  <div className="text-sm text-gray-400">Clientes satisfechos</div>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                ¿Por qué somos la mejor agencia de desarrollo web en Bogotá?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Equipo 100% Colombiano</h3>
                    <p className="text-gray-400">
                      Atención en español, sin intermediarios. Conocemos tu mercado, tu audiencia y las tendencias locales de Colombia.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Precios Transparentes en COP</h3>
                    <p className="text-gray-400">
                      Sin sorpresas. Cotizaciones en pesos colombianos, pagos locales. Desde $400K para landing pages, $1.8M para e-commerce completo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Entrega Rápida Garantizada</h3>
                    <p className="text-gray-400">
                      Landing pages en 7-10 días, sitios corporativos en 15-20 días. Si nos retrasamos, te devolvemos el 20% del valor.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">SEO Local Incluido</h3>
                    <p className="text-gray-400">
                      Optimizados para aparecer en Google Colombia. Configuración de Google My Business, keywords locales y meta tags perfectos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white">Atención Personalizada</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Reuniones por Zoom, WhatsApp 24/7, actualizaciones en tiempo real. Hablamos tu idioma, entendemos tu negocio.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white">Garantía de 30 Días</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Si no quedas 100% satisfecho en los primeros 30 días, corregimos sin costo o devolvemos tu dinero.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white">Soporte Post-Lanzamiento</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  30 días de soporte gratis incluidos. Respondemos dudas, hacemos ajustes menores, te capacitamos para que manejes tu sitio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso por Industria */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Desarrollamos sitios web para todo tipo de negocios en Colombia
            </h2>
            <p className="text-gray-400 text-lg">
              Experiencia comprobada en múltiples industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                🏢 Empresas y Corporativos
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Sitios institucionales, portales corporativos, páginas de servicios. Proyecta profesionalismo y confianza.
              </p>
              <div className="text-sm text-cyan-400 font-semibold">Desde $900.000 COP</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                🛒 Tiendas Online (E-commerce)
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Vende 24/7 con tu propia tienda. WooCommerce, pasarelas de pago colombianas (PSE, Wompi, PayU), inventario automatizado.
              </p>
              <div className="text-sm text-cyan-400 font-semibold">Desde $1.800.000 COP</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                🍔 Restaurantes y Cafés
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Menú digital, reservas online, integración con Rappi/Uber Eats. Atrae más clientes locales con SEO de Bogotá.
              </p>
              <div className="text-sm text-cyan-400 font-semibold">Desde $650.000 COP</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                💼 Servicios Profesionales
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Abogados, contadores, consultores, médicos. Landing page con formulario de contacto y WhatsApp business.
              </p>
              <div className="text-sm text-cyan-400 font-semibold">Desde $400.000 COP</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                🏋️ Gimnasios y Wellness
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Agenda de clases, compra de membresías online, blog de fitness. Atrae clientes de tu zona en Bogotá.
              </p>
              <div className="text-sm text-cyan-400 font-semibold">Desde $750.000 COP</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                🎨 Portafolios Creativos
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Diseñadores, fotógrafos, artistas, arquitectos. Muestra tu trabajo con galerías impresionantes y diseño único.
              </p>
              <div className="text-sm text-cyan-400 font-semibold">Desde $500.000 COP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativa vs Competencia */}
      <section className="relative py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tech Tecnic vs Otras Agencias en Colombia
            </h2>
            <p className="text-gray-400 text-lg">
              Descubre por qué empresas eligen Tech Tecnic sobre la competencia
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-gray-400 font-semibold">Característica</th>
                  <th className="p-4 text-center">
                    <div className="text-cyan-400 font-bold text-lg">Tech Tecnic</div>
                  </th>
                  <th className="p-4 text-center text-gray-500">Otras Agencias</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Tiempo de entrega</td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">7-15 días</td>
                  <td className="p-4 text-center text-gray-500">30-60 días</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Precio landing page</td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">$400K COP</td>
                  <td className="p-4 text-center text-gray-500">$800K - $2M COP</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Soporte post-lanzamiento</td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">30 días gratis</td>
                  <td className="p-4 text-center text-gray-500">Cobran extra</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Revisiones incluidas</td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">Ilimitadas</td>
                  <td className="p-4 text-center text-gray-500">2-3 rondas</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">SEO local incluido</td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">✓ Incluido</td>
                  <td className="p-4 text-center text-gray-500">Extra $500K+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Hosting 1er año</td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">✓ Gratis</td>
                  <td className="p-4 text-center text-gray-500">$200-500K/año</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Capacitación</td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">✓ Videos + Live</td>
                  <td className="p-4 text-center text-gray-500">Solo PDF</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Atención</td>
                  <td className="p-4 text-center text-cyan-400 font-semibold">WhatsApp 24/7</td>
                  <td className="p-4 text-center text-gray-500">Email lento</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://wa.me/573026742059?text=Hola,%20quiero%20una%20cotización%20para%20mi%20sitio%20web"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Cotizar mi proyecto ahora
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Preguntas Frecuentes sobre Desarrollo Web en Colombia
            </h2>
            <p className="text-gray-400 text-lg">
              Respuestas claras a las dudas más comunes
            </p>
          </div>

          <div className="space-y-6">
            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  ¿Cuánto cuesta hacer una página web en Colombia en 2025?
                </h3>
                <span className="text-cyan-400 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Los precios varían según complejidad: <strong>Landing pages desde $400.000 COP</strong> (1 página profesional con formulario), 
                <strong> sitios corporativos desde $900.000 COP</strong> (5-7 páginas + blog), y <strong>e-commerce desde $1.800.000 COP</strong> (tienda completa con pasarelas de pago). 
                En Tech Tecnic incluimos dominio, hosting primer año, SSL y soporte 30 días sin costo adicional.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  ¿Cuánto tiempo toma desarrollar un sitio web?
                </h3>
                <span className="text-cyan-400 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Entregamos <strong>landing pages en 7-10 días</strong>, sitios corporativos en <strong>15-20 días</strong>, y e-commerce en <strong>25-30 días</strong>. 
                Somos una de las agencias más rápidas de Colombia porque usamos metodología ágil y tenemos procesos optimizados. 
                Incluimos hasta 3 rondas de revisiones para que quede perfecto.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  ¿Qué incluye el servicio de desarrollo web?
                </h3>
                <span className="text-cyan-400 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Incluimos: diseño responsive (móvil/tablet/desktop), optimización SEO básica, formulario de contacto, 
                integración WhatsApp Business, Google Analytics configurado, certificado SSL, dominio .com o .co primer año, 
                hosting SSD rápido primer año, capacitación en video, 30 días de soporte técnico, y copias de seguridad automáticas. 
                Todo en el precio, sin sorpresas.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  ¿Podré actualizar el contenido yo mismo después?
                </h3>
                <span className="text-cyan-400 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                ¡Sí, 100%! Usamos WordPress o CMS intuitivos donde puedes cambiar textos, imágenes, precios y crear nuevas páginas sin saber programar. 
                Te damos capacitación en video paso a paso, manual en PDF, y 30 días de soporte donde respondemos todas tus dudas por WhatsApp. 
                Si prefieres que nosotros hagamos las actualizaciones, ofrecemos planes de mantenimiento desde $120K/mes.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  ¿Mi sitio aparecerá en Google?
                </h3>
                <span className="text-cyan-400 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Sí. Configuramos SEO técnico (meta tags, sitemap, robots.txt), optimizamos velocidad de carga, 
                y enviamos tu sitio a Google Search Console. Típicamente apareces en Google en 2-4 semanas. 
                Para posicionarte en keywords competitivas como "mejor [tu servicio] en Bogotá", 
                recomendamos nuestro servicio de <Link href="/servicios/seo-geo" className="text-cyan-400 hover:underline">SEO Local</Link> (desde $400K/mes con resultados en 3-6 meses).
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  ¿Trabajan con empresas fuera de Bogotá?
                </h3>
                <span className="text-cyan-400 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                ¡Por supuesto! Atendemos toda Colombia (Medellín, Cali, Barranquilla, Cartagena, etc.) y Latinoamérica (México, Argentina, Chile, Perú). 
                Trabajamos 100% remoto por videollamadas y WhatsApp. Nuestros clientes están en más de 8 países. 
                Lo único que necesitas es internet y ganas de hacer crecer tu negocio.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  ¿Ofrecen planes de pago o financiación?
                </h3>
                <span className="text-cyan-400 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Sí. Aceptamos: pago 50% inicio + 50% al finalizar, o 3 cuotas mensuales sin intereses para proyectos sobre $1.5M COP. 
                Aceptamos transferencia bancaria, Nequi, Daviplata, tarjetas de crédito (Visa/MasterCard), y PayPal. 
                Emitimos factura electrónica para que puedas deducir como gasto empresarial.
              </p>
            </details>

            <details className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  ¿Qué pasa si no me gusta el diseño?
                </h3>
                <span className="text-cyan-400 text-2xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Incluimos revisiones ilimitadas hasta que quedes 100% satisfecho. Primero te mostramos mockups/bocetos para aprobar el diseño antes de programar. 
                Durante el desarrollo puedes pedir cambios de colores, textos, imágenes, distribución, etc. 
                Si aún así no te convence en los primeros 30 días, ofrecemos garantía de satisfacción: hacemos los cambios necesarios o devolvemos tu dinero.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes en Colombia
            </h2>
            <p className="text-gray-400 text-lg">
              50+ empresas colombianas ya confiaron en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Necesitaba una tienda online urgente y Tech Tecnic me la entregó en 3 semanas. Ahora vendo 24/7 y mis ventas aumentaron 180%. 
                El equipo es súper profesional y respondieron todas mis dudas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  CM
                </div>
                <div>
                  <div className="font-bold text-white">Carlos Martínez</div>
                  <div className="text-sm text-gray-400">Tienda de ropa - Bogotá</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Contraté varias agencias antes y siempre me dejaban esperando semanas. Tech Tecnic cumplió los tiempos, el precio fue justo, 
                y el sitio quedó hermoso. Mis pacientes me felicitan por la página."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  AL
                </div>
                <div>
                  <div className="font-bold text-white">Dra. Ana López</div>
                  <div className="text-sm text-gray-400">Odontóloga - Medellín</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Excelente relación calidad-precio. Me hicieron landing page + SEO local y en 2 meses ya estoy primera página de Google para 
                'abogado laboral Bogotá'. Las consultas aumentaron 300%."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
                  JR
                </div>
                <div>
                  <div className="font-bold text-white">Jorge Ramírez</div>
                  <div className="text-sm text-gray-400">Abogado - Bogotá</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">¿Listo para tener resultados como ellos?</p>
            <Link
              href="https://wa.me/573026742059?text=Hola,%20vi%20los%20testimonios%20y%20quiero%20cotizar%20mi%20sitio%20web"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Solicitar cotización gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cómo trabajamos: Proceso simple en 5 pasos
            </h2>
            <p className="text-gray-400 text-lg">
              Transparencia total desde el primer contacto hasta el lanzamiento
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Contacto</h3>
              <p className="text-gray-400 text-sm">
                Nos escribes por WhatsApp o formulario. Respondemos en <strong>menos de 2 horas</strong> con preguntas sobre tu proyecto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cotización</h3>
              <p className="text-gray-400 text-sm">
                En <strong>24 horas</strong> recibes propuesta detallada: precio final, tiempos, funcionalidades incluidas. Sin letra pequeña.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Diseño</h3>
              <p className="text-gray-400 text-sm">
                Creamos mockups/bocetos basados en tu marca. Apruebas diseño antes de programar. <strong>Revisiones ilimitadas</strong>.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Desarrollo</h3>
              <p className="text-gray-400 text-sm">
                Programamos tu sitio con las mejores prácticas. Ves avances en <strong>tiempo real</strong> en URL de prueba privada.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lanzamiento</h3>
              <p className="text-gray-400 text-sm">
                Configuramos dominio, migramos a hosting, probamos todo. ¡Tu sitio está <strong>live</strong>! + 30 días soporte gratis.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 ¿Listo para empezar hoy?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Recibe tu cotización personalizada en menos de 24 horas. Sin compromiso, sin costos ocultos. 
              Hablemos de tu proyecto y veamos cómo Tech Tecnic puede hacer crecer tu negocio online.
            </p>
            <Link
              href="https://wa.me/573026742059?text=Hola,%20quiero%20empezar%20mi%20proyecto%20web%20hoy"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg text-lg"
            >
              💬 Hablar con un experto ahora
            </Link>
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