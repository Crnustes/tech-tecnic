'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag, Search, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

const featuredPosts = [
  {
    id: '1',
    title: 'Cómo la IA está revolucionando el desarrollo web en 2024',
    excerpt: 'Descubre cómo la inteligencia artificial está transformando la forma en que creamos y mantenemos sitios web modernos.',
    author: 'Tech Tecnic',
    date: '2025-12-15',
    readTime: '5 min',
    category: 'Inteligencia Artificial',
    slug: 'ia-revolucion-desarrollo-web-2024',
    image: '/images/blog/ia-revolucion-desarrollo-web-2024.webp',
    featured: true
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
    image: '/images/blog/seo-local-google-my-business-bogota.webp',
    featured: true
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
    image: '/images/blog/automatizacion-procesos-reduce-costos.webp',
    featured: true
  },
  {
    id: '7',
    title: 'Next.js 14: Lo nuevo que debes saber',
    excerpt: 'Explora las nuevas características de Next.js 14 y cómo pueden mejorar el rendimiento de tus aplicaciones web.',
    author: 'Tech Tecnic',
    date: '2025-12-01',
    readTime: '7 min',
    category: 'Desarrollo Web',
    slug: 'nextjs-14-nuevas-caracteristicas',
    image: '/images/blog/nextjs-14-nuevas-caracteristicas.webp',
    featured: true
  }
];

const recentPosts = [
  {
    id: '4',
    title: 'Apps móviles vs Web responsive: ¿Cuál elegir?',
    excerpt: 'Análisis detallado de las ventajas y desventajas de cada enfoque para tu negocio.',
    author: 'Tech Tecnic',
    date: '2025-11-28',
    readTime: '7 min',
    category: 'Desarrollo Móvil',
    slug: 'apps-moviles-vs-web-responsive',
    image: '/images/blog/apps-moviles-vs-web-responsive.webp'
  },
  {
    id: '5',
    title: 'E-commerce en Colombia: Tendencias 2025',
    excerpt: 'Las tendencias que dominarán el comercio electrónico en Colombia el próximo año.',
    author: 'Tech Tecnic',
    date: '2025-11-20',
    readTime: '6 min',
    category: 'E-commerce',
    slug: 'ecommerce-colombia-tendencias-2025',
    image: '/images/blog/ecommerce-colombia-tendencias-2025.webp'
  },
  {
    id: '6',
    title: 'Mantenimiento web preventivo: Evita crisis',
    excerpt: 'Por qué el mantenimiento preventivo es crucial para la salud de tu sitio web.',
    author: 'Tech Tecnic',
    date: '2025-11-15',
    readTime: '4 min',
    category: 'Mantenimiento',
    slug: 'mantenimiento-web-preventivo',
    image: '/images/blog/mantenimiento-web-preventivo.webp'
  },
  {
    id: '8',
    title: 'React Server Components: El futuro del desarrollo web',
    excerpt: 'Cómo los Server Components están cambiando la forma en que construimos aplicaciones React modernas.',
    author: 'Tech Tecnic',
    date: '2025-11-10',
    readTime: '6 min',
    category: 'React',
    slug: 'react-server-components-futuro-desarrollo-web',
    image: '/images/blog/react-server-components-futuro-desarrollo-web.webp'
  },
  {
    id: '9',
    title: 'ChatGPT para desarrolladores: Más allá del código',
    excerpt: 'Descubre cómo usar ChatGPT para debugging, documentación, testing y optimización de código.',
    author: 'Tech Tecnic',
    date: '2025-11-05',
    readTime: '8 min',
    category: 'Inteligencia Artificial',
    slug: 'chatgpt-para-desarrolladores-guia-completa',
    image: '/images/blog/chatgpt-para-desarrolladores-guia-completa.webp'
  },
  {
    id: '10',
    title: 'Core Web Vitals: Por qué importan para tu SEO',
    excerpt: 'Guía completa sobre Core Web Vitals y cómo optimizarlos para mejorar tu posicionamiento en Google.',
    author: 'Tech Tecnic',
    date: '2025-10-30',
    readTime: '9 min',
    category: 'SEO',
    slug: 'core-web-vitals-guia-completa-optimizacion',
    image: '/images/blog/core-web-vitals-guia-completa-optimizacion.webp'
  },
  {
    id: '11',
    title: 'Automatización de marketing con Zapier',
    excerpt: 'Cómo crear flujos de trabajo automatizados que conecten tus herramientas de marketing favoritas.',
    author: 'Tech Tecnic',
    date: '2025-10-25',
    readTime: '5 min',
    category: 'Automatización',
    slug: 'automatizacion-marketing-zapier',
    image: '/images/blog/automatizacion-marketing-zapier.webp'
  },
  {
    id: '12',
    title: 'Progressive Web Apps (PWA): El futuro de las apps móviles',
    excerpt: 'Todo lo que necesitas saber sobre PWAs y por qué son la evolución natural de las aplicaciones web.',
    author: 'Tech Tecnic',
    date: '2025-10-20',
    readTime: '7 min',
    category: 'Desarrollo Móvil',
    slug: 'pwa-apps-web-progresivas-guia-completa',
    image: '/images/blog/pwa-apps-web-progresivas-guia-completa.webp'
  },
  {
    id: '13',
    title: 'Tailwind CSS: Por qué lo amamos los desarrolladores',
    excerpt: 'Descubre por qué Tailwind CSS se ha convertido en la herramienta favorita para estilizar aplicaciones web modernas.',
    author: 'Tech Tecnic',
    date: '2025-10-15',
    readTime: '6 min',
    category: 'CSS',
    slug: 'tailwind-css-por-que-lo-amamos',
    image: '/images/blog/tailwind-css-por-que-lo-amamos.webp'
  }
];

