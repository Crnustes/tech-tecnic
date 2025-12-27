import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Panel Admin | Tech-Tecnic',
  description: 'Panel de administración',
  robots: 'noindex, nofollow',
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🎛️ Panel de Administración
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Gestiona todos los aspectos de Tech-Tecnic desde aquí
          </p>
        </div>

        {/* Admin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Gestión de Leads */}
          <Link href="/admin/leads">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary-500">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Gestión de Leads
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Administra contactos, oportunidades y el pipeline de ventas
              </p>
              <div className="flex items-center text-primary-600 font-semibold">
                Abrir Dashboard →
              </div>
            </div>
          </Link>

          {/* Blog */}
          <Link href="/admin/blog">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-secondary-500">
              <div className="text-5xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Gestión de Blog
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Crea y edita artículos del blog
              </p>
              <div className="flex items-center text-secondary-600 font-semibold">
                Ir al Blog Admin →
              </div>
            </div>
          </Link>

          {/* Estadísticas */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-gray-200 dark:border-gray-700">
            <div className="text-5xl mb-4 opacity-50">📊</div>
            <h2 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-3">
              Estadísticas
            </h2>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Métricas y reportes (próximamente)
            </p>
            <div className="flex items-center text-gray-400 font-semibold">
              Próximamente
            </div>
          </div>

          {/* Cotizaciones */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-gray-200 dark:border-gray-700">
            <div className="text-5xl mb-4 opacity-50">💰</div>
            <h2 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-3">
              Cotizaciones
            </h2>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Genera y gestiona propuestas (próximamente)
            </p>
            <div className="flex items-center text-gray-400 font-semibold">
              Próximamente
            </div>
          </div>

          {/* Clientes */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-gray-200 dark:border-gray-700">
            <div className="text-5xl mb-4 opacity-50">👥</div>
            <h2 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-3">
              Clientes
            </h2>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Gestión de clientes activos (próximamente)
            </p>
            <div className="flex items-center text-gray-400 font-semibold">
              Próximamente
            </div>
          </div>

          {/* Configuración */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-gray-200 dark:border-gray-700">
            <div className="text-5xl mb-4 opacity-50">⚙️</div>
            <h2 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-3">
              Configuración
            </h2>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Ajustes del sistema (próximamente)
            </p>
            <div className="flex items-center text-gray-400 font-semibold">
              Próximamente
            </div>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">⚡ Acciones Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="/admin/leads" 
              className="bg-white/10 backdrop-blur hover:bg-white/20 rounded-lg p-4 transition-all"
            >
              <div className="font-semibold mb-1">Ver Leads Nuevos</div>
              <div className="text-sm opacity-90">Revisa los últimos contactos</div>
            </a>
            <a 
              href="/admin/blog" 
              className="bg-white/10 backdrop-blur hover:bg-white/20 rounded-lg p-4 transition-all"
            >
              <div className="font-semibold mb-1">Crear Artículo</div>
              <div className="text-sm opacity-90">Publica contenido nuevo</div>
            </a>
            <a 
              href="/" 
              className="bg-white/10 backdrop-blur hover:bg-white/20 rounded-lg p-4 transition-all"
            >
              <div className="font-semibold mb-1">Ver Sitio Público</div>
              <div className="text-sm opacity-90">Revisa el sitio web</div>
            </a>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                ¿Primera vez aquí?
              </h4>
              <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                <li>• Revisa la documentación en PROTOCOLO-PRIMERA-REUNION.md</li>
                <li>• Configura Supabase siguiendo DATABASE-SETUP.md</li>
                <li>• Lee LEADS-SYSTEM-RESUMEN.md para entender el flujo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
