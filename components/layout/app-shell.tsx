"use client";

import { useEffect } from "react";

import { DeskNav } from "@/components/layout/desk-nav";
import { MobileHeader } from "@/components/layout/mobile-header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { useAppSettings } from "@/hooks/use-app-settings";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { stickyPrayerBar, hydrated } = useAppSettings();
  const showBar = hydrated && stickyPrayerBar;

  useEffect(() => {
    document.documentElement.classList.toggle("has-sticky-prayer", showBar);
    return () => {
      document.documentElement.classList.remove("has-sticky-prayer");
    };
  }, [showBar]);

  return (
    <div className="flex min-h-dvh flex-col">
      <DeskNav />
      <MobileHeader />
      <div
        className={cn(
          "shell-main flex min-h-0 flex-1 flex-col",
          showBar && "shell-main--sticky-prayer"
        )}
      >
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <SiteFooter />
      </div>
      <MobileNav />
    </div>
  );
}
