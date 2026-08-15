"use client";

import Link from "next/link";
import {
  Award,
  BookOpen,
  Compass,
  PartyPopper,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fireCelebrationConfetti } from "@/lib/confetti";
import { cn } from "@/lib/utils";

const MODULE_CELEBRATION_MESSAGES: Record<string, string> = {
  "/savoir/purification":
    "« Qu'Allah purifie votre cœur comme votre corps, accepte vos ablutions et fasse de vous des serviteurs constants dans la pureté rituelle et spirituelle. »",
  "/savoir/priere":
    "« Qu'Allah fasse de votre prière la fraîcheur de vos yeux, accepte chacune de vos prosternations et vous accorde l'apaisement et la présence du cœur (Khushû'). »",
  "/savoir/comportement":
    "« Qu'Allah embellisse votre caractère, alourdisse votre balance de bonnes actions et vous compte parmi les plus proches du Prophète ﷺ par l'excellence de votre comportement. »",
  "/savoir/jeune":
    "« Qu'Allah accepte vos jeûnes, fortifie votre piété (Taqwâ), pardonne vos péchés et vous ouvre les portes du Paradis par la porte de Rayyân. »",
  "/savoir/zakat":
    "« Qu'Allah purifie vos biens, décuple vos récompenses, bénisse votre subsistance et fasse de cette aumône une protection ici-bas et dans l'au-delà. »",
};

const DEFAULT_CELEBRATION_MESSAGE =
  "« Qu'Allah accepte votre investissement, bénisse ce savoir acquis et vous facilite sa mise en pratique au quotidien. »";

type ModuleCelebrationModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  moduleTitle: string;
  basePath: string;
  totalChapters: number;
  customMessage?: string;
};

export function ModuleCelebrationModal({
  isOpen,
  onOpenChange,
  moduleTitle,
  basePath,
  totalChapters,
  customMessage,
}: ModuleCelebrationModalProps) {
  const celebrationDua =
    customMessage ||
    MODULE_CELEBRATION_MESSAGES[basePath] ||
    DEFAULT_CELEBRATION_MESSAGE;
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md overflow-hidden border border-brand-gold-400/35 bg-gradient-to-b from-brand-panel-strong via-brand-panel to-brand-night p-0 shadow-2xl sm:max-w-lg">
        {/* Glow ambient background inside modal */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-72 rounded-full bg-brand-warm/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-0 h-48 w-48 rounded-full bg-brand-gold-400/10 blur-2xl"
        />

        <div className="relative p-6 sm:p-8">
          {/* Badge & Icon Celebration */}
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="relative mb-4 flex items-center justify-center">
              {/* Outer pulsing halo */}
              <div className="absolute inset-0 size-20 animate-ping rounded-full bg-brand-warm/20 opacity-40 duration-1000" />
              <div className="relative flex size-20 items-center justify-center rounded-2xl border border-brand-gold-400/40 bg-gradient-to-br from-brand-warm/25 via-brand-panel-elevated to-brand-night-soft shadow-xl ring-4 ring-brand-gold-400/20">
                <Award className="size-10 text-brand-warm drop-shadow-[0_0_12px_rgba(240,209,188,0.6)]" />
                <Sparkles className="absolute -top-1.5 -right-1.5 size-5 animate-bounce text-brand-gold-300" />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold-400/30 bg-brand-warm/10 px-3.5 py-1 text-xs font-bold tracking-wider text-brand-warm uppercase">
              <PartyPopper className="size-3.5" />
              Mabrouk · بارك الله فيك
            </div>
          </div>

          <DialogHeader className="space-y-3 text-center pr-0">
            <DialogTitle className="text-2xl font-black tracking-tight text-brand-pearl sm:text-3xl">
              Félicitations !
            </DialogTitle>
            <DialogDescription className="text-base text-brand-mist sm:text-lg">
              Vous avez terminé le module{" "}
              <span className="font-extrabold text-brand-warm underline decoration-brand-gold-400/50 underline-offset-4">
                {moduleTitle}
              </span>{" "}
              !
            </DialogDescription>
          </DialogHeader>

          {/* Stats / Completion Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-xl border border-brand-line/40 bg-brand-panel-elevated/70 px-3.5 py-1.5 text-xs font-semibold text-brand-pearl">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              {totalChapters} chapitres complétés
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-xl border border-brand-gold-400/30 bg-brand-warm/10 px-3.5 py-1.5 text-xs font-semibold text-brand-warm">
              <Sparkles className="size-3.5 text-brand-gold-300" />
              Parcours validé à 100%
            </span>
          </div>

          {/* Encouraging Dua Card */}
          <div className="mt-6 rounded-2xl border border-brand-line/35 bg-brand-night-soft/80 p-4 text-center">
            <p className="text-xs italic leading-relaxed text-brand-mist sm:text-sm">
              {celebrationDua}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <Button
              asChild
              className="btn-bronze-shine flex-1 py-5 text-sm font-bold shadow-lg"
              onClick={() => onOpenChange(false)}
            >
              <Link href="/savoir">
                <Compass className="size-4" />
                Explorer d&apos;autres modules
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="flex-1 border-brand-line/50 bg-brand-panel-elevated/80 py-5 text-sm font-semibold hover:border-brand-gold-400/30 hover:bg-brand-panel-elevated"
              onClick={() => onOpenChange(false)}
            >
              <Link href={basePath}>
                <BookOpen className="size-4" />
                Sommaire du module
              </Link>
            </Button>
          </div>

          {/* Extra confetti trigger */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => fireCelebrationConfetti()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-steel-400 transition-colors hover:text-brand-warm"
            >
              <Sparkles className="size-3 text-brand-gold-400" />
              Rejouer les confettis 🎊
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
