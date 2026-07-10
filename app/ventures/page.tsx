import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { venturesArm } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Motes } from "@/components/Motes";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Fairy Cauldron Ventures selectively explores opportunities to invest in, incubate, partner with, and help build unusual ideas. We look for the spark.",
};

export default function VenturesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-[68px]">
          <Image
            src="/img/pages/ventures.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-void/72" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,7,16,0.72) 0%, transparent 30%, rgba(10,7,16,0.6) 64%, var(--color-void) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-45 mix-blend-soft-light"
            style={{
              background:
                "radial-gradient(55% 60% at 28% 55%, var(--color-indigo), transparent 68%)",
            }}
          />
          <Motes count={16} tint="var(--color-gold)" glow="rgba(255,192,36,0.6)" />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-20 sm:px-8 sm:pb-24">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold/90">
                {venturesArm.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5rem)] font-light leading-[0.98] tracking-[-0.02em] text-mist">
                {venturesArm.headline}
              </h1>
            </Reveal>
            <div className="mt-8 max-w-xl space-y-4">
              {venturesArm.intro.map((p, i) => (
                <Reveal key={i} delay={0.16 + i * 0.07}>
                  <p className="text-lg leading-relaxed text-fog">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <p className="mt-9 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-light italic text-mist">
                <span className="spectral-text not-italic">{venturesArm.statement}</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Four pathways */}
        <section className="relative border-t border-white/8 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">Four ways in</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.4vw,3rem)] font-light leading-[1.06] tracking-[-0.01em] text-mist">
                However the spark reaches us, there is a way to build around it.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {venturesArm.pathways.map((p, i) => (
                <Reveal key={p.key} delay={(i % 2) * 0.08}>
                  <div
                    className="world-card group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-9"
                    style={
                      {
                        ["--accent-grad" as string]:
                          "linear-gradient(135deg, var(--color-indigo), var(--color-gold))",
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className="h-px w-14"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--color-indigo), var(--color-gold))",
                      }}
                    />
                    <div className="mt-6 flex items-baseline gap-4">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-3xl font-light tracking-tight text-mist">
                        {p.key}
                      </h3>
                    </div>
                    <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-mist/90">
                      {p.lead}
                    </p>
                    <p className="mt-3 max-w-md text-[0.96rem] leading-relaxed text-fog">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What catches our eye */}
        <section className="relative overflow-hidden border-t border-white/8 bg-abyss py-24 sm:py-32">
          <div className="mist mist-2" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow">{venturesArm.curiosityTitle}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-3">
                {venturesArm.curiosities.map((c, i) => (
                  <span
                    key={c}
                    className="font-display text-[clamp(1.3rem,3.2vw,2.3rem)] font-light leading-tight text-fog transition-colors duration-500 hover:text-mist"
                    style={{ opacity: 0.55 + (i % 4) * 0.12 }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-10 font-display text-[clamp(1.6rem,4.6vw,3.1rem)] font-normal leading-[1.08] tracking-[-0.01em]">
                <span className="spectral-text">{venturesArm.curiosityStandout}</span>
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
                {venturesArm.curiosityNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Have a spark? */}
        <section className="relative overflow-hidden py-28 sm:py-36">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[620px]"
            style={{
              background:
                "radial-gradient(50% 70% at 50% 100%, rgba(86,71,214,0.28), transparent 72%), radial-gradient(30% 40% at 60% 96%, rgba(255,192,36,0.12), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <Motes count={14} tint="var(--color-gold)" glow="rgba(255,192,36,0.6)" className="opacity-70" />

          <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-[clamp(2.4rem,6vw,4rem)] font-light leading-[1.02] tracking-[-0.015em] text-mist">
                {venturesArm.spark.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fog">
                {venturesArm.spark.copy}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Link
                href={venturesArm.spark.href}
                className="spark-cta group mt-9 inline-flex items-center gap-2 rounded-full bg-mist px-7 py-4 text-sm font-medium text-void transition-transform duration-300 hover:scale-[1.03]"
              >
                <span className="spark" style={{ ["--x" as string]: "24%", ["--delay" as string]: "0s" }} />
                <span className="spark" style={{ ["--x" as string]: "52%", ["--delay" as string]: "0.4s" }} />
                <span className="spark" style={{ ["--x" as string]: "78%", ["--delay" as string]: "0.85s" }} />
                {venturesArm.spark.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
