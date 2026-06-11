/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, GitMerge } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export default function OpenSourceSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      {DATA.openSource.map((org) => (
        <div key={org.org} className="flex flex-col gap-y-4">
          <Link
            href={org.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-3 group w-fit"
          >
            {org.logoUrl ? (
              <img
                src={org.logoUrl}
                alt={org.org}
                className="size-8 md:size-10 p-1 border rounded-none shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
            ) : org.icon ? (
              <div className="size-8 md:size-10 p-1 border rounded-none shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center">
                <org.icon className="size-4 md:size-5 text-muted-foreground" />
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

          <div className="flex flex-col gap-3 pl-2 border-l border-border ml-4 md:ml-5">
            {org.prs.map((pr) => (
              <div key={pr.number} className="flex flex-col gap-1.5">
                <div className="flex items-start justify-between gap-4">
                  <Link
                    href={pr.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 group/pr"
                  >
                    <GitMerge className="size-3.5 text-green-600 dark:text-green-500 flex-none mt-0.5" />
                    <span className="text-sm font-medium group-hover/pr:underline underline-offset-2">
                      {pr.title}
                    </span>
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 -translate-x-1 group-hover/pr:opacity-100 group-hover/pr:translate-x-0 transition-all duration-150 flex-none" />
                  </Link>
                  <div className="flex items-center gap-2 flex-none">
                    <Badge variant="outline" className="text-xs rounded-none font-mono px-1.5 py-0">
                      {pr.number}
                    </Badge>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {pr.merged}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-5">
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
