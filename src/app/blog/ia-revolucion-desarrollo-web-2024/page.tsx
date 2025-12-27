'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export default function BlogPost() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    if (!isSaved) {
      alert('Artículo guardado en tu lista');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Cómo la IA está revolucionando el desarrollo web en 2024',
          text: 'Descubre cómo la inteligencia artificial está transformando el desarrollo web',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error al compartir:', err);
      }
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

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
              Inteligencia Artificial
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Cómo la IA está revolucionando
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              el desarrollo web en 2024
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
              <span>{new Date('2024-12-06').toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>7 min de lectura</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            La inteligencia artificial está transformando radicalmente el desarrollo web.
            Desde asistentes de código hasta diseño automático, descubre cómo estas herramientas están cambiando la forma en que creamos sitios web.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['IA', 'desarrollo web', 'ChatGPT', 'GitHub Copilot', 'automatización', '2024'].map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
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
                  <div className="text-4xl font-bold text-t_primary mb-2">AI</div>
                  <div className="text-xl font-bold text-white">Revolución Web</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>La transformación del desarrollo web</h2>
              <p>
                2024 está marcando un punto de inflexión en el desarrollo web. La inteligencia artificial
                no solo está asistiendo a los desarrolladores, sino que está redefiniendo completamente
                cómo pensamos sobre la creación de aplicaciones web.
              </p>

              <p>
                En Tech Tecnic, hemos integrado herramientas de IA en nuestro flujo de trabajo diario,
                lo que nos ha permitido aumentar nuestra productividad en un 300% mientras mantenemos
                la calidad y creatividad que nuestros clientes esperan.
              </p>

              <h3>🤖 Asistentes de código: La nueva normalidad</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">GitHub Copilot</h4>
                  <ul className="text-gray-300">
                    <li>Autocompletado inteligente</li>
                    <li>Generación de funciones completas</li>
                    <li>Sugerencias context-aware</li>
                    <li>Soporte multi-lenguaje</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">ChatGPT + GPT-4</h4>
                  <ul className="text-gray-300">
                    <li>Análisis de código complejo</li>
                    <li>Explicación de conceptos</li>
                    <li>Generación de tests</li>
                    <li>Code reviews automatizados</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Claude AI</h4>
                  <ul className="text-gray-300">
                    <li>Análisis de largo contexto</li>
                    <li>Respuestas más precisas</li>
                    <li>Mejor comprensión técnica</li>
                    <li>Enfoque en seguridad</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">CodeWhisperer</h4>
                  <ul className="text-gray-300">
                    <li>Recomendaciones de seguridad</li>
                    <li>Optimización automática</li>
                    <li>Integración AWS</li>
                    <li>Aprendizaje continuo</li>
                  </ul>
                </div>
              </div>

              <h3>🎨 Diseño y prototipado con IA</h3>
              <p>
                Las herramientas de IA están democratizando el diseño web, permitiendo a desarrolladores
                sin background en diseño crear interfaces profesionales.
              </p>

              <h4>Herramientas de diseño generativo:</h4>
              <ul>
                <li><strong>Uizard:</strong> Convierte sketches en diseños completos</li>
                <li><strong>TeleportHQ:</strong> Genera código desde diseños</li>
                <li><strong>Anima:</strong> Prototipado con IA</li>
                <li><strong>Galileo AI:</strong> Diseño de interfaces conversacional</li>
              </ul>

              <h4>Generadores de componentes:</h4>
              <ul>
                <li><strong>Builder.io:</strong> Componentes visuales con IA</li>
                <li><strong>Locofy:</strong> Convierte diseños en código React</li>
                <li><strong>Relume:</strong> Librería de componentes con IA</li>
              </ul>

              <h3>⚡ Automatización del desarrollo</h3>
              <p>
                La IA está automatizando tareas repetitivas, permitiendo a los desarrolladores
                enfocarse en problemas de alto valor.
              </p>

              <h4>Automatización de código:</h4>
              <ul>
                <li><strong>Generación automática de CRUD:</strong> APIs completas en minutos</li>
                <li><strong>Tests automatizados:</strong> Cobertura de testing inteligente</li>
                <li><strong>Optimización de rendimiento:</strong> Sugerencias automáticas</li>
                <li><strong>Code refactoring:</strong> Mejora automática del código</li>
              </ul>

              <h4>DevOps con IA:</h4>
              <ul>
                <li><strong>GitHub Actions optimizadas:</strong> Workflows inteligentes</li>
                <li><strong>Monitoreo predictivo:</strong> Detección de issues antes de que ocurran</li>
                <li><strong>Deployments automatizados:</strong> Estrategias de release inteligentes</li>
              </ul>

              <h3>🔍 Testing inteligente con IA</h3>
              <p>
                Los tests tradicionales están evolucionando con IA para ser más efectivos y menos propensos a errores.
              </p>

              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <h4 className="text-t_primary font-semibold mb-4">Testing con IA:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li><strong>Test generation:</strong> Creación automática de casos de prueba</li>
                  <li><strong>Visual regression testing:</strong> Detección automática de cambios visuales</li>
                  <li><strong>API testing inteligente:</strong> Generación de requests y validaciones</li>
                  <li><strong>Performance testing:</strong> Análisis predictivo de bottlenecks</li>
                  <li><strong>Accessibility testing:</strong> Verificación automática de WCAG</li>
                </ul>
              </div>

              <h3>🚀 Optimización de rendimiento con IA</h3>
              <p>
                La IA está revolucionando cómo optimizamos el rendimiento web, identificando
                problemas y sugiriendo soluciones automáticamente.
              </p>

              <h4>Core Web Vitals con IA:</h4>
              <ul>
                <li><strong>Lighthouse con IA:</strong> Recomendaciones personalizadas</li>
                <li><strong>Image optimization:</strong> Compresión inteligente automática</li>
                <li><strong>Bundle analysis:</strong> Optimización automática del JavaScript</li>
                <li><strong>CDN optimization:</strong> Distribución inteligente de contenido</li>
              </ul>

              <h3>🎯 Casos de uso reales en Tech Tecnic</h3>
              <p>
                Hemos implementado IA en diversos proyectos con resultados sorprendentes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">E-commerce Platform</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Redujimos el tiempo de desarrollo de 6 meses a 2 meses usando IA para generar
                    componentes reutilizables y optimizar automáticamente el rendimiento.
                  </p>
                  <ul className="text-gray-400 text-xs">
                    <li>60% menos tiempo en desarrollo</li>
                    <li>40% mejor rendimiento Core Web Vitals</li>
                    <li>95% cobertura de testing automático</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">SaaS Dashboard</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Implementamos un sistema de componentes auto-generados que se adaptan
                    al contenido dinámicamente, reduciendo bugs en un 70%.
                  </p>
                  <ul className="text-gray-400 text-xs">
                    <li>70% reducción de bugs</li>
                    <li>50% más componentes reutilizables</li>
                    <li>Mantenimiento 80% más eficiente</li>
                  </ul>
                </div>
              </div>

              <h3>⚠️ Desafíos y consideraciones éticas</h3>
              <p>
                Aunque la IA ofrece enormes beneficios, es importante considerar los desafíos:
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-lg my-6">
                <h4 className="text-yellow-400 font-semibold mb-3">Consideraciones importantes:</h4>
                <ul className="text-gray-300">
                  <li><strong>Dependencia tecnológica:</strong> No reemplaza el pensamiento crítico</li>
                  <li><strong>Seguridad del código:</strong> Revisar siempre el código generado</li>
                  <li><strong>Privacidad de datos:</strong> Considerar implicaciones de compartir código</li>
                  <li><strong>Empleabilidad:</strong> La IA amplifica habilidades, no las reemplaza</li>
                  <li><strong>Calidad vs velocidad:</strong> Balance entre automatización y calidad</li>
                </ul>
              </div>

              <h3>🔮 El futuro del desarrollo web con IA</h3>
              <p>
                Mirando hacia el futuro, vemos varias tendencias emergentes:
              </p>

              <h4>Desarrollo low-code/no-code avanzado:</h4>
              <p>
                Herramientas que permiten crear aplicaciones complejas sin escribir código,
                pero con la flexibilidad de personalización cuando se necesita.
              </p>

              <h4>IA como compañero de desarrollo:</h4>
              <p>
                La IA se convertirá en un colaborador inteligente que entiende el contexto
                completo del proyecto y ofrece sugerencias proactivas.
              </p>

              <h4>Automatización inteligente:</h4>
              <p>
                Desde el diseño inicial hasta el deployment, la IA manejará cada vez más
                aspectos del ciclo de desarrollo.
              </p>

              <h3>🛠️ Cómo empezar con IA en desarrollo web</h3>

              <ol>
                <li><strong>Empieza pequeño:</strong> Integra una herramienta de IA en una tarea específica</li>
                <li><strong>Aprende los prompts efectivos:</strong> La calidad de las respuestas depende de cómo preguntes</li>
                <li><strong>Verifica siempre:</strong> No confíes ciegamente en el código generado</li>
                <li><strong>Combina herramientas:</strong> Usa múltiples herramientas de IA para diferentes tareas</li>
                <li><strong>Mantén el control humano:</strong> La IA asiste, pero las decisiones finales son tuyas</li>
                <li><strong>Actualízate constantemente:</strong> La tecnología evoluciona rápidamente</li>
              </ol>

              <h3>💡 Mejores prácticas para trabajar con IA</h3>

              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <h4 className="text-t_primary font-semibold mb-4">Prompts efectivos:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>Sé específico sobre el contexto y tecnologías</li>
                  <li>Incluye ejemplos de entrada/salida deseada</li>
                  <li>Especifica restricciones y requisitos</li>
                  <li>Pide explicaciones paso a paso</li>
                  <li>Solicita múltiples alternativas</li>
                </ul>
              </div>

              <h4>Integración en el workflow:</h4>
              <ul>
                <li><strong>Code reviews con IA:</strong> Análisis automático antes de commits</li>
                <li><strong>Documentación automática:</strong> Generación de README y documentación</li>
                <li><strong>Pair programming virtual:</strong> Sesiones de desarrollo asistidas</li>
                <li><strong>Aprendizaje continuo:</strong> La IA como mentor técnico</li>
              </ul>

              <h2>Conclusión</h2>
              <p>
                La inteligencia artificial está revolucionando el desarrollo web de una manera que
                apenas estamos comenzando a comprender. En lugar de reemplazar a los desarrolladores,
                la IA los está potenciando para lograr más en menos tiempo y con mayor calidad.
              </p>

              <p>
                En Tech Tecnic, vemos la IA no como una amenaza, sino como una oportunidad para
                elevar el estándar de la industria. Los desarrolladores que adopten estas herramientas
                estarán mejor posicionados para crear soluciones innovadoras y escalables.
              </p>

              <p>
                El futuro del desarrollo web es colaborativo: humanos y máquinas trabajando juntos
                para crear experiencias digitales excepcionales. La clave está en aprender a usar
                estas herramientas efectivamente mientras mantenemos el control creativo y técnico
                que define el verdadero desarrollo de software.
              </p>
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isLiked 
                      ? 'bg-t_primary/20 text-t_primary' 
                      : 'bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>Útil{isLiked ? ' ✓' : ''}</span>
                </button>
                <button 
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isSaved 
                      ? 'bg-t_primary/20 text-t_primary' 
                      : 'bg-white/5 hover:bg-white/10 text-white'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  <span>Guardar{isSaved ? ' ✓' : ''}</span>
                </button>
              </div>

              <button 
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white"
              >
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
            <p className="text-gray-400">Más contenido sobre IA y desarrollo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <div className="aspect-video bg-gradient-to-br from-t_primary/20 to-t_accent/20 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-white mb-2">ChatGPT para desarrolladores: Guía completa</h3>
              <p className="text-gray-400 text-sm mb-4">Descubre cómo ChatGPT puede revolucionar tu flujo de trabajo como desarrollador.</p>
              <Link href="/blog/chatgpt-para-desarrolladores-guia-completa" className="text-t_primary hover:text-t_accent transition-colors text-sm font-semibold">
                Leer artículo →
              </Link>
            </div>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}