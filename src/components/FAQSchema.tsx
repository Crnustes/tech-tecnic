export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿En qué países de Latinoamérica ofrecen servicios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos servicios de desarrollo web, apps móviles, automatización e IA en toda Latinoamérica, con presencia activa en Colombia, México, Argentina, Chile, Perú y otros países de la región. Trabajamos 100% remoto lo que nos permite atender clientes en todo LATAM."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta desarrollar un sitio web con Tech Tecnic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo varía según la complejidad del proyecto. Una landing page básica empieza desde $800 USD, sitios corporativos desde $2,500 USD, y e-commerce personalizados desde $5,000 USD. Ofrecemos cotizaciones gratuitas adaptadas a tu presupuesto y necesidades."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma desarrollar una aplicación móvil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo de desarrollo depende de la complejidad. Una app sencilla puede tomar 6-8 semanas, mientras que aplicaciones complejas con múltiples funcionalidades pueden requerir 3-6 meses. Trabajamos con metodología ágil para entregas incrementales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tecnologías utilizan para desarrollo web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilizamos tecnologías modernas como Next.js, React, TypeScript, Tailwind CSS, Node.js, y WordPress. Seleccionamos la mejor tecnología según las necesidades específicas de cada proyecto para garantizar rendimiento, escalabilidad y mantenibilidad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen servicios de SEO para toda Latinoamérica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos servicios especializados de SEO técnico, local y de contenidos optimizados para cada mercado de Latinoamérica. Conocemos las particularidades de búsqueda en cada país y optimizamos para keywords locales en Colombia, México, Argentina, Chile y toda la región."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de automatizaciones pueden implementar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementamos chatbots con IA, automatización de procesos de marketing, integración entre sistemas (CRM, ERP, email marketing), automatización de tareas repetitivas con RPA, y flujos de trabajo personalizados usando herramientas como Zapier, Make, y desarrollos custom."
        }
      },
      {
        "@type": "Question",
        "name": "¿Brindan soporte después de entregar el proyecto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todos nuestros proyectos incluyen un período de garantía y ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, monitoreo de seguridad, optimización de rendimiento y soporte técnico continuo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funciona el proceso de desarrollo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1) Consulta inicial gratuita para entender tus necesidades, 2) Propuesta detallada con alcance y cotización, 3) Diseño y prototipado para tu aprobación, 4) Desarrollo con entregas incrementales, 5) Pruebas exhaustivas, 6) Capacitación y lanzamiento, 7) Soporte post-lanzamiento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Trabajan con startups y empresas pequeñas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, trabajamos con empresas de todos los tamaños en Latinoamérica, desde startups y emprendedores hasta empresas consolidadas. Ofrecemos planes flexibles y soluciones escalables que se adaptan a diferentes presupuestos y etapas de crecimiento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Los sitios web que desarrollan son responsive y optimizados para móviles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Todos nuestros desarrollos siguen el enfoque mobile-first, garantizando excelente experiencia en todos los dispositivos. Además, optimizamos Core Web Vitals para lograr el mejor rendimiento y posicionamiento en Google."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}
