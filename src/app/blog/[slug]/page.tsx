import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/config/blog-posts";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no existe",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.techtecnic.com/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="bg-gradient-to-b from-t_dark via-t_primary/10 to-black text-white">
      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-t_primary/20 to-t_accent/10 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-sm">
            <Link href="/blog" className="text-t_accent hover:underline">
              ← Volver al blog
            </Link>
            <span className="text-gray-600">•</span>
            <span className="bg-t_accent/20 text-t_accent px-3 py-1 rounded-full text-xs font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm1-6a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              <time>{new Date(post.date).toLocaleDateString('es-CO', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z" clipRule="evenodd" />
              </svg>
              <span>{post.readTime} minutos de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-t_primary/20 to-t_accent/10 rounded-lg h-96 flex items-center justify-center border border-gray-800">
            <p className="text-gray-400 text-center">{post.imageAlt}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <article className="max-w-3xl mx-auto prose prose-invert max-w-none">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s/, '');
                if (level === 1) {
                  return (
                    <h1 key={idx} className="text-4xl font-bold text-white mt-8 mb-4">
                      {text}
                    </h1>
                  );
                } else if (level === 2) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-white mt-6 mb-3">
                      {text}
                    </h2>
                  );
                } else if (level === 3) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-white mt-5 mb-2">
                      {text}
                    </h3>
                  );
                }
              }

              if (paragraph.startsWith('-') || paragraph.startsWith('✅') || paragraph.startsWith('❌')) {
                const items = paragraph.split('\n').filter((line) => line.trim());
                return (
                  <ul key={idx} className="list-none pl-0 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-t_accent mt-1">
                          {item.startsWith('✅') ? '✓' : item.startsWith('❌') ? '✗' : '•'}
                        </span>
                        <span>{item.replace(/^[-✅❌]\s/, '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (paragraph.startsWith('1.') || paragraph.startsWith('2.')) {
                const items = paragraph.split('\n').filter((line) => line.trim());
                return (
                  <ol key={idx} className="list-decimal list-inside space-y-2">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
                    ))}
                  </ol>
                );
              }

              return (
                <p key={idx} className="text-base">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </section>

      {/* Keywords */}
      <section className="py-8 px-6 border-y border-gray-800">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="bg-t_primary/20 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-t_primary/30 transition"
              >
                #{keyword.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 bg-t_dark/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Artículos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <article className="bg-t_dark border border-gray-800 rounded-lg overflow-hidden hover:border-t_accent/50 transition group cursor-pointer h-full flex flex-col">
                    <div className="bg-gradient-to-br from-t_primary/20 to-t_accent/10 h-40 flex items-center justify-center">
                      <p className="text-gray-500 text-xs text-center px-4">{relatedPost.imageAlt}</p>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="text-xs font-semibold text-t_accent uppercase mb-2">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-t_accent transition line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm flex-grow line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="text-gray-500 text-xs">
                        {relatedPost.readTime} min lectura
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas Implementar Esto en tu Negocio?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            En Tech Tecnic implementamos las estrategias que lees aquí. Convertimos teoría en resultados reales.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contacto"
              className="bg-t_accent text-t_dark font-bold px-8 py-3 rounded-lg hover:bg-t_accent/80 transition"
            >
              Agendar Consultoría Gratuita
            </a>
            <a
              href="/blog"
              className="border border-t_accent text-t_accent px-8 py-3 rounded-lg hover:bg-t_accent/10 transition"
            >
              Leer Más Artículos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
