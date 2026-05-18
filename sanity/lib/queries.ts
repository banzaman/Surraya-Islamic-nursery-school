import { groq } from "next-sanity";

// ── Site Settings ─────────────────────────────────────────
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    schoolName, tagline, description, founded,
    contact { email, phone, address, mapLink },
    social[] { platform, url }
  }
`;

// ── Home Page ─────────────────────────────────────────────
export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage"][0] {
    hero { heading, subheading, badge, ctaPrimary, ctaSecondary },
    stats[] { value, label },
    pillars[] { icon, title, description },
    paymentCards[] { title, description, badge, highlight, ctaLabel, ctaHref },
    gallery[] {
      label, aspect,
      "imageUrl": image.asset->url,
      "lqip": image.asset->metadata.lqip
    }
  }
`;

// ── Academics Page ────────────────────────────────────────
export const ACADEMICS_PAGE_QUERY = groq`
  *[_type == "academicsPage"][0] {
    hero { heading, subheading, badges },
    eyfsAreas[] { icon, title, description, size },
    islamicStudies {
      heading, body, hadith, hadithSource,
      pillars[] { icon, title, body }
    },
    enrichmentClubs[] { icon, title, tag, description }
  }
`;

// ── Admissions Page ───────────────────────────────────────
export const ADMISSIONS_PAGE_QUERY = groq`
  *[_type == "admissionsPage"][0] {
    hero { heading, subheading, badgeText },
    classes[] { level, age, description, spots, highlight },
    requirements,
    steps[] { number, title, description, highlight },
    fees[] { title, amount, period, description, items, highlight },
    siblingDiscount
  }
`;

// ── Donate Page ───────────────────────────────────────────
export const DONATE_PAGE_QUERY = groq`
  *[_type == "donatePage"][0] {
    hero { heading, subheading, badge },
    causes[] { icon, title, description, featured, progress, goal, raised },
    formSection {
      heading, hadith, hadithSource,
      impactBullets[] { amount, label },
      presetAmounts
    },
    communityPromise {
      heading, body,
      stats[] { value, label },
      testimonial { quote, name, role }
    }
  }
`;

// ── Contact Page ──────────────────────────────────────────
export const CONTACT_PAGE_QUERY = groq`
  *[_type == "contactPage"][0] {
    intro { heading, subheading },
    faqs[] { question, answer },
    formSubjects
  }
`;

// ── Gallery (all published photos, ordered) ───────────────
export const GALLERY_QUERY = groq`
  *[_type == "galleryPhoto"] | order(order asc) {
    label, category, aspect, featured,
    "imageUrl": image.asset->url,
    "lqip": image.asset->metadata.lqip,
    "width":  image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height
  }
`;

// ── Home gallery (featured only) ──────────────────────────
export const HOME_GALLERY_QUERY = groq`
  *[_type == "galleryPhoto" && featured == true] | order(order asc) [0..5] {
    label, aspect,
    "imageUrl": image.asset->url,
    "lqip": image.asset->metadata.lqip
  }
`;
