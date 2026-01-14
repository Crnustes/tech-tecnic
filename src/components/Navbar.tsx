"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicios } from "@/config/servicios";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [megamenuOpen, setMegamenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegamenuOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setMegamenuOpen(false), 300);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-t_dark/80">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="relative z-10 flex items-center group">
            <div className="relative w-40 h-12 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png" // Coloca tu logo en /public/logo.png
                alt="Tech Tecnic Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-t_accent transition-colors relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-t_accent transition-all group-hover:w-full"></span>
            </Link>

            {/* MEGAMENU TRIGGER */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-t_accent transition-colors group">
                Servicios 
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${megamenuOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-t_accent transition-all group-hover:w-full"></span>
              </button>

              {/* MEGAMENU DROPDOWN */}
              {megamenuOpen && (
                <div className="absolute right-0 sm:right-2 lg:right-4 mt-8 w-[88vw] max-w-[1150px] xl:max-w-[1100px] z-50">
                  {/* Triangle pointer */}
                  <div className="absolute -top-2 right-6 sm:right-10 lg:right-12 w-4 h-4 bg-[#0a0e1a] rotate-45 border-l border-t border-white/30"></div>
                  
                  <div className="relative rounded-3xl shadow-2xl border-2 border-white/30 bg-[#0a0e1a] backdrop-blur-3xl overflow-hidden">
                    {/* Dark overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-[#0a0e1a]/90 to-black/50 pointer-events-none"></div>
                    {/* Subtle gradient accents */}
                    <div className="absolute inset-0 bg-gradient-to-br from-t_primary/5 via-transparent to-t_accent/5 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-t_primary/50 to-transparent"></div>
                    
                    <div className="relative p-4 sm:p-6 lg:p-8">
                      {/* Header */}
                      <div className="text-center mb-4 sm:mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">Nuestros Servicios</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Soluciones digitales para hacer crecer tu negocio</p>
                      </div>

                      {/* Services Grid - 4 columnas en desktop */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        {servicios.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className="group relative p-4 rounded-2xl bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-300 border-2 border-white/10 hover:border-t_primary/50"
                            onClick={() => setMegamenuOpen(false)}
                          >
                            {/* Icon container with gradient background */}
                            <div className="mb-3 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-t_primary to-t_accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-t_primary/20">
                              {item.icon && <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
                            </div>
                            
                            <h4 className="font-bold text-white text-sm sm:text-base mb-1.5 group-hover:text-t_primary transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-2">
                              {item.description}
                            </p>

                            {/* Hover effect line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-t_primary via-t_accent to-t_primary opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-2xl"></div>
                          </Link>
                        ))}
                      </div>

                      {/* CTA section at bottom */}
                      <div className="pt-4 sm:pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-gradient-to-r from-t_primary/5 to-t_accent/5 rounded-xl p-4 sm:p-5">
                        <div className="text-center sm:text-left">
                          <p className="text-white font-semibold mb-1 text-sm sm:text-base">¿No encuentras lo que buscas?</p>
                          <p className="text-xs sm:text-sm text-gray-400">Cuéntanos tu proyecto y te ayudamos</p>
                        </div>
                        <Link 
                          href="/contacto"
                          className="group flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-t_primary to-t_accent text-white text-sm sm:text-base font-semibold hover:shadow-2xl hover:shadow-t_primary/50 hover:scale-105 transition-all whitespace-nowrap"
                          onClick={() => setMegamenuOpen(false)}
                        >
                          Contáctanos
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/proyectos" 
              className="text-sm font-medium hover:text-t_accent transition-colors relative group"
            >
              Proyectos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-t_accent transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contacto" 
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-t_primary to-t_accent text-white text-sm font-medium hover:shadow-lg hover:shadow-t_primary/50 transition-all hover:scale-105"
            >
              Contacto
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full z-40 px-4">
            <div className="rounded-2xl border border-white/10 bg-[#0b1020]/95 backdrop-blur-xl shadow-2xl px-6 py-6 space-y-4 text-white">
              <Link 
                href="/" 
                className="block py-2 hover:text-t_accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Inicio
              </Link>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-t_accent mb-3">Servicios</p>
                {servicios.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block py-2 pl-4 hover:text-t_accent hover:pl-6 transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link 
                href="/proyectos" 
                className="block py-2 hover:text-t_accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Proyectos
              </Link>
              
              <Link 
                href="/contacto" 
                className="block w-full text-center py-3 mt-4 rounded-full bg-gradient-to-r from-t_primary to-t_accent text-white font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}