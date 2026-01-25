import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // Lista de locales soportados
  locales,
  
  // Locale por defecto
  defaultLocale,
  
  // Detectar automáticamente el locale del navegador
  localeDetection: true,
  
  // Prefijo para las rutas (as-needed = solo mostrar prefijo para locales no predeterminados)
  localePrefix: 'as-needed',
});

export const config = {
  // Matcher para excluir archivos estáticos y API routes
  matcher: [
    // Incluir todas las rutas excepto:
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Incluir la raíz
    '/',
  ],
};
