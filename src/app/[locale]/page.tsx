import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import ContactCTA from "@/components/ContactCTA";
import {
  buildAlternates,
  buildLocalizedUrl,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "@/utils/seo";

const pageCopy = {
  es: {
    metaTitle: "Tech Tecnic | Desarrollo Web, IA y Automatizacion en Bogota",
    metaDescription:
      "Agencia de desarrollo web, SEO y automatizacion con IA en Bogota. Proyectos en Colombia y Latam. Web, apps e integraciones.",
    metaKeywords: [
      "agencia desarrollo web bogota",
      "automatizacion IA",
      "seo bogota",
      "desarrollo web colombia",
      "apps moviles",
      "integraciones api",
      "nextjs",
    ],
  },
  en: {
    metaTitle: "Tech Tecnic | Web Development & AI Automation Agency",
    metaDescription:
      "Web development, SEO, and AI automation agency in Bogota serving Colombia, Latam, and the USA. Websites, apps, and integrations.",
    metaKeywords: [
      "web development agency",
      "ai automation agency",
      "seo bogota",
      "web development colombia",
      "latin america web agency",
      "nextjs agency",
      "mobile app development",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale: SupportedLocale = SUPPORTED_LOCALES.includes(
    locale as SupportedLocale
  )
    ? (locale as SupportedLocale)
    : "es";
  const copy = pageCopy[resolvedLocale];
  const path = "/";
  const canonicalUrl = buildLocalizedUrl(path, resolvedLocale);

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: copy.metaKeywords,
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      type: "website",
      url: canonicalUrl,
      locale: resolvedLocale === "es" ? "es_CO" : "en_US",
    },
    alternates: {
      canonical: canonicalUrl,
      ...buildAlternates(path),
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="content-visibility-auto">
        <Services />
      </div>
      <div className="content-visibility-auto">
        <Projects />
      </div>
      <div className="content-visibility-auto">
        <Process />
      </div>
      <div className="content-visibility-auto">
        <Pricing />
      </div>
      <div className="content-visibility-auto">
        <CTA />
      </div>
      <div id="contacto" className="content-visibility-auto">
        <ContactCTA />
      </div>
    </>
  );
}
