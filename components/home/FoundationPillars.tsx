"use client";

import { motion } from "framer-motion";
import { Star, BookOpen, Globe2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PILLARS } from "@/lib/constants";

const ICONS: Record<string, React.ElementType> = {
  Star:     Star,
  BookOpen: BookOpen,
  Globe:    Globe2,
};

export function FoundationPillars() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "white" }}
      aria-label="Our Foundation Pillars"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Foundation"
          title="Three Pillars of Excellence"
          subtitle="Everything we do at Surraya is built on a triad of values that shapes every child's journey from their very first day."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon] ?? Star;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.13, duration: 0.55, ease: "easeOut" as const }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{
                  background: "var(--color-cream)",
                  border: "1.5px solid var(--color-border)",
                }}
              >
                {/* Accent top bar */}
                <div
                  className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                  style={{ background: i === 1 ? "var(--color-gold)" : "var(--color-forest)" }}
                />

                <div className="p-7 lg:p-8">
                  {/* Icon bubble */}
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: i === 1 ? "var(--color-gold-light)" : "var(--color-forest-light)",
                      color:      i === 1 ? "var(--color-gold)"       : "var(--color-forest)",
                    }}
                  >
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <h3
                    className="font-serif text-2xl mb-3"
                    style={{ color: "var(--color-forest-deep)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-slate)" }}
                  >
                    {pillar.description}
                  </p>

                  {/* Subtle arrow on hover */}
                  <div
                    className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: i === 1 ? "var(--color-gold)" : "var(--color-forest)" }}
                    aria-hidden="true"
                  >
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
