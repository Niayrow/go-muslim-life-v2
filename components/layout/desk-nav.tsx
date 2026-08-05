"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { isNavActive, PRIMARY_NAV } from "@/components/layout/nav-items";
import { useNavMotionIcons } from "@/hooks/use-nav-motion-icons";
import { cn } from "@/lib/utils";

export function DeskNav() {
  const pathname = usePathname();
  const plusItem = PRIMARY_NAV.find((i) => i.id === "plus")!;
  const { ready, icons, MotionIconConfig } = useNavMotionIcons();

  const bar = (
    <header className="shell-desktop-only desk-nav-chrome fixed inset-x-0 top-0 z-40 border-b border-brand-line/40">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-xl px-1.5 py-1 transition-colors hover:bg-brand-panel-elevated/60"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand-warm/15 text-sm font-extrabold text-brand-warm">
            G
          </span>
          <span className="text-[15px] font-bold tracking-tight text-brand-pearl">
            GoMuslimLife
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-center gap-1">
          {PRIMARY_NAV.filter((item) => item.id !== "plus").map((item) => {
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
                    : "nav-tab--idle hover:bg-brand-panel-elevated/50"
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
        </div>

        <Link
          href="/plus"
          className={cn(
            "brand-button-secondary shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
            isNavActive(pathname, plusItem) &&
              "border-brand-gold-400/35 text-brand-warm"
          )}
        >
          Plus
        </Link>
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
