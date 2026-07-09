"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-void/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Fairy Cauldron — home">
          <Image
            src="/cauldron-mark.png"
            alt=""
            width={40}
            height={42}
            className="h-9 w-auto transition-transform duration-500 group-hover:rotate-[-6deg]"
          />
          <span className="font-display text-lg tracking-tight text-mist">Fairy Cauldron</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-fog transition-colors duration-300 hover:text-mist"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-amethyst/40 bg-amethyst/10 px-4 py-2 text-sm text-mist transition-colors duration-300 hover:border-amethyst/70 hover:bg-amethyst/20"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-[1.5px] w-6 bg-mist transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-6 bg-mist transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-6 bg-mist transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 pb-8 pt-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 font-display text-2xl text-mist"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full border border-amethyst/40 bg-amethyst/10 px-5 py-3 text-center text-mist"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
