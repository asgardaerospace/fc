import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const cards = [
  {
    href: "/laboratory",
    image: "/img/pages/laboratory.webp",
    eyebrow: "The Laboratory",
    title: "Not every potion is ready to drink.",
    copy: "Experiments, questions, and strange little sparks, kept while we decide what they might become.",
    accent: "var(--color-amethyst)",
    tag: "Now brewing",
  },
  {
    href: "/store",
    image: "/img/pages/store.webp",
    eyebrow: "The Store",
    title: "The shelves are still being stocked.",
    copy: "Botanical goods, books, ritual objects, and limited editions from the Fairy Cauldron world.",
    accent: "var(--color-coral)",
    tag: "Coming soon",
  },
];

export function DeeperIn() {
  return (
    <section className="relative scroll-mt-20 py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Deeper into the Cauldron</p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.1}>
              <Link
                href={c.href}
                className="world-card group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-8"
                style={
                  {
                    ["--accent-grad" as string]: `linear-gradient(135deg, ${c.accent}, transparent)`,
                  } as React.CSSProperties
                }
              >
                <div className="absolute inset-0 -z-10">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,7,16,0.5) 0%, rgba(10,7,16,0.4) 45%, rgba(10,7,16,0.94) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-25 mix-blend-soft-light transition-opacity duration-700 group-hover:opacity-50"
                    style={{ background: `radial-gradient(70% 80% at 30% 80%, ${c.accent}, transparent 70%)` }}
                  />
                </div>

                <div className="absolute right-7 top-7">
                  <span
                    className="rounded-full border border-white/12 bg-void/40 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist/80 backdrop-blur-sm"
                    style={{ color: c.accent }}
                  >
                    {c.tag}
                  </span>
                </div>

                <p
                  className="font-mono text-[0.66rem] uppercase tracking-[0.28em]"
                  style={{ color: c.accent }}
                >
                  {c.eyebrow}
                </p>
                <h3 className="mt-3 max-w-sm font-display text-[clamp(1.5rem,2.6vw,2rem)] font-light leading-[1.1] text-mist">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.94rem] leading-relaxed text-fog">
                  {c.copy}
                </p>
                <span className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mist/85">
                  Step inside
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: c.accent }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link
            href="/about"
            className="group mt-5 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-7 transition-colors hover:border-white/25"
          >
            <span>
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-faint">
                About
              </span>
              <span className="mt-2 block max-w-xl font-display text-xl font-light text-mist">
                A privately held creative company, intentionally difficult to
                categorize.
              </span>
            </span>
            <span
              className="ml-6 shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
