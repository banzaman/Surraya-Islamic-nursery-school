import type { Metadata } from "next";
import { DonateHero }        from "@/components/donate/DonateHero";
import { WhereItGoes }       from "@/components/donate/WhereItGoes";
import { DonationForm }      from "@/components/donate/DonationForm";
import { CommunityPromise }  from "@/components/donate/CommunityPromise";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Surraya Islamic Nursery School. Your donation funds scholarships, learning resources, and facility development.",
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
