import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SavoirChapter } from "@/lib/savoir/types";
import { cn } from "@/lib/utils";

type ModuleHubProps = {
  backHref?: string;
  backLabel?: string;
  badge: string;
  badgeIcon?: LucideIcon;
  title: string;
  description: string;
  startHref: string;
  basePath: string;
  chapters: SavoirChapter[];
};

export function ModuleHub({
  backHref = "/savoir",
  backLabel = "Savoir",
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  startHref,
  basePath,
  chapters,
}: ModuleHubProps) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-5 py-8 md:px-8 md:py-12 lg:px-10">
      <div>
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3.5" />
          {backLabel}
        </Link>
      </div>

      <header className="space-y-6 border-b border-brand-line/25 pb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-line/40 bg-brand-panel-elevated/50 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-warm uppercase">
          {BadgeIcon ? <BadgeIcon className="size-3" /> : null}
          {badge}
        </span>
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-brand-mist md:text-lg">{description}</p>
        </div>
        <Button asChild size="lg" className="self-start">
          <Link href={startHref}>
            Commencer l&apos;histoire
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </header>

      <section className="space-y-2">
        <h2 className="mb-6 text-[10px] font-bold tracking-[0.2em] text-brand-steel-400 uppercase">
          Le parcours
        </h2>
        <ol className="relative space-y-0">
          {chapters.map((chapter, index) => {
            const isLast = index === chapters.length - 1;
            return (
              <li key={chapter.id} className="relative flex gap-4 pb-8 last:pb-0">
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute top-8 bottom-0 left-[15px] w-px bg-brand-line/40"
                  />
                )}
                <Link
                  href={`${basePath}/${chapter.id}`}
                  className="group flex min-w-0 flex-1 items-start gap-4"
                >
                  <span
                    className={cn(
                      "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums transition-colors",
                      chapter.highlight
                        ? "bg-brand-warm/20 text-brand-warm ring-2 ring-brand-gold-400/30"
                        : "bg-brand-panel-elevated text-brand-steel-300 group-hover:bg-brand-warm/15 group-hover:text-brand-warm"
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-[10px] font-semibold tracking-wider text-brand-steel-400 uppercase">
                      {chapter.short}
                    </span>
                    <span className="mt-0.5 block text-base font-bold text-brand-pearl transition-colors group-hover:text-brand-warm">
                      {chapter.title}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
