import Link from 'next/link';
import { Check, Star, Zap, Rocket, Building2, Sparkles } from 'lucide-react';
import { getLocale } from 'next-intl/server';
import { convertCOPtoUSD } from '@/utils/pricing';

const pageCopy = {
  es: {
    badge: 'Planes y Precios',
    titleTop: 'Planes que',
    titleBottom: 'crecen contigo',
    subtitle: 'Elige el plan perfecto para tu proyecto. Todos incluyen soporte profesional y garantia de calidad.',
    popularLabel: 'Mas Popular',
    ctaPrimary: 'Comenzar ahora',
    ctaCustom: 'Contactar',
    extraText: 'Necesitas algo diferente? Creamos planes personalizados para cada proyecto.',
    extraLink: 'Hablar con un asesor',
    guaranteeTitle: 'Garantia de satisfaccion',
    guaranteeText: '100% de calidad o te devolvemos tu dinero',
    periodOneTime: 'Pago unico',
    periodCustom: 'Segun necesidades',
    currencyLabel: 'COP',
  },
  en: {
    badge: 'Plans and Pricing',
    titleTop: 'Plans that',
    titleBottom: 'grow with you',
    subtitle: 'Choose the perfect plan for your project. All include professional support and quality guarantee.',
    popularLabel: 'Most Popular',
    ctaPrimary: 'Get started',
    ctaCustom: 'Contact',
    extraText: 'Need something different? We create custom plans for every project.',
    extraLink: 'Talk to an advisor',
    guaranteeTitle: 'Satisfaction guarantee',
    guaranteeText: '100% quality or your money back',
    periodOneTime: 'One-time payment',
    periodCustom: 'As needed',
    currencyLabel: 'USD',
  },
};

