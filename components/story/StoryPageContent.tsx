'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';

const milestones = [
  {
    title: 'Founded with purpose',
    description: 'Surraya began as a small, faith-rooted nursery school committed to nurturing children with care and dignity.',
    image: '/images/IMG-20260513-WA0006.jpg',
  },
  {
    title: 'First classrooms opened',
    description: 'Our early learning spaces were expanded to welcome more children into a warm and stimulating environment.',
    image: '/images/IMG-20260513-WA0009.jpg',
  },
  {
    title: 'Growing community',
    description: 'Families, volunteers, and educators joined hands to strengthen our programs and deepen our impact.',
    image: '/images/IMG-20260513-WA0011.jpg',
  },
  {
    title: 'Islamic Morning Circle',
    description: 'We now serve children and families with a holistic model that blends faith, academics, and care.',
    image: '/images/IMG-20260513-WA0015.jpg',
  },
];

const sponsors = [
  { name: 'Hamidah binti Abdul Rahman', tier: 'Legacy Sponsor', logo: '/images/sponsors/sponsor-logo-3.jpg' },
  { name: 'Dr Hyzan Mohd Yusof', tier: 'Chief Fundraiser', logo: '/images/sponsors/sponsor-logo-1.jpg' },
  { name: 'Principal Red Redzuan Bin Abd Aziz', tier: 'Education Advisor', logo: '/images/sponsors/sponsor-logo-2.jpg' },
];

const acknowledgements = [
  'Parents and guardians who believed in our mission from the beginning',
  'Volunteers who gave their time, energy, and encouragement',
  'Elders and community leaders who offered wisdom and guidance',
  'Early teachers and staff who built the foundation of care and excellence',
];

export function StoryPageContent() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main id="main-content">
      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <Image
          src="/home/IMG-20260513-WA0015.jpg"
          alt="Children enjoying school life at Surraya"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,41,23,0.82)] via-[rgba(10,41,23,0.55)] to-[rgba(10,41,23,0.25)]" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-bright)]">
              A school shaped by faith and love
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Our Story
            </h1>
            <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/90">
              From a humble beginning to a vibrant learning community, Surraya has grown through purpose, generosity, and care.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/director-kasawuli.jpg"
              alt="Director of the school"
              width={720}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeader title="Director's Message" subtitle="A heartfelt reflection" centered={false} />
            <div className="mt-8 space-y-4 text-lg leading-8 text-[var(--color-slate)]">
              <p>
                Bismillah ar-Rahman ar-Raheem.
              </p>
              <p>
                I still remember standing on this land before it was a school — just bare ground, a plan on paper, and a prayer that it would become something real. Today, when I walk through the gates and hear children reciting their duas before snack time, or watch them trace their first letters with such concentration, I am reminded why we started this journey.
              </p>
              <p>
                Surraya was built on a simple belief: that a child&apos;s earliest years should nurture both mind and faith together. We wanted a place where a four-year-old could learn her alphabet in the morning and learn the story of the Prophets in the afternoon — where knowledge and iman grow from the same soil.
              </p>
              <p>
                None of this would exist without the people who stood behind us before there was anything to see. The sponsors who funded a classroom before it had walls. The families who enrolled their children on trust alone. The community members who showed up to paint, to pray, to encourage. To every one of you — jazakumullahu khayran. You did not just support a school; you helped raise a generation.
              </p>
              <p>
                We are still building, still growing, and still grateful. Thank you for being part of this story with us.
              </p>
              <p className="pt-2 font-semibold text-[var(--color-forest-deep)]">
                Kasawuli Abdul Kareem
                <br />
                Director, Surraya Islamic Nursery School
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-forest-light)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Our Journey" title="The path that brought us here" subtitle="A short look at the milestones that shaped our school and the community around it." />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-lg leading-8 text-[var(--color-slate)]">
                Our Islamic morning circle fills the learners with light and energy — watching them begin the day in remembrance, joy, and togetherness is truly inspiring.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)]">
                {!showVideo ? (
                  <button
                    type="button"
                    onClick={() => setShowVideo(true)}
                    className="group relative flex w-full items-center justify-center overflow-hidden"
                    style={{ aspectRatio: '9/16' }}
                    aria-label="Play Islamic Morning Circle video"
                  >
                    <Image
                      src="/images/IMG-20260513-WA0097.jpg"
                      alt="Thumbnail for Islamic Morning Circle"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[rgba(10,41,23,0.35)]" />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[var(--color-forest)] shadow-lg">
                      <Play size={26} fill="currentColor" />
                    </span>
                  </button>
                ) : (
                  <div className="w-full" style={{ aspectRatio: '9/16' }}>
                    <iframe
                      className="h-full w-full"
                      src="https://www.youtube.com/embed/D9BeeoAx-hQ?autoplay=1"
                      title="Islamic Morning Circle"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {milestones.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="h-24 w-full shrink-0 overflow-hidden rounded-xl sm:w-28">
                      <Image src={item.image} alt={item.title} width={140} height={96} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[var(--color-forest-deep)]">{item.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[var(--color-slate)]">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Our Sponsors" subtitle="Support from our community helped make new opportunities possible for children and families." />
          <p className="mt-6 text-lg text-[var(--color-slate)]">
            <a 
              href="https://youtu.be/vHzLeTzZupY?si=Pxbv6gxtZdmVk9f6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-forest-deep)] hover:text-[var(--color-gold-bright)] transition-colors duration-200 underline"
            >
              Watch how our sponsors speak about the school →
            </a>
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                {sponsor.logo ? (
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-border)] bg-white grayscale transition-all duration-300 hover:grayscale-0 overflow-hidden">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-2xl font-semibold text-[var(--color-forest)] grayscale transition-all duration-300 hover:grayscale-0">
                    {sponsor.name.charAt(0)}
                  </div>
                )}
                <h3 className="mt-5 font-serif text-xl text-[var(--color-forest-deep)]">{sponsor.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--color-slate)]">{sponsor.tier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-forest-light)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Acknowledgements" title="We honour those who helped us begin" centered={false} />
            <p className="mt-4 text-lg leading-8 text-[var(--color-slate)]">
              This story is shaped by many hands and generous hearts. We carry their kindness with gratitude as we continue to grow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {acknowledgements.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                <p className="text-base leading-7 text-[var(--color-slate)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-cream)] px-6 py-12 text-center shadow-sm sm:px-10 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-forest-mid)]">Closing gratitude</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[var(--color-forest-deep)]">
            Every step forward has been made possible by the kindness of others.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[var(--color-slate)]">
            “And be grateful for the favours of Allah, if it is He whom you worship.” — Qur'an 16:114
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/donate" variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              Support Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
