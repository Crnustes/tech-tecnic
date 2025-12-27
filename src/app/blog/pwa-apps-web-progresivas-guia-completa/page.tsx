import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'PWA: Apps Web Progresivas - Guía completa | Blog Tech Tecnic',
  description: 'Descubre cómo crear Progressive Web Apps (PWA) que ofrecen la mejor experiencia de usuario. Aprende sobre service workers, manifest, offline-first y más.',
  keywords: [
    'PWA',
    'Progressive Web Apps',
    'apps web',
    'service workers',
    'web app manifest',
    'offline-first',
    'desarrollo web'
  ],
  openGraph: {
    title: 'PWA: Apps Web Progresivas - Guía completa | Blog Tech Tecnic',
    description: 'Descubre cómo crear Progressive Web Apps que ofrecen la mejor experiencia de usuario.',
    type: 'article',
    publishedTime: '2024-12-08',
    authors: ['Tech Tecnic'],
  },
  alternates: {
    canonical: 'https://techtecnic.com/blog/pwa-apps-web-progresivas-guia-completa',
  },
};

export default function PWAGuideArticle() {
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
              PWA: Apps Web Progresivas
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              Guía completa
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
              <span>{new Date('2024-12-08').toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>11 min de lectura</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Las Progressive Web Apps combinan lo mejor del web y las apps nativas.
            Aprende a crear PWA que ofrecen experiencias excepcionales con service workers, offline-first y instalación nativa.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['PWA', 'Progressive Web Apps', 'service workers', 'web app manifest', 'offline-first'].map((tag) => (
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
                  <div className="text-4xl font-bold text-t_primary mb-2">PWA</div>
                  <div className="text-xl font-bold text-white">Progressive Web Apps</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>¿Qué son las Progressive Web Apps?</h2>
              <p>
                Las Progressive Web Apps (PWA) son aplicaciones web que ofrecen una experiencia
                similar a las aplicaciones nativas. Utilizan tecnologías web modernas para
                proporcionar funcionalidades como instalación en el dispositivo, funcionamiento
                offline y notificaciones push.
              </p>

              <p>
                En Tech Tecnic, hemos desarrollado múltiples PWA que han revolucionado cómo
                nuestros clientes interactúan con sus usuarios, ofreciendo experiencias rápidas,
                confiables y atractivas que compiten directamente con las aplicaciones nativas.
              </p>

              <h3>🌟 Características principales de las PWA</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">📱 Experiencia nativa</h4>
                  <ul className="text-gray-300">
                    <li>Instalación en el dispositivo</li>
                    <li>Icono en la pantalla de inicio</li>
                    <li>Funcionamiento fullscreen</li>
                    <li>Sin barras de navegación del browser</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">⚡ Rendimiento superior</h4>
                  <ul className="text-gray-300">
                    <li>Carga instantánea</li>
                    <li>Funcionamiento offline</li>
                    <li>Cache inteligente</li>
                    <li>Optimización automática</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">🔄 Actualizaciones automáticas</h4>
                  <ul className="text-gray-300">
                    <li>Sin App Store approvals</li>
                    <li>Actualizaciones instantáneas</li>
                    <li>Versión siempre actual</li>
                    <li>Menor costo de mantenimiento</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">🎯 Engagement mejorado</h4>
                  <ul className="text-gray-300">
                    <li>Notificaciones push</li>
                    <li>Re-engagement automático</li>
                    <li>Mejor retención de usuarios</li>
                    <li>Compartible por URL</li>
                  </ul>
                </div>
              </div>

              <h3>🏗️ Arquitectura de una PWA</h3>
              <p>
                Una PWA está construida sobre tres pilares tecnológicos principales:
              </p>

              <h4>1. Web App Manifest</h4>
              <p>
                El manifest es un archivo JSON que define cómo se ve e instala la aplicación.
                Es el equivalente al App Store metadata para aplicaciones nativas.
              </p>

              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`{
  "name": "Tech Tecnic App",
  "short_name": "TechTecnic",
  "description": "Aplicación web progresiva de Tech Tecnic",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#3b82f6",
  "orientation": "portrait-primary",
  "scope": "/",
  "lang": "es-CO",
  "categories": ["business", "productivity"],
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}`}</code>
              </pre>

              <h4>2. Service Workers</h4>
              <p>
                Los Service Workers son el corazón de las PWA. Son scripts que se ejecutan
                en segundo plano y permiten funcionalidades offline, cache inteligente y
                sincronización en background.
              </p>

              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`// service-worker.js
const CACHE_NAME = 'tech-tecnic-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activación y limpieza de caches antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Estrategia de cache: Network First con fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la respuesta es válida, la guardamos en cache
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Si falla la red, buscamos en cache
        return caches.match(event.request);
      })
  );
});`}</code>
              </pre>

              <h4>3. HTTPS obligatorio</h4>
              <p>
                Las PWA requieren HTTPS para funcionar. Esto no solo es por seguridad,
                sino porque los Service Workers solo funcionan sobre conexiones seguras.
              </p>

              <h3>📱 Estrategias de cache para PWA</h3>
              <p>
                La estrategia de cache determina cómo y cuándo se sirven los recursos,
                impactando directamente en la experiencia del usuario.
              </p>

              <h4>Estrategias principales:</h4>

              <h5>1. Cache First</h5>
              <p>
                Ideal para recursos estáticos que cambian raramente. Primero busca en cache,
                si no está disponible hace la petición de red.
              </p>

              <h5>2. Network First</h5>
              <p>
                Perfecto para contenido dinámico. Siempre intenta la red primero,
                con cache como fallback.
              </p>

              <h5>3. Stale While Revalidate</h5>
              <p>
                Sirve contenido cacheado inmediatamente mientras actualiza en background.
                Mejor UX para contenido que cambia frecuentemente.
              </p>

              <h5>4. Cache Only</h5>
              <p>
                Solo usa cache. Útil para recursos críticos que deben estar siempre disponibles.
              </p>

              <h3>🔔 Notificaciones Push</h3>
              <p>
                Las notificaciones push permiten re-enganchar usuarios incluso cuando
                no están usando la aplicación activamente.
              </p>

              <h4>Implementación básica:</h4>
              <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
                <code>{`// Solicitar permiso para notificaciones
async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    // Registrar service worker para push
    const registration = await navigator.serviceWorker.register('/sw.js');
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

    // Enviar subscription al servidor
    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Mostrar notificación
self.addEventListener('push', event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    data: data.url
  });
});`}</code>
              </pre>

              <h3>📊 Métricas y monitoreo de PWA</h3>
              <p>
                Medir el rendimiento y engagement de tu PWA es crucial para optimizar
                la experiencia del usuario.
              </p>

              <h4>Métricas clave:</h4>
              <ul>
                <li><strong>Install Rate:</strong> Porcentaje de usuarios que instalan la PWA</li>
                <li><strong>Session Duration:</strong> Tiempo promedio de uso por sesión</li>
                <li><strong>Return Visitors:</strong> Usuarios que regresan después de instalar</li>
                <li><strong>Offline Usage:</strong> Porcentaje de uso sin conexión</li>
                <li><strong>Push Open Rate:</strong> Tasa de apertura de notificaciones</li>
              </ul>

              <h4>Herramientas de monitoreo:</h4>
              <ul>
                <li><strong>Lighthouse PWA Audit:</strong> Evaluación automática de PWA</li>
                <li><strong>Google Analytics:</strong> Métricas de engagement y conversión</li>
                <li><strong>Web Vitals:</strong> Monitoreo de rendimiento</li>
                <li><strong>PWABuilder:</strong> Validación y generación de PWA</li>
              </ul>

              <h3>🔧 Mejores prácticas de desarrollo PWA</h3>

              <h4>Performance primero:</h4>
              <ul>
                <li>Optimiza Core Web Vitals (LCP, FID, CLS)</li>
                <li>Implementa lazy loading para imágenes</li>
                <li>Minimiza el bundle JavaScript inicial</li>
                <li>Usa code splitting inteligente</li>
              </ul>

              <h4>Offline-first approach:</h4>
              <ul>
                <li>Diseña pensando en offline primero</li>
                <li>Implementa progressive enhancement</li>
                <li>Proporciona feedback visual para estados offline</li>
                <li>Sincroniza datos cuando vuelve la conexión</li>
              </ul>

              <h4>UX considerations:</h4>
              <ul>
                <li>Indica claramente que es instalable</li>
                <li>Proporciona onboarding para nuevas funcionalidades</li>
                <li>Maneja gracefully los estados de carga y error</li>
                <li>Optimiza para diferentes tamaños de pantalla</li>
              </ul>

              <h3>🛠️ Frameworks y herramientas para PWA</h3>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Frameworks principales</h4>
                  <ul className="text-gray-300">
                    <li><strong>Next.js:</strong> PWA con cero configuración</li>
                    <li><strong>Nuxt.js:</strong> PWA module integrado</li>
                    <li><strong>Vue.js:</strong> Vue PWA plugin</li>
                    <li><strong>Angular:</strong> Angular PWA schematics</li>
                    <li><strong>SvelteKit:</strong> PWA adapter</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Herramientas de desarrollo</h4>
                  <ul className="text-gray-300">
                    <li><strong>Workbox:</strong> Librería para Service Workers</li>
                    <li><strong>PWABuilder:</strong> Generador de PWA</li>
                    <li><strong>Lighthouse:</strong> Auditoría de PWA</li>
                    <li><strong>Web App Manifest Generator:</strong> Creador de manifest</li>
                    <li><strong>PWACompat:</strong> Polyfills para compatibilidad</li>
                  </ul>
                </div>
              </div>

              <h3>📱 Casos de éxito reales</h3>
              <p>
                Las PWA han sido adoptadas por empresas líderes con resultados impresionantes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Twitter Lite</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Redujo el uso de datos en un 70% y aumentó las páginas por sesión en 65%.
                    500 millones de usuarios activos mensuales.
                  </p>
                  <ul className="text-gray-400 text-xs">
                    <li>📱 75% menos uso de datos</li>
                    <li>⚡ 65% más engagement</li>
                    <li>🌍 500M usuarios activos</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h4 className="text-t_primary font-semibold mb-3">Starbucks</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Aumentó las órdenes diarias en 2x. Los usuarios de PWA gastan 2x más que los de app nativa.
                  </p>
                  <ul className="text-gray-400 text-xs">
                    <li>💰 2x más órdenes diarias</li>
                    <li>👥 Usuarios más valiosos</li>
                    <li>📈 Mejor conversión</li>
                  </ul>
                </div>
              </div>

              <h3>🚀 Futuro de las PWA</h3>
              <p>
                Las PWA continúan evolucionando con nuevas capacidades:
              </p>

              <h4>Próximas funcionalidades:</h4>
              <ul>
                <li><strong>Web Bluetooth API:</strong> Conexión con dispositivos Bluetooth</li>
                <li><strong>Web NFC API:</strong> Comunicación NFC</li>
                <li><strong>Web Payment API:</strong> Pagos integrados</li>
                <li><strong>Background Sync:</strong> Sincronización en background avanzada</li>
                <li><strong>Periodic Background Sync:</strong> Actualizaciones periódicas</li>
                <li><strong>Web Share API:</strong> Compartir nativo mejorado</li>
              </ul>

              <h3>⚠️ Limitaciones actuales de las PWA</h3>
              <p>
                Aunque las PWA son poderosas, aún tienen algunas limitaciones:
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-lg my-6">
                <h4 className="text-yellow-400 font-semibold mb-3">Limitaciones a considerar:</h4>
                <ul className="text-gray-300">
                  <li><strong>App Store distribution:</strong> No están en App Store/Play Store</li>
                  <li><strong>Device APIs limitadas:</strong> No acceso a todas las APIs nativas</li>
                  <li><strong>Descubribilidad:</strong> Más difícil de encontrar que apps nativas</li>
                  <li><strong>Compatibilidad:</strong> Requiere navegadores modernos</li>
                  <li><strong>Actualizaciones:</strong> Dependientes de que usuarios visiten el sitio</li>
                </ul>
              </div>

              <h3>🛠️ Checklist para crear tu PWA</h3>
              <div className="bg-slate-800/50 p-6 rounded-lg my-6">
                <h4 className="text-t_primary font-semibold mb-4">Pasos para implementar PWA:</h4>
                <ol className="text-gray-300 space-y-2">
                  <li><strong>✅ HTTPS obligatorio:</strong> Configura SSL en tu dominio</li>
                  <li><strong>✅ Web App Manifest:</strong> Crea y configura el manifest.json</li>
                  <li><strong>✅ Service Worker:</strong> Implementa cache y offline functionality</li>
                  <li><strong>✅ Responsive Design:</strong> Asegura que funcione en todos los dispositivos</li>
                  <li><strong>✅ Core Web Vitals:</strong> Optimiza rendimiento (LCP, FID, CLS)</li>
                  <li><strong>✅ Installable:</strong> Añade prompt de instalación</li>
                  <li><strong>✅ Offline-first:</strong> Diseña pensando en desconexión</li>
                  <li><strong>✅ Push Notifications:</strong> Implementa notificaciones (opcional)</li>
                  <li><strong>✅ Testing:</strong> Prueba en múltiples dispositivos y navegadores</li>
                  <li><strong>✅ Monitoreo:</strong> Configura analytics y error tracking</li>
                </ol>
              </div>

              <h2>Conclusión</h2>
              <p>
                Las Progressive Web Apps representan el futuro del desarrollo web móvil.
                Ofrecen lo mejor de ambos mundos: la accesibilidad del web con la experiencia
                de las aplicaciones nativas.
              </p>

              <p>
                En Tech Tecnic, hemos visto cómo las PWA transforman completamente el engagement
                de los usuarios, ofreciendo experiencias que rivalizan con las mejores aplicaciones
                nativas mientras mantienen todos los beneficios del desarrollo web.
              </p>

              <p>
                Si estás considerando desarrollar una aplicación móvil, las PWA deberían ser
                tu primera opción. Ofrecen menor costo de desarrollo, mantenimiento simplificado
                y una experiencia de usuario excepcional.
              </p>

              <p>
                El futuro pertenece a las experiencias que funcionan sin importar el dispositivo
                o la conexión, y las PWA son la tecnología que hace esto posible.
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
            <p className="text-gray-400">Más contenido sobre desarrollo web avanzado</p>
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