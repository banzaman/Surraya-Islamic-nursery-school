import { defineField, defineType } from "sanity";
import { Settings } from "lucide-react";

export const siteSettings = defineType({
  name:  "siteSettings",
  title: "Site Settings",
  type:  "document",
  icon:  Settings,
  // Only one document of this type should ever exist
  fields: [
    defineField({
      name:        "schoolName",
      title:       "School Name",
      type:        "string",
      validation:  (r) => r.required(),
      initialValue: "Surraya Islamic Nursery School",
    }),
    defineField({
      name:        "tagline",
      title:       "Tagline",
      type:        "string",
      initialValue: "Nurturing Minds, Rooted in Faith",
    }),
    defineField({
      name:        "description",
      title:       "Site Meta Description",
      type:        "text",
      rows:        3,
      description: "Used in Google search results and social previews. Keep under 160 characters.",
    }),
    defineField({
      name:        "founded",
      title:       "Year Founded",
      type:        "number",
      initialValue: 2009,
    }),
    defineField({
      name:  "contact",
      title: "Contact Information",
      type:  "object",
      fields: [
        defineField({ name: "email",   title: "Email Address", type: "string" }),
        defineField({ name: "phone",   title: "Phone Number",  type: "string" }),
        defineField({ name: "address", title: "Street Address", type: "string" }),
        defineField({ name: "mapLink", title: "Google Maps URL", type: "url" }),
      ],
    }),
    defineField({
      name:  "social",
      title: "Social Media Links",
      type:  "array",
      of: [
        {
          type:  "object",
          fields: [
            defineField({
              name:    "platform",
              title:   "Platform",
              type:    "string",
              options: {
                list: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
              },
            }),
            defineField({ name: "url", title: "Profile URL", type: "url" }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
