import { Code, Search, Bot, Blocks, Smartphone, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Servicio {
  name: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}

export const servicios: Servicio[] = [
  {
    name: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y optimizados con las últimas tecnologías.",
    href: "/servicios/desarrollo-web",
    icon: Code,
  },
  {
    name: "SEO + GEO",
    description: "Posicionamiento local y orgánico para aumentar tu visibilidad online.",
    href: "/servicios/seo-geo",
    icon: Search,
  },
  {
    name: "IA y Automatización",
    description: "Soluciones inteligentes que automatizan procesos y mejoran eficiencia.",
    href: "/servicios/automatizacion-ia",
    icon: Bot,
  },
  {
    name: "Integraciones",
    description: "Conectamos tus herramientas para un flujo de trabajo sin fricciones.",
    href: "/servicios/integraciones",
    icon: Blocks,
  },
  {
    name: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma para iOS y Android.",
    href: "/servicios/apps-moviles",
    icon: Smartphone,
  },
  {
    name: "Diseño UX/UI",
    description: "Experiencias digitales intuitivas y visualmente impactantes.",
    href: "/servicios/diseno",
    icon: Sparkles,
  },
];