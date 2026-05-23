"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

interface HeroCMS { heading?: string; subheading?: string; badge?: string; ctaPrimary?: string; ctaSecondary?: string }
export function HeroSection({ cms }: { cms?: HeroCMS }) {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: "var(--color-cream)" }}
      aria-label="Welcome to Surraya"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-forest) 0, var(--color-forest) 1px, transparent 0, transparent 50%)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest border"
              style={{
                borderColor: "var(--color-gold)",
                color:       "var(--color-gold)",
                background:  "var(--color-gold-light)",
              }}
            >
              <Star size={11} fill="currentColor" aria-hidden="true" />
              {cms?.badge ?? "Kampala, Uganda"}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[1.05] tracking-tight"
            style={{ color: "var(--color-forest-deep)" }}
          >
            {cms?.heading ?? "Nurturing"}
            <span
              className="block italic"
              style={{ color: "var(--color-forest)" }}
            >
              {cms?.subheading ?? "Minds Rooted in Faith"}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-xl leading-relaxed max-w-[52ch]"
            style={{ color: "var(--color-slate)" }}
          >
            An EYFS-aligned early-years education that weaves Islamic values into
            every lesson — preparing your child to grow with knowledge, character,
            and confidence.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button
              href="/admissions"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Apply for Admission
            </Button>
            <Button href="/academics" variant="outline" size="lg">
              Our Curriculum
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-8 text-sm font-medium justify-center"
            style={{ color: "var(--color-muted)" }}
          >
            {[
              { n: "100%", l: "Faith-Centered" },
              { n: "98%",  l: "Parent Satisfaction" },
            ].map(({ n, l }) => (
              <div key={l} className="flex items-center gap-2">
                <span
                  className="text-base font-bold"
                  style={{ color: "var(--color-forest)" }}
                >
                  {n}
                </span>
                <span>{l}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="white"
        >
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
}