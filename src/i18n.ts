import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Idiomas soportados
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

// Idioma por defecto
export const defaultLocale: Locale = 'es';

// Configuración de next-intl
export default getRequestConfig(async ({ requestLocale }) => {
  // Esperar al locale del request
  let locale = await requestLocale;
  
  // Si no hay locale en el request, usar el default
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }
  
  // Importar mensajes
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
