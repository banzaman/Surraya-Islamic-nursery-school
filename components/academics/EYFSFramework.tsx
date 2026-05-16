"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Users, Puzzle, Leaf } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const AREAS = [
  {
    icon:        Brain,
    title:       "Communication & Language",
    description: "Children develop the ability to listen attentively, understand, and use language richly — the bedrock of all learning.",
    size:        "large",   // col-span-2 row-span-2
    accent:      "forest",
  },
  {
    icon:        Leaf,
    title:       "Personal, Social & Emotional Development",
    description: "Building self-confidence, resilience, and the social skills to thrive in a community.",
    size:        "highlight", // normal size but visually elevated
    accent:      "gold",
  },
  {
    icon:        Puzzle,
    title:       "Mathematics",
    description: "Exploring numbers, shapes, and patterns through hands-on play and structured activities.",
    size:        "small",
    accent:      "forest",
  },
  {
    icon:        MessageSquare,
    title:       "Literacy",
    description: "Laying foundations in reading and writing through stories, phonics, and rich language environments.",
    size:        "small",
    accent:      "forest",
  },
  {
    icon:        Users,
    title:       "Understanding the World",
    description: "Connecting children to their community, the natural world, and the diversity of human experience.",
    size:        "small",
    accent:      "forest",
  },
];

function AreaCard({
  area,
  index,
}: {
  area: (typeof AREAS)[number];
  index: number;
}) {
  const Icon = area.icon;
  const isGold = area.accent === "gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" as const }}
      className={`rounded-2xl p-6 lg:p-7 flex flex-col ${
        area.size === "large"
          ? "lg:col-span-2 lg:row-span-2 lg:p-10"
          : area.size === "highlight"
          ? "ring-2"
          : ""
      }`}
      style={
        area.size === "large"
          ? { background: "var(--color-forest)", color: "white" }
          : area.size === "highlight"
          ? {
              background: "var(--color-gold-light)",
              border:     "2px solid var(--color-gold)",
            }
          : { background: "white", border: "1.5px solid var(--color-border)" }
      }
    >
      <div
        className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
        style={
          area.size === "large"
            ? { background: "rgba(255,255,255,0.15)", color: "white" }
            : isGold
            ? { background: "var(--color-gold)", color: "var(--color-forest-deep)" }
            : { background: "var(--color-forest-light)", color: "var(--color-forest)" }
        }
      >
        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <h3
        className={`font-serif mb-2 ${area.size === "large" ? "text-3xl" : "text-xl"}`}
        style={{
          color:
            area.size === "large"
              ? "white"
              : isGold
              ? "var(--color-forest-deep)"
              : "var(--color-forest-deep)",
        }}
      >
        {area.title}
      </h3>
      <p
        className={`leading-relaxed ${area.size === "large" ? "text-base mt-2 max-w-[38ch]" : "text-sm"}`}
        style={{
          color:
            area.size === "large"
              ? "rgba(255,255,255,0.75)"
              : "var(--color-slate)",
        }}
      >
        {area.description}
      </p>
    </motion.div>
  );
}

export function EYFSFramework() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-sand)" }}
      aria-label="EYFS Framework"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="EYFS Framework"
          title="Five Areas of Learning"
          subtitle="We follow the Early Years Foundation Stage framework, enriched with Islamic values, to give every child a strong start."
        />

        {/* Mixed grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 lg:grid-rows-[auto_auto]">
          {AREAS.map((area, i) => (
            <AreaCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
