"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Baby, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CLASSES = [
  {
    icon:       Baby,
    level:      "Nursery One",
    age:        "Ages 2.5 – 3.5",
    description:
      "The ideal introduction to structured learning. Children begin to build language, social skills, and early numeracy in a warm, play-based environment.",
    spots:      "Limited to 20 children per class",
    highlight:  false,
  },
  {
    icon:       GraduationCap,
    level:      "Nursery Two",
    age:        "Ages 3.5 – 5",
    description:
      "Building on Nursery One foundations, children develop more advanced literacy, mathematical thinking, and Quranic recitation in preparation for primary school.",
    spots:      "Limited to 22 children per class",
    highlight:  true,
  },
];

const REQUIREMENTS = [
  "Child must be within the applicable age range at the start of the term",
  "Completed application form (online or in-person)",
  "Copy of the child's birth certificate",
  "Recent passport-sized photographs (2)",
  "Immunisation / vaccination record",
  "Parent or guardian national ID",
];

export function WhoCanApply() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "white" }}
      aria-label="Who can apply"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Eligibility"
          title="Who Can Apply"
          subtitle="Surraya welcomes children from all backgrounds who share our commitment to faith-centred, holistic early education."
        />

        {/* Class cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {CLASSES.map((cls, i) => {
            const Icon = cls.icon;
            return (
              <motion.div
                key={cls.level}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.13, duration: 0.5, ease: "easeOut" as const }}
                className="rounded-2xl p-7 flex flex-col"
                style={
                  cls.highlight
                    ? { background: "var(--color-forest)", color: "white" }
                    : { background: "var(--color-cream)", border: "1.5px solid var(--color-border)" }
                }
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={
                    cls.highlight
                      ? { background: "rgba(255,255,255,0.15)", color: "white" }
                      : { background: "var(--color-forest-light)", color: "var(--color-forest)" }
                  }
                >
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <span
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: cls.highlight ? "var(--color-gold-bright)" : "var(--color-forest-mid)" }}
                >
                  {cls.age}
                </span>
                <h3
                  className="font-serif text-2xl mb-3"
                  style={{ color: cls.highlight ? "white" : "var(--color-forest-deep)" }}
                >
                  {cls.level}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: cls.highlight ? "rgba(255,255,255,0.75)" : "var(--color-slate)" }}
                >
                  {cls.description}
                </p>
                <p
                  className="mt-4 text-xs font-semibold"
                  style={{ color: cls.highlight ? "var(--color-gold-bright)" : "var(--color-forest-mid)" }}
                >
                  {cls.spots}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Requirements list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="mt-14 max-w-2xl mx-auto rounded-2xl p-8"
          style={{ background: "var(--color-sand)", border: "1.5px solid var(--color-border)" }}
        >
          <h3
            className="font-serif text-2xl mb-6"
            style={{ color: "var(--color-forest-deep)" }}
          >
            Documents Required
          </h3>
          <ul className="flex flex-col gap-3" role="list">
            {REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-forest)" }}
                  aria-hidden="true"
                />
                <span className="text-sm" style={{ color: "var(--color-slate)" }}>{req}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
