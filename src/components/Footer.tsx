import Link from 'next/link'
import { Mail, Phone, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-24 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold text-t_accent mb-4">Tech Tecnic</h3>
          <p className="text-gray-400">
            Creamos experiencias digitales impulsadas por tecnología, diseño y automatización.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Servicios</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/servicios/desarrollo-web" className="hover:text-t_accent">Desarrollo Web</Link></li>
            <li><Link href="/servicios/seo-geo" className="hover:text-t_accent">SEO + GEO</Link></li>
            <li><Link href="/servicios/automatizacion-ia" className="hover:text-t_accent">IA y Automatización</Link></li>
            <li><Link href="/servicios/integraciones" className="hover:text-t_accent">Integraciones</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contacto</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2"><Mail size={16}/> contacto@techtecnic.com</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +57 302 674 2059</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Síguenos</h4>
          <div className="flex gap-4 text-t_accent">
            <Link href="#"><Instagram /></Link>
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Linkedin /></Link>
            <Link href="https://wa.me/573026742059"><MessageCircle /></Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Tech Tecnic. Todos los derechos reservados. |
        <Link href="/politica-de-privacidad" className="hover:text-t_accent ml-2">Política de Privacidad</Link> |
        <Link href="/terminos-y-condiciones" className="hover:text-t_accent ml-2">Términos y Condiciones</Link>
      </div>
    </footer>
  )
}
