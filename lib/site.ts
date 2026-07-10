/**
 * Single source of truth for site content.
 * Editing copy, worlds, ventures, experiments, or contact details? Do it here.
 * Voice: positive framing, no em dashes. Intelligent, warm, editorial, a little magical.
 */

export const site = {
  name: "Fairy Cauldron",
  legalName: "Fairy Cauldron LLC",
  tagline:
    "A creative company that conceives, builds, owns, and backs products, platforms, brands, and experiences.",
  shortTagline: "Many worlds. One source of magic.",
  founded: "2023",
  location: "Austin, Texas",
  email: "contact@fairycauldron.com",
  venturesEmail: "spark@fairycauldron.com",
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

/* ============================================================
   Navigation
   ============================================================ */
export const nav = [
  { label: "The Cauldron", href: "/" },
  { label: "Our Worlds", href: "/worlds" },
  { label: "Ventures", href: "/ventures" },
  { label: "Laboratory", href: "/laboratory" },
  { label: "Store", href: "/store" },
  { label: "About", href: "/about" },
];

export const primaryCta = { label: "Enter the Cauldron", href: "/worlds" };

/* ============================================================
   Hero
   ============================================================ */
export const hero = {
  eyebrow: `A creative company · ${site.location}`,
  headlineLead: "Where ideas become",
  headlineAccent: "worlds",
  sub: "Fairy Cauldron conceives, builds, owns, and backs products, platforms, brands, and experiences.",
  kicker: "One cauldron. Many worlds.",
  ctaPrimary: { label: "Explore our worlds", href: "/worlds" },
  ctaSecondary: { label: "What we're brewing", href: "/laboratory" },
};

/* ============================================================
   Introduction — "A cauldron makes many things at once."
   The floating words drift through the atmosphere behind the copy.
   ============================================================ */
export const introWords = [
  "Software",
  "Nature",
  "Knowledge",
  "Movement",
  "Wellness",
  "Books",
  "Products",
  "Experiences",
  "Companies",
];

export const introduction = {
  eyebrow: "The premise",
  heading: "A cauldron makes many things at once.",
  paragraphs: [
    "You gather what you have: an idea, a question, a strange little spark. Then something new begins.",
    "At Fairy Cauldron, ideas are shaped into software, knowledge systems, products, practices, experiences, and companies. Different worlds are mixed, tested, built, and released into the world.",
  ],
  closerLead: "One cauldron.",
  closerAccent: "Many creations.",
};

/* ============================================================
   Our Worlds — eight areas of creation.
   Each world carries a subtle colour identity drawn from the
   brand spectrum. Colours emerge from darkness; the forest stays
   the unifying environment.
   ============================================================ */
export type WorldStatus = "In development" | "Brewing" | "Coming soon";

export type WorldAccent = {
  /** primary emission colour (status dots, small accents) */
  solid: string;
  /** two-stop gradient for washes and rims */
  from: string;
  to: string;
};

export type Featured = {
  kind: "Featured venture" | "Featured project";
  name: string;
  headline: string;
  description: string;
  tags: string[];
  status: string;
};

export type World = {
  slug: string;
  index: string;
  /** display name, rendered uppercase in UI */
  name: string;
  status: WorldStatus;
  /** the world's own line, poetic and short */
  headline: string;
  description: string;
  tags: string[];
  accent: WorldAccent;
  image: string;
  /** MOVEMENT reads as fluid; others stay still */
  motion?: "flow";
  featured?: Featured;
  /** a line that signals how much room the world has to grow */
  note?: string;
  /** GOODS threads into the Store */
  link?: { label: string; href: string };
};

export const worlds: World[] = [
  {
    slug: "technology",
    index: "01",
    name: "Technology",
    status: "In development",
    headline: "Software with a mind for how you think.",
    description:
      "Software, artificial intelligence, and creative tools built around how people actually think and work.",
    tags: ["AI", "Writing", "Creative tools"],
    accent: {
      solid: "var(--color-aqua)",
      from: "var(--color-aqua)",
      to: "var(--color-azure)",
    },
    image: "/img/worlds/technology.webp",
    featured: {
      kind: "Featured venture",
      name: "Merlynux",
      headline: "Intelligence for the writing mind.",
      description:
        "A living creative environment for authors, researchers, and complex thinkers.",
      tags: ["AI", "Writing", "Creative tools"],
      status: "In development",
    },
  },
  {
    slug: "nature",
    index: "02",
    name: "Nature",
    status: "In development",
    headline: "The living intelligence of the natural world.",
    description:
      "Exploring the intelligence, chemistry, history, and traditional knowledge of the natural world.",
    tags: ["Botanical", "Knowledge", "Nature"],
    accent: {
      solid: "var(--color-verdant)",
      from: "var(--color-verdant)",
      to: "var(--color-aqua)",
    },
    image: "/img/worlds/nature.webp",
    featured: {
      kind: "Featured venture",
      name: "Materia Nātura",
      headline: "The intelligence of nature, mapped.",
      description:
        "A living botanical knowledge system exploring herbs, compounds, traditions, and the natural world.",
      tags: ["Botanical", "Knowledge", "Nature"],
      status: "In development",
    },
  },
  {
    slug: "wellness",
    index: "03",
    name: "Wellness",
    status: "Brewing",
    headline: "Modern rituals for feeling human.",
    description:
      "Products, systems, and practices designed around energy, recovery, sleep, longevity, and everyday wellbeing.",
    tags: ["Wellness", "Ritual", "Recovery"],
    accent: {
      solid: "var(--color-gold)",
      from: "var(--color-gold)",
      to: "var(--color-coral)",
    },
    image: "/img/worlds/wellness.webp",
    note: "A broad world, built to hold many products, systems, and rituals as they take shape.",
  },
  {
    slug: "movement",
    index: "04",
    name: "Movement",
    status: "Brewing",
    headline: "The body is its own kind of intelligence.",
    description:
      "Yoga, breath, fascia, mobility, and embodied practices brought together through modern tools and ancient knowledge.",
    tags: ["Yoga", "Breath", "Movement"],
    accent: {
      solid: "var(--color-amethyst)",
      from: "var(--color-amethyst)",
      to: "var(--color-lavender)",
    },
    image: "/img/worlds/movement.webp",
    motion: "flow",
  },
  {
    slug: "practice",
    index: "05",
    name: "Practice",
    status: "In development",
    headline: "Better tools for the people who help us heal.",
    description:
      "Digital systems for acupuncturists and wellness practitioners to study, understand, manage patients, and grow their practices.",
    tags: ["Practitioners", "Software", "Care"],
    accent: {
      solid: "var(--color-teal)",
      from: "var(--color-teal)",
      to: "var(--color-aqua)",
    },
    image: "/img/worlds/practice.webp",
    note: "Room for practitioner software, scheduling, patient systems, educational tools, and professional platforms.",
  },
  {
    slug: "knowledge",
    index: "06",
    name: "Knowledge",
    status: "In development",
    headline: "Some ideas are meant to be mapped.",
    description:
      "Books, visual atlases, educational systems, and new ways of organizing complex knowledge.",
    tags: ["Body", "Knowledge", "Education"],
    accent: {
      solid: "var(--color-magenta)",
      from: "var(--color-magenta)",
      to: "var(--color-plum)",
    },
    image: "/img/worlds/knowledge.webp",
    featured: {
      kind: "Featured project",
      name: "Release Atlas",
      headline: "Map the body differently.",
      description:
        "A visual knowledge system connecting fascia, breath, energetic pathways, movement, and traditional medicine.",
      tags: ["Body", "Knowledge", "Education"],
      status: "In development",
    },
  },
  {
    slug: "experiences",
    index: "07",
    name: "Experiences",
    status: "Coming soon",
    headline: "Some things have to be felt in person.",
    description:
      "Gatherings, retreats, workshops, conversations, and unusual experiences created inside the Fairy Cauldron world.",
    tags: ["Gatherings", "Retreats", "Experiences"],
    accent: {
      solid: "var(--color-gold)",
      from: "var(--color-gold)",
      to: "var(--color-ember)",
    },
    image: "/img/worlds/experiences.webp",
  },
  {
    slug: "goods",
    index: "08",
    name: "Goods",
    status: "Coming soon",
    headline: "Objects from the Cauldron.",
    description:
      "Botanical goods, books, ritual objects, beautiful tools, limited editions, and things we simply wanted to exist.",
    tags: ["Goods", "Objects", "Editions"],
    accent: {
      solid: "var(--color-coral)",
      from: "var(--color-coral)",
      to: "var(--color-amethyst-deep)",
    },
    image: "/img/worlds/goods.webp",
    link: { label: "Visit the Store", href: "/store" },
  },
];

export function getWorld(slug: string): World | undefined {
  return worlds.find((w) => w.slug === slug);
}

/* ============================================================
   Fairy Cauldron Ventures — the selective venture + backing arm.
   A brand position and a future capability. No fund promises.
   ============================================================ */
export const venturesArm = {
  eyebrow: "Fairy Cauldron Ventures",
  headline: "Some magic begins somewhere else.",
  intro: [
    "We create many of our own worlds.",
    "Sometimes, we find an idea, a founder, or a project already carrying a spark we recognize.",
    "Fairy Cauldron Ventures selectively explores opportunities to invest in, incubate, partner with, and help build unusual ideas with the potential to become something meaningful.",
  ],
  statement: "We look for the spark.",
  pathways: [
    {
      key: "Incubate",
      lead: "For early ideas that need a world built around them.",
      body: "Brand, product, technology, strategy, and the patient work of turning an idea into something real.",
    },
    {
      key: "Invest",
      lead: "For companies and founders building something we believe deserves to exist.",
      body: "Selective investment in ideas aligned with the worlds and curiosities of Fairy Cauldron.",
    },
    {
      key: "Partner",
      lead: "For creators, practitioners, researchers, and founders who have something extraordinary but need help bringing it into the world.",
      body: "We combine ideas, capabilities, technology, design, and distribution.",
    },
    {
      key: "Build",
      lead: "For projects where Fairy Cauldron becomes deeply involved in creating the company itself.",
      body: "From the first question to the first product, we help build the world around the idea.",
    },
  ],
  curiosityTitle: "What catches our eye",
  curiosities: [
    "Artificial Intelligence",
    "Natural Intelligence",
    "Wellness",
    "Longevity",
    "Botanical Science",
    "Creative Tools",
    "Movement",
    "Traditional Knowledge",
    "Education",
    "Human Performance",
    "New Consumer Experiences",
  ],
  // rendered distinctly, last and luminous
  curiosityStandout: "Strange ideas that do not fit neatly anywhere",
  curiosityNote: "We are especially interested in ideas that are difficult to categorize.",
  spark: {
    title: "Have a spark?",
    copy: "Tell us what you are building, researching, questioning, or unable to stop thinking about.",
    cta: "Show us what you're brewing",
    href: "/ventures/submit",
  },
};

export const submitForm = {
  eyebrow: "Fairy Cauldron Ventures",
  title: "Show us what you're brewing",
  copy: "Tell us what you are building, researching, questioning, or unable to stop thinking about. Every spark reaches us directly.",
  notFounderLabel:
    "I am not a founder. I just have an idea I cannot stop thinking about.",
  fields: [
    { name: "name", label: "Name", type: "text", required: true, half: true },
    { name: "email", label: "Email", type: "email", required: true, half: true },
    {
      name: "project",
      label: "Project or company name",
      type: "text",
      required: false,
    },
    {
      name: "building",
      label: "What are you building?",
      type: "textarea",
      required: true,
    },
    {
      name: "why",
      label: "Why should this exist?",
      type: "textarea",
      required: true,
    },
    { name: "stage", label: "What stage is it in?", type: "text", required: false },
    { name: "need", label: "What do you need?", type: "text", required: false },
    { name: "link", label: "Website or link", type: "text", required: false },
  ] as SubmitField[],
};

export type SubmitField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
  half?: boolean;
};

