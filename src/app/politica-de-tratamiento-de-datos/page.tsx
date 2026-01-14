export const metadata = {
  title: 'Política de Tratamiento de Datos | Tech Tecnic',
  description: 'Tratamiento de datos personales según la Ley 1581 de 2012 y Decreto 1377 de 2013 (Colombia).'
};

export default function PoliticaTratamientoDatosPage() {
  const updated = '14 de enero de 2026';
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Política de Tratamiento de Datos</h1>
      <p className="text-sm text-gray-400 mb-8">Última actualización: {updated}</p>

      <div className="prose prose-invert prose-neutral max-w-none">
        <p>
          Tech Tecnic realiza el tratamiento de datos personales conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.
          Esta política establece las finalidades, derechos de los titulares y procedimientos para consultas y reclamos.
        </p>

        <h2>Finalidades</h2>
        <ul>
          <li>Gestión de clientes y potenciales clientes.</li>
          <li>Prestación de servicios contratados y soporte.</li>
          <li>Gestión administrativa, contable y fiscal.</li>
          <li>Comunicaciones informativas y comerciales con autorización.</li>
        </ul>

        <h2>Derechos de los Titulares</h2>
        <ul>
          <li>Conocer, actualizar y rectificar los datos.</li>
          <li>Solicitar prueba de la autorización otorgada.</li>
          <li>Ser informado del uso de los datos.</li>
          <li>Presentar reclamos ante la SIC cuando corresponda.</li>
          <li>Revocar la autorización y/o solicitar la supresión de los datos, cuando proceda.</li>
          <li>Acceder de forma gratuita a los datos que hayan sido objeto de tratamiento.</li>
        </ul>

        <h2>Procedimientos de Consultas y Reclamos</h2>
        <p>
          Envía tu solicitud a contacto@techtecnic.com indicando tu nombre completo, tipo de solicitud (consulta o reclamo),
          descripción y evidencia (si aplica). Daremos respuesta dentro de los términos legales.
        </p>

        <h2>Encargados y Transferencias</h2>
        <p>
          Podremos usar proveedores como encargados del tratamiento y realizar transferencias internacionales bajo medidas
          de seguridad y contratos adecuados.
        </p>

        <h2>Vigencia</h2>
        <p>
          Esta política entra en vigencia a partir de su publicación y podrá actualizarse. La versión vigente estará
          disponible en este sitio.
        </p>
      </div>
    </section>
  );
}
