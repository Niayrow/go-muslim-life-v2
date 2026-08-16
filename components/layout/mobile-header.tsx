"use client";

import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { PrayerNavInset } from "@/components/prayer/prayer-nav-inset";

export function MobileHeader() {
  return (
    <header className="shell-mobile-only mobile-header-chrome sticky top-3 z-30 mx-3 mt-3">
      <div className="flex h-14 items-center justify-between px-1">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-gold-400/25">
            <BrandLogo size={32} priority />
          </span>
          <span className="nav-brand-shine text-sm font-bold tracking-tight">
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
