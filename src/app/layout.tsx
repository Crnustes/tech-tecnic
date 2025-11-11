import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

// ✅ Fuente optimizada (sin bloqueo de render)
const inter = Inter({ subsets: ["latin"], display: "swap" })

// ✅ SEO + OpenGraph + Twitter + Metadata base
export const metadata: Metadata = {
  title: "Tech Tecnic | Desarrollo Web y Automatización con IA",
  description:
    "Creamos sitios web modernos, rápidos y optimizados con inteligencia artificial. Especialistas en WordPress, React y SEO técnico. Tech Tecnic - Innovación digital.",
  keywords: [
    "Desarrollo web Bogotá",
    "Agencia web LATAM",
    "WordPress Elementor",
    "Next.js React",
    "Automatización con IA",
    "SEO técnico",
  ],
  authors: [{ name: "Cristian Ñustes", url: "https://techtecnic.com" }],
  creator: "Tech Tecnic",
  publisher: "Tech Tecnic",
  metadataBase: new URL("https://techtecnic.com"),
  alternates: {
    canonical: "https://techtecnic.com",
  },
  openGraph: {
    title: "Tech Tecnic | Desarrollo Web & IA",
    description:
      "Soluciones digitales inteligentes: desarrollo web, automatización y optimización SEO.",
    url: "https://techtecnic.com",
    siteName: "Tech Tecnic",
    images: [
      {
        url: "https://techtecnic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Tecnic - Desarrollo Web e IA",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Tecnic | Innovación y Desarrollo Web",
    description:
      "Desarrollo web profesional con enfoque en SEO, IA y experiencia digital.",
    images: ["https://techtecnic.com/og-image.jpg"],
    creator: "@techtecnic",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* ✅ Schema GEO - LocalBusiness para SEO Local */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tech Tecnic",
              image: "https://techtecnic.com/og-image.jpg",
              url: "https://techtecnic.com",
              telephone: "+57 310 000 0000",
              email: "hola@techtecnic.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bogotá, Colombia",
                addressLocality: "Bogotá",
                addressRegion: "Cundinamarca",
                postalCode: "110111",
                addressCountry: "CO",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://www.facebook.com/techtecnic",
                "https://www.instagram.com/techtecnic",
                "https://www.linkedin.com/company/techtecnic",
              ],
            }),
          }}
        />

        {/* ✅ Google Tag Manager (carga asíncrona) */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>

      <body
        className={`${inter.className} antialiased bg-t_bg text-t_dark min-h-screen`}
      >
        {children}

        <FloatingWhatsApp /> {/* Componente de WhatsApp flotante */}
      </body>
    </html>
  )
}
