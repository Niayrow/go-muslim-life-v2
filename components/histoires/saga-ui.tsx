"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SagaHeroProps = {
  era: string;
  chip: string;
  title: string;
  intro: ReactNode;
  icon?: LucideIcon;
  step: number;
  total?: number;
};

/** Opening of a saga chapter — cinematic, brand-first. */
export function SagaHero({
  era,
  chip,
  title,
  intro,
  icon: Icon,
  step,
  total = 8,
}: SagaHeroProps) {
  return (
    <header className="relative overflow-hidden pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[min(100%,36rem)] -translate-x-1/2 rounded-full bg-brand-warm/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative space-y-6"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-[10px] font-bold tracking-[0.22em] text-brand-steel-400 uppercase tabular-nums">
            Chapitre {step} · {total}
          </span>
          <span className="h-1 w-1 rounded-full bg-brand-gold-400/50" />
          <span className="font-serif text-sm text-brand-gold-300">{era}</span>
        </div>

        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-brand-warm uppercase">
            {Icon ? <Icon className="size-3.5" strokeWidth={1.75} /> : null}
            {chip}
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-brand-pearl md:text-5xl md:leading-[1.1]">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-brand-mist md:text-lg">
            {intro}
          </p>
        </div>
      </motion.div>
      <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-gold-400/40 via-brand-line/30 to-transparent" />
    </header>
  );
}

type SagaBeatProps = {
  title?: string;
  beat?: number | string;
  children: ReactNode;
  className?: string;
};

export function SagaBeat({ title, beat, children, className }: SagaBeatProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative space-y-4", className)}
    >
      {(title || beat !== undefined) && (
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {beat !== undefined && (
            <span className="text-[10px] font-bold tracking-[0.18em] text-brand-gold-400 uppercase tabular-nums">
              {typeof beat === "number" ? `Moment ${beat}` : beat}
            </span>
          )}
          {title ? (
            <h3 className="text-xl font-bold tracking-tight text-brand-pearl md:text-2xl">
              {title}
            </h3>
          ) : null}
        </div>
      )}
      <div className="space-y-4 text-base leading-[1.75] text-brand-soft md:text-[1.0625rem]">
        {children}
      </div>
    </motion.section>
  );
}

type SagaQuoteProps = {
  children: ReactNode;
  attribution?: string;
  className?: string;
};

export function SagaQuote({ children, attribution, className }: SagaQuoteProps) {
  return (
    <blockquote
      className={cn(
        "relative border-l-2 border-brand-gold-400/45 py-1 pl-5 md:pl-6",
        className
      )}
    >
      <p className="font-serif text-xl leading-relaxed text-brand-pearl md:text-2xl md:leading-relaxed">
        {children}
      </p>
      {attribution ? (
        <footer className="mt-3 text-xs font-semibold tracking-wide text-brand-gold-300 uppercase">
          {attribution}
        </footer>
      ) : null}
    </blockquote>
  );
}

type SagaNoteProps = {
  title?: string;
  children: ReactNode;
};

export function SagaNote({ title, children }: SagaNoteProps) {
  return (
    <aside className="rounded-2xl border border-brand-line/35 bg-brand-panel/40 px-5 py-4 md:px-6 md:py-5">
      {title ? (
        <p className="mb-2 text-xs font-bold tracking-wider text-brand-gold-400 uppercase">
          {title}
        </p>
      ) : null}
      <div className="text-sm leading-relaxed text-brand-mist md:text-base">
        {children}
      </div>
    </aside>
  );
}

type SagaMilestoneProps = {
  year: string;
  title: string;
  children: ReactNode;
};

export function SagaMilestone({ year, title, children }: SagaMilestoneProps) {
  return (
    <div className="relative flex gap-4 md:gap-5">
      <div className="flex flex-col items-center">
        <span className="mt-1 size-2.5 shrink-0 rounded-full bg-brand-gold-400 shadow-[0_0_12px_rgba(206,166,135,0.45)]" />
        <span className="mt-1 w-px flex-1 bg-brand-line/35" />
      </div>
      <div className="min-w-0 space-y-2 pb-8 last:pb-0">
        <p className="text-[10px] font-bold tracking-[0.16em] text-brand-gold-400 uppercase">
          {year}
        </p>
        <h4 className="text-lg font-bold text-brand-pearl">{title}</h4>
        <div className="text-sm leading-relaxed text-brand-mist md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

type SagaPageProps = {
  children: ReactNode;
  className?: string;
};

export function SagaPage({ children, className }: SagaPageProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn("space-y-12 md:space-y-14", className)}
    >
      {children}
    </motion.article>
  );
}
