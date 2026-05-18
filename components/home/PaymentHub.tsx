"use client";

import { motion } from "framer-motion";
import { CreditCard, Building2, Users, ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PAYMENT_CARDS } from "@/lib/constants";
import type { ElementType } from "react";

// Icon map keyed by card title — works for both hardcoded and CMS data
const ICON_MAP: Record<string, ElementType> = {
  "Tuition Fees":     CreditCard,
  "Development Fund": Building2,
  "Alumni Support":   Users,
};

interface PaymentCard {
  title:       string;
  description: string;
  badge?:      string | null;
  highlight?:  boolean;
  ctaLabel?:   string;
  ctaHref?:    string;
}

export function PaymentHub({ cards: cmsCards }: { cards?: PaymentCard[] }) {
  const cards: PaymentCard[] = (cmsCards ?? PAYMENT_CARDS as unknown as PaymentCard[]);

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "var(--color-forest)" }}
      aria-label="Payment and Donation Hub"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-10"
        style={{ background: "var(--color-gold)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full opacity-10"
        style={{ background: "var(--color-gold-bright)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Payment & Giving"
          title="Invest in Growing Minds"
          subtitle="From tuition to development, every contribution strengthens our community and our children's future."
          light
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {cards.map((card, i) => {
            const Icon = ICON_MAP[card.title] ?? Building2;
            const highlight = card.highlight ?? false;
            const href = card.ctaHref ?? (highlight ? "/donate" : "/contact");
            const ctaLabel = card.ctaLabel ?? (highlight ? "Donate Today" : "Learn More");

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" as const }}
                className={`relative flex flex-col rounded-2xl p-7 lg:p-8 ${highlight ? "shadow-2xl shadow-black/30" : ""}`}
                style={
                  highlight
                    ? { background: "white" }
                    : { background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }
                }
              >
                {card.badge && (
                  <span
                    className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    style={{ background: "var(--color-gold)", color: "var(--color-forest-deep)" }}
                  >
                    <Sparkles size={10} aria-hidden="true" />
                    {card.badge}
                  </span>
                )}

                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={
                    highlight
                      ? { background: "var(--color-forest-light)", color: "var(--color-forest)" }
                      : { background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }
                  }
                >
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <h3
                  className="font-serif text-xl mb-2"
                  style={{ color: highlight ? "var(--color-forest-deep)" : "white" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: highlight ? "var(--color-slate)" : "rgba(255,255,255,0.72)" }}
                >
                  {card.description}
                </p>

                <div className="mt-6">
                  <Button
                    href={href}
                    variant={highlight ? "primary" : "outline"}
                    size="sm"
                    icon={<ArrowRight size={15} />}
                    iconPosition="right"
                    className={highlight ? "" : "border-white/30 text-white hover:bg-white/10"}
                  >
                    {ctaLabel}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
