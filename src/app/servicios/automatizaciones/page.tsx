import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automatización e Inteligencia Artificial | Tech Tecnic',
  description:
    'Implementamos soluciones de automatización inteligente e IA para optimizar procesos empresariales, reducir costos y escalar con eficiencia.',
}

export default function AutomatizacionesIA() {
  return (
    <main className="bg-gradient-to-b from-t_dark via-t_primary/10 to-black text-white">
      <section className="text-center py-32 max-w-5xl mx-auto px-6">
        <h1
          className="text-5xl font-extrabold mb-6 animate-fade-in"
        >
          Automatización & Inteligencia Artificial
        </h1>

        <p
          className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-delay"
        >
          Acelera tu negocio con flujos inteligentes, bots, integraciones de IA y analítica avanzada. Nosotros lo diseñamos e implementamos, para que tú te centres en crecer.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/contacto"
            className="bg-t_accent text-t_dark font-semibold py-3 px-8 rounded-lg hover:bg-t_accent/80 transition"
          >
            Empieza ahora
          </a>
          <a
            href="/proyectos"
            className="border border-t_accent py-3 px-8 rounded-lg hover:bg-t_accent/10 transition"
          >
            Ver casos
          </a>
        </div>
      </section>

      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <img src="/images/servicios/automatizacion-ia.webp" alt="Automatización e IA para empresas" className="rounded-lg shadow-xl" loading="lazy" />
          <div>
            <h2 className="text-3xl text-t_accent mb-4">Lo que hacemos</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li>Creación de chatbots inteligentes y sistemas de respuesta automática.</li>
              <li>Integración de IA / ML para análisis predictivo y toma de decisiones.</li>
              <li>Automatización de procesos repetitivos para ahorrar tiempo y minimizar errores.</li>
              <li>Conectamos tus plataformas (CRM, ERP, marketing) con flujos automáticos.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl text-white text-center">Cómo trabajamos contigo</h2>
          <ol className="list-decimal pl-8 space-y-6 text-gray-300">
            <li><strong>Diagnóstico inicial:</strong> Analizamos tus procesos actuales, identificamos cuellos de botella y oportunidades.</li>
            <li><strong>Plan estratégico:</strong> Definimos qué automatizar, cómo y en cuánto tiempo.</li>
            <li><strong>Desarrollo e integración:</strong> Creamos e implementamos bot / flujos / IA / API según el plan.</li>
            <li><strong>Prueba y puesta en marcha:</strong> Validamos el funcionamiento, medimos KPIs, ajustamos.</li>
            <li><strong>Escalabilidad & soporte:</strong> Dejamos todo listo para crecer, mantenimiento mensual disponible.</li>
          </ol>
        </div>
      </section>

      <section className="py-24 bg-black/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-white mb-4">¿Listo para transformar?</h2>
          <p className="text-gray-300 mb-6">Lleva tus procesos al siguiente nivel y adquiere ventaja competitiva con IA y automatización. Agenda tu consultoría hoy.</p>
          <a
            href="/contacto"
            className="bg-t_accent text-t_dark font-semibold py-3 px-8 rounded-lg hover:bg-t_accent/80 transition"
          >
            Cotizar proyecto
          </a>
        </div>
      </section>
    </main>
  )
}
