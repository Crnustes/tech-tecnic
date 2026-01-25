import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Sparkles } from 'lucide-react';
import { getLocale } from 'next-intl/server';
import { projects } from '@/config/projects';
import { buildLocalizedUrl } from '@/utils/seo';

const pageCopy = {
  es: {
    badge: 'Portafolio',
    titleTop: 'Casos de',
    titleBottom: 'Exito',
    subtitle: 'Proyectos que transforman ideas en experiencias digitales exitosas',
    filterLabel: 'Filtrar:',
    allLabel: 'Todos',
    viewProject: 'Ver proyecto',
    ctaText: 'Quieres ver tu proyecto aqui?',
    ctaButton: 'Iniciar mi proyecto',
  },
  en: {
    badge: 'Portfolio',
    titleTop: 'Success',
    titleBottom: 'Cases',
    subtitle: 'Projects that turn ideas into successful digital experiences',
    filterLabel: 'Filter:',
    allLabel: 'All',
    viewProject: 'View project',
    ctaText: 'Want to see your project here?',
    ctaButton: 'Start my project',
  },
};

const categoryTranslations: Record<string, { es: string; en: string }> = {
  'E-commerce': { es: 'E-commerce', en: 'E-commerce' },
  'Desarrollo Web': { es: 'Desarrollo Web', en: 'Web Development' },
  'App Web': { es: 'App Web', en: 'Web App' },
  Corporativo: { es: 'Corporativo', en: 'Corporate' },
  Portfolio: { es: 'Portfolio', en: 'Portfolio' },
  Automatizacion: { es: 'Automatizacion', en: 'Automation' },
  Informativo: { es: 'Informativo', en: 'Informational' },
  Inmobiliario: { es: 'Inmobiliario', en: 'Real Estate' },
  Hospitality: { es: 'Hospitality', en: 'Hospitality' },
  Mantenimiento: { es: 'Mantenimiento', en: 'Maintenance' },
};

const tagTranslations: Record<string, { es: string; en: string }> = {
  WordPress: { es: 'WordPress', en: 'WordPress' },
  WooCommerce: { es: 'WooCommerce', en: 'WooCommerce' },
  SEO: { es: 'SEO', en: 'SEO' },
  Migracion: { es: 'Migracion', en: 'Migration' },
  'UX/UI': { es: 'UX/UI', en: 'UX/UI' },
  Accesibilidad: { es: 'Accesibilidad', en: 'Accessibility' },
  Branding: { es: 'Branding', en: 'Branding' },
  Premium: { es: 'Premium', en: 'Premium' },
  React: { es: 'React', en: 'React' },
  API: { es: 'API', en: 'API' },
  Backend: { es: 'Backend', en: 'Backend' },
  CRM: { es: 'CRM', en: 'CRM' },
  Filtros: { es: 'Filtros', en: 'Filters' },
  Animaciones: { es: 'Animaciones', en: 'Animations' },
  Diseno: { es: 'Diseno', en: 'Design' },
  Conversion: { es: 'Conversion', en: 'Conversion' },
  Reservas: { es: 'Reservas', en: 'Bookings' },
  Performance: { es: 'Performance', en: 'Performance' },
  Fotografia: { es: 'Fotografia', en: 'Photography' },
  'WhatsApp API': { es: 'WhatsApp API', en: 'WhatsApp API' },
  IA: { es: 'IA', en: 'AI' },
  'SEO GEO': { es: 'SEO GEO', en: 'SEO GEO' },
};

