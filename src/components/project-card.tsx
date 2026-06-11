/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function getYouTubeEmbedId(url: string): string | null {
  if (!url || typeof url !== "string") return null;
  // youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
  const match =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) ??
    null;
  return match ? match[1] : null;
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  repoUrl?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  repoUrl,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-none overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={video || href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            getYouTubeEmbedId(video) ? (
              <div className="w-full h-48 relative bg-muted">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeEmbedId(video)}?rel=0`}
                  title={title}
                  className="absolute inset-0 w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover"
              />
            )
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1 min-h-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-semibold text-sm">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
            aria-label={`Open live ${title}`}
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-7 gap-1.5 rounded-none text-xs font-medium bg-muted/50 hover:bg-muted"
            >
              <ExternalLink className="h-3 w-3" aria-hidden />
              Live
            </Button>
          </a>
        </div>
        <a
          href={repoUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
          aria-label={`Open repo for ${title}`}
        >
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-7 gap-1.5 rounded-none text-xs font-medium border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
          >
            <ExternalLink className="h-3 w-3" aria-hidden />
            Repo
          </Button>
        </a>
        <div className="text-xs flex-1 min-h-0 prose prose-p:my-0.5 max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert line-clamp-3">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-0.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[10px] font-medium border border-border h-5 w-fit px-1.5"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
