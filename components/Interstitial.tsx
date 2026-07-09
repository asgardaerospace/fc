import Image from "next/image";
import { Reveal } from "./Reveal";

/**
 * Full-bleed cinematic breather between the ventures and the method —
 * a lantern-lit path into the woods with a single spectral line.
 */
export function Interstitial() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-32">
      <Image
        src="/img/interstitial.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-void/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-void) 0%, transparent 30%, transparent 62%, var(--color-void) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow text-fog/80">The Fairy Cauldron way</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-light leading-[1.16] tracking-[-0.01em] text-mist">
            Every venture begins the same way: a spark, a little fire, and the
            patience to let it{" "}
            <em className="spectral-text not-italic">become something</em>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
