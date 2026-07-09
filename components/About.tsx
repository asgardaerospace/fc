import Image from "next/image";
import { about, site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <figure className="relative">
            <div
              className="absolute -inset-4 -z-10 opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, rgba(255,192,36,0.28), transparent 60%), radial-gradient(circle at 70% 70%, rgba(124,58,237,0.28), transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/img/about.webp"
                alt="An art nouveau fairy tending a glowing golden cauldron"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />
            </div>
          </figure>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-mist">
              {about.heading}
            </h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.16 + i * 0.08}>
              <p className="mt-5 text-lg leading-relaxed text-fog">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.16 + about.paragraphs.length * 0.08}>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-faint">
              {site.legalName} · Est. {site.founded} · {site.location}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
