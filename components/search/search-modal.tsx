"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Clock,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CATEGORY_LABELS,
  CATEGORY_STYLES,
  type SearchCategory,
  type SearchEntry,
  SITE_SEARCH_ENTRIES,
  RECENT_SEARCHES_KEY,
  getPopularEntries,
  groupSearchResults,
  highlightMatch,
  searchSite,
} from "@/lib/site-search";
import { cn } from "@/lib/utils";

type SearchModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function SearchItem({
  entry,
  query,
  isSelected,
  onClick,
  onMouseEnter,
  showCategory,
}: {
  entry: SearchEntry;
  query?: string;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  showCategory?: boolean;
}) {
  const Icon = entry.icon;
  const highlighted = query ? highlightMatch(entry.title, query) : null;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        "group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl border px-3.5 py-3 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isSelected
          ? "border-brand-gold-400/30 bg-brand-warm/10"
          : "border-transparent hover:border-brand-line/30 hover:bg-brand-panel-elevated/50"
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500",
          isSelected
            ? "border-brand-gold-400/40 bg-brand-warm/15 text-brand-warm"
            : "border-brand-line/30 bg-brand-night-soft/80 text-brand-steel-300 group-hover:border-brand-gold-400/25 group-hover:text-brand-warm"
        )}
      >
        <Icon className="size-[1.125rem]" strokeWidth={2.1} />
      </span>

      <span className="min-w-0 flex-1">
        <span
          className={cn(
            "block truncate text-sm font-bold",
            isSelected ? "text-brand-pearl" : "text-brand-soft group-hover:text-brand-pearl"
          )}
        >
          {highlighted ? (
            <>
              {highlighted.before}
              <span className="text-brand-warm">{highlighted.match}</span>
              {highlighted.after}
            </>
          ) : (
            entry.title
          )}
        </span>
        {entry.subtitle ? (
          <span className="mt-0.5 block truncate text-[11px] text-brand-mist">
            {entry.subtitle}
          </span>
        ) : null}
      </span>

      {showCategory ? (
        <span
          className={cn(
            "hidden shrink-0 rounded-lg border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase sm:inline-flex",
            CATEGORY_STYLES[entry.category]
          )}
        >
          {CATEGORY_LABELS[entry.category]}
        </span>
      ) : null}

      <ArrowRight
        className={cn(
          "size-3.5 shrink-0 transition-all duration-500",
          isSelected
            ? "translate-x-0 text-brand-warm opacity-100"
            : "-translate-x-1 text-brand-steel-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        )}
      />
    </button>
  );
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const populars = useMemo(() => getPopularEntries(), []);

  useEffect(() => {
    if (!open) return;
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (saved) setRecentSearches(JSON.parse(saved) as string[]);
    } catch {
      /* ignore */
    }
    setQuery("");
    setSelectedIndex(0);
    const t = window.setTimeout(() => inputRef.current?.focus(), 80);
    return () => window.clearTimeout(t);
  }, [open]);

  const results = useMemo(() => searchSite(query), [query]);
  const grouped = useMemo(() => groupSearchResults(results), [results]);

  const flatItems = useMemo(() => {
    if (query.trim()) return results;
    const recents = recentSearches
      .map((term) => SITE_SEARCH_ENTRIES.find((e) => e.title === term))
      .filter(Boolean) as SearchEntry[];
    return [...recents, ...populars];
  }, [query, results, recentSearches, populars]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const saveRecent = useCallback(
    (term: string) => {
      const updated = [term, ...recentSearches.filter((r) => r !== term)].slice(
        0,
        5
      );
      setRecentSearches(updated);
      try {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      } catch {
        /* ignore */
      }
    },
    [recentSearches]
  );

  const clearRecents = useCallback(() => {
    setRecentSearches([]);
    try {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const runCommand = useCallback(
    (href: string, title?: string) => {
      onOpenChange(false);
      if (title) saveRecent(title);
      router.push(href);
    },
    [onOpenChange, router, saveRecent]
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          Math.min(prev + 1, Math.max(flatItems.length - 1, 0))
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = flatItems[selectedIndex];
        if (item) runCommand(item.href, item.title);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, flatItems, selectedIndex, runCommand]);

  useEffect(() => {
    if (!listRef.current) return;
    const selected = listRef.current.querySelector(
      `[data-index="${selectedIndex}"]`
    );
    selected?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  let flatIndex = -1;
  const nextIndex = () => ++flatIndex;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden border-brand-gold-400/20 bg-brand-night/95 p-0 shadow-2xl backdrop-blur-xl">
        <DialogTitle className="sr-only">Recherche sur le site</DialogTitle>
        <DialogDescription className="sr-only">
          Recherchez pages, modules, chapitres, histoires et sourates.
        </DialogDescription>

        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-brand-warm/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-brand-gold-400/10 blur-3xl"
        />

        <div className="relative z-10 flex items-center gap-3 border-b border-brand-line/30 bg-brand-panel/40 px-4 sm:px-5">
          <span className="relative shrink-0 text-brand-warm">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-brand-warm/20 blur-md"
            />
            <Search className="relative size-5" strokeWidth={2.1} />
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Que cherchez-vous ?"
            className="h-14 w-full bg-transparent text-base font-semibold text-brand-pearl outline-none placeholder:text-brand-mist sm:h-16 sm:text-lg"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-line/40 bg-brand-panel text-brand-mist transition-colors hover:border-brand-gold-400/35 hover:text-brand-warm"
              aria-label="Effacer"
            >
              <X className="size-3.5" />
            </button>
          ) : (
            <kbd className="hidden shrink-0 rounded-lg border border-brand-line/40 bg-brand-night/60 px-2 py-1 text-[10px] font-bold tracking-wider text-brand-steel-400 uppercase sm:inline-flex">
              ESC
            </kbd>
          )}
        </div>

        <div
          ref={listRef}
          className="relative z-10 max-h-[min(420px,55dvh)] overflow-y-auto overscroll-contain px-2 pb-2 sm:px-3"
        >
          {!query.trim() ? (
            <>
              {recentSearches.length > 0 ? (
                <div className="pt-3">
                  <div className="mb-1.5 flex items-center justify-between px-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.16em] text-brand-steel-400 uppercase">
                      <Clock className="size-3" />
                      Récentes
                    </span>
                    <button
                      type="button"
                      onClick={clearRecents}
                      className="text-[10px] font-semibold tracking-wide text-brand-mist uppercase transition-colors hover:text-brand-warm"
                    >
                      Effacer
                    </button>
                  </div>
                  {recentSearches.map((term) => {
                    const match = SITE_SEARCH_ENTRIES.find(
                      (e) => e.title === term
                    );
                    if (!match) return null;
                    const idx = nextIndex();
                    return (
                      <div key={`recent-${match.id}`} data-index={idx}>
                        <SearchItem
                          entry={match}
                          isSelected={selectedIndex === idx}
                          onClick={() => runCommand(match.href, match.title)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : null}

              <div className="pt-3">
                <div className="mb-1.5 flex items-center gap-1.5 px-2">
                  <Sparkles className="size-3 text-brand-warm" />
                  <span className="text-[10px] font-bold tracking-[0.16em] text-brand-gold-400 uppercase">
                    Suggestions
                  </span>
                </div>
                {populars.map((item) => {
                  const idx = nextIndex();
                  return (
                    <div key={`pop-${item.id}`} data-index={idx}>
                      <SearchItem
                        entry={item}
                        isSelected={selectedIndex === idx}
                        onClick={() => runCommand(item.href, item.title)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        showCategory
                      />
                    </div>
                  );
                })}
              </div>

              <p className="px-3 py-4 text-[10px] font-medium tracking-wide text-brand-steel-500">
                Astuce : essayez « Fatiha », « Wudu », « Muhammad » ou « 36 »
              </p>
            </>
          ) : null}

          {query.trim() && results.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-14 text-center">
              <span className="flex size-14 items-center justify-center rounded-full border border-brand-line/30 bg-brand-panel/60 text-brand-steel-400">
                <Search className="size-6" />
              </span>
              <p className="text-sm text-brand-mist">
                Aucun résultat pour{" "}
                <span className="font-bold text-brand-pearl">« {query} »</span>
              </p>
              <p className="text-xs text-brand-steel-500">
                Essayez « Prière », « Zakat » ou « Ya-Sin »
              </p>
            </div>
          ) : null}

          {query.trim()
            ? (
                Object.entries(grouped) as [SearchCategory, SearchEntry[]][]
              ).map(([category, entries]) => (
                <div key={category} className="pt-3">
                  <div className="mb-1 flex items-center gap-2 px-2">
                    <span
                      className={cn(
                        "rounded-md border px-2 py-0.5 text-[10px] font-bold tracking-[0.14em] uppercase",
                        CATEGORY_STYLES[category]
                      )}
                    >
                      {CATEGORY_LABELS[category]}
                    </span>
                    <span className="text-[10px] font-semibold text-brand-steel-500">
                      {entries.length}
                    </span>
                  </div>
                  {entries.map((entry) => {
                    const idx = nextIndex();
                    return (
                      <div key={entry.id} data-index={idx}>
                        <SearchItem
                          entry={entry}
                          query={query}
                          isSelected={selectedIndex === idx}
                          onClick={() => runCommand(entry.href, entry.title)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                        />
                      </div>
                    );
                  })}
                </div>
              ))
            : null}

          {query.trim() && results.length > 0 ? (
            <div className="mt-2 flex items-center justify-between border-t border-brand-line/25 px-3 py-3">
              <span className="text-[10px] font-bold tracking-wider text-brand-steel-400 uppercase">
                {results.length} résultat{results.length > 1 ? "s" : ""}
              </span>
              <span className="hidden items-center gap-3 text-[10px] font-semibold text-brand-steel-500 uppercase sm:flex">
                <span>
                  <kbd className="rounded border border-brand-line/40 bg-brand-night/50 px-1.5 py-0.5 font-mono text-brand-soft">
                    ↑↓
                  </kbd>{" "}
                  naviguer
                </span>
                <span>
                  <kbd className="rounded border border-brand-line/40 bg-brand-night/50 px-1.5 py-0.5 font-mono text-brand-soft">
                    ↵
                  </kbd>{" "}
                  ouvrir
                </span>
              </span>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
