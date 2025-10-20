import Link from 'next/link'
export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="rounded-2xl bg-t_dark text-white p-10 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">¿Listo para despegar?</h3>
          <p className="text-white/80 mt-1">Cuéntanos tu idea. Respuesta en <b>&lt;24h</b>.</p>
        </div>
        <Link href="#contacto" className="rounded-xl bg-white text-t_dark px-5 py-3 font-medium">
          Cotizar ahora
        </Link>
      </div>
    </section>
  )
}
