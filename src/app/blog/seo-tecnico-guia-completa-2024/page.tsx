import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'SEO Técnico: Guía completa para 2024 | Blog Tech Tecnic',
  description: 'Domina el SEO técnico con esta guía completa. Aprende sobre Core Web Vitals, schema markup, optimización móvil y todas las técnicas que realmente funcionan en 2024.',
  keywords: [
    'SEO técnico',
    'optimización web',
    'Core Web Vitals',
    'schema markup',
    'SEO 2024',
    'posicionamiento web'
  ],
  openGraph: {
    title: 'SEO Técnico: Guía completa para 2024 | Blog Tech Tecnic',
    description: 'Domina el SEO técnico con esta guía completa para 2024.',
    type: 'article',
    publishedTime: '2024-12-07',
    authors: ['Tech Tecnic'],
  },
  alternates: {
    canonical: 'https://techtecnic.com/blog/seo-tecnico-guia-completa-2024',
  },
};

export default function SEOTecnicoArticle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          {/* Category */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-t_primary/20 text-t_primary rounded-full text-sm font-semibold">
              SEO & Optimización
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              SEO Técnico:
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              Guía completa para 2024
            </span>
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Tech Tecnic</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date('2024-12-07').toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>12 min de lectura</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            El SEO técnico es la base de cualquier estrategia de posicionamiento exitosa.
            Aprende todas las técnicas técnicas que realmente funcionan en 2024 para mejorar tu visibilidad en Google.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['SEO técnico', 'Core Web Vitals', 'schema markup', 'optimización móvil', 'SEO 2024'].map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
                className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-t_primary/20 hover:text-t_primary transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12">
            {/* Article Header Image */}
            <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-t_primary mb-2">SEO</div>
                  <div className="text-xl font-bold text-white">Técnico 2024</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>¿Por qué el SEO técnico es crucial en 2024?</h2>
              <p>
                El SEO técnico representa la base fundamental de cualquier estrategia de posicionamiento web.
                Mientras que el SEO on-page y off-page se centran en el contenido y los backlinks,
                el SEO técnico asegura que Google pueda entender, indexar y rankear correctamente tu sitio web.
              </p>

              <p>
                En Tech Tecnic, hemos visto cómo sitios web con excelente contenido pero pobres fundamentos
                técnicos luchan por posicionar, mientras que sitios con SEO técnico sólido obtienen
                resultados consistentes y escalables.
              </p>

              <h3>🏗️ Arquitectura técnica sólida</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Estructura del sitio</h4>
                  <ul className="text-gray-300">
                    <li>URLs limpias y descriptivas</li>
                    <li>Jerarquía lógica de navegación</li>
                    <li>Arquitectura plana (máx. 3 clics)</li>
                    <li>Breadcrumb navigation</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Navegación técnica</h4>
                  <ul className="text-gray-300">
                    <li>Sitemap XML actualizado</li>
                    <li>Robots.txt optimizado</li>
                    <li>Internal linking estratégico</li>
                    <li>Redirecciones 301 correctas</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Indexación</h4>
                  <ul className="text-gray-300">
                    <li>No-index para páginas duplicadas</li>
                    <li>Canonical URLs correctas</li>
                    <li>Meta robots apropiados</li>
                    <li>Gestión de parámetros URL</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Internacionalización</h4>
                  <ul className="text-gray-300">
                    <li>Hreflang para multi-idioma</li>
                    <li>URLs específicas por país</li>
                    <li>Contenido localizado</li>
                    <li>CDN para distribución global</li>
                  </ul>
                </div>
              </div>

              <h3>📱 Optimización móvil (Mobile-First)</h3>
              <p>
                Desde marzo de 2021, Google utiliza el indexing mobile-first. Esto significa que
                la versión móvil de tu sitio es la que se indexa y rankea principalmente.
              </p>

              <h4>Requisitos mobile-first:</h4>
              <ul>
                <li><strong>Responsive design:</strong> Diseño que se adapta a todos los tamaños de pantalla</li>
                <li><strong>Velocidad móvil:</strong> Optimización específica para conexiones móviles</li>
                <li><strong>UX móvil:</strong> Navegación intuitiva en dispositivos táctiles</li>
                <li><strong>Contenido móvil:</strong> Contenido optimizado para lectura móvil</li>
              </ul>

              <h4>Herramientas para testing móvil:</h4>
              <ul>
                <li><strong>Google Mobile-Friendly Test:</strong> Verificación básica de compatibilidad</li>
                <li><strong>Chrome DevTools Device Mode:</strong> Testing en diferentes dispositivos</li>
                <li><strong>Google Search Console:</strong> Reporte de usabilidad móvil</li>
                <li><strong>Lighthouse Mobile Audit:</strong> Análisis completo de rendimiento móvil</li>
              </ul>

              <h3>⚡ Core Web Vitals: El ranking factor más importante</h3>
              <p>
                Core Web Vitals representan el 15-20% de los factores de ranking de Google.
                Estos métricas miden la experiencia del usuario real.
              </p>

              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <h4 className="text-t_primary font-semibold mb-4">Las 3 métricas principales:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white mb-2">LCP</div>
                    <div className="text-sm text-gray-300">Largest Contentful Paint</div>
                    <div className="text-xs text-gray-400 mt-2">Mide velocidad de carga del contenido principal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white mb-2">FID</div>
                    <div className="text-sm text-gray-300">First Input Delay</div>
                    <div className="text-xs text-gray-400 mt-2">Mide capacidad de respuesta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white mb-2">CLS</div>
                    <div className="text-sm text-gray-300">Cumulative Layout Shift</div>
                    <div className="text-xs text-gray-400 mt-2">Mide estabilidad visual</div>
                  </div>
                </div>
              </div>

              <h4>Optimizaciones críticas para Core Web Vitals:</h4>

              <h5>Para LCP (mejorar tiempo de carga):</h5>
              <ul>
                <li>Optimizar imágenes (WebP, compresión, lazy loading)</li>
                <li>Eliminar render-blocking resources</li>
                <li>Usar preload para recursos críticos</li>
                <li>Optimizar servidor (CDN, caching, compresión)</li>
              </ul>

              <h5>Para FID (mejorar interactividad):</h5>
              <ul>
                <li>Dividir JavaScript en chunks más pequeños</li>
                <li>Usar Web Workers para tareas pesadas</li>
                <li>Optimizar third-party scripts</li>
                <li>Minimizar DOM manipulation</li>
              </ul>

              <h5>Para CLS (mejorar estabilidad):</h5>
              <ul>
                <li>Definir dimensiones para todas las imágenes</li>
                <li>Reservar espacio para contenido dinámico</li>
                <li>Evitar inserción de contenido arriba del fold</li>
                <li>Usar CSS transforms en lugar de cambiar propiedades</li>
              </ul>

              <h3>🏷️ Schema Markup: Hablando el lenguaje de Google</h3>
              <p>
                Schema markup (datos estructurados) ayuda a Google a entender mejor el contenido
                de tu sitio web, lo que puede resultar en rich snippets y mejor posicionamiento.
              </p>

              <h4>Tipos de schema más importantes:</h4>

              <h5>Para e-commerce:</h5>
              <ul>
                <li><strong>Product schema:</strong> Para páginas de producto individuales</li>
                <li><strong>Offer schema:</strong> Para precios y disponibilidad</li>
                <li><strong>AggregateRating:</strong> Para reseñas y calificaciones</li>
                <li><strong>BreadcrumbList:</strong> Para navegación estructurada</li>
              </ul>

              <h5>Para contenido:</h5>
              <ul>
                <li><strong>Article schema:</strong> Para posts de blog y artículos</li>
                <li><strong>FAQPage:</strong> Para páginas de preguntas frecuentes</li>
                <li><strong>HowTo:</strong> Para guías y tutoriales</li>
                <li><strong>VideoObject:</strong> Para contenido de video</li>
              </ul>

              <h5>Para negocios locales:</h5>
              <ul>
                <li><strong>LocalBusiness:</strong> Para información de negocio</li>
                <li><strong>Organization:</strong> Para datos corporativos</li>
                <li><strong>PostalAddress:</strong> Para direcciones físicas</li>
                <li><strong>GeoCoordinates:</strong> Para coordenadas GPS</li>
              </ul>

              <h4>Herramientas para implementar schema:</h4>
              <ul>
                <li><strong>Google's Rich Results Test:</strong> Para validar markup</li>
                <li><strong>Schema.org generator:</strong> Para generar código automáticamente</li>
                <li><strong>JSON-LD format:</strong> El método recomendado por Google</li>
                <li><strong>Microdata/RDFa:</strong> Métodos alternativos</li>
              </ul>

              <h3>🔍 Indexación y crawling optimizados</h3>
              <p>
                Asegurar que Google pueda encontrar, acceder y entender tu contenido es fundamental
                para el SEO técnico.
              </p>

              <h4>Optimizaciones de crawling:</h4>

              <h5>Robots.txt estratégico:</h5>
              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`User-agent: *
Allow: /

# Bloquear páginas duplicadas
Disallow: /*?*
Disallow: /*sort=
Disallow: /search

# Permitir recursos importantes
Allow: /css/
Allow: /js/
Allow: /images/

# Crawl-delay para no sobrecargar
Crawl-delay: 1`}</code>
              </pre>

              <h5>Sitemap XML completo:</h5>
              <ul>
                <li>Incluir todas las URLs importantes</li>
                <li>Actualizar frecuentemente</li>
                <li>Enviar a Google Search Console</li>
                <li>Incluir metadatos (lastmod, priority, changefreq)</li>
              </ul>

              <h4>Gestión de contenido duplicado:</h4>
              <ul>
                <li><strong>URLs canónicas:</strong> Para especificar la versión preferida</li>
                <li><strong>Meta robots noindex:</strong> Para páginas que no deben indexarse</li>
                <li><strong>Redirecciones 301:</strong> Para URLs antiguas o duplicadas</li>
                <li><strong>Parámetros de URL:</strong> Configurar en Google Search Console</li>
              </ul>

              <h3>🔒 HTTPS y seguridad web</h3>
              <p>
                Google ha confirmado que HTTPS es un factor de ranking. Además de la seguridad,
                HTTPS mejora la confianza del usuario y es requerido para muchas funcionalidades modernas.
              </p>

              <h4>Implementación HTTPS:</h4>
              <ul>
                <li><strong>Certificado SSL válido:</strong> Let's Encrypt para certificados gratuitos</li>
                <li><strong>Redirecciones 301:</strong> De HTTP a HTTPS permanentemente</li>
                <li><strong>Headers de seguridad:</strong> HSTS, CSP, X-Frame-Options</li>
                <li><strong>Mixed content:</strong> Asegurar que todos los recursos usen HTTPS</li>
              </ul>

              <h4>Mejores prácticas de seguridad:</h4>
              <ul>
                <li>Actualizar software regularmente</li>
                <li>Monitorear vulnerabilidades</li>
                <li>Implementar WAF (Web Application Firewall)</li>
                <li>Backup regular y plan de recuperación</li>
              </ul>

              <h3>📊 AMP y páginas móviles aceleradas</h3>
              <p>
                Aunque AMP ya no es un factor de ranking directo, sigue siendo útil para mejorar
                la velocidad de carga en dispositivos móviles y aparecer en carruseles de Google.
              </p>

              <h4>Cuándo usar AMP:</h4>
              <ul>
                <li>Contenido periodístico y editorial</li>
                <li>Páginas que necesitan carga instantánea</li>
                <li>Sitios con mucho tráfico móvil</li>
                <li>Contenido que aparece en Google Discover</li>
              </ul>

              <h4>Alternativas modernas a AMP:</h4>
              <ul>
                <li>Optimización Core Web Vitals</li>
                <li>Páginas web progresivas (PWA)</li>
                <li>Optimización móvil nativa</li>
                <li>CDN con edge computing</li>
              </ul>

              <h3>🛠️ Herramientas esenciales para SEO técnico</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Herramientas gratuitas</h4>
                  <ul className="text-gray-300">
                    <li>Google Search Console</li>
                    <li>Google PageSpeed Insights</li>
                    <li>Screaming Frog (versión gratuita)</li>
                    <li>Google Rich Results Test</li>
                    <li>W3C Markup Validator</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Herramientas premium</h4>
                  <ul className="text-gray-300">
                    <li>Screaming Frog (completo)</li>
                    <li>Ahrefs Site Audit</li>
                    <li>SEMrush Site Audit</li>
                    <li>DeepCrawl</li>
                    <li>Botify</li>
                  </ul>
                </div>
              </div>

              <h3>📈 Monitoreo y mantenimiento continuo</h3>
              <p>
                El SEO técnico no es una tarea única, requiere monitoreo continuo y ajustes
                basados en datos.
              </p>

              <h4>Métricas a monitorear:</h4>
              <ul>
                <li><strong>Core Web Vitals:</strong> Rendimiento real del usuario</li>
                <li><strong>Índice de cobertura:</strong> URLs indexadas vs totales</li>
                <li><strong>Errores de crawling:</strong> 4xx y 5xx errors</li>
                <li><strong>Velocidad de sitio:</strong> Tiempo de carga promedio</li>
                <li><strong>Mobile usability:</strong> Problemas en dispositivos móviles</li>
              </ul>

              <h4>Rutina de mantenimiento mensual:</h4>
              <ol>
                <li>Revisar Google Search Console por errores</li>
                <li>Auditar Core Web Vitals</li>
                <li>Verificar sitemap y robots.txt</li>
                <li>Revisar enlaces rotos</li>
                <li>Actualizar contenido obsoleto</li>
                <li>Optimizar imágenes nuevas</li>
                <li>Revisar schema markup</li>
              </ol>

              <h3>🎯 Estrategia SEO técnico para 2024</h3>
              <p>
                En 2024, el SEO técnico se centra en tres pilares principales:
              </p>

              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-t_primary mb-2">1</div>
                    <h4 className="text-white font-semibold mb-2">Experiencia del Usuario</h4>
                    <p className="text-gray-300 text-sm">Core Web Vitals, mobile-first, UX signals</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-t_primary mb-2">2</div>
                    <h4 className="text-white font-semibold mb-2">Comprensión de Contenido</h4>
                    <p className="text-gray-300 text-sm">Schema markup, E-E-A-T, contenido de calidad</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-t_primary mb-2">3</div>
                    <h4 className="text-white font-semibold mb-2">Tecnología Moderna</h4>
                    <p className="text-gray-300 text-sm">PWA, IA integration, web standards</p>
                  </div>
                </div>
              </div>

              <h2>Conclusión</h2>
              <p>
                El SEO técnico es la base sobre la que se construye cualquier estrategia de
                posicionamiento exitosa. Sin una base técnica sólida, incluso el mejor contenido
                luchará por posicionar en Google.
              </p>

              <p>
                En Tech Tecnic, hemos visto cómo invertir tiempo y recursos en SEO técnico
                genera retornos sostenibles a largo plazo. Un sitio web técnicamente optimizado
                no solo rankea mejor, sino que ofrece una mejor experiencia de usuario y
                convierte más visitantes en clientes.
              </p>

              <p>
                Recuerda que el SEO técnico es un proceso continuo. Las mejores prácticas
                evolucionan constantemente, y mantenerse actualizado con las últimas
                recomendaciones de Google es crucial para mantener una ventaja competitiva.
              </p>

              <p>
                Si necesitas ayuda con la implementación de SEO técnico en tu sitio web,
                nuestro equipo de expertos está listo para ayudarte a optimizar cada aspecto
                técnico y llevar tu posicionamiento al siguiente nivel.
              </p>
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Útil</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Bookmark className="w-4 h-4" />
                  <span>Guardar</span>
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Compartir</span>
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 mt-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-t_primary to-t_accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Tech Tecnic</h3>
                <p className="text-gray-400 mb-4">
                  Equipo de expertos en desarrollo web, inteligencia artificial y transformación digital.
                  Ayudamos a empresas en Colombia a crecer mediante soluciones tecnológicas innovadoras.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/servicios"
                    className="text-t_primary hover:text-t_accent transition-colors font-semibold"
                  >
                    Nuestros servicios →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="relative py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Artículos relacionados</h2>
            <p className="text-gray-400">Más contenido sobre SEO y optimización</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">Core Web Vitals: Guía completa de optimización</h3>
              <p className="text-gray-400 text-sm mb-4">Domina Core Web Vitals para mejorar el rendimiento de tu sitio web y posicionamiento SEO.</p>
              <Link href="/blog/core-web-vitals-guia-completa-optimizacion" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
                Leer artículo →
              </Link>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">Cómo la IA está revolucionando el desarrollo web</h3>
              <p className="text-gray-400 text-sm mb-4">Descubre cómo la inteligencia artificial está transformando la forma en que creamos sitios web modernos.</p>
              <Link href="/blog/ia-revolucion-desarrollo-web-2024" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
                Leer artículo →
              </Link>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">Next.js 14: Lo nuevo que debes saber</h3>
              <p className="text-gray-400 text-sm mb-4">Explora las nuevas características de Next.js 14 y cómo pueden mejorar el rendimiento de tus aplicaciones web.</p>
              <Link href="/blog/nextjs-14-nuevas-caracteristicas" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
                Leer artículo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}