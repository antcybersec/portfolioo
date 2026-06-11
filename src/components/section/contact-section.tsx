import Link from "next/link";
import { Calendar } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

export default function ContactSection() {

  return (
    <div className="border border-b-0 rounded-none pt-10 px-10 pb-0 relative flex-1 flex flex-col min-h-0">
      <div className="absolute -top-4 border bg-primary z-10 rounded-none px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-none overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col flex-1 min-h-0">
        <div className="relative flex flex-col items-center gap-3 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Button
              asChild
              variant="default"
              size="sm"
              className="gap-2"
            >
              <Link
                href={`https://x.com/messages/compose?screen_name=${DATA.contact.social.X.url.split('/').pop()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.x className="size-3.5" />
                Twitter DM
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Link
                href={`mailto:${DATA.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="size-3.5" />
                Send Email
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end pb-0 mt-auto relative overflow-hidden flex-1 min-h-0">
          <h2
            className="text-[clamp(2.5rem,10vw,6rem)] leading-none font-normal text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-600 via-neutral-800 to-zinc-950 dark:from-neutral-500 dark:via-neutral-700 dark:to-zinc-900 relative z-20 select-none tracking-tighter font-[var(--font-inter)]"
            style={{ marginBottom: '-1rem' }}
            aria-hidden
          >
            ANANT KUMAR
          </h2>
        </div>
      </div>
    </div>
  );
}

