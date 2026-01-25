import Link from 'next/link';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function Hero() {
  const t = await getTranslations('hero');
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-t_dark via-slate-900 to-black">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_35%,rgba(0,217,255,0.15),transparent_50%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-t_primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-t_accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-t_primary" />
          <span className="text-sm text-gray-300">{t('badge')}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {t('title1')}
          </span>
          <br />
          <span className="bg-gradient-to-r from-t_primary via-cyan-400 to-t_accent bg-clip-text text-transparent animate-gradient">
            {t('title2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#contacto"
            className="group relative px-8 py-4 bg-gradient-to-r from-t_primary to-cyan-400 rounded-full font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-t_primary/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('startProject')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-t_accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="#servicios"
            className="group px-8 py-4 rounded-full font-semibold text-white border-2 border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Zap className="w-5 h-5 text-t_accent" />
            {t('exploreServices')}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-24 max-w-4xl mx-auto">
          {[
            { value: '50+', label: t('stats.projectsCompleted') },
            { value: '98%', label: t('stats.clientSatisfaction') },
            { value: '5-star', label: t('stats.averageRating') },
            { value: '24/7', label: t('stats.technicalSupport') },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>

    </section>
  );
}
