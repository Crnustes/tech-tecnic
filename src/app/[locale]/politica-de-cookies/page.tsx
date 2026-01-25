import type { Metadata } from 'next'
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo'

const pageCopy = {
  es: {
    metaTitle: 'Politica de Cookies | Tech Tecnic',
    metaDescription: 'Informacion sobre el uso de cookies y tecnologias similares en Tech Tecnic.',
    title: 'Politica de Cookies',
    updatedLabel: 'Ultima actualizacion',
    updatedValue: '14 de enero de 2026',
    intro:
      'Utilizamos cookies y tecnologias similares para mejorar el funcionamiento del sitio, analizar el trafico y personalizar contenidos. Algunas cookies son necesarias para operar el sitio y no requieren consentimiento.',
    whatTitle: 'Que son las cookies?',
    whatText:
      'Son pequenos archivos que se almacenan en tu dispositivo al navegar. Permiten recordar preferencias, entender el uso del sitio y ofrecer funcionalidades.',
    typesTitle: 'Tipos de cookies que usamos',
    types: [
      { label: 'Esenciales', text: 'necesarias para el funcionamiento del sitio.' },
      { label: 'De rendimiento/analitica', text: 'nos ayudan a medir visitas y uso (p. ej., analytics).' },
      { label: 'De funcionalidad', text: 'recuerdan preferencias como idioma o region.' },
      { label: 'De marketing', text: 'permiten mostrar contenidos o campanas mas relevantes.' },
    ],
    consentTitle: 'Gestion y revocacion del consentimiento',
    consentText:
      'Puedes gestionar y eliminar cookies desde la configuracion de tu navegador. Tambien puedes desactivar categorias no esenciales si ofrecemos un gestor de consentimiento (banner). Ten en cuenta que bloquear cookies esenciales puede afectar el funcionamiento del sitio.',
    thirdTitle: 'Cookies de terceros',
    thirdText:
      'Podemos utilizar servicios de terceros (p. ej., herramientas de analitica, mapas, videos). Estos proveedores pueden establecer sus propias cookies; te recomendamos consultar sus politicas.',
    contactTitle: 'Contacto',
    contactText: 'Si tienes dudas, escribenos a contacto@techtecnic.com.',
  },
  en: {
    metaTitle: 'Cookies Policy | Tech Tecnic',
    metaDescription: 'Information about the use of cookies and similar technologies at Tech Tecnic.',
    title: 'Cookies Policy',
    updatedLabel: 'Last updated',
    updatedValue: 'January 14, 2026',
    intro:
      'We use cookies and similar technologies to improve site functionality, analyze traffic, and personalize content. Some cookies are necessary to operate the site and do not require consent.',
    whatTitle: 'What are cookies?',
    whatText:
      'They are small files stored on your device when you browse. They help remember preferences, understand site usage, and provide functionality.',
    typesTitle: 'Types of cookies we use',
    types: [
      { label: 'Essential', text: 'required for the site to function.' },
      { label: 'Performance/analytics', text: 'help us measure visits and usage (e.g., analytics).' },
      { label: 'Functional', text: 'remember preferences like language or region.' },
      { label: 'Marketing', text: 'allow us to show more relevant content or campaigns.' },
    ],
    consentTitle: 'Consent management and revocation',
    consentText:
      'You can manage and delete cookies from your browser settings. You can also disable non-essential categories if we provide a consent manager (banner). Blocking essential cookies may affect site functionality.',
    thirdTitle: 'Third-party cookies',
    thirdText:
      'We may use third-party services (e.g., analytics tools, maps, videos). These providers may set their own cookies; we recommend reviewing their policies.',
    contactTitle: 'Contact',
    contactText: 'If you have questions, email contacto@techtecnic.com.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = pageCopy[locale]
  const path = '/politica-de-cookies'
  const canonicalUrl = buildLocalizedUrl(path, locale)

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
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

export default async function PoliticaCookiesPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>
}) {
  const { locale } = await params
  const copy = pageCopy[locale]

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">{copy.title}</h1>
      <p className="text-sm text-gray-400 mb-8">
        {copy.updatedLabel}: {copy.updatedValue}
      </p>

      <div className="prose prose-invert prose-neutral max-w-none">
        <p>{copy.intro}</p>

        <h2>{copy.whatTitle}</h2>
        <p>{copy.whatText}</p>

        <h2>{copy.typesTitle}</h2>
        <ul>
          {copy.types.map(item => (
            <li key={item.label}>
              <strong>{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>

        <h2>{copy.consentTitle}</h2>
        <p>{copy.consentText}</p>

        <h2>{copy.thirdTitle}</h2>
        <p>{copy.thirdText}</p>

        <h2>{copy.contactTitle}</h2>
        <p>{copy.contactText}</p>
      </div>
    </section>
  )
}
