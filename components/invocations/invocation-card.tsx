"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Copy,
  Heart,
  Home,
  Layers,
  Moon,
  Plane,
  Sparkles,
  StopCircle,
  Sun,
  Volume2,
  type LucideIcon,
} from "lucide-react";

import type { Invocation } from "@/lib/invocations/data";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Matin: Sun,
  Soir: Moon,
  Maison: Home,
  Voyage: Plane,
  Pardon: Heart,
  Prière: Sparkles,
  Autre: Layers,
};

type InvocationCardProps = {
  invocation: Invocation;
};

export function InvocationCard({ invocation }: InvocationCardProps) {
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const Icon = CATEGORY_ICONS[invocation.category] ?? Sparkles;

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const handleCopy = () => {
    void navigator.clipboard.writeText(
      `${invocation.title}\n\n${invocation.arabic}\n\n${invocation.phonetic}\n\n${invocation.translation}`
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handlePlay = () => {
    if (!window.speechSynthesis) return;

    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(invocation.arabic);
    utterance.lang = "ar-SA";
    utterance.rate = 0.9;
    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <article className="flex h-full min-h-[26rem] flex-col rounded-2xl border border-brand-line/30 bg-brand-panel/50 p-5 sm:min-h-[28rem] sm:p-6">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-1.5">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-brand-gold-400 uppercase">
            {invocation.category}
          </p>
          <h2 className="line-clamp-2 min-h-[2.75rem] text-base font-bold leading-snug text-brand-pearl">
            {invocation.title}
          </h2>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-brand-gold-400/20 bg-brand-warm/10 text-brand-warm">
          <Icon className="size-4" strokeWidth={2.1} />
        </span>
      </header>

      <div className="flex flex-1 flex-col gap-4">
        <p
          className="h-[7.25rem] overflow-y-auto text-right font-arabic text-[1.25rem] leading-[1.8] text-brand-pearl sm:h-[8rem] sm:text-[1.4rem]"
          dir="rtl"
          lang="ar"
        >
          {invocation.arabic}
        </p>

        <div className="space-y-1 border-t border-brand-line/20 pt-3">
          <p className="text-[10px] font-bold tracking-[0.14em] text-brand-steel-500 uppercase">
            Phonétique
          </p>
          <p className="line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed text-brand-soft">
            {invocation.phonetic}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-[10px] font-bold tracking-[0.14em] text-brand-steel-500 uppercase">
            Traduction
          </p>
          <p className="line-clamp-3 min-h-[3.75rem] text-sm leading-relaxed text-brand-mist">
            {invocation.translation}
          </p>
        </div>
      </div>

      <footer className="mt-5 flex gap-2 border-t border-brand-line/20 pt-4">
        <button
          type="button"
          onClick={handlePlay}
          className={cn(
            "inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors duration-300",
            playing
              ? "border-brand-gold-400/40 bg-brand-warm/15 text-brand-warm"
              : "border-brand-gold-400/25 bg-brand-warm/10 text-brand-warm hover:bg-brand-warm/15"
          )}
        >
          {playing ? (
            <StopCircle className="size-3.5" />
          ) : (
            <Volume2 className="size-3.5" />
          )}
          {playing ? "Arrêter" : "Écouter"}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-brand-line/35 bg-brand-night/40 px-3 py-2.5 text-xs font-semibold text-brand-soft transition-colors duration-300 hover:border-brand-gold-400/30 hover:text-brand-warm"
        >
          {copied ? (
            <Check className="size-3.5 text-brand-warm" />
          ) : (
            <Copy className="size-3.5" />
          )}
          {copied ? "Copié" : "Copier"}
        </button>
      </footer>
    </article>
  );
}
