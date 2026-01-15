import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Tech Tecnic - Tendencias en IA, SEO y Desarrollo Web",
  description:
    "Artículos sobre inteligencia artificial, automatización, SEO local y desarrollo web moderno. Estrategias y casos reales para empresas en Colombia.",
  keywords: [
    "blog tecnología",
    "IA y automatización",
    "SEO local",
    "desarrollo web",
    "marketing digital",
  ],
  openGraph: {
    title: "Blog Tech Tecnic",
    description: "Estrategias de IA, SEO y desarrollo web para empresas.",
    type: "website",
    url: "https://www.techtecnic.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
