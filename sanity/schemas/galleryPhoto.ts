import { defineField, defineType } from "sanity";
import { ImageIcon } from "lucide-react";

export const galleryPhoto = defineType({
  name:  "galleryPhoto",
  title: "Gallery Photos",
  type:  "document",
  icon:  ImageIcon,
  fields: [
    defineField({
      name:       "image",
      title:      "Photo",
      type:       "image",
      options:    { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name:       "label",
      title:      "Caption / Label",
      type:       "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name:    "category",
      title:   "Category",
      type:    "string",
      options: {
        list: [
          { title: "Learning",   value: "learning" },
          { title: "Spiritual",  value: "spiritual" },
          { title: "Play",       value: "play" },
          { title: "Events",     value: "events" },
          { title: "Facilities", value: "facilities" },
        ],
      },
    }),
    defineField({
      name:    "aspect",
      title:   "Aspect Ratio",
      type:    "string",
      options: {
        list: [
          { title: "Portrait (4:5)",  value: "aspect-[4/5]" },
          { title: "Square (1:1)",    value: "aspect-square" },
          { title: "Landscape (4:3)", value: "aspect-[4/3]" },
          { title: "Tall (3:4)",      value: "aspect-[3/4]" },
        ],
      },
      initialValue: "aspect-square",
    }),
    defineField({
      name:        "order",
      title:       "Display Order",
      type:        "number",
      description: "Lower numbers appear first in the gallery",
      initialValue: 99,
    }),
    defineField({
      name:        "featured",
      title:       "Show on Home Page",
      type:        "boolean",
      description: "If checked, this photo appears in the 6-photo home page preview",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name:  "orderAsc",
      by:    [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "label", subtitle: "category", media: "image" },
  },
});
