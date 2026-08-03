import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { StoryPageContent } from '@/components/story/StoryPageContent';

const title = 'Our Story – Surraya Islamic Nursery School';
const description = 'Learn about the journey, leadership, and community that shaped Surraya Islamic Nursery School.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${SITE.url}/story` },
};

export default function StoryPage() {
  return <StoryPageContent />;
}
