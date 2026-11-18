/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, GitMerge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const OPEN_SOURCE_METRICS = [
  { label: "Total Merged PRs", count: "139+", highlight: true },
  { label: "Meshery (CNCF)", count: "24" },
  { label: "Kubernetes Core", count: "18" },
  { label: "5G OpenAirInterface", count: "14" },
  { label: "Argo CD GitOps", count: "11" },
];

export default function OpenSourceSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {OPEN_SOURCE_METRICS.map((metric) => (
          <div
            key={metric.label}
            className={`border p-2.5 flex flex-col justify-between transition-colors ${
              metric.highlight
                ? "col-span-2 sm:col-span-1 bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300"
                : "bg-muted/40 border-border text-foreground"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold tracking-tight">
                {metric.count}
              </span>
              {metric.highlight && <GitMerge className="size-3.5 text-purple-500" />}
            </div>
            <span className="text-[11px] text-muted-foreground leading-tight mt-1 font-mono">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {DATA.openSource.map((org) => (
        <div key={org.org} className="flex flex-col gap-y-4">
          <Link
            href={org.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-3 group w-fit"
          >
            {(org as any).logoUrl ? (
              <img
                src={(org as any).logoUrl}
                alt={org.org}
                className="size-8 md:size-10 p-1 border rounded-none shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
            ) : (org as any).icon ? (
              <div className="size-8 md:size-10 p-1 border rounded-none shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center">
                {(() => {
                  const Icon = (org as any).icon;
                  return <Icon className="size-4 md:size-5 text-muted-foreground" />;
                })()}
              </div>
            ) : (
              <div className="size-8 md:size-10 p-1 border rounded-none shadow ring-2 ring-border bg-muted flex-none" />
            )}
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="font-semibold leading-none flex items-center gap-1.5 text-sm">
                {org.org}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </div>
              <p className="text-xs text-muted-foreground leading-snug max-w-lg">
                {org.description}
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-3.5 pl-2 sm:pl-3 border-l border-border ml-2 sm:ml-4 md:ml-5">
            {org.prs.map((pr) => (
              <div key={pr.number} className="flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4">
                  <Link
                    href={pr.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start sm:items-center gap-2 group/pr min-w-0 flex-1"
                  >
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-600/15 border border-purple-500/30 px-2 py-0.5 text-[10px] font-semibold text-purple-600 dark:text-purple-400 shrink-0 mt-0.5 sm:mt-0">
                      <GitMerge className="size-2.5" />
                      Merged
                    </span>
                    <span className="text-xs sm:text-sm font-medium group-hover/pr:underline underline-offset-2 break-words">
                      {pr.title}
                    </span>
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 -translate-x-1 group-hover/pr:opacity-100 group-hover/pr:translate-x-0 transition-all duration-150 shrink-0" />
                  </Link>
                  <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto pl-7 sm:pl-0">
                    <Badge variant="outline" className="text-[11px] sm:text-xs rounded-none font-mono px-1.5 py-0">
                      {pr.number}
                    </Badge>
                    <span className="text-[11px] sm:text-xs text-muted-foreground whitespace-nowrap">
                      {pr.merged}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-7 sm:pl-0">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
