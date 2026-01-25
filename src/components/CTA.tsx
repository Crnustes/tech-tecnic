import Link from 'next/link';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { getLocale } from 'next-intl/server';

const pageCopy = {
  es: {
    badge: 'Transforma tu presencia digital hoy',
    titleTop: 'Listo para llevar tu',
    titleBottom: 'negocio al siguiente nivel?',
    description:
      'En Tech Tecnic combinamos innovacion, diseno y tecnologia para crear experiencias digitales que generan resultados reales.',
    stats: [
      { value: '50+', label: 'Proyectos' },
      { value: '98%', label: 'Satisfaccion' },
      { value: '<24h', label: 'Respuesta' },
    ],
    ctaPrimary: 'Comenzar mi proyecto',
    ctaSecondary: 'Ver planes',
    trust: ['Garantia de calidad', 'Soporte continuo', 'Entrega a tiempo'],
  },
  en: {
    badge: 'Transform your digital presence today',
    titleTop: 'Ready to take your',
    titleBottom: 'business to the next level?',
    description:
      'At Tech Tecnic we combine innovation, design, and technology to create digital experiences that deliver real results.',
    stats: [
      { value: '50+', label: 'Projects' },
      { value: '98%', label: 'Satisfaction' },
      { value: '<24h', label: 'Response' },
    ],
    ctaPrimary: 'Start my project',
    ctaSecondary: 'View plans',
    trust: ['Quality guarantee', 'Ongoing support', 'On-time delivery'],
  },
};

export default async function CTA() {
  const locale = (await getLocale()) as 'es' | 'en';
  const copy = pageCopy[locale] ?? pageCopy.es;

  return (
    <section
      id="cta-section"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900"
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_40%,rgba(0,217,255,0.2),transparent_50%)]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-t_primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-t_accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-t_primary" />
          <span className="text-sm text-gray-300">{copy.badge}</span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {copy.titleTop}
          </span>
          <br />
          <span className="bg-gradient-to-r from-t_primary via-cyan-400 to-t_accent bg-clip-text text-transparent animate-gradient">
            {copy.titleBottom}
          </span>
        </h2>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          <span className="text-white font-semibold">Tech Tecnic</span> {copy.description}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#contacto"
            className="group relative px-10 py-5 bg-gradient-to-r from-t_primary to-cyan-400 rounded-full font-bold text-lg text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-t_primary/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              {copy.ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-t_accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="#planes"
            className="group px-10 py-5 rounded-full font-bold text-lg text-white border-2 border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Zap className="w-5 h-5 text-t_accent" />
            {copy.ctaSecondary}
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          {copy.trust.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
