import { ventures, type Venture } from "@/lib/site";
import { Reveal } from "./Reveal";

const accentByGlyph: Record<Venture["glyph"], string> = {
  apps: "var(--color-aqua)",
  energy: "var(--color-ember)",
  yoga: "var(--color-amethyst)",
};

function Glyph({ kind }: { kind: Venture["glyph"] }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (kind === "apps")
    return (
      <svg {...common} aria-hidden="true">
        <rect x="5" y="2.5" width="14" height="19" rx="3" />
        <path d="M10 5.5h4" />
        <circle cx="12" cy="18" r="0.6" fill="currentColor" stroke="none" />
        <path d="M9 10.5l2 2 4-4" />
      </svg>
    );
  if (kind === "energy")
    return (
      <svg {...common} aria-hidden="true">
        <path d="M13 2.5 6 13h5l-1 8.5L18 10h-5l0-7.5Z" />
      </svg>
    );
  // yoga — a lotus
  return (
    <svg {...common} aria-hidden="true">
      <path d="M12 20c-4 0-7-2.4-7-5 2.2 0 3.7.7 5 1.8" />
      <path d="M12 20c4 0 7-2.4 7-5-2.2 0-3.7.7-5 1.8" />
      <path d="M12 20c-2.3 0-4-2.2-4-5 0-2.5 1.7-5 4-6.5C14.3 10 16 12.5 16 15c0 2.8-1.7 5-4 5Z" />
    </svg>
  );
}

function Card({ v, i }: { v: Venture; i: number }) {
  const accent = accentByGlyph[v.glyph];
  return (
    <Reveal delay={i * 0.1} as="li" className="h-full">
      <article
        className="venture-card group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-9"
        style={{ ["--accent-grad" as string]: v.gradient }}
      >
        <div className="flex items-start justify-between">
          <span style={{ color: accent }}>
            <Glyph kind={v.glyph} />
          </span>
          <StatusChip status={v.status} accent={accent} />
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-faint">
          {v.index} · {v.category}
        </p>
        <h3 className="mt-2 font-display text-3xl font-light tracking-tight text-mist">
          {v.name}
        </h3>
        <p className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-fog">{v.blurb}</p>

        <div
          className="mt-8 h-px w-full origin-left scale-x-100 opacity-40 transition-opacity duration-500 group-hover:opacity-90"
          style={{ background: v.gradient }}
        />
      </article>
    </Reveal>
  );
}

function StatusChip({ status, accent }: { status: Venture["status"]; accent: string }) {
  const live = status === "Live" || status === "Launching";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-fog">
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

export function Ventures() {
  return (
    <section id="ventures" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">The brew — {ventures.length.toString().padStart(2, "0")} ventures</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-light leading-tight tracking-[-0.01em] text-mist">
                What&apos;s in the cauldron
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-xs text-sm leading-relaxed text-fog">
              Three brands at three stages of the brew — from launching to still
              steeping.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {ventures.map((v, i) => (
            <Card key={v.name} v={v} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
