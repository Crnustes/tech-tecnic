import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
}

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  posts?: BlogPost[];
  showAllLink?: boolean;
  maxPosts?: number;
}

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Cómo la IA está revolucionando el desarrollo web en 2024',
    excerpt: 'Descubre cómo la inteligencia artificial está transformando la forma en que creamos y mantenemos sitios web modernos.',
    author: 'Tech Tecnic',
    date: '2025-12-15',
    readTime: '5 min',
    category: 'Inteligencia Artificial',
    slug: 'ia-revolucion-desarrollo-web-2024',
    image: '/images/blog/ia-revolucion-desarrollo-web-2024.webp'
  },
  {
    id: '2',
    title: 'SEO Local: Domina Google My Business en Bogotá',
    excerpt: 'Guía completa para optimizar tu presencia local en Google y atraer más clientes en Bogotá y Colombia.',
    author: 'Tech Tecnic',
    date: '2025-12-10',
    readTime: '8 min',
    category: 'SEO',
    slug: 'seo-local-google-my-business-bogota',
    image: '/images/blog/seo-local-google-my-business-bogota.webp'
  },
  {
    id: '3',
    title: 'Automatización de procesos: Reduce costos operativos',
    excerpt: 'Cómo implementar automatizaciones inteligentes que optimicen tus procesos empresariales y reduzcan costos.',
    author: 'Tech Tecnic',
    date: '2025-12-05',
    readTime: '6 min',
    category: 'Automatización',
    slug: 'automatizacion-procesos-reduce-costos',
    image: '/images/blog/automatizacion-procesos-reduce-costos.webp'
  }
];

export function BlogSection({
  title = "Últimas Publicaciones",
  subtitle = "Mantente al día con las últimas tendencias en tecnología",
  posts = defaultPosts,
  showAllLink = true,
  maxPosts = 3
}: BlogSectionProps) {
  const displayPosts = posts.slice(0, maxPosts);

  return (
    <section className="relative py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article key={post.id} className="group bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-t_primary/50 transition-all duration-300">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="aspect-video relative overflow-hidden bg-slate-800">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-t_primary/20 to-t_accent/20" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-t_primary text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('es-CO')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-t_primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-t_primary hover:text-t_accent transition-colors font-semibold"
                >
                  Leer artículo completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-t_primary text-white rounded-lg font-semibold hover:bg-t_accent transition-colors"
            >
              Ver todos los artículos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}