import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Core Web Vitals: Guía completa de optimización | Blog Tech Tecnic',
  description: 'Domina Core Web Vitals para mejorar el rendimiento de tu sitio web. Guía completa con estrategias prácticas para optimizar LCP, FID y CLS.',
  keywords: [
    'Core Web Vitals',
    'SEO',
    'optimización web',
    'LCP',
    'FID',
    'CLS',
    'Google',
    'desarrollo web'
  ],
  openGraph: {
    title: 'Core Web Vitals: Guía completa de optimización | Blog Tech Tecnic',
    description: 'Domina Core Web Vitals para mejorar el rendimiento de tu sitio web.',
    type: 'article',
    publishedTime: '2024-12-04',
    authors: ['Tech Tecnic'],
  },
  alternates: {
    canonical: 'https://techtecnic.com/blog/core-web-vitals-guia-completa-optimizacion',
  },
};

export default function CoreWebVitalsArticle() {
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
              Core Web Vitals:
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              Guía completa de optimización
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
              <span>{new Date('2024-12-04').toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>9 min de lectura</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Core Web Vitals son los nuevos factores de ranking de Google. Aprende a optimizar LCP, FID y CLS
            para mejorar el rendimiento de tu sitio web y posicionamiento SEO.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Core Web Vitals', 'SEO', 'LCP', 'FID', 'CLS', 'optimización', 'Google'].map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace('.', '').replace(' ', '-')}`}
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
                  <div className="text-4xl font-bold text-t_primary mb-2">CWV</div>
                  <div className="text-xl font-bold text-white">Core Web Vitals</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>¿Qué son Core Web Vitals?</h2>
              <p>
                Core Web Vitals (CWV) son un conjunto de métricas específicas introducidas por Google
                en 2020 que miden la experiencia del usuario en la web. Estas métricas se centran
                en tres aspectos principales del rendimiento: carga, interactividad y estabilidad visual.
              </p>

              <p>
                Desde mayo de 2021, Core Web Vitals se convirtieron en un factor de ranking oficial
                en los algoritmos de búsqueda de Google, lo que significa que afectan directamente
                el posicionamiento SEO de tu sitio web.
              </p>

              <h3>📊 Las 3 métricas principales</h3>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-t_primary mb-2">LCP</div>
                  <h4 className="text-white font-semibold mb-3">Largest Contentful Paint</h4>
                  <p className="text-gray-300 text-sm">Mide el tiempo de carga del contenido principal</p>
                  <div className="mt-4 text-xs text-gray-400">
                    <div>✅ Bueno: &lt; 2.5s</div>
                    <div>⚠️ Necesita mejorar: 2.5-4s</div>
                    <div>❌ Malo: &gt; 4s</div>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-t_primary mb-2">FID</div>
                  <h4 className="text-white font-semibold mb-3">First Input Delay</h4>
                  <p className="text-gray-300 text-sm">Mide la capacidad de respuesta a la interacción del usuario</p>
                  <div className="mt-4 text-xs text-gray-400">
                    <div>✅ Bueno: &lt; 100ms</div>
                    <div>⚠️ Necesita mejorar: 100-300ms</div>
                    <div>❌ Malo: &gt; 300ms</div>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-t_primary mb-2">CLS</div>
                  <h4 className="text-white font-semibold mb-3">Cumulative Layout Shift</h4>
                  <p className="text-gray-300 text-sm">Mide la estabilidad visual del contenido</p>
                  <div className="mt-4 text-xs text-gray-400">
                    <div>✅ Bueno: &lt; 0.1</div>
                    <div>⚠️ Necesita mejorar: 0.1-0.25</div>
                    <div>❌ Malo: &gt; 0.25</div>
                  </div>
                </div>
              </div>

              <h3>🔍 Cómo medir Core Web Vitals</h3>
              <p>
                Existen varias herramientas para medir y monitorear Core Web Vitals:
              </p>

              <h4>Herramientas oficiales de Google:</h4>
              <ul>
                <li><strong>PageSpeed Insights:</strong> Análisis completo con recomendaciones específicas</li>
                <li><strong>Search Console:</strong> Reporte de Core Web Vitals para tu sitio</li>
                <li><strong>Chrome DevTools:</strong> Medición en tiempo real durante desarrollo</li>
                <li><strong>Lighthouse:</strong> Auditoría integrada en Chrome</li>
              </ul>

              <h4>Herramientas de terceros:</h4>
              <ul>
                <li><strong>WebPageTest:</strong> Pruebas avanzadas con diferentes dispositivos y conexiones</li>
                <li><strong>GTmetrix:</strong> Análisis detallado con recomendaciones específicas</li>
                <li><strong>Web Vitals Chrome Extension:</strong> Monitoreo en tiempo real</li>
              </ul>

              <h3>🚀 Optimización de LCP (Largest Contentful Paint)</h3>
              <p>
                LCP mide cuándo se renderiza el elemento de contenido más grande visible en el viewport.
                Generalmente es una imagen, video o bloque de texto grande.
              </p>

              <h4>Estrategias para mejorar LCP:</h4>

              <h5>1. Optimizar imágenes</h5>
              <ul>
                <li>Usa formatos modernos: WebP, AVIF</li>
                <li>Implementa lazy loading</li>
                <li>Define dimensiones width/height</li>
                <li>Usa CDN para imágenes</li>
                <li>Comprime imágenes sin pérdida de calidad</li>
              </ul>

              <h5>2. Eliminar recursos que bloquean el renderizado</h5>
              <ul>
                <li>Elimina CSS no utilizado</li>
                <li>Difiere CSS no crítico</li>
                <li>Minimiza CSS y JavaScript</li>
                <li>Elimina JavaScript que bloquea el renderizado</li>
              </ul>

              <h5>3. Optimizar servidor</h5>
              <ul>
                <li>Usa CDN para distribución de contenido</li>
                <li>Implementa compresión (Gzip, Brotli)</li>
                <li>Configura cache headers apropiados</li>
                <li>Optimiza tiempo de respuesta del servidor (&lt; 600ms)</li>
              </ul>

              <h3>⚡ Optimización de FID (First Input Delay)</h3>
              <p>
                FID mide el tiempo desde que un usuario interactúa por primera vez con tu sitio
                (click, tap, etc.) hasta que el navegador puede responder a esa interacción.
              </p>

              <h4>Causas comunes de FID pobre:</h4>
              <ul>
                <li>JavaScript pesado ejecutándose en el hilo principal</li>
                <li>Tareas largas que bloquean el hilo principal</li>
                <li>Falta de división de código (code splitting)</li>
                <li>Scripts de terceros no optimizados</li>
              </ul>

              <h4>Soluciones para mejorar FID:</h4>

              <h5>1. Dividir código JavaScript</h5>
              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`// En lugar de un bundle grande
import React from 'react';

// Divide en chunks
const OtherComponent = lazy(() => import('./OtherComponent'));

// Usa React.lazy y Suspense
<Suspense fallback={<div>Loading...</div>}>
  <OtherComponent />
</Suspense>`}</code>
              </pre>

              <h5>2. Optimizar tareas del hilo principal</h5>
              <ul>
                <li>Usa Web Workers para tareas pesadas</li>
                <li>Divide tareas largas en chunks más pequeños</li>
                <li>Optimiza animaciones con transform y opacity</li>
                <li>Evita document.write()</li>
              </ul>

              <h5>3. Gestionar scripts de terceros</h5>
              <ul>
                <li>Carga scripts de terceros de forma asíncrona</li>
                <li>Usa resource hints (preconnect, dns-prefetch)</li>
                <li>Implementa lazy loading para widgets</li>
                <li>Monitorea el impacto de terceros en el rendimiento</li>
              </ul>

              <h3>📐 Optimización de CLS (Cumulative Layout Shift)</h3>
              <p>
                CLS mide la suma total de todas las puntuaciones de cambio de layout individuales
                para cada cambio de layout inesperado que ocurre durante la vida útil de la página.
              </p>

              <h4>Causas comunes de CLS alto:</h4>
              <ul>
                <li>Imágenes sin dimensiones definidas</li>
                <li>Contenido dinámico insertado arriba del contenido existente</li>
                <li>Web fonts que causan FOIT/FOUT</li>
                <li>Anuncios, embeds y iframes sin dimensiones reservadas</li>
              </ul>

              <h4>Soluciones para mejorar CLS:</h4>

              <h5>1. Definir dimensiones para todos los elementos</h5>
              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`<!-- Siempre define width y height -->
<img src="image.jpg" width="800" height="600" alt="Descripción">

<!-- O usa aspect-ratio en CSS -->
.image {
  aspect-ratio: 4 / 3;
  width: 100%;
  height: auto;
}`}</code>
              </pre>

              <h5>2. Reservar espacio para contenido dinámico</h5>
              <ul>
                <li>Usa placeholders con las mismas dimensiones que el contenido final</li>
                <li>Evita insertar contenido arriba del fold</li>
                <li>Usa transform: translate() en lugar de cambiar position</li>
              </ul>

              <h5>3. Optimizar Web Fonts</h5>
              <ul>
                <li>Usa font-display: swap</li>
                <li>Preload fonts críticos</li>
                <li>Usa font-face con unicode-range</li>
                <li>Considera system fonts para texto body</li>
              </ul>

              <h3>🛠️ Estrategias avanzadas de optimización</h3>

              <h4>1. Critical Path Optimization</h4>
              <p>
                Identifica y optimiza la ruta crítica de renderizado:
              </p>
              <ul>
                <li>Minimiza recursos críticos</li>
                <li>Optimiza el orden de carga</li>
                <li>Elimina render-blocking resources</li>
                <li>Usa preload para recursos críticos</li>
              </ul>

              <h4>2. Performance Budget</h4>
              <p>
                Establece límites de rendimiento y monitorea:
              </p>
              <ul>
                <li>Tamaño total del bundle</li>
                <li>Tiempo de carga de la página</li>
                <li>Puntuaciones de Lighthouse</li>
                <li>Métricas de Core Web Vitals</li>
              </ul>

              <h4>3. Monitoreo continuo</h4>
              <p>
                Implementa monitoreo en producción:
              </p>
              <ul>
                <li>Real User Monitoring (RUM)</li>
                <li>Alertas automáticas para regresiones</li>
                <li>A/B testing de optimizaciones</li>
                <li>Análisis de tendencias de rendimiento</li>
              </ul>

              <h3>📱 Consideraciones móviles</h3>
              <p>
                Core Web Vitals se mide tanto en desktop como en mobile, pero las condiciones
                de red y hardware son diferentes. Enfócate especialmente en:
              </p>

              <ul>
                <li>Optimización para conexiones 3G/4G lentas</li>
                <li>Reducción de JavaScript para dispositivos móviles</li>
                <li>Optimización de imágenes para pantallas retina</li>
                <li>Testing en dispositivos reales, no solo emuladores</li>
              </ul>

              <h3>🎯 Checklist de optimización</h3>
              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <h4 className="text-t_primary font-semibold mb-4">LCP Optimization:</h4>
                <ul className="mb-4">
                  <li>✅ Imágenes optimizadas y con dimensiones</li>
                  <li>✅ CSS crítico inlineado</li>
                  <li>✅ Servidor optimizado (&lt; 600ms)</li>
                  <li>✅ Recursos críticos preloaded</li>
                </ul>

                <h4 className="text-t_primary font-semibold mb-4">FID Optimization:</h4>
                <ul className="mb-4">
                  <li>✅ JavaScript dividido en chunks</li>
                  <li>✅ Tareas largas optimizadas</li>
                  <li>✅ Scripts de terceros asíncronos</li>
                  <li>✅ Web Workers para tareas pesadas</li>
                </ul>

                <h4 className="text-t_primary font-semibold mb-4">CLS Optimization:</h4>
                <ul>
                  <li>✅ Dimensiones definidas para todos los elementos</li>
                  <li>✅ Espacio reservado para contenido dinámico</li>
                  <li>✅ Web fonts optimizados</li>
                  <li>✅ Animaciones con transform</li>
                </ul>
              </div>

              <h2>Conclusión</h2>
              <p>
                Core Web Vitals no son solo métricas técnicas, son una medida directa de la
                experiencia del usuario. Un sitio web que carga rápido, responde inmediatamente
                a las interacciones del usuario y mantiene la estabilidad visual tendrá mejores
                resultados tanto en términos de SEO como de conversión.
              </p>

              <p>
                En Tech Tecnic, implementamos estas optimizaciones en todos nuestros proyectos,
                asegurando que nuestros clientes no solo tengan sitios web visualmente atractivos,
                sino también extremadamente rápidos y optimizados para los motores de búsqueda.
              </p>

              <p>
                Recuerda que la optimización de Core Web Vitals es un proceso continuo. Monitorea
                regularmente tus métricas, identifica áreas de mejora y mantén tu sitio optimizado
                para ofrecer la mejor experiencia posible a tus usuarios.
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
              <h3 className="text-lg font-bold text-white mb-2">SEO Técnico: Guía completa para 2024</h3>
              <p className="text-gray-400 text-sm mb-4">Domina las técnicas de SEO técnico que realmente funcionan en 2024.</p>
              <Link href="/blog/seo-tecnico-guia-completa-2024" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
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
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">Tailwind CSS: Por qué lo amamos</h3>
              <p className="text-gray-400 text-sm mb-4">Descubre por qué Tailwind CSS se ha convertido en la herramienta favorita para estilizar aplicaciones web modernas.</p>
              <Link href="/blog/tailwind-css-por-que-lo-amamos" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
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