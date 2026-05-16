import type { Metadata } from "next";
import { AcademicsHero }  from "@/components/academics/AcademicsHero";
import { EYFSFramework }  from "@/components/academics/EYFSFramework";
import { IslamicStudies } from "@/components/academics/IslamicStudies";
import { Enrichment }     from "@/components/academics/Enrichment";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "An EYFS-aligned curriculum grounded in Islamic values. Discover our five learning areas, integrated Islamic studies, and enrichment activities.",
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
