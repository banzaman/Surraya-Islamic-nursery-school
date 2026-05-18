"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DonateHero({ cms }: { cms?: { heading?: string; subheading?: string; badge?: string } }) {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-forest-deep)" }}
      aria-label="Donate hero"
    >
      {/* Radial glow top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.09]"
        style={{ background: "var(--color-gold)" }}
        aria-hidden="true"
      />
      {/* Subtle grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 border text-xs font-bold uppercase tracking-widest"
          style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
        >
          <Heart size={12} fill="currentColor" aria-hidden="true" />
          Sadaqah Jariyah — Ongoing Charity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08]"
        >
          Support Our
          <span className="block italic" style={{ color: "var(--color-gold-bright)" }}>
            Mission
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
          className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          Every contribution — however small — plants a seed of knowledge and faith
          in a young heart. Your generosity is an investment in eternal rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
          className="mt-9 flex flex-wrap gap-4 justify-center"
        >
          <Button
            href="#donation-form"
            variant="secondary"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            Donate Now
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Talk to Us First
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
