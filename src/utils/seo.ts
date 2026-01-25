export const SITE_URL = "https://techtecnic.com";
export const SUPPORTED_LOCALES = ["es", "en"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = "es";

const isSupportedLocale = (value: string): value is SupportedLocale =>
  SUPPORTED_LOCALES.includes(value as SupportedLocale);

const normalizePath = (path: string) => {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

export const buildLocalizedPath = (path: string, locale: SupportedLocale | string) => {
  const normalized = normalizePath(path);
  const safeLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  if (safeLocale === DEFAULT_LOCALE) return normalized;
  if (normalized === "/") return `/${safeLocale}`;
  return `/${safeLocale}${normalized}`;
};

export const buildLocalizedUrl = (path: string, locale: SupportedLocale | string) =>
  `${SITE_URL}${buildLocalizedPath(path, locale)}`;

export const buildAlternates = (path: string) => ({
  languages: {
    es: buildLocalizedUrl(path, "es"),
    en: buildLocalizedUrl(path, "en"),
    "x-default": buildLocalizedUrl(path, "es"),
  },
});
