import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Calendar, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Tech Tecnic',
  description: 'Términos y condiciones de uso de los servicios de Tech Tecnic. Conoce nuestras políticas y condiciones comerciales.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Documento Legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Términos y Condiciones
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
            
            {/* 1. Introducción */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introducción y Aceptación</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Bienvenido a Tech Tecnic. Al acceder y utilizar nuestro sitio web <strong className="text-white">techtecnic.com</strong> y 
                  contratar nuestros servicios, aceptas estar sujeto a los siguientes Términos y Condiciones. 
                  Estos términos constituyen un acuerdo legal vinculante entre tú (el "Cliente") y Tech Tecnic 
                  (la "Empresa", "nosotros" o "nuestro").
                </p>
                <p>
                  Si no estás de acuerdo con alguno de estos términos, te solicitamos que no utilices nuestros servicios 
                  ni accedas a nuestra plataforma.
                </p>
              </div>
            </div>

            {/* 2. Definiciones */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Definiciones</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Servicios:</strong> Todos los servicios ofrecidos por Tech Tecnic, incluyendo desarrollo web, aplicaciones móviles, automatización con IA, SEO, integraciones y soluciones para agencias.</li>
                  <li><strong className="text-white">Cliente:</strong> Persona física o jurídica que contrata nuestros servicios.</li>
                  <li><strong className="text-white">Proyecto:</strong> El trabajo específico contratado por el Cliente según la propuesta comercial aceptada.</li>
                  <li><strong className="text-white">Entregables:</strong> Los productos, código fuente, diseños o servicios que serán entregados al completar el proyecto.</li>
                  <li><strong className="text-white">Plataforma:</strong> El sitio web techtecnic.com y todas sus funcionalidades.</li>
                </ul>
              </div>
            </div>

            {/* 3. Servicios Ofrecidos */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Servicios Ofrecidos</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Tech Tecnic proporciona los siguientes servicios profesionales:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Desarrollo de sitios web (landing pages, e-commerce, aplicaciones web personalizadas)</li>
                  <li>Desarrollo de aplicaciones móviles (iOS, Android, multiplataforma)</li>
                  <li>Servicios de SEO y posicionamiento web en Latinoamérica</li>
                  <li>Automatización empresarial con inteligencia artificial</li>
                  <li>Desarrollo de chatbots inteligentes (WhatsApp, web, redes sociales)</li>
                  <li>Integraciones de sistemas y APIs</li>
                  <li>Soluciones especializadas para agencias digitales (CRM, gestión de proyectos, analytics)</li>
                  <li>Mantenimiento y soporte técnico de plataformas digitales</li>
                </ul>
              </div>
            </div>

            {/* 4. Proceso de Contratación */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Proceso de Contratación</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">4.1 Propuesta Comercial:</strong> Todo proyecto inicia con una consulta gratuita y una propuesta comercial detallada que incluye alcance, timeline, precio y condiciones específicas.</p>
                <p><strong className="text-white">4.2 Aceptación:</strong> La aceptación de la propuesta por parte del Cliente, ya sea mediante firma electrónica, email o pago del anticipo, constituye la aceptación de estos Términos y Condiciones.</p>
                <p><strong className="text-white">4.3 Modificaciones:</strong> Cualquier modificación al alcance original del proyecto debe ser acordada por escrito y puede resultar en ajustes de precio y timeline.</p>
              </div>
            </div>

            {/* 5. Precios y Pagos */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Precios y Pagos</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">5.1 Moneda:</strong> Los precios se expresan en dólares estadounidenses (USD) o en la moneda local acordada con el Cliente.</p>
                <p><strong className="text-white">5.2 Esquema de Pagos:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proyectos de desarrollo: 50% anticipo, 50% contra entrega</li>
                  <li>Servicios recurrentes (SEO, mantenimiento): Pago mensual anticipado</li>
                  <li>Soluciones para agencias: Planes de suscripción mensual</li>
                  <li>Proyectos enterprise: Pagos por hitos según cronograma acordado</li>
                </ul>
                <p><strong className="text-white">5.3 Métodos de Pago:</strong> Aceptamos transferencias bancarias, PayPal, tarjetas de crédito y otros métodos disponibles en tu país.</p>
                <p><strong className="text-white">5.4 Facturación:</strong> Emitimos facturas electrónicas válidas en el país del Cliente.</p>
                <p><strong className="text-white">5.5 Retrasos:</strong> Retrasos en pagos pueden resultar en suspensión temporal del proyecto. Retrasos superiores a 30 días pueden resultar en cancelación del proyecto sin reembolso del anticipo.</p>
              </div>
            </div>

            {/* 6. Plazos de Entrega */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Plazos de Entrega</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">6.1 Estimación:</strong> Los plazos de entrega son estimaciones basadas en la información proporcionada por el Cliente y la disponibilidad de recursos.</p>
                <p><strong className="text-white">6.2 Retrasos del Cliente:</strong> Retrasos causados por falta de información, feedback tardío o cambios en el alcance no serán responsabilidad de Tech Tecnic.</p>
                <p><strong className="text-white">6.3 Fuerza Mayor:</strong> No seremos responsables por retrasos causados por circunstancias fuera de nuestro control.</p>
              </div>
            </div>

            {/* 7. Propiedad Intelectual */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Propiedad Intelectual</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">7.1 Código Fuente:</strong> Una vez completado el pago final, el Cliente recibe los derechos de uso del código fuente desarrollado específicamente para su proyecto.</p>
                <p><strong className="text-white">7.2 Frameworks y Librerías:</strong> El código puede incluir frameworks y librerías de terceros que mantienen sus propias licencias.</p>
                <p><strong className="text-white">7.3 Portfolio:</strong> Tech Tecnic se reserva el derecho de incluir el proyecto en su portfolio y materiales de marketing, salvo acuerdo de confidencialidad específico.</p>
                <p><strong className="text-white">7.4 Contenido del Cliente:</strong> El Cliente garantiza tener los derechos necesarios sobre todo el contenido (textos, imágenes, videos) proporcionado para el proyecto.</p>
              </div>
            </div>

            {/* 8. Garantías y Soporte */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Garantías y Soporte</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">8.1 Garantía de Funcionalidad:</strong> Garantizamos que los entregables funcionarán según lo especificado en la propuesta durante 90 días posteriores a la entrega.</p>
                <p><strong className="text-white">8.2 Corrección de Errores:</strong> Durante el período de garantía, corregiremos sin costo bugs o errores de funcionalidad reportados.</p>
                <p><strong className="text-white">8.3 Exclusiones:</strong> La garantía no cubre:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modificaciones realizadas por terceros</li>
                  <li>Problemas de hosting, dominio o servicios externos</li>
                  <li>Nuevas funcionalidades no incluidas en el alcance original</li>
                  <li>Incompatibilidades con actualizaciones de terceros</li>
                </ul>
                <p><strong className="text-white">8.4 Soporte Extendido:</strong> Ofrecemos planes de mantenimiento y soporte extendido con costos adicionales.</p>
              </div>
            </div>

            {/* 9. Confidencialidad */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Confidencialidad</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Nos comprometemos a mantener la confidencialidad de toda la información sensible del Cliente. 
                  No compartiremos información confidencial con terceros sin autorización expresa, excepto cuando 
                  sea requerido por ley o necesario para la prestación del servicio (ej: proveedores de hosting).
                </p>
              </div>
            </div>

            {/* 10. Limitación de Responsabilidad */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitación de Responsabilidad</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">10.1 Daños Indirectos:</strong> Tech Tecnic no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso de nuestros servicios.</p>
                <p><strong className="text-white">10.2 Límite Máximo:</strong> Nuestra responsabilidad total no excederá el monto pagado por el Cliente por el servicio específico que dio origen al reclamo.</p>
                <p><strong className="text-white">10.3 Contenido del Cliente:</strong> No somos responsables por el contenido proporcionado por el Cliente ni por reclamaciones de terceros sobre dicho contenido.</p>
              </div>
            </div>

            {/* 11. Cancelaciones y Reembolsos */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Cancelaciones y Reembolsos</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">11.1 Por el Cliente:</strong> El Cliente puede cancelar el proyecto en cualquier momento. Los reembolsos se calcularán según:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Antes de iniciar el trabajo: Reembolso del 90% del anticipo</li>
                  <li>Proyecto en progreso: Se facturará el trabajo completado más 20% del trabajo pendiente</li>
                  <li>Proyecto en etapa final: No hay reembolso</li>
                </ul>
                <p><strong className="text-white">11.2 Por Tech Tecnic:</strong> Nos reservamos el derecho de cancelar un proyecto con reembolso completo en casos excepcionales.</p>
                <p><strong className="text-white">11.3 Servicios Recurrentes:</strong> Pueden cancelarse con 30 días de anticipación. No hay reembolsos de meses ya pagados.</p>
              </div>
            </div>

            {/* 12. Hosting y Dominio */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Hosting y Dominio</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><strong className="text-white">12.1 Gestión:</strong> Cuando proporcionamos servicios de hosting y dominio, actuamos como intermediarios con proveedores terceros.</p>
                <p><strong className="text-white">12.2 Responsabilidad:</strong> No somos responsables por interrupciones de servicio causadas por el proveedor de hosting.</p>
                <p><strong className="text-white">12.3 Renovaciones:</strong> El Cliente es responsable de las renovaciones anuales de dominio y hosting, salvo acuerdo de servicio administrado.</p>
              </div>
            </div>

            {/* 13. Servicios de Terceros */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Servicios de Terceros</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Nuestros servicios pueden integrar herramientas y servicios de terceros (Google Analytics, APIs de pago, 
                  servicios de IA, etc.). El uso de estos servicios está sujeto a sus propios términos y condiciones. 
                  No somos responsables por cambios, interrupciones o costos asociados con servicios de terceros.
                </p>
              </div>
            </div>

            {/* 14. Modificaciones */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">14. Modificaciones a estos Términos</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
                  Los cambios serán efectivos inmediatamente después de su publicación en nuestra plataforma. 
                  El uso continuado de nuestros servicios después de las modificaciones constituye la aceptación de los nuevos términos.
                </p>
              </div>
            </div>

            {/* 15. Ley Aplicable */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">15. Ley Aplicable y Jurisdicción</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. 
                  Cualquier disputa será resuelta en primera instancia mediante negociación directa. 
                  En caso de no llegar a un acuerdo, las partes se someten a la jurisdicción de los 
                  tribunales de Bogotá D.C., Colombia.
                </p>
              </div>
            </div>

            {/* 16. Contacto */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">16. Información de Contacto</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Para cualquier consulta sobre estos Términos y Condiciones, puedes contactarnos:</p>
                <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 mt-4">
                  <div className="space-y-3">
                    <p className="text-white font-semibold">Tech Tecnic</p>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <a href="mailto:contacto@techtecnic.com" className="text-cyan-400 hover:text-cyan-300">
                        contacto@techtecnic.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <a href="tel:+573026742059" className="text-cyan-400 hover:text-cyan-300">
                        +57 302 674 2059
                      </a>
                    </div>
                    <p className="text-gray-400 text-sm">Bogotá, Colombia</p>
                    <p className="text-gray-400 text-sm">Servicios en toda Latinoamérica</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center">
                <p className="text-gray-300 mb-4">
                  ¿Tienes alguna pregunta sobre nuestros términos?
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
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
