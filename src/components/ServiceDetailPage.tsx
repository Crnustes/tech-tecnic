'use client';

import { useServiceTranslations } from '@/hooks/useServiceTranslations';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CheckCircle2, Zap, Shield, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import { buildLocalizedUrl } from '@/utils/seo';

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const { title, subtitle, description, features, service, priceCOP, priceUSD, locale } = useServiceTranslations(slug);
  const safeLocale = locale === "en" ? "en" : "es";
  const t = useTranslations('serviceDetails');

  const benefits = [
    {
      icon: Zap,
      title: locale === 'es' ? 'Alto Rendimiento' : 'High Performance',
      description:
        locale === 'es'
          ? 'Optimizacion maxima para cargar en menos de 3 segundos'
          : 'Maximum optimization to load in under 3 seconds',
    },
    {
      icon: Shield,
      title: locale === 'es' ? 'Seguridad SSL' : 'SSL Security',
      description:
        locale === 'es'
          ? 'Certificados SSL incluidos para proteger tu sitio'
          : 'SSL certificates included to protect your site',
    },
    {
      icon: Smartphone,
      title: '100% Responsive',
      description:
        locale === 'es'
          ? 'Diseno perfecto en movil, tablet y desktop'
          : 'Perfect design on mobile, tablet and desktop',
    },
    {
      icon: TrendingUp,
      title: locale === 'es' ? 'SEO Optimizado' : 'SEO Optimized',
      description:
        locale === 'es'
          ? 'Configurado para posicionarse en Google'
          : 'Configured to rank in Google',
    },
  ];

  const backLabel = locale === 'es' ? 'Volver a Servicios' : 'Back to Services';
  const contactLabel = locale === 'es' ? 'Contactar' : 'Contact';
  const whatsappMessage =
    locale === 'es'
      ? `Hola, quiero informacion sobre ${title}`
      : `Hi, I want information about ${title}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            href={buildLocalizedUrl('/servicios', safeLocale)}
            className="inline-flex items-center gap-2 text-t_primary hover:text-t_accent transition-colors mb-8"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span className="text-sm">{backLabel}</span>
          </Link>

          <div className="max-w-3xl mb-12">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service?.color || 'from-cyan-500 to-blue-500'} bg-opacity-20 border border-t_primary/30 mb-6`}>
              {service?.icon && <service.icon className="w-4 h-4 text-t_primary" />}
              <span className="text-sm text-t_primary font-medium">{subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">{description}</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <WhatsAppButton
              message={whatsappMessage}
              service={slug}
              label={title}
              className="px-8 py-4 bg-gradient-to-r from-t_primary to-t_accent text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              {contactLabel}
            </WhatsAppButton>
            <Link
              href="#contacto"
              className="px-8 py-4 rounded-full border-2 border-white/20 hover:border-white/40 text-white font-semibold hover:bg-white/5 transition-all"
            >
              {t('requestQuote')}
            </Link>
          </div>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-t_primary/30 rounded-xl p-8 max-w-2xl backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-2">{t('startingFrom')}</p>
            <div className="flex items-baseline gap-4">
              {locale === 'es' ? (
                <>
                  <span className="text-4xl font-bold text-t_primary">${priceCOP.toLocaleString('es-CO')}</span>
                  <span className="text-gray-400">COP</span>
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-t_primary">${priceUSD.toLocaleString('en-US')}</span>
                  <span className="text-gray-400">USD</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('whyChoose')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-8 hover:border-t_primary/50 transition-colors"
              >
                <div className="bg-t_primary/20 rounded-lg p-3 w-fit mb-4">
                  <Icon className="w-6 h-6 text-t_primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-transparent via-t_primary/5 to-transparent">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('includes')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-t_primary flex-shrink-0 mt-1" />
              <span className="text-lg text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
