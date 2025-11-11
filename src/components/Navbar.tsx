'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { servicios } from '@/config/servicios'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showServices, setShowServices] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-t_dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-t_accent tracking-tight">
          Tech<span className="text-white">Tecnic</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-200 relative">
          <Link href="/" className="hover:text-t_accent transition">
            Inicio
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button className="flex items-center gap-1 hover:text-t_accent transition">
              Servicios <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {showServices && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-3 w-[650px] bg-t_dark border border-white/10 rounded-2xl shadow-lg p-6 grid grid-cols-2 gap-4"
                >
                  {servicios.map((servicio) => (
                    <Link
                      key={servicio.name}
                      href={servicio.href}
                      className="block p-3 rounded-lg hover:bg-t_accent/10 transition group"
                    >
                      <h3 className="font-semibold text-t_accent group-hover:translate-x-1 transition-transform">
                        {servicio.name}
                      </h3>
                      <p className="text-sm text-gray-400">{servicio.description}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/proyectos" className="hover:text-t_accent transition">
            Proyectos
          </Link>

          <Link href="/contacto" className="hover:text-t_accent transition">
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-t_dark/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 text-xl"
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-t_accent transition">
              Inicio
            </Link>

            <details className="text-center">
              <summary className="cursor-pointer hover:text-t_accent transition">Servicios</summary>
              <div className="flex flex-col gap-4 mt-3">
                {servicios.map((servicio) => (
                  <Link
                    key={servicio.name}
                    href={servicio.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-t_accent transition"
                  >
                    {servicio.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/proyectos" onClick={() => setMenuOpen(false)} className="hover:text-t_accent transition">
              Proyectos
            </Link>

            <Link href="/contacto" onClick={() => setMenuOpen(false)} className="hover:text-t_accent transition">
              Contacto
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
