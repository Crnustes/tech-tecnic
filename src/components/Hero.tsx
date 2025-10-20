'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-t_bg">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-center"
      >
        Webs modernas con <span className="text-t_primary">tecnología</span> e <span className="text-t_primary">IA</span>
      </motion.h1>
      <p className="text-center text-slate-600 mt-4">
        Desarrollo, automatización y soporte para crecer sin fricción.
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <Link href="#contacto" className="rounded-xl bg-t_primary text-white px-5 py-3 font-medium">
          Empezar proyecto
        </Link>
        <Link href="#servicios" className="rounded-xl border px-5 py-3 font-medium hover:bg-white">
          Ver servicios
        </Link>
      </div>
    </section>
  )
}
