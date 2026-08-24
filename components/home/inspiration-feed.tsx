"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  LoaderCircle,
  ScrollText,
  Sparkles,
} from "lucide-react";

import {
  INSPIRATION_ITEMS,
  type InspirationItem,
} from "@/lib/inspiration/data";
import { cn } from "@/lib/utils";

const INITIAL_COUNT = 12;
const BATCH_SIZE = 6;
const MAX_RENDERED = 36;
const ease = [0.16, 1, 0.3, 1] as const;

type FeedEntry = {
  key: string;
  item: InspirationItem;
  position: number;
};

type InspirationFeedProps = {
  active?: boolean;
};

function scoreFor(id: string, cycle: number) {
  let hash = 2166136261 ^ cycle;
  for (let index = 0; index < id.length; index += 1) {
    hash ^= id.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function sortedCycleItems(cycle: number) {
  return [...INSPIRATION_ITEMS].sort(
    (left, right) => scoreFor(left.id, cycle) - scoreFor(right.id, cycle)
  );
}

function cycleItems(cycle: number) {
  const items = sortedCycleItems(cycle);
  if (cycle === 0 || items.length < 2) return items;

  const previousItems = sortedCycleItems(cycle - 1);
  const previousLast = previousItems[previousItems.length - 1];
  if (items[0]?.id === previousLast?.id) {
    [items[0], items[1]] = [items[1]!, items[0]!];
  }
  return items;
}

function buildEntries(start: number, count: number): FeedEntry[] {
  return Array.from({ length: count }, (_, offset) => {
    const position = start + offset;
    const cycle = Math.floor(position / INSPIRATION_ITEMS.length);
    const index = position % INSPIRATION_ITEMS.length;
    const item = cycleItems(cycle)[index] ?? INSPIRATION_ITEMS[0]!;

    return {
      key: `${cycle}-${position}-${item.id}`,
      item,
      position,
    };
  });
}

function InspirationCard({
  entry,
  active,
}: {
  entry: FeedEntry;
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const isVerse = entry.item.kind === "verse";
  const Icon = isVerse ? BookOpen : ScrollText;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={
        active
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: reduceMotion ? 0 : 18, scale: 0.99 }
      }
      transition={{ duration: 0.48, ease }}
      className={cn(
        "shaped-card-shadow relative isolate flex h-[22.5rem] flex-col overflow-hidden rounded-[1.6rem] border p-5 text-left sm:h-[24rem] sm:p-6",
        isVerse
          ? "border-cyan-300/25 bg-[linear-gradient(145deg,rgba(64,176,201,0.14),rgba(19,38,55,0.97)_45%,rgba(10,22,35,0.99))]"
          : "border-brand-gold-400/28 bg-[linear-gradient(145deg,rgba(206,166,135,0.15),rgba(30,39,54,0.97)_45%,rgba(12,22,35,0.99))]"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-20 -right-16 size-56 rounded-full blur-3xl",
          isVerse ? "bg-cyan-300/10" : "bg-brand-warm/10"
        )}
      />
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
          isVerse ? "via-cyan-300/70" : "via-brand-warm/70"
        )}
      />

      <div className="relative flex items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase",
            isVerse
              ? "border-cyan-300/25 bg-cyan-300/8 text-cyan-200"
              : "border-brand-gold-400/25 bg-brand-warm/8 text-brand-warm"
          )}
        >
          <Icon className="size-3.5" strokeWidth={2} />
          {isVerse ? "Verset du Coran" : "Parole prophétique"}
        </span>
        <span className="text-[10px] font-semibold tracking-[0.14em] text-brand-steel-400 tabular-nums uppercase">
          {String(entry.position + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-5 flex min-h-0 flex-1 flex-col justify-center gap-3">
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic line-clamp-3 text-right text-[1.45rem] leading-[1.85] text-brand-pearl sm:text-[1.65rem]"
        >
          {entry.item.arabic}
        </p>
        <p className="line-clamp-3 text-sm leading-relaxed text-brand-soft sm:text-[15px]">
          « {entry.item.translation} »
        </p>
      </div>

      <div className="relative mt-auto flex items-end justify-between gap-4 pt-6">
        <div>
          <p
            className={cn(
              "text-xs font-bold",
              isVerse ? "text-cyan-200" : "text-brand-warm"
            )}
          >
            {entry.item.reference}
          </p>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-brand-steel-400 uppercase">
            {entry.item.sourceLabel}
          </p>
        </div>
        <a
          href={entry.item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Vérifier la source : ${entry.item.reference}`}
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isVerse
              ? "border-cyan-300/25 bg-cyan-300/8 text-cyan-200 hover:border-cyan-300/50 hover:bg-cyan-300/14"
              : "border-brand-gold-400/25 bg-brand-warm/8 text-brand-warm hover:border-brand-gold-400/50 hover:bg-brand-warm/14"
          )}
        >
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </motion.article>
  );
}

export function InspirationFeed({ active = true }: InspirationFeedProps) {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const nextPositionRef = useRef(INITIAL_COUNT);
  const pendingAdjustmentRef = useRef<{
    container: HTMLElement;
    amount: number;
  } | null>(null);
  const loadingRef = useRef(false);
  const [entries, setEntries] = useState(() => buildEntries(0, INITIAL_COUNT));
  const [announcement, setAnnouncement] = useState("");

  const loadMore = useCallback(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;

    const nextEntries = buildEntries(nextPositionRef.current, BATCH_SIZE);
    nextPositionRef.current += BATCH_SIZE;

    setEntries((current) => {
      const combined = [...current, ...nextEntries];
      const overflow = Math.max(0, combined.length - MAX_RENDERED);

      if (overflow > 0 && rootRef.current) {
        const firstCard = rootRef.current.querySelector<HTMLElement>(
          "[data-feed-card]"
        );
        const firstKeptCard = rootRef.current.querySelectorAll<HTMLElement>(
          "[data-feed-card]"
        )[overflow];
        const container =
          rootRef.current.closest<HTMLElement>("[data-snap-scroll='true']");

        if (firstCard && firstKeptCard && container) {
          pendingAdjustmentRef.current = {
            container,
            amount:
              firstKeptCard.getBoundingClientRect().top -
              firstCard.getBoundingClientRect().top,
          };
        }
      }

      return overflow > 0 ? combined.slice(overflow) : combined;
    });
    setAnnouncement(`${BATCH_SIZE} nouveaux rappels ont été ajoutés.`);

    window.setTimeout(() => {
      loadingRef.current = false;
    }, 180);
  }, []);

  useLayoutEffect(() => {
    const pending = pendingAdjustmentRef.current;
    if (!pending) return;
    pending.container.scrollTop -= pending.amount;
    pendingAdjustmentRef.current = null;
  }, [entries]);

  useEffect(() => {
    if (!active) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const root =
      rootRef.current?.closest<HTMLElement>("[data-snap-scroll='true']") ?? null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) loadMore();
      },
      {
        root,
        rootMargin: "0px 0px 420px",
        threshold: 0.01,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [active, loadMore]);

  return (
    <div
      ref={rootRef}
      className="mx-auto w-full max-w-5xl px-1 pt-2 pb-8 text-center md:pt-5"
    >
      <motion.header
        initial={false}
        animate={
          active
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: reduceMotion ? 0 : 24 }
        }
        transition={{ duration: 0.6, ease }}
        className="mx-auto max-w-2xl"
      >
        <span className="float-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-brand-gold-300 uppercase">
          <Sparkles className="size-3.5 text-brand-warm" strokeWidth={2.1} />
          Au fil des rappels
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-pearl sm:text-4xl md:text-5xl">
          Des paroles qui{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-brand-warm to-brand-gold-400 bg-clip-text text-transparent">
            éclairent
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-mist md:text-base">
          Versets du Coran et hadiths authentiques, à méditer un rappel après
          l’autre.
        </p>
      </motion.header>

      <div
        role="feed"
        aria-label="Flux de versets du Coran et de hadiths authentiques"
        className="mt-7 grid grid-cols-1 gap-4 md:mt-9 md:grid-cols-2 md:gap-5"
      >
        {entries.map((entry) => (
          <div key={entry.key} data-feed-card className="h-full">
            <InspirationCard entry={entry} active={active} />
          </div>
        ))}
      </div>

      <div ref={sentinelRef} aria-hidden className="h-px" />
      <div className="mt-6 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={loadMore}
          className="float-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-brand-warm outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-400"
        >
          <LoaderCircle className="size-3.5" />
          Afficher d’autres rappels
        </button>
        <p className="text-[11px] text-brand-steel-400">
          Le flux se renouvelle automatiquement pendant votre lecture.
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
