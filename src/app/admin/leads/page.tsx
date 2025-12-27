import { Metadata } from 'next';
import LeadsDashboard from '@/components/admin/LeadsDashboard';

export const metadata: Metadata = {
  title: 'Gestión de Leads | Admin Tech-Tecnic',
  description: 'Sistema de gestión de leads y oportunidades',
  robots: 'noindex, nofollow',
};

export default function LeadsPage() {
  return <LeadsDashboard />;
}
