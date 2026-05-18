import { client } from "./client";

/**
 * Fetch Sanity data with error handling.
 * Returns null if Sanity is not configured yet (no project ID).
 */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T | null> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId || projectId === "your_project_id") return null;

  try {
    return await client.fetch<T>(query, params ?? {}, {
      next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    });
  } catch (err) {
    console.error("[Sanity fetch error]", err);
    return null;
  }
}
