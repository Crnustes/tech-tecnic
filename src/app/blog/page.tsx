import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/config/blog-posts";

export const metadata = {
  title: "Blog | Tech Tecnic",
  description: "Artículos sobre IA, SEO local y desarrollo web moderno",
};

export default function BlogPage() {
  // Get all posts sorted by date (most recent first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Featured post is the first one marked as featured
  const featuredPost = sortedPosts.find((post) => post.featured);
  
  // Other posts are all posts that are not the featured one
  const otherPosts = sortedPosts.filter((post) => post.id !== featuredPost?.id);

  return (
    <main className="bg-gradient-to-b from-t_dark via-slate-900/20 to-black text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-t_primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-t_accent/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-t_primary/30 mb-8">
            <span className="w-2 h-2 bg-t_primary rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Conocimiento y Estrategia Digital</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-t_primary bg-clip-text text-transparent">
              Blog Tech Tecnic
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Estrategias, tendencias y casos reales sobre IA, automatización, SEO y desarrollo web moderno que transforman negocios
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`}>
            <article className="group relative overflow-hidden rounded-2xl mb-16 cursor-pointer">
              {/* Enhanced Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-t_primary/15 via-transparent to-t_accent/10 backdrop-blur-xl rounded-2xl" />
              <div className="absolute inset-0 border border-gradient-to-r from-t_primary/40 via-white/5 to-t_accent/20 rounded-2xl" />
              
              {/* Content */}
              <div className="relative grid md:grid-cols-2 gap-8 p-10 md:p-12">
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="relative flex items-center gap-2 bg-gradient-to-r from-t_accent/20 to-t_primary/20 text-t_accent text-xs font-bold px-4 py-2 rounded-full border border-t_accent/40">
                      <span className="w-2 h-2 bg-t_accent rounded-full animate-pulse" />
                      Artículo Destacado
                    </span>
                    <span className="text-gray-500 text-xs px-3 py-1.5 bg-white/5 rounded-full">
                      {featuredPost.readTime} min lectura
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-t_primary group-hover:to-t_accent group-hover:bg-clip-text transition-all duration-300">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-t_primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm1-6a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                      <time>{new Date(featuredPost.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
                    </div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span className="text-t_accent font-semibold">{featuredPost.category}</span>
                  </div>

                  {/* Arrow CTA */}
                  <div className="mt-8 flex items-center gap-2 text-t_primary font-semibold group/cta">
                    Leer artículo
                    <svg className="w-5 h-5 group-hover/cta:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 md:h-full min-h-80 rounded-xl overflow-hidden group/image">
                  <Image
                    src={`/images/blog/${featuredPost.image}.jpg`}
                    alt={featuredPost.imageAlt}
                    fill
                    className="object-cover group-hover/image:scale-110 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </article>
          </Link>
        )}
      </section>

      {/* All Posts */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Últimos Artículos</h2>
          <p className="text-gray-400 text-lg">Mantente actualizado con nuestras últimas publicaciones</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, idx) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group relative h-full rounded-xl overflow-hidden cursor-pointer">
                {/* Glassmorphism Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-xl transition-colors duration-300" />
                
                {/* Content Wrapper */}
                <div className="relative h-full flex flex-col bg-t_dark/40 rounded-xl overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-t_primary/20 to-t_accent/10">
                    <Image
                      src={`/images/blog/${post.image}.jpg`}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-t_dark via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-t_accent/90 backdrop-blur-md text-t_dark text-xs font-bold rounded-full border border-t_accent/50">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 mb-4 text-xs text-gray-400">
                      <span className="px-2.5 py-1 bg-white/5 rounded-full">
                        {post.readTime} min lectura
                      </span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full" />
                      <time>{new Date(post.date).toLocaleDateString('es-CO', { month: 'short', day: 'numeric' })}</time>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-t_primary group-hover:to-t_accent group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-auto line-clamp-3">
                      {post.excerpt}
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
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 mt-20 relative">
        <div className="max-w-4xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-t_accent/5 via-t_primary/5 to-t_accent/5 rounded-3xl blur-3xl" />
          
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
                ¿Listo para Transformar tu Negocio?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Aplica las estrategias de nuestro blog. Contáctanos para una consultoría personalizada y convierte el conocimiento en resultados.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contacto"
                className="group relative px-8 py-4 bg-gradient-to-r from-t_accent to-pink-500 rounded-lg font-bold text-t_dark overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-t_accent/50"
              >
                <span className="relative z-10">Solicitar Consultoría</span>
              </a>
              <a
                href="https://wa.me/573337151064"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-t_primary text-t_primary font-bold rounded-lg hover:bg-t_primary/10 transition-all"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
