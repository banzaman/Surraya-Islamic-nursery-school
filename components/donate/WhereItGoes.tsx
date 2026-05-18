"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Wrench, Wifi, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CAUSES = [
  {
    icon:        GraduationCap,
    title:       "Scholarship Fund",
    description: "Ensuring no deserving child is turned away due to financial hardship. We subsidise fees for families in need.",
    progress:    68,
    goal:        "$10,000",
    raised:      "$6,800",
    color:       "gold",
    featured:    true,
  },
  {
    icon:        BookOpen,
    title:       "Library & Resources",
    description: "Expanding our collection of Islamic and EYFS-aligned books, learning kits, and manipulatives.",
    progress:    null,
    goal:        null,
    raised:      null,
    color:       "forest",
    featured:    false,
  },
  {
    icon:        Wrench,
    title:       "Facility Development",
    description: "Building new classrooms, upgrading outdoor play areas, and improving safety infrastructure.",
    progress:    null,
    goal:        null,
    raised:      null,
    color:       "forest",
    featured:    false,
  },
  {
    icon:        Wifi,
    title:       "Digital Learning",
    description: "Equipping classrooms with tablets, interactive boards, and safe, supervised learning technology.",
    progress:    null,
    goal:        null,
    raised:      null,
    color:       "forest",
    featured:    false,
  },
  {
    icon:        Users,
    title:       "Teacher Training",
    description: "Funding professional development, EYFS certification, and Islamic pedagogy workshops for our educators.",
    progress:    null,
    goal:        null,
    raised:      null,
    color:       "forest",
    featured:    false,
  },
];

function ProgressBar({ percent }: { percent: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setWidth(percent), 120);
      return () => clearTimeout(timeout);
    }
  }, [inView, percent]);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-xs font-semibold mb-1.5">
        <span style={{ color: "var(--color-forest-deep)" }}>Raised: {CAUSES[0].raised}</span>
        <span style={{ color: "var(--color-muted)" }}>Goal: {CAUSES[0].goal}</span>
      </div>
      <div
        className="h-2 w-full rounded-full overflow-hidden"
        style={{ background: "var(--color-sand)" }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${percent}% of goal raised`}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width:      `${width}%`,
            background: "var(--color-gold)",
          }}
        />
      </div>
      <p
        className="mt-1.5 text-xs text-right font-bold"
        style={{ color: "var(--color-gold)" }}
      >
        {percent}% funded
      </p>
    </div>
  );
}

export function WhereItGoes({ causes: cmsCauses }: { causes?: typeof CAUSES[number][] }) {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-cream)" }}
      aria-label="Where your donation goes"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Your Impact"
          title="Where Your Donation Goes"
          subtitle="Every dollar is directed to a specific cause. We publish annual impact reports so you always know how your generosity is used."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {(cmsCauses ?? CAUSES).map((cause, i) => {
            const Icon = cause.icon;
            const isGold = cause.color === "gold";
            return (
              <motion.div
                key={cause.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                className={`rounded-2xl p-6 lg:p-7 flex flex-col ${
                  cause.featured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                style={
                  cause.featured
                    ? { background: "var(--color-gold-light)", border: "2px solid var(--color-gold)" }
                    : { background: "white", border: "1.5px solid var(--color-border)" }
                }
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={
                    isGold
                      ? { background: "var(--color-gold)", color: "var(--color-forest-deep)" }
                      : { background: "var(--color-forest-light)", color: "var(--color-forest)" }
                  }
                >
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <h3
                  className="font-serif text-xl mb-2"
                  style={{ color: "var(--color-forest-deep)" }}
                >
                  {cause.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-4"
                  style={{ color: "var(--color-slate)" }}
                >
                  {cause.description}
                </p>

                {cause.progress !== null && (
                  <ProgressBar percent={cause.progress} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
