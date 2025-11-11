import { socials } from '@/config/socials'

export interface ContactInfo {
  phone: string
  email: string
  address: string
  city: string
  country: string
  schedule: {
    weekdays: string
    saturday: string
    sunday: string
  }
  socials: typeof socials
}

export const contact: ContactInfo = {
  phone: '+57 302 674 2059',
  email: 'contacto@techtecnic.com',
  address: 'Carrera 7 # 123 - 45, Bogotá',
  city: 'Bogotá',
  country: 'Colombia',
  schedule: {
    weekdays: 'Lunes a Viernes: 9:00 AM – 6:00 PM',
    saturday: 'Sábado: 9:00 AM – 1:00 PM',
    sunday: 'Domingo: Cerrado',
  },
  socials,
}
