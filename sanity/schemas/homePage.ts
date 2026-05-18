import { defineField, defineType } from "sanity";
import { Home } from "lucide-react";

export const homePage = defineType({
  name:  "homePage",
  title: "Home Page",
  type:  "document",
  icon:  Home,
  fields: [
    // ── Hero ──────────────────────────────────────────────
    defineField({
      name:  "hero",
      title: "Hero Section",
      type:  "object",
      fields: [
        defineField({ name: "heading",    title: "Main Heading",   type: "string" }),
        defineField({ name: "subheading", title: "Sub-heading",    type: "text", rows: 2 }),
        defineField({ name: "badge",      title: "Badge Text",     type: "string", description: "Small pill above the heading e.g. 'Est. 2009 — Kampala'" }),
        defineField({ name: "ctaPrimary",   title: "Primary Button Label",   type: "string" }),
        defineField({ name: "ctaSecondary", title: "Secondary Button Label", type: "string" }),
      ],
    }),

    // ── Stats ─────────────────────────────────────────────
    defineField({
      name:  "stats",
      title: "Statistics",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({ name: "value", title: "Value",  type: "string", description: "e.g. 1.2K+ or 98%" }),
            defineField({ name: "label", title: "Label",  type: "string", description: "e.g. Students Enrolled" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),

    // ── Pillars ───────────────────────────────────────────
    defineField({
      name:        "pillars",
      title:       "Foundation Pillars",
      type:        "array",
      validation:  (r) => r.max(3),
      of: [
        {
          type:  "object",
          fields: [
            defineField({
              name:    "icon",
              title:   "Icon",
              type:    "string",
              options: { list: ["Star", "BookOpen", "Globe"] },
            }),
            defineField({ name: "title",       title: "Title",       type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
    }),

    // ── Payment Cards ─────────────────────────────────────
    defineField({
      name:  "paymentCards",
      title: "Payment & Donation Cards",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({ name: "title",       title: "Card Title",   type: "string" }),
            defineField({ name: "description", title: "Description",  type: "text", rows: 2 }),
            defineField({ name: "badge",       title: "Badge Label",  type: "string", description: "e.g. Priority — leave blank for none" }),
            defineField({ name: "highlight",   title: "Highlighted Card (white elevated)", type: "boolean", initialValue: false }),
            defineField({ name: "ctaLabel",    title: "Button Label", type: "string" }),
            defineField({
              name:    "ctaHref",
              title:   "Button Link",
              type:    "string",
              options: { list: ["/admissions", "/donate", "/contact", "#"] },
            }),
          ],
          preview: { select: { title: "title", subtitle: "badge" } },
        },
      ],
    }),

    // ── Gallery Photos ────────────────────────────────────
    defineField({
      name:  "gallery",
      title: "Gallery Preview Photos",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({ name: "image", title: "Photo",       type: "image", options: { hotspot: true } }),
            defineField({ name: "label", title: "Photo Label", type: "string", description: "e.g. Morning Assembly" }),
            defineField({
              name:    "aspect",
              title:   "Aspect Ratio",
              type:    "string",
              options: { list: ["aspect-[4/5]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]"] },
              initialValue: "aspect-square",
            }),
          ],
          preview: {
            select: { title: "label", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
