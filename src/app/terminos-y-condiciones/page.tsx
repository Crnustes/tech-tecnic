export const metadata = {
  title: 'Términos y Condiciones | Tech Tecnic',
  description: 'Condiciones de uso y contratación de servicios digitales de Tech Tecnic.'
};

export default function TerminosCondicionesPage() {
  const updated = '14 de enero de 2026';
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Términos y Condiciones</h1>
      <p className="text-sm text-gray-400 mb-8">Última actualización: {updated}</p>

      <div className="prose prose-invert prose-neutral max-w-none">
        <h2>1. Objeto</h2>
        <p>
          Estos Términos regulan el uso del sitio web de Tech Tecnic y la contratación de nuestros servicios
          de desarrollo web, posicionamiento SEO, automatización con IA, integraciones y soluciones relacionadas.
        </p>

        <h2>2. Contratación y Alcance</h2>
        <p>
          La prestación de servicios se formaliza mediante propuesta/cotización aceptada por el cliente, donde se
          establece alcance, entregables, cronograma y precio. Cualquier cambio posterior podrá implicar ajustes
          de tiempos y costos.
        </p>

        <h2>3. Precios y Pagos</h2>
        <p>
          Los precios se expresan usualmente en COP. Salvo que se indique lo contrario, se requiere anticipo para
          iniciar el proyecto y pagos conforme a hitos. Los impuestos y comisiones de pasarela (si aplican) son a
          cargo del cliente.
        </p>

        <h2>4. Propiedad Intelectual</h2>
        <p>
          Tech Tecnic retiene la titularidad de metodologías, librerías y material propio. El cliente obtiene una
          licencia de uso de los entregables conforme al objetivo del proyecto. Los contenidos y marcas del cliente
          siguen siendo de su propiedad.
        </p>

        <h2>5. Contenidos del Cliente</h2>
        <p>
          El cliente garantiza que cuenta con derechos sobre textos, imágenes, datos y materiales aportados y que
          su uso no infringe derechos de terceros. El cliente es responsable del contenido publicado en su sitio.
        </p>

        <h2>6. Confidencialidad</h2>
        <p>
          Ambas partes se comprometen a mantener la confidencialidad de la información no pública compartida con
          ocasión del proyecto y usarla únicamente para la ejecución del mismo.
        </p>

        <h2>7. Garantías y Soporte</h2>
        <p>
          Proveemos un periodo razonable de corrección de errores relacionados con el alcance contratado. Ajustes
          o nuevas funcionalidades fuera de alcance serán cotizados aparte.
        </p>

        <h2>8. Limitación de Responsabilidad</h2>
        <p>
          En la medida permitida por la ley, nuestra responsabilidad se limita al valor efectivamente pagado por el
          cliente por los servicios que originaron la reclamación. No respondemos por daños indirectos, lucro cesante
          o pérdida de datos.
        </p>

        <h2>9. Uso del Sitio y Prohibiciones</h2>
        <p>
          El usuario se compromete a no usar el sitio para actividades ilícitas, distribuir malware, realizar scraping
          abusivo o vulnerar medidas de seguridad.
        </p>

        <h2>10. Protección de Datos</h2>
        <p>
          El tratamiento de datos personales se realiza conforme a nuestra <a href="/politica-de-privacidad">Política de Privacidad</a>
          y la <a href="/politica-de-tratamiento-de-datos">Política de Tratamiento de Datos</a>.
        </p>

        <h2>11. Terminación</h2>
        <p>
          Cualquiera de las partes podrá terminar el servicio por incumplimiento material de la otra parte, previa
          notificación razonable. Los trabajos efectivamente realizados hasta la fecha de terminación serán facturados.
        </p>

        <h2>12. Ley Aplicable y Jurisdicción</h2>
        <p>
          Estos Términos se rigen por las leyes de Colombia. Cualquier disputa será resuelta ante los tribunales
          competentes de Bogotá, salvo pacto distinto.
        </p>

        <h2>13. Cambios</h2>
        <p>
          Tech Tecnic podrá actualizar estos Términos y publicará la versión vigente en el sitio web.
        </p>
      </div>
    </section>
  );
}
