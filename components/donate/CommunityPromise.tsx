"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { PhotoBlock } from "@/components/ui/PhotoBlock";
import { Button } from "@/components/ui/Button";

const TESTIMONIALS = [
  {
    quote:  "Donating to Surraya is one of the best decisions our family has made. We see its impact every time we visit — the joy on these children's faces is indescribable.",
    name:   "Fatima Al-Rashid",
    role:   "Parent & Donor since 2018",
  },
];

export function CommunityPromise({ cms }: { cms?: { heading?: string; body?: string; stats?: any[]; testimonial?: any } }) {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-sand)" }}
      aria-label="Community promise and testimonial"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Photo + testimonial overlay ─────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative"
          >
            <PhotoBlock
              aspectRatio="portrait"
              label="Community"
              rounded
              className="w-full"
            />

            {/* Testimonial card — overlapping bottom */}
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="absolute -bottom-6 -right-0 lg:-right-8 max-w-sm rounded-2xl p-6 shadow-2xl"
                style={{ background: "white", border: "1.5px solid var(--color-border)" }}
              >
                <Quote
                  size={22}
                  style={{ color: "var(--color-gold)" }}
                  fill="currentColor"
                  aria-hidden="true"
                />
                <p
                  className="mt-2 text-sm leading-relaxed italic"
                  style={{ color: "var(--color-slate)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "var(--color-forest)" }}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--color-forest-deep)" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "var(--color-muted)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Right: Copy + stats ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" as const }}
            className="pt-10 lg:pt-0"
          >
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--color-forest-mid)" }}
            >
              Our Promise to You
            </p>
            <h2
              className="font-serif text-4xl lg:text-5xl leading-tight"
              style={{ color: "var(--color-forest-deep)" }}
            >
              Every Penny
              <span className="block italic" style={{ color: "var(--color-forest)" }}>
                Accounted For
              </span>
            </h2>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "var(--color-slate)" }}
            >
              We are fully transparent about how donations are used. Annual impact reports
              are published and shared with all donors. Your trust is our greatest asset.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#donation-form" variant="primary" size="lg">
                Make a Donation
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Request Impact Report
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
