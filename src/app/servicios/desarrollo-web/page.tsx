import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Globe, Zap } from "lucide-react";

export const metadata = {
  title: "Desarrollo Web Moderno | Tech Tecnic",
  description:
    "Creamos sitios web profesionales, optimizados y de alto rendimiento con WordPress, React y tecnologías modernas. Tu negocio, digitalizado con propósito.",
  openGraph: {
    title: "Desarrollo Web Moderno | Tech Tecnic",
    description:
      "Sitios web y tiendas online modernas, seguras, escalables y 100% administrables.",
    url: "https://techtecnic.com/servicios/desarrollo-web",
    siteName: "Tech Tecnic",
    locale: "es_CO",
    type: "website",
  },
};

export default function DesarrolloWeb() {
  return (
    <main className="bg-gradient-to-b from-t_dark via-t_primary/90 to-black text-white">
      <section className="text-center py-32 max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-6"
        >
          Desarrollo Web <span className="text-t_accent">Moderno</span>
        </motion.h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Creamos páginas web profesionales y rápidas, listas para convertir visitantes en clientes. Diseño moderno, SEO optimizado y enfoque en resultados.
        </p>
        <Link
          href="https://wa.me/573026742059?text=👋%20Hola,%20quiero%20una%20página%20web%20con%20Tech%20Tecnic"
          className="inline-block mt-8 px-8 py-4 bg-t_accent text-t_dark rounded-full font-semibold hover:scale-105 transition-all"
        >
          Cotiza tu sitio web
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <Code className="w-10 h-10 text-t_accent" />,
            title: "Webs corporativas y profesionales",
            desc: "Desarrolladas en WordPress o React, totalmente administrables, rápidas y seguras.",
          },
          {
            icon: <Globe className="w-10 h-10 text-t_accent" />,
            title: "Tiendas online completas",
            desc: "WooCommerce y Shopify con pasarelas de pago, inventario y seguimiento de pedidos.",
          },
          {
            icon: <Zap className="w-10 h-10 text-t_accent" />,
            title: "Landing Pages de alto impacto",
            desc: "Diseñadas para campañas publicitarias y optimizadas para conversión.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            {item.icon}
            <h3 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
