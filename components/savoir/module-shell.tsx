"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";

import { ModuleCelebrationModal } from "@/components/savoir/module-celebration-modal";
import { PathProgress } from "@/components/savoir/story-ui";
import { Button } from "@/components/ui/button";
import { fireCelebrationConfetti } from "@/lib/confetti";
import type { SavoirChapter } from "@/lib/savoir/types";
import { cn } from "@/lib/utils";

const DEFAULT_MODULE_TITLES: Record<string, string> = {
  "/savoir/purification": "La Purification",
  "/savoir/priere": "La Prière",
  "/savoir/comportement": "Le Comportement Musulman",
  "/savoir/jeune": "Le Jeûne & Ramadan",
  "/savoir/zakat": "La Zakat",
};

type ModuleShellProps = {
  basePath: string;
  moduleTitle?: string;
  chapters: SavoirChapter[];
  chapter: SavoirChapter;
  prev: SavoirChapter | null;
  next: SavoirChapter | null;
  children: React.ReactNode;
};

export function ModuleShell({
  basePath,
  moduleTitle,
  chapters,
  chapter,
  prev,
  next,
  children,
}: ModuleShellProps) {
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);
  const index = chapters.findIndex((c) => c.id === chapter.id);
  const step = index + 1;
  const resolvedTitle = moduleTitle || DEFAULT_MODULE_TITLES[basePath] || "Savoir";

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-5 py-6 md:px-8 md:py-8 lg:px-10">
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-56 shrink-0 overflow-y-auto lg:block xl:w-64">
        <Link
          href={basePath}
          className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3" />
          Sommaire
        </Link>
        <p className="mb-4 text-[10px] font-bold tracking-widest text-brand-steel-400 uppercase">
          L&apos;histoire
        </p>
        <nav aria-label="Chapitres" className="relative space-y-0">
          {chapters.map((c, i) => {
            const active = c.id === chapter.id;
            const past = i < index;
            const isLast = i === chapters.length - 1;
            return (
              <div key={c.id} className="relative flex gap-3 pb-3 last:pb-0">
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
                  href={`${basePath}/${c.id}`}
                  className={cn(
                    "group relative z-10 flex min-w-0 flex-1 items-start gap-2.5 rounded-xl py-1 pr-1 transition-colors",
                    active && "text-brand-warm"
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold tabular-nums",
                      active
                        ? "bg-brand-warm/20 text-brand-warm ring-2 ring-brand-gold-400/35"
                        : past
                          ? "bg-brand-gold-400/15 text-brand-gold-300"
                          : "bg-brand-panel-elevated text-brand-steel-400 group-hover:text-brand-pearl"
                    )}
                  >
                    {past && !active ? (
                      <Check className="size-3" strokeWidth={3} />
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span
                    className={cn(
                      "truncate pt-0.5 text-sm",
                      active
                        ? "font-semibold text-brand-warm"
                        : past
                          ? "text-brand-steel-300"
                          : "text-brand-steel-400 group-hover:text-brand-pearl"
                    )}
                  >
                    {c.short}
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0 flex-1 space-y-6 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 lg:hidden">
          <Link
            href={basePath}
            className="inline-flex items-center gap-1.5 text-sm text-brand-mist hover:text-brand-warm"
          >
            <ArrowLeft className="size-3.5" />
            Guide
          </Link>
          <span className="text-xs font-medium text-brand-steel-400 tabular-nums">
            {step} / {chapters.length}
          </span>
        </div>

        <PathProgress current={step} total={chapters.length} />

        <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden">
          {chapters.map((c, i) => {
            const active = c.id === chapter.id;
            const past = i < index;
            return (
              <Link
                key={c.id}
                href={`${basePath}/${c.id}`}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                  active
                    ? "border-brand-gold-400/40 bg-brand-warm/15 text-brand-warm"
                    : past
                      ? "border-brand-gold-400/20 bg-brand-gold-400/10 text-brand-gold-300"
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
              <Link href={`${basePath}/${prev.id}`}>
                <ArrowLeft className="size-4" />
                Chapitre précédent
              </Link>
            </Button>
          ) : (
            <span />
          )}

          {next ? (
            <Button asChild>
              <Link href={`${basePath}/${next.id}`}>
                Continuer · {next.short}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => {
                fireCelebrationConfetti();
                setIsCelebrationOpen(true);
              }}
              className="btn-bronze-shine shadow-lg"
            >
              Terminer le parcours
              <Sparkles className="size-4 animate-pulse" />
            </Button>
          )}
        </footer>
      </div>

      <ModuleCelebrationModal
        isOpen={isCelebrationOpen}
        onOpenChange={setIsCelebrationOpen}
        moduleTitle={resolvedTitle}
        basePath={basePath}
        totalChapters={chapters.length}
      />
    </main>
  );
}
