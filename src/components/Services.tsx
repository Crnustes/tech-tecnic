'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Code, Bot, Shield, Search, Briefcase, Sparkles, Check } from 'lucide-react';

const services = [
  {
    id: 'web',
    title: 'Desarrollo Web',
    subtitle: 'Sitios modernos y escalables',
    description: 'Diseñamos y desarrollamos sitios web de alto rendimiento con WordPress, React o Next.js. Desde landing pages hasta e-commerce completos.',
    features: [
      'Diseño responsivo e interactivo',
      'E-commerce con WooCommerce',
      'Hosting, dominio y correos',
      'Integraciones con CRM y APIs',
    ],
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    image: '/images/service-web.png',
  },
  {
    id: 'ai',
    title: 'IA & Automatización',
    subtitle: 'Inteligencia que trabaja por ti',
    description: 'Implementamos flujos inteligentes con IA, chatbots personalizados y automatizaciones que optimizan tu operación.',
    features: [
      'Chatbots con IA (WhatsApp, Web)',
      'Captura automática de leads',
      'Integración con CRMs',
      'APIs e IA generativa',
    ],
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    image: '/images/service-ai.png',
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento Web',
    subtitle: 'Tu sitio siempre actualizado',
    description: 'Nos encargamos de la seguridad, velocidad y estabilidad de tu sitio web para que puedas enfocarte en tu negocio.',
    features: [
      'Monitoreo 24/7',
      'Actualizaciones de seguridad',
      'Backups automáticos',
      'Optimización continua',
    ],
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
    image: '/images/service-maintenance.png',
  },
  {
    id: 'seo',
    title: 'SEO & Posicionamiento',
    subtitle: 'Visibilidad que convierte',
    description: 'Estrategias SEO técnico y local para posicionar tu marca en Google y aumentar tu tráfico orgánico.',
    features: [
      'SEO técnico y on-page',
      'Google Tag Manager y GA4',
      'SEO Local (GMB)',
      'Core Web Vitals',
    ],
    icon: Search,
    color: 'from-orange-500 to-red-500',
    image: '/images/service-seo.png',
  },
  {
    id: 'outsourcing',
    title: 'Para Agencias',
    subtitle: 'Tu aliado técnico',
    description: 'Desarrollo white-label para agencias que necesitan soporte técnico o proyectos puntuales bajo su marca.',
    features: [
      'Proyectos white label',
      'Soporte técnico remoto',
      'Confidencialidad garantizada',
      'Escalabilidad flexible',
    ],
    icon: Briefcase,
    color: 'from-indigo-500 to-violet-500',
    image: '/images/service-outsourcing.png',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="servicios" className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Soluciones digitales
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              a tu medida
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transformamos ideas en experiencias digitales que generan resultados reales
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeService.id === service.id
                    ? 'bg-gradient-to-r ' + service.color + ' text-white shadow-lg scale-105'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{service.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${activeService.color} opacity-20`} />
              <Image
                src={activeService.image}
                alt={activeService.title}
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${activeService.color}`}>
              {(() => {
                const Icon = activeService.icon;
                return <Icon className="w-8 h-8 text-white" />;
              })()}
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {activeService.title}
              </h3>
              <p className="text-t_primary text-lg font-medium mb-4">
                {activeService.subtitle}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                {activeService.description}
              </p>
            </div>

            <div className="space-y-3">
              {activeService.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${activeService.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className={`group px-8 py-4 rounded-full bg-gradient-to-r ${activeService.color} text-white font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-2xl`}>
              <span className="flex items-center gap-2">
                Más información
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}