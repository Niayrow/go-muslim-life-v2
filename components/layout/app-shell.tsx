"use client";

import { DeskNav } from "@/components/layout/desk-nav";
import { MobileHeader } from "@/components/layout/mobile-header";
import { MobileNav } from "@/components/layout/mobile-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DeskNav />
      <MobileHeader />
      <div className="shell-main flex min-h-0 flex-1 flex-col">{children}</div>
      <MobileNav />
    </>
  );
}
