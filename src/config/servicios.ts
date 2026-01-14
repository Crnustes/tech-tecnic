import { Code, Search, Bot, Blocks, Smartphone, Sparkles, MessageSquare } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { servicesCatalog } from './servicesCatalog';

export interface Servicio {
  name: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}

// Build menu from catalog (only enabled and flagged for menu)
export const servicios: Servicio[] = servicesCatalog
  .filter((s) => s.enabled !== false && s.showInMenu !== false)
  .map((s) => ({
    name: s.title,
    description: s.description,
    href: `/servicios/${s.slug}`,
    icon: s.icon,
  }));