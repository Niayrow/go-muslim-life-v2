"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ChapterHeroProps = {
  chip: string;
  title: string;
  intro: ReactNode;
  icon?: LucideIcon;
  step?: number;
  total?: number;
};

export function ChapterHero({
  chip,
  title,
  intro,
  icon: Icon,
  step,
  total = 13,
}: ChapterHeroProps) {
  return (
    <header className="space-y-5 border-b border-brand-line/25 pb-8">
      <div className="flex flex-wrap items-center gap-2">
        {typeof step === "number" && (
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-steel-400 uppercase tabular-nums">
            Étape {step} · {total}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-line/40 bg-brand-panel-elevated/40 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-gold-300 uppercase">
          {Icon ? <Icon className="size-3" strokeWidth={2} /> : null}
          {chip}
        </span>
      </div>
      <div className="space-y-3">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-brand-pearl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-mist md:text-lg">
          {intro}
        </p>
      </div>
    </header>
  );
}

type StorySceneProps = {
  title?: string;
  scene?: number | string;
  children: ReactNode;
  className?: string;
};

export function StoryScene({
  title,
  scene,
  children,
  className,
}: StorySceneProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative border-l-2 border-brand-gold-400/25 pl-5 md:pl-7",
        className
      )}
    >
      {(title || scene !== undefined) && (
        <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {scene !== undefined && (
            <span className="text-[10px] font-bold tracking-[0.18em] text-brand-gold-400 uppercase tabular-nums">
              {typeof scene === "number" ? `Scène ${scene}` : scene}
            </span>
          )}
          {title ? (
            <h3 className="text-lg font-bold tracking-tight text-brand-pearl md:text-xl">
              {title}
            </h3>
          ) : null}
        </div>
      )}
      <div className="space-y-4 text-sm leading-relaxed text-brand-soft md:text-base">
        {children}
      </div>
    </motion.section>
  );
}

type StoryCalloutVariant = "quote" | "tip" | "note" | "warn";

type StoryCalloutProps = {
  variant?: StoryCalloutVariant;
  title?: string;
  attribution?: string;
  children: ReactNode;
  className?: string;
};

const calloutStyles: Record<StoryCalloutVariant, string> = {
  quote:
    "border-brand-gold-400/30 bg-brand-warm/8 text-brand-soft",
  tip: "border-brand-gold-400/20 bg-brand-panel-elevated/40 text-brand-soft",
  note: "border-brand-line/40 bg-brand-panel/50 text-brand-mist",
  warn: "border-brand-warm/25 bg-brand-warm/8 text-brand-soft",
};

export function StoryCallout({
  variant = "tip",
  title,
  attribution,
  children,
  className,
}: StoryCalloutProps) {
  return (
    <aside
      className={cn(
        "rounded-2xl border px-5 py-4 md:px-6 md:py-5",
        calloutStyles[variant],
        className
      )}
    >
      {title ? (
        <p className="mb-2 text-sm font-bold text-brand-pearl md:text-base">
          {title}
        </p>
      ) : null}
      <div
        className={cn(
          "text-sm leading-relaxed md:text-base",
          variant === "quote" && "italic"
        )}
      >
        {children}
      </div>
      {attribution ? (
        <p className="mt-3 border-t border-brand-gold-400/20 pt-3 text-xs font-semibold text-brand-gold-300">
          {attribution}
        </p>
      ) : null}
    </aside>
  );
}

export type StoryListItem = {
  title: string;
  description?: ReactNode;
  meta?: string;
};

type StoryListProps = {
  items: StoryListItem[];
  numbered?: boolean;
  className?: string;
};

export function StoryList({ items, numbered, className }: StoryListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className="flex gap-3 md:gap-4">
          <span
            className={cn(
              "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold tabular-nums",
              numbered
                ? "bg-brand-warm/15 text-brand-warm"
                : "bg-brand-panel-elevated text-brand-gold-400"
            )}
          >
            {numbered ? index + 1 : "·"}
          </span>
          <div className="min-w-0 space-y-0.5 pt-0.5">
            <p className="font-semibold text-brand-pearl">{item.title}</p>
            {item.description ? (
              <div className="text-sm leading-relaxed text-brand-mist">
                {item.description}
              </div>
            ) : null}
            {item.meta ? (
              <p className="pt-1 text-xs font-semibold tracking-wide text-brand-gold-400 uppercase">
                {item.meta}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

type PathProgressProps = {
  current: number;
  total?: number;
  className?: string;
};

export function PathProgress({
  current,
  total = 13,
  className,
}: PathProgressProps) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-brand-steel-400 uppercase">
        <span>
          Progression · {current}/{total}
        </span>
        <span className="tabular-nums">{Math.round(pct)}%</span>
      </div>
      <div
        className="h-1 overflow-hidden rounded-full bg-brand-panel-elevated"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-full bg-brand-gold-400/80 transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

type StoryPageProps = {
  children: ReactNode;
  className?: string;
};

export function StoryPage({ children, className }: StoryPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={cn("space-y-10 md:space-y-12", className)}
    >
      {children}
    </motion.div>
  );
}
