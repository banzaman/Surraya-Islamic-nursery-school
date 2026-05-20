"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FAQS = [
  {
    id:       "faq-1",
    question: "What are the school hours at Surraya?",
    answer:
      "School runs from 7:30 AM to 1:30 PM, Monday to Friday. We also offer an optional extended care programme from 1:30 PM to 4:00 PM for families who need it. Morning drop-off begins at 7:15 AM.",
  },
  {
    id:       "faq-2",
    question: "Do you accept children who are not Muslim?",
    answer:
      "Surraya is an Islamic nursery school rooted in faith-centred values. Our curriculum integrates Islamic studies, Quranic recitation, and Islamic manners into every aspect of the day. We warmly welcome families who are comfortable with and supportive of this environment, regardless of their background.",
  },
  {
    id:       "faq-3",
    question: "Is there a waiting list, and how far in advance should I apply?",
    answer:
      "Yes — our classes fill quickly, especially Nursery Two. We recommend applying at least one full term before your preferred start date. Applications open in October for the following academic year. Contact our admissions team early to discuss availability.",
  },
  {
    id:       "faq-4",
    question: "What meals and snacks are provided at school?",
    answer:
      "We provide a healthy mid-morning snack each day. All food served at Surraya is 100% halal. Families are welcome to send a packed lunch for children in the extended care programme. We are a nut-free school — please check your child's lunchbox carefully.",
  },
];

export function FAQSection({ faqs: cmsFaqs }: { faqs?: typeof FAQS[number][] }) {
  const activeFaqs = cmsFaqs?.map((f, i) => ({ ...f, id: `faq-cms-${i}` })) ?? FAQS;
  const [openId, setOpenId] = useState<string | null>(activeFaqs[0]?.id ?? null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "white" }}
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Can't find what you're looking for? Send us a message and we'll get back to you within 1–2 business days."
        />

        <div className="mt-12 flex flex-col gap-3" role="list">
          {activeFaqs.map((faq, i) => {
            const isOpen    = openId === faq.id;
            const panelId   = `${faq.id}-panel`;
            const triggerId = `${faq.id}-trigger`;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.09, duration: 0.45, ease: "easeOut" as const }}
                className="rounded-2xl overflow-hidden"
                style={{
                  border:     isOpen ? "2px solid var(--color-forest)" : "1.5px solid var(--color-border)",
                  background: isOpen ? "var(--color-forest-light)" : "white",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                role="listitem"
              >
                {/* Trigger */}
                <button
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className="font-semibold text-base leading-snug"
                    style={{ color: isOpen ? "var(--color-forest-deep)" : "var(--color-ink)" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200"
                    style={{
                      background: isOpen ? "var(--color-forest)"       : "var(--color-sand)",
                      color:      isOpen ? "white"                     : "var(--color-slate)",
                    }}
                    aria-hidden="true"
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ display: "flex" }}
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </span>
                </button>

                {/* Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="px-6 pb-5 text-sm leading-relaxed"
                        style={{ color: "var(--color-slate)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.45 }}
          className="mt-10 rounded-2xl p-6 text-center"
          style={{ background: "var(--color-sand)", border: "1.5px solid var(--color-border)" }}
        >
          <p className="text-sm font-medium" style={{ color: "var(--color-slate)" }}>
            Still have a question?{" "}
            <a
              href={`mailto:${FAQS[0].id}`}
              className="font-semibold underline"
              style={{ color: "var(--color-forest)" }}
            >
              Email us directly
            </a>{" "}
            and we&rsquo;ll respond within 1–2 business days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
