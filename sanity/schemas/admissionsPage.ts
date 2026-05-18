import { defineField, defineType } from "sanity";
import { GraduationCap } from "lucide-react";

export const admissionsPage = defineType({
  name:  "admissionsPage",
  title: "Admissions Page",
  type:  "document",
  icon:  GraduationCap,
  fields: [
    // ── Hero ──────────────────────────────────────────────
    defineField({
      name:  "hero",
      title: "Hero Section",
      type:  "object",
      fields: [
        defineField({ name: "heading",       title: "Main Heading",       type: "string" }),
        defineField({ name: "subheading",    title: "Sub-heading",        type: "text", rows: 2 }),
        defineField({ name: "badgeText",     title: "Badge Text",         type: "string", description: "e.g. Admissions Open — 2025" }),
      ],
    }),

    // ── Nursery Classes ───────────────────────────────────
    defineField({
      name:  "classes",
      title: "Nursery Classes",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({ name: "level",       title: "Level Name",  type: "string", description: "e.g. Nursery One" }),
            defineField({ name: "age",         title: "Age Range",   type: "string", description: "e.g. Ages 2.5 – 3.5" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "spots",       title: "Class Size",  type: "string", description: "e.g. Limited to 20 children per class" }),
            defineField({ name: "highlight",   title: "Highlighted (green card)", type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "level", subtitle: "age" } },
        },
      ],
    }),

    // ── Requirements ─────────────────────────────────────
    defineField({
      name:        "requirements",
      title:       "Required Documents",
      type:        "array",
      of:          [{ type: "string" }],
      description: "Each item is one document in the checklist",
    }),

    // ── How to Join Steps ─────────────────────────────────
    defineField({
      name:  "steps",
      title: "Admissions Steps",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({ name: "number",      title: "Step Number", type: "string", description: "e.g. 01" }),
            defineField({ name: "title",       title: "Step Title",  type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({ name: "highlight",   title: "Gold Highlight (final step)", type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "number", subtitle: "title" } },
        },
      ],
    }),

    // ── Fees ─────────────────────────────────────────────
    defineField({
      name:  "fees",
      title: "Fee Structure",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({ name: "title",       title: "Fee Name",   type: "string", description: "e.g. Registration Fee" }),
            defineField({ name: "amount",      title: "Amount",     type: "string", description: "e.g. $150" }),
            defineField({ name: "period",      title: "Period",     type: "string", description: "e.g. one-time, per term, annual" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({
              name:  "items",
              title: "Bullet Points",
              type:  "array",
              of:    [{ type: "string" }],
            }),
            defineField({ name: "highlight",   title: "Highlighted Card (prominent border)", type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "title", subtitle: "amount" } },
        },
      ],
    }),

    // ── Sibling Discount ──────────────────────────────────
    defineField({
      name:  "siblingDiscount",
      title: "Sibling Discount Notice",
      type:  "text",
      rows:  2,
      description: "The yellow info bar text below the fee cards",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Admissions Page" }),
  },
});
