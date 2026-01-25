import type { Metadata } from 'next'
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo'

const pageCopy = {
  es: {
    metaTitle: 'Blog | Tech Tecnic - Tendencias en IA, SEO y Desarrollo Web',
    metaDescription:
      'Articulos sobre inteligencia artificial, automatizacion, SEO local y desarrollo web moderno. Estrategias y casos reales para empresas en Colombia.',
    metaKeywords: [
      'blog tecnologia',
      'IA y automatizacion',
      'SEO local',
      'desarrollo web',
      'marketing digital',
    ],
  },
  en: {
    metaTitle: 'Blog | Tech Tecnic - AI, SEO, and Web Development Trends',
    metaDescription:
      'Articles about AI, automation, local SEO, and modern web development. Strategies for Colombia, Latam, and the USA.',
    metaKeywords: [
      'technology blog',
      'ai automation',
      'local seo',
      'web development',
      'latin america marketing',
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = pageCopy[locale]
  const path = '/blog'
  const canonicalUrl = buildLocalizedUrl(path, locale)

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
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
