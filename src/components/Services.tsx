export default function Services() {
  const items = [
    { t: 'Plan Start', d: 'Presencia esencial en WordPress + Elementor.' },
    { t: 'Plan Pro', d: 'Web corporativa y E-commerce con analítica.' },
    { t: 'Plan Custom', d: 'Apps a medida con React/Next.js y APIs.' },
    { t: 'AI Connect', d: 'Automatizaciones, GTM/GA4 y chatbots.' },
  ]
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Servicios</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((s) => (
          <div key={s.t} className="rounded-2xl bg-white p-6 shadow-sm border">
            <h3 className="font-semibold mb-2">{s.t}</h3>
            <p className="text-slate-600 text-sm">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
