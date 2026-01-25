'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { useLocale } from 'next-intl';
import NoSSR from '@/components/NoSSR';

const pageCopy = {
  es: {
    titleTop: 'Listo para',
    titleBottom: 'impulsar tu proyecto?',
    subtitle:
      'Cuentanos tu idea y transformemosla en una experiencia digital que genera resultados reales. Respondemos en menos de 24 horas.',
    emailLabel: 'Email',
    phoneLabel: 'Telefono',
    locationLabel: 'Ubicacion',
    locationText: 'Bogota, Colombia',
    stats: [
      { value: '24h', label: 'Tiempo de respuesta' },
      { value: '50+', label: 'Proyectos exitosos' },
      { value: '5.0', label: 'Calificacion' },
    ],
    form: {
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo electronico',
      emailPlaceholder: 'tu@email.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuentanos sobre tu proyecto...',
      sending: 'Enviando...',
      sent: 'Mensaje enviado!',
      submit: 'Enviar mensaje',
      success: 'Tu mensaje fue enviado correctamente. Te responderemos pronto.',
    },
    whatsappMessage: 'Hola, quiero informacion sobre sus servicios',
  },
  en: {
    titleTop: 'Ready to',
    titleBottom: 'boost your project?',
    subtitle:
      'Tell us your idea and we will turn it into a digital experience that delivers real results. We reply in under 24 hours.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    locationText: 'Bogota, Colombia',
    stats: [
      { value: '24h', label: 'Response time' },
      { value: '50+', label: 'Successful projects' },
      { value: '5.0', label: 'Rating' },
    ],
    form: {
      nameLabel: 'Full name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your project...',
      sending: 'Sending...',
      sent: 'Message sent!',
      submit: 'Send message',
      success: 'Your message was sent successfully. We will reply soon.',
    },
    whatsappMessage: 'Hi, I want information about your services',
  },
};

export default function Contact() {
  const locale = (useLocale() as 'es' | 'en') ?? 'es';
  const copy = pageCopy[locale] ?? pageCopy.es;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const whatsappMessage = encodeURIComponent(
        `Hola, soy ${form.name}\nEmail: ${form.email}\nMensaje: ${form.message}\nEnviado desde techtecnic.com`
      );
      window.open(`https://wa.me/573026742059?text=${whatsappMessage}`, '_blank');

      setSent(true);
      setForm({ name: '', email: '', message: '' });

      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {copy.titleTop}
                </span>
                <br />
                <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
                  {copy.titleBottom}
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">{copy.subtitle}</p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:contacto@techtecnic.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-t_primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-t_primary to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{copy.emailLabel}</p>
                  <p className="text-white font-medium">contacto@techtecnic.com</p>
                </div>
              </a>

              <a
                href="tel:+573026742059"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-t_primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{copy.phoneLabel}</p>
                  <p className="text-white font-medium">+57 302 674 2059</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{copy.locationLabel}</p>
                  <p className="text-white font-medium">{copy.locationText}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {copy.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-t_primary to-t_accent rounded-2xl blur-xl opacity-20" />
            <NoSSR fallback={<div>Cargando formulario...</div>}>
              <form
                onSubmit={handleSubmit}
                className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                    {copy.form.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={copy.form.namePlaceholder}
                    required
                    autoComplete="name"
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-t_primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                    {copy.form.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={copy.form.emailPlaceholder}
                    required
                    autoComplete="email"
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-t_primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                    {copy.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={copy.form.messagePlaceholder}
                    rows={5}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-t_primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-t_primary to-cyan-400 text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-t_primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {copy.form.sending}
                      </>
                    ) : sent ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        {copy.form.sent}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        {copy.form.submit}
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-t_accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                {sent && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center">
                    {copy.form.success}
                  </div>
                )}
              </form>
            </NoSSR>
          </div>
        </div>
      </div>
    </section>
  );
}
