import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Process from "@/components/Process"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-t_bg min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
        <Pricing />
      <CTA />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
