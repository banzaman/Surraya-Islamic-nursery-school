import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <SectionHeader
        eyebrow="Day 1 Complete"
        title="Foundation is Ready"
        subtitle="Navbar, Footer, and all UI primitives are scaffolded. Day 2 builds the full Home page."
      />
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Button href="/academics" variant="primary">Academics</Button>
        <Button href="/admissions" variant="outline">Admissions</Button>
        <Button href="/donate" variant="secondary">Donate</Button>
        <Button href="/contact" variant="ghost">Contact</Button>
      </div>
    </section>
  );
}
