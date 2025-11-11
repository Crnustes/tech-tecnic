'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'Emprendedor',
    price: 'Desde $400.000 COP',
    features: [
      'Landing page moderna (1 sección)',
      'Dominio, hosting y SSL incluido 1 año',
      'Diseño responsivo y profesional',
      'Formulario de contacto + WhatsApp',
      'Optimización SEO básica',
    ],
    accent: 't_primary',
  },
  {
    name: 'Profesional',
    price: 'Desde $900.000 COP',
    features: [
      'Sitio completo (3–5 secciones)',
      'SEO y analítica configurados (GTM, GA4)',
      'Diseño personalizado con Elementor Pro',
      'Correos corporativos incluidos',
      'Mantenimiento mensual opcional',
    ],
    accent: 't_accent',
    popular: true,
  },
  {
    name: 'Avanzado',
    price: 'Desde $1.800.000 COP',
    features: [
      'E-commerce o aplicación web (WooCommerce / React)',
      'Integraciones con IA o automatizaciones',
      'Optimización GEO + Core Web Vitals',
      'Soporte técnico y actualizaciones mensuales',
      'Capacitación al cliente post-entrega',
    ],
    accent: 't_primary',
  },
  {
    name: 'Partner / Agencia',
    price: 'Planes personalizados',
    features: [
      'Desarrollo white-label (bajo tu marca)',
      'Proyectos escalables para agencias',
      'Confidencialidad y NDA',
      'Tarifas preferenciales por volumen',
      'Soporte técnico remoto o por horas',
    ],
    accent: 't_accent',
  },
]

export default function Pricing() {
  return (
    <section id="planes" className="relative py-24 bg-gradient-to-b from-t_bg via-white to-t_bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-t_dark mb-4"
        >
          Planes que crecen contigo
        </motion.h2>
        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">
          Escoge el plan que mejor se adapte a tu proyecto. Todos incluyen diseño moderno, soporte
          profesional y optimización para resultados reales.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white/70 backdrop-blur-lg border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl p-8 flex flex-col justify-between transition`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-t_accent text-t_dark text-xs font-bold py-1.5 px-4 rounded-bl-2xl rounded-tr-3xl">
                  Más popular
                </div>
              )}
              <div>
                <h3
                  className={`text-2xl font-bold mb-2 text-${plan.accent}`}
                >
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-4 font-semibold">{plan.price}</p>
                <ul className="space-y-2 text-sm text-slate-600 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`text-${plan.accent}`}>▹</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="#contacto"
                className={`mt-8 inline-block px-5 py-3 text-sm rounded-xl font-semibold border border-${plan.accent} text-${plan.accent} hover:bg-${plan.accent} hover:text-white transition-all`}
              >
                Cotizar este plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Luces decorativas animadas */}
      <motion.div
        className="absolute top-20 left-0 w-[400px] h-[400px] bg-t_primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-t_accent/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </section>
  )
}
