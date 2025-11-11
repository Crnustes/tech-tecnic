import SocialIcons from '@/components/SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-t_dark text-white py-12 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Tech Tecnic. Todos los derechos reservados.</p>
        <SocialIcons variant="light" />
      </div>
    </footer>
  )
}
