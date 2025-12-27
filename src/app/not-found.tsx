import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-t_dark via-gray-900 to-t_dark px-4">
      <FadeIn>
        <div className="text-center max-w-2xl">
          {/* 404 Grande */}
          <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-t_primary via-t_accent to-t_secondary mb-4">
            404
          </h1>
          
          {/* Título */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Página No Encontrada
          </h2>
          
          {/* Descripción */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Lo sentimos, la página que buscas no existe o fue movida. 
            <br className="hidden md:block" />
            Quizás estos enlaces te ayuden a encontrar lo que necesitas.
          </p>
          
          {/* Enlaces útiles */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-t_primary to-t_accent text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-t_primary/50 transform hover:scale-105 transition-all duration-300"
            >
              Volver al Inicio
            </Link>
            <Link 
              href="/blog"
              className="px-8 py-4 border-2 border-t_primary text-white font-semibold rounded-lg hover:bg-t_primary/10 hover:shadow-lg transition-all duration-300"
            >
              Ver Blog
            </Link>
            <Link 
              href="/contacto"
              className="px-8 py-4 border-2 border-t_accent text-white font-semibold rounded-lg hover:bg-t_accent/10 hover:shadow-lg transition-all duration-300"
            >
              Contactar
            </Link>
          </div>
          
          {/* Servicios rápidos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/servicios/desarrollo-web" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
              <div className="font-semibold text-t_primary">Desarrollo Web</div>
            </Link>
            <Link href="/servicios/automatizacion-ia" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
              <div className="font-semibold text-t_accent">Automatización IA</div>
            </Link>
            <Link href="/servicios/seo-geo" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
              <div className="font-semibold text-t_secondary">SEO Local</div>
            </Link>
            <Link href="/servicios/apps-moviles" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
              <div className="font-semibold text-green-400">Apps Móviles</div>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
