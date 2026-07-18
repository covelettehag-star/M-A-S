import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Services />
        <Pricing />
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