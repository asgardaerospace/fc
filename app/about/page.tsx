import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { about, site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fairy Cauldron is a privately held creative company based in Austin, Texas. We conceive, build, own, and selectively back ideas across technology, nature, wellness, knowledge, and human experience.",
};

const MODEL_ACCENTS = [
  "var(--color-aqua)",
  "var(--color-verdant)",
  "var(--color-amethyst)",
  "var(--color-indigo)",
  "var(--color-coral)",
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[74vh] items-end overflow-hidden pt-[68px]">
          <Image
            src="/img/pages/about.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-void/68" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,7,16,0.7) 0%, transparent 36%, rgba(10,7,16,0.6) 68%, var(--color-void) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30 mix-blend-soft-light"
            style={{
              background:
                "radial-gradient(55% 55% at 30% 60%, var(--color-amethyst), transparent 68%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8 sm:pb-20">
            <Reveal>
              <p className="eyebrow">{about.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5rem)] font-light leading-[0.98] tracking-[-0.02em] text-mist">
                {about.heading}
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Statement */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            {about.statement.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={`font-display font-light leading-[1.28] tracking-[-0.01em] ${
                    i === about.statement.length - 1
                      ? "mt-8 text-[clamp(1.6rem,3.6vw,2.5rem)] text-mist"
                      : "mt-8 text-[clamp(1.5rem,3.2vw,2.2rem)] text-fog first:mt-0"
                  }`}
                >
                  {i === about.statement.length - 1 ? (
                    <>
                      We are intentionally difficult to categorize.{" "}
                      <span className="spectral-text not-italic">That is the point.</span>
                    </>
                  ) : (
                    p
                  )}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How the Cauldron works */}
        <section className="border-t border-white/8 bg-abyss py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">{about.modelTitle}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.4vw,3rem)] font-light leading-[1.06] tracking-[-0.01em] text-mist">
                One source of magic, five ways it reaches the world.
              </h2>
            </Reveal>

            <ol className="mt-14">
              {about.model.map((m, i) => (
                <Reveal key={m.name} delay={(i % 5) * 0.06} as="li">
                  <Link
                    href={m.href}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-white/10 py-7 transition-colors last:border-b last:border-white/10"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: MODEL_ACCENTS[i] }}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="font-display text-2xl font-normal tracking-tight text-mist">
                        {m.name}
                      </span>
                      <span className="mt-1 block max-w-xl text-[0.98rem] leading-relaxed text-fog">
                        {m.body}
                      </span>
                    </span>
                    <span
                      className="font-mono text-xs uppercase tracking-[0.2em] text-fog transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Coordinates */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-light leading-[1.15] text-mist">
                One cauldron.{" "}
                <span className="spectral-text not-italic">Many worlds.</span>
              </p>
              <div className="font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-faint">
                <p>{site.legalName}</p>
                <p className="mt-1">{site.location}</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-fog transition-colors hover:text-mist"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
