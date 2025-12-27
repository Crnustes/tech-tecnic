import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Tailwind CSS: Por qué lo amamos | Blog Tech Tecnic',
  description: 'Descubre por qué Tailwind CSS se ha convertido en la herramienta favorita para estilizar aplicaciones web modernas. Ventajas, mejores prácticas y casos de uso.',
  keywords: [
    'Tailwind CSS',
    'CSS',
    'desarrollo web',
    'utility-first',
    'framework CSS',
    'estilos',
    'frontend'
  ],
  openGraph: {
    title: 'Tailwind CSS: Por qué lo amamos | Blog Tech Tecnic',
    description: 'Descubre por qué Tailwind CSS se ha convertido en la herramienta favorita para estilizar aplicaciones web modernas.',
    type: 'article',
    publishedTime: '2024-12-05',
    authors: ['Tech Tecnic'],
  },
  alternates: {
    canonical: 'https://techtecnic.com/blog/tailwind-css-por-que-lo-amamos',
  },
};

export default function TailwindCSSArticle() {
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
              Tailwind CSS:
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              Por qué lo amamos
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
              <span>{new Date('2024-12-05').toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>6 min de lectura</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Tailwind CSS ha revolucionado la forma en que escribimos estilos CSS. Descubre por qué
            este framework utility-first se ha convertido en nuestra herramienta favorita para el desarrollo web moderno.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Tailwind CSS', 'CSS', 'utility-first', 'desarrollo web', 'frontend', 'framework'].map((tag) => (
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
                  <div className="text-4xl font-bold text-t_primary mb-2">TAILWIND</div>
                  <div className="text-xl font-bold text-white">CSS</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>¿Qué es Tailwind CSS?</h2>
              <p>
                Tailwind CSS es un framework CSS utility-first que proporciona clases de bajo nivel
                para construir diseños personalizados directamente en tu HTML. En lugar de escribir
                CSS personalizado, usas clases predefinidas que aplican estilos específicos.
              </p>

              <p>
                En Tech Tecnic, hemos adoptado Tailwind CSS como nuestro framework CSS principal
                porque ofrece la combinación perfecta de velocidad de desarrollo, mantenibilidad
                y rendimiento que necesitamos para nuestros proyectos.
              </p>

              <h3>🚀 Por qué amamos Tailwind CSS</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">⚡ Desarrollo ultrarrápido</h4>
                  <ul className="text-gray-300">
                    <li>No escribes CSS personalizado</li>
                    <li>Clases intuitivas y consistentes</li>
                    <li>Prototipado instantáneo</li>
                    <li>Menos tiempo en debugging CSS</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">🎯 Diseño consistente</h4>
                  <ul className="text-gray-300">
                    <li>Sistema de diseño integrado</li>
                    <li>Espaciado y colores consistentes</li>
                    <li>Componentes reutilizables</li>
                    <li>Escalabilidad garantizada</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">📦 Bundle size optimizado</h4>
                  <ul className="text-gray-300">
                    <li>Purging automático de CSS no usado</li>
                    <li>Solo incluyes lo que usas</li>
                    <li>Mejor rendimiento de carga</li>
                    <li>Optimización automática</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">🛠️ Altamente personalizable</h4>
                  <ul className="text-gray-300">
                    <li>Configuración completa del theme</li>
                    <li>Plugins personalizados</li>
                    <li>Extensión infinita</li>
                    <li>Adapta a cualquier diseño</li>
                  </ul>
                </div>
              </div>

              <h3>💡 Comparación: CSS tradicional vs Tailwind</h3>
              <p>
                Veamos cómo se ve el mismo componente en CSS tradicional versus Tailwind CSS:
              </p>

              <h4>CSS Tradicional:</h4>
              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`/* styles.css */
.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 24rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.card-description {
  color: #6b7280;
  line-height: 1.625;
}`}</code>
              </pre>

              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`<!-- HTML -->
<div class="card">
  <h3 class="card-title">Título de la tarjeta</h3>
  <p class="card-description">Descripción de la tarjeta...</p>
</div>`}</code>
              </pre>

              <h4>Tailwind CSS:</h4>
              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`<div class="bg-white rounded-lg shadow-lg p-6 max-w-sm">
  <h3 class="text-xl font-semibold text-gray-800 mb-2">
    Título de la tarjeta
  </h3>
  <p class="text-gray-600 leading-relaxed">
    Descripción de la tarjeta...
  </p>
</div>`}</code>
              </pre>

              <h3>🎨 Sistema de diseño integrado</h3>
              <p>
                Tailwind incluye un sistema de diseño completo que asegura consistencia en todo tu proyecto:
              </p>

              <h4>Espaciado consistente</h4>
              <p>
                Usa un sistema de espaciado basado en rem que escala perfectamente:
                <code className="bg-slate-800 px-2 py-1 rounded text-sm">p-1 p-2 p-3 ... p-96</code>
              </p>

              <h4>Paleta de colores coherente</h4>
              <p>
                Colores organizados por intensidad con nombres intuitivos:
                <code className="bg-slate-800 px-2 py-1 rounded text-sm">gray-50 gray-100 ... gray-900</code>
              </p>

              <h4>Breakpoints responsive</h4>
              <p>
                Sistema de breakpoints móvil-first:
                <code className="bg-slate-800 px-2 py-1 rounded text-sm">sm: md: lg: xl: 2xl:</code>
              </p>

              <h3>🔧 Configuración y personalización</h3>
              <p>
                Tailwind es altamente personalizable. Puedes extenderlo con tu propio theme:
              </p>

              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        't_primary': '#3b82f6',
        't_accent': '#8b5cf6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}`}</code>
              </pre>

              <h3>🚀 Funcionalidades avanzadas</h3>

              <h4>Directives personalizadas</h4>
              <p>
                Tailwind incluye directives CSS que facilitan el desarrollo:
              </p>
              <ul>
                <li><code>@apply</code> - Para extraer clases repetidas a componentes</li>
                <li><code>@layer</code> - Para organizar estilos personalizados</li>
                <li><code>@responsive</code> - Para estilos responsive</li>
                <li><code>@variants</code> - Para estados hover, focus, etc.</li>
              </ul>

              <h4>Modo JIT (Just-In-Time)</h4>
              <p>
                El compilador JIT genera CSS solo para las clases que usas, resultando en:
              </p>
              <ul>
                <li>Compilación ultra-rápida</li>
                <li>Bundle size mínimo</li>
                <li>Soporte para clases dinámicas</li>
                <li>Mejor experiencia de desarrollo</li>
              </ul>

              <h3>📱 Responsive design sin esfuerzo</h3>
              <p>
                Tailwind hace que el responsive design sea intuitivo:
              </p>

              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`<!-- Diseño responsive automático -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded-lg">
    <!-- Contenido -->
  </div>
  <!-- Más elementos -->
</div>`}</code>
              </pre>

              <h3>⚠️ Cuándo NO usar Tailwind CSS</h3>
              <p>
                Aunque amamos Tailwind, no es la solución perfecta para todos los casos:
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-lg my-6">
                <h4 className="text-yellow-400 font-semibold mb-3">Casos donde Tailwind puede no ser ideal:</h4>
                <ul className="text-gray-300">
                  <li>Proyectos muy pequeños donde CSS vanilla es suficiente</li>
                  <li>Equipos que prefieren metodologías CSS tradicionales (BEM, SMACSS)</li>
                  <li>Aplicaciones que requieren CSS altamente dinámico</li>
                  <li>Proyectos legacy que necesitan migración gradual</li>
                  <li>Equipos sin experiencia en utility-first approach</li>
                </ul>
              </div>

              <h3>🛠️ Mejores prácticas en Tech Tecnic</h3>

              <ol>
                <li><strong>Usa @apply para componentes reutilizables:</strong> Extrae patrones comunes a clases personalizadas</li>
                <li><strong>Organiza con @layer:</strong> Mantén estilos personalizados organizados</li>
                <li><strong>Configura tu design system:</strong> Personaliza colores, espaciado y tipografía</li>
                <li><strong>Usa componentes de Tailwind UI:</strong> Para interfaces consistentes y profesionales</li>
                <li><strong>Combina con CSS modules cuando necesites:</strong> Para estilos realmente específicos</li>
                <li><strong>Mantén consistencia en el espaciado:</strong> Usa la escala de espaciado de Tailwind</li>
              </ol>

              <h3>🔄 Migración a Tailwind CSS</h3>
              <p>
                Si estás considerando migrar a Tailwind, aquí va nuestro enfoque recomendado:
              </p>

              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <ol className="text-gray-300 space-y-3">
                  <li><strong>1. Configuración inicial:</strong> Instala Tailwind y configura tu theme</li>
                  <li><strong>2. Componentes base:</strong> Migra componentes simples primero</li>
                  <li><strong>3. Sistema de diseño:</strong> Define tus colores, espaciado y tipografía</li>
                  <li><strong>4. Componentes complejos:</strong> Migra layouts y componentes avanzados</li>
                  <li><strong>5. Optimización:</strong> Configura purging y optimiza el bundle</li>
                  <li><strong>6. Testing:</strong> Asegura que todo funcione en diferentes dispositivos</li>
                </ol>
              </div>

              <h3>🎯 Casos de éxito con Tailwind</h3>
              <p>
                En Tech Tecnic hemos usado Tailwind CSS exitosamente en:
              </p>

              <ul>
                <li><strong>Aplicaciones SaaS:</strong> Interfaces complejas con consistencia perfecta</li>
                <li><strong>Sitios de marketing:</strong> Desarrollo rápido con diseños únicos</li>
                <li><strong>Dashboards administrativos:</strong> Componentes reutilizables y mantenibles</li>
                <li><strong>Landing pages:</strong> Prototipado ultra-rápido y responsive</li>
                <li><strong>Proyectos personales:</strong> Productividad máxima sin overhead</li>
              </ul>

              <h2>Conclusión</h2>
              <p>
                Tailwind CSS ha transformado completamente nuestra forma de trabajar con CSS.
                Lo que comenzó como una herramienta para prototipado rápido se ha convertido
                en nuestro framework CSS principal para todos los proyectos.
              </p>

              <p>
                La combinación de velocidad de desarrollo, mantenibilidad y rendimiento hace
                de Tailwind CSS una herramienta indispensable en nuestro stack tecnológico.
                Si aún no lo has probado, te recomendamos darle una oportunidad - una vez
                que te acostumbras al approach utility-first, no hay vuelta atrás.
              </p>

              <p>
                En Tech Tecnic, continuamos explorando nuevas formas de aprovechar Tailwind CSS,
                incluyendo plugins personalizados y integraciones con otras herramientas de nuestro
                ecosistema de desarrollo.
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
                  <Bookmark className="w-4 h-4" />
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
              <h3 className="text-lg font-bold text-white mb-2">React Server Components: El futuro del desarrollo web</h3>
              <p className="text-gray-400 text-sm mb-4">Descubre cómo los React Server Components están revolucionando el desarrollo web moderno.</p>
              <Link href="/blog/react-server-components-futuro-desarrollo-web" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
                Leer artículo →
              </Link>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">Core Web Vitals: Guía completa de optimización</h3>
              <p className="text-gray-400 text-sm mb-4">Domina Core Web Vitals para mejorar el rendimiento de tu sitio web y posicionamiento SEO.</p>
              <Link href="/blog/core-web-vitals-guia-completa-optimizacion" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
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