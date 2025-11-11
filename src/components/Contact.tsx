'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
} from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Envío al correo (API Resend)
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      // Envío automático a WhatsApp con mensaje personalizado
      const whatsappMessage = encodeURIComponent(
        `👋 ¡Hola Cristian! Soy ${form.name} y estoy interesado en crear mi proyecto con Tech Tecnic.%0A%0A📧 Correo: ${form.email}%0A💬 Mensaje: ${form.message}%0A%0AEnvío desde la web oficial 🌐 techtecnic.com`
      )
      const whatsappURL = `https://wa.me/573026742059?text=${whatsappMessage}`
      window.open(whatsappURL, '_blank')

      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contacto"
      className="relative py-28 bg-gradient-to-br from-t_primary via-t_accent/60 to-t_primary text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* BLOQUE IZQUIERDO: TEXTO CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            ¿Listo para impulsar tu proyecto con{' '}
            <span className="text-t_accent">Tech Tecnic</span>?
          </h2>
          <p className="text-white/80 text-lg">
            Cuéntanos tu idea, negocio o proyecto. Diseñamos soluciones digitales modernas que
            generan resultados reales. 🚀 <br /> Respondemos en menos de 24 horas.
          </p>

          <div className="flex flex-col gap-3 mt-8">
            <div className="flex items-center gap-3 text-white/90">
              <Mail className="w-5 h-5 text-t_accent" />
              <span>contacto@techtecnic.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Phone className="w-5 h-5 text-t_accent" />
              <span>+57 302 674 2059</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <MapPin className="w-5 h-5 text-t_accent" />
              <span>Bogotá, Colombia – Atención global 🌎</span>
            </div>
          </div>

          {/* REDES SOCIALES */}
          <div className="flex gap-5 mt-8">
            <Link href="#" className="hover:text-t_accent transition">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-t_accent transition">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-t_accent transition">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>

        {/* BLOQUE DERECHO: FORMULARIO */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-8 text-t_dark space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Nombre completo</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Tu nombre"
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-t_accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Correo electrónico</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tu@email.com"
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-t_accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={5}
              required
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-t_accent resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-t_accent text-t_dark font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            {loading ? 'Enviando...' : <><Send className="w-5 h-5" /> Enviar mensaje</>}
          </motion.button>

          {sent && (
            <p className="text-green-600 font-medium text-center">
              ✅ Tu mensaje fue enviado correctamente.
            </p>
          )}
        </motion.form>
      </div>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <Link
        href="https://wa.me/573026742059?text=👋%20Hola%20Cristian,%20quiero%20hablar%20sobre%20mi%20proyecto%20digital%20con%20Tech%20Tecnic."
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all"
      >
        <MessageCircle className="w-7 h-7" />
      </Link>
    </section>
  )
}
