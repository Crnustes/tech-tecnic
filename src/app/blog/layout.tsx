import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Tech Tecnic | Desarrollo Web, IA y Marketing Digital en LATAM',
  description: 'Mantén actualizado sobre tendencias en desarrollo web, inteligencia artificial, automatización, SEO y transformación digital en Latinoamérica. Contenido especializado para empresas en Colombia, México, Argentina, Chile y toda LATAM.',
  keywords: [
    'blog desarrollo web',
    'tendencias tecnología latam',
    'inteligencia artificial latinoamerica',
    'SEO latinoamerica',
    'marketing digital latam',
    'automatización empresarial',
    'transformación digital',
    'blog tecnología',
    'desarrollo web colombia',
    'noticias tecnología latam'
  ],
  openGraph: {
    title: 'Blog Tech Tecnic | Desarrollo Web, IA y Marketing Digital en LATAM',
    description: 'Mantén actualizado sobre tendencias en desarrollo web, IA, automatización y transformación digital en Latinoamérica.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://techtecnic.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
