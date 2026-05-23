"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const HOME_GALLERY_ITEMS = [
  {
    label: "Morning assembly",
    aspect: "aspect-[4/5]",
    bg: "from-[#1a5c38]/25 to-[#1a5c38]/45",
    imageUrl: "/home/IMG-20260513-WA0006.jpg",
  },
  {
    label: "Quranic studies",
    aspect: "aspect-square",
    bg: "from-[#d4a017]/20 to-[#d4a017]/40",
    imageUrl: "/home/IMG-20260513-WA0009.jpg",
  },
  {
    label: "Outdoor learning",
    aspect: "aspect-[4/3]",
    bg: "from-[#2d7a4f]/20 to-[#1a5c38]/35",
    imageUrl: "/home/IMG-20260513-WA0011.jpg",
  },
  {
    label: "Arts and crafts",
    aspect: "aspect-[3/4]",
    bg: "from-[#f0ebe0] to-[#e8f5ee]",
    imageUrl: "/home/IMG-20260513-WA0015.jpg",
  },
  {
    label: "Story time",
    aspect: "aspect-square",
    bg: "from-[#fef3c7] to-[#d4a017]/30",
    imageUrl: "/home/IMG-20260513-WA0070.jpg",
  },
  {
    label: "Team play",
    aspect: "aspect-[4/3]",
    bg: "from-[#e8f5ee] to-[#2d7a4f]/25",
    imageUrl: "/home/IMG-20260513-WA0071.jpg",
  },
];

const FULL_GALLERY_ITEMS = [
  {
    label: "Classroom learning",
    aspect: "aspect-[4/5]",
    bg: "from-[#1a5c38]/25 to-[#1a5c38]/45",
    imageUrl: "/gallery/IMG-20260513-WA0084.jpg",
  },
  {
    label: "Prayer circle",
    aspect: "aspect-square",
    bg: "from-[#d4a017]/20 to-[#d4a017]/40",
    imageUrl: "/gallery/IMG-20260513-WA0088.jpg",
  },
  {
    label: "Playground discovery",
    aspect: "aspect-[4/3]",
    bg: "from-[#2d7a4f]/20 to-[#1a5c38]/35",
    imageUrl: "/gallery/IMG-20260513-WA0097.jpg",
  },
  {
    label: "Indoor sensory activity",
    aspect: "aspect-[3/4]",
    bg: "from-[#f0ebe0] to-[#e8f5ee]",
    imageUrl: "/gallery/IMG-20260513-WA0101.jpg",
  },
  {
    label: "Nursery celebration",
    aspect: "aspect-square",
    bg: "from-[#fef3c7] to-[#d4a017]/30",
    imageUrl: "/gallery/IMG-20260513-WA0104.jpg",
  },
  {
    label: "Group learning session",
    aspect: "aspect-[4/3]",
    bg: "from-[#e8f5ee] to-[#2d7a4f]/25",
    imageUrl: "/gallery/IMG-20260513-WA0106.jpg",
  },
];

const DONATE_IMAGES = [
  {
    label: "Donation support",
    aspect: "aspect-[4/5]",
    bg: "from-[#1a5c38]/25 to-[#1a5c38]/45",
    imageUrl: "/donate/IMG-20260513-WA0108.jpg",
  },
  {
    label: "Community giving",
    aspect: "aspect-square",
    bg: "from-[#d4a017]/20 to-[#d4a017]/40",
    imageUrl: "/donate/IMG-20260513-WA0110.jpg",
  },
  {
    label: "Uniform support",
    aspect: "aspect-[4/3]",
    bg: "from-[#2d7a4f]/20 to-[#1a5c38]/35",
    imageUrl: "/donate/IMG-20260513-WA0112.jpg",
  },
  {
    label: "Learning resources",
    aspect: "aspect-[3/4]",
    bg: "from-[#f0ebe0] to-[#e8f5ee]",
    imageUrl: "/donate/IMG-20260513-WA0114.jpg",
  },
  {
    label: "School support day",
    aspect: "aspect-square",
    bg: "from-[#fef3c7] to-[#d4a017]/30",
    imageUrl: "/donate/IMG-20260513-WA0116.jpg",
  },
  {
    label: "Giving for future learners",
    aspect: "aspect-[4/3]",
    bg: "from-[#e8f5ee] to-[#2d7a4f]/25",
    imageUrl: "/donate/IMG-20260513-WA0118.jpg",
  },
];

export function GalleryPreview({ gallery: cmsGallery }: { gallery?: any[] | null }) {
  const [expanded, setExpanded] = useState(false);

  const mappedCmsGallery = (cmsGallery ?? []).map((item: any) => ({
    label: item.label,
    aspect: item.aspect ?? "aspect-square",
    imageUrl: item.imageUrl ?? null,
    bg: item.bg ?? "from-[#1a5c38]/20 to-[#1a5c38]/35",
  }));

  const galleryItems = mappedCmsGallery.length
    ? expanded
      ? mappedCmsGallery
      : mappedCmsGallery.slice(0, 6)
    : expanded
      ? [...HOME_GALLERY_ITEMS, ...FULL_GALLERY_ITEMS]
      : HOME_GALLERY_ITEMS;

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-sand)" }}
      aria-label="School Gallery"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Life at Surraya"
            title="A Glimpse Into Our World"
            centered={false}
          />
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            aria-expanded={expanded}
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "var(--color-forest)" }}
          >
            {expanded ? "Show fewer photos" : "View All Photos"}
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>

        <div className="columns-2 sm:columns-3 gap-4 space-y-0">
          {galleryItems.map((item, i) => (
            <motion.div
              key={`${item.label}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className={`w-full ${item.aspect} overflow-hidden bg-gradient-to-br ${item.bg}`}>
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : null}
              </div>

              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                style={{ background: "linear-gradient(to top, rgba(15,61,37,0.7) 0%, transparent 60%)" }}
              >
                <span
                  className="text-xs font-semibold text-white px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)" }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold border-2 transition-colors"
            style={{
              borderColor: "var(--color-forest)",
              color: "var(--color-forest)",
            }}
          >
            {expanded ? "Show fewer photos" : "View All Photos"}
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
