import type { Metadata } from 'next';
import AdminBlogClient from '@/components/admin/AdminBlogClient';

export const metadata: Metadata = {
  title: 'Crear Nuevo Artículo | Admin Tech Tecnic',
  description: 'Panel de administración para crear nuevos artículos del blog',
};

export default function NewBlogPostPage() {
  return <AdminBlogClient />;
}