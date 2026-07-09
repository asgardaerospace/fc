import Image from "next/image";
import { nav, site } from "@/lib/site";

const socialIcons: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4L4 20" />,
  linkedin: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </>
  ),
};

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="relative border-t border-white/10 bg-abyss">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Fairy Cauldron — home">
              <Image src="/cauldron-mark.png" alt="" width={44} height={46} className="h-11 w-auto" />
              <span className="font-display text-xl text-mist">Fairy Cauldron</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">{site.tagline}</p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-faint">Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-fog transition-colors hover:text-mist">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-faint">Contact</p>
            <address className="mt-5 flex flex-col gap-3 text-sm not-italic leading-relaxed text-fog">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-mist">
                {site.email}
              </a>
              <span>
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </address>

            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-fog transition-colors hover:border-white/40 hover:text-mist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {socialIcons[key]}
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-[0.14em] text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {site.founded}–{new Date().getFullYear()} {site.legalName}
          </span>
          <span>Brewed in {site.location}</span>
        </div>
      </div>
    </footer>
  );
}
