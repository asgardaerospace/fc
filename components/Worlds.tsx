"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { worlds, type World } from "@/lib/site";
import { Reveal } from "./Reveal";

function StatusDot({ status, solid }: { status: World["status"]; solid: string }) {
  const live = status === "In development";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-void/40 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mist/80 backdrop-blur-sm">
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

function WorldPanel({ w, i, eager }: { w: World; i: number; eager?: boolean }) {
  const grad = `linear-gradient(135deg, ${w.accent.from}, ${w.accent.to})`;
  return (
    <li
      className="w-[86vw] flex-none snap-start sm:w-[62vw] lg:w-[46vw] xl:w-[40vw]"
      style={{ scrollSnapAlign: "start" }}
    >
      <Link
        href={`/worlds/${w.slug}`}
        aria-label={`${w.name}: ${w.headline}`}
        className="block h-full rounded-[1.75rem] focus-visible:outline-none"
      >
        <article
          className="world-card group relative flex h-[68vh] max-h-[620px] min-h-[500px] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/10 p-7 sm:p-9"
          style={
            {
              ["--accent-grad" as string]: grad,
              ["--accent" as string]: w.accent.solid,
            } as React.CSSProperties
          }
        >
          {/* Cinematic scene */}
          <div className="absolute inset-0 -z-10">
            <div
              className={`absolute inset-0 ${w.motion === "flow" ? "flow-breathe" : ""}`}
            >
              <Image
                src={w.image}
                alt=""
                fill
                priority={eager}
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 62vw, 40vw"
                className="scale-[1.06] object-cover opacity-60 transition-all duration-[900ms] group-hover:scale-110 group-hover:opacity-75"
              />
            </div>
            {/* legibility base */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,7,16,0.5) 0%, rgba(10,7,16,0.32) 38%, rgba(10,7,16,0.92) 100%)",
              }}
            />
            {/* the world's colour, deepening on approach */}
            <div
              className="absolute inset-0 opacity-25 mix-blend-soft-light transition-opacity duration-[900ms] group-hover:opacity-60"
              style={{ background: grad }}
            />
            {/* fog: edges dissolve into the forest */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 60%, transparent 58%, rgba(10,7,16,0.7) 100%)",
              }}
            />
          </div>

          {/* top row: index + status */}
          <div className="absolute inset-x-7 top-7 flex items-start justify-between sm:inset-x-9 sm:top-9">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-mist/70">
              {w.index}
            </span>
            <StatusDot status={w.status} solid={w.accent.solid} />
          </div>

          {/* body */}
          <div>
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-mist/85">
              {w.name}
            </h3>
            <p className="mt-3 max-w-md font-display text-[clamp(1.5rem,2.6vw,2.05rem)] font-light leading-[1.1] tracking-[-0.01em] text-mist">
              {w.headline}
            </p>
            <p className="mt-3.5 max-w-sm text-[0.94rem] leading-relaxed text-fog">
              {w.description}
            </p>

            {/* tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {w.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mist/75"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* featured venture / project */}
            {w.featured && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-void/40 p-4 backdrop-blur-sm">
                <p
                  className="font-mono text-[0.6rem] uppercase tracking-[0.22em]"
                  style={{ color: w.accent.solid }}
                >
                  {w.featured.kind}
                </p>
                <p className="mt-1.5 font-display text-lg text-mist">
                  {w.featured.name}
                  <span className="text-fog">
                    {"  "}·{"  "}
                    <span className="italic">{w.featured.headline}</span>
                  </span>
                </p>
              </div>
            )}

            <div
              className="mt-6 h-px w-full opacity-50 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: grad }}
            />
            <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-mist/85">
              <span>Enter world</span>
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: w.accent.solid }}
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}

export function Worlds({ eagerFirst = false }: { eagerFirst?: boolean }) {
  const scroller = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const reduce = useReducedMotion();

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft > max - 8);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const nudge = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 20 : el.clientWidth * 0.7;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="worlds" className="relative scroll-mt-20 overflow-hidden py-28 sm:py-36">
      {/* drifting mist for depth */}
      <div className="mist" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">Our Worlds</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5.2vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em] text-mist">
                Many worlds.{" "}
                <span className="spectral-text">One source of magic.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
                Some become software. Some become rituals. Some become books,
                products, practices, or entirely new companies. Every Fairy
                Cauldron creation begins with curiosity and is built to become
                something real.
              </p>
            </Reveal>
          </div>

          {/* desktop controls */}
          <Reveal delay={0.2}>
            <div className="hidden items-center gap-3 lg:flex">
              <button
                onClick={() => nudge(-1)}
                disabled={atStart}
                aria-label="Previous world"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist transition-all duration-300 hover:border-white/40 disabled:opacity-30"
              >
                ←
              </button>
              <button
                onClick={() => nudge(1)}
                disabled={atEnd}
                aria-label="Next world"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist transition-all duration-300 hover:border-white/40 disabled:opacity-30"
              >
                →
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* the filmstrip — native horizontal scroll / swipe */}
      <ul
        ref={scroller}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 sm:px-8 lg:mt-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: "1.25rem" }}
      >
        {worlds.map((w, i) => (
          <WorldPanel key={w.slug} w={w} i={i} eager={eagerFirst && i < 2} />
        ))}
        {/* trailing spacer so the last card can rest away from the edge */}
        <li className="w-1 flex-none sm:w-4" aria-hidden="true" />
      </ul>

      {/* progress line + hint */}
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <div className="h-px flex-1 overflow-hidden bg-white/10">
          <div
            className="h-full origin-left bg-gradient-to-r from-amethyst via-aqua to-gold transition-transform duration-200"
            style={{ transform: `scaleX(${Math.max(0.06, progress)})` }}
          />
        </div>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint">
          Drag · scroll · swipe
        </span>
      </div>
    </section>
  );
}
