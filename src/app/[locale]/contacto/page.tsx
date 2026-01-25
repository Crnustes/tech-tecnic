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
  Sparkles,
} from 'lucide-react'
import { useLocale } from 'next-intl'
import { contact } from '@/config/contact'
import WhatsAppButton from '@/components/WhatsAppButton'

const pageCopy = {
  es: {
    badge: 'Contactanos hoy',
    titleTop: 'Hablemos de',
    titleBottom: 'tu proyecto',
    subtitle:
      'Estamos listos para transformar tus ideas en realidad digital. Elige la forma mas facil de contactarnos.',
    whatsappTitle: 'Prefieres WhatsApp?',
    whatsappText: 'Chatea con nosotros y recibe respuesta inmediata',
    whatsappMessage: 'Hola, quiero informacion sobre sus servicios',
    whatsappCta: 'Chatear ahora',
    callTitle: 'Llamanos',
    emailTitle: 'Escribenos',
    locationTitle: 'Ubicacion',
    locationText: 'Bogota, Colombia',
    hoursTitle: 'Horarios de atencion',
    schedule: {
      weekdays: 'Lun - Vie: 9:00 AM - 6:00 PM',
      saturday: 'Sab: 10:00 AM - 2:00 PM',
      sunday: 'Dom: Cerrado',
    },
    socialTitle: 'Siguenos en redes',
    formTitle: 'Envianos un mensaje',
    formSubtitle: 'Completa el formulario y te contactaremos pronto',
    successTitle: 'Mensaje enviado exitosamente!',
    successText: 'Te contactaremos muy pronto.',
    errorTitle: 'No pudimos enviar el mensaje',
    errorText: 'Intenta de nuevo o escribenos por WhatsApp.',
    form: {
      nameLabel: 'Nombre completo *',
      namePlaceholder: 'Juan Perez',
      emailLabel: 'Email *',
      messageLabel: 'Cuentanos sobre tu proyecto *',
      messagePlaceholder:
        'Describe tu idea, objetivos, presupuesto aproximado y cualquier detalle relevante...',
      submitIdle: 'Enviar mensaje',
      submitLoading: 'Enviando mensaje...',
      privacyText:
        'Al enviar este formulario aceptas nuestra politica de privacidad y tratamiento de datos.',
    },
    faqTitle: 'Preguntas frecuentes',
    faqSubtitle: 'Respuestas rapidas a las dudas mas comunes',
    faqs: [
      {
        q: 'Cuanto tardan en responder?',
        a: 'Por WhatsApp respondemos en minutos. Por formulario o email, en menos de 24 horas habiles.',
      },
      {
        q: 'Las cotizaciones son gratuitas?',
        a: 'Si, todas nuestras cotizaciones son 100% gratuitas y sin compromiso. Incluyen alcance detallado y tiempos estimados.',
      },
      {
        q: 'Trabajan con clientes internacionales?',
        a: 'Por supuesto. Trabajamos con clientes en toda Latinoamerica y Espana. Reuniones virtuales y pagos online.',
      },
      {
        q: 'Que necesito para empezar?',
        a: 'Solo cuentanos tu idea o problema. Te guiamos en todo el proceso y damos recomendaciones profesionales.',
      },
    ],
  },
  en: {
    badge: 'Contact us today',
    titleTop: 'Lets talk about',
    titleBottom: 'your project',
    subtitle:
      'We are ready to turn your ideas into digital reality. Choose the easiest way to reach us.',
    whatsappTitle: 'Prefer WhatsApp?',
    whatsappText: 'Chat with us and get an immediate response',
    whatsappMessage: 'Hi, I want information about your services',
    whatsappCta: 'Chat now',
    callTitle: 'Call us',
    emailTitle: 'Email us',
    locationTitle: 'Location',
    locationText: 'Bogota, Colombia',
    hoursTitle: 'Business hours',
    schedule: {
      weekdays: 'Mon - Fri: 9:00 AM - 6:00 PM',
      saturday: 'Sat: 10:00 AM - 2:00 PM',
      sunday: 'Sun: Closed',
    },
    socialTitle: 'Follow us',
    formTitle: 'Send us a message',
    formSubtitle: 'Complete the form and we will get back to you soon',
    successTitle: 'Message sent successfully!',
    successText: 'We will contact you soon.',
    errorTitle: 'We could not send your message',
    errorText: 'Please try again or message us on WhatsApp.',
    form: {
      nameLabel: 'Full name *',
      namePlaceholder: 'Juan Perez',
      emailLabel: 'Email *',
      messageLabel: 'Tell us about your project *',
      messagePlaceholder:
        'Describe your idea, goals, estimated budget, and any relevant details...',
      submitIdle: 'Send message',
      submitLoading: 'Sending message...',
      privacyText:
        'By sending this form you accept our privacy policy and data processing terms.',
    },
    faqTitle: 'Frequently asked questions',
    faqSubtitle: 'Quick answers to the most common questions',
    faqs: [
      {
        q: 'How fast do you reply?',
        a: 'WhatsApp replies are in minutes. Form or email requests are answered in less than 24 business hours.',
      },
      {
        q: 'Are quotes free?',
        a: 'Yes, all quotes are 100% free and with no commitment. They include scope details and estimated timelines.',
      },
      {
        q: 'Do you work with international clients?',
        a: 'Absolutely. We work with clients across Latin America and Spain. We do virtual meetings and online payments.',
      },
      {
        q: 'What do I need to get started?',
        a: 'Just tell us your idea or problem. We guide you through the process and give professional recommendations.',
      },
    ],
  },
}

