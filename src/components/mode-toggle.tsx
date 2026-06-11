"use client";

import { Button } from "@/components/ui/button";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const playClick = useSound(SOUNDS.click);

  const handleToggle = () => {
    playClick(0.5);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={handleToggle}
    >
      <SunIcon className="h-full w-full" />
      <MoonIcon className="hidden h-full w-full" />
    </Button>
  );
}
