import Image from "next/image";
import { principles } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section
      id="approach"
      className="relative scroll-mt-20 overflow-hidden border-y border-white/5 bg-abyss py-28 sm:py-36"
    >
      {/* Deep-forest wash for depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/img/atmosphere.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-abyss), transparent 25%, transparent 75%, var(--color-abyss)), linear-gradient(90deg, transparent 55%, var(--color-abyss))",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">How we brew</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-light leading-tight tracking-[-0.01em] text-mist">
              The method behind the magic
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-fog">
              A holding company is only as good as the discipline underneath it.
              Three ideas keep the pot honest.
            </p>
          </Reveal>
        </div>

        <ol className="flex flex-col">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} as="li">
              <div className="flex gap-6 border-t border-white/10 py-9 first:border-t-0 first:pt-0">
                <span
                  className="mt-2.5 h-3 w-3 shrink-0 rounded-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-amethyst), var(--color-aqua))",
                  }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-2xl font-normal tracking-tight text-mist">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[1.02rem] leading-relaxed text-fog">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
