'use client';

import { MessageSquare, Palette, Code2, TestTube, Rocket, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Descubrimiento',
    subtitle: 'Entendemos tu visión',
    description: 'Nos reunimos para conocer tus objetivos, público objetivo y expectativas. Analizamos tu competencia y definimos una estrategia clara.',
    duration: '1-2 días',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Diseño',
    subtitle: 'Creamos la experiencia',
    description: 'Diseñamos interfaces modernas y funcionales. Priorizamos la usabilidad, conversión y experiencia de usuario.',
    duration: '3-5 días',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrollo',
    subtitle: 'Construimos con calidad',
    description: 'Desarrollamos tu proyecto con tecnología de punta, código limpio y optimizado para rendimiento y SEO.',
    duration: '1-3 semanas',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    number: '04',
    icon: TestTube,
    title: 'Pruebas',
    subtitle: 'Garantizamos calidad',
    description: 'Testeamos en múltiples dispositivos y navegadores. Corregimos detalles y optimizamos cada aspecto.',
    duration: '2-3 días',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Lanzamiento',
    subtitle: 'Tu proyecto en vivo',
    description: 'Lanzamos tu sitio al mundo y te acompañamos con capacitación, soporte y mejoras continuas.',
    duration: '1 día',
    color: 'from-t_primary to-cyan-400',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-t_primary/10 to-t_accent/10 border border-t_primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">Nuestro Proceso</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-t_dark">Cómo </span>
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              trabajamos
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un proceso probado que garantiza resultados excepcionales en cada proyecto
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-t_primary via-t_accent to-t_primary transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block">
                      {/* Number Badge */}
                      <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <span className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-50`}>
                          {step.number}
                        </span>
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-semibold`}>
                          {step.duration}
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-t_dark mb-2">
                        {step.title}
                      </h3>
                      <p className={`text-lg font-medium bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed max-w-md inline-block">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                      
                      {/* Icon Container */}
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-xl">
            <p className="text-gray-600 mb-4 text-lg">
              ¿Listo para comenzar tu proyecto?
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-t_primary to-cyan-400 text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-2xl"
            >
              Iniciar ahora
              <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}