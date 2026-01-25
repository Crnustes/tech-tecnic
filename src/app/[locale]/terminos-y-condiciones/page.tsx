import type { Metadata } from 'next'
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo'

const pageCopy = {
  es: {
    metaTitle: 'Terminos y Condiciones | Tech Tecnic',
    metaDescription: 'Condiciones de uso y contratacion de servicios digitales de Tech Tecnic.',
    title: 'Terminos y Condiciones',
    updatedLabel: 'Ultima actualizacion',
    updatedValue: '14 de enero de 2026',
    sections: [
      {
        title: '1. Objeto',
        text:
          'Estos Terminos regulan el uso del sitio web de Tech Tecnic y la contratacion de nuestros servicios de desarrollo web, posicionamiento SEO, automatizacion con IA, integraciones y soluciones relacionadas.',
      },
      {
        title: '2. Contratacion y Alcance',
        text:
          'La prestacion de servicios se formaliza mediante propuesta/cotizacion aceptada por el cliente, donde se establece alcance, entregables, cronograma y precio. Cualquier cambio posterior podra implicar ajustes de tiempos y costos.',
      },
      {
        title: '3. Precios y Pagos',
        text:
          'Los precios se expresan usualmente en COP. Salvo que se indique lo contrario, se requiere anticipo para iniciar el proyecto y pagos conforme a hitos. Los impuestos y comisiones de pasarela (si aplican) son a cargo del cliente.',
      },
      {
        title: '4. Propiedad Intelectual',
        text:
          'Tech Tecnic retiene la titularidad de metodologias, librerias y material propio. El cliente obtiene una licencia de uso de los entregables conforme al objetivo del proyecto. Los contenidos y marcas del cliente siguen siendo de su propiedad.',
      },
      {
        title: '5. Contenidos del Cliente',
        text:
          'El cliente garantiza que cuenta con derechos sobre textos, imagenes, datos y materiales aportados y que su uso no infringe derechos de terceros. El cliente es responsable del contenido publicado en su sitio.',
      },
      {
        title: '6. Confidencialidad',
        text:
          'Ambas partes se comprometen a mantener la confidencialidad de la informacion no publica compartida con ocasion del proyecto y usarla unicamente para la ejecucion del mismo.',
      },
      {
        title: '7. Garantias y Soporte',
        text:
          'Proveemos un periodo razonable de correccion de errores relacionados con el alcance contratado. Ajustes o nuevas funcionalidades fuera de alcance seran cotizados aparte.',
      },
      {
        title: '8. Limitacion de Responsabilidad',
        text:
          'En la medida permitida por la ley, nuestra responsabilidad se limita al valor efectivamente pagado por el cliente por los servicios que originaron la reclamacion. No respondemos por danos indirectos, lucro cesante o perdida de datos.',
      },
      {
        title: '9. Uso del Sitio y Prohibiciones',
        text:
          'El usuario se compromete a no usar el sitio para actividades ilicitas, distribuir malware, realizar scraping abusivo o vulnerar medidas de seguridad.',
      },
      {
        title: '10. Proteccion de Datos',
        textBefore: 'El tratamiento de datos personales se realiza conforme a nuestra ',
        linkPrivacyLabel: 'Politica de Privacidad',
        textBetween: ' y la ',
        linkProcessingLabel: 'Politica de Tratamiento de Datos',
        textAfter: '.',
      },
      {
        title: '11. Terminacion',
        text:
          'Cualquiera de las partes podra terminar el servicio por incumplimiento material de la otra parte, previa notificacion razonable. Los trabajos efectivamente realizados hasta la fecha de terminacion seran facturados.',
      },
      {
        title: '12. Ley Aplicable y Jurisdiccion',
        text:
          'Estos Terminos se rigen por las leyes de Colombia. Cualquier disputa sera resuelta ante los tribunales competentes de Bogota, salvo pacto distinto.',
      },
      {
        title: '13. Cambios',
        text: 'Tech Tecnic podra actualizar estos Terminos y publicara la version vigente en el sitio web.',
      },
    ],
  },
  en: {
    metaTitle: 'Terms and Conditions | Tech Tecnic',
    metaDescription: 'Terms of use and contracting of Tech Tecnic digital services.',
    title: 'Terms and Conditions',
    updatedLabel: 'Last updated',
    updatedValue: 'January 14, 2026',
    sections: [
      {
        title: '1. Purpose',
        text:
          'These Terms govern the use of the Tech Tecnic website and the contracting of our web development, SEO, AI automation, integrations, and related services.',
      },
      {
        title: '2. Contracting and Scope',
        text:
          'Services are formalized through a proposal/quote accepted by the client, defining scope, deliverables, timeline, and price. Any later changes may affect timelines and costs.',
      },
      {
        title: '3. Pricing and Payments',
        text:
          'Prices are usually stated in COP. Unless otherwise indicated, a deposit is required to start the project and payments are made by milestones. Taxes and gateway fees (if applicable) are paid by the client.',
      },
      {
        title: '4. Intellectual Property',
        text:
          'Tech Tecnic retains ownership of methodologies, libraries, and proprietary materials. The client receives a license to use deliverables according to the project objective. Client content and trademarks remain their property.',
      },
      {
        title: '5. Client Content',
        text:
          'The client guarantees rights over texts, images, data, and materials provided, and that their use does not infringe third-party rights. The client is responsible for content published on their site.',
      },
      {
        title: '6. Confidentiality',
        text:
          'Both parties agree to keep confidential any non-public information shared during the project and to use it only for project execution.',
      },
      {
        title: '7. Warranties and Support',
        text:
          'We provide a reasonable period to correct errors related to the contracted scope. Adjustments or new features outside scope will be quoted separately.',
      },
      {
        title: '8. Limitation of Liability',
        text:
          'To the extent permitted by law, our liability is limited to the amount actually paid by the client for the services that gave rise to the claim. We are not responsible for indirect damages, lost profits, or data loss.',
      },
      {
        title: '9. Site Use and Prohibitions',
        text:
          'Users agree not to use the site for illegal activities, distribute malware, perform abusive scraping, or compromise security measures.',
      },
      {
        title: '10. Data Protection',
        textBefore: 'Personal data processing is carried out under our ',
        linkPrivacyLabel: 'Privacy Policy',
        textBetween: ' and the ',
        linkProcessingLabel: 'Data Processing Policy',
        textAfter: '.',
      },
      {
        title: '11. Termination',
        text:
          'Either party may terminate the service for material breach by the other party, with reasonable notice. Work completed up to the termination date will be invoiced.',
      },
      {
        title: '12. Governing Law and Jurisdiction',
        text:
          'These Terms are governed by the laws of Colombia. Any dispute will be resolved before the competent courts of Bogota, unless otherwise agreed.',
      },
      {
        title: '13. Changes',
        text: 'Tech Tecnic may update these Terms and publish the current version on the website.',
      },
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
  const path = '/terminos-y-condiciones'
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

export default async function TerminosCondicionesPage({
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
        {copy.sections.map(section => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            {section.text && <p>{section.text}</p>}
            {'textBefore' in section && (
              <p>
                {section.textBefore}
                <a href={privacyUrl}>{section.linkPrivacyLabel}</a>
                {section.textBetween}
                <a href={processingUrl}>{section.linkProcessingLabel}</a>
                {section.textAfter}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
