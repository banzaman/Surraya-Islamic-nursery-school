import { defineField, defineType } from "sanity";
import { BookOpen } from "lucide-react";

export const academicsPage = defineType({
  name:  "academicsPage",
  title: "Academics Page",
  type:  "document",
  icon:  BookOpen,
  fields: [
    // ── Hero ──────────────────────────────────────────────
    defineField({
      name:  "hero",
      title: "Hero Section",
      type:  "object",
      fields: [
        defineField({ name: "heading",    title: "Heading",     type: "string" }),
        defineField({ name: "subheading", title: "Sub-heading", type: "text", rows: 2 }),
        defineField({
          name:  "badges",
          title: "Credential Badges",
          type:  "array",
          of:    [{ type: "string" }],
          description: "e.g. EYFS Aligned, 100% Faith-Centered",
        }),
      ],
    }),

    // ── EYFS Areas ────────────────────────────────────────
    defineField({
      name:        "eyfsAreas",
      title:       "EYFS Learning Areas",
      type:        "array",
      validation:  (r) => r.max(5),
      of: [
        {
          type:  "object",
          fields: [
            defineField({
              name:    "icon",
              title:   "Icon",
              type:    "string",
              options: { list: ["Brain", "MessageSquare", "Users", "Puzzle", "Leaf"] },
            }),
            defineField({ name: "title",       title: "Area Title",   type: "string" }),
            defineField({ name: "description", title: "Description",  type: "text", rows: 3 }),
            defineField({
              name:    "size",
              title:   "Card Size",
              type:    "string",
              options: { list: [
                { title: "Large (spans 2 columns)",  value: "large" },
                { title: "Highlighted (gold border)", value: "highlight" },
                { title: "Standard",                 value: "small" },
              ]},
              description: "Only one card should be 'Large' and one 'Highlighted'",
            }),
          ],
          preview: { select: { title: "title", subtitle: "size" } },
        },
      ],
    }),

    // ── Islamic Studies ───────────────────────────────────
    defineField({
      name:  "islamicStudies",
      title: "Islamic Studies Section",
      type:  "object",
      fields: [
        defineField({ name: "heading",    title: "Section Heading",  type: "string" }),
        defineField({ name: "body",       title: "Intro Paragraph",  type: "text", rows: 3 }),
        defineField({ name: "hadith",     title: "Hadith Quote",     type: "string" }),
        defineField({ name: "hadithSource", title: "Hadith Source",  type: "string", description: "e.g. Prophet Muhammad ﷺ" }),
        defineField({
          name:  "pillars",
          title: "Three Pillars",
          type:  "array",
          of: [
            {
              type:  "object",
              fields: [
                defineField({ name: "icon",        title: "Icon",        type: "string", options: { list: ["BookMarked", "Star", "Moon"] } }),
                defineField({ name: "title",       title: "Title",       type: "string" }),
                defineField({ name: "body",        title: "Description", type: "text", rows: 2 }),
              ],
              preview: { select: { title: "title" } },
            },
          ],
        }),
      ],
    }),

    // ── Enrichment Clubs ─────────────────────────────────
    defineField({
      name:  "enrichmentClubs",
      title: "Enrichment Activities",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({ name: "icon",        title: "Icon",        type: "string", options: { list: ["Music", "Palette", "Compass"] } }),
            defineField({ name: "title",       title: "Club Name",   type: "string" }),
            defineField({ name: "tag",         title: "Tag Badge",   type: "string", description: "e.g. Spiritual, Expression, Discovery" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "tag" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Academics Page" }),
  },
});
