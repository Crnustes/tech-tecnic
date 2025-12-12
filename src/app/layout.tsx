import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techtecnic.com"),
  title: {
    default: "Tech Tecnic | Desarrollo Web, IA y Automatización",
    template: "%s | Tech Tecnic"
  },
  description: "Agencia moderna enfocada en desarrollo web, inteligencia artificial, automatización, SEO local y marketing basado en datos.",
  keywords: [
    "desarrollo web",
    "inteligencia artificial",
    "automatización",
    "SEO",
    "marketing digital",
    "agencia digital",
    "colombia",
    "bogotá"
  ],
  authors: [{ name: "Tech Tecnic", url: "https://techtecnic.com" }],
  creator: "Tech Tecnic",
  publisher: "Tech Tecnic",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://techtecnic.com",
    siteName: "Tech Tecnic",
    title: "Tech Tecnic | Desarrollo Web, IA y Automatización",
    description: "Agencia moderna enfocada en desarrollo web, inteligencia artificial, automatización, SEO local y marketing basado en datos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Tecnic - Desarrollo Web e IA",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Tecnic | Desarrollo Web, IA y Automatización",
    description: "Agencia moderna enfocada en desarrollo web, inteligencia artificial, automatización, SEO local y marketing basado en datos.",
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
        
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}