import type { Metadata } from "next";
import { SITE }            from "@/lib/constants";
import { sanityFetch }     from "@/sanity/lib/fetch";
import { DONATE_PAGE_QUERY } from "@/sanity/lib/queries";
import { DonateHero }       from "@/components/donate/DonateHero";
import { WhereItGoes }      from "@/components/donate/WhereItGoes";
import { DonationForm }     from "@/components/donate/DonationForm";
import { CommunityPromise } from "@/components/donate/CommunityPromise";

export const revalidate = 60;

const title       = "Donate — Support Surraya's Mission";
const description = "Your donation funds scholarships, learning resources, and facility development at Surraya Islamic Nursery School. Sadaqah Jariyah — an investment in eternal rewards.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${SITE.url}/donate` },
};

export default async function DonatePage() {
  const cms = await sanityFetch<any>(DONATE_PAGE_QUERY);

  return (
    <>
      <DonateHero      cms={cms?.hero} />
      <WhereItGoes     causes={cms?.causes} />
      <DonationForm    cms={cms?.formSection} />
      <CommunityPromise cms={cms?.communityPromise} />
    </>
  );
}
