'use client';

import { useState, useEffect, useCallback } from 'react';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'TechTecnic2024!'; // Contraseña por defecto más segura
const AUTH_KEY = 'techtecnic_admin_auth';
const AUTH_EXPIRY = 24 * 60 * 60 * 1000; // 24 horas

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAdminAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Verificar si hay una sesión válida guardada
  useEffect(() => {
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem(AUTH_KEY);
        if (!authData) {
          setAuthState(prev => ({ ...prev, isLoading: false }));
          return;
        }

        const { timestamp } = JSON.parse(authData);
        const now = Date.now();

        // Verificar si la sesión expiró
        if (now - timestamp > AUTH_EXPIRY) {
          localStorage.removeItem(AUTH_KEY);
          setAuthState(prev => ({ ...prev, isLoading: false }));
          return;
        }

        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error checking auth:', error);
        localStorage.removeItem(AUTH_KEY);
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    checkAuth();
  }, []);

  // Función de login
  const login = useCallback(async (password: string): Promise<boolean> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    // Simular delay de verificación
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === ADMIN_PASSWORD) {
      const authData = {
        timestamp: Date.now(),
        authenticated: true,
      };

      localStorage.setItem(AUTH_KEY, JSON.stringify(authData));

      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      return true;
    } else {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Contraseña incorrecta',
      }));

      return false;
    }
  }, []);

  // Función de logout
  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  }, []);

  return {
    isAuthenticated: authState.isAuthenticated,
    isLoading: authState.isLoading,
    error: authState.error,
    login,
    logout,
  };
}