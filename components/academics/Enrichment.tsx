"use client";

import { motion } from "framer-motion";
import { Music, Palette, Compass, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhotoBlock } from "@/components/ui/PhotoBlock";
import { Button } from "@/components/ui/Button";

const CLUBS = [
  {
    icon:        Music,
    title:       "Tajweed Circle",
    tag:         "Spiritual",
    description: "A dedicated weekly session for Quranic recitation, where children learn the beauty and rules of Tajweed through listening, repetition, and gentle practice.",
    color:       "forest",
  },
  {
    icon:        Palette,
    title:       "Creative Arts",
    tag:         "Expression",
    description: "Painting, collage, clay, and crafts — our creative studio gives children space to express themselves, build fine motor skills, and discover the joy of making.",
    color:       "gold",
  },
  {
    icon:        Compass,
    title:       "Young Explorers",
    tag:         "Discovery",
    description: "Nature walks, science experiments, and curiosity-driven investigations that bring the outside world into the classroom and spark a lifelong love of learning.",
    color:       "forest",
  },
];

export function Enrichment({ clubs: cmsClubs }: { clubs?: typeof CLUBS[number][] }) {
  return (
    <>
      {/* ── Enrichment Cards ─────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "white" }}
        aria-label="Enrichment Activities"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Beyond the Classroom"
            title="Enrichment Activities"
            subtitle="Structured play and purposeful exploration help children develop skills, passions, and friendships that last a lifetime."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7">
            {(cmsClubs ?? CLUBS).map((club, i) => {
              const Icon = club.icon;
              const isGold = club.color === "gold";
              return (
                <motion.div
                  key={club.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" as const }}
                  className="group rounded-2xl overflow-hidden"
                  style={{ border: "1.5px solid var(--color-border)" }}
                >
                  {/* Photo thumbnail */}
                  <div className="relative">
                    <PhotoBlock
                      aspectRatio="video"
                      label={club.title}
                      rounded={false}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Tag badge */}
                    <span
                      className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                      style={
                        isGold
                          ? { background: "var(--color-gold)", color: "var(--color-forest-deep)" }
                          : { background: "var(--color-forest)", color: "white" }
                      }
                    >
                      {club.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={
                          isGold
                            ? { background: "var(--color-gold-light)", color: "var(--color-gold)" }
                            : { background: "var(--color-forest-light)", color: "var(--color-forest)" }
                        }
                      >
                        <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <h3
                        className="font-serif text-xl"
                        style={{ color: "var(--color-forest-deep)" }}
                      >
                        {club.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                      {club.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Academic CTA ─────────────────────────────────── */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "var(--color-forest-light)" }}
        aria-label="Academic call to action"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="font-serif text-4xl lg:text-5xl"
            style={{ color: "var(--color-forest-deep)" }}
          >
            See It For Yourself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" as const }}
            className="mt-4 text-base lg:text-lg"
            style={{ color: "var(--color-slate)" }}
          >
            Book a tour or download our prospectus to learn everything about life at Surraya.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" as const }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={17} />}
              iconPosition="right"
            >
              Schedule a Visit
            </Button>
            <Button href="/admissions" variant="outline" size="lg">
              View Admissions
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
