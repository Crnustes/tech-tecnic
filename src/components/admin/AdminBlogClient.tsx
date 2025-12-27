'use client';

import { Suspense } from 'react';
import { LogOut } from 'lucide-react';
import AdminLogin from '@/components/admin/AdminLogin';
import BlogForm from '@/components/admin/BlogForm';
import { useAdminAuth } from '@/hooks/useAdminAuth';

export default function AdminBlogClient() {
  const { isAuthenticated, isLoading, login, logout } = useAdminAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-t_primary/30 border-t-t_primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={login} isLoading={isLoading} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Header */}
      <header className="relative border-b border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">Admin Blog</h1>
              <span className="px-3 py-1 bg-t_primary/20 text-t_primary rounded-full text-sm">
                Crear Artículo
              </span>
            </div>
            <nav className="flex items-center gap-4">
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Cerrar Sesión
              </button>
              <a
                href="/blog"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Blog →
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Crear Nuevo Artículo</h2>
          <p className="text-gray-400">
            Completa el formulario para publicar un nuevo artículo en el blog
          </p>
        </div>

        <Suspense fallback={
          <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-t_primary/30 border-t-t_primary rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Cargando formulario...</p>
            </div>
          </div>
        }>
          <BlogForm />
        </Suspense>
      </main>
    </div>
  );
}