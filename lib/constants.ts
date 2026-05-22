// ─── Site Metadata ───────────────────────────────────────
export const SITE = {
  name: "Surraya Islamic Nursery School",
  tagline: "Nurturing Minds, Rooted in Faith",
  description:
    "Surraya Islamic Nursery School provides a holistic early-years education grounded in Islamic values, the EYFS framework, and a love of learning.",
  url: "https://surraya.ac.ug",
  founded: 2009,
  email: "surrayaislamicnurseryschool@gmail.com",
  phone: "+256757797639",
  address: "Makerere, Kampala, Uganda",
  mapLink: "https://share.google/sUWFVRZ6pe11cHtVT",
} as const;

// ─── Navigation ──────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Academics",  href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Donate",     href: "/donate" },
  { label: "Contact",    href: "/contact" },
] as const;

// ─── Brand Colors (mirrors CSS vars for JS use) ──────────
export const COLORS = {
  forest:      "#1a5c38",
  forestDeep:  "#0f3d25",
  forestLight: "#e8f5ee",
  forestMid:   "#2d7a4f",
  gold:        "#d4a017",
  goldLight:   "#fef3c7",
  goldBright:  "#f5c842",
  cream:       "#faf8f3",
  sand:        "#f0ebe0",
  ink:         "#1a1a1a",
  slate:       "#4a5568",
} as const;

// ─── Home Page Stats ─────────────────────────────────────
export const STATS = [
  { value: "100%", label: "Faith-Centered" },
  { value: "98%",  label: "Parent Satisfaction" },
] as const;

// ─── Foundation Pillars ───────────────────────────────────
export const PILLARS = [
  {
    icon: "Star",
    title: "Spiritual Growth",
    description:
      "We weave Islamic values and Quranic principles into every lesson, helping children develop a strong foundation of faith from their earliest years.",
  },
  {
    icon: "BookOpen",
    title: "Academic Brilliance",
    description:
      "Our EYFS-aligned curriculum balances structured learning with play-based discovery, preparing children for a lifetime of intellectual curiosity.",
  },
  {
    icon: "Globe",
    title: "Global Community",
    description:
      "Graduates of Surraya go on to lead with compassion in classrooms, communities, and careers around the world.",
  },
] as const;

// ─── Payment / Donation Cards ─────────────────────────────
export const PAYMENT_CARDS = [
  {
    title: "Tuition Fees",
    description: "Secure and simple term-by-term payment for enrolled families.",
    badge: null,
    highlight: false,
  },
  {
    title: "Development Fund",
    description: "Help us build better classrooms, libraries, and learning spaces.",
    badge: "Priority",
    highlight: true,
  },
  {
    title: "Alumni Support",
    description: "Former students giving back to shape the next generation.",
    badge: null,
    highlight: false,
  },
] as const;

// ─── Social Links ─────────────────────────────────────────
export const SOCIAL_LINKS = [
  { platform: "Facebook",  href: "#", icon: "Facebook" },
  { platform: "Instagram", href: "#", icon: "Instagram" },
  { platform: "Twitter",   href: "#", icon: "Twitter" },
  { platform: "YouTube",   href: "#", icon: "Youtube" },
] as const;

// ─── Footer Columns ──────────────────────────────────────
export const FOOTER_LINKS = {
  school: [
    { label: "About Us",     href: "/" },
    { label: "Academics",    href: "/academics" },
    { label: "Admissions",   href: "/admissions" },
  ],
  support: [
    { label: "Donate",       href: "/donate" },
    { label: "Volunteer",    href: "/contact" },
    { label: "Alumni",       href: "/contact" },
    { label: "Contact Us",   href: "/contact" },
  ],
} as const;
