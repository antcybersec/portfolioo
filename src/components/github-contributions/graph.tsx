"use client";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { DATA } from "@/data/resume";

/** Format YYYY-MM-DD as dd.MM.yyyy without Date (avoids hydration mismatch) */
function formatDateLabel(isoDate: string): string {
  const [y, m, d] = isoDate.split("-");
  return `${d}.${m}.${y}`;
}

function FallbackMessage() {
  return (
    <p className="text-muted-foreground text-sm">
      <a
        className="font-medium underline underline-offset-4"
        href={`https://github.com/${DATA.githubUsername}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View my GitHub profile
      </a>
    </p>
  );
}

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Activity[];
}) {
  if (!contributions?.length) {
    return <FallbackMessage />;
  }

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={contributions}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar className="px-2" title="GitHub Contributions">
        {({ activity, dayIndex, weekIndex }) => {
          const count = Number(activity?.count ?? 0);
          const dateLabel = formatDateLabel(activity?.date ?? "");
          const titleText = `${count} contribution${count === 1 ? "" : "s"} on ${dateLabel}`;
          return (
          <g>
            <title>{titleText}</title>
            <ContributionGraphBlock
              activity={activity}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            />
          </g>
          );
        }}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} contributions in {year} on{" "}
              <a
                className="font-medium underline underline-offset-4"
                href={`https://github.com/${DATA.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

