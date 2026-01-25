import type { Metadata } from 'next';
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from '@/utils/seo';
import { getFaqSchema, getServiceSchema } from '@/utils/schema';

const pageCopy = {
  es: {
    metaTitle: 'Automatizacion e Inteligencia Artificial | Tech Tecnic',
    metaDescription:
      'Implementamos soluciones de automatizacion inteligente e IA para optimizar procesos empresariales, reducir costos y escalar con eficiencia.',
    title: 'Automatizacion e Inteligencia Artificial',
    intro:
      'Acelera tu negocio con flujos inteligentes, bots, integraciones de IA y analitica avanzada. Nosotros lo diseniamos e implementamos, para que tu te centres en crecer.',
    ctaPrimary: 'Empieza ahora',
    ctaSecondary: 'Ver casos',
    sectionTitle: 'Lo que hacemos',
    items: [
      'Creacion de chatbots inteligentes y sistemas de respuesta automatica.',
      'Integracion de IA/ML para analisis predictivo y toma de decisiones.',
      'Automatizacion de procesos repetitivos para ahorrar tiempo y minimizar errores.',
      'Conectamos tus plataformas (CRM, ERP, marketing) con flujos automaticos.',
    ],
    stepsTitle: 'Como trabajamos contigo',
    steps: [
      'Diagnostico inicial: Analizamos tus procesos actuales, identificamos cuellos de botella y oportunidades.',
      'Plan estrategico: Definimos que automatizar, como y en cuanto tiempo.',
      'Desarrollo e integracion: Creamos e implementamos bot / flujos / IA / API segun el plan.',
      'Prueba y puesta en marcha: Validamos el funcionamiento, medimos KPIs, ajustamos.',
      'Escalabilidad y soporte: Dejamos todo listo para crecer, mantenimiento mensual disponible.',
    ],
    finalTitle: 'Listo para transformar?',
    finalText:
      'Lleva tus procesos al siguiente nivel y adquiere ventaja competitiva con IA y automatizacion. Agenda tu consultoria hoy.',
    finalButton: 'Cotizar proyecto',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: 'Que procesos se pueden automatizar?',
        a: 'Desde atencion al cliente y marketing hasta flujos operativos y sincronizacion de datos.',
      },
      {
        q: 'Necesito herramientas especificas?',
        a: 'No. Nos adaptamos a tus plataformas y definimos la mejor arquitectura.',
      },
      {
        q: 'Pueden integrarse con mi CRM?',
        a: 'Si. Integramos CRMs y sistemas internos via APIs y automatizaciones.',
      },
    ],
  },
  en: {
    metaTitle: 'Business Automation and AI | Tech Tecnic',
    metaDescription:
      'We implement intelligent automation and AI solutions to optimize processes, reduce costs, and scale across Colombia, Latam, and USA.',
    title: 'Automation and Artificial Intelligence',
    intro:
      'Accelerate your business with intelligent workflows, bots, AI integrations, and advanced analytics. We design and implement it so you can focus on growth.',
    ctaPrimary: 'Get started',
    ctaSecondary: 'View cases',
    sectionTitle: 'What we do',
    items: [
      'Create intelligent chatbots and automated response systems.',
      'Integrate AI/ML for predictive analysis and decision making.',
      'Automate repetitive processes to save time and reduce errors.',
      'Connect your platforms (CRM, ERP, marketing) with automated flows.',
    ],
    stepsTitle: 'How we work with you',
    steps: [
      'Initial diagnosis: We analyze your current processes, identify bottlenecks and opportunities.',
      'Strategic plan: We define what to automate, how, and in what timeframe.',
      'Development and integration: We build and implement bots, flows, AI, and APIs.',
      'Testing and launch: We validate performance, track KPIs, and refine.',
      'Scale and support: We set everything up for growth, with optional monthly maintenance.',
    ],
    finalTitle: 'Ready to transform?',
    finalText:
      'Take your processes to the next level and gain a competitive advantage with AI and automation. Book your consultation today.',
    finalButton: 'Request a quote',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'What processes can be automated?',
        a: 'From customer support and marketing to operational flows and data sync.',
      },
      {
        q: 'Do I need specific tools?',
        a: 'No. We adapt to your stack and define the best architecture.',
      },
      {
        q: 'Can you integrate with my CRM?',
        a: 'Yes. We integrate CRMs and internal systems via APIs and automations.',
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/automatizaciones';
  const canonicalUrl = buildLocalizedUrl(path, locale);

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
  };
}

export default async function AutomatizacionesIA({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = '/servicios/automatizaciones';
  const schemaData = getServiceSchema(locale, copy.metaTitle, copy.metaDescription, path);
  const faqSchema = getFaqSchema(copy.faq, locale);

  return (
    <main className="bg-gradient-to-b from-t_dark via-t_primary/10 to-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="text-center py-32 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">{copy.title}</h1>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">{copy.intro}</p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/contacto"
            className="bg-t_accent text-t_dark font-semibold py-3 px-8 rounded-lg hover:bg-t_accent/80 transition"
          >
            {copy.ctaPrimary}
          </a>
          <a
            href="/proyectos"
            className="border border-t_accent py-3 px-8 rounded-lg hover:bg-t_accent/10 transition"
          >
            {copy.ctaSecondary}
          </a>
        </div>
      </section>

      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <img
            src="/images/servicios/automatizacion-ia.webp"
            alt={copy.title}
            className="rounded-lg shadow-xl"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl text-t_accent mb-4">{copy.sectionTitle}</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              {copy.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl text-white text-center">{copy.stepsTitle}</h2>
          <ol className="list-decimal pl-8 space-y-6 text-gray-300">
            {copy.steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl text-white text-center mb-8">{copy.faqTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {copy.faq.map((item) => (
              <details key={item.q} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <summary className="cursor-pointer text-white font-semibold">{item.q}</summary>
                <p className="mt-2 text-gray-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-white mb-4">{copy.finalTitle}</h2>
          <p className="text-gray-300 mb-6">{copy.finalText}</p>
          <a
            href="/contacto"
            className="bg-t_accent text-t_dark font-semibold py-3 px-8 rounded-lg hover:bg-t_accent/80 transition"
          >
            {copy.finalButton}
          </a>
        </div>
      </section>
    </main>
  );
}
