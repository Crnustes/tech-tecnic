'use client';

import Link from 'next/link';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

interface ContactCTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
}

const pageCopy = {
  es: {
    title: 'Listo para comenzar tu proyecto?',
    description: 'Contactanos hoy y recibe una cotizacion personalizada sin compromiso.',
    primaryText: 'Hablar por WhatsApp',
    secondaryText: 'Enviar email',
    trust: 'Respuesta en menos de 24 horas - Atencion en Bogota',
    whatsappMessage: 'Hola Tech Tecnic, quiero informacion sobre sus servicios',
  },
  en: {
    title: 'Ready to start your project?',
    description: 'Contact us today and get a personalized quote with no commitment.',
    primaryText: 'Chat on WhatsApp',
    secondaryText: 'Send email',
    trust: 'Response in under 24 hours - Service in Bogota',
    whatsappMessage: 'Hi Tech Tecnic, I want information about your services',
  },
};

export default function ContactCTA({
  title,
  description,
  primaryText,
  secondaryText,
}: ContactCTAProps) {
  const locale = (useLocale() as 'es' | 'en') ?? 'es';
  const copy = pageCopy[locale] ?? pageCopy.es;

  const whatsappMessage = encodeURIComponent(copy.whatsappMessage);

  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-t_primary via-cyan-400 to-t_accent p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {title ?? copy.title}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {description ?? copy.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`https://wa.me/573026742059?text=${whatsappMessage}`}
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-t_dark rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {primaryText ?? copy.primaryText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="mailto:contacto@techtecnic.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                {secondaryText ?? copy.secondaryText}
              </Link>
            </div>

            <p className="text-white/80 text-sm mt-6">{copy.trust}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
