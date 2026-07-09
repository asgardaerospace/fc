import Image from "next/image";
import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section
      id="premise"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/5 bg-abyss py-28 sm:py-36"
    >
      {/* Faint fairy-circle glow, drifting behind the premise */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <Image
          src="/img/fairy-circle.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right opacity-[0.14]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-abyss) 30%, transparent 75%), linear-gradient(0deg, var(--color-abyss), transparent 40%, var(--color-abyss))",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">The premise</p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-light leading-[1.14] tracking-[-0.01em] text-mist">
            A cauldron makes{" "}
            <span className="italic text-fog">many</span> things at once.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fog">
            You gather what you have: an idea, some craft, a little fire. Then
            something new rises out of it. Fairy Cauldron works the same way.
            It&apos;s one company where very different ventures are mixed, brewed,
            and released into the world: software you&apos;ll hold in your hand,
            things you&apos;ll feel, and a practice you&apos;ll return to.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <hr className="rule-spectrum mt-14" />
        </Reveal>
      </div>
    </section>
  );
}
