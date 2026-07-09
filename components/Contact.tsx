"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "the website"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? `\n${email}` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-mist placeholder:text-faint transition-colors duration-300 focus:border-amethyst/60 focus:bg-white/[0.05] focus:outline-none";

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[560px] opacity-60"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(124,58,237,0.24), transparent 72%), radial-gradient(30% 40% at 78% 90%, rgba(255,107,61,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4rem)] font-light leading-[1.02] tracking-[-0.015em] text-mist">
            Have something to
            <br />
            <em className="spectral-text not-italic">brew</em> with us?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">
            Partnerships, press, or a simple hello — the pot&apos;s always warm.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="group mt-8 inline-flex items-baseline gap-2 font-display text-xl text-mist transition-colors hover:text-amethyst sm:text-2xl"
          >
            {site.email}
            <span className="text-fog transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                className={field}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                id="email"
                type="email"
                className={field}
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              rows={5}
              className={`${field} resize-none`}
              placeholder="What are you brewing?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-mist px-6 py-3.5 font-medium text-void transition-transform duration-300 hover:scale-[1.02]"
          >
            Send message
          </button>
          <p className="text-center font-mono text-[0.7rem] uppercase tracking-[0.16em] text-faint">
            Opens in your email app
          </p>
        </form>
      </div>
    </section>
  );
}
