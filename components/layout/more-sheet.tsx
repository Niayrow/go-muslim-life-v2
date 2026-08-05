"use client";

import Link from "next/link";

import { MORE_LINKS } from "@/components/layout/nav-items";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type MoreSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MoreSheet({ open, onOpenChange }: MoreSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Plus</SheetTitle>
          <SheetDescription>
            Modules secondaires et compte — bientôt branchés sur v1.
          </SheetDescription>
        </SheetHeader>

        <div className="overflow-y-auto px-4 pb-6">
          <ul className="space-y-2">
            {MORE_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => onOpenChange(false)}
                    className="glass-panel-interactive flex items-center gap-3 rounded-2xl px-4 py-3"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-warm/10 text-brand-warm">
                      <Icon className="size-4" strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-brand-pearl">
                        {link.label}
                      </span>
                      <span className="block text-xs text-brand-mist">
                        {link.description}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