type LocaleKey = keyof typeof pageCopy

export default function ContactoPage() {
  const locale = useLocale() as LocaleKey
  const copy = pageCopy[locale] ?? pageCopy.es

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    if (typeof window !== 'undefined' && 'dataLayer' in window) {
      const dataLayer = (window as any).dataLayer
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: 'form_submit',
          eventCategory: 'Contact',
          eventAction: 'submit_contact_form',
          eventLabel: 'contact_page',
          formName: 'contact_page',
        })
      }
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company,
          locale,
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '', company: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <span className="text-sm text-t_primary font-medium">{copy.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              {copy.titleTop}
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              {copy.titleBottom}
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-emerald-500/5 border-2 border-green-500/30 hover:border-green-400/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/50">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{copy.whatsappTitle}</h3>
                <p className="text-gray-300 mb-6 text-sm">{copy.whatsappText}</p>
                <WhatsAppButton
                  message={copy.whatsappMessage}
                  service="contacto"
                  action="click_cta_hero"
                  label="WhatsApp Contact"
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    {copy.whatsappCta}
                    <MessageCircle className="w-5 h-5" />
                  </span>
                </WhatsAppButton>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-t_primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-t_primary to-t_accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">{copy.callTitle}</h4>
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
                  <h4 className="font-bold text-white mb-2 text-lg">{copy.emailTitle}</h4>
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
                  <h4 className="font-bold text-white mb-2 text-lg">{copy.locationTitle}</h4>
                  <p className="text-gray-300 text-lg">{copy.locationText}</p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-t_primary/5 to-t_accent/5 border border-t_primary/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-t_primary to-t_accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 text-lg">{copy.hoursTitle}</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <p>{copy.schedule.weekdays}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <p>{copy.schedule.saturday}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <p>{copy.schedule.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <h4 className="font-bold text-white mb-4 text-lg">{copy.socialTitle}</h4>
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

          <div className="lg:col-span-3">
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-t_primary/5 to-t_accent/5 rounded-3xl"></div>

              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{copy.formTitle}</h3>
                  <p className="text-gray-400">{copy.formSubtitle}</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 flex items-center gap-3 shadow-lg shadow-green-500/20">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold">{copy.successTitle}</p>
                      <p className="text-green-300 text-sm">{copy.successText}</p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-red-500/20 to-rose-500/20 border-2 border-red-400/50 shadow-lg shadow-red-500/20">
                    <p className="text-red-300 font-semibold">{copy.errorTitle}</p>
                    <p className="text-red-200 text-sm">{copy.errorText}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        {copy.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:border-t_primary focus:outline-none focus:ring-4 focus:ring-t_primary/20 transition-all hover:border-white/20"
                        placeholder={copy.form.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        {copy.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:border-t_primary focus:outline-none focus:ring-4 focus:ring-t_primary/20 transition-all hover:border-white/20"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      {copy.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      maxLength={2000}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:border-t_primary focus:outline-none focus:ring-4 focus:ring-t_primary/20 transition-all resize-none hover:border-white/20"
                      placeholder={copy.form.messagePlaceholder}
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
                        {copy.form.submitLoading}
                      </>
                    ) : (
                      <>
                        {copy.form.submitIdle}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    {copy.form.privacyText}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">{copy.faqTitle}</h2>
            <p className="text-gray-400 text-lg">{copy.faqSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {copy.faqs.map((faq, i) => (
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
