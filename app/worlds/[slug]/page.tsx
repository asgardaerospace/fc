import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { worlds, getWorld, site, type World } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return worlds.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const w = getWorld(slug);
  if (!w) return {};
  return {
    title: `${w.name} · Our Worlds`,
    description: w.headline,
    openGraph: {
      title: `${w.name} · Fairy Cauldron`,
      description: w.headline,
      images: ["/og.png"],
    },
  };
}

function StatusChip({ status, solid }: { status: World["status"]; solid: string }) {
  const live = status === "In development";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-void/40 px-3 py-1.5 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-mist/80 backdrop-blur-sm">
      <span className="relative flex h-1.5 w-1.5">
        {live && (
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
            style={{ background: solid }}
          />
        )}
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full"
          style={{ background: solid }}
        />
      </span>
      {status}
    </span>
  );
}

export default async function WorldPage({ params }: Props) {
  const { slug } = await params;
  const w = getWorld(slug);
  if (!w) notFound();

  const grad = `linear-gradient(135deg, ${w.accent.from}, ${w.accent.to})`;
  const idx = worlds.findIndex((o) => o.slug === w.slug);
  const prev = worlds[(idx - 1 + worlds.length) % worlds.length];
  const next = worlds[(idx + 1) % worlds.length];

  return (
    <>
      <Nav />
      <main>
        {/* Hero band */}
        <section className="relative flex min-h-[82vh] items-end overflow-hidden pt-[68px]">
          <div className={`absolute inset-0 ${w.motion === "flow" ? "flow-breathe" : ""}`}>
            <Image src={w.image} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-void/50" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,7,16,0.7) 0%, transparent 34%, rgba(10,7,16,0.55) 66%, var(--color-void) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30 mix-blend-soft-light"
            style={{ background: `radial-gradient(60% 60% at 30% 70%, ${w.accent.from}, transparent 70%)` }}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8 sm:pb-20">
            <Link
              href="/worlds"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mist/75 transition-colors hover:text-mist"
            >
              <span aria-hidden="true">←</span> All worlds
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-mist/70">
                {w.index} · Our Worlds
              </span>
              <StatusChip status={w.status} solid={w.accent.solid} />
            </div>

            <h1 className="mt-4 font-mono text-sm uppercase tracking-[0.4em] text-mist/85">
              {w.name}
            </h1>
            <p className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4rem)] font-light leading-[1.02] tracking-[-0.02em] text-mist">
              {w.headline}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {w.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/14 bg-void/30 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mist/75 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="font-display text-[clamp(1.5rem,3vw,2.15rem)] font-light leading-[1.35] tracking-[-0.01em] text-mist">
                  {w.description}
                </p>
              </Reveal>
              {w.note && (
                <Reveal delay={0.1}>
                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-fog">{w.note}</p>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.12}>
              <div className="lg:pt-2">
                <p className="eyebrow">In this world</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {w.tags.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-3 text-[0.95rem] text-fog"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: w.accent.solid }}
                        aria-hidden="true"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 h-px w-full" style={{ background: grad, opacity: 0.5 }} />
                <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint">
                  Status
                </p>
                <p className="mt-2 text-mist">{w.status}</p>

                {w.link && (
                  <Link
                    href={w.link.href}
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:text-mist"
                    style={{ color: w.accent.solid }}
                  >
                    {w.link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured venture / project */}
        {w.featured && (
          <section className="relative overflow-hidden border-y border-white/8 py-24 sm:py-28">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(50% 60% at 75% 30%, ${w.accent.from}, transparent 68%)`,
                mixBlendMode: "screen",
              }}
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
              <Reveal>
                <p
                  className="font-mono text-xs uppercase tracking-[0.28em]"
                  style={{ color: w.accent.solid }}
                >
                  {w.featured.kind}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] font-light leading-[0.98] tracking-[-0.02em] text-mist">
                  {w.featured.name}
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 max-w-2xl font-display text-[clamp(1.3rem,2.6vw,1.9rem)] font-light italic leading-[1.3] text-fog">
                  {w.featured.headline}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
                  {w.featured.description}
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {w.featured.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mist/75"
                    >
                      {t}
                    </span>
                  ))}
                  <StatusChip status={w.status} solid={w.accent.solid} />
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Continue exploring */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-2xl font-light tracking-tight text-mist">
                Wondering what else is in the cauldron?
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/ventures"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-5 py-3 text-sm text-mist transition-colors hover:border-white/45"
                >
                  Have a spark? <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`${w.name} — Fairy Cauldron`)}`}
                  className="inline-flex items-center gap-2 rounded-full bg-mist px-5 py-3 text-sm font-medium text-void transition-transform duration-300 hover:scale-[1.03]"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[prev, next].map((o, k) => (
                <Link
                  key={o.slug}
                  href={`/worlds/${o.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-colors hover:border-white/25"
                >
                  <span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-faint">
                      {k === 0 ? "Previous world" : "Next world"} · {o.index}
                    </span>
                    <span className="mt-1 block font-mono text-sm uppercase tracking-[0.24em] text-mist">
                      {o.name}
                    </span>
                  </span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: o.accent.solid }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