const plans = [
  {
    id: 'emprendedor',
    name: { es: 'Emprendedor', en: 'Starter' },
    tagline: { es: 'Perfecto para comenzar', en: 'Perfect to get started' },
    priceCOP: 400000,
    periodKey: 'one-time',
    description: {
      es: 'Landing page profesional para lanzar tu presencia digital',
      en: 'Professional landing page to launch your digital presence',
    },
    features: {
      es: [
        'Landing page moderna (1-2 secciones)',
        'Dominio, hosting y SSL (1 ano incluido)',
        'Diseno responsivo mobile-first',
        'Formulario de contacto + WhatsApp',
        'Optimizacion SEO basica',
        'Google Analytics configurado',
        '1 revision incluida',
      ],
      en: [
        'Modern landing page (1-2 sections)',
        'Domain, hosting, and SSL (1 year included)',
        'Mobile-first responsive design',
        'Contact form + WhatsApp',
        'Basic SEO optimization',
        'Google Analytics setup',
        '1 revision included',
      ],
    },
    icon: Star,
    color: 'from-emerald-500 to-teal-500',
    popular: false,
  },
  {
    id: 'profesional',
    name: { es: 'Profesional', en: 'Professional' },
    tagline: { es: 'El mas elegido', en: 'Most selected' },
    priceCOP: 900000,
    periodKey: 'one-time',
    description: {
      es: 'Sitio web completo para empresas que buscan destacar',
      en: 'Full website for companies that want to stand out',
    },
    features: {
      es: [
        'Sitio completo (3-5 secciones)',
        'SEO avanzado + analitica (GTM, GA4)',
        'Diseno personalizado premium',
        'Correos corporativos incluidos',
        'Integracion con redes sociales',
        'Blog o noticias opcional',
        'Mantenimiento mensual opcional',
        '3 revisiones incluidas',
      ],
      en: [
        'Full website (3-5 sections)',
        'Advanced SEO + analytics (GTM, GA4)',
        'Premium custom design',
        'Business email accounts included',
        'Social media integration',
        'Blog or news optional',
        'Optional monthly maintenance',
        '3 revisions included',
      ],
    },
    icon: Zap,
    color: 'from-t_primary to-cyan-400',
    popular: true,
  },
  {
    id: 'avanzado',
    name: { es: 'Avanzado', en: 'Advanced' },
    tagline: { es: 'Potencia y escalabilidad', en: 'Power and scalability' },
    priceCOP: 1800000,
    periodKey: 'one-time',
    description: {
      es: 'E-commerce o aplicaciones web con tecnologia de punta',
      en: 'E-commerce or web apps with cutting-edge tech',
    },
    features: {
      es: [
        'E-commerce completo (WooCommerce/React)',
        'Integraciones con IA y automatizaciones',
        'Optimizacion GEO + Core Web Vitals',
        'Panel de administracion personalizado',
        'Capacitacion post-entrega',
        'Soporte tecnico 3 meses',
        'Migraciones y backups automaticos',
        'Revisiones ilimitadas en desarrollo',
      ],
      en: [
        'Full e-commerce (WooCommerce/React)',
        'AI integrations and automations',
        'GEO optimization + Core Web Vitals',
        'Custom admin dashboard',
        'Post-launch training',
        '3 months technical support',
        'Automatic migrations and backups',
        'Unlimited revisions during development',
      ],
    },
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
  {
    id: 'partner',
    name: { es: 'Partner', en: 'Partner' },
    tagline: { es: 'Para agencias', en: 'For agencies' },
    priceCOP: null,
    periodKey: 'custom',
    description: {
      es: 'Desarrollo white-label y soluciones empresariales',
      en: 'White-label development and enterprise solutions',
    },
    features: {
      es: [
        'Desarrollo white-label (tu marca)',
        'Proyectos escalables y complejos',
        'Confidencialidad y NDA',
        'Tarifas preferenciales por volumen',
        'Soporte tecnico dedicado',
        'Arquitectura empresarial',
        'Integraciones avanzadas',
        'Consultoria tecnica incluida',
      ],
      en: [
        'White-label development (your brand)',
        'Scalable, complex projects',
        'Confidentiality and NDA',
        'Preferred volume pricing',
        'Dedicated technical support',
        'Enterprise architecture',
        'Advanced integrations',
        'Technical consulting included',
      ],
    },
    icon: Building2,
    color: 'from-orange-500 to-red-500',
    popular: false,
  },
];

export default async function Pricing() {
  const locale = (await getLocale()) as 'es' | 'en';
  const copy = pageCopy[locale] ?? pageCopy.es;

  const formatPrice = (priceCOP: number) => {
    const amount = locale === 'es' ? priceCOP : convertCOPtoUSD(priceCOP);
    const formatted = locale === 'es'
      ? amount.toLocaleString('es-CO')
      : amount.toLocaleString('en-US');
    return `$${formatted}`;
  };

  return (
    <section id="planes" className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-t_primary/5 via-transparent to-transparent" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const priceLabel = plan.priceCOP ? formatPrice(plan.priceCOP) : copy.ctaCustom;
            const periodLabel = plan.periodKey === 'one-time' ? copy.periodOneTime : copy.periodCustom;

            return (
              <div
                key={plan.id}
                className={`relative group ${plan.popular ? 'lg:-translate-y-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${plan.color} text-white text-sm font-semibold shadow-lg`}>
                      {copy.popularLabel}
                    </div>
                  </div>
                )}

                <div className={`relative h-full rounded-2xl bg-slate-900/50 backdrop-blur-sm border transition-all duration-500 ${
                  plan.popular
                    ? 'border-t_primary shadow-2xl shadow-t_primary/20 scale-105'
                    : 'border-white/10 hover:border-white/20 hover:shadow-xl'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl`} />

                  <div className="relative p-8 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{plan.name[locale]}</h3>
                      <p className="text-gray-400 text-sm">{plan.tagline[locale]}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                          {plan.priceCOP ? priceLabel : copy.ctaCustom}
                        </span>
                        {plan.priceCOP && (
                          <span className="text-gray-500 text-sm">{copy.currencyLabel}</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{periodLabel}</p>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {plan.description[locale]}
                    </p>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features[locale].map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#contacto"
                      className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:scale-105 hover:shadow-2xl`
                          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {plan.priceCOP ? copy.ctaPrimary : copy.ctaCustom}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">{copy.extraText}</p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-t_primary hover:text-cyan-400 font-medium transition-colors"
          >
            {copy.extraLink}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">{copy.guaranteeTitle}</p>
              <p className="text-gray-400 text-xs">{copy.guaranteeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
