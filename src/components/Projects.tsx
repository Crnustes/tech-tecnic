"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Yoica.com",
    desc: "Plataforma de productos naturales, enfocada en bienestar y salud con diseño limpio y conversión optimizada.",
    category: "E-commerce WordPress",
    link: "https://yoica.com",
    image: "/images/yoica.png",
  },
  {
    title: "SembrandoConfianza.com",
    desc: "Agricultura sostenible con enfoque comunitario. Migración completa y optimización SEO local.",
    category: "Desarrollo Web + SEO",
    link: "https://sembrandoconfianza.com/",
    image: "/images/sembrando.png",
  },
  {
    title: "ConoceTusDerechos.co",
    desc: "Plataforma informativa para asesoría jurídica con foco en accesibilidad y experiencia de usuario.",
    category: "Informativo + UX/UI",
    link: "https://conocetusderechos.co/",
    image: "/images/conoce.png",
  },
  {
    title: "TiendaDelChocolate.com",
    desc: "E-commerce premium para chocolates artesanales con integración WooCommerce y diseño visual de marca.",
    category: "E-commerce",
    link: "https://tiendadelchocolate.com/",
    image: "/images/chocolate.png",
  },
  {
    title: "Ananassa.co",
    desc: "E-commerce especializado en fresas con chocolate. SEO GEO, analítica, UX moderno y automatización.",
    category: "E-commerce + SEO + IA",
    link: "https://ananassa.co/",
    image: "/images/ananassa.png",
  },
  {
    title: "WooCar.io",
    desc: "Aplicación web para alquiler de vehículos eléctricos, conectada a API y backend personalizado.",
    category: "App Web + Integraciones",
    link: "https://woocar.io/",
    image: "/images/woocar.png",
  },
  {
    title: "Florida2R.com",
    desc: "Sitio inmobiliario con filtros avanzados y fichas dinámicas de propiedades integradas con CRM.",
    category: "Inmobiliario",
    link: "http://florida2r.com/",
    image: "/images/florida.png",
  },
  {
    title: "Cristian.click",
    desc: "Portfolio personal optimizado, animaciones con React y estructura escalable para SEO técnico.",
    category: "Personal Portfolio",
    link: "https://cristian.click",
    image: "/images/portafolio.png",
  },
  {
    title: "KLDiseñoYConstrucción.com",
    desc: "Sitio corporativo de arquitectura y construcción con enfoque en estética, velocidad y SEO.",
    category: "Corporativo + SEO",
    link: "https://kldisenoyconstruccion.com/",
    image: "/images/kldiseno.png",
  },
  {
    title: "BicicletasElectricasBogota.com.co",
    desc: "Tienda online de movilidad eléctrica, UX enfocado en conversiones y productos dinámicos.",
    category: "E-commerce + SEO GEO",
    link: "https://bicicletaselectricasbogota.com.co/",
    image: "/images/bicicletas.png",
  },
  {
    title: "ImperialDunas.com",
    desc: "Desarrollo web para resort de lujo frente al mar, diseño premium, integración de reservas y optimización de rendimiento global.",
    category: "Hospitality / Resort Web",
    link: "https://imperialdunas.com/",
    image: "/images/imperial.png",
  },
  {
    title: "Hoffman-Latam.com",
    desc: "Mantenimiento técnico y optimización de rendimiento para empresa de fotografía profesional.",
    category: "Mantenimiento + Performance",
    link: "https://hoffman-latam.com/",
    image: "/images/hoffman.png",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-t_dark mb-12"
        >
          Casos de Éxito
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition bg-white/80 backdrop-blur-sm"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110 rounded-t-2xl"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-t_dark mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3">{project.desc}</p>
                <span className="text-xs bg-t_primary/10 text-t_primary px-3 py-1 rounded-full font-medium">
                  {project.category}
                </span>
                <div className="mt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-t_primary text-sm font-semibold hover:underline"
                  >
                    Ver proyecto →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Luces decorativas */}
      <motion.div
        className="absolute top-10 left-0 w-[400px] h-[400px] bg-t_primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-t_accent/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </section>
  );
}
