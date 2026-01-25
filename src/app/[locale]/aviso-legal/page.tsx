import type { Metadata } from 'next'
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo'

const pageCopy = {
  es: {
    metaTitle: 'Aviso Legal | Tech Tecnic',
    metaDescription: 'Informacion legal y condiciones de uso del sitio web de Tech Tecnic.',
    title: 'Aviso Legal',
    updatedLabel: 'Ultima actualizacion',
    updatedValue: '14 de enero de 2026',
    sections: {
      ownerTitle: 'Titular del Sitio',
      ownerText:
        'Tech Tecnic - Bogota, Colombia. Contacto: contacto@techtecnic.com / +57 302 674 2059.',
      contentTitle: 'Propiedad del Contenido',
      contentText:
        'El diseno, logotipos, textos, imagenes y codigo del sitio pertenecen a Tech Tecnic o a sus titulares respectivos. Queda prohibida su reproduccion no autorizada.',
      useTitle: 'Uso del Sitio',
      useText:
        'El usuario se compromete a usar el sitio de manera licita y respetuosa, sin vulnerar derechos de terceros ni introducir software malicioso.',
      linksTitle: 'Enlaces de Terceros',
      linksText:
        'El sitio puede contener enlaces a paginas externas. Tech Tecnic no se responsabiliza por sus contenidos o politicas; te sugerimos revisar sus condiciones.',
      dataTitle: 'Proteccion de Datos',
      dataTextBefore: 'El tratamiento de datos se rige por la ',
      dataTextBetween: ' y la ',
      dataTextAfter: '.',
      dataPrivacyLabel: 'Politica de Privacidad',
      dataProcessingLabel: 'Politica de Tratamiento de Datos',
      liabilityTitle: 'Responsabilidad',
      liabilityText:
        'Tech Tecnic no garantiza la disponibilidad continua del sitio ni se responsabiliza por danos derivados del uso o imposibilidad de uso del mismo, salvo lo previsto por la ley.',
    },
  },
  en: {
    metaTitle: 'Legal Notice | Tech Tecnic',
    metaDescription: 'Legal information and terms of use for the Tech Tecnic website.',
    title: 'Legal Notice',
    updatedLabel: 'Last updated',
    updatedValue: 'January 14, 2026',
    sections: {
      ownerTitle: 'Site Owner',
      ownerText:
        'Tech Tecnic - Bogota, Colombia. Contact: contacto@techtecnic.com / +57 302 674 2059.',
      contentTitle: 'Content Ownership',
      contentText:
        'The design, logos, texts, images, and code on this site belong to Tech Tecnic or their respective owners. Unauthorized reproduction is prohibited.',
      useTitle: 'Website Use',
      useText:
        'Users agree to use the site lawfully and respectfully, without violating third-party rights or introducing malicious software.',
      linksTitle: 'Third-Party Links',
      linksText:
        'The site may contain links to external pages. Tech Tecnic is not responsible for their content or policies; please review their terms.',
      dataTitle: 'Data Protection',
      dataTextBefore: 'Data processing is governed by the ',
      dataTextBetween: ' and the ',
      dataTextAfter: '.',
      dataPrivacyLabel: 'Privacy Policy',
      dataProcessingLabel: 'Data Processing Policy',
      liabilityTitle: 'Liability',
      liabilityText:
        'Tech Tecnic does not guarantee continuous availability of the site and is not responsible for damages arising from use or inability to use it, except as required by law.',
    },
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = pageCopy[locale]
  const path = '/aviso-legal'
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

export default async function AvisoLegalPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>
}) {
  const { locale } = await params
  const copy = pageCopy[locale]
  const privacyUrl = buildLocalizedUrl('/politica-de-privacidad', locale)
  const processingUrl = buildLocalizedUrl('/politica-de-tratamiento-de-datos', locale)

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">{copy.title}</h1>
      <p className="text-sm text-gray-400 mb-8">
        {copy.updatedLabel}: {copy.updatedValue}
      </p>

      <div className="prose prose-invert prose-neutral max-w-none">
        <h2>{copy.sections.ownerTitle}</h2>
        <p>{copy.sections.ownerText}</p>

        <h2>{copy.sections.contentTitle}</h2>
        <p>{copy.sections.contentText}</p>

        <h2>{copy.sections.useTitle}</h2>
        <p>{copy.sections.useText}</p>

        <h2>{copy.sections.linksTitle}</h2>
        <p>{copy.sections.linksText}</p>

        <h2>{copy.sections.dataTitle}</h2>
        <p>
          {copy.sections.dataTextBefore}
          <a href={privacyUrl}>{copy.sections.dataPrivacyLabel}</a>
          {copy.sections.dataTextBetween}
          <a href={processingUrl}>{copy.sections.dataProcessingLabel}</a>
          {copy.sections.dataTextAfter}
        </p>

        <h2>{copy.sections.liabilityTitle}</h2>
        <p>{copy.sections.liabilityText}</p>
      </div>
    </section>
  )
}
