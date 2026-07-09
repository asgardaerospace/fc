import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ventures, getVenture, site, type Venture } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

type Props = { params: Promise<{ slug: string }> };

const accentByGlyph: Record<Venture["glyph"], string> = {
  apps: "var(--color-aqua)",
  energy: "var(--color-ember)",
  yoga: "var(--color-amethyst)",
};

export function generateStaticParams() {
  return ventures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const v = getVenture(slug);
  if (!v) return {};
  return {
    title: v.name,
    description: v.tagline,
    openGraph: {
      title: `${v.name} · Fairy Cauldron`,
      description: v.tagline,
      images: ["/og.png"],
    },
  };
}

export default async function VenturePage({ params }: Props) {
  const { slug } = await params;
  const v = getVenture(slug);
  if (!v) notFound();

  const accent = accentByGlyph[v.glyph];
  const others = ventures.filter((o) => o.slug !== v.slug);

  return (
    <>
      <Nav />
      <main>
        {/* Hero band */}
        <section className="relative flex min-h-[76vh] items-end overflow-hidden pt-[68px]">
          <Image
            src={`/img/venture-${v.glyph}.webp`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-void/45" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,7,16,0.7) 0%, transparent 30%, rgba(10,7,16,0.6) 70%, var(--color-void) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-25 mix-blend-soft-light"
            style={{ background: v.gradient }}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8 sm:pb-20">
            <Link
              href="/#ventures"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mist/75 transition-colors hover:text-mist"
            >
              <span aria-hidden="true">←</span> All ventures
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-mist/70">
                {v.index} · {v.category}
              </span>
              <StatusChip status={v.status} accent={accent} />
            </div>

            <h1 className="mt-4 font-display text-[clamp(2.8rem,8vw,5rem)] font-light leading-[0.98] tracking-[-0.02em] text-mist">
              {v.name}
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-fog">{v.tagline}</p>
          </div>
        </section>

        {/* Body */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-5xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
            <Reveal>
              <p className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-light leading-[1.4] tracking-[-0.01em] text-mist">
                {v.longDescription}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="lg:pt-2">
                <p className="eyebrow">In the pot</p>
                <ul className="mt-6 flex flex-col gap-4">
                  {v.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[0.975rem] leading-relaxed text-fog">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: accent }}
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA + other ventures */}
        <section className="border-t border-white/10 bg-abyss py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-3xl font-light tracking-tight text-mist">
                Curious about {v.name}?
              </h2>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`${v.name} — Fairy Cauldron`)}`}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-mist px-6 py-3.5 text-sm font-medium text-void transition-transform duration-300 hover:scale-[1.03]"
              >
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/ventures/${o.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-colors hover:border-white/25"
                >
                  <span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                      {o.index} · {o.category}
                    </span>
                    <span className="mt-1 block font-display text-xl text-mist">{o.name}</span>
                  </span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: accentByGlyph[o.glyph] }}
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

function StatusChip({ status, accent }: { status: Venture["status"]; accent: string }) {
  const live = status === "Live" || status === "Launching";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-void/40 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-mist/80 backdrop-blur-sm">
      <span className="relative flex h-1.5 w-1.5">
        {live && (
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
            style={{ background: accent }}
          />
        )}
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
      </span>
      {status}
    </span>
  );
}
