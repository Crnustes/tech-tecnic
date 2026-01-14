import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Sparkles, Filter } from 'lucide-react'
import { projects } from '@/config/projects'

export const metadata: Metadata = {
  title: 'Proyectos | Tech Tecnic',
  description: 'Portafolio de proyectos web, e-commerce, apps y automatización realizados por Tech Tecnic.',
  alternates: { canonical: 'https://techtecnic.com/proyectos' },
}

const categories = ['Todos', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function ProyectosPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">Portafolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Nuestros proyectos</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Los mismos casos de éxito que ves en el home, ahora con detalle y el repositorio del chatbot WhatsApp con IA.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 text-gray-300">
          <div className="flex items-center gap-2 mr-2 text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filtrar:</span>
          </div>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-5 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-200"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-transparent hover:shadow-[0_20px_70px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium shadow-lg`}>
                  {project.category}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5 text-t_dark" />
                </Link>
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white group-hover:text-t_primary transition-colors">{project.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-t_primary font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Ver proyecto
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
