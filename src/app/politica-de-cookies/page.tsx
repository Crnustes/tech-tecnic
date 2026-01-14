export const metadata = {
  title: 'Política de Cookies | Tech Tecnic',
  description: 'Información sobre el uso de cookies y tecnologías similares en Tech Tecnic.'
};

export default function PoliticaCookiesPage() {
  const updated = '14 de enero de 2026';
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Política de Cookies</h1>
      <p className="text-sm text-gray-400 mb-8">Última actualización: {updated}</p>

      <div className="prose prose-invert prose-neutral max-w-none">
        <p>
          Utilizamos cookies y tecnologías similares para mejorar el funcionamiento del sitio, analizar el
          tráfico y personalizar contenidos. Algunas cookies son necesarias para operar el sitio y no
          requieren consentimiento.
        </p>

        <h2>¿Qué son las cookies?</h2>
        <p>
          Son pequeños archivos que se almacenan en tu dispositivo al navegar. Permiten recordar preferencias,
          entender el uso del sitio y ofrecer funcionalidades.
        </p>

        <h2>Tipos de cookies que usamos</h2>
        <ul>
          <li><strong>Esenciales:</strong> necesarias para el funcionamiento del sitio.</li>
          <li><strong>De rendimiento/analítica:</strong> nos ayudan a medir visitas y uso (p. ej., analytics).</li>
          <li><strong>De funcionalidad:</strong> recuerdan preferencias como idioma o región.</li>
          <li><strong>De marketing:</strong> permiten mostrar contenidos o campañas más relevantes.</li>
        </ul>

        <h2>Gestión y revocación del consentimiento</h2>
        <p>
          Puedes gestionar y eliminar cookies desde la configuración de tu navegador. También puedes
          desactivar categorías no esenciales si ofrecemos un gestor de consentimiento (banner). Ten en cuenta
          que bloquear cookies esenciales puede afectar el funcionamiento del sitio.
        </p>

        <h2>Cookies de terceros</h2>
        <p>
          Podemos utilizar servicios de terceros (p. ej., herramientas de analítica, mapas, videos). Estos
          proveedores pueden establecer sus propias cookies; te recomendamos consultar sus políticas.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tienes dudas, escríbenos a contacto@techtecnic.com.
        </p>
      </div>
    </section>
  );
}
