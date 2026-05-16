import type { Metadata } from "next";
import { AdmissionsHero } from "@/components/admissions/AdmissionsHero";
import { WhoCanApply }    from "@/components/admissions/WhoCanApply";
import { HowToJoin }      from "@/components/admissions/HowToJoin";
import { FeeStructure }   from "@/components/admissions/FeeStructure";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to Surraya Islamic Nursery School. Learn about eligibility, our admissions process, and fee structure for Nursery One and Two.",
};

export default function AdmissionsPage() {
  return (
    <>
      <AdmissionsHero />
      <WhoCanApply />
      <HowToJoin />
      <FeeStructure />
    </>
  );
}
