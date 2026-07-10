import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Worlds } from "@/components/Worlds";
import { Interstitial } from "@/components/Interstitial";
import { PortalBand } from "@/components/PortalBand";
import { Method } from "@/components/Method";
import { DeeperIn } from "@/components/DeeperIn";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Worlds />
        <Interstitial />
        <PortalBand
          image="/img/pages/ventures.webp"
          eyebrow="Fairy Cauldron Ventures"
          title="Some magic begins somewhere else."
          copy="We create many of our own worlds. Sometimes we find an idea, a founder, or a project already carrying a spark we recognize. Fairy Cauldron Ventures explores where that spark might lead."
          cta={{ label: "Explore Ventures", href: "/ventures" }}
          accent="var(--color-indigo)"
          sparks
        />
        <Method />
        <DeeperIn />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
