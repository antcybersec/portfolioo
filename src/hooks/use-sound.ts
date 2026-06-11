"use client";

import { useCallback, useRef } from "react";

/**
 * Plays a sound from a URL. Uses HTMLAudioElement so playback works after user
 * gestures (e.g. click) and avoids AudioContext suspend/CORS decode issues.
 */
export function useSound(url: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(
    (volume: number = 1) => {
      if (typeof window === "undefined") return;
      try {
        if (!audioRef.current) {
          audioRef.current = new Audio(url);
        }
        const audio = audioRef.current;
        audio.volume = Math.max(0, Math.min(1, volume));
        audio.currentTime = 0;
        audio.play().catch(() => {
          // Ignore autoplay errors (e.g. no user gesture in some edge cases)
        });
      } catch {
        // Ignore
      }
    },
    [url]
  );

  return play;
}
