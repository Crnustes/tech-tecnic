'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[95vh] bg-gradient-to-br from-t_dark via-[#0A1A1F] to-black text-white px-4">
      {/* 🔵 Círculo animado de fondo */}
      <motion.div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-t_primary/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-t_accent/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ✨ Texto principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight z-10 max-w-5xl"
      >
        Potenciamos tu presencia digital con{' '}
        <span className="text-t_accent drop-shadow-lg">tecnología</span> e{' '}
        <span className="text-t_primary">innovación</span>.
      </motion.h1>

      {/* 💬 Subtítulo animado */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-base md:text-lg text-white/80 max-w-xl"
      >
        En <b>Tech Tecnic</b> creamos experiencias web impactantes, con inteligencia artificial,
        automatización y diseño de alto rendimiento para marcas que quieren destacar.
      </motion.p>

      {/* 🚀 Botones CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <Link
          href="#contacto"
          className="px-8 py-4 rounded-2xl bg-t_primary text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-t_primary/40 transition-all"
        >
          Empezar proyecto
        </Link>
        <Link
          href="#servicios"
          className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-semibold transition-all"
        >
          Ver servicios
        </Link>
      </motion.div>

      {/* ⬇️ Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 text-white/60 text-sm flex flex-col items-center"
      >
        <span>Desliza hacia abajo</span>
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
          <path
            d="M10 0v25M10 25l-7-7M10 25l7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </section>
  )
}
