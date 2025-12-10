import type { Metadata } from 'next'
import DesarrolloWebClient from './DesarrolloWebClient'

export const metadata: Metadata = {
  title: 'Desarrollo Web Profesional | Agencia de Desarrollo Web LATAM – Tech Tecnic',
  description:
    'Agencia de desarrollo web profesional: creación de páginas web con WordPress, React, Elementor y WooCommerce. Diseño responsive, velocidad y SEO. Bogotá & LATAM.',
  keywords: [
    'desarrollo web',
    'agencia desarrollo web',
    'diseño web profesional',
    'WordPress desarrollo Bogotá',
    'React desarrollo web',
    'WooCommerce tienda online',
    'desarrollo web LATAM',
    'sitio web optimizado para SEO'
  ].join(', ')
}

export default function Page() {
  return <DesarrolloWebClient />
}
