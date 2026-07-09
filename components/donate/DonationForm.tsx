"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Lock } from "lucide-react";

type Frequency  = "one-time" | "monthly";
type Designation = "General Fund" | "Scholarship Fund" | "Facility Development" | "Library & Resources" | "Teacher Training" | "KORBAN";

const DEFAULT_PRESETS = [25, 50, 100, 250, 500];
const DESIGNATIONS: Designation[] = [
  "General Fund",
  "Scholarship Fund",
  "Facility Development",
  "Library & Resources",
  "Teacher Training",
  "KORBAN",
];

const HADITH =
  "When a person dies, all their deeds end except three: a continuing charity, beneficial knowledge, or a righteous child who prays for them.";

export function DonationForm({ cms }: { cms?: { hadith?: string; hadithSource?: string; presetAmounts?: number[]; impactBullets?: any[] } }) {
  const [frequency,    setFrequency]    = useState<Frequency>("one-time");
  const [preset,       setPreset]       = useState<number | null>(50);
  const [custom,       setCustom]       = useState("");
  const [designation,  setDesignation]  = useState<Designation>("General Fund");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"airtel" | "mtn" | "paypal" | "bank" | null>(null);

  const displayAmount = custom ? `$${custom}` : preset ? `$${preset}` : "$0";

  const handlePreset = (amount: number) => {
    setPreset(amount);
    setCustom("");
  };

  const handleCustom = (val: string) => {
    setCustom(val.replace(/[^0-9]/g, ""));
    setPreset(null);
  };

  const handleDonateClick = () => {
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedPaymentMethod(null);
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
                { n: "30k", l: "supports the one-time registration fee (UGX 30,000 / $7.92)" },
                { n: "370k", l: "covers tuition for one term (UGX 370,000 / $97.69)" },
                { n: "200k", l: "helps with the annual school uniform fee (UGX 200,000 / $52.80)" },
              ].map(({ n, l }) => (
                <li key={n} className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-0.5 inline-flex min-w-[4.5rem] items-center justify-center rounded-full px-2 py-1 text-[10px] font-bold"
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
              <form noValidate aria-label="Donation form">
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
                    {(cms?.presetAmounts ?? DEFAULT_PRESETS).map((amount) => (
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
                  type="button"
                  onClick={handleDonateClick}
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

              {showPaymentModal && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="payment-modal-title"
                  onClick={closePaymentModal}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" as const }}
                    className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          id="payment-modal-title"
                          className="text-sm font-semibold uppercase tracking-[0.2em]"
                          style={{ color: "var(--color-forest-deep)" }}
                        >
                          Choose your donation method
                        </p>
                        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                          You are donating {displayAmount} for {designation}. Choose a payment option below.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={closePaymentModal}
                        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        Close
                      </button>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPaymentMethod("airtel")}
                        className="rounded-2xl border px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                        style={{
                          background: selectedPaymentMethod === "airtel" ? "linear-gradient(135deg, #e8f7ef, #d8efe3)" : "#f3fbf6",
                          borderColor: selectedPaymentMethod === "airtel" ? "var(--color-forest)" : "#b8d9c3",
                          boxShadow: selectedPaymentMethod === "airtel" ? "0 0 0 2px rgba(21, 85, 57, 0.18), 0 12px 24px rgba(21, 85, 57, 0.12)" : "0 8px 20px rgba(21, 85, 57, 0.08)",
                        }}
                      >
                        <p className="text-base font-bold text-slate-900">Mobile money (Airtel)</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          tap to see Airtel payment instructions and complete the transfer inside your mobile money app.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedPaymentMethod("mtn")}
                        className="rounded-2xl border px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                        style={{
                          background: selectedPaymentMethod === "mtn" ? "linear-gradient(135deg, #e8f7ef, #d8efe3)" : "#f3fbf6",
                          borderColor: selectedPaymentMethod === "mtn" ? "var(--color-forest)" : "#b8d9c3",
                          boxShadow: selectedPaymentMethod === "mtn" ? "0 0 0 2px rgba(21, 85, 57, 0.18), 0 12px 24px rgba(21, 85, 57, 0.12)" : "0 8px 20px rgba(21, 85, 57, 0.08)",
                        }}
                      >
                        <p className="text-base font-bold text-slate-900">Mobile money (MTN)</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          tap to see MTN payment instructions and complete the transfer inside your mobile money app.
                        </p>
                      </button>

                      <a
                        href="https://www.paypal.com/donate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                        style={{
                          background: selectedPaymentMethod === "paypal" ? "linear-gradient(135deg, #e8f7ef, #d8efe3)" : "#f3fbf6",
                          borderColor: selectedPaymentMethod === "paypal" ? "var(--color-forest)" : "#b8d9c3",
                          boxShadow: selectedPaymentMethod === "paypal" ? "0 0 0 2px rgba(21, 85, 57, 0.18), 0 12px 24px rgba(21, 85, 57, 0.12)" : "0 8px 20px rgba(21, 85, 57, 0.08)",
                        }}
                        onClick={() => setSelectedPaymentMethod("paypal")}
                      >
                        <p className="text-base font-bold text-slate-900">PayPal</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          open PayPal in a new tab and complete your donation securely.
                        </p>
                      </a>

                      <a
                        href="#bank-transfer-details"
                        className="rounded-2xl border px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                        style={{
                          background: selectedPaymentMethod === "bank" ? "linear-gradient(135deg, #e8f7ef, #d8efe3)" : "#f3fbf6",
                          borderColor: selectedPaymentMethod === "bank" ? "var(--color-forest)" : "#b8d9c3",
                          boxShadow: selectedPaymentMethod === "bank" ? "0 0 0 2px rgba(21, 85, 57, 0.18), 0 12px 24px rgba(21, 85, 57, 0.12)" : "0 8px 20px rgba(21, 85, 57, 0.08)",
                        }}
                        onClick={() => setSelectedPaymentMethod("bank")}
                      >
                        <p className="text-base font-bold text-slate-900">Bank transfer</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          view the simple bank transfer details and reference instructions below.
                        </p>
                      </a>
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      {selectedPaymentMethod === "airtel" && (
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "var(--color-forest-deep)" }}>
                            Airtel Money instructions
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-700">
                            Open your Airtel Money app, choose <span className="font-semibold">Send Money</span>, enter the amount, and send it to the school’s Airtel account. Use the reference <span className="font-semibold">{designation}</span>.
                          </p>
                        </div>
                      )}

                      {selectedPaymentMethod === "mtn" && (
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "var(--color-forest-deep)" }}>
                            MTN Mobile Money instructions
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-700">
                            Open your MTN Mobile Money app, choose <span className="font-semibold">Pay</span> or <span className="font-semibold">Send Money</span>, enter the amount, and send it to the school’s MTN account. Use the reference <span className="font-semibold">{designation}</span>.
                          </p>
                        </div>
                      )}

                      {selectedPaymentMethod === "paypal" && (
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "var(--color-forest-deep)" }}>
                            PayPal
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-700">
                            You will be taken to PayPal to complete the donation securely. Your selected amount is <span className="font-semibold">{displayAmount}</span>.
                          </p>
                        </div>
                      )}

                      {selectedPaymentMethod === "bank" && (
                        <div id="bank-transfer-details">
                          <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "var(--color-forest-deep)" }}>
                            Bank transfer details
                          </p>
                          <div className="mt-3 space-y-2 text-sm text-slate-700">
                            <p><span className="font-semibold">Bank:</span> Add your bank name here</p>
                            <p><span className="font-semibold">Account name:</span> Surraya Islamic Nursery School</p>
                            <p><span className="font-semibold">Account number:</span> Add your account number here</p>
                            <p><span className="font-semibold">Reference:</span> {designation} — {displayAmount}</p>
                          </div>
                        </div>
                      )}

                      {!selectedPaymentMethod && (
                        <p className="text-sm leading-relaxed text-slate-700">
                          Select a payment option above to view the corresponding instructions.
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
