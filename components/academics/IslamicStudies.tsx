"use client";

import { motion } from "framer-motion";
import { BookMarked, Star, Moon } from "lucide-react";
import { PhotoBlock } from "@/components/ui/PhotoBlock";

const PILLARS = [
  {
    icon:  BookMarked,
    title: "Quranic Foundations",
    body:  "Children are introduced to selected surahs, Tajweed basics, and a love of the Quran through daily recitation and stories.",
  },
  {
    icon:  Star,
    title: "Islamic Manners & Values",
    body:  "We embed adab — Islamic etiquette — into every interaction, from greetings to sharing, nurturing character from the inside out.",
  },
  {
    icon:  Moon,
    title: "Stories of the Prophets",
    body:  "Age-appropriate narratives from prophetic history inspire children with models of courage, compassion, and faith.",
  },
];

export function IslamicStudies({ cms }: { cms?: { heading?: string; body?: string; hadith?: string; hadithSource?: string; pillars?: any[] } }) {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "var(--color-forest-deep)" }}
      aria-label="Integrated Islamic Studies"
    >
      {/* Decorative circle */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-[0.07]"
        style={{ background: "var(--color-gold)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative"
          >
            <PhotoBlock
              aspectRatio="portrait"
              label="Islamic Studies"
              rounded
              className="w-full opacity-90"
            />
            {/* Hadith card overlay */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 max-w-[260px] rounded-2xl p-5 shadow-2xl"
              style={{ background: "var(--color-gold)", color: "var(--color-forest-deep)" }}
            >
              <p className="font-serif text-sm leading-snug italic">
                &ldquo;Seek knowledge from the cradle to the grave.&rdquo;
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider opacity-70">
                — Prophet Muhammad ﷺ
              </p>
            </div>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          >
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--color-gold-bright)" }}
            >
              Islamic Studies
            </p>
            <h2
              className="font-serif text-4xl lg:text-5xl text-white leading-tight"
            >
              Faith Woven Into
              <span className="block italic" style={{ color: "var(--color-gold-bright)" }}>
                Every Lesson
              </span>
            </h2>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              At Surraya, Islamic Studies is not a standalone subject — it is the thread
              running through everything we do, shaping how children learn, relate, and grow.
            </p>

            {/* Pillars */}
            <ul className="mt-8 flex flex-col gap-6" role="list">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.li
                    key={p.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.45, ease: "easeOut" as const }}
                    className="flex gap-4"
                  >
                    <div
                      className="shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: "rgba(255,255,255,0.10)", color: "var(--color-gold-bright)" }}
                    >
                      <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{p.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {p.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
