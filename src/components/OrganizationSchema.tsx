import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://techtecnic.com/#organization",
    "name": "Tech Tecnic",
    "alternateName": ["Tech Tecnic Agency", "Tech Tecnic LATAM"],
    "description": "Agencia líder en desarrollo web, inteligencia artificial y automatización en Latinoamérica. Especialistas en soluciones digitales para empresas y agencias en Colombia, México, Argentina, Chile y Perú.",
    "url": "https://techtecnic.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://techtecnic.com/logo.png",
      "width": "250",
      "height": "60"
    },
    "image": "https://techtecnic.com/og-image.jpg",
    "telephone": "+57-302-674-2059",
    "email": "contacto@techtecnic.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressRegion": "Bogotá D.C.",
      "addressLocality": "Bogotá",
      "streetAddress": "Colombia"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Colombia"
      },
      {
        "@type": "Country",
        "name": "México"
      },
      {
        "@type": "Country",
        "name": "Argentina"
      },
      {
        "@type": "Country",
        "name": "Chile"
      },
      {
        "@type": "Country",
        "name": "Perú"
      },
      {
        "@type": "Place",
        "name": "Latinoamérica"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.7109886",
      "longitude": "-74.072092"
    },
    "sameAs": [
      "https://www.linkedin.com/company/techtecnic",
      "https://www.facebook.com/techtecnic",
      "https://www.instagram.com/techtecnic",
      "https://www.tiktok.com/@techtecnic",
      "https://wa.me/573026742059"
    ],
    "foundingDate": "2020",
    "slogan": "Innovación digital con propósito",
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Digitales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web Profesional",
            "description": "Desarrollo de sitios web modernos, rápidos y optimizados para Latinoamérica con WordPress, React y Next.js",
            "areaServed": "Latinoamérica",
            "provider": {
              "@id": "https://techtecnic.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO y Posicionamiento Web LATAM",
            "description": "Servicios profesionales de SEO técnico, local y de contenidos en Latinoamérica",
            "areaServed": "Latinoamérica",
            "provider": {
              "@id": "https://techtecnic.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización con Inteligencia Artificial",
            "description": "Chatbots inteligentes, automatización de procesos y RPA para empresas en LATAM",
            "areaServed": "Latinoamérica",
            "provider": {
              "@id": "https://techtecnic.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soluciones para Agencias Digitales",
            "description": "Plataforma completa con CRM, automatización, gestión de proyectos y analytics para agencias digitales en Latinoamérica",
            "areaServed": "Latinoamérica",
            "provider": {
              "@id": "https://techtecnic.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo de Apps Móviles",
            "description": "Aplicaciones móviles nativas y multiplataforma para iOS y Android",
            "areaServed": "Latinoamérica",
            "provider": {
              "@id": "https://techtecnic.com/#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integraciones y APIs",
            "description": "Integración de sistemas, APIs personalizadas y automatizaciones con Zapier y Make",
            "areaServed": "Latinoamérica",
            "provider": {
              "@id": "https://techtecnic.com/#organization"
            }
          }
        }
      ]
    },
    "knowsAbout": [
      "Desarrollo Web",
      "WordPress",
      "React",
      "Next.js",
      "SEO Técnico",
      "SEO Local",
      "Inteligencia Artificial",
      "Chatbots",
      "Automatización",
      "RPA",
      "CRM",
      "Gestión de Proyectos",
      "Apps Móviles",
      "React Native",
      "Flutter",
      "Marketing Digital",
      "Analytics"
    ],
    "keywords": "mejor agencia desarrollo web latinoamerica, agencia digital latam, seo latinoamerica, automatizacion ia latam, chatbots inteligentes, soluciones agencias digitales, desarrollo apps moviles latam"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://techtecnic.com/#localbusiness",
    "name": "Tech Tecnic",
    "image": "https://techtecnic.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressRegion": "Bogotá D.C.",
      "addressLocality": "Bogotá"
    },
    "telephone": "+57-302-674-2059",
    "email": "contacto@techtecnic.com",
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.7109886",
      "longitude": "-74.072092"
    },
    "servesCuisine": "Technology Services"
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
