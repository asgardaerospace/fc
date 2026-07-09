import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Ventures } from "@/components/Ventures";
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
        <Ventures />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
