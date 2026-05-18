import { defineField, defineType } from "sanity";
import { Heart } from "lucide-react";

export const donatePage = defineType({
  name:  "donatePage",
  title: "Donate Page",
  type:  "document",
  icon:  Heart,
  fields: [
    // ── Hero ──────────────────────────────────────────────
    defineField({
      name:  "hero",
      title: "Hero Section",
      type:  "object",
      fields: [
        defineField({ name: "heading",    title: "Heading",     type: "string" }),
        defineField({ name: "subheading", title: "Sub-heading", type: "text", rows: 2 }),
        defineField({ name: "badge",      title: "Badge Text",  type: "string", description: "e.g. Sadaqah Jariyah — Ongoing Charity" }),
      ],
    }),

    // ── Causes ────────────────────────────────────────────
    defineField({
      name:  "causes",
      title: "Donation Causes",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({
              name:    "icon",
              title:   "Icon",
              type:    "string",
              options: { list: ["GraduationCap", "BookOpen", "Wrench", "Wifi", "Users"] },
            }),
            defineField({ name: "title",       title: "Cause Name",   type: "string" }),
            defineField({ name: "description", title: "Description",  type: "text", rows: 3 }),
            defineField({ name: "featured",    title: "Featured (shows progress bar)", type: "boolean", initialValue: false }),
            defineField({ name: "progress",    title: "Progress %",   type: "number", description: "0–100. Only shown on featured cause." }),
            defineField({ name: "goal",        title: "Goal Amount",  type: "string", description: "e.g. $10,000" }),
            defineField({ name: "raised",      title: "Amount Raised", type: "string", description: "e.g. $6,800" }),
          ],
          preview: { select: { title: "title", subtitle: "featured" } },
        },
      ],
    }),

    // ── Donation Form copy ────────────────────────────────
    defineField({
      name:  "formSection",
      title: "Donation Form Section",
      type:  "object",
      fields: [
        defineField({ name: "heading",       title: "Section Heading",   type: "string" }),
        defineField({ name: "hadith",        title: "Hadith Quote",      type: "text", rows: 3 }),
        defineField({ name: "hadithSource",  title: "Hadith Source",     type: "string" }),
        defineField({
          name:  "impactBullets",
          title: "Impact Bullets",
          type:  "array",
          of: [
            {
              type:  "object",
              fields: [
                defineField({ name: "amount", title: "Amount", type: "string", description: "e.g. $25" }),
                defineField({ name: "label",  title: "Impact", type: "string", description: "e.g. covers one child's learning materials for a month" }),
              ],
              preview: { select: { title: "amount", subtitle: "label" } },
            },
          ],
        }),
        defineField({
          name:  "presetAmounts",
          title: "Preset Donation Amounts ($)",
          type:  "array",
          of:    [{ type: "number" }],
          description: "e.g. 25, 50, 100, 250, 500",
        }),
      ],
    }),

    // ── Community Promise ─────────────────────────────────
    defineField({
      name:  "communityPromise",
      title: "Community Promise Section",
      type:  "object",
      fields: [
        defineField({ name: "heading",    title: "Heading",     type: "string" }),
        defineField({ name: "body",       title: "Body Text",   type: "text", rows: 3 }),
        defineField({
          name:  "stats",
          title: "Stats",
          type:  "array",
          of: [
            {
              type:  "object",
              fields: [
                defineField({ name: "value", title: "Value", type: "string" }),
                defineField({ name: "label", title: "Label", type: "string" }),
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            },
          ],
        }),
        defineField({
          name:  "testimonial",
          title: "Testimonial",
          type:  "object",
          fields: [
            defineField({ name: "quote", title: "Quote",      type: "text", rows: 3 }),
            defineField({ name: "name",  title: "Donor Name", type: "string" }),
            defineField({ name: "role",  title: "Role",       type: "string", description: "e.g. Parent & Donor since 2018" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Donate Page" }),
  },
});
