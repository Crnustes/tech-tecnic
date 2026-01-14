import { Code, Search, Bot, Blocks, Shield, Smartphone, Sparkles, MessageSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { features } from './features';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: string; // tailwind gradient "from-... to-..."
  image?: string; // public path
  imageAlt?: string;
  slug: string; // servicios/[slug]
  price?: string;
  enabled?: boolean;
  showInMenu?: boolean;
}

export const servicesCatalog: ServiceItem[] = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    subtitle: 'Sitios modernos y escalables',
    description:
      'Diseño y desarrollo de sitios de alto rendimiento con WordPress, React y Next.js. Desde landing pages hasta e-commerce.',
    features: ['Diseño responsivo', 'E-commerce con WooCommerce', 'Hosting y dominio', 'Integraciones con CRM y APIs'],
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    image: '/images/desarrollo-web-profesional-bogota-latam.webp',
    imageAlt: 'Diseño de páginas web modernas en React y Next.js para empresas en Bogotá y Latinoamérica.',
    slug: 'desarrollo-web',
    price: 'Desde $400.000 COP',
    enabled: features.services.desarrolloWeb,
    showInMenu: true,
  },
  {
    id: 'seo-geo',
    title: 'SEO & Posicionamiento',
    subtitle: 'Visibilidad que convierte',
    description: 'SEO técnico y local para posicionarte en Google y aumentar tu tráfico orgánico.',
    features: ['SEO técnico/on-page', 'Google Tag Manager y GA4', 'SEO Local (GMB)', 'Core Web Vitals'],
    icon: Search,
    color: 'from-orange-500 to-red-500',
    image: '/images/agencia-seo-posicionamiento-bogota-latam.webp',
    imageAlt: 'Servicios de consultoría SEO y analítica de datos para escalar tráfico orgánico en mercados hispanos.',
    slug: 'seo-geo',
    price: 'Desde $500.000 COP/mes',
    enabled: features.services.seoGeo,
    showInMenu: true,
  },
  {
    id: 'automatizacion-ia',
    title: 'IA & Automatización',
    subtitle: 'Inteligencia que trabaja por ti',
    description: 'Flujos inteligentes con IA, chatbots y automatizaciones para optimizar tu operación.',
    features: ['Chatbots con IA', 'Captura automática de leads', 'Integración con CRMs', 'APIs e IA generativa'],
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    image: '/images/chatbot-inteligencia-artificial-espanol-bogota.webp',
    imageAlt: 'Implementación de chatbots con IA y procesamiento de lenguaje natural para empresas de servicios.',
    slug: 'automatizacion-ia',
    price: 'Desde $800.000 COP',
    enabled: features.services.automatizacionIa,
    showInMenu: true,
  },
  {
    id: 'integraciones',
    title: 'Integraciones',
    subtitle: 'Todo conectado',
    description: 'Zapier, Make y APIs personalizadas para flujos sin fricciones.',
    features: ['Zapier y Make', 'APIs personalizadas', 'Integración con CRMs', 'Sincronización de datos'],
    icon: Blocks,
    color: 'from-emerald-500 to-teal-500',
    image: '/images/automatizacion-procesos-api-latam-remoto.webp',
    imageAlt: 'Conexión de sistemas y automatización de flujos de trabajo entre CRMs y APIs personalizadas.',
    slug: 'integraciones',
    price: 'Desde $600.000 COP',
    enabled: features.services.integraciones,
    showInMenu: true,
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Web',
    subtitle: 'Tu sitio siempre actualizado',
    description: 'Seguridad, velocidad y estabilidad para tu sitio web.',
    features: ['Monitoreo 24/7', 'Actualizaciones de seguridad', 'Backups automáticos', 'Optimización continua'],
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    image: '/images/mantenimiento-web-seguridad-bogota-24-7.webp',
    imageAlt: 'Soporte técnico, seguridad WordPress y monitoreo de uptime garantizado para sitios empresariales.',
    slug: 'mantenimiento',
    price: 'Desde $150.000 COP/mes',
    enabled: features.services.mantenimiento,
    showInMenu: true,
  },
  {
    id: 'apps-moviles',
    title: 'Apps Móviles',
    subtitle: 'Experiencias móviles premium',
    description: 'Apps nativas (iOS/Android) y multiplataforma con React Native/Flutter.',
    features: ['Apps nativas', 'React Native/Flutter', 'Diseño UI/UX', 'Publicación en tiendas'],
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    image: '/images/desarrollo-apps-moviles-ios-android-latam.webp',
    imageAlt: 'Desarrollo de aplicaciones móviles híbridas y nativas con experiencia de usuario premium para Latam.',
    slug: 'apps-moviles',
    enabled: features.services.appsMoviles,
    showInMenu: true,
  },
  // New product: Chatbot WhatsApp con IA
  {
    id: 'chatbot-wp-ia',
    title: 'Chatbot WhatsApp con IA',
    subtitle: 'Automatización inteligente 24/7',
    description:
      'Bot de WhatsApp con inteligencia artificial que atiende clientes, captura leads y se integra con tu web, app o CRM. Entrenamiento personalizado con tus datos y escalable a producción.',
    features: [
      'Bot WhatsApp con IA generativa',
      'Integración web, apps y CRM',
      'Entrenamiento personalizado',
      'Captura y cualificación de leads',
    ],
    icon: MessageSquare,
    color: 'from-indigo-500 to-violet-500',
    image: '/images/chatbot-whatsapp-business-api-bogota-ventas.webp',
    imageAlt: 'Soluciones de WhatsApp Business API con IA para automatizar ventas y atención al cliente.',
    slug: 'chatbot-wp-ia',
    price: 'Desde $800.000 COP',
    enabled: features.services.chatbotWpIa,
    showInMenu: true,
  },
];

export const enabledServices = servicesCatalog.filter((s) => s.enabled !== false);