'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const servicesData = {
  web: {
    title: 'Desarrollo Web Moderno',
    desc: 'Diseñamos y desarrollamos sitios potentes en WordPress, Elementor o React. Desde landing pages rápidas hasta tiendas online personalizadas con WooCommerce o integraciones a medida.',
    features: [
      'Diseño responsivo e interactivo',
      'E-commerce, catálogos o webs corporativas',
      'Hosting, dominio y correos empresariales',
      'Integraciones con CRM, APIs y analítica',
    ],
    img: '/images/service-web.png',
  },
  ai: {
    title: 'Automatización & Inteligencia Artificial',
    desc: 'Llevamos tu negocio al siguiente nivel implementando flujos inteligentes: desde bots de atención hasta integraciones entre tus herramientas con IA y automatización.',
    features: [
      'Chatbots personalizados (WhatsApp, Web)',
      'Captura automática de leads',
      'Conexión con CRMs (HubSpot, Zoho, Odoo)',
      'Integraciones con APIs e IA generativa',
    ],
    img: '/images/service-ai.png',
  },
  maintenance: {
    title: 'Mantenimiento y Soporte Web',
    desc: 'Nos encargamos de la seguridad, velocidad y estabilidad de tu sitio. Mantén tu web actualizada, segura y lista para crecer sin interrupciones.',
    features: [
      'Monitoreo y actualizaciones constantes',
      'Optimización de carga y seguridad SSL',
      'Backups automáticos y soporte técnico',
      'Planes mensuales flexibles',
    ],
    img: '/images/service-maintenance.png',
  },
  seo: {
    title: 'SEO Técnico y Posicionamiento GEO',
    desc: 'Aumenta tu visibilidad local y global con estrategias SEO, contenido optimizado, y estructura técnica perfecta para Google y redes sociales.',
    features: [
      'Optimización on-page y metadatos OG',
      'Implementación de Tag Manager y GA4',
      'SEO Local (Google My Business / Schema)',
      'Velocidad, Core Web Vitals y rendimiento',
    ],
    img: '/images/service-seo.png',
  },
  outsourcing: {
    title: 'Servicios para Agencias',
    desc: 'Desarrollamos para agencias que necesitan apoyo técnico o proyectos puntuales. Ofrecemos subcontratación profesional bajo tu marca.',
    features: [
      'Proyectos white label (bajo tu marca)',
      'Soporte remoto y puntual según demanda',
      'Confidencialidad y calidad profesional',
      'Escalabilidad según tus clientes',
    ],
    img: '/images/service-outsourcing.png',
  },
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<'web' | 'ai' | 'maintenance' | 'seo' | 'outsourcing'>('web')

  return (
    <section id="servicios" className="relative py-24 overflow-hidden bg-gradient-to-b from-t_bg via-white to-t_bg">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-t_dark"
        >
          Nuestros Servicios
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(servicesData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-4 py-2 rounded-xl border text-sm md:text-base transition-all ${
                activeTab === key
                  ? 'bg-t_primary text-white shadow-md'
                  : 'border-gray-300 text-gray-600 hover:bg-t_bg'
              }`}
            >
              {servicesData[key as keyof typeof servicesData].title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Contenido dinámico */}
        <div className="relative mt-8 flex flex-col md:flex-row items-center gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-10 w-full"
            >
              {/* Imagen ilustrativa */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src={servicesData[activeTab].img}
                    alt={servicesData[activeTab].title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>

              {/* Texto y características */}
              <div className="w-full md:w-1/2">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold mb-3 text-t_primary"
                >
                  {servicesData[activeTab].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-700 mb-4"
                >
                  {servicesData[activeTab].desc}
                </motion.p>

                <ul className="space-y-2 text-sm text-slate-600">
                  {servicesData[activeTab].features.map((f) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-t_accent text-lg">▹</span> {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
