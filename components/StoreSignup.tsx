"use client";

import { useState } from "react";
import { site, store } from "@/lib/site";

export function StoreSignup() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Be first into the shop");
    const body = encodeURIComponent(
      `Please add me to the Fairy Cauldron shop list.\n\n${email}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="shop-email" className="sr-only">
          Your email
        </label>
        <input
          id="shop-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border border-white/14 bg-white/[0.04] px-5 py-3.5 text-center text-mist placeholder:text-faint transition-colors duration-300 focus:border-coral/60 focus:bg-white/[0.06] focus:outline-none sm:text-left"
          style={{ ["--tw-ring-color" as string]: "var(--color-coral)" }}
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-mist px-6 py-3.5 text-sm font-medium text-void transition-transform duration-300 hover:scale-[1.03]"
        >
          {store.cta}
        </button>
      </div>
      <p className="mt-4 text-center font-mono text-[0.66rem] uppercase tracking-[0.16em] text-faint">
        {sent ? "Thank you. Your email is opening." : "One note when the doors open. Nothing else."}
      </p>
    </form>
  );
}
