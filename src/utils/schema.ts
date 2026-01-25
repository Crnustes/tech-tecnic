import { siteConfig } from '@/config/site';
import { socials } from '@/config/socials';
import { SITE_URL, type SupportedLocale } from '@/utils/seo';

const getLocaleDescription = (locale: SupportedLocale) =>
  locale === 'es'
    ? 'Agencia de desarrollo web, SEO y automatizacion con IA en Bogota, Colombia.'
    : 'Web development, SEO, and AI automation agency based in Bogota, Colombia.';

const getSameAs = () =>
  Object.values(socials).filter((value) => value.startsWith('http'));

export const getOrganizationSchema = (locale: SupportedLocale) => ({
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description: getLocaleDescription(locale),
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogota',
    addressRegion: 'Cundinamarca',
    addressCountry: 'CO',
  },
  areaServed: [
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Place', name: 'Latin America' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      availableLanguage: ['es', 'en'],
    },
  ],
  sameAs: getSameAs(),
});

export const getWebsiteSchema = (locale: SupportedLocale) => ({
  '@type': 'WebSite',
  name: siteConfig.name,
  url: SITE_URL,
  inLanguage: locale === 'es' ? 'es-CO' : 'en-US',
  description: getLocaleDescription(locale),
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: SITE_URL,
  },
});

export const getGlobalSchema = (locale: SupportedLocale) => ({
  '@context': 'https://schema.org',
  '@graph': [getOrganizationSchema(locale), getWebsiteSchema(locale)],
});

export const getServiceSchema = (
  locale: SupportedLocale,
  name: string,
  description: string,
  path: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${SITE_URL}${path}`,
  inLanguage: locale === 'es' ? 'es-CO' : 'en-US',
  serviceType: name,
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: SITE_URL,
  },
  areaServed: [
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Place', name: 'Latin America' },
  ],
});

export const getItemListSchema = (
  items: { name: string; url: string }[],
  locale: SupportedLocale
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  inLanguage: locale === 'es' ? 'es-CO' : 'en-US',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: item.url,
  })),
});

export const getFaqSchema = (
  items: { q: string; a: string }[],
  locale: SupportedLocale
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: locale === 'es' ? 'es-CO' : 'en-US',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
});

export const getBreadcrumbSchema = (
  items: { name: string; url: string }[],
  locale: SupportedLocale
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  inLanguage: locale === 'es' ? 'es-CO' : 'en-US',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
