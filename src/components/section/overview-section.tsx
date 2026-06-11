"use client";

import {
  Code2Icon,
  CircleUserIcon,
  ClockIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

function OverviewItem({
  icon: Icon,
  children,
  className,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-sm text-muted-foreground",
        className
      )}
    >
      <div
        className="flex size-7 shrink-0 items-center justify-center rounded-none border border-border bg-muted/50 ring-1 ring-border/50 [&_svg]:size-4 [&_svg]:text-muted-foreground"
        aria-hidden
      >
        <Icon />
      </div>
      <span className="text-balance">{children}</span>
    </div>
  );
}

function OverviewLink({
  icon: Icon,
  href,
  label,
  children,
  className,
}: {
  icon: LucideIcon;
  href: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-sm text-muted-foreground",
        className
      )}
    >
      <div
        className="flex size-7 shrink-0 items-center justify-center rounded-none border border-border bg-muted/50 ring-1 ring-border/50 [&_svg]:size-4 [&_svg]:text-muted-foreground"
        aria-hidden
      >
        <Icon />
      </div>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 hover:underline hover:text-foreground transition-colors"
        aria-label={label}
      >
        {children}
      </Link>
    </div>
  );
}

function LocalTimeItem({ timeZone }: { timeZone: string }) {
  const [timeString, setTimeString] = useState("");
  const [diffText, setDiffText] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTimeString(formatter.format(now));

      try {
        const tzFormatter = new Intl.DateTimeFormat("en-GB", {
          timeZone,
          timeZoneName: "longOffset",
        });
        const parts = tzFormatter.formatToParts(now);
        const tzPart = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
        const match = tzPart.match(/GMT([+-])(\d+):?(\d*)/);
        if (match) {
          const sign = match[1] === "+" ? 1 : -1;
          const h = parseInt(match[2], 10) + (parseInt(match[3] || "0", 10) / 60);
          const targetOffsetMin = sign * h * 60;
          const localOffsetMin = -now.getTimezoneOffset();
          const diffHours = Math.round((targetOffsetMin - localOffsetMin) / 60);
          if (Math.abs(diffHours) < 1) {
            setDiffText(" // same time");
          } else {
            setDiffText(` // ${Math.abs(diffHours)}h ${diffHours > 0 ? "ahead" : "behind"}`);
          }
        } else {
          setDiffText("");
        }
      } catch {
        setDiffText("");
      }
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, [timeZone]);

  if (!timeString) return null;
  return (
    <OverviewItem icon={ClockIcon}>
      <span aria-label={`Current local time: ${timeString}`}>
        {timeString}
        <span className="text-muted-foreground/80" aria-hidden>{diffText}</span>
      </span>
    </OverviewItem>
  );
}

function urlDisplayName(url: string): string {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function OverviewSection() {
  const overview = DATA.overview;

  return (
    <section id="overview" className="flex min-h-0 flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <div
          className={cn(
            "relative grid gap-x-6 gap-y-3 sm:grid-cols-2 p-0",
          )}
        >
          {overview?.role && (
            <OverviewItem icon={Code2Icon}>
              {overview.role}
            </OverviewItem>
          )}

          {overview?.urls && overview.urls.length > 0 ? (
            <OverviewLink
              icon={LinkIcon}
              href={overview.urls[0]}
              label={`Website: ${urlDisplayName(overview.urls[0])}`}
            >
              {urlDisplayName(overview.urls[0])}
            </OverviewLink>
          ) : DATA.url ? (
            <OverviewLink
              icon={LinkIcon}
              href={DATA.url}
              label={`Website: ${urlDisplayName(DATA.url)}`}
            >
              {urlDisplayName(DATA.url)}
            </OverviewLink>
          ) : null}

          <OverviewLink
            icon={PhoneIcon}
            href={`tel:${DATA.contact.tel}`}
            label={`Call ${DATA.contact.tel}`}
          >
            {DATA.contact.tel}
          </OverviewLink>

          {overview?.urls && overview.urls.length > 1 && (
            <OverviewLink
              icon={LinkIcon}
              href={overview.urls[1]}
              label={`Website: ${urlDisplayName(overview.urls[1])}`}
            >
              {urlDisplayName(overview.urls[1])}
            </OverviewLink>
          )}

          <OverviewLink
            icon={MapPinIcon}
            href={DATA.locationLink}
            label={`Location: ${DATA.location}`}
          >
            {DATA.location}
          </OverviewLink>

          {overview?.timeZone && (
            <LocalTimeItem timeZone={overview.timeZone} />
          )}

          <OverviewLink
            icon={MailIcon}
            href={`mailto:${DATA.contact.email}`}
            label={`Email: ${DATA.contact.email}`}
          >
            {DATA.contact.email}
          </OverviewLink>

          {overview?.pronouns && (
            <OverviewItem icon={CircleUserIcon}>
              {overview.pronouns}
            </OverviewItem>
          )}
        </div>
      </BlurFade>
    </section>
  );
}
