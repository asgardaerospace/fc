"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { VideoBackground } from "./VideoBackground";
import { hero } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <VideoBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-28 text-center sm:px-8">
        {/* Brand mark, rising from the grove */}
        <motion.div
          {...rise(0.05)}
          className="relative mx-auto mb-8 w-[122px] sm:w-[158px]"
        >
          <div
            className="absolute inset-0 -z-10 scale-150 opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.5), rgba(46,217,208,0.22) 45%, transparent 70%)",
            }}
          />
          <div className="levitate">
            <Image
              src="/cauldron-mark.png"
              alt="Fairy Cauldron"
              width={340}
              height={354}
              priority
              className="h-auto w-full drop-shadow-[0_22px_48px_rgba(124,58,237,0.5)]"
            />
          </div>
        </motion.div>

        <motion.p {...rise(0.18)} className="eyebrow">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.28)}
          className="mt-5 font-display text-[clamp(3rem,9vw,6.2rem)] font-light leading-[0.95] tracking-[-0.02em] text-mist"
        >
          {hero.headlineLead}
          <br />
          <em className="spectral-text font-normal not-italic">
            {hero.headlineAccent}
          </em>
          .
        </motion.h1>

        <motion.p
          {...rise(0.4)}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-fog sm:text-xl"
        >
          {hero.sub}
        </motion.p>

        <motion.p
          {...rise(0.48)}
          className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-faint"
        >
          {hero.kicker}
        </motion.p>

        <motion.div
          {...rise(0.6)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href={hero.ctaPrimary.href}
            className="group inline-flex items-center gap-2 rounded-full bg-mist px-6 py-3.5 text-sm font-medium text-void transition-transform duration-300 hover:scale-[1.03]"
          >
            {hero.ctaPrimary.label}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <Link
            href={hero.ctaSecondary.href}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm text-mist backdrop-blur-sm transition-colors duration-300 hover:border-white/45"
          >
            {hero.ctaSecondary.label}
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#premise"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-2 w-1 rounded-full bg-white/70 motion-safe:animate-[scrollcue_1.8s_ease-in-out_infinite]" />
        </span>
      </motion.a>
    </section>
  );
}
