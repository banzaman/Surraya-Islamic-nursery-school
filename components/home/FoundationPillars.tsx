"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Slide {
  title: string;
  content: ReactNode;
}

const SLIDES: Slide[] = [
  {
    title: "About Us",
    content: (
      <div>
        <p className="mb-4 text-base leading-relaxed text-slate-700">
          Surraya Islamic Nursery School is a nurturing home for early learning, where faith, character, and curiosity grow together.
        </p>
        <p className="text-base leading-relaxed text-slate-700">
          We provide a safe, Islamic environment for children to build strong foundations in literacy, numeracy, social skills, and Deen. Through play, Quranic values, and hands-on activities like farming and football, we help every child discover their potential.
        </p>
      </div>
    ),
  },
  {
    title: "Mission",
    content: (
      <div>
        <h3 className="mb-4 text-lg font-semibold text-forest-deep">OUR SCHOOL MISSION</h3>
        <p className="text-base leading-relaxed text-slate-700">
          To empower all students to embrace learning, achieve their personal best and build their emotional, social and physical wellbeing.
        </p>
      </div>
    ),
  },
  {
    title: "Visit us",
    content: (
      <div>
        <h3 className="mb-4 text-lg font-semibold text-forest-deep">Find out more about Surraya</h3>
        <p className="mb-4 text-base leading-relaxed text-slate-700">
          Our Pupils Are:
        </p>
        <ul className="space-y-3 text-sm leading-7 text-slate-700 list-disc list-inside">
          <li>Encouraged to develop life long learning skills.</li>
          <li>Challenged academically based on their desire to learn, rather than a fear of failure.</li>
          <li>Given time and encouragement to discover and develop their talents.</li>
          <li>Encouraged to think independently, creatively and critically; to be inquisitive and to become active learners.</li>
          <li>Able to learn the value of mutual respect.</li>
          <li>Supported by a pastoral infrastructure designed to support them as an individual and help them mature into responsible citizens.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Partnership",
    content:
      "Surraya is made possible through the generous support of our dear friends in Malaysia. Their commitment to Islamic education and community development allows us to raise respectful, confident, and God-conscious leaders of tomorrow. Jazaakumullahu khairan to our Malaysian family. 🇲🇾🇺🇬",
  },
];

export function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28" style={{ background: "white" }} aria-label="About Us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Discover Surraya"
          title="About Our Nursery"
          subtitle="A welcoming place where early learning and Islamic values come together to shape the foundation of tomorrow."
        />

        <div className="mt-14">
          <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-4">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-forest ${
                  index === activeIndex
                    ? "bg-forest text-white"
                    : "bg-forest-light text-forest hover:bg-forest/10"
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>

          <motion.div
            key={SLIDES[activeIndex].title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-10 rounded-3xl border border-slate-200 bg-cream p-8 shadow-sm"
            style={{ background: "var(--color-cream)" }}
          >
            <div className="inline-flex items-center rounded-full bg-forest-light px-4 py-2 text-sm font-semibold text-forest mb-6">
              {SLIDES[activeIndex].title}
            </div>
            <div className="text-base leading-relaxed text-slate-700">
              {SLIDES[activeIndex].content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
