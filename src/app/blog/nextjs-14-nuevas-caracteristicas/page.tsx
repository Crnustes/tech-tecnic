import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Next.js 14: Lo nuevo que debes saber | Blog Tech Tecnic',
  description: 'Explora las nuevas características de Next.js 14 y cómo pueden mejorar el rendimiento de tus aplicaciones web. Turbopack, Server Actions y más.',
  keywords: [
    'Next.js 14',
    'React framework',
    'Turbopack',
    'Server Actions',
    'App Router',
    'desarrollo web'
  ],
  openGraph: {
    title: 'Next.js 14: Lo nuevo que debes saber | Blog Tech Tecnic',
    description: 'Explora las nuevas características de Next.js 14 y cómo pueden mejorar el rendimiento de tus aplicaciones web.',
    type: 'article',
    publishedTime: '2024-12-01',
    authors: ['Tech Tecnic'],
  },
  alternates: {
    canonical: 'https://techtecnic.com/blog/nextjs-14-nuevas-caracteristicas',
  },
};

export default function NextJS14Article() {
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
              Desarrollo Web
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Next.js 14: Lo nuevo
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              que debes saber
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
              <span>{new Date('2024-12-01').toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>7 min de lectura</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Next.js 14 llega con mejoras revolucionarias en rendimiento y desarrollo.
            Descubre Turbopack, Server Actions y todas las nuevas características que harán que tus aplicaciones web sean más rápidas y eficientes.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Next.js', 'React', 'Turbopack', 'Server Actions', 'App Router'].map((tag) => (
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
                  <div className="text-6xl font-bold text-t_primary mb-2">14</div>
                  <div className="text-2xl font-bold text-white">Next.js</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>¿Qué es Next.js 14?</h2>
              <p>
                Next.js 14 representa un salto significativo en el ecosistema de React, introduciendo
                mejoras de rendimiento revolucionarias y nuevas APIs que simplifican el desarrollo de aplicaciones web modernas.
                Esta versión se enfoca en la velocidad, la escalabilidad y la experiencia del desarrollador.
              </p>

              <h3>🚀 Turbopack: El sucesor de Webpack</h3>
              <p>
                Una de las características más esperadas de Next.js 14 es Turbopack, el nuevo bundler
                que promete velocidades de compilación hasta 700x más rápidas que Webpack. Turbopack está
                escrito en Rust y optimizado para el rendimiento.
              </p>

              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <h4 className="text-t_primary font-semibold mb-2">Beneficios de Turbopack:</h4>
                <ul>
                  <li>Compilación hasta 700x más rápida</li>
                  <li>Hot reload instantáneo</li>
                  <li>Mejor experiencia de desarrollo</li>
                  <li>Compatibilidad con el ecosistema existente</li>
                </ul>
              </div>

              <h3>⚡ Server Actions: Simplificando las interacciones</h3>
              <p>
                Server Actions permiten ejecutar código del servidor directamente desde componentes del cliente,
                eliminando la necesidad de crear APIs separadas para operaciones simples como envío de formularios,
                actualizaciones de datos y mutaciones.
              </p>

              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')

  // Server-side logic
  await db.posts.create({ title, content })

  revalidatePath('/posts')
}`}</code>
              </pre>

              <h3>🔄 App Router mejorado</h3>
              <p>
                El App Router continúa evolucionando con mejoras en el manejo de layouts anidados,
                loading states más inteligentes y mejor soporte para Server Components.
              </p>

              <h4>Parallel Routes</h4>
              <p>
                Las Parallel Routes permiten renderizar múltiples páginas en la misma vista,
                perfectas para dashboards complejos y aplicaciones con múltiples secciones.
              </p>

              <h4>Intercepting Routes</h4>
              <p>
                Las Intercepting Routes permiten interceptar navegación y mostrar modales
                o overlays sin cambiar la URL del navegador.
              </p>

              <h3>📱 Mejoras en el rendimiento</h3>
              <p>
                Next.js 14 incluye optimizaciones automáticas que mejoran significativamente
                el rendimiento de las aplicaciones:
              </p>

              <ul>
                <li><strong>Partial Prerendering:</strong> Combina rendering estático y dinámico</li>
                <li><strong>Improved Image Optimization:</strong> Mejor compresión y formatos modernos</li>
                <li><strong>Bundle Analyzer integrado:</strong> Análisis detallado del bundle</li>
                <li><strong>React 18 features:</strong> Suspense, streaming y concurrent features</li>
              </ul>

              <h3>🛠️ Mejoras para desarrolladores</h3>
              <p>
                Next.js 14 incluye varias mejoras que hacen la vida del desarrollador más fácil:
              </p>

              <h4>Mejor TypeScript Support</h4>
              <p>
                Soporte mejorado para TypeScript con autocompletado más inteligente
                y mejor inferencia de tipos en Server Components.
              </p>

              <h4>Error Boundaries mejorados</h4>
              <p>
                Los Error Boundaries ahora funcionan mejor con Server Components
                y proporcionan información más detallada sobre errores.
              </p>

              <h3>🔧 Migración a Next.js 14</h3>
              <p>
                La migración a Next.js 14 es generalmente sencilla. Aquí hay algunos pasos recomendados:
              </p>

              <ol>
                <li>Actualiza Next.js: <code>npm install next@latest react@latest react-dom@latest</code></li>
                <li>Revisa las breaking changes en la documentación oficial</li>
                <li>Prueba Turbopack con <code>next dev --turbo</code></li>
                <li>Actualiza tus dependencias relacionadas</li>
                <li>Realiza pruebas exhaustivas de tu aplicación</li>
              </ol>

              <h3>🎯 ¿Cuándo usar Next.js 14?</h3>
              <p>
                Next.js 14 es ideal para:
              </p>

              <ul>
                <li>Aplicaciones web de alto rendimiento</li>
                <li>Proyectos que requieren SEO excelente</li>
                <li>Equipos que buscan la mejor experiencia de desarrollo</li>
                <li>Aplicaciones con requisitos complejos de routing</li>
                <li>Proyectos que necesitan escalabilidad</li>
              </ul>

              <h2>Conclusión</h2>
              <p>
                Next.js 14 marca un hito importante en el desarrollo web moderno. Con Turbopack,
                Server Actions y mejoras significativas en el rendimiento, Next.js continúa siendo
                el framework de elección para aplicaciones web React de producción.
              </p>

              <p>
                En Tech Tecnic, ya estamos utilizando Next.js 14 en nuestros proyectos más recientes,
                aprovechando todas estas nuevas características para ofrecer soluciones web de vanguardia
                a nuestros clientes en Bogotá y Colombia.
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
            <p className="text-gray-400">Más contenido sobre desarrollo web</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">React Server Components: El futuro del desarrollo web</h3>
              <p className="text-gray-400 text-sm mb-4">Cómo los Server Components están cambiando la forma en que construimos aplicaciones React modernas.</p>
              <Link href="/blog/react-server-components-futuro-desarrollo-web" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
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
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">Cómo la IA está revolucionando el desarrollo web</h3>
              <p className="text-gray-400 text-sm mb-4">Descubre cómo la inteligencia artificial está transformando la forma en que creamos sitios web modernos.</p>
              <Link href="/blog/ia-revolucion-desarrollo-web-2024" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
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