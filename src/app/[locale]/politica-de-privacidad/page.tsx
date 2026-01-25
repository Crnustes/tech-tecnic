import type { Metadata } from 'next'
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo'

const pageCopy = {
  es: {
    metaTitle: 'Politica de Privacidad | Tech Tecnic',
    metaDescription:
      'Conoce como Tech Tecnic trata tus datos personales conforme a la Ley 1581 de 2012 (Colombia) y buenas practicas internacionales.',
    title: 'Politica de Privacidad',
    updatedLabel: 'Ultima actualizacion',
    updatedValue: '14 de enero de 2026',
    intro:
      'En Tech Tecnic respetamos y protegemos la privacidad de nuestros usuarios y clientes. Esta Politica de Privacidad describe como recopilamos, usamos, compartimos y protegemos tus datos personales, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia), asi como buenas practicas internacionales (incluyendo principios del RGPD de la Union Europea).',
    sections: {
      controllerTitle: 'Responsable del Tratamiento',
      controllerText:
        'Tech Tecnic, Bogota - Colombia. Correo de contacto: contacto@techtecnic.com. Telefono: +57 302 674 2059.',
      dataTitle: 'Datos que Recopilamos',
      dataItems: [
        'Identificacion y contacto: nombre, correo electronico, telefono.',
        'Informacion comercial: empresa, cargo, necesidades del proyecto.',
        'Datos tecnicos: direccion IP, dispositivo, navegador, paginas visitadas, cookies.',
        'Comunicacion: mensajes enviados por formularios, WhatsApp u otros canales.',
      ],
      purposesTitle: 'Finalidades del Tratamiento',
      purposesItems: [
        'Responder solicitudes, cotizaciones y prestar servicios contratados.',
        'Gestion comercial, facturacion y soporte.',
        'Mejora continua del sitio, seguridad y experiencia de usuario.',
        'Envio de comunicaciones informativas (newsletter) cuando exista consentimiento.',
      ],
      legalTitle: 'Base Legal',
      legalText:
        'Tratamos datos con base en la autorizacion del titular, la ejecucion de contratos, el cumplimiento de obligaciones legales y el interes legitimo en mejorar nuestros servicios.',
      rightsTitle: 'Derechos del Titular',
      rightsText:
        'De acuerdo con la legislacion colombiana, puedes ejercer tus derechos a conocer, actualizar, rectificar, solicitar prueba de autorizacion, ser informado sobre el uso, revocar la autorizacion y solicitar la supresion de tus datos. Para ejercerlos, escribe a contacto@techtecnic.com indicando tu solicitud y datos de verificacion.',
      transfersTitle: 'Transferencias y Encargados',
      transfersText:
        'Podemos usar proveedores (encargados) y servicios en la nube ubicados dentro o fuera de Colombia. Adoptamos medidas contractuales y de seguridad para proteger tus datos conforme a la ley aplicable.',
      retentionTitle: 'Conservacion',
      retentionText:
        'Conservamos los datos por el tiempo necesario para cumplir las finalidades indicadas y requerimientos legales. Posteriormente, los eliminamos o anonimizamos de forma segura.',
      securityTitle: 'Seguridad',
      securityText:
        'Implementamos medidas administrativas, tecnicas y fisicas razonables para proteger la informacion contra accesos no autorizados, perdida o alteracion. Sin embargo, ninguna medida es infalible; te recomendamos adoptar practicas seguras al navegar.',
      cookiesTitle: 'Cookies y Tecnologias Similares',
      cookiesTextBefore: 'Utilizamos cookies para funcionalidad, analitica y marketing. Consulta la ',
      cookiesLinkLabel: 'Politica de Cookies',
      cookiesTextAfter: ' para mas detalles y opciones de control.',
      updatesTitle: 'Actualizaciones',
      updatesText:
        'Podremos actualizar esta politica cuando sea necesario. Publicaremos la nueva version con su fecha de vigencia.',
    },
  },
  en: {
    metaTitle: 'Privacy Policy | Tech Tecnic',
    metaDescription:
      'Learn how Tech Tecnic handles your personal data in line with Colombia Law 1581 of 2012 and international best practices.',
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    updatedValue: 'January 14, 2026',
    intro:
      'At Tech Tecnic we respect and protect the privacy of our users and clients. This Privacy Policy explains how we collect, use, share, and protect your personal data, in compliance with Law 1581 of 2012 and Decree 1377 of 2013 (Colombia), as well as international best practices (including GDPR principles from the European Union).',
    sections: {
      controllerTitle: 'Data Controller',
      controllerText:
        'Tech Tecnic, Bogota - Colombia. Contact email: contacto@techtecnic.com. Phone: +57 302 674 2059.',
      dataTitle: 'Data We Collect',
      dataItems: [
        'Identification and contact: name, email, phone.',
        'Commercial information: company, role, project needs.',
        'Technical data: IP address, device, browser, pages visited, cookies.',
        'Communication: messages sent via forms, WhatsApp, or other channels.',
      ],
      purposesTitle: 'Processing Purposes',
      purposesItems: [
        'Respond to requests, quotes, and provide contracted services.',
        'Commercial management, invoicing, and support.',
        'Continuous improvement of the site, security, and user experience.',
        'Send informational communications (newsletter) when consent exists.',
      ],
      legalTitle: 'Legal Basis',
      legalText:
        'We process data based on user authorization, contract execution, legal obligations, and legitimate interest in improving our services.',
      rightsTitle: 'Data Subject Rights',
      rightsText:
        'Under Colombian law, you can exercise your rights to access, update, rectify, request proof of authorization, be informed about use, revoke authorization, and request deletion of your data. To exercise these rights, email contacto@techtecnic.com with your request and verification details.',
      transfersTitle: 'Transfers and Processors',
      transfersText:
        'We may use providers (processors) and cloud services located inside or outside Colombia. We adopt contractual and security measures to protect your data under applicable law.',
      retentionTitle: 'Retention',
      retentionText:
        'We keep data for as long as needed to fulfill the stated purposes and legal requirements. Afterwards, we delete or anonymize it securely.',
      securityTitle: 'Security',
      securityText:
        'We implement reasonable administrative, technical, and physical safeguards to protect information from unauthorized access, loss, or alteration. However, no measure is infallible; we recommend safe browsing practices.',
      cookiesTitle: 'Cookies and Similar Technologies',
      cookiesTextBefore: 'We use cookies for functionality, analytics, and marketing. See the ',
      cookiesLinkLabel: 'Cookies Policy',
      cookiesTextAfter: ' for more details and control options.',
      updatesTitle: 'Updates',
      updatesText:
        'We may update this policy as needed. We will publish the new version with its effective date.',
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
  const path = '/politica-de-privacidad'
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

export default async function PoliticaPrivacidadPage({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>
}) {
  const { locale } = await params
  const copy = pageCopy[locale]
  const cookiesUrl = buildLocalizedUrl('/politica-de-cookies', locale)

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">{copy.title}</h1>
      <p className="text-sm text-gray-400 mb-8">
        {copy.updatedLabel}: {copy.updatedValue}
      </p>

      <div className="prose prose-invert prose-neutral max-w-none">
        <p>{copy.intro}</p>

        <h2>{copy.sections.controllerTitle}</h2>
        <p>{copy.sections.controllerText}</p>

        <h2>{copy.sections.dataTitle}</h2>
        <ul>
          {copy.sections.dataItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{copy.sections.purposesTitle}</h2>
        <ul>
          {copy.sections.purposesItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{copy.sections.legalTitle}</h2>
        <p>{copy.sections.legalText}</p>

        <h2>{copy.sections.rightsTitle}</h2>
        <p>{copy.sections.rightsText}</p>

        <h2>{copy.sections.transfersTitle}</h2>
        <p>{copy.sections.transfersText}</p>

        <h2>{copy.sections.retentionTitle}</h2>
        <p>{copy.sections.retentionText}</p>

        <h2>{copy.sections.securityTitle}</h2>
        <p>{copy.sections.securityText}</p>

        <h2>{copy.sections.cookiesTitle}</h2>
        <p>
          {copy.sections.cookiesTextBefore}
          <a href={cookiesUrl}>{copy.sections.cookiesLinkLabel}</a>
          {copy.sections.cookiesTextAfter}
        </p>

        <h2>{copy.sections.updatesTitle}</h2>
        <p>{copy.sections.updatesText}</p>
      </div>
    </section>
  )
}
