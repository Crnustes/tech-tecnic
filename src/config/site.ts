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
    "Agencia líder en desarrollo web, inteligencia artificial y automatización en Latinoamérica. Transformamos negocios con tecnología de vanguardia en Colombia, México, Argentina, Chile y toda LATAM.",
  phone: "+57 302 674 2059",
  email: "contacto@techtecnic.com",
  address: "Bogotá, Colombia | Servicios en toda Latinoamérica",
  socials: {
    ...import('./socials').socials,
  },
}
