'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Sparkles, Filter } from 'lucide-react';
import { FadeIn, Stagger, AnimatedCard } from './animations';

const projects = [
  {
    title: 'Yoica.com',
    desc: 'Plataforma de productos naturales enfocada en bienestar con diseño limpio y conversión optimizada.',
    category: 'E-commerce',
    tags: ['WordPress', 'WooCommerce', 'SEO'],
    link: 'https://yoica.com',
    image: '/images/yoica.png',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'SembrandoConfianza.com',
    desc: 'Agricultura sostenible con enfoque comunitario. Migración completa y optimización SEO local.',
    category: 'Desarrollo Web',
    tags: ['WordPress', 'SEO', 'Migración'],
    link: 'https://sembrandoconfianza.com/',
    image: '/images/sembrando.png',
    gradient: 'from-green-500 to-lime-500',
  },
  {
    title: 'ConoceTusDerechos.co',
    desc: 'Plataforma informativa para asesoría jurídica con foco en accesibilidad y experiencia de usuario.',
    category: 'Informativo',
    tags: ['UX/UI', 'Accesibilidad', 'WordPress'],
    link: 'https://conocetusderechos.co/',
    image: '/images/conoce.png',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'TiendaDelChocolate.com',
    desc: 'E-commerce premium para chocolates artesanales con integración WooCommerce y diseño de marca.',
    category: 'E-commerce',
    tags: ['WooCommerce', 'Branding', 'Premium'],
    link: 'https://tiendadelchocolate.com/',
    image: '/images/chocolate.png',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Ananassa.co',
    desc: 'E-commerce de fresas con chocolate. SEO GEO, analítica, UX moderno y automatización.',
    category: 'E-commerce',
    tags: ['E-commerce', 'SEO GEO', 'IA'],
    link: 'https://ananassa.co/',
    image: '/images/ananassa.png',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'WooCar.io',
    desc: 'Aplicación web para alquiler de vehículos eléctricos, conectada a API y backend personalizado.',
    category: 'App Web',
    tags: ['React', 'API', 'Backend'],
    link: 'https://woocar.io/',
    image: '/images/woocar.png',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Florida2R.com',
    desc: 'Sitio inmobiliario con filtros avanzados y fichas dinámicas integradas con CRM.',
    category: 'Inmobiliario',
    tags: ['CRM', 'Filtros', 'WordPress'],
    link: 'http://florida2r.com/',
    image: '/images/florida.png',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Cristian.click',
    desc: 'Portfolio personal optimizado con animaciones React y estructura escalable para SEO técnico.',
    category: 'Portfolio',
    tags: ['React', 'SEO', 'Animaciones'],
    link: 'https://cristian.click',
    image: '/images/portafolio.png',
    gradient: 'from-slate-500 to-gray-600',
  },
  {
    title: 'KLDiseñoYConstrucción.com',
    desc: 'Sitio corporativo de arquitectura con enfoque en estética, velocidad y SEO.',
    category: 'Corporativo',
    tags: ['Corporativo', 'SEO', 'Diseño'],
    link: 'https://kldisenoyconstruccion.com/',
    image: '/images/kldiseno.png',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'BicicletasElectricasBogota.com.co',
    desc: 'Tienda de movilidad eléctrica con UX enfocado en conversiones y productos dinámicos.',
    category: 'E-commerce',
    tags: ['E-commerce', 'SEO GEO', 'Conversión'],
    link: 'https://bicicletaselectricasbogota.com.co/',
    image: '/images/bicicletas.png',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'ImperialDunas.com',
    desc: 'Resort de lujo frente al mar con diseño premium, integración de reservas y optimización global.',
    category: 'Hospitality',
    tags: ['Premium', 'Reservas', 'Performance'],
    link: 'https://imperialdunas.com/',
    image: '/images/imperial.png',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Hoffman-Latam.com',
    desc: 'Mantenimiento técnico y optimización de rendimiento para empresa de fotografía profesional.',
    category: 'Mantenimiento',
    tags: ['Mantenimiento', 'Performance', 'Fotografía'],
    link: 'https://hoffman-latam.com/',
    image: '/images/hoffman.png',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const categories = ['Todos', 'E-commerce', 'Desarrollo Web', 'App Web', 'Corporativo', 'Portfolio'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="proyectos" className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-t_primary/10 to-t_accent/10 border border-t_primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-t_primary" />
              <span className="text-sm text-t_primary font-medium">Portfolio</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-t_dark">Casos de </span>
              <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
                Éxito
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Proyectos que transforman ideas en experiencias digitales exitosas
            </p>
          </div>
        </FadeIn>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-gray-400 mr-2">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filtrar:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-t_primary to-cyan-400 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" delay={0.3}>
          {filteredProjects.map((project, index) => (
            <AnimatedCard
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} hover:-translate-y-1 transition-all duration-500`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{boxShadow: `0 20px 60px -15px rgba(0, 217, 255, 0.5)`}} />
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                
                {/* Subtle overlay for better readability */}
                <div className="absolute inset-0 bg-black/10" />
                
                {/* Visit Button */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-white shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 text-t_dark" />
                </Link>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-t_dark text-xs font-semibold shadow-lg border border-white/50">
                  {project.category}
                </div>
              </div>

              {/* Content - con fondo semi-transparente para mejor contraste */}
              <div className="relative p-6 space-y-4 bg-black/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white group-hover:text-t_accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all hover:text-t_accent"
                >
                  Ver proyecto
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
            </AnimatedCard>
          ))}
        </Stagger>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">¿Quieres ver tu proyecto aquí?</p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-t_primary to-cyan-400 text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-2xl"
          >
            Iniciar mi proyecto
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}