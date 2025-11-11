'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Laptop, PenTool, Rocket, Users } from 'lucide-react'

const steps = [
  {
    icon: <Users className="w-8 h-8 text-t_primary" />,
    title: '1. Descubrimiento y Estrategia',
    description:
      'Nos reunimos contigo para entender tus metas, público objetivo y el propósito de tu proyecto. Creamos un plan claro basado en resultados reales.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-t_accent" />,
    title: '2. Diseño y Experiencia',
    description:
      'Diseñamos la experiencia visual y funcional que representará tu marca. Usamos interfaces modernas, limpias y centradas en conversión.',
  },
  {
    icon: <Laptop className="w-8 h-8 text-t_primary" />,
    title: '3. Desarrollo y Optimización',
    description:
      'Construimos tu web con tecnología de alto rendimiento (WordPress, React o Next.js), optimizada para SEO, velocidad y escalabilidad.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-t_accent" />,
    title: '4. Pruebas y Ajustes',
    description:
      'Probamos en todos los dispositivos y navegadores. Ajustamos detalles para lograr una experiencia fluida, rápida y segura.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-t_primary" />,
    title: '5. Lanzamiento y Crecimiento',
    description:
      'Lanzamos tu sitio al mundo y te acompañamos en la etapa de mantenimiento, análisis y mejoras constantes para seguir creciendo.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-t_dark mb-12"
        >
          Cómo trabajamos
        </motion.h2>

        <div className="relative border-l-2 border-t_primary/20 pl-8 md:pl-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-14"
            >
              {/* Punto con ícono */}
              <div className="absolute -left-10 md:-left-16 bg-white rounded-full shadow-md p-3 border border-t_primary/20">
                {step.icon}
              </div>

              {/* Contenido */}
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-t_dark mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm md:text-base">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 -right-40 w-[400px] h-[400px] bg-t_primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -left-40 w-[300px] h-[300px] bg-t_accent/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
