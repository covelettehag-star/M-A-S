import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Ambient page background */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-ink-900" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(216,185,138,0.10),transparent)]" />

        <Hero />
        <Problem />
        <Services />
        <Process />
        <Portfolio />
        <WhyUs />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
