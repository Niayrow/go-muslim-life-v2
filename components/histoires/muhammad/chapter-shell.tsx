import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { PathProgress } from "@/components/savoir/story-ui";
import { Button } from "@/components/ui/button";
import type { MuhammadChapter } from "@/lib/histoires/muhammad-chapters";
import { MUHAMMAD_CHAPTERS } from "@/lib/histoires/muhammad-chapters";
import { cn } from "@/lib/utils";

const BASE = "/histoires/muhammad";

type Props = {
  chapter: MuhammadChapter;
  prev: MuhammadChapter | null;
  next: MuhammadChapter | null;
  children: React.ReactNode;
};

export function MuhammadShell({ chapter, prev, next, children }: Props) {
  const index = MUHAMMAD_CHAPTERS.findIndex((c) => c.id === chapter.id);
  const step = index + 1;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-5 py-6 md:px-8 md:py-10 lg:px-10">
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-56 shrink-0 overflow-y-auto lg:block xl:w-60">
        <Link
          href={BASE}
          className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3" />
          Sommaire
        </Link>
        <p className="mb-1 font-serif text-sm text-brand-gold-300">Muhammad ﷺ</p>
        <p className="mb-5 text-[10px] font-bold tracking-widest text-brand-steel-400 uppercase">
          La Sîra
        </p>
        <nav aria-label="Chapitres" className="space-y-0">
          {MUHAMMAD_CHAPTERS.map((c, i) => {
            const active = c.id === chapter.id;
            const past = i < index;
            const isLast = i === MUHAMMAD_CHAPTERS.length - 1;
            return (
              <div key={c.id} className="relative flex gap-3 pb-4 last:pb-0">
                {!isLast && (
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-7 bottom-0 left-[11px] w-px",
                      past || active
                        ? "bg-brand-gold-400/40"
                        : "bg-brand-line/30"
                    )}
                  />
                )}
                <Link
                  href={`${BASE}/${c.id}`}
                  className="group relative z-10 flex min-w-0 flex-1 gap-2.5"
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold tabular-nums",
                      active
                        ? "bg-brand-warm/20 text-brand-warm ring-2 ring-brand-gold-400/35"
                        : past
                          ? "bg-brand-gold-400/15 text-brand-gold-300"
                          : "bg-brand-panel-elevated text-brand-steel-400"
                    )}
                  >
                    {past && !active ? (
                      <Check className="size-3" strokeWidth={3} />
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block truncate text-sm",
                        active
                          ? "font-semibold text-brand-warm"
                          : "text-brand-steel-300 group-hover:text-brand-pearl"
                      )}
                    >
                      {c.short}
                    </span>
                    <span className="block truncate text-[10px] text-brand-steel-500">
                      {c.era}
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0 flex-1 space-y-8 pb-12">
        <div className="flex flex-wrap items-center justify-between gap-3 lg:hidden">
          <Link
            href={BASE}
            className="inline-flex items-center gap-1.5 text-sm text-brand-mist hover:text-brand-warm"
          >
            <ArrowLeft className="size-3.5" />
            Sîra
          </Link>
          <span className="text-xs text-brand-steel-400 tabular-nums">
            {step} / {MUHAMMAD_CHAPTERS.length}
          </span>
        </div>

        <PathProgress current={step} total={MUHAMMAD_CHAPTERS.length} />

        <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
          {MUHAMMAD_CHAPTERS.map((c, i) => {
            const active = c.id === chapter.id;
            return (
              <Link
                key={c.id}
                href={`${BASE}/${c.id}`}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold",
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

        <footer className="flex flex-col gap-3 border-t border-brand-line/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Button asChild variant="secondary">
              <Link href={`${BASE}/${prev.id}`}>
                <ArrowLeft className="size-4" />
                Chapitre précédent
              </Link>
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button asChild>
              <Link href={`${BASE}/${next.id}`}>
                Continuer · {next.short}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href={BASE}>
                Terminer le récit
                <Check className="size-4" />
              </Link>
            </Button>
          )}
        </footer>
      </div>
    </main>
  );
}
