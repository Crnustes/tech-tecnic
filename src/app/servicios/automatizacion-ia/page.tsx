import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Bot, 
  Zap, 
  MessageSquare, 
  Workflow, 
  Brain,
  CheckCircle2,
  Clock,
  TrendingDown,
  Users,
  Sparkles,
  Database,
  Mail,
  Calendar,
  ShoppingCart,
  BarChart3
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';

export const metadata: Metadata = {
  title: 'Automatización con IA en Bogotá | Chatbots y Procesos | Tech Tecnic',
  description: 'Automatización empresarial con Inteligencia Artificial en Bogotá. Chatbots inteligentes, flujos automatizados, integración con CRMs y más. Ahorra tiempo y costos.',
  keywords: [
    'automatización IA bogotá',
    'chatbot inteligente colombia',
    'automatización empresarial',
    'inteligencia artificial bogotá',
    'chatbot whatsapp',
    'automatización procesos',
    'ia para empresas',
    'zapier make colombia'
  ],
  openGraph: {
    title: 'Automatización con IA en Bogotá | Tech Tecnic',
    description: 'Automatiza procesos, reduce costos y aumenta productividad con IA.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://techtecnic.com/servicios/automatizacion-ia',
  },
};

const benefits = [
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Automatiza tareas repetitivas y libera tiempo para lo importante.',
    stat: '70% menos tiempo',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingDown,
    title: 'Reduce Costos',
    description: 'Disminuye costos operativos automatizando procesos manuales.',
    stat: '60% reducción',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Mejor Servicio',
    description: 'Atiende clientes 24/7 con respuestas instantáneas y precisas.',
    stat: '24/7 disponible',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Más Productividad',
    description: 'Tu equipo se enfoca en tareas estratégicas de alto valor.',
    stat: '+85% eficiencia',
    color: 'from-orange-500 to-red-500',
  },
];

