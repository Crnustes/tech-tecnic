import type { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, Calendar, Mail, Phone, Settings, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Cookies | Tech Tecnic',
  description: 'Política de cookies de Tech Tecnic. Conoce qué cookies utilizamos, para qué y cómo puedes gestionarlas.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Cookie className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">Cookies y Tecnologías</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Política de Cookies
          </h1>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Última actualización: Diciembre 26, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
            
            {/* Introducción */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">¿Qué son las Cookies?</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, smartphone) 
                  cuando visitas nuestro sitio web <strong className="text-white">techtecnic.com</strong>. Estas cookies nos 
                  permiten reconocer tu dispositivo y mejorar tu experiencia de navegación.
                </p>
                <p>
                  Esta Política de Cookies explica qué cookies utilizamos, por qué las utilizamos y cómo puedes controlarlas 
                  o eliminarlas.
                </p>
              </div>
            </div>

            {/* Tipos de Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Tipos de Cookies que Utilizamos</h2>
              <div className="text-gray-300 space-y-6 leading-relaxed">
                
                {/* Cookies Esenciales */}
                <div className="bg-slate-800/50 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">1. Cookies Estrictamente Necesarias</h3>
                      <p className="text-gray-300 mb-3">
                        Estas cookies son esenciales para que el sitio web funcione correctamente. No se pueden desactivar.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong className="text-white">Finalidad:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Mantener tu sesión activa</li>
                          <li>Recordar tus preferencias de privacidad</li>
                          <li>Seguridad y prevención de fraudes</li>
                          <li>Funcionalidad del carrito de compra</li>
                          <li>Balanceo de carga del servidor</li>
                        </ul>
                        <p className="mt-3"><strong className="text-white">Duración:</strong> Sesión o hasta 1 año</p>
                        <p><strong className="text-white">Ejemplos:</strong> session_id, csrf_token, cookie_consent</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies de Rendimiento */}
                <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Settings className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">2. Cookies de Rendimiento y Analíticas</h3>
                      <p className="text-gray-300 mb-3">
                        Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong className="text-white">Finalidad:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Análisis de tráfico y comportamiento de usuarios</li>
                          <li>Identificar páginas populares y rutas de navegación</li>
                          <li>Detectar errores técnicos</li>
                          <li>Medir tiempos de carga</li>
                          <li>Optimizar el rendimiento del sitio</li>
                        </ul>
                        <p className="mt-3"><strong className="text-white">Duración:</strong> Hasta 24 meses</p>
                        <p><strong className="text-white">Proveedores:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                          <li><strong className="text-white">Google Analytics:</strong> _ga, _gid, _gat</li>
                          <li><strong className="text-white">Vercel Analytics:</strong> __vercel_analytics_id</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies Funcionales */}
                <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg">
                      <Settings className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">3. Cookies de Funcionalidad</h3>
                      <p className="text-gray-300 mb-3">
                        Permiten que el sitio web recuerde tus elecciones y preferencias.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong className="text-white">Finalidad:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Recordar tu idioma preferido</li>
                          <li>Guardar preferencias de visualización</li>
                          <li>Recordar formularios parcialmente completados</li>
                          <li>Personalizar contenido según tu ubicación</li>
                        </ul>
                        <p className="mt-3"><strong className="text-white">Duración:</strong> Hasta 12 meses</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies de Marketing */}
                <div className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg">
                      <Cookie className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">4. Cookies de Marketing y Publicidad</h3>
                      <p className="text-gray-300 mb-3">
                        Se utilizan para mostrarte anuncios relevantes y medir la efectividad de campañas.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong className="text-white">Finalidad:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Mostrar publicidad relevante en otras plataformas</li>
                          <li>Limitar la frecuencia de anuncios</li>
                          <li>Medir efectividad de campañas publicitarias</li>
                          <li>Remarketing y retargeting</li>
                          <li>Análisis de conversiones</li>
                        </ul>
                        <p className="mt-3"><strong className="text-white">Duración:</strong> Hasta 24 meses</p>
                        <p><strong className="text-white">Proveedores:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                          <li><strong className="text-white">Google Ads:</strong> _gcl_au, IDE</li>
                          <li><strong className="text-white">Meta Pixel:</strong> _fbp, fr</li>
                          <li><strong className="text-white">LinkedIn Insight:</strong> li_sugr, UserMatchHistory</li>
                        </ul>
                        <p className="mt-3 text-yellow-400 text-xs">
                          ⚠️ Estas cookies requieren tu consentimiento explícito
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies de Redes Sociales */}
                <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/20 p-3 rounded-lg">
                      <Settings className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">5. Cookies de Redes Sociales</h3>
                      <p className="text-gray-300 mb-3">
                        Permiten compartir contenido en redes sociales y muestran contenido integrado.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p><strong className="text-white">Finalidad:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Botones de compartir en redes sociales</li>
                          <li>Integración de widgets sociales</li>
                          <li>Seguimiento de interacciones sociales</li>
                        </ul>
                        <p className="mt-3"><strong className="text-white">Proveedores:</strong> Facebook, LinkedIn, Instagram, TikTok</p>
                        <p className="mt-2"><strong className="text-white">Duración:</strong> Variable según proveedor</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Tabla de Cookies Específicas */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Lista Detallada de Cookies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="p-3 text-left">Nombre</th>
                      <th className="p-3 text-left">Tipo</th>
                      <th className="p-3 text-left">Duración</th>
                      <th className="p-3 text-left">Finalidad</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-mono text-xs">_ga</td>
                      <td className="p-3">Analítica</td>
                      <td className="p-3">2 años</td>
                      <td className="p-3">Distinguir usuarios únicos</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-mono text-xs">_gid</td>
                      <td className="p-3">Analítica</td>
                      <td className="p-3">24 horas</td>
                      <td className="p-3">Distinguir usuarios únicos</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-mono text-xs">_gat</td>
                      <td className="p-3">Analítica</td>
                      <td className="p-3">1 minuto</td>
                      <td className="p-3">Limitar solicitudes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-mono text-xs">_fbp</td>
                      <td className="p-3">Marketing</td>
                      <td className="p-3">3 meses</td>
                      <td className="p-3">Facebook Pixel - Seguimiento</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-mono text-xs">_gcl_au</td>
                      <td className="p-3">Marketing</td>
                      <td className="p-3">3 meses</td>
                      <td className="p-3">Google Ads - Conversiones</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-mono text-xs">cookie_consent</td>
                      <td className="p-3">Necesaria</td>
                      <td className="p-3">1 año</td>
                      <td className="p-3">Guardar preferencias de cookies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cómo Gestionar Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cómo Gestionar y Controlar las Cookies</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">1. Panel de Preferencias de Cookies</h3>
                  <p>
                    Puedes gestionar tus preferencias de cookies en cualquier momento haciendo clic en el banner de cookies 
                    o en el enlace "Configuración de Cookies" en el pie de página de nuestro sitio web.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2. Configuración del Navegador</h3>
                  <p className="mb-3">Puedes configurar tu navegador para bloquear o eliminar cookies:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-white">Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2 text-sm">
                        Ver guía →
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Firefox:</strong> Preferencias → Privacidad y seguridad
                      <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2 text-sm">
                        Ver guía →
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Safari:</strong> Preferencias → Privacidad
                      <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2 text-sm">
                        Ver guía →
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Edge:</strong> Configuración → Privacidad, búsqueda y servicios
                      <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2 text-sm">
                        Ver guía →
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3. Herramientas de Opt-Out de Terceros</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-white">Google Analytics:</strong> 
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2">
                        Complemento de inhabilitación
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Network Advertising Initiative:</strong> 
                      <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2">
                        optout.networkadvertising.org
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Your Online Choices:</strong> 
                      <a href="http://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2">
                        youronlinechoices.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                  <p className="text-sm text-yellow-200">
                    <strong>⚠️ Importante:</strong> Desactivar ciertas cookies puede afectar la funcionalidad del sitio web 
                    y tu experiencia de navegación. Algunas funcionalidades pueden no estar disponibles.
                  </p>
                </div>

              </div>
            </div>

            {/* Cookies de Terceros */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies de Terceros</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Algunos de nuestros socios de confianza también establecen cookies cuando visitas nuestro sitio. 
                  No controlamos estas cookies de terceros y te recomendamos revisar las políticas de privacidad de estos servicios:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Google Analytics:</strong> 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Facebook/Meta:</strong> 
                    <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">LinkedIn:</strong> 
                    <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">Vercel:</strong> 
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-2">
                      Política de Privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Actualizaciones */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Actualizaciones de esta Política</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que 
                  utilizamos o por razones operativas, legales o regulatorias. Te recomendamos revisar esta página regularmente 
                  para estar informado sobre cómo utilizamos las cookies.
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Si tienes preguntas sobre nuestra Política de Cookies:</p>
                <div className="bg-slate-800/50 border border-orange-500/20 rounded-xl p-6 mt-4">
                  <div className="space-y-3">
                    <p className="text-white font-semibold">Tech Tecnic</p>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-400" />
                      <a href="mailto:contacto@techtecnic.com" className="text-orange-400 hover:text-orange-300">
                        contacto@techtecnic.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-orange-400" />
                      <a href="tel:+573026742059" className="text-orange-400 hover:text-orange-300">
                        +57 302 674 2059
                      </a>
                    </div>
                    <p className="text-gray-400 text-sm">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 text-center">
                <p className="text-gray-300 mb-4">
                  ¿Quieres saber más sobre cómo protegemos tu privacidad?
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/politica-privacidad"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                  >
                    Ver Política de Privacidad
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                  >
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
