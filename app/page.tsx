import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { About } from "@/components/About";
import { Ventures } from "@/components/Ventures";
import { Interstitial } from "@/components/Interstitial";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Ventures />
        <Interstitial />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
