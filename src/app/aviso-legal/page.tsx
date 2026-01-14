export const metadata = {
  title: 'Aviso Legal | Tech Tecnic',
  description: 'Información legal y condiciones de uso del sitio web de Tech Tecnic.'
};

export default function AvisoLegalPage() {
  const updated = '14 de enero de 2026';
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Aviso Legal</h1>
      <p className="text-sm text-gray-400 mb-8">Última actualización: {updated}</p>

      <div className="prose prose-invert prose-neutral max-w-none">
        <h2>Titular del Sitio</h2>
        <p>
          Tech Tecnic – Bogotá, Colombia. Contacto: contacto@techtecnic.com / +57 302 674 2059.
        </p>

        <h2>Propiedad del Contenido</h2>
        <p>
          El diseño, logotipos, textos, imágenes y código del sitio pertenecen a Tech Tecnic o a sus titulares
          respectivos. Queda prohibida su reproducción no autorizada.
        </p>

        <h2>Uso del Sitio</h2>
        <p>
          El usuario se compromete a usar el sitio de manera lícita y respetuosa, sin vulnerar derechos de terceros
          ni introducir software malicioso.
        </p>

        <h2>Enlaces de Terceros</h2>
        <p>
          El sitio puede contener enlaces a páginas externas. Tech Tecnic no se responsabiliza por sus contenidos
          o políticas; te sugerimos revisar sus condiciones.
        </p>

        <h2>Protección de Datos</h2>
        <p>
          El tratamiento de datos se rige por la <a href="/politica-de-privacidad">Política de Privacidad</a> y la
          <a href="/politica-de-tratamiento-de-datos">Política de Tratamiento de Datos</a>.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          Tech Tecnic no garantiza la disponibilidad continua del sitio ni se responsabiliza por daños derivados del
          uso o imposibilidad de uso del mismo, salvo lo previsto por la ley.
        </p>
      </div>
    </section>
  );
}
