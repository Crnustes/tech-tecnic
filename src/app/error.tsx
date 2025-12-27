'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-t_dark via-gray-900 to-t_dark px-4">
      <div className="text-center max-w-2xl">
        {/* Ícono de error */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          ¡Oops! Algo salió mal
        </h1>
        
        {/* Descripción */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Hemos encontrado un error inesperado. No te preocupes, 
          nuestro equipo ha sido notificado y estamos trabajando en solucionarlo.
        </p>

        {/* Mensaje de error en dev */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
            <p className="text-sm text-red-300 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}
        
        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-gradient-to-r from-t_primary to-t_accent text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-t_primary/50 transform hover:scale-105 transition-all duration-300"
          >
            Intentar de nuevo
          </button>
          <Link 
            href="/"
            className="px-8 py-4 border-2 border-t_primary text-white font-semibold rounded-lg hover:bg-t_primary/10 hover:shadow-lg transition-all duration-300"
          >
            Volver al Inicio
          </Link>
          <Link 
            href="/contacto"
            className="px-8 py-4 border-2 border-t_accent text-white font-semibold rounded-lg hover:bg-t_accent/10 hover:shadow-lg transition-all duration-300"
          >
            Reportar Error
          </Link>
        </div>
      </div>
    </div>
  );
}
