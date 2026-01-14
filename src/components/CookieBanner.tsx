"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_COOKIE = "tt_cookie_consent";
const ANALYTICS_COOKIE = "tt_cookie_analytics";
const MARKETING_COOKIE = "tt_cookie_marketing";
const CONSENT_MAX_AGE_SECONDS = 365 * 24 * 60 * 60; // 1 año

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const consent = getCookie(CONSENT_COOKIE);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    setCookie(CONSENT_COOKIE, "accepted", CONSENT_MAX_AGE_SECONDS);
    setCookie(ANALYTICS_COOKIE, "accepted", CONSENT_MAX_AGE_SECONDS);
    setCookie(MARKETING_COOKIE, "accepted", CONSENT_MAX_AGE_SECONDS);
    try {
      window.localStorage.setItem(CONSENT_COOKIE, "accepted");
      window.localStorage.setItem(ANALYTICS_COOKIE, "accepted");
      window.localStorage.setItem(MARKETING_COOKIE, "accepted");
    } catch {}
    setVisible(false);
  };

  const savePreferences = () => {
    setCookie(CONSENT_COOKIE, "accepted", CONSENT_MAX_AGE_SECONDS);
    setCookie(ANALYTICS_COOKIE, analyticsEnabled ? "accepted" : "denied", CONSENT_MAX_AGE_SECONDS);
    setCookie(MARKETING_COOKIE, marketingEnabled ? "accepted" : "denied", CONSENT_MAX_AGE_SECONDS);
    try {
      window.localStorage.setItem(CONSENT_COOKIE, "accepted");
      window.localStorage.setItem(ANALYTICS_COOKIE, analyticsEnabled ? "accepted" : "denied");
      window.localStorage.setItem(MARKETING_COOKIE, marketingEnabled ? "accepted" : "denied");
    } catch {}
    setConfigOpen(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-[60]">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0a0e1a]/95 backdrop-blur-xl shadow-2xl">
          <div className="px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm sm:text-base text-gray-200">
                Usamos cookies esenciales y opcionales (analítica y marketing) para mejorar tu experiencia.
                Consulta la <Link href="/politica-de-cookies" className="text-t_primary hover:underline">Política de Cookies</Link>.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setConfigOpen(true)} className="text-gray-400 hover:text-white text-sm sm:text-base">Configurar</button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-t_primary to-t_accent text-white text-sm sm:text-base font-semibold hover:scale-105 transition-all"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>

      {configOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setConfigOpen(false)}></div>
          <div className="relative w-full max-w-lg mx-4 rounded-2xl border border-white/10 bg-[#0a0e1a] p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Preferencias de Cookies</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Analítica</p>
                  <p className="text-xs text-gray-400">Ayuda a medir visitas y rendimiento (GA4/GTM).</p>
                </div>
                <button
                  onClick={() => setAnalyticsEnabled(v => !v)}
                  className={`px-3 py-1.5 rounded-full text-sm ${analyticsEnabled ? 'bg-green-600' : 'bg-gray-700'} text-white`}
                >{analyticsEnabled ? 'Activado' : 'Desactivado'}</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Marketing</p>
                  <p className="text-xs text-gray-400">Permite campañas y contenidos personalizados.</p>
                </div>
                <button
                  onClick={() => setMarketingEnabled(v => !v)}
                  className={`px-3 py-1.5 rounded-full text-sm ${marketingEnabled ? 'bg-green-600' : 'bg-gray-700'} text-white`}
                >{marketingEnabled ? 'Activado' : 'Desactivado'}</button>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setConfigOpen(false)} className="text-gray-400 hover:text-white">Cancelar</button>
              <button
                onClick={savePreferences}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-t_primary to-t_accent text-white font-semibold hover:scale-105 transition-all"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
