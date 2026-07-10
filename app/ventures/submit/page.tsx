"use client";

import Link from "next/link";
import { useState } from "react";
import { submitForm, site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Motes } from "@/components/Motes";

export default function SubmitPage() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [notFounder, setNotFounder] = useState(false);
  const [deck, setDeck] = useState("");
  const [sent, setSent] = useState(false);

  const set = (name: string, v: string) =>
    setValues((prev) => ({ ...prev, [name]: v }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = submitForm.fields
      .map((f) => `${f.label}:\n${values[f.name]?.trim() || "—"}`)
      .join("\n\n");
    const extras = [
      `Not a founder, just an idea: ${notFounder ? "Yes" : "No"}`,
      deck ? `Deck attached: ${deck} (please attach this file to the email)` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(
      `A spark for Fairy Cauldron Ventures${values.project ? `: ${values.project}` : ""}`,
    );
    const body = encodeURIComponent(`${lines}\n\n${extras}`);
    window.location.href = `mailto:${site.venturesEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-mist placeholder:text-faint transition-colors duration-300 focus:border-indigo/70 focus:bg-white/[0.05] focus:outline-none";

  return (
    <>
      <Nav />
      <main className="relative overflow-hidden pt-[68px]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-70"
          style={{
            background:
              "radial-gradient(50% 60% at 30% 0%, rgba(86,71,214,0.3), transparent 70%), radial-gradient(30% 40% at 80% 6%, rgba(255,192,36,0.12), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <Motes count={12} tint="var(--color-gold)" glow="rgba(255,192,36,0.55)" className="opacity-60" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left — the invitation */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Link
              href="/ventures"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:text-mist"
            >
              <span aria-hidden="true">←</span> Fairy Cauldron Ventures
            </Link>
            <h1 className="mt-8 font-display text-[clamp(2.4rem,5.5vw,3.8rem)] font-light leading-[1.02] tracking-[-0.015em] text-mist">
              {submitForm.title}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">
              {submitForm.copy}
            </p>

            <div
              className="mt-9 rounded-2xl border p-5"
              style={{
                borderColor: "color-mix(in oklab, var(--color-gold) 32%, transparent)",
                background: "color-mix(in oklab, var(--color-gold) 7%, transparent)",
              }}
            >
              <p className="font-display text-lg italic leading-relaxed text-mist">
                “{submitForm.notFounderLabel}”
              </p>
            </div>

            <a
              href={`mailto:${site.venturesEmail}`}
              className="mt-8 inline-flex items-baseline gap-2 font-display text-xl text-mist transition-colors hover:text-gold"
            >
              {site.venturesEmail}
              <span className="text-fog" aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right — the form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {submitForm.fields
                .filter((f) => f.half)
                .map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint">
                      {f.label}
                      {f.required && <span className="text-gold"> *</span>}
                    </label>
                    <input
                      id={f.name}
                      type={f.type === "email" ? "email" : "text"}
                      className={field}
                      required={f.required}
                      value={values[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                    />
                  </div>
                ))}
            </div>

            {submitForm.fields
              .filter((f) => !f.half)
              .map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint">
                    {f.label}
                    {f.required && <span className="text-gold"> *</span>}
                  </label>
                  {f.type === "textarea" ? (
                    <textarea
                      id={f.name}
                      rows={3}
                      className={`${field} resize-none`}
                      required={f.required}
                      value={values[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                    />
                  ) : (
                    <input
                      id={f.name}
                      type="text"
                      className={field}
                      required={f.required}
                      value={values[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                    />
                  )}
                </div>
              ))}

            {/* Deck */}
            <div>
              <label htmlFor="deck" className="mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint">
                Optional file / deck
              </label>
              <label
                htmlFor="deck"
                className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-fog transition-colors hover:border-white/30"
              >
                <span>{deck || "Choose a file to mention in your note"}</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint">
                  Browse
                </span>
              </label>
              <input
                id="deck"
                type="file"
                className="sr-only"
                onChange={(e) => setDeck(e.target.files?.[0]?.name || "")}
              />
            </div>

            {/* Not a founder */}
            <label className="mt-1 flex cursor-pointer items-start gap-3 text-[0.94rem] leading-relaxed text-fog">
              <input
                type="checkbox"
                checked={notFounder}
                onChange={(e) => setNotFounder(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-gold"
              />
              <span>{submitForm.notFounderLabel}</span>
            </label>

            <button
              type="submit"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-mist px-6 py-3.5 font-medium text-void transition-transform duration-300 hover:scale-[1.02]"
            >
              Send the spark <span aria-hidden="true">→</span>
            </button>

            <p className="text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">
              {sent ? "Your email is opening. Attach a deck there if you have one." : "Opens in your email app"}
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
