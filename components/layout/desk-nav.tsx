"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { isNavActive, PRIMARY_NAV } from "@/components/layout/nav-items";
import {
  PrayerNavInset,
  PrayerNavSide,
  usePrayerChromeActive,
} from "@/components/prayer/prayer-nav-inset";
import { useNavMotionIcons } from "@/hooks/use-nav-motion-icons";
import { cn } from "@/lib/utils";

export function DeskNav() {
  const pathname = usePathname();
  const { ready, icons, MotionIconConfig } = useNavMotionIcons();
  const prayerChrome = usePrayerChromeActive();

  const bar = (
    <header className="shell-desktop-only desk-nav-chrome fixed inset-x-0 top-3 z-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative flex h-14 items-center">
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-2.5 rounded-xl px-1.5 py-1 transition-colors hover:bg-white/5"
          >
            <span className="relative size-8 shrink-0 overflow-hidden rounded-full ring-1 ring-brand-gold-400/25">
              <BrandLogo size={32} priority />
            </span>
            <span className="nav-brand-shine text-[15px] font-bold tracking-tight">
              GoMuslimLife
            </span>
          </Link>

          <nav
            className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1"
            aria-label="Navigation principale"
          >
            {PRIMARY_NAV.map((item) => {
              const active = isNavActive(pathname, item);
              const Icon = icons[item.id];

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  data-motion-icon-group={ready ? "" : undefined}
                  className={cn(
                    "nav-tab group relative flex items-center gap-2 rounded-xl px-3.5 py-2 transition-colors",
                    active
                      ? "nav-tab--active bg-brand-warm/10"
                      : "nav-tab--idle hover:bg-white/5"
                  )}
                >
                  <Icon
                    size={16}
                    strokeWidth={active ? 2.4 : 2}
                    {...(ready
                      ? {
                          trigger: "parent-hover" as const,
                          mode: "signature" as const,
                          duration: 0.55,
                        }
                      : {})}
                    className={cn(
                      "transition-colors",
                      active
                        ? "text-brand-warm"
                        : "text-brand-steel-400 group-hover:text-brand-warm"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      active
                        ? "text-brand-warm"
                        : "text-brand-steel-300 group-hover:text-brand-pearl"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {prayerChrome ? (
            <div className="relative z-10 ml-auto max-w-[14rem] shrink-0 lg:max-w-[18rem]">
              <PrayerNavSide />
            </div>
          ) : null}
        </div>

        <PrayerNavInset variant="desktop" />
      </div>
    </header>
  );

  if (MotionIconConfig) {
    return (
      <MotionIconConfig trigger="hover" mode="signature" duration={0.55}>
        {bar as ReactNode}
      </MotionIconConfig>
    );
  }

  return bar;
}