/* ============================================================
   The Laboratory — the visible research + idea pipeline.
   Add new experiments here; the archive renders itself.
   ============================================================ */
export type ExperimentStatus =
  | "Brewing"
  | "Observing"
  | "Testing"
  | "Resting"
  | "Became something";

export type Experiment = {
  number: string;
  title: string;
  question: string;
  status: ExperimentStatus;
  /** shown when status is "Became something" */
  became?: string;
  world: string;
  date: string;
};

export const laboratory = {
  eyebrow: "The Laboratory",
  headline: "Not every potion is ready to drink.",
  copy: [
    "The Laboratory is where unfinished ideas are allowed to live.",
    "Experiments, questions, prototypes, and strange little sparks stay here while we decide what they might become.",
  ],
  statusLegend: [
    "Brewing",
    "Observing",
    "Testing",
    "Resting",
    "Became something",
  ] as ExperimentStatus[],
};

export const experiments: Experiment[] = [
  {
    number: "038",
    title: "The Gathering",
    question: "What happens when the worlds meet in one room for a weekend?",
    status: "Brewing",
    world: "Experiences",
    date: "Summer 2026",
  },
  {
    number: "034",
    title: "Objects with Memory",
    question:
      "What if a physical object could carry a small piece of the Cauldron with it?",
    status: "Resting",
    world: "Goods",
    date: "Spring 2026",
  },
  {
    number: "031",
    title: "Mapping the Body",
    question:
      "Can fascia, breath, movement, and energetic pathways be understood in the same visual language?",
    status: "Brewing",
    world: "Knowledge",
    date: "Spring 2026",
  },
  {
    number: "026",
    title: "The Practitioner's Desk",
    question:
      "What would acupuncturists build if the software finally understood their craft?",
    status: "Testing",
    world: "Practice",
    date: "Winter 2026",
  },
  {
    number: "024",
    title: "The Living Botanical Library",
    question:
      "What if natural knowledge behaved like a living intelligence system?",
    status: "Became something",
    became: "Materia Nātura",
    world: "Nature",
    date: "Autumn 2025",
  },
  {
    number: "017",
    title: "The Writing Mind",
    question: "What if software understood the entire world inside a manuscript?",
    status: "Became something",
    became: "Merlynux",
    world: "Technology",
    date: "Summer 2025",
  },
  {
    number: "013",
    title: "The Breath Engine",
    question:
      "Could a practice teach the body to breathe better without a single word?",
    status: "Observing",
    world: "Movement",
    date: "Spring 2025",
  },
  {
    number: "009",
    title: "The Steady Lift",
    question: "What does energy feel like when it arrives slowly and stays?",
    status: "Testing",
    world: "Wellness",
    date: "Winter 2025",
  },
];

