export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-600 flex justify-between">
        <p>© {new Date().getFullYear()} Tech Tecnic. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="mailto:hola@techtecnic.dev" className="hover:text-t_primary">Email</a>
          <a href="#" className="hover:text-t_primary">LinkedIn</a>
          <a href="#" className="hover:text-t_primary">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
