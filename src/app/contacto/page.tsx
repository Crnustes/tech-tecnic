import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contáctanos | Agencia Digital en Latinoamérica | Tech Tecnic',
  description: 'Contáctanos para desarrollo web, SEO, apps móviles, automatización con IA y marketing digital. Atención personalizada en Colombia, México, Argentina, Chile y toda Latinoamérica. Cotización gratuita.',
  keywords: [
    'contacto agencia digital latam',
    'cotización desarrollo web',
    'presupuesto apps móviles',
    'consultoría tecnológica',
    'agencia digital latinoamerica',
    'desarrollo web latam',
    'contacto tech tecnic',
    'servicios digitales latam',
    'soporte técnico'
  ],
  openGraph: {
    title: 'Contáctanos | Tech Tecnic',
    description: 'Contáctanos para desarrollo web, SEO, apps móviles y automatización con IA en Latinoamérica.',
    type: 'website',
    locale: 'es_LA',
    alternateLocale: ['es_CO', 'es_MX', 'es_AR', 'es_CL', 'es_PE'],
  },
  alternates: {
    canonical: 'https://techtecnic.com/contacto',
  },
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Respuesta inmediata',
    value: '+57 302 674 2059',
    link: 'https://wa.me/573026742059',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Respuesta en 24 horas',
    value: 'hola@techtecnic.com',
    link: 'mailto:hola@techtecnic.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    description: 'Lunes a Viernes 8AM-6PM',
    value: '+57 302 674 2059',
    link: 'tel:+573026742059',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    description: 'Bogotá, Colombia',
    value: 'Atención remota nacional',
    link: '#',
    color: 'from-orange-500 to-red-500'
  }
];

const services = [
  'Desarrollo Web',
  'Apps Móviles',
  'SEO y Posicionamiento',
  'IA y Automatización',
  'Integraciones',
  'Mantenimiento Web',
  'Para Agencias',
  'Otro'
];

export default function ContactoPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-t_primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-t_primary/10 border border-t_primary/20 mb-6">
            <MessageCircle className="w-4 h-4 text-t_primary" />
            <span className="text-sm text-t_primary font-medium">Hablemos</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              ¿Listo para
            </span>
            <br />
            <span className="bg-gradient-to-r from-t_primary to-t_accent bg-clip-text text-transparent">
              Transformar tu Negocio?
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la
            <strong className="text-white"> solución perfecta</strong> para tus necesidades
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5 text-t_primary" />
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-t_primary" />
              <span>Consulta gratuita</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MessageCircle className="w-5 h-5 text-t_primary" />
              <span>Atención personalizada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Formas de Contacto</h2>
            <p className="text-gray-400 text-lg">Elige la opción que más te convenga</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  className="group relative bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-t_primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-t_primary/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

                  <div className="relative text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                    <p className="text-t_primary font-semibold">{method.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Cuéntanos tu Proyecto</h2>
              <p className="text-gray-400 mb-8">
                Completa el formulario y te contactaremos lo antes posible con una propuesta personalizada.
              </p>

              <ContactForm services={services} />
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">¿Por qué contactarnos?</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Experiencia Comprobada',
                      description: 'Más de 50 proyectos exitosos en Bogotá y Colombia.'
                    },
                    {
                      title: 'Atención Personalizada',
                      description: 'Cada proyecto recibe atención dedicada y seguimiento continuo.'
                    },
                    {
                      title: 'Tecnología de Vanguardia',
                      description: 'Utilizamos las últimas herramientas y frameworks disponibles.'
                    },
                    {
                      title: 'Resultados Garantizados',
                      description: 'Nos enfocamos en ROI y objetivos de negocio concretos.'
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-t_primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Preguntas Frecuentes</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: '¿Cuál es el tiempo de respuesta?',
                      a: 'Respondemos todas las consultas en menos de 24 horas hábiles.'
                    },
                    {
                      q: '¿Ofrecen consultoría gratuita?',
                      a: 'Sí, la primera consulta es gratuita para evaluar tu proyecto.'
                    },
                    {
                      q: '¿Trabajan con empresas fuera de Bogotá?',
                      a: 'Sí, atendemos clientes en toda Colombia de forma remota.'
                    }
                  ].map((faq, i) => (
                    <div key={i}>
                      <h4 className="text-white font-semibold mb-1">{faq.q}</h4>
                      <p className="text-gray-400 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-t_primary/10 to-t_accent/10 border border-t_primary/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Horarios de Atención</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  * Consultas fuera de horario son atendidas al día siguiente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}