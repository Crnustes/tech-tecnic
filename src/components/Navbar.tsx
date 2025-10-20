'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          <span className="text-t_primary">TECH</span> TECNIC
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/#servicios" className="hover:text-t_primary">Servicios</Link>
          <Link href="/#proceso" className="hover:text-t_primary">Proceso</Link>
          <Link href="/#contacto" className="rounded-lg border px-3 py-1.5 hover:bg-t_primary hover:text-white transition">
            Cotiza
          </Link>
        </div>
      </nav>
    </header>
  )
}