/* ============================================================
   The Store — coming soon.
   ============================================================ */
export const store = {
  eyebrow: "The Store",
  status: "Coming soon",
  headline: "The shelves are still being stocked.",
  copy: "Botanical goods. Books. Ritual objects. Useful tools. Limited editions. Strange little things. Objects from the Fairy Cauldron world are coming.",
  cta: "Be first into the shop",
  categories: [
    "Botanical",
    "Books",
    "Ritual",
    "Objects",
    "Tools",
    "Limited editions",
  ],
};

/* ============================================================
   The Method — five principles behind the magic.
   Each gets its own subtle visual behaviour in the UI.
   ============================================================ */
export const principles = [
  {
    title: "We own what we make",
    body: "Fairy Cauldron builds and keeps its own brands. Every venture is conceived, built, and held under one roof for the long haul.",
  },
  {
    title: "We follow curiosity",
    body: "We allow interesting questions to lead us into entirely new worlds.",
  },
  {
    title: "The mix is the point",
    body: "Software, wellness, lifestyle, ancient knowledge, design, and technology are allowed to collide.",
  },
  {
    title: "We finish things",
    body: "Ideas are easy to begin. The difficult work is turning them into something another person can actually use, read, hold, experience, or love.",
  },
  {
    title: "We leave room for strange",
    body: "The ideas that are hardest to explain are often the ones worth exploring.",
  },
];

/* ============================================================
   About — the model, stated plainly.
   ============================================================ */
export const about = {
  eyebrow: "About",
  heading: "Intentionally difficult to categorize.",
  statement: [
    "Fairy Cauldron is a privately held creative company based in Austin, Texas.",
    "We conceive, build, own, and selectively back ideas across technology, nature, wellness, knowledge, and human experience.",
    "We are intentionally difficult to categorize. That is the point.",
  ],
  modelTitle: "How the Cauldron works",
  model: [
    {
      name: "Our Worlds",
      body: "Internal areas of exploration and creation.",
      href: "/worlds",
    },
    {
      name: "Our Companies",
      body: "Products and ventures built and owned by Fairy Cauldron.",
      href: "/worlds",
    },
    {
      name: "The Laboratory",
      body: "Research, experiments, and ideas still taking shape.",
      href: "/laboratory",
    },
    {
      name: "Fairy Cauldron Ventures",
      body: "Selective investments, partnerships, incubation, and company building.",
      href: "/ventures",
    },
    {
      name: "The Store",
      body: "Physical objects and products created from the Fairy Cauldron world.",
      href: "/store",
    },
  ],
};
