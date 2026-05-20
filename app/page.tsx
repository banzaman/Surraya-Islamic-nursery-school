import type { Metadata } from "next";
import { SITE, STATS, PILLARS, PAYMENT_CARDS } from "@/lib/constants";
import { sanityFetch }    from "@/sanity/lib/fetch";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { HeroSection }       from "@/components/home/HeroSection";
import { FoundationPillars } from "@/components/home/FoundationPillars";
import { PaymentHub }        from "@/components/home/PaymentHub";
import { GalleryPreview }    from "@/components/home/GalleryPreview";
import { StatsCTA }          from "@/components/home/StatsCTA";

export const revalidate = 60;

export const metadata: Metadata = {
  title:       `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    title:       `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url:         SITE.url,
  },
};

export default async function HomePage() {
  const cms = await sanityFetch<any>(HOME_PAGE_QUERY);

  // Merge CMS data over hardcoded fallbacks
  const stats        = cms?.stats        ?? STATS;
  const pillars      = cms?.pillars      ?? PILLARS;
  const paymentCards = cms?.paymentCards ?? PAYMENT_CARDS;
  const gallery      = cms?.gallery      ?? null;

  return (
    <>
      <HeroSection    cms={cms?.hero} />
      <FoundationPillars pillars={pillars} />
      <PaymentHub     cards={paymentCards} />
      <GalleryPreview gallery={gallery} />
      <StatsCTA       stats={stats} />
    </>
  );
}
