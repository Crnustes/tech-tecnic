'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Evitar hidratación inmediata, renderizar después
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          
          {/* Button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white" />
            )}
          </div>
        </div>
      </button>

      {/* Popup Card */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-slide-up">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Tech Tecnic</h3>
                  <p className="text-sm text-green-100">Normalmente responde en minutos</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  👋 ¡Hola! ¿En qué podemos ayudarte hoy?
                </p>
              </div>

              <a
                href="https://wa.me/573026742059?text=👋%20Hola%20Tech%20Tecnic,%20quiero%20más%20información%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-center hover:scale-105 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Iniciar conversación
              </a>

              <p className="text-xs text-gray-500 text-center">
                +57 302 674 2059
              </p>
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