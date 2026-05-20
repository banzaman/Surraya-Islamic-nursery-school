/**
 * The Sanity Studio is embedded at /studio.
 * Access: http://localhost:3000/studio (dev) or https://yourdomain.com/studio (prod)
 *
 * Protected by Sanity's own auth — only users added to the Sanity project
 * can log in and edit content.
 */
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-dynamic";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
