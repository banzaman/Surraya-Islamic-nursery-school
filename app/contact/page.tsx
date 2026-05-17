import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection }  from "@/components/contact/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Surraya Islamic Nursery School. Find our address, phone, and email, or send us a message directly.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div
        className="py-16 lg:py-20 text-center"
        style={{ background: "var(--color-forest-deep)" }}
      >
        <p
          className="mb-3 text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--color-gold-bright)" }}
        >
          We&rsquo;d love to hear from you
        </p>
        <h1
          className="font-serif text-5xl sm:text-6xl text-white leading-tight"
        >
          Get in Touch
        </h1>
      </div>
      <ContactForm />
      <FAQSection />
    </>
  );
}
