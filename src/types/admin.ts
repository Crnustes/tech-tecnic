// types/admin.ts
export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  publishedAt: string;
  status: 'draft' | 'published';
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogFormData {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  publishedAt?: string;
  status: 'draft' | 'published';
}

export const BLOG_CATEGORIES = [
  'Desarrollo Web',
  'Inteligencia Artificial',
  'SEO & Optimización',
  'Desarrollo Móvil',
  'E-commerce',
  'Automatización',
  'Tecnología'
] as const;

export const SUGGESTED_TAGS = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js',
  'SEO', 'Performance', 'IA', 'ChatGPT', 'Tailwind CSS',
  'PWA', 'API', 'Database', 'DevOps', 'Cloud'
] as const;