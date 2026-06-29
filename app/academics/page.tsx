import type { Metadata } from "next";
import { SITE }           from "@/lib/constants";
import { AcademicsHero }  from "@/components/academics/AcademicsHero";
import { EYFSFramework }  from "@/components/academics/EYFSFramework";
import { IslamicStudies } from "@/components/academics/IslamicStudies";
import { Button }         from "@/components/ui/Button";
import { ArrowRight }     from "lucide-react";

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
      <section
        className="py-16 lg:py-20"
        style={{ background: "var(--color-forest-light)" }}
        aria-label="Academic call to action"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-serif text-4xl lg:text-5xl"
            style={{ color: "var(--color-forest-deep)" }}
          >
            See It For Yourself
          </h2>
          <p
            className="mt-4 text-base lg:text-lg"
            style={{ color: "var(--color-slate)" }}
          >
            Book a tour or download our prospectus to learn everything about life at Surraya.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={17} />}
              iconPosition="right"
            >
              Schedule a Visit
            </Button>
            <Button href="/admissions" variant="outline" size="lg">
              View Admissions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}