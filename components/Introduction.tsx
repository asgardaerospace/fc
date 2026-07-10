import Image from "next/image";
import { introduction, introWords } from "@/lib/site";
import { Reveal } from "./Reveal";

/**
 * Distant fragments of thought floating through the forest. Positions and
 * timing are fixed (no randomness) so they read as a deliberate constellation.
 * Order matches introWords in lib/site.ts.
 */
const WORD_LAYOUT: {
  top: string;
  left: string;
  size: string;
  dur: number;
  delay: number;
  peak: number;
}[] = [
  { top: "13%", left: "6%", size: "clamp(1.4rem,3vw,2.3rem)", dur: 21, delay: 0, peak: 0.5 },
  { top: "24%", left: "73%", size: "clamp(1.1rem,2.2vw,1.7rem)", dur: 25, delay: 3.5, peak: 0.42 },
  { top: "70%", left: "8%", size: "clamp(1.2rem,2.6vw,2rem)", dur: 27, delay: 6, peak: 0.44 },
  { top: "80%", left: "64%", size: "clamp(1rem,2vw,1.55rem)", dur: 23, delay: 2, peak: 0.4 },
  { top: "42%", left: "85%", size: "clamp(1rem,1.9vw,1.45rem)", dur: 29, delay: 8.5, peak: 0.38 },
  { top: "86%", left: "38%", size: "clamp(1rem,2vw,1.5rem)", dur: 19, delay: 5, peak: 0.46 },
  { top: "12%", left: "48%", size: "clamp(0.95rem,1.8vw,1.4rem)", dur: 31, delay: 10.5, peak: 0.34 },
  { top: "56%", left: "78%", size: "clamp(1rem,2vw,1.55rem)", dur: 26, delay: 12, peak: 0.36 },
  { top: "32%", left: "30%", size: "clamp(1rem,1.9vw,1.45rem)", dur: 24, delay: 7, peak: 0.4 },
];

export function Introduction() {
  return (
    <section
      id="premise"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/5 bg-abyss py-32 sm:py-44"
    >
      {/* Faint fairy-circle glow, drifting behind the premise */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/img/fairy-circle.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right opacity-[0.42]"
        />
        {/* Floating words in the deep background */}
        {introWords.map((word, i) => {
          const l = WORD_LAYOUT[i];
          return (
            <span
              key={word}
              className="drift-word"
              style={
                {
                  top: l.top,
                  left: l.left,
                  fontSize: l.size,
                  "--dur": `${l.dur}s`,
                  "--delay": `${l.delay}s`,
                  "--peak": l.peak,
                } as React.CSSProperties
              }
            >
              {word}
            </span>
          );
        })}
        {/* Scrim: keep the copy legible on the left, let the grove glow on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-abyss) 18%, color-mix(in oklab, var(--color-abyss) 55%, transparent) 50%, transparent 82%), linear-gradient(180deg, var(--color-abyss), transparent 32%, transparent 70%, var(--color-abyss))",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">{introduction.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-3xl font-display text-[clamp(1.9rem,4.6vw,3.3rem)] font-light leading-[1.12] tracking-[-0.01em] text-mist">
            A cauldron makes{" "}
            <span className="italic text-fog">many</span> things at once.
          </h2>
        </Reveal>

        {introduction.paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.16 + i * 0.08}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fog">{p}</p>
          </Reveal>
        ))}

        <Reveal delay={0.34}>
          <p className="mt-12 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-light leading-[1.15] text-mist">
            {introduction.closerLead}
            <br />
            <em className="spectral-text not-italic">{introduction.closerAccent}</em>
          </p>
        </Reveal>

        <Reveal delay={0.42}>
          <hr className="rule-spectrum mt-14" />
        </Reveal>
      </div>
    </section>
  );
}
