import type { Metadata } from "next";
import { SITE, STATS, PILLARS, PAYMENT_CARDS } from "@/lib/constants";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutUs }      from "@/components/home/FoundationPillars";
import { PaymentHub }   from "@/components/home/PaymentHub";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { StatsCTA }     from "@/components/home/StatsCTA";

export const metadata: Metadata = {
  title:       `${SITE.name} – ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    title:       `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    url:         SITE.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <PaymentHub        cards={[...PAYMENT_CARDS]} />
      <GalleryPreview />
      <StatsCTA          stats={[...STATS]} />
    </>
  );
}