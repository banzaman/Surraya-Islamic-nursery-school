"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { STATS } from "@/lib/constants";

// ── Count-up hook ──────────────────────────────────────────
function useCountUp(target: string, isActive: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isActive) return;

    // Extract numeric portion and suffix (e.g. "1.2K+" → num=1200, suffix="K+")
    const raw    = target.replace(/[^0-9.]/g, "");
    const suffix = target.replace(/[0-9.]/g, "");
    const end    = parseFloat(raw);

    if (isNaN(end)) { setDisplay(target); return; }

    const duration = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = end * eased;

      // Format with original decimal structure
      const formatted = raw.includes(".")
        ? current.toFixed(1)
        : Math.round(current).toString();

      setDisplay(formatted + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isActive, target]);

  return display;
}

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-60px" });
  const counted = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      <span
        className="font-serif text-5xl lg:text-6xl leading-none"
        style={{ color: "var(--color-forest-deep)" }}
        aria-label={`${value} ${label}`}
      >
        {counted}
      </span>
      <span
        className="mt-2 text-sm font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-slate)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export function StatsCTA({ stats: cmsStats }: { stats?: typeof STATS[number][] }) {
  return (
    <>
      {/* ── Stats row ──────────────────────────────────── */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "white" }}
        aria-label="School statistics"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {(cmsStats ?? STATS).map((stat, i) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-16 lg:py-20"
        style={{ background: "var(--color-forest-deep)" }}
        aria-label="Call to action"
      >
        {/* Decorative circles */}
        <div
          className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full opacity-[0.08]"
          style={{ background: "var(--color-gold)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full opacity-[0.07]"
          style={{ background: "var(--color-gold-bright)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-gold-bright)" }}
          >
            Join Our Community
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            Begin Your Child&rsquo;s
            <br />
            <span className="italic" style={{ color: "var(--color-gold-bright)" }}>
              Journey of Faith
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-5 text-base lg:text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Applications are open for the upcoming term. Spaces are limited — secure your child&rsquo;s place today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button
              href="/admissions"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Apply Now
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Book a Visit
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
