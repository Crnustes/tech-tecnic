'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 text-white">Error Fatal</h1>
            <p className="text-xl text-gray-300 mb-8">
              Lo sentimos, ha ocurrido un error crítico en la aplicación.
            </p>
            <button
              onClick={reset}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
