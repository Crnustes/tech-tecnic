import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Calendar, Mail, Phone, Lock, Eye, Database, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Tech Tecnic',
  description: 'Política de privacidad y protección de datos personales de Tech Tecnic. Conoce cómo recopilamos, usamos y protegemos tu información.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Shield className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Protección de Datos</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Política de Privacidad
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
              <h2 className="text-2xl font-bold text-white mb-4">Introducción</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  En <strong className="text-white">Tech Tecnic</strong>, nos tomamos muy en serio la privacidad y seguridad 
                  de tus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y 
                  protegemos tu información personal cuando utilizas nuestro sitio web <strong className="text-white">techtecnic.com</strong> 
                  y nuestros servicios.
                </p>
                <p>
                  Cumplimos con las leyes de protección de datos aplicables en Colombia y Latinoamérica, incluyendo la 
                  Ley 1581 de 2012 de Colombia, el Reglamento General de Protección de Datos (GDPR) de la Unión Europea 
                  cuando corresponda, y otras regulaciones locales de privacidad.
                </p>
              </div>
            </div>

            {/* 1. Responsable del Tratamiento */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-purple-400" />
                1. Responsable del Tratamiento de Datos
              </h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">Razón Social:</strong> Tech Tecnic</p>
                <p><strong className="text-white">Sitio Web:</strong> techtecnic.com</p>
                <p><strong className="text-white">Email:</strong> contacto@techtecnic.com</p>
                <p><strong className="text-white">Teléfono:</strong> +57 302 674 2059</p>
                <p><strong className="text-white">Ubicación:</strong> Bogotá, Colombia</p>
              </div>
            </div>

            {/* 2. Información que Recopilamos */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-purple-400" />
                2. Información que Recopilamos
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">2.1 Información que nos proporcionas directamente:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Datos de contacto:</strong> Nombre, email, teléfono, empresa, cargo</li>
                    <li><strong className="text-white">Información comercial:</strong> Detalles del proyecto, presupuesto, preferencias de servicio</li>
                    <li><strong className="text-white">Información de facturación:</strong> Dirección fiscal, NIT/RUT, información de pago</li>
                    <li><strong className="text-white">Comunicaciones:</strong> Mensajes, consultas, feedback que nos envías</li>
                    <li><strong className="text-white">Información de cuenta:</strong> Si creas una cuenta en nuestra plataforma</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">2.2 Información recopilada automáticamente:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-white">Datos de navegación:</strong> Dirección IP, navegador, dispositivo, sistema operativo</li>
                    <li><strong className="text-white">Cookies y tecnologías similares:</strong> Ver nuestra Política de Cookies</li>
                    <li><strong className="text-white">Analytics:</strong> Páginas visitadas, tiempo en el sitio, origen del tráfico, conversiones</li>
                    <li><strong className="text-white">Interacciones:</strong> Clicks, formularios completados, descargas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">2.3 Información de terceros:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Redes sociales (cuando interactúas con nuestros perfiles)</li>
                    <li>Proveedores de servicios de pago</li>
                    <li>Plataformas de marketing y publicidad</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 3. Cómo Usamos tu Información */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-purple-400" />
                3. Cómo Usamos tu Información
              </h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Utilizamos tu información personal para los siguientes fines:</p>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.1 Prestación de servicios:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Procesar y gestionar tus solicitudes de servicio</li>
                    <li>Desarrollar, entregar y dar soporte a proyectos contratados</li>
                    <li>Comunicarnos contigo sobre el progreso de tu proyecto</li>
                    <li>Procesar pagos y gestionar facturación</li>
                    <li>Proporcionar soporte técnico y atención al cliente</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.2 Mejora de servicios:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Analizar el uso de nuestra plataforma para mejorar la experiencia</li>
                    <li>Desarrollar nuevas funcionalidades y servicios</li>
                    <li>Realizar investigaciones y análisis de mercado</li>
                    <li>Detectar y prevenir fraudes y problemas técnicos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.3 Comunicaciones de marketing:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Enviarte newsletters con contenido relevante (con tu consentimiento)</li>
                    <li>Informarte sobre nuevos servicios y promociones</li>
                    <li>Invitarte a eventos, webinars o capacitaciones</li>
                    <li>Solicitar tu opinión mediante encuestas</li>
                  </ul>
                  <p className="text-sm italic mt-2">
                    Nota: Puedes darte de baja de las comunicaciones de marketing en cualquier momento.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.4 Cumplimiento legal:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cumplir con obligaciones legales y regulatorias</li>
                    <li>Responder a solicitudes de autoridades competentes</li>
                    <li>Proteger nuestros derechos legales</li>
                    <li>Prevenir actividades ilícitas o fraudulentas</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* 4. Base Legal */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Base Legal para el Tratamiento</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Procesamos tus datos personales bajo las siguientes bases legales:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Consentimiento:</strong> Cuando nos has dado tu consentimiento explícito</li>
                  <li><strong className="text-white">Ejecución de contrato:</strong> Cuando es necesario para cumplir con nuestros servicios</li>
                  <li><strong className="text-white">Interés legítimo:</strong> Para mejorar nuestros servicios y comunicaciones relevantes</li>
                  <li><strong className="text-white">Obligación legal:</strong> Para cumplir con requisitos legales y regulatorios</li>
                </ul>
              </div>
            </div>

            {/* 5. Compartir Información */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Compartir tu Información</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Podemos compartir tu información con:</p>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.1 Proveedores de servicios:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Servicios de hosting y almacenamiento en la nube</li>
                    <li>Procesadores de pago</li>
                    <li>Plataformas de email marketing</li>
                    <li>Herramientas de analytics (Google Analytics, etc.)</li>
                    <li>Servicios de CRM y gestión de proyectos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.2 Socios comerciales:</h3>
                  <p>Con tu consentimiento explícito, podemos compartir información con socios estratégicos.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.3 Requerimientos legales:</h3>
                  <p>Cuando sea requerido por ley, orden judicial o autoridades competentes.</p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-white">Importante:</strong> Nunca vendemos ni alquilamos tu información personal a terceros con fines comerciales.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Seguridad */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-purple-400" />
                6. Seguridad de tu Información
              </h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Encriptación:</strong> Usamos SSL/TLS para proteger datos en tránsito</li>
                  <li><strong className="text-white">Acceso restringido:</strong> Solo personal autorizado tiene acceso a datos sensibles</li>
                  <li><strong className="text-white">Servidores seguros:</strong> Almacenamiento en infraestructura certificada</li>
                  <li><strong className="text-white">Backups regulares:</strong> Copias de seguridad periódicas</li>
                  <li><strong className="text-white">Auditorías:</strong> Revisiones periódicas de seguridad</li>
                  <li><strong className="text-white">Actualizaciones:</strong> Software y sistemas siempre actualizados</li>
                </ul>
                <p className="text-sm italic mt-4">
                  Nota: Ningún sistema es 100% seguro. Te recomendamos también tomar precauciones como usar contraseñas fuertes y no compartir tus credenciales.
                </p>
              </div>
            </div>

            {/* 7. Retención de Datos */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Retención de Datos</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Conservamos tu información personal durante:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Clientes activos:</strong> Durante la relación comercial y hasta 5 años después por obligaciones fiscales</li>
                  <li><strong className="text-white">Leads y contactos:</strong> Hasta que solicites la eliminación o 3 años de inactividad</li>
                  <li><strong className="text-white">Datos de navegación:</strong> Según políticas de cookies (generalmente 12-24 meses)</li>
                  <li><strong className="text-white">Datos legales:</strong> Según requerimientos legales aplicables</li>
                </ul>
              </div>
            </div>

            {/* 8. Tus Derechos */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Tus Derechos</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Tienes los siguientes derechos sobre tus datos personales:</p>
                
                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">✓ Acceso</h3>
                    <p className="text-sm">Conocer qué datos tenemos sobre ti</p>
                  </div>
                  <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">✓ Rectificación</h3>
                    <p className="text-sm">Corregir datos inexactos o incompletos</p>
                  </div>
                  <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">✓ Eliminación</h3>
                    <p className="text-sm">Solicitar la eliminación de tus datos</p>
                  </div>
                  <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">✓ Oposición</h3>
                    <p className="text-sm">Oponerte al tratamiento de tus datos</p>
                  </div>
                  <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">✓ Portabilidad</h3>
                    <p className="text-sm">Recibir tus datos en formato portable</p>
                  </div>
                  <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">✓ Limitación</h3>
                    <p className="text-sm">Limitar el procesamiento de tus datos</p>
                  </div>
                </div>

                <p className="mt-4">
                  Para ejercer estos derechos, envía un email a <a href="mailto:contacto@techtecnic.com" className="text-purple-400 hover:text-purple-300">contacto@techtecnic.com</a> con 
                  el asunto "Ejercicio de Derechos - ARCO". Responderemos dentro de 15 días hábiles.
                </p>
              </div>
            </div>

            {/* 9. Transferencias Internacionales */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Transferencias Internacionales</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Colombia o tu país de residencia. 
                  Nos aseguramos de que estas transferencias cumplan con las leyes aplicables mediante cláusulas contractuales 
                  estándar y garantías adecuadas de protección de datos.
                </p>
              </div>
            </div>

            {/* 10. Menores de Edad */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Privacidad de Menores</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos intencionalmente información 
                  de menores de 18 años sin el consentimiento de sus padres o tutores legales. Si descubrimos que hemos 
                  recopilado datos de un menor sin autorización, los eliminaremos inmediatamente.
                </p>
              </div>
            </div>

            {/* 11. Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Cookies y Tecnologías Similares</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestra plataforma. 
                  Para más información, consulta nuestra <Link href="/politica-cookies" className="text-purple-400 hover:text-purple-300 underline">Política de Cookies</Link>.
                </p>
              </div>
            </div>

            {/* 12. Cambios */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Cambios a esta Política</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios significativos 
                  mediante email o aviso destacado en nuestra plataforma. La fecha de "última actualización" al inicio 
                  del documento indica cuándo se realizó la última modificación.
                </p>
              </div>
            </div>

            {/* 13. Contacto */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contacto</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Si tienes preguntas, inquietudes o solicitudes sobre esta Política de Privacidad o nuestras prácticas de datos:</p>
                <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 mt-4">
                  <div className="space-y-3">
                    <p className="text-white font-semibold">Tech Tecnic - Protección de Datos</p>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <a href="mailto:contacto@techtecnic.com" className="text-purple-400 hover:text-purple-300">
                        contacto@techtecnic.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <a href="tel:+573026742059" className="text-purple-400 hover:text-purple-300">
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
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 text-center">
                <p className="text-gray-300 mb-4">
                  ¿Necesitas más información sobre cómo protegemos tus datos?
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Contáctanos
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
