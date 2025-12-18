import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Smartphone, 
  Apple, 
  Chrome,
  Zap,
  Users,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Code2,
  Layers,
  Bell,
  CreditCard,
  MapPin,
  Camera,
  Share2
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Desarrollo de Apps Móviles en Bogotá | iOS y Android | Tech Tecnic',
  description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma en Bogotá. Apps para iOS, Android y React Native. Desde apps empresariales hasta e-commerce móvil.',
  keywords: [
    'desarrollo apps móviles bogotá',
    'app ios android colombia',
    'react native bogotá',
    'flutter colombia',
    'aplicaciones móviles',
    'desarrollo app nativa',
    'app empresarial',
    'apps ecommerce'
  ],
  openGraph: {
    title: 'Desarrollo de Apps Móviles en Bogotá | Tech Tecnic',
    description: 'Creamos aplicaciones móviles que tus usuarios amarán. iOS, Android y multiplataforma.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios/apps-moviles',
  },
};

const stats = [
  {
    value: '85%',
    label: 'del tiempo en apps móviles',
    description: 'Los usuarios pasan más tiempo en apps que en web',
    icon: Smartphone,
  },
  {
    value: '3.8B',
    label: 'usuarios de smartphones',
    description: 'El mercado móvil sigue creciendo globalmente',
    icon: Users,
  },
  {
    value: '2x',
    label: 'más conversiones',
    description: 'Las apps convierten mejor que sitios web',
    icon: TrendingUp,
  },
  {
    value: '70%',
    label: 'retención mejorada',
    description: 'Los usuarios regresan más a las apps',
    icon: Zap,
  },
];

