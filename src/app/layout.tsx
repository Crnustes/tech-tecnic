import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { buildAlternates } from "@/utils/seo";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techtecnic.com"),
  title: {
    default: "Tech Tecnic | Desarrollo Web, IA y Automatizacion",
    template: "%s | Tech Tecnic",
  },
  description:
    "Agencia moderna enfocada en desarrollo web, inteligencia artificial, automatizacion, SEO local y marketing basado en datos.",
  keywords: [
    "desarrollo web",
    "inteligencia artificial",
    "automatizacion",
    "SEO",
    "marketing digital",
    "agencia digital",
    "colombia",
    "bogota",
  ],
  authors: [{ name: "Tech Tecnic", url: "https://techtecnic.com" }],
  creator: "Tech Tecnic",
  publisher: "Tech Tecnic",
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
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://techtecnic.com",
    ...buildAlternates("/"),
  },
  openGraph: {
    title: "Tech Tecnic | Desarrollo Web, IA y Automatizacion",
    description:
      "Agencia moderna enfocada en desarrollo web, inteligencia artificial, automatizacion, SEO local y marketing basado en datos.",
    url: "https://techtecnic.com",
    siteName: "Tech Tecnic",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Tech Tecnic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Tecnic | Desarrollo Web, IA y Automatizacion",
    description:
      "Agencia moderna enfocada en desarrollo web, inteligencia artificial, automatizacion, SEO local y marketing basado en datos.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
