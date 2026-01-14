export const metadata = {
  title: 'Política de Privacidad | Tech Tecnic',
  description: 'Conoce cómo Tech Tecnic trata tus datos personales conforme a la Ley 1581 de 2012 (Colombia) y buenas prácticas internacionales.'
};

export default function PoliticaPrivacidadPage() {
  const updated = '14 de enero de 2026';
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
      <p className="text-sm text-gray-400 mb-8">Última actualización: {updated}</p>

      <div className="prose prose-invert prose-neutral max-w-none">
        <p>
          En Tech Tecnic respetamos y protegemos la privacidad de nuestros usuarios y clientes. Esta
          Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos tus datos
          personales, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia),
          así como buenas prácticas internacionales (incluyendo principios del RGPD de la Unión Europea).
        </p>

        <h2>Responsable del Tratamiento</h2>
        <p>
          Tech Tecnic, Bogotá – Colombia. Correo de contacto: contacto@techtecnic.com. Teléfono: +57 302 674 2059.
        </p>

        <h2>Datos que Recopilamos</h2>
        <ul>
          <li>Identificación y contacto: nombre, correo electrónico, teléfono.</li>
          <li>Información comercial: empresa, cargo, necesidades del proyecto.</li>
          <li>Datos técnicos: dirección IP, dispositivo, navegador, páginas visitadas, cookies.</li>
          <li>Comunicación: mensajes enviados por formularios, WhatsApp u otros canales.</li>
        </ul>

        <h2>Finalidades del Tratamiento</h2>
        <ul>
          <li>Responder solicitudes, cotizaciones y prestar servicios contratados.</li>
          <li>Gestión comercial, facturación y soporte.</li>
          <li>Mejora continua del sitio, seguridad y experiencia de usuario.</li>
          <li>Envío de comunicaciones informativas (newsletter) cuando exista consentimiento.</li>
        </ul>

        <h2>Base Legal</h2>
        <p>
          Tratamos datos con base en la autorización del titular, la ejecución de contratos, el cumplimiento
          de obligaciones legales y el interés legítimo en mejorar nuestros servicios.
        </p>

        <h2>Derechos del Titular</h2>
        <p>
          De acuerdo con la legislación colombiana, puedes ejercer tus derechos a conocer, actualizar,
          rectificar, solicitar prueba de autorización, ser informado sobre el uso, revocar la autorización
          y solicitar la supresión de tus datos. Para ejercerlos, escribe a contacto@techtecnic.com indicando
          tu solicitud y datos de verificación.
        </p>

        <h2>Transferencias y Encargados</h2>
        <p>
          Podemos usar proveedores (encargados) y servicios en la nube ubicados dentro o fuera de Colombia.
          Adoptamos medidas contractuales y de seguridad para proteger tus datos conforme a la ley aplicable.
        </p>

        <h2>Conservación</h2>
        <p>
          Conservamos los datos por el tiempo necesario para cumplir las finalidades indicadas y requerimientos
          legales. Posteriormente, los eliminamos o anonimizamos de forma segura.
        </p>

        <h2>Seguridad</h2>
        <p>
          Implementamos medidas administrativas, técnicas y físicas razonables para proteger la información contra
          accesos no autorizados, pérdida o alteración. Sin embargo, ninguna medida es infalible; te recomendamos
          adoptar prácticas seguras al navegar.
        </p>

        <h2>Cookies y Tecnologías Similares</h2>
        <p>
          Utilizamos cookies para funcionalidad, analítica y marketing. Consulta la <a href="/politica-de-cookies">Política de Cookies</a>
          para más detalles y opciones de control.
        </p>

        <h2>Actualizaciones</h2>
        <p>
          Podremos actualizar esta política cuando sea necesario. Publicaremos la nueva versión con su fecha de vigencia.
        </p>
      </div>
    </section>
  );
}
