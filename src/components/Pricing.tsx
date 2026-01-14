'use client';

import Link from 'next/link';
import { Check, Star, Zap, Rocket, Building2, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Emprendedor',
    tagline: 'Perfecto para comenzar',
    price: '$400.000',
    period: 'Pago único',
    description: 'Landing page profesional para lanzar tu presencia digital',
    features: [
      'Landing page moderna (1-2 secciones)',
      'Dominio, hosting y SSL (1 año incluido)',
      'Diseño responsivo mobile-first',
      'Formulario de contacto + WhatsApp',
      'Optimización SEO básica',
      'Google Analytics configurado',
      '1 revisión incluida',
    ],
    icon: Star,
    color: 'from-emerald-500 to-teal-500',
    popular: false,
  },
  {
    name: 'Profesional',
    tagline: 'El más elegido',
    price: '$900.000',
    period: 'Pago único',
    description: 'Sitio web completo para empresas que buscan destacar',
    features: [
      'Sitio completo (3-5 secciones)',
      'SEO avanzado + analítica (GTM, GA4)',
      'Diseño personalizado premium',
      'Correos corporativos incluidos',
      'Integración con redes sociales',
      'Blog o noticias opcional',
      'Mantenimiento mensual opcional',
      '3 revisiones incluidas',
    ],
    icon: Zap,
    color: 'from-t_primary to-cyan-400',
    popular: true,
  },
  {
    name: 'Avanzado',
    tagline: 'Potencia y escalabilidad',
    price: '$1.800.000',
    period: 'Pago único',
    description: 'E-commerce o aplicaciones web con tecnología de punta',
    features: [
      'E-commerce completo (WooCommerce/React)',
      'Integraciones con IA y automatizaciones',
      'Optimización GEO + Core Web Vitals',
      'Panel de administración personalizado',
      'Capacitación post-entrega',
      'Soporte técnico 3 meses',
      'Migraciones y backups automáticos',
      'Revisiones ilimitadas en desarrollo',
    ],
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
  {
    name: 'Partner',
    tagline: 'Para agencias',
    price: 'Personalizado',
    period: 'Según necesidades',
    description: 'Desarrollo white-label y soluciones empresariales',
    features: [
      'Desarrollo white-label (tu marca)',
      'Proyectos escalables y complejos',
      'Confidencialidad y NDA',
      'Tarifas preferenciales por volumen',
      'Soporte técnico dedicado',
      'Arquitectura empresarial',
      'Integraciones avanzadas',
      'Consultoría técnica incluida',
    ],
    icon: Building2,
    color: 'from-orange-500 to-red-500',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-t_primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">Planes y Precios</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Planes que
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              crecen contigo
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elige el plan perfecto para tu proyecto. Todos incluyen soporte profesional y garantía de calidad.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group ${
                  plan.popular ? 'lg:-translate-y-4' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${plan.color} text-white text-sm font-semibold shadow-lg`}>
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full rounded-2xl bg-slate-900/50 backdrop-blur-sm border transition-all duration-500 ${
                  plan.popular 
                    ? 'border-t_primary shadow-2xl shadow-t_primary/20 scale-105' 
                    : 'border-white/10 hover:border-white/20 hover:shadow-xl'
                }`}>
                  {/* Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl`} />

                  <div className="relative p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                      <p className="text-gray-400 text-sm">{plan.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        {plan.price !== 'Personalizado' && (
                          <span className="text-gray-500 text-sm">COP</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{plan.period}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="#contacto"
                      className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:scale-105 hover:shadow-2xl`
                          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {plan.price === 'Personalizado' ? 'Contactar' : 'Comenzar ahora'}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            ¿Necesitas algo diferente? Creamos planes personalizados para cada proyecto.
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-t_primary hover:text-cyan-400 font-medium transition-colors"
          >
            Hablar con un asesor
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Money Back Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Garantía de satisfacción</p>
              <p className="text-gray-400 text-xs">100% de calidad o te devolvemos tu dinero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}