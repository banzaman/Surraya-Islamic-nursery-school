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

const GRID_PHOTOS = [
  { label: "Morning Circle",  span: "row-span-2", bg: "from-forest/20 to-forest/40",    imageSrc: "/home/IMG-20260513-WA0006.jpg" },
  { label: "Quran Reading",   span: "",           bg: "from-gold/20 to-gold/40",         imageSrc: "/home/IMG-20260513-WA0009.jpg" },
  { label: "Creative Arts",   span: "",           bg: "from-forest-mid/20 to-forest/30", imageSrc: "/home/IMG-20260513-WA0011.jpg" },
  { label: "Outdoor Play",    span: "col-span-2", bg: "from-sand to-forest-light",       imageSrc: "/home/IMG-20260513-WA0015.jpg" },
];

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

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ΓöÇΓöÇ Left: Copy ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} className="mb-6 self-start">
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
              className="font-serif text-5xl sm:text-6xl lg:text-[3.75rem] xl:text-7xl leading-[1.08] tracking-tight"
              style={{ color: "var(--color-forest-deep)" }}
            >
              {cms?.heading ?? "Building"}
              <span
                className="block italic"
                style={{ color: "var(--color-forest)" }}
              >
                {cms?.subheading ?? "the foundation of tomorrow"}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed max-w-[42ch]"
              style={{ color: "var(--color-slate)" }}
            >
              An EYFS-aligned early-years education that weaves Islamic values into
              every lesson and preparing your child to grow with knowledge, character,
              and confidence.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
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
              className="mt-10 flex flex-wrap gap-6 text-sm font-medium"
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

          {/* ΓöÇΓöÇ Right: Photo grid ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:grid grid-cols-2 grid-rows-3 gap-3 h-[520px]"
            aria-hidden="true"
          >
            {GRID_PHOTOS.map(({ label, span, bg, imageSrc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className={`relative rounded-2xl overflow-hidden flex items-end p-3 bg-gradient-to-br ${bg} ${span}`}
              >
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={label}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                )}
                <span
                  className="relative text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    color: "var(--color-forest-deep)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
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
