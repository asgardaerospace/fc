import Image from "next/image";
import { principles } from "@/lib/site";
import { Reveal } from "./Reveal";

/**
 * A sigil per principle. Each carries its own quiet behaviour instead of the
 * same icon card five times. Decorative; hidden from assistive tech.
 */
function Sigil({ i }: { i: number }) {
  const box = "relative flex h-11 w-11 shrink-0 items-center justify-center";

  // 0 — WE OWN WHAT WE MAKE: one steady mark, held under one roof.
  if (i === 0)
    return (
      <span className={box} aria-hidden="true">
        <span
          className="h-5 w-5 rotate-45 rounded-[5px]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-amethyst), var(--color-aqua))",
            boxShadow: "0 0 18px 1px rgba(124,58,237,0.45)",
          }}
        />
      </span>
    );

  // 1 — WE FOLLOW CURIOSITY: a spark that wanders its ring.
  if (i === 1)
    return (
      <span className={box} aria-hidden="true">
        <span className="h-8 w-8 rounded-full border border-white/25" />
        <span className="absolute inset-0 motion-safe:animate-[sigil-orbit_9s_linear_infinite]">
          <span
            className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
            style={{
              background: "var(--color-gold)",
              boxShadow: "0 0 10px 2px rgba(255,192,36,0.7)",
            }}
          />
        </span>
      </span>
    );

  // 2 — THE MIX IS THE POINT: three colours allowed to collide.
  if (i === 2)
    return (
      <span className={box} aria-hidden="true">
        <span className="relative h-7 w-7">
          <span className="absolute left-0 top-1 h-5 w-5 rounded-full bg-amethyst/70 mix-blend-screen blur-[1px] motion-safe:animate-[drift-a_12s_ease-in-out_infinite]" />
          <span className="absolute right-0 top-1 h-5 w-5 rounded-full bg-aqua/70 mix-blend-screen blur-[1px] motion-safe:animate-[drift-b_14s_ease-in-out_infinite]" />
          <span className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-ember/70 mix-blend-screen blur-[1px] motion-safe:animate-[drift-c_13s_ease-in-out_infinite]" />
        </span>
      </span>
    );

  // 3 — WE FINISH THINGS: the ring completes.
  if (i === 3)
    return (
      <span className={box} aria-hidden="true">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <circle cx="17" cy="17" r="14" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
          <circle
            cx="17"
            cy="17"
            r="14"
            stroke="var(--color-verdant)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="88"
            transform="rotate(-90 17 17)"
            className="motion-safe:animate-[sigil-draw_5s_ease-in-out_infinite]"
          />
        </svg>
      </span>
    );

  // 4 — WE LEAVE ROOM FOR STRANGE: a form that refuses to settle.
  return (
    <span className={box} aria-hidden="true">
      <span
        className="h-6 w-6 motion-safe:animate-[sigil-morph_7s_ease-in-out_infinite,sigil-hue_9s_ease-in-out_infinite]"
        style={{
          background: "linear-gradient(135deg, var(--color-magenta), var(--color-gold))",
          borderRadius: "44% 56% 55% 45% / 48% 44% 56% 52%",
          boxShadow: "0 0 16px 1px rgba(212,81,201,0.4)",
        }}
      />
    </span>
  );
}

export function Method() {
  return (
    <section
      id="method"
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
            <p className="eyebrow">The method</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-light leading-tight tracking-[-0.01em] text-mist">
              The method behind the magic
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-fog">
              A creative company is only as good as the discipline underneath it.
              Five ideas keep the pot honest.
            </p>
          </Reveal>
        </div>

        <ol className="flex flex-col">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} as="li">
              <div className="flex gap-6 border-t border-white/10 py-8 first:border-t-0 first:pt-0">
                <Sigil i={i} />
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
