import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PRIERE_CHAPTERS,
  type PriereChapter,
} from "@/lib/savoir/priere-chapters";
import { cn } from "@/lib/utils";

type ChapterShellProps = {
  chapter: PriereChapter;
  prev: PriereChapter | null;
  next: PriereChapter | null;
  children: React.ReactNode;
};

export function ChapterShell({
  chapter,
  prev,
  next,
  children,
}: ChapterShellProps) {
  const index = PRIERE_CHAPTERS.findIndex((c) => c.id === chapter.id);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 gap-8 px-5 py-6 md:px-8 md:py-8 lg:px-10">
      {/* Desktop sommaire */}
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-56 shrink-0 overflow-y-auto lg:block xl:w-64">
        <Link
          href="/savoir/priere"
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3" />
          Sommaire
        </Link>
        <p className="mb-3 text-[10px] font-bold tracking-widest text-brand-steel-400 uppercase">
          Chapitres
        </p>
        <nav aria-label="Chapitres" className="space-y-1">
          {PRIERE_CHAPTERS.map((c, i) => {
            const active = c.id === chapter.id;
            return (
              <Link
                key={c.id}
                href={`/savoir/priere/${c.id}`}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm transition-colors",
                  active
                    ? "bg-brand-warm/10 font-semibold text-brand-warm"
                    : "text-brand-steel-300 hover:bg-brand-panel-elevated/60 hover:text-brand-pearl"
                )}
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold tabular-nums",
                    active
                      ? "bg-brand-warm/20 text-brand-warm"
                      : "bg-brand-panel-elevated text-brand-steel-400"
                  )}
                >
                  {i + 1}
                </span>
                <span className="truncate">{c.short}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0 flex-1 space-y-6 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 lg:hidden">
          <Link
            href="/savoir/priere"
            className="inline-flex items-center gap-1.5 text-sm text-brand-mist hover:text-brand-warm"
          >
            <ArrowLeft className="size-3.5" />
            Guide
          </Link>
          <span className="text-xs font-medium text-brand-steel-400">
            {index + 1} / {PRIERE_CHAPTERS.length}
          </span>
        </div>

        {/* Mobile chapter pills */}
        <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
          {PRIERE_CHAPTERS.map((c, i) => {
            const active = c.id === chapter.id;
            return (
              <Link
                key={c.id}
                href={`/savoir/priere/${c.id}`}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                  active
                    ? "border-brand-gold-400/40 bg-brand-warm/15 text-brand-warm"
                    : "border-brand-line/40 bg-brand-panel/50 text-brand-steel-300"
                )}
              >
                {i + 1}. {c.short}
              </Link>
            );
          })}
        </div>

        {children}

        <footer className="flex flex-col gap-3 border-t border-brand-line/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Button asChild variant="secondary">
              <Link href={`/savoir/priere/${prev.id}`}>
                <ArrowLeft className="size-4" />
                {prev.short}
              </Link>
            </Button>
          ) : (
            <span />
          )}

          {next ? (
            <Button asChild>
              <Link href={`/savoir/priere/${next.id}`}>
                <Check className="size-4" />
                Suivant · {next.short}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/savoir/priere">
                Terminer le parcours
                <Check className="size-4" />
              </Link>
            </Button>
          )}
        </footer>
      </div>
    </main>
  );
}
