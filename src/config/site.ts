import { socials } from './socials'

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  phone: string
  email: string
  address: string
  socials: typeof socials
}

export const siteConfig: SiteConfig = {
  name: "Tech Tecnic",
  tagline: "Innovacion digital con proposito",
  description:
    "Agencia de desarrollo web, IA y automatizacion. Disenamos experiencias digitales modernas y eficientes.",
  phone: "+57 333 715 1064",
  email: "contacto@techtecnic.com",
  address: "Bogota, Colombia",
  socials,
}
