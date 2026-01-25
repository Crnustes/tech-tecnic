'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from 'next-intl';

const pageCopy = {
  es: {
    aria: 'Contactar por WhatsApp',
    header: 'Tech Tecnic',
    response: 'Normalmente responde en minutos',
    message: 'Hola, en que podemos ayudarte hoy?',
    button: 'Iniciar conversacion',
  },
  en: {
    aria: 'Contact via WhatsApp',
    header: 'Tech Tecnic',
    response: 'Typically replies in minutes',
    message: 'Hi, how can we help you today?',
    button: 'Start conversation',
  },
};

export default function FloatingWhatsApp() {
  const locale = (useLocale() as 'es' | 'en') ?? 'es';
  const copy = pageCopy[locale] ?? pageCopy.es;
  const [isOpen, setIsOpen] = useState(false);

  const message = encodeURIComponent(copy.message);
  const href = `https://wa.me/573337151064?text=${message}`;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label={copy.aria}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />

          <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white" />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-slide-up">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{copy.header}</h3>
                  <p className="text-sm text-green-100">{copy.response}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">{copy.message}</p>
              </div>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-center hover:scale-105 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                {copy.button}
              </a>

              <p className="text-xs text-gray-500 text-center">+57 333 715 1064</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
