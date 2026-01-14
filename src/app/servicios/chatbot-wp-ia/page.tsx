import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageSquare,
  Brain,
  CheckCircle2,
  Sparkles,
  Bot,
  Zap,
  Workflow,
  Database,
  Shield,
  Gauge,
  Users,
  Calendar,
  ShoppingCart,
  BarChart3,
  Rocket,
} from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import PricingButton from '@/components/PricingButton';

export const metadata: Metadata = {
  title: 'Chatbot WhatsApp con IA | Automatización 24/7 | Tech Tecnic',
  description:
    'Bot de WhatsApp con inteligencia artificial para atención automatizada, captura de leads y soporte 24/7. Integración con web, apps y CRM. Prueba rápida y escalable a producción.',
  openGraph: {
    title: 'Chatbot WhatsApp con IA | Tech Tecnic',
    description: 'Bot inteligente de WhatsApp integrado con tu negocio: web, apps y CRM.',
    type: 'website',
  },
  alternates: { canonical: 'https://techtecnic.com/servicios/chatbot-wp-ia' },
};

const bullets = [
  'Bot de WhatsApp con IA conversacional avanzada',
  'Entrenamiento con tus datos (FAQs, productos, PDFs)',
  'Integración con web, apps móviles y CRM',
  'Captura y cualificación automática de leads',
];

export default function ChatbotWpIaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* AI-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Chatbot WhatsApp con IA',
            provider: { '@type': 'Organization', name: 'Tech Tecnic' },
            areaServed: 'Bogotá, Colombia',
            serviceType: 'WhatsApp Business Automation with AI',
            description:
              'Bot de WhatsApp con inteligencia artificial para automatización de atención, captura de leads y soporte 24/7. Integración con web, apps y CRM.',
            offers: {
              '@type': 'Offer',
              price: '800000',
              priceCurrency: 'COP',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-400 font-medium">Bot WhatsApp con IA</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Bot de WhatsApp</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">con Inteligencia Artificial</span>
                <br />
                <span className="text-white">para tu negocio</span>
              </h1>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Automatiza atención en WhatsApp con IA. Se integra con tu web, app móvil o CRM. Prueba rápida y escala a producción cuando estés listo.
              </p>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"><Bot className="w-4 h-4"/> WhatsApp Business</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"><Zap className="w-4 h-4"/> IA Generativa</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"><Shield className="w-4 h-4"/> Multi-plataforma</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"><Gauge className="w-4 h-4"/> Respuesta instant.</span>
              </div>
              <div className="space-y-3 mb-8">
                {bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-gray-300">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message="Hola, quiero probar el Bot de WhatsApp con IA para mi negocio"
                  service="chatbot-wp-ia"
                  action="click_cta_hero"
                  label="Chatbot WhatsApp IA"

                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
                >
                  Solicitar prueba
                </WhatsAppButton>
                <Link href="#detalle" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all">
                  Ver detalles
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 p-12">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MessageSquare className="w-32 h-32 text-indigo-400/30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Casos de uso principales</h2>
            <p className="text-gray-400 text-lg">Resultados rápidos donde más impacta el negocio</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Atención en WhatsApp', desc: 'Respuestas automáticas 24/7 con IA conversacional.' },
              { icon: ShoppingCart, title: 'Ventas', desc: 'Catálogo, seguimiento de pedidos y cierres automatizados.' },
              { icon: Calendar, title: 'Agendamiento', desc: 'Reservas y confirmaciones directas por WhatsApp.' },
              { icon: Database, title: 'Leads a CRM', desc: 'Captura y sincronización automática con tu CRM.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="detalle" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Arquitectura y flujo</h2>
            <p className="text-gray-400 text-lg">Validación ágil → escalado seguro a producción</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '1. Recolección de Contenido', desc: 'Páginas, FAQs y PDFs para entrenar el chatbot.' },
              { title: '2. Entrenamiento Inicial', desc: 'Indexación y creación del modelo con tu información.' },
              { title: '3. Prueba en Staging', desc: 'Widget de prueba y ajustes con tu equipo.' },
              { title: '4. Go Live', desc: 'Activación en producción y conexión a CRM.' },
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          {/* Integration lanes */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Canales', items: ['WhatsApp Business API', 'Widget Web', 'App Móvil'] },
              { title: 'Capa IA', items: ['IA Conversacional', 'Retrieval + Reglas', 'Guardrails'] },
              { title: 'Integraciones', items: ['CRM (HubSpot/Zoho)', 'E-commerce', 'Calendarios'] },
            ].map((col, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((it, k) => (
                    <li key={k} className="text-gray-300">• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Planes y precios</h2>
            <p className="text-gray-400">Empieza en prueba y escala cuando tengas el ROI claro</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Prueba Rápida',
                price: 'Desde $0',
                color: 'from-indigo-500 to-violet-500',
                features: ['Entrenamiento inicial', 'Widget en staging', 'Feedback y ajustes'],
              },
              {
                name: 'Pro Producción',
                price: '$800.000',
                color: 'from-blue-500 to-cyan-500',
                features: ['Go live WordPress', 'WhatsApp opcional', 'Leads al CRM', 'Panel básico'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'Personalizado',
                color: 'from-orange-500 to-red-500',
                features: ['Flujos avanzados', 'Integraciones múltiples', 'SLA y soporte dedicado'],
              },
            ].map((p, i) => (
              <div key={i} className="group relative rounded-2xl bg-slate-900/50 border border-white/10 p-8 hover:border-indigo-400/50 transition-all">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{p.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{p.price}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, k) => (
                    <li key={k} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-indigo-400" /><span className="text-gray-300">{f}</span></li>
                  ))}
                </ul>
                <PricingButton
                  planName={p.name}
                  service="chatbot-wp-ia"
                  message={`Hola, quiero información sobre el plan ${p.name} del Bot WhatsApp con IA`}
                  color={p.color}
                >
                  Empezar
                </PricingButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-400 font-medium">Versión de Prueba disponible</span>
          </div>
          <p className="text-gray-300 mb-6">Valida el valor sin compromiso y activa producción cuando lo necesites.</p>
          <WhatsAppButton
            message="Quiero activar la prueba del Bot de WhatsApp con IA"
            service="chatbot-wp-ia"
            action="click_cta_trial"
            label="Chatbot WhatsApp IA - Trial"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Iniciar prueba
          </WhatsAppButton>
          <div className="text-left max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
            {[
              { q: '¿Necesito WhatsApp Business?', a: 'Sí. Usamos WhatsApp Business API oficial. Te ayudamos con el setup si no lo tienes.' },
              { q: '¿Cómo se entrena el bot?', a: 'Con tus FAQs, catálogo de productos, PDFs y flujos personalizados. IA generativa + reglas.' },
              { q: '¿Se integra con mi web/app?', a: 'Sí. Conectamos con cualquier web, app móvil o CRM via API, webhooks o plataformas como Zapier.' },
              { q: '¿Privacidad y cumplimiento?', a: 'Cumplimos con políticas de WhatsApp. Implementamos guardrails y almacenamiento seguro.' },
            ].map((f, i) => (
              <details key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <summary className="cursor-pointer text-white font-semibold">{f.q}</summary>
                <p className="mt-2 text-gray-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}