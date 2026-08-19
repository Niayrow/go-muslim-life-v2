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
      className="shell-mobile-only pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.7rem,env(safe-area-inset-bottom))]"
    >
      <div className="mobile-dock-glass pointer-events-auto mx-auto max-w-md">
        <div
          className="relative z-[1] h-[4.15rem] px-1.5"
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
                <span
                  className={cn(
                    "relative flex size-9 items-center justify-center rounded-2xl transition-all",
                    active && "mobile-dock-tab-chip"
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
                      "relative z-[1] transition-colors",
                      active
                        ? "text-brand-warm drop-shadow-[0_0_10px_rgba(240,209,188,0.45)]"
                        : "text-brand-pearl"
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "text-[10px] font-semibold",
                    active ? "text-brand-warm" : "text-brand-pearl/80"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
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
