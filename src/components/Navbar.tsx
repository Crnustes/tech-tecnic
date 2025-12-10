"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { servicios } from "@/config/servicios";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/10 bg-t_dark/40">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="text-xl font-bold text-t_primary">
            Tech<span className="text-white">Tecnic</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="hover:text-t_accent transition">Inicio</Link>

            {/* MEGAMENU TRIGGER */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 hover:text-t_accent transition">
                Servicios <ChevronDown size={16} />
              </button>

              {/* MEGAMENU */}
              {open && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-[760px] rounded-2xl shadow-2xl border border-white/10 bg-t_dark/90 backdrop-blur-2xl p-8 grid grid-cols-3 gap-8 animate-fadeIn"
                >
                  {servicios.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="group block"
                      onMouseEnter={() => handleEnter()}
                    >
                      <h4 className="font-semibold text-white text-lg group-hover:text-t_primary transition">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-300 leading-snug group-hover:text-white transition">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/proyectos" className="hover:text-t_accent transition">
              Proyectos
            </Link>
            <Link href="/contacto" className="hover:text-t_accent transition">
              Contacto
            </Link>
          </div>

          {/* MOBILE */}
          <button className="md:hidden text-white" onClick={() => setMobile(true)}>
            Menu
          </button>
        </nav>
      </header>
    </>
  );
}
