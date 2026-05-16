"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function AdmissionsHero() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-forest-deep)" }}
      aria-label="Admissions hero"
    >
      {/* Background geometric decorations */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-[0.08]"
        style={{ background: "var(--color-gold)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-32 opacity-[0.05]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, var(--color-gold) 0, var(--color-gold) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 border text-xs font-bold uppercase tracking-widest"
          style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
        >
          <CalendarDays size={12} aria-hidden="true" />
          Admissions Open — {new Date().getFullYear()}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08]"
        >
          Embark on a
          <span className="block italic" style={{ color: "var(--color-gold-bright)" }}>
            Journey of Faith
          </span>
          and Learning
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
          className="mt-7 text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          Giving your child the gift of an education rooted in faith, curiosity, and
          character. Surraya has been shaping futures in Kampala since {SITE.founded}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
          className="mt-9 flex flex-wrap gap-4 justify-center"
        >
          <Button
            href="#"
            variant="secondary"
            size="lg"
            icon={<ArrowRight size={18} />}
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
            Book a School Tour
          </Button>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-10"
        >
          {[
            { n: "2 Levels", l: "Nursery One & Two" },
            { n: "Oct – Nov", l: "Application Window" },
            { n: "5 Days",    l: "Decision Turnaround" },
          ].map(({ n, l }) => (
            <div key={l} className="flex flex-col items-center gap-1">
              <span className="font-serif text-2xl text-white">{n}</span>
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.50)" }}>
                {l}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
