import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

type Props = {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  cta: { label: string; href: string };
  /** a single accent colour, e.g. "var(--color-indigo)" */
  accent: string;
  /** faint gold sparks (ventures) */
  sparks?: boolean;
};

/**
 * A full-bleed cinematic threshold into one of the deeper areas of the site.
 * Colour emerges from the forest; the CTA is the way through.
 */
export function PortalBand({ image, eyebrow, title, copy, cta, accent, sparks }: Props) {
  return (
    <section className="relative flex min-h-[74vh] items-center overflow-hidden py-28">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-void/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--color-void) 0%, transparent 32%, transparent 60%, var(--color-void) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          background: `radial-gradient(60% 70% at 30% 55%, ${accent}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p
              className="font-mono text-xs uppercase tracking-[0.28em]"
              style={{ color: accent }}
            >
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5.4vw,3.9rem)] font-light leading-[1.04] tracking-[-0.015em] text-mist">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">{copy}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              href={cta.href}
              className={`group mt-9 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm text-mist backdrop-blur-sm transition-colors duration-300 hover:border-white/45 ${
                sparks ? "spark-cta" : ""
              }`}
            >
              {sparks && (
                <>
                  <span className="spark" style={{ ["--x" as string]: "20%", ["--delay" as string]: "0s" }} />
                  <span className="spark" style={{ ["--x" as string]: "55%", ["--delay" as string]: "0.5s" }} />
                  <span className="spark" style={{ ["--x" as string]: "80%", ["--delay" as string]: "0.9s" }} />
                </>
              )}
              {cta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
