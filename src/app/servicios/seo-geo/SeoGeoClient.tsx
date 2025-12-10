'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SeoGeoClient() {
  return (
    <main className="bg-gradient-to-b from-t_dark via-t_primary/10 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Potencia tu visibilidad con <span className="text-t_accent">Optimización SEO + GEO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Aumenta tu posicionamiento orgánico en buscadores y destaca en tu zona. 
            Aplicamos estrategias SEO locales, técnicas y de contenido para que Google te encuentre antes que a tu competencia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="bg-t_accent text-t_dark font-semibold py-3 px-8 rounded-lg hover:bg-t_accent/80 transition"
            >
              Auditar mi sitio
            </Link>
            <Link
              href="/proyectos"
              className="border border-t_accent py-3 px-8 rounded-lg hover:bg-t_accent/10 transition"
            >
              Ver resultados
            </Link>
          </div>
        </motion.div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-t_accent blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-t_secondary blur-4xl rounded-full"></div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-t_accent mb-12">
          ¿Por qué invertir en SEO + GEO?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">SEO Local Estratégico</h3>
            <p>
              Aparece en los primeros resultados de búsqueda en tu ciudad o región. 
              Configuramos tu perfil de negocio, mapas y optimización local.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">SEO Técnico Avanzado</h3>
            <p>
              Mejoramos la velocidad, estructura, indexación y experiencia de usuario 
              para aumentar la autoridad de tu sitio ante los motores de búsqueda.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">SEO de Contenido</h3>
            <p>
              Creamos estrategias de contenido basadas en intención de búsqueda, 
              palabras clave y storytelling para conectar con tu público objetivo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 px-6 bg-black/40">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Nuestro Proceso SEO
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-gray-300">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-4">
              <li><strong>Análisis SEO inicial:</strong> diagnóstico técnico y de contenido.</li>
              <li><strong>Investigación de palabras clave:</strong> identificación de oportunidades de tráfico.</li>
              <li><strong>Optimización on-page:</strong> estructura, metaetiquetas, rendimiento y contenido.</li>
              <li><strong>Optimización off-page:</strong> backlinks y autoridad de dominio.</li>
              <li><strong>Monitoreo continuo:</strong> informes y evolución mensual del posicionamiento.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/servicios/seo-geo.webp"
              alt="Estrategia SEO GEO"
              className="rounded-xl shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Mejora tu posicionamiento y empieza a recibir clientes orgánicos
          </h2>
          <p className="text-gray-300 mb-8">
            Ofrecemos estrategias SEO + GEO personalizadas según tu mercado, 
            competencia y objetivos de crecimiento.
          </p>
          <Link
            href="/contacto"
            className="bg-t_accent text-t_dark font-semibold py-3 px-8 rounded-lg hover:bg-t_accent/80 transition"
          >
            Solicitar diagnóstico gratuito
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
