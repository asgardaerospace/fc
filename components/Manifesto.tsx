import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section className="relative border-t border-white/5 bg-abyss py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">The premise</p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-light leading-[1.14] tracking-[-0.01em] text-mist">
            A cauldron doesn&apos;t make just{" "}
            <span className="italic text-fog">one</span> thing.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fog">
            You gather what you have — an idea, some craft, a little fire — and
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
