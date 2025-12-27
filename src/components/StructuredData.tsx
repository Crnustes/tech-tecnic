export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tech Tecnic",
    "alternateName": "TechTecnic",
    "url": "https://techtecnic.com",
    "logo": "https://techtecnic.com/logo.png",
    "description": "Agencia líder en desarrollo web, inteligencia artificial y automatización en Latinoamérica. Transformamos negocios con tecnología de vanguardia.",
    "email": "contacto@techtecnic.com",
    "telephone": "+573026742059",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogotá",
      "addressRegion": "DC",
      "addressCountry": "CO"
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
        "@type": "GeoCircle",
        "name": "Latinoamérica",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "4.7110",
          "longitude": "-74.0721"
        },
        "geoRadius": "5000000"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/techtecnic",
      "https://twitter.com/techtecnic",
      "https://www.instagram.com/techtecnic",
      "https://www.facebook.com/techtecnic"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+573026742059",
      "contactType": "customer service",
      "areaServed": ["CO", "MX", "AR", "CL", "PE"],
      "availableLanguage": ["es", "en"]
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tech Tecnic",
    "image": "https://techtecnic.com/logo.png",
    "url": "https://techtecnic.com",
    "telephone": "+573026742059",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogotá",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.7110",
      "longitude": "-74.0721"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Digitales",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Desarrollo Web",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Desarrollo de Sitios Web Corporativos",
                "description": "Sitios web profesionales con diseño moderno y optimización SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce y Tiendas Online",
                "description": "Plataformas de comercio electrónico con pasarelas de pago integradas"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Aplicaciones Web Personalizadas",
                "description": "Desarrollo con React, Next.js y tecnologías modernas"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Aplicaciones Móviles",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Apps iOS y Android",
                "description": "Aplicaciones móviles nativas de alto rendimiento"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Apps React Native",
                "description": "Aplicaciones cross-platform eficientes"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Inteligencia Artificial",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Chatbots Inteligentes",
                "description": "Asistentes virtuales con IA para atención al cliente"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automatización de Procesos",
                "description": "RPA y automatización inteligente de flujos de trabajo"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "SEO y Marketing Digital",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Técnico y Local",
                "description": "Optimización para motores de búsqueda en Latinoamérica"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google My Business",
                "description": "Gestión y optimización de perfiles empresariales"
              }
            }
          ]
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tech Tecnic",
    "url": "https://techtecnic.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://techtecnic.com/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
