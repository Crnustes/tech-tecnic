import type { Metadata } from 'next'
import SeoGeoClient from './SeoGeoClient'

export const metadata: Metadata = {
  title: 'Optimización SEO + GEO | Posicionamiento Web Profesional | Tech Tecnic',
  description:
    'Servicios SEO + GEO: mejora tu posicionamiento orgánico y local con estrategias avanzadas de optimización, análisis de palabras clave y contenido inteligente. Agencia SEO en LATAM.',
  keywords: [
    'SEO',
    'posicionamiento web',
    'optimización SEO',
    'agencia SEO Bogotá',
    'SEO local Colombia',
    'SEO técnico',
    'estrategia de contenido',
    'posicionamiento orgánico',
    'Google My Business',
    'SEO LATAM'
  ].join(', ')
}

export default function Page() {
  return <SeoGeoClient />
}
