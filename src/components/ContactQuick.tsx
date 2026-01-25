'use client'

import { contact } from '@/config/contact'
import * as Icons from 'lucide-react'
import { useLocale } from 'next-intl'
import SocialIcons from '@/components/SocialIcons'

const pageCopy = {
  es: {
    title: 'Conecta con Tech Tecnic',
    subtitle:
      'Escribenos para cotizar tu proyecto, resolver dudas o conocer como la automatizacion y la IA pueden impulsar tu empresa.',
    scheduleTitle: 'Horario de atencion',
    whatsappText: 'Tambien puedes escribirnos directamente por WhatsApp o seguirnos en nuestras redes sociales.',
    whatsappButton: 'Escribir por WhatsApp',
  },
  en: {
    title: 'Connect with Tech Tecnic',
    subtitle:
      'Write to us for a quote, to resolve questions, or to learn how automation and AI can boost your business.',
    scheduleTitle: 'Business hours',
    whatsappText: 'You can also write to us directly on WhatsApp or follow us on social media.',
    whatsappButton: 'Message on WhatsApp',
  },
}

export default function ContactQuick() {
  const locale = (useLocale() as 'es' | 'en') ?? 'es'
  const copy = pageCopy[locale] ?? pageCopy.es

  return (
    <section className="bg-t_dark text-white py-16 px-6 rounded-3xl shadow-lg mt-12 border border-white/10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {copy.title.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="text-t_accent">Tech Tecnic</span>
          </h2>
          <p className="text-gray-400 mb-6">{copy.subtitle}</p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Icons.Phone className="text-t_accent w-5 h-5" /> {contact.phone}
            </li>
            <li className="flex items-center gap-3">
              <Icons.Mail className="text-t_accent w-5 h-5" /> {contact.email}
            </li>
            <li className="flex items-center gap-3">
              <Icons.MapPin className="text-t_accent w-5 h-5" /> {contact.address}, {contact.city}, {contact.country}
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-sm uppercase text-gray-400 mb-2">{copy.scheduleTitle}</h4>
            <p className="text-sm">{contact.schedule.weekdays}</p>
            <p className="text-sm">{contact.schedule.saturday}</p>
            <p className="text-sm">{contact.schedule.sunday}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <p className="text-gray-300">{copy.whatsappText}</p>

          <a
            href={contact.socials.whatsapp}
            target="_blank"
            className="inline-flex items-center gap-2 bg-t_accent text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition"
          >
            <Icons.MessageCircle className="w-5 h-5" /> {copy.whatsappButton}
          </a>

          <SocialIcons variant="light" className="justify-center mt-4" />
        </div>
      </div>
    </section>
  )
}
