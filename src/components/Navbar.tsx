"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/config/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Menu, X,
  Code2, Smartphone, Search, BrainCircuit, PlugZap,
  ShieldCheck, Users
} from "lucide-react";

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
            <div className="relative w-56 h-16 transition-transform group-hover:scale-105">
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
              <AnimatePresence>
                {megamenuOpen && (
                  <motion.div 
                    className="absolute right-0 mt-6 w-[800px]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Triangle pointer */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-t_primary/20 to-t_accent/10 rotate-45 border-l border-t border-white/10"></div>
                    
                    <div className="relative rounded-2xl shadow-2xl border border-white/10 bg-gradient-to-br from-t_dark/95 via-t_dark/90 to-black/95 backdrop-blur-2xl overflow-hidden">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-t_primary/5 via-transparent to-t_accent/5 pointer-events-none"></div>
                      
                      <div className="relative p-8">
                        <div className="grid grid-cols-3 gap-6">
                          {navigation.main.find(item => item.name === 'Servicios')?.sublinks?.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className="group relative block p-6 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                                onClick={() => setMegamenuOpen(false)}
                              >
                                {/* Icon container with gradient background + real icon */}
                                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-t_primary/20 to-t_accent/20 flex items-center justify-center group-hover:scale-110 transition-transform text-white">
                                  {(() => {
                                    const name = item.name.toLowerCase();
                                    const size = 22;
                                    if (name.includes('desarrollo web')) return <Code2 size={size} />;
                                    if (name.includes('apps') || name.includes('móvil')) return <Smartphone size={size} />;
                                    if (name.includes('seo')) return <Search size={size} />;
                                    if (name.includes('ia') || name.includes('automat')) return <BrainCircuit size={size} />;
                                    if (name.includes('integrac')) return <PlugZap size={size} />;
                                    if (name.includes('mantenimiento')) return <ShieldCheck size={size} />;
                                    if (name.includes('agencias')) return <Users size={size} />;
                                    return <Code2 size={size} />;
                                  })()}
                                </div>
                                
                                <h4 className="font-semibold text-white text-base mb-2 group-hover:text-t_primary transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                  Servicio especializado para tu negocio digital
                                </p>

                                {/* Hover effect line */}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-t_primary to-t_accent group-hover:w-full transition-all duration-300"></div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA section at bottom */}
                        <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                        <p className="text-sm text-gray-400">
                          ¿No encuentras lo que buscas?
                        </p>
                        <Link 
                          href="/contacto"
                          className="px-6 py-2 rounded-full bg-gradient-to-r from-t_primary to-t_accent text-white text-sm font-medium hover:shadow-lg hover:shadow-t_primary/50 transition-all"
                          onClick={() => setMegamenuOpen(false)}
                        >
                          Contáctanos
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/blog" 
              className="text-sm font-medium hover:text-t_accent transition-colors relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-t_accent transition-all group-hover:w-full"></span>
            </Link>

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
          <div className="lg:hidden fixed inset-0 z-40">
            {/* Dim background */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Sliding panel */}
            <div className="absolute top-20 left-0 w-full bg-gradient-to-b from-t_dark via-slate-900 to-black border-t border-white/10 shadow-2xl rounded-t-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              <Link 
                href="/" 
                className="block py-2 hover:text-t_accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Inicio
              </Link>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-t_accent mb-3">Servicios</p>
                {navigation.main.find(item => item.name === 'Servicios')?.sublinks?.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 py-2 pr-2 hover:text-t_accent transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-white/5 text-white">
                      {(() => {
                        const name = item.name.toLowerCase();
                        const size = 18;
                        if (name.includes('desarrollo web')) return <Code2 size={size} />;
                        if (name.includes('apps') || name.includes('móvil')) return <Smartphone size={size} />;
                        if (name.includes('seo')) return <Search size={size} />;
                        if (name.includes('ia') || name.includes('automat')) return <BrainCircuit size={size} />;
                        if (name.includes('integrac')) return <PlugZap size={size} />;
                        if (name.includes('mantenimiento')) return <ShieldCheck size={size} />;
                        if (name.includes('agencias')) return <Users size={size} />;
                        return <Code2 size={size} />;
                      })()}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              <Link 
                href="/blog" 
                className="block py-2 hover:text-t_accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>

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
          </div>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}