'use client'

import { contact } from '@/config/contact'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href={contact.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-t_accent text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
