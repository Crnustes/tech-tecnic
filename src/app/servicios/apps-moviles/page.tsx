import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';
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
  title: 'Desarrollo de Apps Moviles en Bogota | iOS y Android | Tech Tecnic',
  description: 'Desarrollo de aplicaciones moviles nativas y multiplataforma en Bogota. Apps para iOS, Android y React Native. Desde apps empresariales hasta e-commerce movil.',
  keywords: [
    'desarrollo apps moviles bogota',
    'app ios android colombia',
    'react native bogota',
    'flutter colombia',
    'aplicaciones moviles',
    'desarrollo app nativa',
    'app empresarial',
    'apps ecommerce'
  ],
  openGraph: {
    title: 'Desarrollo de Apps Moviles en Bogota | Tech Tecnic',
    description: 'Creamos aplicaciones moviles que tus usuarios aman. iOS, Android y multiplataforma.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios/apps-moviles',
  },
};

const stats = [
  {
    value: '85%',
    label: 'del tiempo en apps moviles',
    description: 'Los usuarios pasan mas tiempo en apps que en web',
    icon: Smartphone,
  },
  {
    value: '3.8B',
    label: 'usuarios de smartphones',
    description: 'El mercado movil sigue creciendo globalmente',
    icon: Users,
  },
  {
    value: '2x',
    label: 'mas conversiones',
    description: 'Las apps convierten mejor que sitios web',
    icon: TrendingUp,
  },
  {
    value: '70%',
    label: 'retencion mejorada',
    description: 'Los usuarios regresan mas a las apps',
    icon: Zap,
  },
];

const appTypes = [
  {
    icon: Layers,
    title: 'Apps Empresariales',
    description: 'Soluciones para gestion interna, productividad y equipos remotos.',
    features: [
      'Gestion de inventario',
      'CRM movil',
      'Facturacion y reportes',
      'Comunicacion de equipos',
      'Dashboard analytics',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    title: 'E-commerce Movil',
    description: 'Tiendas moviles con pasarelas de pago y experiencia premium.',
    features: [
      'Catalogo de productos',
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
    description: 'Aplicaciones para servicios a domicilio, delivery y logistica.',
    features: [
      'Geolocalizacion en tiempo real',
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
      'Chat y mensajeria',
      'Compartir multimedia',
      'Sistema de notificaciones',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

const technologies = [
  {
    name: 'React Native',
    description: 'Apps multiplataforma con codigo compartido',
    logo: 'RN',
    pros: ['Un codigo para iOS y Android', 'Rapido desarrollo', 'Gran comunidad'],
  },
  {
    name: 'Flutter',
    description: 'Framework de Google para apps hermosas',
    logo: 'FL',
    pros: ['UI nativa hermosa', 'Alto rendimiento', 'Hot reload'],
  },
  {
    name: 'Swift (iOS)',
    description: 'Apps nativas para iPhone y iPad',
    logo: 'SW',
    pros: ['Rendimiento optimo', 'Acceso completo iOS', 'App Store'],
  },
  {
    name: 'Kotlin (Android)',
    description: 'Apps nativas para Android',
    logo: 'KT',
    pros: ['Performance nativa', 'Todas las APIs Android', 'Play Store'],
  },
];

const features = [
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Manten a tus usuarios comprometidos con notificaciones personalizadas.',
  },
  {
    icon: MapPin,
    title: 'Geolocalizacion',
    description: 'GPS, mapas y servicios basados en ubicacion.',
  },
  {
    icon: Camera,
    title: 'Camara y Multimedia',
    description: 'Captura fotos, videos y procesamiento de imagenes.',
  },
  {
    icon: CreditCard,
    title: 'Pagos In-App',
    description: 'Integracion con Stripe, PayPal, PSE y mas.',
  },
  {
    icon: Share2,
    title: 'Compartir Social',
    description: 'Integracion con redes sociales y compartir contenido.',
  },
  {
    icon: Code2,
    title: 'APIs Personalizadas',
    description: 'Backend robusto y escalable para tu app.',
  },
];

const packages = [
  {
    name: 'App Basica',
    price: '$3.500.000',
    description: 'App simple con funcionalidades core',
    features: [
      'Diseno UI/UX basico',
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
      'Diseno UI/UX profesional',
      '8-12 pantallas',
      'Backend robusto con API',
      'Autenticacion completa',
      'Push notifications',
      'Multiplataforma (iOS + Android)',
      'Publicacion en tiendas',
      '3 meses de soporte',
    ],
    deliveryTime: '8-12 semanas',
    popular: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'App Enterprise',
    price: 'Personalizado',
    description: 'Solucion completa para empresas',
    features: [
      'Diseno UI/UX premium',
      'Pantallas ilimitadas',
      'Arquitectura enterprise',
      'Integraciones complejas',
      'Analytics avanzado',
      'Panel de administracion web',
      'Seguridad enterprise',
      'Soporte dedicado 6 meses',
    ],
    deliveryTime: '12-20 semanas',
    color: 'from-orange-500 to-red-500',
  },
];

const process = [
  { step: '1', title: 'Descubrimiento', description: 'Definimos objetivos, funcionalidades y alcance del proyecto.' },
  { step: '2', title: 'Diseno UX/UI', description: 'Creamos wireframes y disenos visuales de la app.' },
  { step: '3', title: 'Desarrollo', description: 'Programamos frontend, backend y integraciones.' },
  { step: '4', title: 'Testing', description: 'Pruebas exhaustivas en multiples dispositivos.' },
  { step: '5', title: 'Lanzamiento', description: 'Publicacion en App Store y Google Play.' },
  { step: '6', title: 'Soporte', description: 'Actualizaciones, mantenimiento y mejoras continuas.' },
];

export default function AppsMovilesPage() {
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
                <Smartphone className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">Desarrollo de Apps Moviles</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Apps moviles que</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  enamoran
                </span>
                <br />
                <span className="text-white">a tus usuarios</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Desarrollo de aplicaciones moviles en <strong className="text-white">Bogota</strong>.
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
                <WhatsAppButton
                  message="Hola, quiero desarrollar una app movil para mi negocio"
                  service="apps-moviles"
                  action="click_cta_hero"
                  label="Apps Moviles"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  Cotizar mi app
                </WhatsAppButton>
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
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
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
              Por que desarrollar una app movil?
            </h2>
            <p className="text-gray-400">
              El futuro es movil, y tus usuarios lo saben
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
              Que tipo de app necesitas?
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
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
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
              Tecnologias que usamos
            </h2>
            <p className="text-gray-400">
              Elegimos la mejor tecnologia para tu proyecto
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
                      Mas Popular
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
                  <p className="text-xs text-gray-400">Tiempo: {pkg.deliveryTime}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <PricingButton
                  planName={pkg.name}
                  service="apps-moviles"
                  message={`Hola, quiero cotizar ${pkg.name} de Apps Moviles`}
                  color={pkg.popular ? pkg.color : ''}
                >
                  {pkg.price === 'Personalizado' ? 'Contactar' : 'Cotizar ahora'}
                </PricingButton>
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
        title="Listo para crear tu app movil?"
        description="Agenda una consultoria gratuita y convierte tu idea en una aplicacion exitosa."
        primaryText="Cotizar mi app"
      />
    </div>
  );
}
