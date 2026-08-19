"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Clock, X } from "lucide-react";

import { useAppSettings } from "@/hooks/use-app-settings";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  markPrayerNavPromptSeen,
  shouldOfferPrayerNavPrompt,
} from "@/lib/app-settings";
import { cn } from "@/lib/utils";

export function PrayerNavPrompt() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { hydrated, setStickyPrayerBar } = useAppSettings();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!hydrated || !isMobile) return;
    if (pathname.startsWith("/settings")) return;
    if (!shouldOfferPrayerNavPrompt()) return;

    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, [hydrated, isMobile, pathname]);

  const dismiss = () => {
    markPrayerNavPromptSeen();
    setOpen(false);
  };

  const enable = () => {
    setStickyPrayerBar(true);
    dismiss();
  };

  if (!open) return null;

  return (
    <div className="shell-mobile-only pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-[4.85rem]">
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="prayer-nav-prompt-title"
        className={cn(
          "pointer-events-auto relative mx-auto max-w-md rounded-[1.5rem] border border-brand-gold-400/30",
          "bg-brand-panel-strong/95 px-4 py-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        )}
      >
        <span
          aria-hidden
          className="absolute -top-1.5 left-10 size-3 rotate-45 border-t border-l border-brand-gold-400/30 bg-brand-panel-strong/95"
        />

        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-warm/14 text-brand-warm">
            <Clock className="size-4" strokeWidth={2.2} />
          </span>

          <div className="min-w-0 flex-1">
            <p
              id="prayer-nav-prompt-title"
              className="text-sm font-bold text-brand-pearl"
            >
              Afficher les horaires dans la barre ?
            </p>
            <p className="mt-1 text-xs leading-relaxed text-brand-mist">
              La prochaine prière apparaît sous le logo. Tu pourras changer ça
              dans Réglages → Affichage.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={dismiss}
                className="rounded-xl border border-brand-line/45 px-3 py-1.5 text-xs font-semibold text-brand-soft transition-colors hover:border-brand-gold-400/30 hover:text-brand-pearl"
              >
                Plus tard
              </button>
              <button
                type="button"
                onClick={enable}
                className="rounded-xl bg-brand-warm px-3 py-1.5 text-xs font-bold text-brand-night transition-opacity hover:opacity-90"
              >
                Activer
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Fermer"
            className="flex size-7 shrink-0 items-center justify-center rounded-lg text-brand-steel-400 transition-colors hover:bg-white/5 hover:text-brand-pearl"
          >
            <X className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
