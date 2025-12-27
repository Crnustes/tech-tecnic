import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQSchema from "@/components/FAQSchema";

// Lazy load componentes below the fold para mejor FCP/LCP
const Process = dynamic(() => import("@/components/Process"), {
  loading: () => <div className="min-h-[400px]" />
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <div className="min-h-[600px]" />
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="min-h-[300px]" />
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-[500px]" />
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[600px]" />
});
const BlogSection = dynamic(() => import("@/components/BlogSection").then(mod => ({ default: mod.BlogSection })), {
  loading: () => <div className="min-h-[500px]" />
});

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Hero />
      <Services />
      <Projects />
      <BlogSection />
      <Process />
      <Pricing />
      <CTA />
      <Contact />
    </>
  );
}