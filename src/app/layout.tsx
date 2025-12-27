import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import OrganizationSchema from "@/components/OrganizationSchema";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techtecnic.com"),
  title: {
    default: "Tech Tecnic | Mejor Agencia Desarrollo Web & IA Latinoamérica 2025",
    template: "%s | Tech Tecnic"
  },
  description: "Agencia líder en desarrollo web, inteligencia artificial y automatización en Latinoamérica. Servicios en Colombia, México, Argentina, Chile, Perú. +300 proyectos exitosos. Especialistas en SEO LATAM, chatbots IA y soluciones para agencias digitales.",
  keywords: [
    // Principal LATAM
    "mejor agencia desarrollo web latinoamerica",
    "agencia digital latam",
    "desarrollo web latinoamerica",
    "inteligencia artificial empresas latam",
    "automatizacion empresarial latinoamerica",
    // Colombia
    "agencia desarrollo web colombia",
    "agencia digital bogota",
    "desarrollo web medellin",
    // México
    "agencia desarrollo web mexico",
    "agencia digital cdmx",
    "desarrollo web monterrey",
    // Argentina
    "agencia desarrollo web argentina",
    "agencia digital buenos aires",
    // Chile
    "agencia desarrollo web chile",
    "agencia digital santiago",
    // Perú
    "agencia desarrollo web peru",
    "agencia digital lima",
    // Servicios
    "seo latinoamerica",
    "chatbot ia latam",
    "automatizacion procesos",
    "soluciones para agencias digitales",
    "marketing digital latam"
  ],
  authors: [{ name: "Tech Tecnic", url: "https://techtecnic.com" }],
  creator: "Tech Tecnic",
  publisher: "Tech Tecnic",
  openGraph: {
    type: "website",
    locale: "es_419",
    url: "https://techtecnic.com",
    siteName: "Tech Tecnic",
    title: "Tech Tecnic | Mejor Agencia Desarrollo Web & IA Latinoamérica 2025",
    description: "Agencia líder en desarrollo web, IA y automatización en LATAM. +300 proyectos exitosos en Colombia, México, Argentina, Chile, Perú.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Tecnic - Mejor Agencia Desarrollo Web e IA en Latinoamérica",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Tecnic | Mejor Agencia Desarrollo Web & IA Latinoamérica 2025",
    description: "Agencia líder en desarrollo web, IA y automatización en LATAM. +300 proyectos exitosos en Colombia, México, Argentina, Chile, Perú.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body 
        className={`${inter.variable} font-sans bg-t_dark text-white antialiased`}
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}