'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales, type Locale, defaultLocale } from '@/i18n';

export default function LocaleDetector() {
  const currentLocale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedLocale = localStorage.getItem('preferred-locale');
    if (savedLocale) return;

    const browserLang = navigator.language.split('-')[0];
    const detectedLocale = locales.includes(browserLang as Locale)
      ? (browserLang as Locale)
      : defaultLocale;

    if (detectedLocale !== currentLocale) {
      localStorage.setItem('preferred-locale', detectedLocale);

      const localePattern = new RegExp(`^/(${locales.join('|')})(/|$)`);
      const pathWithoutLocale = pathname.replace(localePattern, '/') || '/';
      const newPath = detectedLocale === defaultLocale
        ? pathWithoutLocale
        : pathWithoutLocale === '/'
          ? `/${detectedLocale}`
          : `/${detectedLocale}${pathWithoutLocale}`;

      if (newPath !== pathname) {
        window.location.href = newPath;
      }
    } else {
      localStorage.setItem('preferred-locale', currentLocale);
    }
  }, []);

  return null;
}
