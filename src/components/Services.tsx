'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import { enabledServices } from '@/config/servicesCatalog';
import { buildLocalizedUrl } from '@/utils/seo';

const pageCopy = {
  es: {
    badge: 'Nuestros Servicios',
    titleTop: 'Soluciones digitales',
    titleBottom: 'a tu medida',
    subtitle: 'Transformamos ideas en experiencias digitales que generan resultados reales',
    ctaLabel: 'Mas informacion',
    allTitle: 'Todos nuestros servicios',
    allSubtitle: 'Explora cada uno en detalle',
  },
  en: {
    badge: 'Our Services',
    titleTop: 'Digital solutions',
    titleBottom: 'built for you',
    subtitle: 'We turn ideas into digital experiences that deliver real results',
    ctaLabel: 'Learn more',
    allTitle: 'All our services',
    allSubtitle: 'Explore each one in detail',
  },
};

const serviceCopy: Record<string, { es: any; en: any }> = {
  'desarrollo-web': {
    es: {
      title: 'Desarrollo Web',
      subtitle: 'Sitios modernos y escalables',
      description:
        'Diseno y desarrollo de sitios de alto rendimiento con WordPress, React y Next.js. Desde landing pages hasta e-commerce.',
      features: ['Diseno responsivo', 'E-commerce con WooCommerce', 'Hosting y dominio', 'Integraciones con CRM y APIs'],
      imageAlt: 'Diseno de paginas web modernas en React y Next.js para empresas en Bogota y Latinoamerica.',
    },
    en: {
      title: 'Web Development',
      subtitle: 'Modern, scalable websites',
      description:
        'Design and development of high-performance sites with WordPress, React, and Next.js. From landing pages to e-commerce.',
      features: ['Responsive design', 'WooCommerce e-commerce', 'Hosting and domain', 'CRM and API integrations'],
      imageAlt: 'Modern web design in React and Next.js for businesses in Bogota and Latin America.',
    },
  },
  'seo-geo': {
    es: {
      title: 'SEO y Posicionamiento',
      subtitle: 'Visibilidad que convierte',
      description: 'SEO tecnico y local para posicionarte en Google y aumentar tu trafico organico.',
      features: ['SEO tecnico/on-page', 'Google Tag Manager y GA4', 'SEO local (GMB)', 'Core Web Vitals'],
      imageAlt: 'Servicios de consultoria SEO y analitica de datos para escalar trafico organico en mercados hispanos.',
    },
    en: {
      title: 'SEO and Positioning',
      subtitle: 'Visibility that converts',
      description: 'Technical and local SEO to rank on Google and grow organic traffic.',
      features: ['Technical/on-page SEO', 'Google Tag Manager and GA4', 'Local SEO (GMB)', 'Core Web Vitals'],
      imageAlt: 'SEO consulting and analytics services to scale organic traffic in Spanish-speaking markets.',
    },
  },
  'automatizacion-ia': {
    es: {
      title: 'IA y Automatizacion',
      subtitle: 'Inteligencia que trabaja por ti',
      description: 'Flujos inteligentes con IA, chatbots y automatizaciones para optimizar tu operacion.',
      features: ['Chatbots con IA', 'Captura automatica de leads', 'Integracion con CRMs', 'APIs e IA generativa'],
      imageAlt: 'Implementacion de chatbots con IA y procesamiento de lenguaje natural para empresas de servicios.',
    },
    en: {
      title: 'AI and Automation',
      subtitle: 'Intelligence that works for you',
      description: 'Smart flows with AI, chatbots, and automation to optimize your operations.',
      features: ['AI chatbots', 'Automatic lead capture', 'CRM integrations', 'APIs and generative AI'],
      imageAlt: 'AI chatbots and natural language processing for service companies.',
    },
  },
  integraciones: {
    es: {
      title: 'Integraciones',
      subtitle: 'Todo conectado',
      description: 'Zapier, Make y APIs personalizadas para flujos sin fricciones.',
      features: ['Zapier y Make', 'APIs personalizadas', 'Integracion con CRMs', 'Sincronizacion de datos'],
      imageAlt: 'Conexion de sistemas y automatizacion de flujos de trabajo entre CRMs y APIs personalizadas.',
    },
    en: {
      title: 'Integrations',
      subtitle: 'Everything connected',
      description: 'Zapier, Make, and custom APIs for frictionless workflows.',
      features: ['Zapier and Make', 'Custom APIs', 'CRM integrations', 'Data synchronization'],
      imageAlt: 'System connections and workflow automation between CRMs and custom APIs.',
    },
  },
  mantenimiento: {
    es: {
      title: 'Mantenimiento Web',
      subtitle: 'Tu sitio siempre actualizado',
      description: 'Seguridad, velocidad y estabilidad para tu sitio web.',
      features: ['Monitoreo 24/7', 'Actualizaciones de seguridad', 'Backups automaticos', 'Optimizacion continua'],
      imageAlt: 'Soporte tecnico, seguridad WordPress y monitoreo de uptime garantizado para sitios empresariales.',
    },
    en: {
      title: 'Website Maintenance',
      subtitle: 'Your site always updated',
      description: 'Security, speed, and stability for your website.',
      features: ['24/7 monitoring', 'Security updates', 'Automatic backups', 'Continuous optimization'],
      imageAlt: 'Technical support, WordPress security, and uptime monitoring for business sites.',
    },
  },
  'apps-moviles': {
    es: {
      title: 'Apps Moviles',
      subtitle: 'Experiencias moviles premium',
      description: 'Apps nativas (iOS/Android) y multiplataforma con React Native/Flutter.',
      features: ['Apps nativas', 'React Native/Flutter', 'Diseno UI/UX', 'Publicacion en tiendas'],
      imageAlt: 'Desarrollo de aplicaciones moviles hibridas y nativas con experiencia de usuario premium para Latam.',
    },
    en: {
      title: 'Mobile Apps',
      subtitle: 'Premium mobile experiences',
      description: 'Native (iOS/Android) and cross-platform apps with React Native/Flutter.',
      features: ['Native apps', 'React Native/Flutter', 'UI/UX design', 'Store publishing'],
      imageAlt: 'Hybrid and native mobile app development with premium UX for LatAm.',
    },
  },
  'chatbot-wp-ia': {
    es: {
      title: 'Chatbot WhatsApp con IA',
      subtitle: 'Automatizacion inteligente 24/7',
      description:
        'Bot de WhatsApp con IA que atiende clientes, captura leads y se integra con tu web, app o CRM. Entrenamiento personalizado con tus datos y escalable a produccion.',
      features: [
        'Bot WhatsApp con IA generativa',
        'Integracion web, apps y CRM',
        'Entrenamiento personalizado',
        'Captura y calificacion de leads',
      ],
      imageAlt: 'Soluciones de WhatsApp Business API con IA para automatizar ventas y atencion al cliente.',
    },
    en: {
      title: 'WhatsApp AI Chatbot',
      subtitle: 'Smart automation 24/7',
      description:
        'WhatsApp AI bot that supports customers, captures leads, and integrates with your website, app, or CRM. Personalized training and scalable to production.',
      features: [
        'WhatsApp bot with generative AI',
        'Web, app, and CRM integrations',
        'Personalized training',
        'Lead capture and qualification',
      ],
      imageAlt: 'WhatsApp Business API solutions with AI to automate sales and customer support.',
    },
  },
};

