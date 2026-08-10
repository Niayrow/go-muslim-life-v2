"use client";

import Link from "next/link";

import { PrayerNavInset } from "@/components/prayer/prayer-nav-inset";

export function MobileHeader() {
  return (
    <header className="shell-mobile-only mobile-header-chrome sticky top-3 z-30 mx-3 mt-3">
      <div className="flex h-14 items-center justify-between px-1">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-xl bg-brand-warm/15 text-xs font-extrabold text-brand-warm">
            G
          </span>
          <span className="text-sm font-bold tracking-tight text-brand-pearl">
            GoMuslimLife
          </span>
        </Link>
        <Link
          href="/settings"
          className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-brand-mist transition-colors hover:bg-white/5 hover:text-brand-pearl"
        >
          Réglages
        </Link>
      </div>

      <PrayerNavInset variant="mobile" />
    </header>
  );
}
