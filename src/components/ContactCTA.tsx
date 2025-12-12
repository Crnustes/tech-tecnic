'use client';

import Link from 'next/link';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
}

export default function ContactCTA({
  title = '¿Listo para comenzar tu proyecto?',
  description = 'Contáctanos hoy y recibe una cotización personalizada sin compromiso.',
  primaryText = 'Hablar por WhatsApp',
  secondaryText = 'Enviar email',
}: ContactCTAProps) {
  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-t_primary via-cyan-400 to-t_accent p-12 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/573026742059?text=Hola%20Tech%20Tecnic,%20quiero%20información%20sobre%20sus%20servicios"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-t_dark rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {primaryText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="mailto:contacto@techtecnic.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                {secondaryText}
              </Link>
            </div>

            {/* Trust line */}
            <p className="text-white/80 text-sm mt-6">
              ⚡ Respuesta en menos de 24 horas • 📍 Atención en Bogotá
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}