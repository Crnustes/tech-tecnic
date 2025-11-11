import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, BarChart3, MessageSquare, Zap } from "lucide-react";

export const metadata = {
  title: "IA Aplicada a Negocios | Tech Tecnic",
  description:
    "Descubre cómo la inteligencia artificial puede ayudarte a vender más, optimizar tus procesos y automatizar decisiones con precisión.",
  openGraph: {
    title: "IA Aplicada a Negocios | Tech Tecnic",
    description:
      "Implementamos inteligencia artificial práctica para empresas: asistentes de ventas, análisis de datos y generación de contenido inteligente.",
    url: "https://techtecnic.com/servicios/ia-negocios",
    siteName: "Tech Tecnic",
    locale: "es_CO",
    type: "website",
  },
};

export default function IANegocios() {
  return (
    <main className="bg-gradient-to-b from-t_dark via-t_primary/80 to-black text-white">
      {/* HERO */}
      <section className="text-center py-32 max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-6"
        >
          IA Aplicada a <span className="text-t_accent">Negocios</span>
        </motion.h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Llevamos la inteligencia artificial a tu empresa de forma práctica y rentable. Desde asistentes virtuales hasta análisis predictivos en tiempo real.
        </p>
        <Link
          href="https://wa.me/573026742059?text=👋%20Hola,%20quiero%20implementar%20IA%20en%20mi%20negocio%20con%20Tech%20Tecnic"
          className="inline-block mt-8 px-8 py-4 bg-t_accent text-t_dark rounded-full font-semibold hover:scale-105 transition-all"
        >
          Agendar diagnóstico IA
        </Link>
      </section>

      {/* CASOS */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <MessageSquare className="w-10 h-10 text-t_accent" />,
            title: "Asistentes de Ventas IA",
            desc: "Chatbots entrenados para responder clientes, generar cotizaciones y cerrar ventas.",
          },
          {
            icon: <BarChart3 className="w-10 h-10 text-t_accent" />,
            title: "Análisis Predictivo",
            desc: "Modelos de IA que anticipan la demanda, detectan tendencias y optimizan decisiones.",
          },
          {
            icon: <Brain className="w-10 h-10 text-t_accent" />,
            title: "Automatización Inteligente",
            desc: "Integración de flujos automáticos con aprendizaje continuo en tus sistemas empresariales.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            {item.icon}
            <h3 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-32 bg-gradient-to-tr from-t_accent to-cyan-500 text-t_dark">
        <h3 className="text-4xl font-bold mb-6">Empieza hoy tu transformación con IA</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Conecta tu empresa con el futuro digital. Llevamos la inteligencia artificial a tu flujo de trabajo sin complicaciones.
        </p>
        <Link
          href="https://wa.me/573026742059?text=👋%20Hola,%20quiero%20agendar%20una%20consulta%20de%20IA%20con%20Tech%20Tecnic"
          className="inline-flex items-center bg-t_dark text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-all shadow-md"
        >
          Solicitar asesoría
          <Zap className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}
