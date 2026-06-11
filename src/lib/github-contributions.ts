import type { Activity } from "@/components/kibo-ui/contribution-graph";

type GitHubContributionsResponse = {
  contributions?: Activity[];
};

const DEFAULT_GITHUB_CONTRIBUTIONS_API_BASE =
  "https://github-contributions-api.jogruber.de";

export async function getGitHubContributions(username: string): Promise<Activity[]> {
  if (!username) return [];

  try {
    const res = await fetch(
      `${DEFAULT_GITHUB_CONTRIBUTIONS_API_BASE}/v4/${encodeURIComponent(
        username
      )}?y=last`,
      { next: { revalidate: 86400 }, signal: AbortSignal.timeout(10000) }
    );

    if (!res.ok) return [];

    const data = (await res.json()) as GitHubContributionsResponse;
    return Array.isArray(data.contributions) ? data.contributions : [];
  } catch {
    return [];
  }
}

