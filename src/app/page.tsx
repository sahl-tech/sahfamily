import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Learning from "@/components/Learning";
import Journey from "@/components/Journey";
import Struggles from "@/components/Struggles";
import Portfolio from "@/components/Portfolio";
import Moments from "@/components/Moments";
import Travel from "@/components/Travel";
import Expenses from "@/components/Expenses";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Learning />
        <Journey />
        <Struggles />
        <Portfolio />
        <Moments />
        <Travel />
        <Expenses />
      </main>
      <Footer />
    </>
  );
}
