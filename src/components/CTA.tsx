'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 flex items-center justify-center text-center text-white">
      {/* Fondo dinámico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-t_primary via-t_accent to-t_primary bg-[length:200%_200%]"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          ¿Listo para llevar tu marca al siguiente nivel?
        </h2>
        <p className="text-white/80 mb-10 text-lg">
          En <b>Tech Tecnic</b> combinamos innovación, diseño y tecnología para crear experiencias
          digitales que impulsan resultados reales.
        </p>
        <Link
          href="#contacto"
          className="inline-block px-10 py-4 bg-white text-t_dark font-semibold text-lg rounded-2xl shadow-md hover:shadow-xl hover:scale-105 hover:bg-t_accent transition-all duration-300"
        >
          Cotiza tu proyecto hoy
        </Link>
      </motion.div>
    </section>
  )
}
