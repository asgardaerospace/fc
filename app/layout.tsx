import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Fairy Cauldron: A holding company brewing ventures",
    template: "%s · Fairy Cauldron",
  },
  description: site.tagline,
  keywords: [
    "Fairy Cauldron",
    "holding company",
    "venture studio",
    "iOS apps",
    "energy drink",
    "supplements",
    "yoga",
    "lifestyle brand",
    "Austin Texas",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    title: "Fairy Cauldron: A holding company brewing ventures",
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fairy Cauldron" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairy Cauldron: A holding company brewing ventures",
    description: site.tagline,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0710",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
