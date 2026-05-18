import { defineField, defineType } from "sanity";
import { Phone } from "lucide-react";

export const contactPage = defineType({
  name:  "contactPage",
  title: "Contact Page",
  type:  "document",
  icon:  Phone,
  fields: [
    // ── Page intro ────────────────────────────────────────
    defineField({
      name:  "intro",
      title: "Page Intro",
      type:  "object",
      fields: [
        defineField({ name: "heading",     title: "Page Heading",   type: "string" }),
        defineField({ name: "subheading",  title: "Sub-heading",    type: "text", rows: 2 }),
      ],
    }),

    // ── FAQs ─────────────────────────────────────────────
    defineField({
      name:  "faqs",
      title: "FAQs",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer",   title: "Answer",   type: "text", rows: 4 }),
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),

    // ── Form subjects ─────────────────────────────────────
    defineField({
      name:        "formSubjects",
      title:       "Contact Form Subject Options",
      type:        "array",
      of:          [{ type: "string" }],
      description: "These appear in the Subject dropdown on the contact form",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Page" }),
  },
});
