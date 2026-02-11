'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Languages } from 'lucide-react';
import { locales, type Locale } from '@/i18n';

const pageCopy = {
  es: {
    aria: 'Cambiar idioma',
    spanish: 'Espanol',
    english: 'English',
  },
  en: {
    aria: 'Change language',
    spanish: 'Spanish',
    english: 'English',
  },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const copy = pageCopy[locale as 'es' | 'en'] ?? pageCopy.es;

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === locale) return;

    const alternate = document.querySelector<HTMLLinkElement>(
      `link[rel="alternate"][hreflang="${newLocale}"]`
    );
    if (alternate?.href) {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      window.location.href = alternate.href;
      return;
    }

    const localePattern = new RegExp(`^/(${locales.join('|')})(/|$)`);
    const pathWithoutLocale = pathname.replace(localePattern, '/') || '/';
    const newPath = newLocale === 'es'
      ? pathWithoutLocale
      : pathWithoutLocale === '/'
        ? '/en'
        : `/en${pathWithoutLocale}`;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.href = newPath;
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 group">
      <button
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-slate-800 to-slate-900 border border-white/20 text-white hover:border-t_primary/50 hover:shadow-lg hover:shadow-t_primary/30 transition-all backdrop-blur-sm"
        aria-label={copy.aria}
      >
        <Languages className="w-5 h-5" />
        <span className="text-sm font-semibold uppercase">{locale}</span>
      </button>

      <div className="absolute bottom-full right-0 mb-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLanguage(loc)}
              className={`w-full px-4 py-3 text-left text-sm transition-colors flex items-center gap-3 ${
                locale === loc
                  ? 'bg-t_primary/20 text-t_primary font-semibold'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-sm font-semibold">{loc.toUpperCase()}</span>
              <span>{loc === 'es' ? copy.spanish : copy.english}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
