"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/constants";

type Field = "name" | "email" | "subject" | "message";

const DEFAULT_SUBJECTS = [
  "General Enquiry",
  "Admissions",
  "Fees & Payments",
  "Donation",
  "Media / Press",
  "Other",
];

const SocialSVG = ({ platform }: { platform: string }) => {
  const d: Record<string, string> = {
    Facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    Instagram:
      "M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zm4 14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8zm-8-8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5-6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">
      <path d={d[platform] ?? ""} />
    </svg>
  );
};

export function ContactForm({ subjects: cmsSubjects }: { subjects?: string[] }) {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent,   setSent]   = useState(false);

  const validate = () => {
    const e: Partial<Record<Field, string>> = {};
    if (!values.name.trim())    e.name    = "Full name is required.";
    if (!values.email.trim())   e.email   = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email)) e.email = "Enter a valid email address.";
    if (!values.subject)        e.subject = "Please select a subject.";
    if (!values.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setValues({ name: "", email: "", subject: "", message: "" });
    }
  };

  const field = (id: Field, label: string, node: React.ReactNode) => (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
        style={{ color: "var(--color-slate)" }}
      >
        {label}
      </label>
      {node}
      {errors[id] && (
        <p className="mt-1 text-xs font-medium" style={{ color: "#dc2626" }} role="alert">
          {errors[id]}
        </p>
      )}
    </div>
  );

  const inputCls = (id: Field) =>
    `w-full rounded-xl border-2 px-4 py-3 text-sm outline-none transition-colors ${
      errors[id] ? "border-red-400" : "border-[var(--color-border)] focus:border-[var(--color-forest)]"
    }`;

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "var(--color-cream)" }}
      aria-label="Contact information and form"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* ── Left: Contact info (2 cols) ─────────── */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <p
                className="mb-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--color-forest-mid)" }}
              >
                Find Us
              </p>
              <h2
                className="font-serif text-4xl lg:text-5xl"
                style={{ color: "var(--color-forest-deep)" }}
              >
                Get in
                <span className="block italic" style={{ color: "var(--color-forest)" }}>
                  Touch
                </span>
              </h2>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: "var(--color-slate)" }}
              >
                Whether you have a question about admissions, fees, or our curriculum —
                we&rsquo;re always happy to hear from you.
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  Icon:    MapPin,
                  label:   "Address",
                  value:   SITE.address,
                  href:    SITE.mapLink,
                },
                {
                  Icon:    Phone,
                  label:   "Phone",
                  value:   SITE.phone,
                  href:    `tel:${SITE.phone}`,
                },
                {
                  Icon:    Mail,
                  label:   "Email",
                  value:   SITE.email,
                  href:    `mailto:${SITE.email}`,
                },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 rounded-2xl p-4 transition-colors group"
                  style={{ background: "white", border: "1.5px solid var(--color-border)" }}
                  target={label === "Address" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={`${label}: ${value}`}
                >
                  <div
                    className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "var(--color-forest-light)", color: "var(--color-forest)" }}
                  >
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="mt-0.5 text-sm font-medium group-hover:underline"
                      style={{ color: "var(--color-forest-deep)" }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p
                className="mb-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--color-muted)" }}
              >
                Follow Us
              </p>
              <div className="flex gap-3">
                {["Facebook", "Instagram"].map((p) => (
                  <a
                    key={p}
                    href="#"
                    aria-label={p}
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
                    style={{ background: "var(--color-forest-light)", color: "var(--color-forest)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialSVG platform={p} />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* ── Right: Form (3 cols) ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" as const }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-7 lg:p-9"
              style={{ background: "white", border: "1.5px solid var(--color-border)" }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <CheckCircle2
                    size={48}
                    strokeWidth={1.5}
                    style={{ color: "var(--color-forest)" }}
                  />
                  <h3 className="font-serif text-2xl" style={{ color: "var(--color-forest-deep)" }}>
                    Message Received!
                  </h3>
                  <p className="text-sm max-w-xs" style={{ color: "var(--color-slate)" }}>
                    We&rsquo;ll get back to you within 1–2 business days. JazakAllahu Khayran.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-sm font-semibold underline"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {field(
                      "name",
                      "Full Name",
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Aisha Kamau"
                        value={values.name}
                        onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                        className={inputCls("name")}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />,
                    )}
                    {field(
                      "email",
                      "Email Address",
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                        className={inputCls("email")}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                      />,
                    )}
                  </div>

                  {field(
                    "subject",
                    "Subject",
                    <select
                      id="subject"
                      value={values.subject}
                      onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
                      className={`${inputCls("subject")} appearance-none cursor-pointer`}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                    >
                      <option value="" disabled>Select a subject…</option>
                      {(cmsSubjects ?? DEFAULT_SUBJECTS).map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>,
                  )}

                  {field(
                    "message",
                    "Message",
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Write your message here…"
                      value={values.message}
                      onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                      className={`${inputCls("message")} resize-none`}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    />,
                  )}

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-xl py-4 text-base font-bold transition-all duration-200 active:scale-[0.98]"
                    style={{ background: "var(--color-forest)", color: "white" }}
                  >
                    <Send size={17} aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* ── Google Maps Embed ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
          className="mt-14 rounded-3xl overflow-hidden"
          style={{
            height: "340px",
            border: "1.5px solid var(--color-border)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63835.93764530689!2d32.485048921679684!3d0.34473310000000207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb136a069f91%3A0xdb01d8b5dcf163d1!2sSURRAYA%20ISLAMIC%20NURSERY%20SCHOOL!5e0!3m2!1sen!2sug!4v1779476190025!5m2!1sen!2sug"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Surraya Islamic Nursery School location"
          />
        </motion.div>
      </div>
    </section>
  );
}
