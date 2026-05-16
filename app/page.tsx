import type { Metadata } from "next";
import { HeroSection }       from "@/components/home/HeroSection";
import { FoundationPillars } from "@/components/home/FoundationPillars";
import { PaymentHub }        from "@/components/home/PaymentHub";
import { GalleryPreview }    from "@/components/home/GalleryPreview";
import { StatsCTA }          from "@/components/home/StatsCTA";

export const metadata: Metadata = {
  title: "Surraya Islamic Nursery School — Nurturing Minds, Rooted in Faith",
  description:
    "An EYFS-aligned early-years education that weaves Islamic values into every lesson. Serving Kampala families since 2009.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FoundationPillars />
      <PaymentHub />
      <GalleryPreview />
      <StatsCTA />
    </>
  );
}
