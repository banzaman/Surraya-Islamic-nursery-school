import type { Metadata } from "next";
import { SITE }             from "@/lib/constants";
import { sanityFetch }      from "@/sanity/lib/fetch";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection }  from "@/components/contact/FAQSection";

export const revalidate = 60;

const title       = "Contact Us — Get in Touch";
const description = `Reach out to Surraya Islamic Nursery School. Visit us at ${SITE.address}, call ${SITE.phone}, or send a message online.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${SITE.url}/contact` },
};

export default async function ContactPage() {
  const cms = await sanityFetch<any>(CONTACT_PAGE_QUERY);

  return (
    <>
      <div
        className="py-16 lg:py-20 text-center"
        style={{ background: "var(--color-forest-deep)" }}
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-widest"
           style={{ color: "var(--color-gold-bright)" }}>
          We&rsquo;d love to hear from you
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl text-white leading-tight">
          {cms?.intro?.heading ?? "Get in Touch"}
        </h1>
      </div>
      <ContactForm subjects={cms?.formSubjects} />
      <FAQSection  faqs={cms?.faqs} />
    </>
  );
}
