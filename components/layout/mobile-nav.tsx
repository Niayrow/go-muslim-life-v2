"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { isNavActive, PRIMARY_NAV } from "@/components/layout/nav-items";
import { useNavMotionIcons } from "@/hooks/use-nav-motion-icons";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const { ready, icons, MotionIconConfig } = useNavMotionIcons();

  const dock = (
    <nav
      aria-label="Navigation mobile"
      className="shell-mobile-only mobile-dock-chrome fixed inset-x-0 bottom-0 z-40 w-full pb-[env(safe-area-inset-bottom)]"
    >
      <div
        className="h-[4.35rem] px-1"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${PRIMARY_NAV.length}, minmax(0, 1fr))`,
        }}
      >
        {PRIMARY_NAV.map((item) => {
          const Icon = icons[item.id];
          const active = isNavActive(pathname, item);

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              data-motion-icon-group={ready ? "" : undefined}
              className={cn(
                "nav-tab group relative flex h-full flex-col items-center justify-center gap-0.5 px-1 py-1 transition-colors",
                active ? "nav-tab--active" : "nav-tab--idle"
              )}
            >
              <span className="nav-tab__indicator" aria-hidden />
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-xl transition-all",
                  active &&
                    "bg-brand-warm/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                )}
              >
                <Icon
                  size={18}
                  strokeWidth={active ? 2.45 : 2}
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
                      ? "text-brand-warm drop-shadow-[0_0_10px_rgba(240,209,188,0.35)]"
                      : "text-brand-steel-400"
                  )}
                />
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold",
                  active ? "text-brand-warm" : "text-brand-steel-400"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );

  if (MotionIconConfig) {
    return (
      <MotionIconConfig trigger="hover" mode="signature" duration={0.55}>
        {dock as ReactNode}
      </MotionIconConfig>
    );
  }

  return dock;
}
