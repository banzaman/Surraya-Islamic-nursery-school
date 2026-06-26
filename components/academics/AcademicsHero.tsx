"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const BADGES = ["EYFS Aligned", "100% Faith-Centered", "Holistic Learning"];

export function AcademicsHero({ cms }: { cms?: { heading?: string; subheading?: string; badges?: string[] } }) {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "var(--color-cream)" }}
      aria-label="Academics hero"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(var(--color-forest) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-forest-mid)" }}>
              Academics
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl leading-[1.08]" style={{ color: "var(--color-forest-deep)" }}>
              An Academic Journey
              <span className="block italic" style={{ color: "var(--color-forest)" }}>
                Guided by Faith
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed max-w-[44ch]" style={{ color: "var(--color-slate)" }}>
              Our curriculum marries the rigour of the EYFS framework with deep Islamic
              values — cultivating curious, confident, and compassionate young learners.
            </p>

            <ul className="mt-7 flex flex-col gap-2.5" role="list">
              {BADGES.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} strokeWidth={2} style={{ color: "var(--color-forest)" }} aria-hidden="true" />
                  <span className="text-sm font-medium" style={{ color: "var(--color-slate)" }}>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/admissions" variant="primary" size="lg">Apply for Admission</Button>
              <Button href="/contact"    variant="outline" size="lg">Schedule a Visit</Button>
            </div>
          </motion.div>

          {/* Right: photo + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/home/IMG-20260513-WA0006.jpg"
                alt="Learning environment at Surraya"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div
              className="absolute -bottom-5 -left-5 flex flex-col items-center justify-center h-28 w-28 rounded-full shadow-xl"
              style={{ background: "var(--color-forest)", color: "white" }}
            >
              <span className="font-serif text-3xl leading-none">100%</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-center leading-tight px-3 opacity-80">
                Faith Centered
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}