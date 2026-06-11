import BlurFade from "@/components/magicui/blur-fade";
import { GitHubContributionGraph } from "@/components/github-contributions/graph";
import { DATA } from "@/data/resume";
import { getGitHubContributions } from "@/lib/github-contributions";

const BLUR_FADE_DELAY = 0.04;

export default async function GitHubContributionsSection() {
  const contributions = await getGitHubContributions(DATA.githubUsername);

  return (
    <div className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-none px-4 py-1">
            <span className="text-background text-sm font-medium">GitHub</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <GitHubContributionGraph contributions={contributions} />
      </BlurFade>
    </div>
  );
}

