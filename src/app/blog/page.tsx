import Link from "next/link";
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
    <main className="bg-gradient-to-b from-t_dark via-t_primary/10 to-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">
            Blog Tech Tecnic
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estrategias, tendencias y casos reales sobre IA, automatización, SEO y desarrollo web moderno
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`}>
            <article className="bg-gradient-to-br from-t_primary/20 to-transparent border border-t_accent/30 rounded-xl overflow-hidden hover:border-t_accent/60 transition mb-12 cursor-pointer group">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-t_accent text-t_dark text-xs font-bold px-3 py-1 rounded-full">
                      Destacado
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.readTime} min lectura</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-t_accent transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{new Date(featuredPost.date).toLocaleDateString('es-CO')}</span>
                    <span>•</span>
                    <span>{featuredPost.category}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-t_accent/20 to-t_primary/20 rounded-lg h-64 md:h-auto flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">{featuredPost.imageAlt}</p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        )}
      </section>

      {/* All Posts */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Últimos Artículos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="bg-t_dark/50 border border-gray-800 rounded-lg overflow-hidden hover:border-t_accent/50 transition group cursor-pointer h-full flex flex-col">
                {/* Image */}
                <div className="bg-gradient-to-br from-t_primary/20 to-t_accent/10 h-48 flex items-center justify-center overflow-hidden group-hover:from-t_primary/30 transition">
                  <p className="text-gray-500 text-sm text-center px-4">{post.imageAlt}</p>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-t_accent uppercase">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{post.readTime} min</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-t_accent transition line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="text-gray-500 text-xs">
                    {new Date(post.date).toLocaleDateString('es-CO')}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-t_accent/10 to-t_primary/10 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-gray-300 mb-8">
            Aplica las estrategias de nuestro blog. Contáctanos para una consultoría personalizada.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contacto"
              className="bg-t_accent text-t_dark font-bold px-8 py-3 rounded-lg hover:bg-t_accent/80 transition"
            >
              Solicitar Consultoría
            </a>
            <a
              href="https://wa.me/573337151064"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-t_accent text-t_accent px-8 py-3 rounded-lg hover:bg-t_accent/10 transition"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
