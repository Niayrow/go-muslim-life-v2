"use client";

import { useId } from "react";
import {
  BookOpen,
  ChevronDown,
  ExternalLink,
  ScrollText,
} from "lucide-react";

import type { Question } from "@/lib/questions/data";
import { cn } from "@/lib/utils";

function SourceLink({ source }: { source: string }) {
  if (!source.trim()) return null;

  const style =
    "inline-flex items-center gap-1.5 text-xs font-medium text-brand-warm transition-colors hover:text-brand-gold-300";

  if (source.startsWith("http")) {
    return (
      <a href={source} target="_blank" rel="noopener noreferrer" className={style}>
        <ExternalLink className="size-3" />
        Source externe
      </a>
    );
  }

  const coranMatch = source.match(/Coran\s+(\d+)[:.](\d+)/i);
  if (coranMatch) {
    return (
      <a
        href={`https://quran.com/${coranMatch[1]}/${coranMatch[2]}?translations=31`}
        target="_blank"
        rel="noopener noreferrer"
        className={style}
      >
        <BookOpen className="size-3" />
        {source}
      </a>
    );
  }

  const hadithMatch = source.match(
    /(Bukhari|Boukhari|Muslim|Tirmidhi|Abu\s+Dawoud|Abou\s+Dawoud|Nasai|Ibn\s+Majah|Muwatta|Ahmed)[\s\-]+(\d+)/i
  );
  if (hadithMatch) {
    return (
      <a
        href={`https://sunnah.com/search?q=${encodeURIComponent(hadithMatch[0])}`}
        target="_blank"
        rel="noopener noreferrer"
        className={style}
      >
        <ScrollText className="size-3" />
        {source}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-brand-mist">
      <BookOpen className="size-3 text-brand-gold-400/70" />
      {source}
    </span>
  );
}

type QuestionItemProps = {
  question: Question;
  open: boolean;
  onToggle: () => void;
};

export function QuestionItem({ question, open, onToggle }: QuestionItemProps) {
  const panelId = useId();

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border transition-colors duration-300",
        open
          ? "border-brand-gold-400/35 bg-brand-panel-elevated/80"
          : "border-brand-line/30 bg-brand-panel/50 hover:border-brand-gold-400/25"
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start gap-3 px-4 py-4 text-left md:gap-4 md:px-5 md:py-5"
      >
        <div className="min-w-0 flex-1 space-y-2">
          <span className="inline-flex rounded-full border border-brand-gold-400/25 bg-brand-warm/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-brand-warm uppercase">
            {question.category}
          </span>
          <h2
            className={cn(
              "text-[15px] leading-snug font-bold md:text-base",
              open ? "text-brand-warm" : "text-brand-pearl"
            )}
          >
            {question.question}
          </h2>
        </div>
        <span
          className={cn(
            "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            open
              ? "rotate-180 border-brand-gold-400/40 bg-brand-warm/15 text-brand-warm"
              : "border-brand-line/35 text-brand-steel-400"
          )}
          aria-hidden
        >
          <ChevronDown className="size-4" />
        </span>
      </button>

      {open ? (
        <div id={panelId} className="border-t border-brand-line/25 px-4 pb-4 md:px-5 md:pb-5">
          <div className="mt-4 rounded-xl border border-brand-line/25 bg-brand-night/40 px-4 py-4 text-sm leading-relaxed whitespace-pre-line text-brand-soft md:text-[15px]">
            {question.answer || "Réponse à venir…"}
          </div>
          {question.source ? (
            <div className="mt-3 flex justify-end px-1">
              <SourceLink source={question.source} />
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
