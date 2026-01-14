export const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    {
      name: 'Servicios',
      sublinks: [
        { name: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
        { name: 'Automatizaciones e IA', href: '/servicios/automatizaciones-ia' },
        { name: 'Optimización SEO + GEO', href: '/servicios/seo-geo' },
      ],
    },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ],
  socials: [
    { name: 'WhatsApp', href: 'https://wa.me/573337151064', icon: 'whatsapp' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/techtecnic', icon: 'linkedin' },
    { name: 'Instagram', href: 'https://instagram.com/techtecnic', icon: 'instagram' },
    { name: 'Facebook', href: 'https://facebook.com/techtecnic', icon: 'facebook' },
    { name: 'TikTok', href: 'https://tiktok.com/@techtecnic', icon: 'tiktok' },
  ],
}
