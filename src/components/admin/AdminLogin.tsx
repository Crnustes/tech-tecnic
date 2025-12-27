'use client';

import { useState } from 'react';
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => Promise<boolean>;
  isLoading?: boolean;
}

export default function AdminLogin({ onLogin, isLoading = false }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!password.trim()) {
      setError('Por favor ingresa la contraseña');
      return;
    }

    const success = await onLogin(password);
    if (!success) {
      setAttempts(prev => prev + 1);
      setError(`Contraseña incorrecta. Intentos restantes: ${2 - attempts}`);

      if (attempts >= 2) {
        setError('Demasiados intentos fallidos. Intenta de nuevo más tarde.');
        setTimeout(() => {
          setAttempts(0);
          setError('');
        }, 30000); // 30 segundos de bloqueo
      }
    }
  };

  const isBlocked = attempts >= 3;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-t_primary/20 rounded-full mb-4">
            <Lock className="w-8 h-8 text-t_primary" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Panel de Administración</h1>
          <p className="text-gray-400">Ingresa la contraseña para acceder al blog admin</p>
        </div>

        {/* Login Form */}
        <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-t_primary focus:outline-none transition-colors pr-12"
                  placeholder="Ingresa la contraseña"
                  disabled={isLoading || isBlocked}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  disabled={isLoading || isBlocked}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || isBlocked || !password.trim()}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-t_primary hover:bg-t_primary/80 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verificando...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Acceder
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-blue-400 text-sm text-center">
              🔒 Esta área está protegida. Solo personal autorizado puede acceder.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            ¿Olvidaste la contraseña? Contacta al administrador del sistema.
          </p>
        </div>
      </div>
    </div>
  );
}