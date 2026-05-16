"use client";

import { motion } from "framer-motion";
import { ClipboardList, CalendarCheck, FileCheck, PartyPopper } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STEPS = [
  {
    icon:        ClipboardList,
    number:      "01",
    title:       "Submit Application",
    description: "Complete our online form or visit the school office. Attach all required documents.",
    highlight:   false,
  },
  {
    icon:        CalendarCheck,
    number:      "02",
    title:       "School Visit",
    description: "We invite you for a brief school tour and an informal conversation with our head of admissions.",
    highlight:   false,
  },
  {
    icon:        FileCheck,
    number:      "03",
    title:       "Offer Letter",
    description: "Successful applicants receive a formal offer letter within 5 working days of the visit.",
    highlight:   false,
  },
  {
    icon:        PartyPopper,
    number:      "04",
    title:       "Welcome to Surraya!",
    description: "Confirm your place, complete registration, and prepare for your child's first day.",
    highlight:   true,
  },
];

export function HowToJoin() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-sand)" }}
      aria-label="How to join Surraya"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Admissions Process"
          title="How to Join"
          subtitle="Our admissions process is designed to be simple, transparent, and welcoming for every family."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" as const }}
                className="relative rounded-2xl p-6 lg:p-7 flex flex-col"
                style={
                  step.highlight
                    ? { background: "var(--color-gold)", border: "none" }
                    : { background: "white", border: "1.5px solid var(--color-border)" }
                }
              >
                {/* Step number — large background watermark */}
                <span
                  className="absolute top-4 right-5 font-serif text-7xl leading-none select-none pointer-events-none"
                  style={{
                    color: step.highlight
                      ? "rgba(15,61,37,0.12)"
                      : "rgba(26,92,56,0.07)",
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Icon circle */}
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full"
                  style={
                    step.highlight
                      ? { background: "var(--color-forest-deep)", color: "white" }
                      : { background: "var(--color-forest-light)", color: "var(--color-forest)" }
                  }
                >
                  <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <h3
                  className="font-serif text-xl mb-2"
                  style={{ color: step.highlight ? "var(--color-forest-deep)" : "var(--color-forest-deep)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: step.highlight ? "var(--color-forest-deep)" : "var(--color-slate)" }}
                >
                  {step.description}
                </p>

                {/* Connector line (desktop only, not last) */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 -translate-y-1/2"
                    style={{ background: "var(--color-border)" }}
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
