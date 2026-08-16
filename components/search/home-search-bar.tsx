"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Search, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const SearchModal = dynamic(
  () =>
    import("@/components/search/search-modal").then((m) => m.SearchModal),
  { ssr: false }
);

type HomeSearchBarProps = {
  className?: string;
};

export function HomeSearchBar({ className }: HomeSearchBarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <SearchModal open={open} onOpenChange={setOpen} />

      <div className={cn("w-full max-w-xl", className)}>
        <div className="group relative overflow-hidden rounded-[1.35rem] p-px transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01]">
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-brand-gold-500/50 via-brand-warm/60 to-brand-gold-400/50 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-3 bg-brand-warm/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative flex w-full items-center gap-3.5 rounded-[calc(1.35rem-1px)] border border-brand-gold-400/15 bg-brand-night/90 px-4 py-3.5 text-left backdrop-blur-xl transition-colors duration-500 hover:bg-brand-panel/90 sm:gap-4 sm:px-5 sm:py-4"
          >
            <span className="relative shrink-0">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-brand-warm/25 blur-md opacity-70"
              />
              <Search
                className="relative size-5 text-brand-warm transition-transform duration-500 group-hover:scale-110 sm:size-[1.35rem]"
                strokeWidth={2.1}
              />
            </span>

            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-1.5">
                <span className="truncate text-[15px] font-bold tracking-tight text-brand-pearl sm:text-base">
                  Que cherchez-vous ?
                </span>
                <Sparkles className="size-3.5 shrink-0 text-brand-gold-400 opacity-80" />
              </span>
              <span className="mt-0.5 block truncate text-xs text-brand-mist">
                Sourates, modules, prière, histoires…
              </span>
            </span>

            <kbd className="ml-auto hidden shrink-0 items-center gap-1 rounded-xl border border-brand-line/40 bg-brand-panel/80 px-2.5 py-1.5 text-[10px] font-bold tracking-widest text-brand-steel-400 uppercase transition-colors duration-500 group-hover:border-brand-gold-400/35 group-hover:text-brand-warm sm:inline-flex">
              <span className="opacity-70">Ctrl</span>
              <span className="opacity-40">+</span>
              <span>K</span>
            </kbd>
          </button>
        </div>
      </div>
    </>
  );
}
