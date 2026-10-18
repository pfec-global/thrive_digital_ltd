import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Audiences from "@/components/Audiences";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Audiences />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
