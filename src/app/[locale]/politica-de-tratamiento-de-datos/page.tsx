import type { Metadata } from 'next'
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo'

const pageCopy = {
  es: {
    metaTitle: 'Politica de Tratamiento de Datos | Tech Tecnic',
    metaDescription: 'Tratamiento de datos personales segun la Ley 1581 de 2012 y Decreto 1377 de 2013 (Colombia).',
    title: 'Politica de Tratamiento de Datos',
    updatedLabel: 'Ultima actualizacion',
    updatedValue: '14 de enero de 2026',
    intro:
      'Tech Tecnic realiza el tratamiento de datos personales conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013. Esta politica establece las finalidades, derechos de los titulares y procedimientos para consultas y reclamos.',
    purposesTitle: 'Finalidades',
    purposesItems: [
      'Gestion de clientes y potenciales clientes.',
      'Prestacion de servicios contratados y soporte.',
      'Gestion administrativa, contable y fiscal.',
      'Comunicaciones informativas y comerciales con autorizacion.',
    ],
    rightsTitle: 'Derechos de los Titulares',
    rightsItems: [
      'Conocer, actualizar y rectificar los datos.',
      'Solicitar prueba de la autorizacion otorgada.',
      'Ser informado del uso de los datos.',
      'Presentar reclamos ante la SIC cuando corresponda.',
      'Revocar la autorizacion y/o solicitar la supresion de los datos, cuando proceda.',
      'Acceder de forma gratuita a los datos que hayan sido objeto de tratamiento.',
    ],
    proceduresTitle: 'Procedimientos de Consultas y Reclamos',
    proceduresText:
      'Envia tu solicitud a contacto@techtecnic.com indicando tu nombre completo, tipo de solicitud (consulta o reclamo), descripcion y evidencia (si aplica). Daremos respuesta dentro de los terminos legales.',
    processorsTitle: 'Encargados y Transferencias',
    processorsText:
      'Podremos usar proveedores como encargados del tratamiento y realizar transferencias internacionales bajo medidas de seguridad y contratos adecuados.',
    validityTitle: 'Vigencia',
    validityText:
      'Esta politica entra en vigencia a partir de su publicacion y podra actualizarse. La version vigente estara disponible en este sitio.',
  },
  en: {
    metaTitle: 'Data Processing Policy | Tech Tecnic',
    metaDescription: 'Personal data processing under Colombia Law 1581 of 2012 and Decree 1377 of 2013.',
    title: 'Data Processing Policy',
    updatedLabel: 'Last updated',
    updatedValue: 'January 14, 2026',
    intro:
      'Tech Tecnic processes personal data in accordance with Law 1581 of 2012 and Decree 1377 of 2013. This policy sets out the purposes, data subject rights, and procedures for inquiries and claims.',
    purposesTitle: 'Purposes',
    purposesItems: [
      'Management of clients and prospects.',
      'Provision of contracted services and support.',
      'Administrative, accounting, and tax management.',
      'Informational and commercial communications with authorization.',
    ],
    rightsTitle: 'Data Subject Rights',
    rightsItems: [
      'Know, update, and rectify data.',
      'Request proof of authorization granted.',
      'Be informed about data use.',
      'Submit claims to the SIC when applicable.',
      'Revoke authorization and/or request deletion of data when appropriate.',
      'Access data free of charge when it has been processed.',
    ],
    proceduresTitle: 'Inquiry and Claims Procedures',
    proceduresText:
      'Send your request to contacto@techtecnic.com indicating your full name, request type (inquiry or claim), description, and evidence (if applicable). We will respond within legal timeframes.',
    processorsTitle: 'Processors and Transfers',
    processorsText:
      'We may use providers as processors and make international transfers under appropriate security measures and contracts.',
    validityTitle: 'Validity',
    validityText:
      'This policy is effective from its publication and may be updated. The current version will be available on this site.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = pageCopy[locale]
  const path = '/politica-de-tratamiento-de-datos'
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

export default async function PoliticaTratamientoDatosPage({
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

        <h2>{copy.purposesTitle}</h2>
        <ul>
          {copy.purposesItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{copy.rightsTitle}</h2>
        <ul>
          {copy.rightsItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{copy.proceduresTitle}</h2>
        <p>{copy.proceduresText}</p>

        <h2>{copy.processorsTitle}</h2>
        <p>{copy.processorsText}</p>

        <h2>{copy.validityTitle}</h2>
        <p>{copy.validityText}</p>
      </div>
    </section>
  )
}
