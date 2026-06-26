"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const GALLERY_ITEMS = [
  { label: "Morning Assembly",    aspect: "aspect-[4/5]",  src: "/gallery/IMG-20260513-WA0006.jpg" },
  { label: "Quranic Studies",     aspect: "aspect-square", src: "/gallery/IMG-20260513-WA0009.jpg" },
  { label: "Outdoor Exploration", aspect: "aspect-[4/3]",  src: "/gallery/IMG-20260513-WA0011.jpg" },
  { label: "Arts & Crafts",       aspect: "aspect-[3/4]",  src: "/gallery/IMG-20260513-WA0015.jpg" },
  { label: "Story Time",          aspect: "aspect-square", src: "/gallery/IMG-20260513-WA0070.jpg" },
  { label: "Team Play",           aspect: "aspect-[4/3]",  src: "/gallery/IMG-20260513-WA0071.jpg" },
];

export function GalleryPreview({ gallery: cmsGallery }: { gallery?: any[] | null }) {
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

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 gap-4 space-y-0">
          {(cmsGallery ?? GALLERY_ITEMS).map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Photo */}
              <div className={`w-full ${item.aspect} relative overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>

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