import { MessageSquare, Palette, Code2, TestTube, Rocket, Sparkles } from 'lucide-react';
import { getLocale } from 'next-intl/server';

const pageCopy = {
  es: {
    badge: 'Nuestro Proceso',
    titleTop: 'Como',
    titleBottom: 'trabajamos',
    subtitle: 'Un proceso probado que garantiza resultados excepcionales en cada proyecto',
    ctaText: 'Listo para comenzar tu proyecto?',
    ctaButton: 'Iniciar ahora',
    steps: [
      {
        number: '01',
        title: 'Descubrimiento',
        subtitle: 'Entendemos tu vision',
        description:
          'Nos reunimos para conocer tus objetivos, publico objetivo y expectativas. Analizamos tu competencia y definimos una estrategia clara.',
        duration: '1-2 dias',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        number: '02',
        title: 'Diseno',
        subtitle: 'Creamos la experiencia',
        description:
          'Disenamos interfaces modernas y funcionales. Priorizamos la usabilidad, conversion y experiencia de usuario.',
        duration: '3-5 dias',
        color: 'from-purple-500 to-pink-500',
      },
      {
        number: '03',
        title: 'Desarrollo',
        subtitle: 'Construimos con calidad',
        description:
          'Desarrollamos tu proyecto con tecnologia de punta, codigo limpio y optimizado para rendimiento y SEO.',
        duration: '1-3 semanas',
        color: 'from-emerald-500 to-teal-500',
      },
      {
        number: '04',
        title: 'Pruebas',
        subtitle: 'Garantizamos calidad',
        description:
          'Testeamos en multiples dispositivos y navegadores. Corregimos detalles y optimizamos cada aspecto.',
        duration: '2-3 dias',
        color: 'from-orange-500 to-red-500',
      },
      {
        number: '05',
        title: 'Lanzamiento',
        subtitle: 'Tu proyecto en vivo',
        description:
          'Lanzamos tu sitio al mundo y te acompanamos con capacitacion, soporte y mejoras continuas.',
        duration: '1 dia',
        color: 'from-t_primary to-cyan-400',
      },
    ],
  },
  en: {
    badge: 'Our Process',
    titleTop: 'How',
    titleBottom: 'we work',
    subtitle: 'A proven process that delivers exceptional results in every project',
    ctaText: 'Ready to start your project?',
    ctaButton: 'Start now',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        subtitle: 'We understand your vision',
        description:
          'We meet to learn your goals, target audience, and expectations. We analyze your competition and define a clear strategy.',
        duration: '1-2 days',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        number: '02',
        title: 'Design',
        subtitle: 'We craft the experience',
        description:
          'We design modern, functional interfaces. We prioritize usability, conversion, and user experience.',
        duration: '3-5 days',
        color: 'from-purple-500 to-pink-500',
      },
      {
        number: '03',
        title: 'Development',
        subtitle: 'We build with quality',
        description:
          'We develop your project with leading tech, clean code, and performance and SEO optimization.',
        duration: '1-3 weeks',
        color: 'from-emerald-500 to-teal-500',
      },
      {
        number: '04',
        title: 'Testing',
        subtitle: 'We ensure quality',
        description:
          'We test across devices and browsers. We fix details and optimize every aspect.',
        duration: '2-3 days',
        color: 'from-orange-500 to-red-500',
      },
      {
        number: '05',
        title: 'Launch',
        subtitle: 'Your project live',
        description:
          'We launch your site and support you with training, support, and continuous improvements.',
        duration: '1 day',
        color: 'from-t_primary to-cyan-400',
      },
    ],
  },
};

const stepIcons = [MessageSquare, Palette, Code2, TestTube, Rocket];

export default async function Process() {
  const locale = (await getLocale()) as 'es' | 'en';
  const copy = pageCopy[locale] ?? pageCopy.es;

  return (
    <section id="proceso" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-t_primary/10 to-t_accent/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">{copy.badge}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-t_dark">{copy.titleTop} </span>
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              {copy.titleBottom}
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-t_primary via-t_accent to-t_primary transform -translate-x-1/2" />

          <div className="space-y-24">
            {copy.steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block">
                      <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <span className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-50`}>
                          {step.number}
                        </span>
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-semibold`}>
                          {step.duration}
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-t_dark mb-2">{step.title}</h3>
                      <p className={`text-lg font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed max-w-md inline-block">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />

                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-xl">
            <p className="text-gray-600 mb-4 text-lg">{copy.ctaText}</p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-t_primary to-cyan-400 text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-2xl"
            >
              {copy.ctaButton}
              <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
