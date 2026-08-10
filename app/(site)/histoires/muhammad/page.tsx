"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { MUHAMMAD_CHAPTERS } from "@/lib/histoires/muhammad-chapters";
import { cn } from "@/lib/utils";

export default function MuhammadHubPage() {
  return (
    <main className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col gap-14 px-5 py-10 md:px-8 md:py-14 lg:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 h-72 w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-brand-warm/12 blur-3xl"
      />

      <div className="relative">
        <Link
          href="/histoires"
          className="inline-flex items-center gap-1.5 text-sm text-brand-mist transition-colors hover:text-brand-warm"
        >
          <ArrowLeft className="size-3.5" />
          Histoires
        </Link>
      </div>

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative space-y-6"
      >
        <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-brand-warm uppercase">
          <Sparkles className="size-3.5" />
          La Sîra · 8 chapitres
        </span>
        <div className="space-y-4">
          <p className="font-serif text-2xl text-brand-gold-300 md:text-3xl">
            محمد رسول الله
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-pearl md:text-6xl md:leading-[1.05]">
            Muhammad ﷺ
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-brand-mist md:text-lg">
            De l&apos;Année de l&apos;Éléphant au Pèlerinage d&apos;Adieu —
            un récit selon la tradition islamique classique (Sîra).
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/histoires/muhammad/naissance">
            Commencer le récit
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </motion.header>

      <section className="relative space-y-1">
        <h2 className="mb-8 text-[10px] font-bold tracking-[0.2em] text-brand-steel-400 uppercase">
          Les huit chapitres
        </h2>
        <ol>
          {MUHAMMAD_CHAPTERS.map((chapter, index) => {
            const isLast = index === MUHAMMAD_CHAPTERS.length - 1;
            return (
              <motion.li
                key={chapter.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute top-9 bottom-0 left-[15px] w-px bg-gradient-to-b from-brand-gold-400/40 to-brand-line/25"
                  />
                )}
                <Link
                  href={`/histoires/muhammad/${chapter.id}`}
                  className="group flex min-w-0 flex-1 items-start gap-4"
                >
                  <span
                    className={cn(
                      "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums transition-colors",
                      chapter.highlight
                        ? "bg-brand-warm/20 text-brand-warm ring-2 ring-brand-gold-400/35"
                        : "bg-brand-panel-elevated text-brand-steel-300 group-hover:bg-brand-warm/15 group-hover:text-brand-warm"
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0 space-y-1 pt-0.5">
                    <span className="block font-serif text-sm text-brand-gold-300">
                      {chapter.era}
                    </span>
                    <span className="block text-base font-bold text-brand-pearl transition-colors group-hover:text-brand-warm md:text-lg">
                      {chapter.title}
                    </span>
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
