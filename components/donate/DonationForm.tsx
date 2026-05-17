"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Lock } from "lucide-react";

type Frequency  = "one-time" | "monthly";
type Designation = "General Fund" | "Scholarship Fund" | "Facility Development" | "Library & Resources" | "Teacher Training";

const PRESET_AMOUNTS = [25, 50, 100, 250, 500];
const DESIGNATIONS: Designation[] = [
  "General Fund",
  "Scholarship Fund",
  "Facility Development",
  "Library & Resources",
  "Teacher Training",
];

const HADITH =
  "When a person dies, all their deeds end except three: a continuing charity, beneficial knowledge, or a righteous child who prays for them.";

export function DonationForm() {
  const [frequency,    setFrequency]    = useState<Frequency>("one-time");
  const [preset,       setPreset]       = useState<number | null>(50);
  const [custom,       setCustom]       = useState("");
  const [designation,  setDesignation]  = useState<Designation>("General Fund");
  const [submitted,    setSubmitted]    = useState(false);

  const displayAmount = custom ? `$${custom}` : preset ? `$${preset}` : "$0";

  const handlePreset = (amount: number) => {
    setPreset(amount);
    setCustom("");
  };

  const handleCustom = (val: string) => {
    setCustom(val.replace(/[^0-9]/g, ""));
    setPreset(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="donation-form"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "var(--color-forest-deep)" }}
      aria-label="Donation form"
    >
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full opacity-[0.07]"
        style={{ background: "var(--color-gold)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full opacity-[0.07]"
        style={{ background: "var(--color-gold-bright)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Hadith + context ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <p
              className="mb-4 text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--color-gold-bright)" }}
            >
              Invest in Eternal Rewards
            </p>
            <h2
              className="font-serif text-4xl lg:text-5xl text-white leading-tight"
            >
              Your Gift Outlasts
              <span className="block italic" style={{ color: "var(--color-gold-bright)" }}>
                a Lifetime
              </span>
            </h2>

            {/* Hadith blockquote */}
            <blockquote
              className="mt-8 rounded-2xl p-6 border-l-4"
              style={{
                background:   "rgba(255,255,255,0.07)",
                borderColor:  "var(--color-gold)",
              }}
            >
              <p
                className="font-serif text-lg italic leading-relaxed text-white"
              >
                &ldquo;{HADITH}&rdquo;
              </p>
              <footer
                className="mt-3 text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--color-gold-bright)" }}
              >
                — Prophet Muhammad ﷺ (Muslim)
              </footer>
            </blockquote>

            {/* Impact bullets */}
            <ul className="mt-8 flex flex-col gap-4">
              {[
                { n: "$25",  l: "covers one child's learning materials for a month" },
                { n: "$100", l: "funds a week of Tajweed instruction for a full class" },
                { n: "$500", l: "sponsors a term's scholarship for a child in need" },
              ].map(({ n, l }) => (
                <li key={n} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-0.5 inline-flex h-6 w-14 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: "var(--color-gold)", color: "var(--color-forest-deep)" }}
                  >
                    {n}
                  </span>
                  <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.70)" }}>
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: Form ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          >
            <div
              className="rounded-2xl p-7 lg:p-9"
              style={{ background: "white" }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: "var(--color-forest-light)" }}
                  >
                    <Heart size={28} style={{ color: "var(--color-forest)" }} fill="currentColor" />
                  </div>
                  <h3 className="font-serif text-2xl" style={{ color: "var(--color-forest-deep)" }}>
                    JazakAllahu Khayran!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-slate)" }}>
                    Thank you for your generous donation of {displayAmount}. May Allah accept it as sadaqah jariyah.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Donation form">
                  {/* Frequency toggle */}
                  <div className="mb-6">
                    <p
                      className="mb-2 text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-slate)" }}
                    >
                      Donation Type
                    </p>
                    <div
                      className="inline-flex rounded-full p-1"
                      style={{ background: "var(--color-sand)" }}
                      role="radiogroup"
                      aria-label="Donation frequency"
                    >
                      {(["one-time", "monthly"] as Frequency[]).map((f) => (
                        <button
                          key={f}
                          type="button"
                          role="radio"
                          aria-checked={frequency === f}
                          onClick={() => setFrequency(f)}
                          className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
                          style={
                            frequency === f
                              ? { background: "var(--color-forest)", color: "white" }
                              : { background: "transparent", color: "var(--color-slate)" }
                          }
                        >
                          {f === "one-time" ? "One-Time" : "Monthly"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preset amounts */}
                  <div className="mb-4">
                    <p
                      className="mb-2 text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-slate)" }}
                    >
                      Select Amount
                    </p>
                    <div className="grid grid-cols-5 gap-2" role="group" aria-label="Preset donation amounts">
                      {PRESET_AMOUNTS.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          aria-pressed={preset === amount}
                          onClick={() => handlePreset(amount)}
                          className="rounded-xl py-2.5 text-sm font-bold transition-all duration-200 border-2"
                          style={
                            preset === amount
                              ? {
                                  background:   "var(--color-forest)",
                                  borderColor:  "var(--color-forest)",
                                  color:        "white",
                                  transform:    "scale(1.05)",
                                }
                              : {
                                  background:  "transparent",
                                  borderColor: "var(--color-border)",
                                  color:       "var(--color-slate)",
                                }
                          }
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom amount */}
                  <div className="mb-5">
                    <label
                      htmlFor="custom-amount"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-slate)" }}
                    >
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span
                        className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold"
                        style={{ color: "var(--color-slate)" }}
                        aria-hidden="true"
                      >
                        $
                      </span>
                      <input
                        id="custom-amount"
                        type="text"
                        inputMode="numeric"
                        placeholder="Other amount"
                        value={custom}
                        onChange={(e) => handleCustom(e.target.value)}
                        className="w-full rounded-xl border-2 pl-8 pr-4 py-3 text-sm outline-none transition-colors"
                        style={{
                          borderColor: custom ? "var(--color-forest)" : "var(--color-border)",
                          color:       "var(--color-ink)",
                        }}
                        aria-label="Custom donation amount in dollars"
                      />
                    </div>
                  </div>

                  {/* Designation */}
                  <div className="mb-7">
                    <label
                      htmlFor="designation"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-slate)" }}
                    >
                      Direct My Gift To
                    </label>
                    <select
                      id="designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value as Designation)}
                      className="w-full rounded-xl border-2 px-4 py-3 text-sm outline-none appearance-none cursor-pointer"
                      style={{
                        borderColor: "var(--color-border)",
                        color:       "var(--color-ink)",
                        background:  "white",
                      }}
                    >
                      {DESIGNATIONS.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Summary + submit */}
                  <div
                    className="mb-4 flex items-center justify-between rounded-xl px-4 py-3"
                    style={{ background: "var(--color-forest-light)" }}
                    aria-live="polite"
                  >
                    <span className="text-sm font-medium" style={{ color: "var(--color-forest)" }}>
                      {frequency === "monthly" ? "Monthly" : "One-time"} to {designation}
                    </span>
                    <span className="font-serif text-2xl" style={{ color: "var(--color-forest-deep)" }}>
                      {displayAmount}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl py-4 text-base font-bold transition-all duration-200 active:scale-[0.98]"
                    style={{ background: "var(--color-forest)", color: "white" }}
                  >
                    <Heart size={17} aria-hidden="true" />
                    Donate {displayAmount}
                    {frequency === "monthly" ? " / Month" : ""}
                  </button>

                  {/* Security note */}
                  <p
                    className="mt-3 flex items-center justify-center gap-1.5 text-xs"
                    style={{ color: "var(--color-muted)" }}
                  >
                    <Lock size={11} aria-hidden="true" />
                    Secure & encrypted payment processing
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
