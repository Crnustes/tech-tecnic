import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/config/blog-posts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Tech Tecnic",
      description: "El artículo que buscas no existe",
    };
  }

  return {
    title: `${post.title} | Tech Tecnic - Agencia Digital Bogotá`,
    description: post.excerpt,
    keywords: [...post.keywords, 'Tech Tecnic', 'Agencia Digital Bogotá', 'Consultoría tecnológica Colombia'],
    authors: [{ name: 'Tech Tecnic - Agencia Digital' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.techtecnic.com/blog/${post.slug}`,
      publishedTime: post.date,
      images: [`/images/blog/${post.image}.jpg`],
      siteName: 'Tech Tecnic',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`/images/blog/${post.image}.jpg`],
    },
    alternates: {
      canonical: `https://www.techtecnic.com/blog/${post.slug}`,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="bg-gradient-to-b from-t_dark via-slate-900/20 to-black text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-t_primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-t_accent/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-t_primary hover:text-t_accent transition mb-10 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Blog
          </Link>

          {/* Category Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-t_accent/20 to-t_primary/10 text-t_accent px-4 py-2 rounded-full text-sm font-semibold border border-t_accent/30">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400 pb-8 border-b border-white/10">
            {/* Date */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-t_primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm1-6a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              <time className="text-sm md:text-base">{new Date(post.date).toLocaleDateString('es-CO', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-t_primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <span className="text-sm md:text-base">{post.author}</span>
            </div>

            {/* Reading Time */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-t_primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.5 2a1.5 1.5 0 00-1.5 1.5v14A1.5 1.5 0 004.5 19h11a1.5 1.5 0 001.5-1.5V3.5A1.5 1.5 0 0015.5 2h-11zm0 2h11v12h-11V4z" />
              </svg>
              <span className="text-sm md:text-base">{post.readTime} min lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden group">
            {/* Image Background */}
            <Image
              src={`/images/blog/${post.image}.jpg`}
              alt={post.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Border Effect */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <article className="max-w-3xl mx-auto">
          <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s/, '');
                if (level === 1) {
                  return (
                    <h2 key={idx} className="text-4xl font-extrabold text-white mt-12 mb-6 pt-8 border-t border-white/10">
                      {text}
                    </h2>
                  );
                } else if (level === 2) {
                  return (
                    <h3 key={idx} className="text-2xl font-bold text-white mt-8 mb-4 text-transparent bg-gradient-to-r from-t_primary to-t_accent bg-clip-text">
                      {text}
                    </h3>
                  );
                } else if (level === 3) {
                  return (
                    <h4 key={idx} className="text-xl font-bold text-white mt-6 mb-3">
                      {text}
                    </h4>
                  );
                }
              }

              if (paragraph.startsWith('-') || paragraph.startsWith('✅') || paragraph.startsWith('❌')) {
                const items = paragraph.split('\n').filter((line) => line.trim());
                return (
                  <ul key={idx} className="list-none space-y-3 my-6">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-t_primary/50 transition">
                        <span className={`mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full ${
                          item.startsWith('✅') ? 'bg-green-500/20 text-green-400' : 
                          item.startsWith('❌') ? 'bg-red-500/20 text-red-400' : 
                          'bg-t_primary/20 text-t_primary'
                        }`}>
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
                  <ol key={idx} className="list-none space-y-3 my-6">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-r from-t_primary to-t_accent text-t_dark font-bold text-sm">
                          {i + 1}
                        </span>
                        <span>{item.replace(/^\d+\.\s/, '')}</span>
                      </li>
                    ))}
                  </ol>
                );
              }

              return (
                <p key={idx} className="leading-8">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </section>

      {/* Keywords / Tags */}
      <section className="py-12 px-6 border-y border-white/10">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Palabras Clave</h3>
          <div className="flex flex-wrap gap-3">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-t_primary/10 to-t_accent/10 border border-white/10 text-gray-300 text-sm hover:border-t_primary/50 hover:bg-t_primary/20 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 text-t_primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" />
                </svg>
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-extrabold mb-2 leading-tight">
                <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
                  Artículos Relacionados
                </span>
              </h2>
              <p className="text-gray-400 text-lg">Continúa leyendo sobre temas similares</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <article className="group relative h-full rounded-xl overflow-hidden cursor-pointer">
                    {/* Glassmorphism Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-xl transition-colors duration-300" />
                    
                    {/* Content Wrapper */}
                    <div className="relative h-full flex flex-col bg-t_dark/40 rounded-xl overflow-hidden">
                      {/* Image Container */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-t_primary/20 to-t_accent/10">
                        <Image
                          src={`/images/blog/${relatedPost.image}.jpg`}
                          alt={relatedPost.imageAlt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-t_dark via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 bg-t_accent/90 text-t_dark text-xs font-bold rounded-full">
                          {relatedPost.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Meta Info */}
                        <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                          <span className="px-2 py-1 bg-white/5 rounded-full">
                            {relatedPost.readTime} min
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-t_primary group-hover:to-t_accent group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                          {relatedPost.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-auto line-clamp-2">
                          {relatedPost.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                          <span className="text-xs text-gray-500">Lee más</span>
                          <svg className="w-4 h-4 text-t_primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-t_accent/5 via-t_primary/5 to-t_accent/5 rounded-3xl blur-3xl" />
          
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
                ¿Necesitas Implementar Esto en tu Negocio?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              En Tech Tecnic implementamos las estrategias que lees aquí. Convertimos teoría en resultados reales para tu marca.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contacto"
                className="group relative px-8 py-4 bg-gradient-to-r from-t_accent to-pink-500 rounded-lg font-bold text-t_dark overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-t_accent/50"
              >
                <span className="relative z-10">Agendar Consultoría Gratuita</span>
              </a>
              <a
                href="/blog"
                className="px-8 py-4 border-2 border-t_primary text-t_primary font-bold rounded-lg hover:bg-t_primary/10 transition-all"
              >
                Leer Más Artículos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO and AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: `https://www.techtecnic.com/images/blog/${post.image}.jpg`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "Tech Tecnic",
              url: "https://www.techtecnic.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.techtecnic.com/logo.png",
              },
            },
            publisher: {
              "@type": "Organization",
              name: "Tech Tecnic",
              url: "https://www.techtecnic.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.techtecnic.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.techtecnic.com/blog/${post.slug}`,
            },
            keywords: post.keywords.join(', '),
            articleSection: post.category,
            inLanguage: "es-CO",
            provider: {
              "@type": "Organization",
              name: "Tech Tecnic - Agencia Digital Bogotá",
              description: "Agencia líder en desarrollo web, automatización IA, SEO local y consultoría tecnológica en Colombia",
              areaServed: ["Bogotá", "Medellín", "Cali", "Colombia", "Latinoamérica"],
              serviceType: ["Desarrollo Web", "SEO Local", "Automatización IA", "Consultoría Digital"],
            },
          }),
        }}
      />
    </main>
  );
}
