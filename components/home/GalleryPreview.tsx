"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Six gallery cells with varied heights for masonry feel
const GALLERY_ITEMS = [
  { label: "Morning Assembly",   aspect: "aspect-[4/5]",  bg: "from-[#1a5c38]/25 to-[#1a5c38]/45" },
  { label: "Quranic Studies",    aspect: "aspect-square", bg: "from-[#d4a017]/20 to-[#d4a017]/40" },
  { label: "Outdoor Exploration",aspect: "aspect-[4/3]",  bg: "from-[#2d7a4f]/20 to-[#1a5c38]/35" },
  { label: "Arts & Crafts",      aspect: "aspect-[3/4]",  bg: "from-[#f0ebe0] to-[#e8f5ee]" },
  { label: "Story Time",         aspect: "aspect-square", bg: "from-[#fef3c7] to-[#d4a017]/30" },
  { label: "Team Play",          aspect: "aspect-[4/3]",  bg: "from-[#e8f5ee] to-[#2d7a4f]/25" },
];

export function GalleryPreview() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-sand)" }}
      aria-label="School Gallery"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Life at Surraya"
            title="A Glimpse Into Our World"
            centered={false}
          />
          <Link
            href="#"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "var(--color-forest)" }}
            aria-label="View full gallery"
          >
            View All Photos
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Masonry-style grid using CSS columns */}
        <div className="columns-2 sm:columns-3 gap-4 space-y-0">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Photo placeholder */}
              <div
                className={`w-full ${item.aspect} bg-gradient-to-br ${item.bg} flex items-end`}
              />

              {/* Hover overlay */}
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

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold border-2 transition-colors"
            style={{
              borderColor: "var(--color-forest)",
              color:       "var(--color-forest)",
            }}
          >
            View All Photos
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
