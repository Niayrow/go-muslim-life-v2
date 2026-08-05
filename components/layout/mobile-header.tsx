"use client";

import Link from "next/link";

export function MobileHeader() {
  return (
    <header className="shell-mobile-only sticky top-0 z-30 border-b border-brand-line/30 bg-brand-night/80 backdrop-blur-xl">
      <div className="flex h-14 items-center justify-between px-4">
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
          className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-brand-mist transition-colors hover:bg-brand-panel-elevated hover:text-brand-pearl"
        >
          Réglages
        </Link>
      </div>
    </header>
  );
}
