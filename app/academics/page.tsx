import type { Metadata } from "next";
import { SITE }              from "@/lib/constants";
import { AcademicsHero }  from "@/components/academics/AcademicsHero";
import { EYFSFramework }  from "@/components/academics/EYFSFramework";
import { IslamicStudies } from "@/components/academics/IslamicStudies";
import { Enrichment }     from "@/components/academics/Enrichment";

const title       = "Academics – Faith-Guided EYFS Curriculum";
const description = "Discover our EYFS-aligned curriculum enriched with Islamic values. Five areas of learning, integrated Quranic studies, and enrichment activities for ages 2.5–5.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${SITE.url}/academics` },
};

export default function AcademicsPage() {
  return (
    <>
      <AcademicsHero />
      <EYFSFramework />
      <IslamicStudies />
      <Enrichment />
    </>
  );
}