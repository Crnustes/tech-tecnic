'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Check } from 'lucide-react';
import { enabledServices } from '@/config/servicesCatalog';

export default function Services() {
  const [activeService, setActiveService] = useState(enabledServices[0]);

  return (
    <section
      id="servicios"
      className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden"
    >
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
          {enabledServices.map((service) => {
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

        {/* Active Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
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

          {/* Content */}
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
              href={`/servicios/${activeService.slug}`}
              className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${activeService.color} text-white font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-2xl`}
            >
              <span>Más información</span>
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

        {/* Quick Links */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Todos nuestros servicios</h3>
            <p className="text-gray-400">Explora cada uno en detalle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {enabledServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/servicios/${service.slug}`}
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
