/**
 * Single source of truth for site content.
 * Editing copy, ventures, or contact details? Do it here.
 */

export const site = {
  name: "Fairy Cauldron",
  legalName: "Fairy Cauldron LLC",
  tagline: "A holding company brewing ventures across technology, wellness, and lifestyle.",
  founded: "2023",
  location: "Austin, Texas",
  email: "contact@fairycauldron.com",
  address: {
    line1: "PO Box 341512",
    city: "Austin",
    state: "TX",
    zip: "78734",
  },
  url: "https://fairycauldron.com",
  // Fill these in to light up the footer icons. Empty = hidden.
  social: {
    instagram: "",
    x: "",
    linkedin: "",
  },
} as const;

export type VentureStatus = "Launching" | "Exploring" | "Live";

export type Venture = {
  index: string;
  category: string;
  name: string;
  status: VentureStatus;
  blurb: string;
  /** CSS gradient drawn from the brand spectrum */
  gradient: string;
  glyph: "apps" | "energy" | "yoga";
};

export const ventures: Venture[] = [
  {
    index: "01",
    category: "Technology",
    name: "Apps",
    status: "Launching",
    blurb:
      "A growing family of iOS apps — designed, built, and owned in-house. Small, delightful software brewed for everyday magic, launching on the App Store.",
    gradient: "linear-gradient(135deg, var(--color-azure), var(--color-aqua))",
    glyph: "apps",
  },
  {
    index: "02",
    category: "Wellness",
    name: "Energy & Supplements",
    status: "Exploring",
    blurb:
      "A functional energy and supplement brand taking shape — clean ingredients, real lift, none of the crash. Currently steeping in the lab.",
    gradient: "linear-gradient(135deg, var(--color-ember), var(--color-gold))",
    glyph: "energy",
  },
  {
    index: "03",
    category: "Lifestyle",
    name: "Yoga & Lifestyle",
    status: "Exploring",
    blurb:
      "A yoga and mindful-living brand in the works — movement, breath, and a way of living that carries off the mat and into the everyday.",
    gradient: "linear-gradient(135deg, var(--color-amethyst), var(--color-verdant))",
    glyph: "yoga",
  },
];

export const principles = [
  {
    title: "We own what we make",
    body: "Fairy Cauldron is a holding company, not an agency. Every venture is conceived, built, and held under one roof — for the long haul, not the quick sale.",
  },
  {
    title: "The mix is the point",
    body: "Software, wellness, lifestyle — different worlds, one point of view. Ideas cross-pollinate in the pot, and the blend becomes the advantage.",
  },
  {
    title: "Brew slow, launch bold",
    body: "We let ideas steep until they're genuinely ready, then bring them into the world with intention and a little bit of wonder.",
  },
];

export const nav = [
  { label: "Ventures", href: "#ventures" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];
