export const features = {
  services: {
    // Toggle individual services via env vars (default true)
    desarrolloWeb: process.env.NEXT_PUBLIC_ENABLE_DESARROLLO_WEB !== 'false',
    seoGeo: process.env.NEXT_PUBLIC_ENABLE_SEO_GEO !== 'false',
    automatizacionIa: process.env.NEXT_PUBLIC_ENABLE_AUTOMATIZACION_IA !== 'false',
    integraciones: process.env.NEXT_PUBLIC_ENABLE_INTEGRACIONES !== 'false',
    mantenimiento: process.env.NEXT_PUBLIC_ENABLE_MANTENIMIENTO !== 'false',
    appsMoviles: process.env.NEXT_PUBLIC_ENABLE_APPS_MOVILES !== 'false',
    chatbotWpIa: process.env.NEXT_PUBLIC_ENABLE_CHATBOT_WP_IA !== 'false',
  },
  modules: {
    dashboard: process.env.NEXT_PUBLIC_ENABLE_DASHBOARD === 'true',
    pricing: process.env.NEXT_PUBLIC_ENABLE_PRICING !== 'false',
    trial: process.env.NEXT_PUBLIC_ENABLE_TRIAL !== 'false',
  },
} as const;

export type ServiceKey = keyof typeof features.services;

export const isEnabled = (key: ServiceKey) => features.services[key];