export default function Services() {
  const locale = (useLocale() as 'es' | 'en') ?? 'es';
  const copy = pageCopy[locale] ?? pageCopy.es;

  const localizedServices = useMemo(
    () =>
      enabledServices.map((service) => {
        const overrides = serviceCopy[service.id]?.[locale];
        return {
          ...service,
          title: overrides?.title ?? service.title,
          subtitle: overrides?.subtitle ?? service.subtitle,
          description: overrides?.description ?? service.description,
          features: overrides?.features ?? service.features,
          imageAlt: overrides?.imageAlt ?? service.imageAlt,
        };
      }),
    [locale]
  );

  const [activeService, setActiveService] = useState(localizedServices[0]);

  useEffect(() => {
    setActiveService((prev) => localizedServices.find((service) => service.id === prev?.id) ?? localizedServices[0]);
  }, [localizedServices]);

  return (
    <section
      id="servicios"
      className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">{copy.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {copy.titleTop}
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              {copy.titleBottom}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {localizedServices.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeService?.id === service.id
                    ? 'bg-gradient-to-r ' + service.color + ' text-white shadow-lg scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium hidden sm:inline">{service.title}</span>
                  <span className="font-medium sm:hidden">{service.title.split(' ')[0]}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-20`} />
              <Image
                src={activeService.image ?? '/images/service-web.png'}
                alt={activeService.imageAlt ?? activeService.title}
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${activeService.color}`}>
              {(() => {
                const Icon = activeService.icon;
                return <Icon className="w-8 h-8 text-white" />;
              })()}
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{activeService.title}</h3>
              <p className="text-t_primary text-lg font-medium mb-4">{activeService.subtitle}</p>
              <p className="text-gray-400 text-lg leading-relaxed">{activeService.description}</p>
            </div>

            <div className="space-y-3">
              {activeService.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${activeService.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href={buildLocalizedUrl(`/servicios/${activeService.slug}`, locale)}
              className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${activeService.color} text-white font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-2xl`}
            >
              <span>{copy.ctaLabel}</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">{copy.allTitle}</h3>
            <p className="text-gray-400">{copy.allSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {localizedServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={buildLocalizedUrl(`/servicios/${service.slug}`, locale)}
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-t_primary/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-t_primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{service.subtitle}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
