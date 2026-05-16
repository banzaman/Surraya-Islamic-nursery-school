"use client";

import { motion } from "framer-motion";
import { Tag, ArrowRight, Info } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const FEES = [
  {
    title:       "Registration Fee",
    amount:      "$150",
    period:      "one-time",
    description: "Paid once upon acceptance of the offer letter to secure your child's place.",
    items:       ["Non-refundable", "Covers administrative processing", "Confirms enrolment"],
    highlight:   false,
  },
  {
    title:       "Tuition Fee",
    amount:      "$850",
    period:      "per term",
    description: "Covers all core learning materials, EYFS resources, and Islamic Studies curriculum.",
    items:       ["Three terms per year", "Instalment plan available", "Includes all textbooks"],
    highlight:   true,
  },
  {
    title:       "Facility Levy",
    amount:      "$200",
    period:      "annual",
    description: "Contributes to the ongoing maintenance, development, and improvement of school facilities.",
    items:       ["Paid once per academic year", "Covers grounds & safety", "Technology resources"],
    highlight:   false,
  },
];

export function FeeStructure() {
  return (
    <>
      {/* ── Fee Cards ─────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "white" }}
        aria-label="Fee structure"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="School Fees"
            title="Transparent Fee Structure"
            subtitle="We believe every family should have a clear picture of what to expect. No hidden costs."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {FEES.map((fee, i) => (
              <motion.div
                key={fee.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" as const }}
                className="relative flex flex-col rounded-2xl overflow-hidden"
                style={{
                  background: "var(--color-cream)",
                  border: fee.highlight
                    ? "2px solid var(--color-forest)"
                    : "1.5px solid var(--color-border)",
                  boxShadow: fee.highlight ? "0 8px 40px rgba(26,92,56,0.12)" : undefined,
                }}
              >
                {/* Gold top border accent */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: "var(--color-gold)" }}
                  aria-hidden="true"
                />

                <div className="flex-1 flex flex-col p-7">
                  <div className="flex items-center gap-2 mb-1">
                    <Tag
                      size={14}
                      style={{ color: "var(--color-forest-mid)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: "var(--color-forest-mid)" }}
                    >
                      {fee.title}
                    </span>
                  </div>

                  {/* Amount */}
                  <div className="mt-3 mb-4 flex items-baseline gap-1.5">
                    <span
                      className="font-serif text-4xl"
                      style={{ color: "var(--color-forest-deep)" }}
                    >
                      {fee.amount}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-muted)" }}
                    >
                      / {fee.period}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--color-slate)" }}
                  >
                    {fee.description}
                  </p>

                  {/* Line items */}
                  <ul className="flex flex-col gap-2 mt-auto">
                    {fee.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "var(--color-slate)" }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ background: "var(--color-gold)" }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sibling discount info bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" as const }}
            className="mt-8 flex items-start gap-3 rounded-2xl px-6 py-4"
            style={{ background: "var(--color-gold-light)", border: "1.5px solid var(--color-gold)" }}
            role="note"
          >
            <Info
              size={18}
              className="shrink-0 mt-0.5"
              style={{ color: "var(--color-gold)" }}
              aria-hidden="true"
            />
            <p className="text-sm" style={{ color: "var(--color-forest-deep)" }}>
              <strong>Sibling Discount:</strong> Families enrolling a second or subsequent child receive a
              10% reduction on tuition fees for the younger child. Please mention this during your application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Admissions CTA ────────────────────────────────── */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "var(--color-forest-deep)" }}
        aria-label="Admissions call to action"
      >
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full opacity-[0.08]"
          style={{ background: "var(--color-gold)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="font-serif text-4xl lg:text-5xl text-white"
          >
            Ready to Begin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" as const }}
            className="mt-4 text-base"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Spaces are limited each term. Apply now or reach out to our admissions team for a personalised conversation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" as const }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button
              href="#"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={17} />}
              iconPosition="right"
            >
              Apply Now Online
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Contact Admissions
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
