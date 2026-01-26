import type { Metadata } from "next";
import { buildAlternates, buildLocalizedUrl, type SupportedLocale } from "@/utils/seo";
import { getBreadcrumbSchema } from "@/utils/schema";
import Script from "next/script";

const pageCopy = {
  es: {
    metaTitle: "Contacto | Tech Tecnic - Agencia en Bogota",
    metaDescription:
      "Contacta a Tech Tecnic para desarrollo web, SEO y automatizacion con IA. Atendemos Bogota, Colombia y Latam.",
    metaKeywords: ["contacto agencia web", "desarrollo web bogota", "seo bogota", "automatizacion IA"],
  },
  en: {
    metaTitle: "Contact | Tech Tecnic - Web Development Agency",
    metaDescription:
      "Contact Tech Tecnic for web development, SEO, and AI automation. Serving Bogota, Colombia, Latam, and the USA.",
    metaKeywords: [
      "contact web agency",
      "web development bogota",
      "seo agency",
      "ai automation services",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: SupportedLocale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = pageCopy[locale];
  const path = "/contacto";
  const canonicalUrl = buildLocalizedUrl(path, locale);

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: copy.metaKeywords,
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      type: "website",
      url: canonicalUrl,
      locale: locale === "es" ? "es_CO" : "en_US",
    },
    alternates: {
      canonical: canonicalUrl,
      ...buildAlternates(path),
    },
  };
}

export default async function ContactLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: SupportedLocale }>;
}) {
  const { locale } = await params;
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: locale === "es" ? "Inicio" : "Home", url: buildLocalizedUrl("/", locale) },
      { name: locale === "es" ? "Contacto" : "Contact", url: buildLocalizedUrl("/contacto", locale) },
    ],
    locale
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="gtag-ads-conversion-contacto" strategy="afterInteractive">
        {`if (typeof gtag === 'function') { gtag('event', 'ads_conversion_Contacto_1', {}); }`}
      </Script>
      {children}
    </>
  );
}