const categories = [
  { name: 'Desarrollo Web', count: 1, slug: 'desarrollo-web' },
  { name: 'Inteligencia Artificial', count: 2, slug: 'inteligencia-artificial' },
  { name: 'SEO', count: 2, slug: 'seo' },
  { name: 'Automatización', count: 2, slug: 'automatizacion' },
  { name: 'Desarrollo Móvil', count: 2, slug: 'desarrollo-movil' },
  { name: 'React', count: 1, slug: 'react' },
  { name: 'E-commerce', count: 1, slug: 'e-commerce' },
  { name: 'Mantenimiento', count: 1, slug: 'mantenimiento' },
  { name: 'CSS', count: 1, slug: 'css' }
];

export default function BlogPage() {
  // Estados para búsqueda, categoría y paginación
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Combinar todos los posts
  const allPosts = useMemo(() => [...featuredPosts, ...recentPosts], []);

  // Filtrar posts según búsqueda y categoría
  const filteredPosts = useMemo(() => {
    let filtered = allPosts;

    // Filtrar por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter(post => {
        const postCategorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
        return postCategorySlug === selectedCategory;
      });
    }

    return filtered;
  }, [allPosts, searchQuery, selectedCategory]);

  // Calcular posts paginados
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  // Calcular total de páginas
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Resetear a página 1 cuando cambian los filtros
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryClick = (categorySlug: string) => {
    if (selectedCategory === categorySlug) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categorySlug);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">Blog Tech Tecnic</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Conocimiento y
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              Tendencias Digitales
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Mantente al día con las últimas tendencias en desarrollo web, inteligencia artificial,
            automatización, SEO y transformación digital en Colombia
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-t_primary/50 focus:ring-1 focus:ring-t_primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter & Results */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedCategory 
                  ? categories.find(c => c.slug === selectedCategory)?.name 
                  : searchQuery 
                    ? `Resultados para "${searchQuery}"`
                    : 'Todos los Artículos'
                }
              </h2>
              <p className="text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo' : 'artículos'}
              </p>
            </div>

            {(selectedCategory || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {paginatedPosts.map((post) => (
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
                        <button
                          onClick={() => {
                            const categorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
                            handleCategoryClick(categorySlug);
                          }}
                          className="px-3 py-1 bg-t_primary hover:bg-t_primary/80 text-white text-xs font-semibold rounded-full transition-colors"
                        >
                          {post.category}
                        </button>
                      </div>
                    </div>
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
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
                        Leer más
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        currentPage === page
                          ? 'bg-t_primary border-t_primary text-white'
                          : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No se encontraron artículos</h3>
              <p className="text-gray-400 mb-6">
                No hay artículos que coincidan con tu búsqueda o filtro.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="px-6 py-3 bg-t_primary hover:bg-t_primary/80 text-white rounded-lg transition-colors"
              >
                Ver todos los artículos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sidebar with Categories */}
      <section className="relative py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Tag className="w-6 h-6 text-t_primary" />
              Categorías
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`p-4 rounded-xl border transition-all text-left ${
                    selectedCategory === category.slug
                      ? 'bg-t_primary border-t_primary text-white'
                      : 'bg-white/5 border-white/10 hover:border-t_primary/50 text-white'
                  }`}
                >
                  <div className="font-semibold mb-1">{category.name}</div>
                  <div className={`text-sm ${selectedCategory === category.slug ? 'text-white/80' : 'text-gray-400'}`}>
                    {category.count} {category.count === 1 ? 'artículo' : 'artículos'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}