import Link from "next/link";
import type { Metadata } from "next";
import { worlds } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Worlds } from "@/components/Worlds";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Worlds",
  description:
    "Eight areas of creation inside Fairy Cauldron: technology, nature, wellness, movement, practice, knowledge, experiences, and goods. Many worlds. One source of magic.",
};

export default function WorldsPage() {
  return (
    <>
      <Nav />
      <main className="pt-[68px]">
        <Worlds eagerFirst />

        {/* Full directory — every world, at a glance */}
        <section className="relative border-t border-white/8 py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">The full map</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,2.8rem)] font-light leading-[1.08] tracking-[-0.01em] text-mist">
                Every world, one glance.
              </h2>
            </Reveal>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {worlds.map((w, i) => {
                const grad = `linear-gradient(135deg, ${w.accent.from}, ${w.accent.to})`;
                return (
                  <Reveal key={w.slug} delay={(i % 4) * 0.06} as="li">
                    <Link
                      href={`/worlds/${w.slug}`}
                      className="world-card group relative flex h-full min-h-[188px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                      style={
                        { ["--accent-grad" as string]: grad } as React.CSSProperties
                      }
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-faint">
                          {w.index}
                        </span>
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: w.accent.solid }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-mist/85">
                          {w.name}
                        </h3>
                        <p className="mt-2 text-[0.95rem] leading-snug text-fog">
                          {w.headline}
                        </p>
                        <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-faint">
                          {w.status}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
