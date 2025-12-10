'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DesarrolloWebClient() {
  return (
    <main className="bg-gradient-to-b from-t_dark via-t_primary/10 to-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Desarrollo Web Profesional para <span className="text-t_accent">Empresas y Agencias</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Desde landing pages hasta tiendas online con WooCommerce o aplicaciones con React. Diseño responsive, SEO, velocidad y escalabilidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="bg-t_accent text-t_dark font-semibold py-3 px-8 rounded-lg hover:bg-t_accent/80 transition"
            >
              Empezar mi proyecto
            </Link>
            <Link
              href="/proyectos"
              className="border border-t_accent py-3 px-8 rounded-lg hover:bg-t_accent/10 transition"
            >
              Ver trabajos
            </Link>
          </div>
        </motion.div>
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-t_accent blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-t_secondary blur-4xl rounded-full"></div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-t_accent mb-4">¿Por qué elegir nuestra agencia?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            No solo construimos webs, construimos **experiencias digitales que convierten**. Nos especializamos en:
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-xl font-semibold text-t_accent">Diseño Mobile-First & Core Web Vitals optimizados</h3>
            <p className="text-gray-300">Garantizamos velocidad, experiencia de usuario y cumplimiento de métricas de Google para ranking.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3"
          >
            <h3 className="text-xl font-semibold text-t_accent">Plataformas autoregibles</h3>
            <p className="text-gray-300">Entregamos tu sitio con CMS (WordPress/Elementor) o configuración React custom que tú puedes editar fácilmente.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-xl font-semibold text-t_accent">Integración SEO, analítica y marketing</h3>
            <p className="text-gray-300">Configuramos Google Analytics, Tag Manager, estructura SEO, velocidad, hosting y mantenimiento mensual opcional.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-3"
          >
            <h3 className="text-xl font-semibold text-t_accent">Escalabilidad y soporte continuo</h3>
            <p className="text-gray-300">No solo te entregamos el sitio, te acompañamos en mantenimiento, actualizaciones y optimización según creces.</p>
          </motion.div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 px-6 bg-black/40">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Nuestro proceso en 5 pasos</h2>
        <motion.ol
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="list-decimal pl-8 space-y-8 text-gray-300 max-w-4xl mx-auto"
        >
          <li><strong>Brief & estrategia:</strong> Comprendemos tus objetivos, audiencia y definimos roadmap.</li>
          <li><strong>Wireframe & diseño visual:</strong> Prototipo rápido, feedback y aprobación.</li>
          <li><strong>Desarrollo & optimización:</strong> Construcción con WordPress, React o WooCommerce + pruebas de velocidad.</li>
          <li><strong>Lanzamiento & análisis:</strong> Subida, configuración de analítica, SEO técnico y monitoreo de métricas clave.</li>
          <li><strong>Mantenimiento & crecimiento:</strong> Actualizaciones, cambios rápidos, soporte continuo y mejoras iterativas.</li>
        </motion.ol>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Lista para transformar tu presencia digital?</h2>
          <p className="text-gray-300 mb-8">
            Contáctanos hoy y recibe un diagnóstico gratuito de tu sitio actual o una propuesta sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="bg-t_accent text-t_dark font-semibold py-3 px-8 rounded-lg hover:bg-t_accent/80 transition"
          >
            Cotiza tu sitio web
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
