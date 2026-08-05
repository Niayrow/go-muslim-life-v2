"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

import { isNavActive, PRIMARY_NAV } from "@/components/layout/nav-items";
import { MoreSheet } from "@/components/layout/more-sheet";
import { useNavMotionIcons } from "@/hooks/use-nav-motion-icons";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const { ready, icons, MotionIconConfig } = useNavMotionIcons();

  const dock = (
    <>
      <nav
        aria-label="Navigation mobile"
        className="shell-mobile-only mobile-dock-chrome fixed inset-x-0 bottom-0 z-40 w-full pb-[env(safe-area-inset-bottom)]"
      >
        <div
          className="h-[4.35rem] px-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          }}
        >
          {PRIMARY_NAV.map((item) => {
            const Icon = icons[item.id];
            const isPlus = item.id === "plus";
            const active = isPlus
              ? moreOpen || isNavActive(pathname, item)
              : isNavActive(pathname, item);

            const iconProps = {
              size: 18,
              strokeWidth: active ? 2.45 : 2,
              ...(ready
                ? {
                    trigger: "parent-hover" as const,
                    mode: "signature" as const,
                    duration: 0.55,
                  }
                : {}),
              className: cn(
                "transition-colors",
                active
                  ? "text-brand-warm drop-shadow-[0_0_10px_rgba(240,209,188,0.35)]"
                  : "text-brand-steel-400"
              ),
            };

            const inner = (
              <>
                <span className="nav-tab__indicator" aria-hidden />
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-xl transition-all",
                    active &&
                      "bg-brand-warm/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  )}
                >
                  <Icon {...iconProps} />
                </span>
                <span
                  className={cn(
                    "text-[10px] font-semibold",
                    active ? "text-brand-warm" : "text-brand-steel-400"
                  )}
                >
                  {item.label}
                </span>
              </>
            );

            if (isPlus) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMoreOpen(true)}
                  aria-label={item.label}
                  aria-current={active ? "page" : undefined}
                  data-motion-icon-group={ready ? "" : undefined}
                  className={cn(
                    "nav-tab group relative flex h-full flex-col items-center justify-center gap-0.5 px-1 py-1 transition-colors",
                    active ? "nav-tab--active" : "nav-tab--idle"
                  )}
                >
                  {inner}
                </button>
              );
            }

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
                {inner}
              </Link>
            );
          })}
        </div>
      </nav>

      <MoreSheet open={moreOpen} onOpenChange={setMoreOpen} />
    </>
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
