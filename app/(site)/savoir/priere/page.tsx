import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Moon, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PRIERE_CHAPTERS } from "@/lib/savoir/priere-chapters";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Guide de la Prière — Savoir",
  description: "Apprends la Salat en 13 chapitres",
};

export default function SavoirPriereHubPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-5 py-8 md:px-8 md:py-10 lg:px-10">
      <div>
        <Link
          href="/savoir"
          className="inline-flex items-center gap-1.5 text-sm text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3.5" />
          Savoir
        </Link>
      </div>

      <header className="glass-panel relative overflow-hidden rounded-[1.75rem] px-5 py-8 md:px-8 md:py-10">
        <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-brand-warm/10 blur-3xl" />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-line/40 bg-brand-panel-elevated/50 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-warm uppercase">
              <Moon className="size-3" />
              Module · 13 chapitres
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
              Guide de la Prière
            </h1>
            <p className="max-w-xl text-brand-mist md:text-lg">
              De l’essence de la Salat jusqu’au dhikr après la prière — un
              parcours clair, sans stress.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0 self-start md:self-center">
            <Link href="/savoir/priere/pourquoi">
              Commencer
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-wide text-brand-soft">
          Sommaire
        </h2>
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PRIERE_CHAPTERS.map((chapter, index) => (
            <li key={chapter.id}>
              <Link
                href={`/savoir/priere/${chapter.id}`}
                className={cn(
                  "glass-panel-interactive flex items-start gap-3 rounded-2xl px-4 py-3.5",
                  chapter.highlight && "border-brand-gold-400/25"
                )}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-warm/12 text-xs font-bold text-brand-warm tabular-nums">
                  {index + 1}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-brand-steel-400 uppercase">
                    {chapter.short}
                    {chapter.highlight && (
                      <Sparkles className="size-3 text-brand-warm" />
                    )}
                  </span>
                  <span className="mt-0.5 block text-sm font-bold text-brand-pearl">
                    {chapter.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
