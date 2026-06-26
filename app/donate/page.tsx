import type { Metadata } from "next";
import { SITE }            from "@/lib/constants";
import { DonateHero }       from "@/components/donate/DonateHero";
import { WhereItGoes }      from "@/components/donate/WhereItGoes";
import { DonationForm }     from "@/components/donate/DonationForm";
import { CommunityPromise } from "@/components/donate/CommunityPromise";

const title       = "Donate — Support Surraya's Mission";
const description = "Your donation funds scholarships, learning resources, and facility development at Surraya Islamic Nursery School. Sadaqah Jariyah — an investment in eternal rewards.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${SITE.url}/donate` },
};

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <WhereItGoes />
      <DonationForm />
      <CommunityPromise />
    </>
  );
}