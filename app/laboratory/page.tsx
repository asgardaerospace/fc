import Image from "next/image";
import type { Metadata } from "next";
import {
  laboratory,
  experiments,
  type ExperimentStatus,
} from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Laboratory",
  description:
    "The visible research and idea pipeline of Fairy Cauldron. Experiments, questions, and strange little sparks, kept while we decide what they might become.",
};

const STATUS: Record<ExperimentStatus, { color: string; still?: boolean }> = {
  Brewing: { color: "var(--color-amethyst)" },
  Observing: { color: "var(--color-aqua)" },
  Testing: { color: "var(--color-gold)" },
  Resting: { color: "var(--color-faint)", still: true },
  "Became something": { color: "var(--color-verdant)", still: true },
};

function StatusLight({ status }: { status: ExperimentStatus }) {
  const s = STATUS[status];
  return (
    <span
      className={`status-dot ${s.still ? "is-still" : ""}`}
      style={{ ["--dot" as string]: s.color }}
      aria-hidden="true"
    />
  );
}

export default function LaboratoryPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-[68px]">
          <Image
            src="/img/pages/laboratory.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-void/78" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,5,9,0.72) 0%, transparent 34%, rgba(7,5,9,0.6) 64%, var(--color-void) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-40 mix-blend-soft-light"
            style={{
              background:
                "radial-gradient(50% 55% at 72% 42%, var(--color-amethyst), transparent 66%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8 sm:pb-20">
            <Reveal>
              <p className="eyebrow">{laboratory.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,7vw,5rem)] font-light leading-[0.98] tracking-[-0.02em] text-mist">
                {laboratory.headline}
              </h1>
            </Reveal>
            <div className="mt-7 max-w-xl space-y-4">
              {laboratory.copy.map((p, i) => (
                <Reveal key={i} delay={0.16 + i * 0.07}>
                  <p className="text-lg leading-relaxed text-fog">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Status legend */}
        <section className="border-y border-white/8 bg-abyss/60 py-6">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-7 gap-y-3 px-5 sm:px-8">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-faint">
              Reading the lights
            </span>
            {laboratory.statusLegend.map((s) => (
              <span key={s} className="flex items-center gap-2.5">
                <StatusLight status={s} />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-fog">
                  {s}
                </span>
              </span>
            ))}
          </div>
        </section>

        {/* Archive */}
        <section className="py-16 sm:py-20">
          <ol className="mx-auto max-w-5xl px-5 sm:px-8">
            {experiments.map((e, i) => {
              const graduated = e.status === "Became something";
              return (
                <Reveal key={e.number} delay={(i % 4) * 0.05} as="li">
                  <article className="group grid gap-4 border-t border-white/10 py-9 sm:grid-cols-[auto_1fr_auto] sm:gap-8">
                    {/* number + light */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3 sm:pt-1">
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-faint">
                        Experiment
                      </span>
                      <span className="font-display text-3xl font-light text-mist/90">
                        {e.number}
                      </span>
                    </div>

                    {/* title + question */}
                    <div>
                      <h2 className="font-display text-2xl font-normal tracking-tight text-mist sm:text-[1.65rem]">
                        {e.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-[1.02rem] italic leading-relaxed text-fog">
                        {e.question}
                      </p>
                      {graduated && e.became && (
                        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-verdant/30 bg-verdant/10 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mist">
                          <span className="text-verdant">Became</span> {e.became}
                        </p>
                      )}
                    </div>

                    {/* meta */}
                    <div className="flex flex-col gap-2.5 sm:items-end sm:text-right">
                      <span className="inline-flex items-center gap-2.5">
                        <StatusLight status={e.status} />
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mist/85">
                          {e.status}
                        </span>
                      </span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                        {e.world}
                      </span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                        {e.date}
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </section>

        {/* Closing note */}
        <section className="border-t border-white/8 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <Reveal>
              <p className="font-display text-[clamp(1.5rem,3.4vw,2.3rem)] font-light leading-[1.2] text-mist">
                Some of these will become companies. Some will rest for years.
                Some will stay questions.{" "}
                <span className="spectral-text not-italic">That is allowed.</span>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
