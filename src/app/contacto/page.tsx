'use client'

import { useState } from 'react'
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Sparkles
} from 'lucide-react'
import { contact } from '@/config/contact'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // GTM tracking
    if (typeof window !== 'undefined' && 'dataLayer' in window) {
      const dataLayer = (window as any).dataLayer;
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: 'form_submit',
          eventCategory: 'Contact',
          eventAction: 'submit_contact_form',
          eventLabel: formData.service || 'General',
          formName: 'contact_page',
        });
      }
    }

    // Simular envío (aquí conectarías tu backend o servicio de email)
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })

    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-t_primary/10 to-t_accent/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">Contáctanos Hoy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Hablemos de
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              tu proyecto
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Estamos listos para transformar tus ideas en realidad digital. Elige la forma más fácil de contactarnos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp CTA destacado */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-emerald-500/5 border-2 border-green-500/30 hover:border-green-400/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/50">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¿Prefieres WhatsApp?</h3>
                <p className="text-gray-300 mb-6 text-sm">Chatea con nosotros y recibe respuesta inmediata</p>
                <WhatsAppButton
                  message="Hola, quiero información sobre sus servicios"
                  service="contacto"
                  action="click_cta_hero"
                  label="WhatsApp Contact"
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Chatear ahora
                    <MessageCircle className="w-5 h-5" />
                  </span>
                </WhatsAppButton>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-t_primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-t_primary to-t_accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Llámanos</h4>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-t_primary transition-colors text-lg font-medium">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-t_primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-t_primary to-t_accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Escríbenos</h4>
                  <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-t_primary transition-colors break-all">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-t_primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-t_primary to-t_accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Ubicación</h4>
                  <p className="text-gray-300 text-lg">
                    {contact.city}, {contact.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-t_primary/5 to-t_accent/5 border border-t_primary/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-t_primary to-t_accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 text-lg">Horarios de atención</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <p>{contact.schedule.weekdays}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <p>{contact.schedule.saturday}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <p>{contact.schedule.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <h4 className="font-bold text-white mb-4 text-lg">Síguenos en redes</h4>
              <div className="flex gap-3">
                <a 
                  href={contact.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
                >
                  <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href={contact.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Facebook className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href={contact.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-white/5 hover:bg-blue-700 border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-t_primary/5 to-t_accent/5 rounded-3xl"></div>
              
              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Envíanos un mensaje</h3>
                  <p className="text-gray-400">Completa el formulario y te contactaremos pronto</p>
                </div>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 flex items-center gap-3 shadow-lg shadow-green-500/20">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-400 font-semibold">¡Mensaje enviado exitosamente!</p>
                    <p className="text-green-300 text-sm">Te contactaremos muy pronto.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:border-t_primary focus:outline-none focus:ring-4 focus:ring-t_primary/20 transition-all hover:border-white/20"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:border-t_primary focus:outline-none focus:ring-4 focus:ring-t_primary/20 transition-all hover:border-white/20"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:border-t_primary focus:outline-none focus:ring-4 focus:ring-t_primary/20 transition-all hover:border-white/20"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border-2 border-white/10 text-white focus:border-t_primary focus:outline-none focus:ring-4 focus:ring-t_primary/20 transition-all hover:border-white/20 cursor-pointer"
                    >
                      <option value="" className="bg-slate-900">Selecciona un servicio</option>
                      <option value="desarrollo-web" className="bg-slate-900">Desarrollo Web</option>
                      <option value="seo-geo" className="bg-slate-900">SEO & Posicionamiento</option>
                      <option value="automatizacion-ia" className="bg-slate-900">IA & Automatización</option>
                      <option value="integraciones" className="bg-slate-900">Integraciones</option>
                      <option value="mantenimiento" className="bg-slate-900">Mantenimiento Web</option>
                      <option value="apps-moviles" className="bg-slate-900">Apps Móviles</option>
                      <option value="chatbot-wp-ia" className="bg-slate-900">Chatbot WhatsApp con IA</option>
                      <option value="otro" className="bg-slate-900">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:border-t_primary focus:outline-none focus:ring-4 focus:ring-t_primary/20 transition-all resize-none hover:border-white/20"
                    placeholder="Describe tu idea, objetivos, presupuesto aproximado y cualquier detalle relevante..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-t_primary to-t_accent text-white font-bold text-lg hover:shadow-2xl hover:shadow-t_primary/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  Al enviar este formulario aceptas nuestra política de privacidad y tratamiento de datos.
                </p>
              </form>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ rápido */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Preguntas frecuentes</h2>
            <p className="text-gray-400 text-lg">Respuestas rápidas a las dudas más comunes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: '¿Cuánto tardan en responder?',
                a: 'Por WhatsApp respondemos en minutos. Por formulario o email, en menos de 24 horas hábiles.',
              },
              {
                q: '¿Las cotizaciones son gratuitas?',
                a: 'Sí, todas nuestras cotizaciones son 100% gratuitas y sin compromiso. Incluyen alcance detallado y tiempos estimados.',
              },
              {
                q: '¿Trabajan con clientes internacionales?',
                a: 'Por supuesto. Trabajamos con clientes en toda Latinoamérica y España. Reuniones virtuales y pagos online.',
              },
              {
                q: '¿Qué necesito para empezar?',
                a: 'Solo cuéntanos tu idea o problema. Te guiamos en todo el proceso y damos recomendaciones profesionales.',
              },
            ].map((faq, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-t_primary/50 transition-all duration-300">
                <h4 className="font-bold text-white mb-3 text-lg group-hover:text-t_primary transition-colors">{faq.q}</h4>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
