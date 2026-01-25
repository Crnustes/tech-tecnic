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
  Share2,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import { convertCOPtoUSD } from '@/utils/pricing';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';

const pageCopy = {
  es: {
    metaTitle: 'Desarrollo de Apps Moviles en Bogota | iOS y Android | Tech Tecnic',
    metaDescription:
      'Desarrollo de aplicaciones moviles nativas y multiplataforma en Bogota. Apps para iOS, Android y React Native. Desde apps empresariales hasta e-commerce movil.',
    metaKeywords: [
      'desarrollo apps moviles bogota',
      'app ios android colombia',
      'react native bogota',
      'flutter colombia',
      'aplicaciones moviles',
      'desarrollo app nativa',
      'app empresarial',
      'apps ecommerce',
    ],
    badge: 'Desarrollo de Apps Moviles',
    heroTitleTop: 'Apps moviles que',
    heroTitleMid: 'enamoran',
    heroTitleBottom: 'a tus usuarios',
    heroText:
      'Desarrollo de aplicaciones moviles en Bogota. Apps nativas para iOS, Android y multiplataforma con React Native y Flutter.',
    ctaPrimary: 'Cotizar mi app',
    ctaSecondary: 'Ver ejemplos',
    statsTitle: 'Por que desarrollar una app movil?',
    statsSubtitle: 'El futuro es movil, y tus usuarios lo saben',
    stats: [
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
    ],
    typesBadge: 'Tipos de Apps',
    typesTitle: 'Que tipo de app necesitas?',
    typesSubtitle: 'Desarrollamos apps para cada necesidad de negocio',
    appTypes: [
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
    ],
    featuresTitle: 'Funcionalidades que desarrollamos',
    features: [
      { icon: Bell, title: 'Push Notifications', description: 'Mantener a tus usuarios comprometidos con notificaciones personalizadas.' },
      { icon: MapPin, title: 'Geolocalizacion', description: 'GPS, mapas y servicios basados en ubicacion.' },
      { icon: Camera, title: 'Camara y Multimedia', description: 'Captura fotos, videos y procesamiento de imagenes.' },
      { icon: CreditCard, title: 'Pagos In-App', description: 'Integracion con Stripe, PayPal, PSE y mas.' },
      { icon: Share2, title: 'Compartir Social', description: 'Integracion con redes sociales y compartir contenido.' },
      { icon: Code2, title: 'APIs Personalizadas', description: 'Backend robusto y escalable para tu app.' },
    ],
    pricingTitle: 'Planes de Desarrollo',
    pricingSubtitle: 'Desde MVPs hasta apps enterprise completas',
    popularLabel: 'Mas Popular',
    packages: [
      {
        name: 'App Basica',
        priceCOP: 3500000,
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
        priceCOP: 7000000,
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
        priceLabelEs: 'Personalizado',
        priceLabelEn: 'Custom',
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
    ],
    deliveryLabel: 'Tiempo',
    processTitle: 'Proceso de desarrollo',
    processSubtitle: 'De la idea a la App Store en 6 pasos',
    process: [
      { step: '1', title: 'Descubrimiento', description: 'Definimos objetivos, funcionalidades y alcance del proyecto.' },
      { step: '2', title: 'Diseno UX/UI', description: 'Creamos wireframes y disenos visuales de la app.' },
      { step: '3', title: 'Desarrollo', description: 'Programamos frontend, backend y integraciones.' },
      { step: '4', title: 'Testing', description: 'Pruebas exhaustivas en multiples dispositivos.' },
      { step: '5', title: 'Lanzamiento', description: 'Publicacion en App Store y Google Play.' },
      { step: '6', title: 'Soporte', description: 'Actualizaciones, mantenimiento y mejoras continuas.' },
    ],
    ctaTitle: 'Listo para crear tu app movil?',
    ctaDescription: 'Agenda una consultoria gratuita y convierte tu idea en una aplicacion exitosa.',
    ctaButton: 'Cotizar mi app',
  },
  en: {
    metaTitle: 'Mobile App Development in Bogota | iOS and Android | Tech Tecnic',
    metaDescription:
      'Native and cross-platform mobile app development in Bogota. Apps for iOS, Android, and React Native. From business apps to mobile e-commerce.',
    metaKeywords: [
      'mobile app development bogota',
      'ios android app colombia',
      'react native bogota',
      'flutter colombia',
      'mobile applications',
      'native app development',
      'business app',
      'ecommerce apps',
    ],
    badge: 'Mobile App Development',
    heroTitleTop: 'Mobile apps that',
    heroTitleMid: 'delight',
    heroTitleBottom: 'your users',
    heroText:
      'Mobile app development in Bogota. Native apps for iOS, Android, and cross-platform with React Native and Flutter.',
    ctaPrimary: 'Quote my app',
    ctaSecondary: 'View examples',
    statsTitle: 'Why build a mobile app?',
    statsSubtitle: 'The future is mobile, and your users know it',
    stats: [
      {
        value: '85%',
        label: 'of time spent in mobile apps',
        description: 'Users spend more time in apps than on the web',
        icon: Smartphone,
      },
      {
        value: '3.8B',
        label: 'smartphone users',
        description: 'The mobile market keeps growing globally',
        icon: Users,
      },
      {
        value: '2x',
        label: 'more conversions',
        description: 'Apps convert better than websites',
        icon: TrendingUp,
      },
      {
        value: '70%',
        label: 'improved retention',
        description: 'Users return more often to apps',
        icon: Zap,
      },
    ],
    typesBadge: 'App Types',
    typesTitle: 'What type of app do you need?',
    typesSubtitle: 'We build apps for every business need',
    appTypes: [
      {
        icon: Layers,
        title: 'Business Apps',
        description: 'Solutions for internal management, productivity, and remote teams.',
        features: [
          'Inventory management',
          'Mobile CRM',
          'Billing and reports',
          'Team communication',
          'Analytics dashboard',
        ],
        color: 'from-blue-500 to-cyan-500',
      },
      {
        icon: CreditCard,
        title: 'Mobile E-commerce',
        description: 'Mobile stores with payment gateways and premium experience.',
        features: [
          'Product catalog',
          'Payment gateways',
          'Shopping cart',
          'Push notifications',
          'Loyalty program',
        ],
        color: 'from-purple-500 to-pink-500',
      },
      {
        icon: MapPin,
        title: 'Service Apps',
        description: 'Apps for on-demand services, delivery, and logistics.',
        features: [
          'Real-time geolocation',
          'Booking and scheduling',
          'Ratings system',
          'In-app chat',
          'Order tracking',
        ],
        color: 'from-orange-500 to-red-500',
      },
      {
        icon: Users,
        title: 'Social Networks',
        description: 'Community, networking, and social content apps.',
        features: [
          'User profiles',
          'Content feed',
          'Chat and messaging',
          'Media sharing',
          'Notification system',
        ],
        color: 'from-green-500 to-emerald-500',
      },
    ],
    featuresTitle: 'Features we build',
    features: [
      { icon: Bell, title: 'Push Notifications', description: 'Keep users engaged with personalized notifications.' },
      { icon: MapPin, title: 'Geolocation', description: 'GPS, maps, and location-based services.' },
      { icon: Camera, title: 'Camera and Media', description: 'Capture photos, videos, and process images.' },
      { icon: CreditCard, title: 'In-app Payments', description: 'Integration with Stripe, PayPal, and more.' },
      { icon: Share2, title: 'Social Sharing', description: 'Social integrations and content sharing.' },
      { icon: Code2, title: 'Custom APIs', description: 'Scalable backend for your app.' },
    ],
    pricingTitle: 'Development Plans',
    pricingSubtitle: 'From MVPs to full enterprise apps',
    popularLabel: 'Most Popular',
    packages: [
      {
        name: 'Basic App',
        priceCOP: 3500000,
        description: 'Simple app with core functionality',
        features: [
          'Basic UI/UX design',
          '3-5 screens',
          'Simple backend',
          'User login',
          '1 platform (iOS or Android)',
          '2 revisions',
          '1 month support',
        ],
        deliveryTime: '4-6 weeks',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Professional App',
        priceCOP: 7000000,
        description: 'Complete app with advanced features',
        features: [
          'Professional UI/UX design',
          '8-12 screens',
          'Robust backend with API',
          'Full authentication',
          'Push notifications',
          'Cross-platform (iOS + Android)',
          'Store publishing',
          '3 months support',
        ],
        deliveryTime: '8-12 weeks',
        popular: true,
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'Enterprise App',
        priceLabelEs: 'Personalizado',
        priceLabelEn: 'Custom',
        description: 'Full solution for enterprises',
        features: [
          'Premium UI/UX design',
          'Unlimited screens',
          'Enterprise architecture',
          'Complex integrations',
          'Advanced analytics',
          'Web admin panel',
          'Enterprise security',
          'Dedicated support 6 months',
        ],
        deliveryTime: '12-20 weeks',
        color: 'from-orange-500 to-red-500',
      },
    ],
    deliveryLabel: 'Timeline',
    processTitle: 'Development process',
    processSubtitle: 'From idea to App Store in 6 steps',
    process: [
      { step: '1', title: 'Discovery', description: 'We define goals, features, and project scope.' },
      { step: '2', title: 'UX/UI Design', description: 'We build wireframes and visual app design.' },
      { step: '3', title: 'Development', description: 'We build frontend, backend, and integrations.' },
      { step: '4', title: 'Testing', description: 'Thorough testing across multiple devices.' },
      { step: '5', title: 'Launch', description: 'Publish to App Store and Google Play.' },
      { step: '6', title: 'Support', description: 'Updates, maintenance, and continuous improvements.' },
    ],
    ctaTitle: 'Ready to build your mobile app?',
    ctaDescription: 'Schedule a free consultation and turn your idea into a successful app.',
    ctaButton: 'Quote my app',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/apps-moviles';
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

export default async function AppsMovilesPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];

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
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Smartphone className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">{copy.badge}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">{copy.heroTitleTop}</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {copy.heroTitleMid}
                </span>
                <br />
                <span className="text-white">{copy.heroTitleBottom}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">{copy.heroText}</p>

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
                  <span className="text-sm text-gray-300">Cross-platform</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message={
                    locale === 'es'
                      ? 'Hola, quiero desarrollar una app movil para mi negocio'
                      : 'Hi, I want to build a mobile app for my business'
                  }
                  service="apps-moviles"
                  action="click_cta_hero"
                  label="Apps Moviles"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  {copy.ctaPrimary}
                </WhatsAppButton>
                <Link
                  href="#tipos-apps"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px] rounded-[3rem] border-8 border-slate-800 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden shadow-2xl">
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

      <section className="relative py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.statsTitle}</h2>
            <p className="text-gray-400">{copy.statsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
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

      <section id="tipos-apps" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">{copy.typesBadge}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{copy.typesTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.typesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {copy.appTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="group p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-400 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
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

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.featuresTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
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

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{copy.pricingTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.pricingSubtitle}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {copy.packages.map((pkg) => {
              const isCustom = !pkg.priceCOP;
              const priceLabel = locale === 'es' ? pkg.priceLabelEs : pkg.priceLabelEn;
              const price = pkg.priceCOP ? formatPrice(pkg.priceCOP) : null;
              return (
                <div
                  key={pkg.name}
                  className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                    pkg.popular
                      ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20'
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
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {isCustom ? priceLabel : `$${price.formatted}`}
                    </span>
                    {!isCustom && <span className="text-gray-500 text-sm ml-2">{price.currency}</span>}
                  </div>
                  <div className="mb-6 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400">{copy.deliveryLabel}: {pkg.deliveryTime}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <PricingButton
                    planName={pkg.name}
                    service="apps-moviles"
                    message={
                      locale === 'es'
                        ? `Hola, quiero cotizar ${pkg.name} de Apps Moviles`
                        : `Hi, I want a quote for ${pkg.name} Mobile Apps`
                    }
                    color={pkg.popular ? pkg.color : ''}
                  >
                    {isCustom ? (locale === 'es' ? 'Contactar' : 'Contact us') : locale === 'es' ? 'Cotizar ahora' : 'Get a quote'}
                  </PricingButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.processTitle}</h2>
            <p className="text-gray-400">{copy.processSubtitle}</p>
          </div>
          <div className="space-y-6">
            {copy.process.map((item) => (
              <div key={item.step} className="flex gap-6 items-start group">
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

      <ContactCTA title={copy.ctaTitle} description={copy.ctaDescription} primaryText={copy.ctaButton} />
    </div>
  );
}
