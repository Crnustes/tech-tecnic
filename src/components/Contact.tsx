
export default function Contact() {
  return (
    <section id="contacto" className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Hablemos</h2>
      <form className="grid gap-4">
        <input className="border rounded-xl px-4 py-3" placeholder="Nombre" />
        <input className="border rounded-xl px-4 py-3" placeholder="Email" />
        <input className="border rounded-xl px-4 py-3" placeholder="Teléfono (opcional)" />
        <textarea className="border rounded-xl px-4 py-3" rows={5} placeholder="Cuéntanos tu proyecto" />
        <button className="rounded-xl bg-t_primary text-white px-5 py-3 font-medium">Enviar</button>
      </form>
    </section>
  )
}
