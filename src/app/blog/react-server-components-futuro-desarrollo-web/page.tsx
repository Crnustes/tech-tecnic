import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'React Server Components: El futuro del desarrollo web | Blog Tech Tecnic',
  description: 'Descubre cómo los React Server Components están revolucionando el desarrollo web moderno. Aprende sobre sus beneficios, implementación y mejores prácticas.',
  keywords: [
    'React Server Components',
    'React',
    'Next.js',
    'desarrollo web',
    'Server Components',
    'Client Components'
  ],
  openGraph: {
    title: 'React Server Components: El futuro del desarrollo web | Blog Tech Tecnic',
    description: 'Descubre cómo los React Server Components están revolucionando el desarrollo web moderno.',
    type: 'article',
    publishedTime: '2024-12-02',
    authors: ['Tech Tecnic'],
  },
  alternates: {
    canonical: 'https://techtecnic.com/blog/react-server-components-futuro-desarrollo-web',
  },
};

export default function ReactServerComponentsArticle() {
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
              React Server Components:
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              El futuro del desarrollo web
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
              <span>{new Date('2024-12-02').toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>8 min de lectura</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Los React Server Components representan una revolución en cómo pensamos sobre el desarrollo web.
            Descubre cómo esta nueva arquitectura puede transformar tus aplicaciones React.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['React', 'Server Components', 'Next.js', 'RSC', 'desarrollo web'].map((tag) => (
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
                  <div className="text-6xl font-bold text-t_primary mb-2">RSC</div>
                  <div className="text-2xl font-bold text-white">Server Components</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>¿Qué son los React Server Components?</h2>
              <p>
                Los React Server Components (RSC) son una nueva arquitectura introducida por el equipo de React
                que permite ejecutar componentes React en el servidor, enviando menos código JavaScript al cliente
                y mejorando significativamente el rendimiento de las aplicaciones web.
              </p>

              <p>
                A diferencia de los componentes tradicionales que se ejecutan en el navegador, los Server Components
                se renderizan en el servidor y pueden acceder directamente a recursos del backend como bases de datos,
                APIs y sistemas de archivos.
              </p>

              <h3>🚀 Beneficios principales</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">⚡ Mejor rendimiento</h4>
                  <ul className="text-gray-300">
                    <li>Menos JavaScript en el cliente</li>
                    <li>Mejor tiempo de carga inicial</li>
                    <li>Mejor Core Web Vitals</li>
                    <li>Bundle size reducido</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">🔒 Mayor seguridad</h4>
                  <ul className="text-gray-300">
                    <li>Acceso directo a APIs</li>
                    <li>Claves API seguras</li>
                    <li>Lógica sensible en el servidor</li>
                    <li>Menos exposición de código</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">📊 Mejor SEO</h4>
                  <ul className="text-gray-300">
                    <li>Contenido renderizado en servidor</li>
                    <li>Mejor indexación</li>
                    <li>Mejores meta tags dinámicas</li>
                    <li>Contenido completo para bots</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">🛠️ Mejor DX</h4>
                  <ul className="text-gray-300">
                    <li>Menos boilerplate</li>
                    <li>Mejor organización del código</li>
                    <li>Async/await nativo</li>
                    <li>Mejor debugging</li>
                  </ul>
                </div>
              </div>

              <h3>🔄 Server vs Client Components</h3>
              <p>
                La clave para entender RSC es comprender la diferencia entre Server Components y Client Components:
              </p>

              <h4>Server Components (por defecto)</h4>
              <ul>
                <li>Se ejecutan en el servidor</li>
                <li>No tienen acceso al DOM del navegador</li>
                <li>No pueden usar hooks del cliente (useState, useEffect)</li>
                <li>Pueden acceder a bases de datos y APIs directamente</li>
                <li>Se renderizan una sola vez en el servidor</li>
              </ul>

              <h4>Client Components</h4>
              <ul>
                <li>Se ejecutan en el navegador</li>
                <li>Tienen acceso completo al DOM</li>
                <li>Pueden usar todos los hooks de React</li>
                <li>Se hidratan en el cliente</li>
                <li>Requieren JavaScript en el bundle</li>
              </ul>

              <h3>💡 Cuándo usar cada tipo</h3>
              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <h4 className="text-t_primary font-semibold mb-4">Usa Server Components para:</h4>
                <ul className="mb-4">
                  <li>Obtener datos de APIs o bases de datos</li>
                  <li>Renderizar contenido estático</li>
                  <li>Generar meta tags dinámicas</li>
                  <li>Acceder a recursos del servidor</li>
                  <li>Reducir el bundle del cliente</li>
                </ul>

                <h4 className="text-t_primary font-semibold mb-4">Usa Client Components para:</h4>
                <ul>
                  <li>Interacciones del usuario (clicks, forms)</li>
                  <li>Estado local (useState, useReducer)</li>
                  <li>Efectos del navegador (useEffect)</li>
                  <li>Acceso al DOM</li>
                  <li>Librerías que requieren el navegador</li>
                </ul>
              </div>

              <h3>🔧 Implementación práctica</h3>
              <p>
                Veamos cómo implementar RSC en un proyecto Next.js con App Router:
              </p>

              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`// app/blog/page.tsx - Server Component
import { getPosts } from '@/lib/posts'

export default async function BlogPage() {
  // ✅ Se ejecuta en el servidor
  const posts = await getPosts()

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <PostActions postId={post.id} /> {/* Client Component */}
        </article>
      ))}
    </div>
  )
}

// components/PostActions.tsx - Client Component
'use client'

import { useState } from 'react'

export function PostActions({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false)

  // ✅ Se ejecuta en el cliente
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'} Me gusta
    </button>
  )
}`}</code>
              </pre>

              <h3>🔄 Composición de componentes</h3>
              <p>
                Una de las características más poderosas de RSC es cómo los Server y Client Components
                pueden componerse entre sí:
              </p>

              <ul>
                <li><strong>Server Components pueden renderizar Client Components</strong></li>
                <li><strong>Client Components NO pueden renderizar Server Components</strong></li>
                <li><strong>Server Components pueden importar y usar Client Components</strong></li>
                <li><strong>Client Components pueden recibir Server Components como children</strong></li>
              </ul>

              <h3>⚠️ Limitaciones importantes</h3>
              <p>
                Aunque RSC ofrece muchos beneficios, hay algunas limitaciones importantes a considerar:
              </p>

              <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg my-6">
                <h4 className="text-red-400 font-semibold mb-3">Limitaciones de Server Components:</h4>
                <ul className="text-gray-300">
                  <li>No pueden usar hooks del cliente (useState, useEffect, etc.)</li>
                  <li>No tienen acceso al DOM del navegador</li>
                  <li>No pueden manejar eventos del usuario directamente</li>
                  <li>No pueden usar APIs del navegador (localStorage, geolocation, etc.)</li>
                  <li>Deben ser funciones asíncronas si necesitan datos</li>
                </ul>
              </div>

              <h3>🚀 El futuro con RSC</h3>
              <p>
                Los React Server Components representan el futuro del desarrollo web. Esta arquitectura
                permite crear aplicaciones más eficientes, seguras y escalables. Frameworks como Next.js
                ya están adoptando RSC completamente, y es probable que otros frameworks sigan su ejemplo.
              </p>

              <p>
                En Tech Tecnic, estamos utilizando RSC en todos nuestros proyectos Next.js más recientes,
                aprovechando sus beneficios para ofrecer aplicaciones web de alto rendimiento a nuestros clientes.
              </p>

              <h3>🛠️ Mejores prácticas</h3>
              <ol>
                <li><strong>Usa Server Components por defecto:</strong> Solo marca componentes como 'client' cuando necesites funcionalidades del navegador.</li>
                <li><strong>Minimiza el código del cliente:</strong> Mantén la lógica del cliente al mínimo necesario.</li>
                <li><strong>Optimiza las consultas de datos:</strong> Agrupa consultas de datos para reducir round trips.</li>
                <li><strong>Usa streaming:</strong> Aprovecha React 18 streaming para mejor UX.</li>
                <li><strong>Prueba exhaustivamente:</strong> Asegúrate de que la hidratación funcione correctamente.</li>
              </ol>

              <h2>Conclusión</h2>
              <p>
                Los React Server Components están revolucionando la forma en que pensamos sobre el desarrollo web.
                Al permitir que los componentes se ejecuten en el servidor, RSC ofrece beneficios significativos
                en rendimiento, seguridad y experiencia del desarrollador.
              </p>

              <p>
                Aunque requiere un cambio de mentalidad en cómo estructuramos nuestras aplicaciones React,
                los beneficios hacen que valga la pena la transición. El futuro del desarrollo web está
                definitivamente en el servidor.
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
                  <ThumbsUp className="w-4 h-4" />
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