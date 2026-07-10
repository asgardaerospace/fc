"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, primaryCta, site } from "@/lib/site";
import { Motes } from "./Motes";

function useActive() {
  const pathname = usePathname();
  return (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = useActive();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the veil whenever we navigate to a new route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll + close on Escape while the veil is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
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
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group relative z-[60] flex items-center gap-3"
          aria-label="Fairy Cauldron, home"
        >
          <Image
            src="/cauldron-mark.png"
            alt=""
            width={40}
            height={42}
            className="h-9 w-auto transition-transform duration-500 group-hover:rotate-[-6deg]"
          />
          <span className="font-display text-lg tracking-tight text-mist">
            Fairy Cauldron
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm transition-colors duration-300 hover:text-mist ${
                isActive(item.href) ? "text-mist" : "text-fog"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-amethyst via-aqua to-transparent" />
              )}
            </Link>
          ))}
          <Link
            href={primaryCta.href}
            className="rounded-full border border-amethyst/40 bg-amethyst/10 px-4 py-2 text-sm text-mist transition-colors duration-300 hover:border-amethyst/70 hover:bg-amethyst/20"
          >
            {primaryCta.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden"
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

      {/* Immersive full-screen veil — going deeper into the forest */}
      <div
        className={`nav-veil fixed inset-0 z-50 lg:hidden ${
          open ? "is-open pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Depth: void→abyss with a glow rising from below, as if the cauldron sits beneath */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(180deg, var(--color-void) 0%, var(--color-abyss) 62%, #05040a 100%)",
          }}
        />
        <div
          className={`absolute inset-x-0 bottom-0 h-2/3 transition-opacity duration-700 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(70% 55% at 50% 108%, rgba(124,58,237,0.34), rgba(46,217,208,0.12) 42%, transparent 72%)",
          }}
        />
        {/* Faint mark low in the frame */}
        <div
          className={`absolute bottom-[-6%] left-1/2 w-[80%] max-w-sm -translate-x-1/2 transition-opacity duration-700 ${
            open ? "opacity-[0.13]" : "opacity-0"
          }`}
        >
          <Image
            src="/cauldron-mark.png"
            alt=""
            width={400}
            height={416}
            className="h-auto w-full"
          />
        </div>
        {open && <Motes count={16} />}

        <div className="relative flex h-full flex-col justify-center px-7 pb-16 pt-24">
          <nav className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-veil-item group flex items-baseline justify-between border-b border-white/8 py-4"
                style={{ ["--i" as string]: `${120 + i * 65}ms` }}
              >
                <span
                  className={`font-display text-[clamp(2rem,9vw,2.9rem)] font-light tracking-tight transition-colors ${
                    isActive(item.href) ? "text-mist" : "text-fog"
                  } group-hover:text-mist`}
                >
                  {item.label}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>

          <div
            className="nav-veil-item mt-9 flex flex-col gap-4"
            style={{ ["--i" as string]: `${120 + nav.length * 65}ms` }}
          >
            <Link
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mist px-6 py-3.5 text-sm font-medium text-void"
            >
              {primaryCta.label}
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="text-center font-mono text-xs uppercase tracking-[0.18em] text-faint"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
