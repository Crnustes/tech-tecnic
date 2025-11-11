'use client'

import { contact } from '@/config/contact'
import * as Icons from 'lucide-react'
import SocialIcons from '@/components/SocialIcons'

export default function ContactQuick() {
  return (
    <section className="bg-t_dark text-white py-16 px-6 rounded-3xl shadow-lg mt-12 border border-white/10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Información de contacto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Conecta con <span className="text-t_accent">Tech Tecnic</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Escríbenos para cotizar tu proyecto, resolver dudas o conocer cómo la automatización y la IA pueden
            impulsar tu empresa.
          </p>

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
            <h4 className="text-sm uppercase text-gray-400 mb-2">Horario de atención</h4>
            <p className="text-sm">{contact.schedule.weekdays}</p>
            <p className="text-sm">{contact.schedule.saturday}</p>
            <p className="text-sm">{contact.schedule.sunday}</p>
          </div>
        </div>

        {/* Redes y CTA */}
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <p className="text-gray-300">
            También puedes escribirnos directamente por WhatsApp o seguirnos en nuestras redes sociales.
          </p>

          <a
            href={contact.socials.whatsapp}
            target="_blank"
            className="inline-flex items-center gap-2 bg-t_accent text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition"
          >
            <Icons.MessageCircle className="w-5 h-5" /> Escribir por WhatsApp
          </a>

          <SocialIcons variant="light" className="justify-center mt-4" />
        </div>
      </div>
    </section>
  )
}