const appTypes = [
  {
    icon: Layers,
    title: 'Apps Empresariales',
    description: 'Soluciones para gestión interna, productividad y equipos remotos.',
    features: [
      'Gestión de inventario',
      'CRM móvil',
      'Facturación y reportes',
      'Comunicación de equipos',
      'Dashboard analytics',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    title: 'E-commerce Móvil',
    description: 'Tiendas móviles con pasarelas de pago y experiencia premium.',
    features: [
      'Catálogo de productos',
      'Pasarelas de pago',
      'Carrito de compras',
      'Push notifications',
      'Programa de fidelidad',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Apps de Servicios',
    description: 'Aplicaciones para servicios a domicilio, delivery y logística.',
    features: [
      'Geolocalización en tiempo real',
      'Reservas y agendamiento',
      'Sistema de ratings',
      'Chat integrado',
      'Tracking de pedidos',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Redes Sociales',
    description: 'Apps de comunidad, networking y contenido social.',
    features: [
      'Perfiles de usuario',
      'Feed de contenido',
      'Chat y mensajería',
      'Compartir multimedia',
      'Sistema de notificaciones',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

const technologies = [
  {
    name: 'React Native',
    description: 'Apps multiplataforma con código compartido',
    logo: '⚛️',
    pros: ['Un código para iOS y Android', 'Rápido desarrollo', 'Gran comunidad'],
  },
  {
    name: 'Flutter',
    description: 'Framework de Google para apps hermosas',
    logo: '🎯',
    pros: ['UI nativa hermosa', 'Alto rendimiento', 'Hot reload'],
  },
  {
    name: 'Swift (iOS)',
    description: 'Apps nativas para iPhone y iPad',
    logo: '🍎',
    pros: ['Rendimiento óptimo', 'Acceso completo iOS', 'App Store'],
  },
  {
    name: 'Kotlin (Android)',
    description: 'Apps nativas para Android',
    logo: '🤖',
    pros: ['Performance nativa', 'Todas las APIs Android', 'Play Store'],
  },
];

const features = [
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Mantén a tus usuarios comprometidos con notificaciones personalizadas.',
  },
  {
    icon: MapPin,
    title: 'Geolocalización',
    description: 'GPS, mapas y servicios basados en ubicación.',
  },
  {
    icon: Camera,
    title: 'Cámara & Multimedia',
    description: 'Captura fotos, videos y procesamiento de imágenes.',
  },
  {
    icon: CreditCard,
    title: 'Pagos In-App',
    description: 'Integración con Stripe, PayPal, PSE y más.',
  },
  {
    icon: Share2,
    title: 'Compartir Social',
    description: 'Integración con redes sociales y compartir contenido.',
  },
  {
    icon: Code2,
    title: 'APIs Personalizadas',
    description: 'Backend robusto y escalable para tu app.',
  },
];

const packages = [
  {
    name: 'App Básica',
    price: '$3.500.000',
    description: 'App simple con funcionalidades core',
    features: [
      'Diseño UI/UX básico',
      '3-5 pantallas',
      'Backend simple',
      'Login de usuarios',
      '1 plataforma (iOS o Android)',
      '2 revisiones',
      '1 mes de soporte',
    ],
    deliveryTime: '4-6 semanas',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'App Profesional',
    price: '$7.000.000',
    description: 'App completa con funcionalidades avanzadas',
    features: [
      'Diseño UI/UX profesional',
      '8-12 pantallas',
      'Backend robusto con API',
      'Autenticación completa',
      'Push notifications',
      'Multiplataforma (iOS + Android)',
      'Publicación en tiendas',
      '3 meses de soporte',
    ],
    deliveryTime: '8-12 semanas',
    popular: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'App Enterprise',
    price: 'Personalizado',
    description: 'Solución completa para empresas',
    features: [
      'Diseño UI/UX premium',
      'Pantallas ilimitadas',
      'Arquitectura enterprise',
      'Integraciones complejas',
      'Analytics avanzado',
      'Panel de administración web',
      'Seguridad enterprise',
      'Soporte dedicado 6 meses',
    ],
    deliveryTime: '12-20 semanas',
    color: 'from-orange-500 to-red-500',
  },
];

const process = [
  { step: '1', title: 'Descubrimiento', description: 'Definimos objetivos, funcionalidades y alcance del proyecto.' },
  { step: '2', title: 'Diseño UX/UI', description: 'Creamos wireframes y diseños visuales de la app.' },
  { step: '3', title: 'Desarrollo', description: 'Programamos frontend, backend y integraciones.' },
  { step: '4', title: 'Testing', description: 'Pruebas exhaustivas en múltiples dispositivos.' },
  { step: '5', title: 'Lanzamiento', description: 'Publicación en App Store y Google Play.' },
  { step: '6', title: 'Soporte', description: 'Actualizaciones, mantenimiento y mejoras continuas.' },
];

export default function AppsMovilesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Smartphone className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">Desarrollo de Apps Móviles</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Apps móviles que</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  enamoran
                </span>
                <br />
                <span className="text-white">a tus usuarios</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Desarrollo de aplicaciones móviles en <strong className="text-white">Bogotá</strong>. 
                Apps nativas para iOS, Android y multiplataforma con React Native y Flutter.
              </p>

              {/* Platform badges */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Apple className="w-5 h-5 text-white" />
                  <span className="text-sm text-gray-300">iOS</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Chrome className="w-5 h-5 text-white" />
                  <span className="text-sm text-gray-300">Android</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Code2 className="w-5 h-5 text-white" />
                  <span className="text-sm text-gray-300">Multiplataforma</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/573026742059?text=Hola,%20quiero%20desarrollar%20una%20app%20móvil"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  <Smartphone className="w-5 h-5" />
                  Cotizar mi app
                </Link>
                <Link
                  href="#tipos-apps"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  Ver ejemplos
                </Link>
              </div>
            </div>

            {/* Right - Phone mockup */}
            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px] rounded-[3rem] border-8 border-slate-800 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden shadow-2xl">
                {/* Phone screen content */}
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <Bell className="w-6 h-6 text-white/40" />
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                        <div className="h-3 bg-white/30 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Por qué desarrollar una app móvil?
            </h2>
            <p className="text-gray-400">
              El futuro es móvil, y tus usuarios lo saben
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-purple-400 mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section id="tipos-apps" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Tipos de Apps</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Qué tipo de app necesitas?
            </h2>
            <p className="text-gray-400 text-lg">
              Desarrollamos apps para cada necesidad de negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <div
                  key={i}
                  className="group p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-400 mb-6">{type.description}</p>
                  
                  <ul className="space-y-3">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
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

      {/* Technologies Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tecnologías que usamos
            </h2>
            <p className="text-gray-400">
              Elegimos la mejor tecnología para tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-slate-900/50 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{tech.logo}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.pros.map((pro, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Funcionalidades que desarrollamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
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
              Planes de Desarrollo
            </h2>
            <p className="text-gray-400 text-lg">
              Desde MVPs hasta apps enterprise completas
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
                  <Smartphone className="w-6 h-6 text-white" />
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

                <div className="mb-6 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-xs text-gray-400">⏱️ Tiempo: {pkg.deliveryTime}</p>
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
                  href={`https://wa.me/573026742059?text=Hola,%20quiero%20cotizar%20${pkg.name}`}
                  target="_blank"
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? `bg-gradient-to-r ${pkg.color} text-white hover:scale-105`
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {pkg.price === 'Personalizado' ? 'Contactar' : 'Cotizar ahora'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Proceso de desarrollo
            </h2>
            <p className="text-gray-400">
              De la idea a la App Store en 6 pasos
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-grow p-6 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        title="¿Listo para crear tu app móvil?"
        description="Agenda una consultoría gratuita y convierte tu idea en una aplicación exitosa."
        primaryText="Cotizar mi app"
      />
    </div>
  );
}