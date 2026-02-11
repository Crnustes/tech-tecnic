import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.techtecnic.com" }],
        destination: "https://techtecnic.com/:path*",
        permanent: true,
      },
      {
        source: "/en/blog/ia-automatizacion-transformar-negocio-2026",
        destination: "/en/blog/ai-automation-transform-business-2026",
        permanent: true,
      },
      {
        source: "/en/blog/seo-local-domina-google-zona-bogota-medellin",
        destination: "/en/blog/local-seo-dominate-google-bogota-medellin",
        permanent: true,
      },
      {
        source: "/en/blog/desarrollo-web-moderno-react-nextjs-2026",
        destination: "/en/blog/modern-web-development-react-nextjs-2026",
        permanent: true,
      },
      {
        source: "/en/blog/cuanto-cuesta-pagina-web-colombia-bogota-medellin-2026",
        destination: "/en/blog/website-cost-colombia-bogota-medellin-2026",
        permanent: true,
      },
      {
        source: "/en/blog/chatbot-whatsapp-ia-colombia-bogota-medellin-cali",
        destination: "/en/blog/whatsapp-ai-chatbot-colombia-bogota-medellin",
        permanent: true,
      },
      {
        source: "/blog/chatbot-whatsapp-ia-colombia-bogota-medellin-cali",
        destination: "/blog/chatbot-whatsapp-ia-colombia-bogota-medellin",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
