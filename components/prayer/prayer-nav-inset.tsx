"use client";

import Link from "next/link";
import { Loader2, MapPin } from "lucide-react";

import { useAppSettings } from "@/hooks/use-app-settings";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import { cn } from "@/lib/utils";

type PrayerNavInsetProps = {
  variant: "desktop" | "mobile";
};

/** Compact next-prayer chip for the right side of the desktop nav. */
export function PrayerNavSide() {
  const { hydrated, stickyPrayerBar } = useAppSettings();
  const { next, countdownShort, location, loading } = usePrayerTimes();

  if (!hydrated || !stickyPrayerBar) return null;

  return (
    <Link
      href="/priere"
      className="flex items-center justify-end gap-2 rounded-xl px-2 py-1.5 text-right transition-colors hover:bg-white/5"
    >
      {loading && !next ? (
        <Loader2 className="size-3.5 animate-spin text-brand-warm" />
      ) : next ? (
        <>
          <span className="min-w-0">
            <span className="block truncate text-[10px] font-bold tracking-wide text-brand-warm uppercase">
              {next.label}
              <span className="font-medium text-brand-steel-400 normal-case">
                {" "}
                · {countdownShort}
              </span>
            </span>
            <span className="block text-sm font-bold tabular-nums text-brand-pearl">
              {next.time}
            </span>
          </span>
          <span className="hidden items-center gap-1 text-[10px] text-brand-steel-400 xl:flex">
            <MapPin className="size-3 shrink-0" />
            <span className="max-w-[6rem] truncate">{location.name}</span>
          </span>
        </>
      ) : (
        <span className="text-xs text-brand-mist">Horaires…</span>
      )}
    </Link>
  );
}

/** Transparent prayer times row under the nav (desktop) / under the logo (mobile). */
export function PrayerNavInset({ variant }: PrayerNavInsetProps) {
  const { hydrated, stickyPrayerBar } = useAppSettings();
  const { next, countdown, slots, location, loading } = usePrayerTimes();

  if (!hydrated || !stickyPrayerBar) return null;

  const primarySlots = slots.filter((s) => !s.secondary);
  const isMobile = variant === "mobile";

  return (
    <Link
      href="/priere"
      className={cn(
        "block transition-colors hover:bg-white/[0.03]",
        isMobile
          ? "border-t border-white/5 px-1 pb-2 pt-2"
          : "border-t border-white/5 px-1 pb-1.5 pt-1.5"
      )}
    >
      {isMobile ? (
        <span className="mb-2 flex min-w-0 items-center gap-2.5 px-1">
          {loading && !next ? (
            <Loader2 className="size-3.5 shrink-0 animate-spin text-brand-warm" />
          ) : next ? (
            <>
              <span className="shrink-0 rounded-md bg-brand-warm/12 px-2 py-0.5 text-[10px] font-bold tracking-wide text-brand-warm uppercase">
                {next.label}
              </span>
              <span className="text-sm font-bold tabular-nums text-brand-pearl">
                {next.time}
              </span>
              <span className="text-[11px] tabular-nums text-brand-mist">
                {countdown}
              </span>
            </>
          ) : (
            <span className="text-xs text-brand-mist">Horaires…</span>
          )}
          <span className="ml-auto flex min-w-0 items-center gap-1 text-[10px] text-brand-steel-400">
            <MapPin className="size-3 shrink-0 opacity-80" />
            <span className="truncate">{location.name}</span>
          </span>
        </span>
      ) : null}

      {primarySlots.length > 0 ? (
        <ul
          className={cn(
            "flex items-stretch",
            isMobile
              ? "gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : "justify-center gap-1"
          )}
        >
          {primarySlots.map((slot) => {
            const isNext = next?.key === slot.key && !next.isTomorrow;
            return (
              <li
                key={slot.key}
                className={cn(
                  "rounded-lg px-2 py-1 text-center",
                  isMobile ? "min-w-[3.25rem] flex-1" : "min-w-[4.25rem]",
                  isNext && "bg-brand-warm/10"
                )}
              >
                <span
                  className={cn(
                    "block text-[9px] font-bold tracking-wider uppercase",
                    isNext ? "text-brand-warm" : "text-brand-steel-400"
                  )}
                >
                  {slot.label}
                </span>
                <span
                  className={cn(
                    "block text-[11px] font-semibold tabular-nums",
                    isNext ? "text-brand-pearl" : "text-brand-mist"
                  )}
                >
                  {slot.time}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </Link>
  );
}

export function usePrayerChromeActive() {
  const { hydrated, stickyPrayerBar } = useAppSettings();
  return hydrated && stickyPrayerBar;
}
