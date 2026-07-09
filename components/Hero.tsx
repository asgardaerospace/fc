"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cauldron } from "./Cauldron";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="vignette relative overflow-hidden">
      {/* Ambient spectral wash at the top of the page */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.28), transparent 70%), radial-gradient(40% 40% at 82% 12%, rgba(255,107,61,0.16), transparent 70%), radial-gradient(40% 40% at 16% 20%, rgba(46,217,208,0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-40">
        {/* Cauldron first on mobile (the thesis), left column on desktop is copy */}
        <motion.div {...rise(0.05)} className="order-1 lg:order-2">
          <Cauldron />
        </motion.div>

        <div className="order-2 lg:order-1">
          <motion.p {...rise(0.1)} className="eyebrow">
            A Holding Company · {site.location}
          </motion.p>

          <motion.h1
            {...rise(0.2)}
            className="mt-5 font-display text-[clamp(2.9rem,8vw,5.6rem)] font-light leading-[0.98] tracking-[-0.02em] text-mist"
          >
            Where ventures
            <br />
            are <em className="spectral-text font-normal not-italic">brewed</em>.
          </motion.h1>

          <motion.p
            {...rise(0.32)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-fog sm:text-xl"
          >
            Fairy Cauldron conceives, builds, and owns brands across technology,
            wellness, and lifestyle. One cauldron — many creations.
          </motion.p>

          <motion.div {...rise(0.44)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#ventures"
              className="group inline-flex items-center gap-2 rounded-full bg-mist px-6 py-3.5 text-sm font-medium text-void transition-transform duration-300 hover:scale-[1.03]"
            >
              See what&apos;s brewing
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm text-mist transition-colors duration-300 hover:border-white/40"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            {...rise(0.56)}
            className="mt-10 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-faint"
          >
            <span>Est. {site.founded}</span>
            <span className="h-3 w-px bg-white/15" />
            <span>Three ventures in the pot</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
