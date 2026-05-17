import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base        = SITE.url;
  const lastModified = new Date();

  return [
    {
      url:         base,
      lastModified,
      changeFrequency: "weekly",
      priority:    1.0,
    },
    {
      url:         `${base}/academics`,
      lastModified,
      changeFrequency: "monthly",
      priority:    0.9,
    },
    {
      url:         `${base}/admissions`,
      lastModified,
      changeFrequency: "monthly",
      priority:    0.9,
    },
    {
      url:         `${base}/donate`,
      lastModified,
      changeFrequency: "monthly",
      priority:    0.8,
    },
    {
      url:         `${base}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority:    0.7,
    },
  ];
}