const projectCopy = {
  es: {
    'https://yoica.com': {
      desc: 'Plataforma de productos naturales enfocada en bienestar con diseno limpio y conversion optimizada.',
      category: 'E-commerce',
      tags: ['WordPress', 'WooCommerce', 'SEO'],
    },
    'https://sembrandoconfianza.com/': {
      desc: 'Agricultura sostenible con enfoque comunitario. Migracion completa y optimizacion SEO local.',
      category: 'Desarrollo Web',
      tags: ['WordPress', 'SEO', 'Migracion'],
    },
    'https://conocetusderechos.co/': {
      desc: 'Plataforma informativa para asesoria juridica con foco en accesibilidad y experiencia de usuario.',
      category: 'Informativo',
      tags: ['UX/UI', 'Accesibilidad', 'WordPress'],
    },
    'https://tiendadelchocolate.com/': {
      desc: 'E-commerce premium para chocolates artesanales con integracion WooCommerce y diseno de marca.',
      category: 'E-commerce',
      tags: ['WooCommerce', 'Branding', 'Premium'],
    },
    'https://ananassa.co/': {
      desc: 'E-commerce de fresas con chocolate. SEO GEO, analitica, UX moderno y automatizacion.',
      category: 'E-commerce',
      tags: ['E-commerce', 'SEO GEO', 'IA'],
    },
    'https://woocar.io/': {
      desc: 'Aplicacion web para alquiler de vehiculos electricos, conectada a API y backend personalizado.',
      category: 'App Web',
      tags: ['React', 'API', 'Backend'],
    },
    'http://florida2r.com/': {
      desc: 'Sitio inmobiliario con filtros avanzados y fichas dinamicas integradas con CRM.',
      category: 'Inmobiliario',
      tags: ['CRM', 'Filtros', 'WordPress'],
    },
    'https://cristian.click': {
      desc: 'Portfolio personal optimizado con animaciones React y estructura escalable para SEO tecnico.',
      category: 'Portfolio',
      tags: ['React', 'SEO', 'Animaciones'],
    },
    'https://kldisenoyconstruccion.com/': {
      desc: 'Sitio corporativo de arquitectura con enfoque en estetica, velocidad y SEO.',
      category: 'Corporativo',
      tags: ['Corporativo', 'SEO', 'Diseno'],
    },
    'https://bicicletaselectricasbogota.com.co/': {
      desc: 'Tienda de movilidad electrica con UX enfocado en conversiones y productos dinamicos.',
      category: 'E-commerce',
      tags: ['E-commerce', 'SEO GEO', 'Conversion'],
    },
    'https://imperialdunas.com/': {
      desc: 'Resort de lujo frente al mar con diseno premium, integracion de reservas y optimizacion global.',
      category: 'Hospitality',
      tags: ['Premium', 'Reservas', 'Performance'],
    },
    'https://hoffman-latam.com/': {
      desc: 'Mantenimiento tecnico y optimizacion de rendimiento para empresa de fotografia profesional.',
      category: 'Mantenimiento',
      tags: ['Mantenimiento', 'Performance', 'Fotografia'],
    },
    'https://github.com/Crnustes/api_whatsapp_techtecnic': {
      desc: 'Bot de WhatsApp con IA para automatizar atencion y ventas sobre WhatsApp Business API.',
      category: 'Automatizacion',
      tags: ['WhatsApp API', 'IA', 'Automatizacion'],
    },
  },
  en: {
    'https://yoica.com': {
      desc: 'Natural products platform focused on wellness with clean design and optimized conversions.',
      category: 'E-commerce',
      tags: ['WordPress', 'WooCommerce', 'SEO'],
    },
    'https://sembrandoconfianza.com/': {
      desc: 'Sustainable agriculture with a community focus. Full migration and local SEO optimization.',
      category: 'Web Development',
      tags: ['WordPress', 'SEO', 'Migration'],
    },
    'https://conocetusderechos.co/': {
      desc: 'Informational platform for legal advisory with a focus on accessibility and user experience.',
      category: 'Informational',
      tags: ['UX/UI', 'Accessibility', 'WordPress'],
    },
    'https://tiendadelchocolate.com/': {
      desc: 'Premium e-commerce for artisanal chocolates with WooCommerce integration and brand design.',
      category: 'E-commerce',
      tags: ['WooCommerce', 'Branding', 'Premium'],
    },
    'https://ananassa.co/': {
      desc: 'Chocolate strawberry e-commerce. GEO SEO, analytics, modern UX, and automation.',
      category: 'E-commerce',
      tags: ['E-commerce', 'SEO GEO', 'AI'],
    },
    'https://woocar.io/': {
      desc: 'Web app for electric vehicle rentals, connected to an API and custom backend.',
      category: 'Web App',
      tags: ['React', 'API', 'Backend'],
    },
    'http://florida2r.com/': {
      desc: 'Real estate site with advanced filters and dynamic listings integrated with CRM.',
      category: 'Real Estate',
      tags: ['CRM', 'Filters', 'WordPress'],
    },
    'https://cristian.click': {
      desc: 'Personal portfolio optimized with React animations and scalable SEO structure.',
      category: 'Portfolio',
      tags: ['React', 'SEO', 'Animations'],
    },
    'https://kldisenoyconstruccion.com/': {
      desc: 'Corporate architecture site focused on aesthetics, speed, and SEO.',
      category: 'Corporate',
      tags: ['Corporate', 'SEO', 'Design'],
    },
    'https://bicicletaselectricasbogota.com.co/': {
      desc: 'Electric mobility store with conversion-focused UX and dynamic products.',
      category: 'E-commerce',
      tags: ['E-commerce', 'SEO GEO', 'Conversion'],
    },
    'https://imperialdunas.com/': {
      desc: 'Luxury beachfront resort with premium design, booking integration, and global optimization.',
      category: 'Hospitality',
      tags: ['Premium', 'Bookings', 'Performance'],
    },
    'https://hoffman-latam.com/': {
      desc: 'Technical maintenance and performance optimization for a professional photography company.',
      category: 'Maintenance',
      tags: ['Maintenance', 'Performance', 'Photography'],
    },
    'https://github.com/Crnustes/api_whatsapp_techtecnic': {
      desc: 'WhatsApp AI bot to automate support and sales on WhatsApp Business API.',
      category: 'Automation',
      tags: ['WhatsApp API', 'AI', 'Automation'],
    },
  },
};

const translateTag = (tag: string, locale: 'es' | 'en') => {
  const mapped = tagTranslations[tag];
  if (!mapped) return tag;
  return mapped[locale];
};

const translateCategory = (category: string, locale: 'es' | 'en') => {
  const mapped = categoryTranslations[category];
  if (!mapped) return category;
  return mapped[locale];
};

export default async function Projects() {
  const locale = (await getLocale()) as 'es' | 'en';
  const copy = pageCopy[locale] ?? pageCopy.es;

  const localizedProjects = projects.map(project => {
    const overrides = projectCopy[locale]?.[project.link];
    const category = overrides?.category ?? project.category;
    const tags = overrides?.tags ?? project.tags;

    return {
      ...project,
      desc: overrides?.desc ?? project.desc,
      category,
      tags: tags.map(tag => translateTag(tag, locale)),
      categoryLabel: translateCategory(category, locale),
    };
  });

  return (
    <section id="proyectos" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-t_primary/10 to-t_accent/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">{copy.badge}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-t_dark">{copy.titleTop} </span>
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              {copy.titleBottom}
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {localizedProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5 text-t_dark" />
                </Link>

                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium shadow-lg`}>
                  {project.categoryLabel}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-t_dark group-hover:text-t_primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                    >
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
                  {copy.viewProject}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">{copy.ctaText}</p>
          <Link
            href={buildLocalizedUrl('/contacto', locale)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-t_primary to-cyan-400 text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-2xl"
          >
            {copy.ctaButton}
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
