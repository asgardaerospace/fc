import Image from "next/image";
import type { Metadata } from "next";
import { store } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { StoreSignup } from "@/components/StoreSignup";

export const metadata: Metadata = {
  title: "The Store",
  description:
    "Botanical goods, books, ritual objects, useful tools, and limited editions from the Fairy Cauldron world are coming. Be first into the shop.",
};

/** Abstract, obscured object forms. No finished products, only silhouettes in fog. */
const SILHOUETTES = [
  // apothecary bottle
  "M9 2h6v3l1 2v13a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V7l1-2z",
  // stacked books
  "M4 5h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4zM4 10h16a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4zM4 15h13a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4z",
  // bowl / vessel
  "M3 9h18a9 9 0 0 1-9 9 9 9 0 0 1-9-9zM8 9c0-3 8-3 8 0",
  // candle / taper
  "M11 2c2 2 2 4 0 5M8 8h6v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z",
  // hand tool
  "M14 3a4 4 0 0 0-1 5l-8 8 3 3 8-8a4 4 0 0 0 5-1z",
  // sphere / stone
  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
];

export default function StorePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-[68px]">
          {/* Scene */}
          <Image
            src="/img/pages/store.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-void/78" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, var(--color-void) 0%, transparent 26%, rgba(10,7,16,0.55) 60%, var(--color-void) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-40 mix-blend-soft-light"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 34%, var(--color-coral), transparent 66%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
            <Reveal>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-coral">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
                {store.eyebrow} · {store.status}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[clamp(2.4rem,7vw,4.6rem)] font-light leading-[1.0] tracking-[-0.02em] text-mist">
                {store.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fog">
                {store.copy}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <StoreSignup />
            </Reveal>
          </div>

          {/* Obscured product forms through the fog */}
          <div className="relative z-10 w-full max-w-4xl px-5 pb-24 sm:px-8">
            <div className="relative">
              <ul className="flex items-end justify-center gap-6 sm:gap-10">
                {SILHOUETTES.map((d, i) => (
                  <li key={i} className="flex flex-col items-center gap-4">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-16 w-16 blur-[2px] sm:h-24 sm:w-24"
                      style={{ opacity: 0.16 + (i % 3) * 0.05 }}
                      aria-hidden="true"
                    >
                      <path d={d} fill="var(--color-mist)" />
                    </svg>
                    <span className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-faint sm:text-[0.62rem]">
                      {store.categories[i]}
                    </span>
                  </li>
                ))}
              </ul>
              {/* fog rolling over the shelf */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-8 top-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, var(--color-void) 88%)",
                }}
                aria-hidden="true"
              />
              <div className="mist" aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