const useCases = [
  {
    icon: MessageSquare,
    title: 'Chatbots Inteligentes',
    description: 'Chatbots con IA para WhatsApp, web y redes sociales.',
    features: [
      'Respuestas en lenguaje natural',
      'Integración con WhatsApp Business',
      'Captura automática de leads',
      'Transferencia a agentes humanos',
      'Entrenamiento personalizado',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Workflow,
    title: 'Automatización de Procesos',
    description: 'Flujos automatizados que conectan tus herramientas.',
    features: [
      'Automatización con Zapier/Make',
      'Sincronización de datos',
      'Notificaciones automáticas',
      'Procesamiento de documentos',
      'Workflows personalizados',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Integración con CRMs',
    description: 'Conecta tu IA con HubSpot, Zoho, Odoo y más.',
    features: [
      'Captura automática de contactos',
      'Actualización de registros',
      'Seguimiento de leads',
      'Reportes automáticos',
      'APIs personalizadas',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Email Marketing Automatizado',
    description: 'Campañas inteligentes basadas en comportamiento.',
    features: [
      'Segmentación automática',
      'Emails personalizados',
      'Follow-ups inteligentes',
      'A/B testing automatizado',
      'Análisis predictivo',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

const packages = [
  {
    name: 'Chatbot Básico',
    price: '$800.000',
    description: 'Chatbot para atención al cliente',
    features: [
      'Chatbot entrenado (hasta 50 preguntas)',
      'Integración WhatsApp o Web',
      'Respuestas automatizadas',
      'Panel de administración',
      'Análisis básico',
      '1 mes de soporte',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Automatización Pro',
    price: '$1.500.000',
    description: 'Flujos completos y integraciones',
    features: [
      'Todo lo del plan Básico',
      'Integración con CRM',
      '5 flujos automatizados (Zapier/Make)',
      'Chatbot avanzado (100+ preguntas)',
      'Reportes y analytics',
      '3 meses de soporte',
    ],
    popular: true,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'IA Enterprise',
    price: 'Personalizado',
    description: 'Solución completa para empresas',
    features: [
      'Todo lo del plan Pro',
      'IA personalizada con modelos propios',
      'Automatizaciones ilimitadas',
      'Múltiples integraciones',
      'Consultoría estratégica',
      'Soporte prioritario dedicado',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

const automationExamples = [
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Confirmación de pedidos, seguimiento de envíos, recuperación de carritos abandonados.',
  },
  {
    icon: Calendar,
    title: 'Agendamiento',
    description: 'Reservas automáticas, recordatorios, confirmaciones y reagendamiento inteligente.',
  },
  {
    icon: Users,
    title: 'Soporte',
    description: 'Atención 24/7, respuestas a FAQs, escalamiento a agentes humanos.',
  },
  {
    icon: Database,
    title: 'Gestión de Datos',
    description: 'Captura de leads, actualización de bases de datos, sincronización entre plataformas.',
  },
];

export default function AutomatizacionIAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">Automatización e Inteligencia Artificial</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Automatiza con</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Inteligencia Artificial
                </span>
                <br />
                <span className="text-white">y crece más rápido</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Chatbots inteligentes, automatización de procesos y soluciones con IA 
                en <strong className="text-white">Bogotá</strong>. Ahorra tiempo, reduce costos 
                y escala tu negocio.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-8">
                {[
                  'Chatbots para WhatsApp y Web',
                  'Automatización de tareas repetitivas',
                  'Integración con tus herramientas',
                  'ROI medible desde el primer mes',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message="Hola, quiero automatizar mi negocio con IA"
                  service="automatizacion-ia"
                  action="click_cta_hero"
                  label="Automatización IA"

                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  Consultoría gratuita
                </WhatsAppButton>
                <Link
                  href="#casos-uso"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
                >
                  Ver casos de uso
                </Link>
              </div>
            </div>

            {/* Right - Animated Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="w-32 h-32 text-purple-400/30 animate-pulse" />
                </div>
                
                {/* Floating icons */}
                <div className="absolute top-8 right-8 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-float">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-8 left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-float delay-1000">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Por qué automatizar con IA?
            </h2>
            <p className="text-gray-400 text-lg">
              Beneficios comprobados para tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}>
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="casos-uso" className="relative py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Soluciones</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Qué podemos automatizar?
            </h2>
            <p className="text-gray-400 text-lg">
              Soluciones de IA para cada necesidad de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={i}
                  className="group p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-400 mb-6">{useCase.description}</p>
                  
                  <ul className="space-y-3">
                    {useCase.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-purple-400 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Casos de uso por industria
            </h2>
            <p className="text-gray-400">
              Automatización aplicada a tu sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationExamples.map((example, i) => {
              const Icon = example.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{example.title}</h3>
                  <p className="text-gray-400 text-sm">{example.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Planes de Automatización
            </h2>
            <p className="text-gray-400 text-lg">
              Desde chatbots hasta soluciones enterprise personalizadas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl bg-slate-900/50 border transition-all duration-500 ${
                  pkg.popular 
                    ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${pkg.color} text-white text-sm font-semibold`}>
                      Más Popular
                    </div>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6`}>
                  <Bot className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </span>
                  {pkg.price !== 'Personalizado' && (
                    <span className="text-gray-500 text-sm ml-2">COP</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <PricingButton
                  planName={pkg.name}
                  service="automatizacion-ia"
                  message={`Hola, quiero información sobre ${pkg.name}`}
                  color={pkg.popular ? pkg.color : ''}
                >
                  {pkg.price === 'Personalizado' ? 'Contactar' : 'Comenzar ahora'}
                </PricingButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA 
        title="¿Listo para automatizar tu negocio?"
        description="Agenda una consultoría gratuita y descubre cómo la IA puede transformar tu operación."
        primaryText="Consultoría gratuita"
      />
    </div>
  );
}