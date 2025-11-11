export interface SiteConfig {
  name: string
  tagline: string
  description: string
  phone: string
  email: string
  address: string
  socials: typeof import('./socials').socials
}

export const siteConfig: SiteConfig = {
  name: "Tech Tecnic",
  tagline: "Innovación digital con propósito",
  description:
    "Agencia de desarrollo web, IA y automatización. Diseñamos experiencias digitales modernas y eficientes.",
  phone: "+57 302 674 2059",
  email: "contacto@techtecnic.com",
  address: "Bogotá, Colombia",
  socials: {
    ...import('./socials').socials,
  },
}
