import type { Metadata } from "next";
import { SITE }               from "@/lib/constants";
import { sanityFetch }        from "@/sanity/lib/fetch";
import { ADMISSIONS_PAGE_QUERY } from "@/sanity/lib/queries";
import { AdmissionsHero } from "@/components/admissions/AdmissionsHero";
import { WhoCanApply }    from "@/components/admissions/WhoCanApply";
import { HowToJoin }      from "@/components/admissions/HowToJoin";
import { FeeStructure }   from "@/components/admissions/FeeStructure";

export const revalidate = 60;

const title       = "Admissions — Apply to Surraya Nursery";
const description = "Apply to Surraya Islamic Nursery School. Nursery One (ages 2.5–3.5) and Nursery Two (ages 3.5–5). Learn about eligibility, our four-step process, and transparent fee structure.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${SITE.url}/admissions` },
};

export default async function AdmissionsPage() {
  const cms = await sanityFetch<any>(ADMISSIONS_PAGE_QUERY);

  return (
    <>
      <AdmissionsHero cms={cms?.hero} />
      <WhoCanApply    classes={cms?.classes}      requirements={cms?.requirements} />
      <HowToJoin      steps={cms?.steps} />
      <FeeStructure   fees={cms?.fees}            siblingDiscount={cms?.siblingDiscount} />
    </>
  );
}
