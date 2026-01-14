'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica del newsletter
    console.log('Newsletter email:', email);
    setEmail('');
  };
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
    { name: 'SEO + GEO', href: '/servicios/seo-geo' },
    { name: 'IA y Automatización', href: '/servicios/automatizacion-ia' },
    { name: 'Integraciones', href: '/servicios/integraciones' },
  ];

  const company = [
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const social = [
    { name: 'Instagram', href: 'https://instagram.com/techtecnic', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/techtecnic', icon: Facebook },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/techtecnic', icon: Linkedin },
    { name: 'WhatsApp', href: 'https://wa.me/573337151064', icon: MessageCircle },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-48 h-12">
                <Image
                  src="/logo.png"
                  alt="Tech Tecnic"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Creamos experiencias digitales impulsadas por tecnología, diseño y automatización. 
              Tu éxito digital es nuestra misión.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:contacto@techtecnic.com"
                className="flex items-center gap-3 text-gray-400 hover:text-t_primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-t_primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contacto@techtecnic.com</span>
              </a>
              
              <a 
                href="tel:+573026742059"
                className="flex items-center gap-3 text-gray-400 hover:text-t_primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-t_primary/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+57 302 674 2059</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-t_primary/10 flex items-center justify-center text-gray-400 hover:text-t_primary transition-all hover:scale-110"
                      aria-label={item.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Mantente Actualizado
            </h3>
            <p className="text-gray-400 mb-6">
              Recibe tips, noticias y recursos sobre desarrollo web e IA
            </p>
            <form className="flex gap-3 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                name="newsletter-email"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                autoComplete="email"
                required
                suppressHydrationWarning
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-t_primary transition-colors"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-t_primary to-cyan-400 text-white font-semibold hover:scale-105 transition-transform"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Tech Tecnic. Todos los derechos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
            <Link href="/politica-de-privacidad" className="text-gray-500 hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-gray-500 hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="/politica-de-cookies" className="text-gray-500 hover:text-white transition-colors">Política de Cookies</Link>
            <Link href="/aviso-legal" className="text-gray-500 hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="/politica-de-tratamiento-de-datos" className="text-gray-500 hover:text-white transition-colors">Tratamiento de Datos</Link>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-t_primary to-transparent opacity-50" />
    </footer>
  );
}