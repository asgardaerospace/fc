/**
 * Single source of truth for site content.
 * Editing copy, ventures, or contact details? Do it here.
 * Voice: positive framing, no em dashes.
 */

export const site = {
  name: "Fairy Cauldron",
  legalName: "Fairy Cauldron LLC",
  tagline:
    "A holding company brewing ventures across technology, wellness, and lifestyle.",
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
  // Fill these in to light up the footer icons. Empty stays hidden.
  social: {
    instagram: "",
    x: "",
    linkedin: "",
  },
} as const;

export type VentureStatus = "Launching" | "Exploring" | "Live";

export type Venture = {
  slug: string;
  index: string;
  category: string;
  name: string;
  status: VentureStatus;
  tagline: string;
  blurb: string;
  longDescription: string;
  highlights: string[];
  /** CSS gradient drawn from the brand spectrum */
  gradient: string;
  glyph: "apps" | "energy" | "yoga";
};

export const ventures: Venture[] = [
  {
    slug: "apps",
    index: "01",
    category: "Technology",
    name: "Apps",
    status: "Launching",
    tagline: "Small, delightful iOS software, owned in-house.",
    blurb:
      "A growing family of iOS apps, designed and built in-house. Delightful software brewed for everyday magic, arriving on the App Store.",
    longDescription:
      "Fairy Cauldron builds and owns its own iOS apps. Each one stays small on purpose, focused on a single moment of everyday magic and crafted to feel effortless the first time you open it. We carry every app from the first sketch to the App Store listing, so the whole experience stays coherent and cared for. The first apps are brewing now, with more to follow.",
    highlights: [
      "Designed, built, and owned entirely in-house",
      "Native iOS, crafted for speed and delight",
      "First releases arriving on the App Store",
      "More apps steeping in the pot",
    ],
    gradient: "linear-gradient(135deg, var(--color-azure), var(--color-aqua))",
    glyph: "apps",
  },
  {
    slug: "energy",
    index: "02",
    category: "Wellness",
    name: "Energy & Supplements",
    status: "Exploring",
    tagline: "Functional energy with steady, lasting lift.",
    blurb:
      "A functional energy and supplement brand taking shape, built on clean ingredients and steady, lasting lift. Currently steeping in the lab.",
    longDescription:
      "We are exploring a line of functional energy and supplements designed around how you actually want to feel: clear, steady, and ready. The focus stays on clean, well-sourced ingredients and honest formulations that earn their place in your day. This venture is early, and we are taking the time to get the science and the taste right before it reaches you.",
    highlights: [
      "Clean, well-sourced ingredients",
      "Steady, lasting energy",
      "Honest, transparent formulations",
      "In active research and development",
    ],
    gradient: "linear-gradient(135deg, var(--color-ember), var(--color-gold))",
    glyph: "energy",
  },
  {
    slug: "yoga",
    index: "03",
    category: "Lifestyle",
    name: "Yoga & Lifestyle",
    status: "Exploring",
    tagline: "Movement, breath, and mindful living.",
    blurb:
      "A yoga and mindful-living brand in the works, built around movement, breath, and a way of living that carries off the mat and into every day.",
    longDescription:
      "We are shaping a yoga and lifestyle brand for people who want their practice to reach beyond the mat. It brings together movement, breath, and the small rituals that make a day feel intentional: a calm, grounded approach to modern living, expressed through practice, products, and community. This one is early and growing at its own pace.",
    highlights: [
      "Rooted in movement and breath",
      "A practice that carries into everyday life",
      "Calm, grounded, and modern",
      "Taking shape now",
    ],
    gradient: "linear-gradient(135deg, var(--color-amethyst), var(--color-verdant))",
    glyph: "yoga",
  },
];

export function getVenture(slug: string): Venture | undefined {
  return ventures.find((v) => v.slug === slug);
}

export const about = {
  eyebrow: "The house",
  heading: "One roof for many kinds of magic",
  paragraphs: [
    "Fairy Cauldron began with a simple belief: the best things come from mixing. A company can hold more than one craft, and those crafts make each other stronger.",
    "So we built a house for exactly that. Under one roof we imagine, build, and own brands that reach people in different ways: through the phone in your pocket, the drink in your hand, and the way you move through your day.",
    "Every one of them starts in the same pot, shaped by the same care, and sent out to add a little wonder to everyday life.",
  ],
};

export const principles = [
  {
    title: "We own what we make",
    body: "Fairy Cauldron builds and keeps its own brands. Every venture is conceived, built, and held under one roof, for the long haul.",
  },
  {
    title: "The mix is the point",
    body: "Software, wellness, lifestyle: different worlds with one point of view. Ideas cross-pollinate in the pot, and the blend becomes the advantage.",
  },
  {
    title: "Brew slow, launch bold",
    body: "We let ideas steep until they are genuinely ready, then bring them into the world with intention and a little bit of wonder.",
  },
];

export const nav = [
  { label: "Ventures", href: "/#ventures" },
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
];
