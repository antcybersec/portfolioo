"use client";

import { useSound } from "@/hooks/use-sound";
import { cn } from "@/lib/utils";
import { Volume2 } from "lucide-react";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const play = useSound(namePronunciationUrl);

  return (
    <button
      type="button"
      className={cn(
        "relative text-muted-foreground transition-[color,scale] select-none hover:text-foreground active:scale-95 rounded-none flex items-center justify-center",
        className
      )}
      onClick={() => play(1)}
      aria-label="Pronounce my name"
    >
      <Volume2 className="size-5" aria-hidden />
      <span className="sr-only">Pronounce my name</span>
    </button>
  );
}
