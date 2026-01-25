export const SITE_URL = "https://techtecnic.com";
export const SUPPORTED_LOCALES = ["es", "en"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = "es";

const normalizePath = (path: string) => {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

export const buildLocalizedPath = (path: string, locale: SupportedLocale) => {
  const normalized = normalizePath(path);
  if (locale === DEFAULT_LOCALE) return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
};

export const buildLocalizedUrl = (path: string, locale: SupportedLocale) =>
  `${SITE_URL}${buildLocalizedPath(path, locale)}`;

export const buildAlternates = (path: string) => ({
  languages: {
    es: buildLocalizedUrl(path, "es"),
    en: buildLocalizedUrl(path, "en"),
  },
});
