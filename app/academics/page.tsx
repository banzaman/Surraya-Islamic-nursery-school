import type { Metadata } from "next";
import { SITE }              from "@/lib/constants";
import { sanityFetch }       from "@/sanity/lib/fetch";
import { ACADEMICS_PAGE_QUERY } from "@/sanity/lib/queries";
import { AcademicsHero }  from "@/components/academics/AcademicsHero";
import { EYFSFramework }  from "@/components/academics/EYFSFramework";
import { IslamicStudies } from "@/components/academics/IslamicStudies";
import { Enrichment }     from "@/components/academics/Enrichment";

export const revalidate = 60;

const title       = "Academics — Faith-Guided EYFS Curriculum";
const description = "Discover our EYFS-aligned curriculum enriched with Islamic values. Five areas of learning, integrated Quranic studies, and enrichment activities for ages 2.5–5.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${SITE.url}/academics` },
};

export default async function AcademicsPage() {
  const cms = await sanityFetch<any>(ACADEMICS_PAGE_QUERY);

  return (
    <>
      <AcademicsHero  cms={cms?.hero} />
      <EYFSFramework  areas={cms?.eyfsAreas} />
      <IslamicStudies cms={cms?.islamicStudies} />
      <Enrichment     clubs={cms?.enrichmentClubs} />
    </>
  );
}
