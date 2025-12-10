import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Tecnic | Agencia de Desarrollo Web y Automatización',
  description:
    'Tech Tecnic crea sitios web, estrategias SEO, automatizaciones y soluciones con IA para empresas de LATAM. Potenciamos tu presencia digital.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-t_dark text-white min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
