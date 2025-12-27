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
    description: "Sitios web modernos, rápidos y optimizados para Latinoamérica con tecnologías de vanguardia.",
    href: "/servicios/desarrollo-web",
    icon: Code,
  },
  {
    name: "SEO + GEO LATAM",
    description: "Posicionamiento local y orgánico en toda Latinoamérica para máxima visibilidad.",
    href: "/servicios/seo-geo",
    icon: Search,
  },
  {
    name: "IA y Automatización",
    description: "Soluciones inteligentes con IA que automatizan procesos y mejoran eficiencia operativa.",
    href: "/servicios/automatizacion-ia",
    icon: Bot,
  },
  {
    name: "Soluciones para Agencias",
    description: "Herramientas especializadas para agencias digitales en LATAM: CRM, automatización y analytics.",
    href: "/servicios/para-agencias",
    icon: Sparkles,
  },
  {
    name: "Integraciones",
    description: "Conectamos tus herramientas y sistemas para un flujo de trabajo sin fricciones.",
    href: "/servicios/integraciones",
    icon: Blocks,
  },
  {
    name: "Apps Móviles",
    description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android.",
    href: "/servicios/apps-moviles",
    icon: Smartphone,
  },
];