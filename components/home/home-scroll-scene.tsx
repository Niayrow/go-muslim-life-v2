"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { motion, useReducedMotion } from "motion/react";

import { PrayerLayer } from "@/components/home/prayer-layer";
import { QuickAccessLayer } from "@/components/home/quick-access";
import { ModulesLayer } from "@/components/home/modules-section";
import { InspirationFeed } from "@/components/home/inspiration-feed";
import { SawraHeroCta } from "@/components/home/sawra-hero-cta";
import { HomeSearchBar } from "@/components/search/home-search-bar";
import { cn } from "@/lib/utils";

type LayerId = "hero" | "prayer" | "quick" | "modules" | "inspiration";

const LAYERS: LayerId[] = [
  "hero",
  "prayer",
  "quick",
  "modules",
  "inspiration",
];
const LAYER_LABELS: Record<LayerId, string> = {
  hero: "Accueil",
  prayer: "Horaires",
  quick: "Accès rapide",
  modules: "Modules",
  inspiration: "Rappels",
};
const PAGE_COUNT = LAYERS.length;
const LAYER_DURATION_S = 1.05;
const SNAP_LOCK_MS = 1100;
const WHEEL_THRESHOLD = 12;
const TOUCH_THRESHOLD = 56;
const MOBILE_PAGE_MS = 280;

const MOBILE_LAYOUT_MQ = "(max-width: 767px)";

function subscribeMobileLayout(onChange: () => void) {
  const mq = window.matchMedia(MOBILE_LAYOUT_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMobileLayoutSnapshot() {
  return window.matchMedia(MOBILE_LAYOUT_MQ).matches;
}

function getMobileLayoutServerSnapshot() {
  return true;
}

function useIsMobileLayout() {
  return useSyncExternalStore(
    subscribeMobileLayout,
    getMobileLayoutSnapshot,
    getMobileLayoutServerSnapshot
  );
}

function findScrollableParent(target: EventTarget | null): HTMLElement | null {
  let node = target instanceof HTMLElement ? target : null;
  while (node && node !== document.body) {
    if (node.dataset.snapScroll === "true") {
      if (node.scrollHeight > node.clientHeight + 8) return node;
    }
    const { overflowY } = window.getComputedStyle(node);
    if (
      (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") &&
      node.scrollHeight > node.clientHeight + 8
    ) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

/** Vitesses parallax (px par “page”) — loin = lent, près = rapide. */
const PARALLAX = {
  bgFar: 42,
  bgMid: 78,
  bgNear: 128,
  shell: 140,
  content: 56,
} as const;

function HeroScrollHint({
  onClick,
  className,
  lite = false,
}: {
  onClick?: () => void;
  className?: string;
  lite?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const staticHint = Boolean(reduceMotion || lite);

  return (
    <motion.button
      type="button"
      aria-label="Défiler vers le bas"
      onClick={onClick}
      initial={staticHint ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: staticHint ? 0 : 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col items-center gap-2.5 outline-none",
        className
      )}
    >
      <span className="text-[10px] font-bold tracking-[0.28em] text-brand-gold-300/80 uppercase transition-colors group-hover:text-brand-warm">
        Explorer
      </span>

      {/* Souris élégante */}
      <span className="relative flex h-9 w-6 items-start justify-center rounded-full border border-brand-gold-400/45 bg-brand-panel/30 shadow-[0_0_24px_rgba(206,166,135,0.18)]">
        <motion.span
          aria-hidden
          className="mt-1.5 h-1.5 w-1 rounded-full bg-brand-warm"
          animate={
            staticHint
              ? undefined
              : {
                  y: [0, 8, 0],
                  opacity: [1, 0.35, 1],
                }
          }
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-brand-warm/10 opacity-0 blur-md transition-opacity group-hover:opacity-100"
        />
      </span>

      {/* Chevrons cascade */}
      <span className="relative flex h-6 w-5 flex-col items-center">
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute top-0 left-1/2 -ml-[4px] h-2 w-2 rotate-45 border-r border-b border-brand-gold-400/70"
            animate={
              staticHint
                ? { y: i * 5, opacity: 0.7 }
                : {
                    y: [0, 8],
                    opacity: [0.15, 0.95, 0.15],
                  }
            }
            transition={{
              duration: 1.55,
              repeat: staticHint ? 0 : Infinity,
              ease: "easeInOut",
              delay: i * 0.22,
            }}
          />
        ))}
      </span>
    </motion.button>
  );
}

function HeroLayer({
  offset = 0,
  active = true,
  plain = false,
}: {
  offset?: number;
  active?: boolean;
  plain?: boolean;
}) {
  return (
    <div className="flex max-w-4xl flex-col items-center gap-4 text-center sm:gap-5 md:gap-7">
      <ParallaxReveal plain={plain} offset={offset} depth={0.45} active={active} index={0}>
        <p
          className="hero-bismillah-gradient font-arabic text-2xl leading-normal sm:text-[1.75rem] md:text-3xl lg:text-[2rem]"
          dir="rtl"
        >
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
      </ParallaxReveal>

      <ParallaxReveal plain={plain} offset={offset} depth={0.7} active={active} index={1}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-gold-400/60 to-transparent md:w-24" />
      </ParallaxReveal>

      <ParallaxReveal plain={plain} offset={offset} depth={1} active={active} index={2}>
        <h1 className="hero-title-gradient text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          GoMuslimLife
        </h1>
      </ParallaxReveal>

      <ParallaxReveal plain={plain} offset={offset} depth={1.25} active={active} index={3}>
        <h2 className="max-w-2xl text-xl font-bold tracking-tight text-brand-pearl/90 sm:text-2xl md:text-3xl">
          Apprenez et Apaisez votre Cœur.
        </h2>
      </ParallaxReveal>

      <ParallaxReveal plain={plain} offset={offset} depth={1.45} active={active} index={4}>
        <p className="max-w-xl text-base text-brand-mist sm:text-lg md:text-xl">
          Découvrez la vie des{" "}
          <span className="hero-word-halo font-semibold text-brand-warm">
            Prophètes
          </span>{" "}
          et maîtrisez les bases de votre religion.
        </p>
      </ParallaxReveal>

      <ParallaxReveal
        plain={plain}
        offset={offset}
        depth={1.55}
        active={active}
        index={5}
        className="w-full max-w-xl"
      >
        <HomeSearchBar />
      </ParallaxReveal>

      <ParallaxReveal plain={plain} offset={offset} depth={1.7} active={active} index={6}>
        <SawraHeroCta />
      </ParallaxReveal>
    </div>
  );
}

/** Courbe plus amortie pour le snap plein écran (arrive doucement à l’arrêt). */
const pageEase = [0.16, 1, 0.3, 1] as const;

const parallaxTransition = {
  duration: LAYER_DURATION_S,
  ease: pageEase,
} as const;

/** Élément avec parallax + apparition en cascade quand la page devient active. */
function ParallaxReveal({
  offset,
  depth,
  active,
  index,
  children,
  className,
  plain = false,
}: {
  offset: number;
  depth: number;
  active: boolean;
  index: number;
  children: React.ReactNode;
  className?: string;
  plain?: boolean;
}) {
  if (plain) {
    return <div className={className}>{children}</div>;
  }

  const parallaxY = offset * PARALLAX.content * depth;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: parallaxY + 36 }}
      animate={
        active
          ? { opacity: 1, y: parallaxY }
          : { opacity: 0, y: parallaxY + 28 }
      }
      transition={{
        duration: active ? 0.65 : 0.3,
        delay: active ? 0.18 + index * 0.09 : 0,
        ease: pageEase,
      }}
    >
      {children}
    </motion.div>
  );
}

/** Wrapper léger pour le contenu des pages (parallax shell interne). */
function ParallaxPiece({
  offset,
  depth,
  children,
  className,
}: {
  offset: number;
  depth: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ y: offset * PARALLAX.content * depth }}
      transition={parallaxTransition}
    >
      {children}
    </motion.div>
  );
}

function layerMotion(layerIndex: number, page: number) {
  const delta = layerIndex - page;
  const active = delta === 0;

  return {
    opacity: active ? 1 : 0,
    y: delta * PARALLAX.shell,
    scale: active ? 1 : 0.96,
  };
}

function AmbientBg({ page = 0, staticBg = false }: { page?: number; staticBg?: boolean }) {
  if (staticBg) {
    return (
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[18%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-warm/10 blur-[64px]" />
        <div className="absolute right-[8%] bottom-[18%] h-48 w-48 rounded-full bg-brand-steel-400/10 blur-[48px]" />
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Plan lointain — presque immobile */}
      <motion.div
        className="absolute top-[18%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-warm/12 blur-[110px] md:h-[32rem] md:w-[32rem]"
        animate={{
          y: page * -PARALLAX.bgFar,
          scale: 1 + page * 0.04,
        }}
        transition={{ ...parallaxTransition, duration: LAYER_DURATION_S * 1.25 }}
      />
      {/* Plan médian */}
      <motion.div
        className="absolute right-[8%] bottom-[18%] h-64 w-64 rounded-full bg-brand-steel-400/12 blur-[95px] md:h-80 md:w-80"
        animate={{
          y: page * PARALLAX.bgMid * 0.55,
          x: page * -PARALLAX.bgMid * 0.28,
        }}
        transition={{ ...parallaxTransition, duration: LAYER_DURATION_S * 1.1 }}
      />
      {/* Plan proche — bouge le plus */}
      <motion.div
        className="absolute -left-[8%] top-[55%] h-52 w-52 rounded-full bg-brand-gold-400/10 blur-[80px] md:h-72 md:w-72"
        animate={{
          y: page * -PARALLAX.bgNear * 0.45,
          x: page * PARALLAX.bgNear * 0.2,
          scale: 1 + page * 0.06,
        }}
        transition={parallaxTransition}
      />
    </div>
  );
}

/** Mobile / reduced-motion : sections empilées + apparition au scroll. */
function MobileRevealSection({
  children,
  className,
  amount = 0.35,
  forceActive = false,
  sectionRef,
}: {
  children: (active: boolean) => React.ReactNode;
  className?: string;
  amount?: number;
  forceActive?: boolean;
  sectionRef?: React.RefObject<HTMLElement | null>;
}) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(forceActive);

  return (
    <motion.section
      ref={sectionRef}
      className={cn(
        "relative flex w-full flex-col items-center justify-center",
        className
      )}
      viewport={{ amount, once: true, margin: "0px 0px -8% 0px" }}
      onViewportEnter={() => setActive(true)}
    >
      <motion.div
        className="flex w-full flex-col items-center justify-center"
        initial={false}
        animate={
          active || reduceMotion
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 40, scale: 0.97 }
        }
        transition={{ duration: 0.75, ease: pageEase }}
      >
        {children(active || Boolean(reduceMotion))}
      </motion.div>
    </motion.section>
  );
}

function MobileHomeFlow() {
  const prayerRef = useRef<HTMLElement | null>(null);

  return (
    <div className="relative flex w-full flex-col">
      <AmbientBg />

      <MobileRevealSection
        className="relative flex min-h-[88dvh] flex-col items-center justify-center gap-6 px-4 pb-28 pt-10"
        amount={0.2}
        forceActive
      >
        {() => (
          <>
            <HeroLayer />
            <HeroScrollHint
              onClick={() =>
                prayerRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            />
          </>
        )}
      </MobileRevealSection>

      <MobileRevealSection
        className="min-h-[90dvh] px-4 py-12"
        amount={0.3}
        sectionRef={prayerRef}
      >
        {(active) => <PrayerLayer active={active} />}
      </MobileRevealSection>

      <MobileRevealSection className="px-4 py-14" amount={0.25}>
        {(active) => <QuickAccessLayer active={active} />}
      </MobileRevealSection>

      <MobileRevealSection
        className="px-4 py-14"
        amount={0.2}
      >
        {(active) => <ModulesLayer active={active} />}
      </MobileRevealSection>

      <MobileRevealSection
        className="px-4 py-14 pb-[calc(5.6rem+env(safe-area-inset-bottom))]"
        amount={0.1}
      >
        {(active) => <InspirationFeed active={active} />}
      </MobileRevealSection>
    </div>
  );
}

function MobilePageShell({
  active,
  children,
  scrollable = false,
  align = "center",
}: {
  active: boolean;
  children: React.ReactNode;
  scrollable?: boolean;
  align?: "center" | "start";
}) {
  const pinTop = align === "start";

  return (
    <div
      className={cn(
        "absolute inset-0 flex justify-center px-4 pb-[calc(5.6rem+env(safe-area-inset-bottom))]",
        pinTop
          ? "items-start pt-3"
          : "items-center pt-[4.75rem]",
        active ? "z-[1]" : "pointer-events-none z-0"
      )}
      aria-hidden={!active}
      style={{
        opacity: active ? 1 : 0,
        visibility: active ? "visible" : "hidden",
      }}
    >
      <div
        data-snap-scroll={scrollable ? "true" : undefined}
        className={cn(
          "flex h-full w-full justify-center",
          pinTop ? "max-w-6xl items-start" : "max-w-6xl items-center",
          scrollable &&
            "overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
}

/** Mobile : 1 page visible, sans parallax / scale / blur animé (cause du lag). */
function MobileSnapPager() {
  const [page, setPage] = useState(0);
  const [visited, setVisited] = useState(() => new Set([0]));
  const pageRef = useRef(0);
  const lockedRef = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchScrollable = useRef<HTMLElement | null>(null);

  const goToPage = (next: number) => {
    const clamped = Math.max(0, Math.min(PAGE_COUNT - 1, next));
    if (clamped === pageRef.current || lockedRef.current) return;

    lockedRef.current = true;
    pageRef.current = clamped;
    setVisited((prev) => {
      if (prev.has(clamped)) return prev;
      const nextSet = new Set(prev);
      nextSet.add(clamped);
      return nextSet;
    });
    setPage(clamped);

    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      lockedRef.current = false;
      lockTimerRef.current = null;
    }, MOBILE_PAGE_MS);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        touchStartY.current = null;
        return;
      }
      touchStartY.current = event.touches[0]?.clientY ?? null;
      const node = event.target instanceof HTMLElement ? event.target : null;
      touchScrollable.current =
        node?.closest<HTMLElement>("[data-snap-scroll='true']") ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current == null || lockedRef.current) {
        touchStartY.current = null;
        return;
      }

      const endY = event.changedTouches[0]?.clientY;
      const startY = touchStartY.current;
      const scrollable = touchScrollable.current;
      touchStartY.current = null;
      touchScrollable.current = null;
      if (endY == null) return;

      const delta = startY - endY;
      if (Math.abs(delta) < TOUCH_THRESHOLD) return;

      if (scrollable && scrollable.scrollHeight > scrollable.clientHeight + 8) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom =
          scrollable.scrollTop + scrollable.clientHeight >=
          scrollable.scrollHeight - 2;
        if (delta > 0 && !atBottom) return;
        if (delta < 0 && !atTop) return;
      }

      goToPage(pageRef.current + (delta > 0 ? 1 : -1));
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <AmbientBg staticBg />

      {visited.has(0) ? (
        <MobilePageShell active={page === 0}>
          <div className="flex flex-col items-center justify-center gap-5">
            <HeroLayer active={page === 0} />
            <ParallaxReveal
              offset={0}
              depth={1.9}
              active={page === 0}
              index={7}
            >
              <HeroScrollHint onClick={() => goToPage(1)} />
            </ParallaxReveal>
          </div>
        </MobilePageShell>
      ) : null}

      {visited.has(1) ? (
        <MobilePageShell active={page === 1} scrollable align="start">
          <PrayerLayer active={page === 1} />
        </MobilePageShell>
      ) : null}

      {visited.has(2) ? (
        <MobilePageShell active={page === 2} scrollable align="start">
          <QuickAccessLayer active={page === 2} />
        </MobilePageShell>
      ) : null}

      {visited.has(3) ? (
        <MobilePageShell active={page === 3} scrollable align="start">
          <ModulesLayer active={page === 3} />
        </MobilePageShell>
      ) : null}

      {visited.has(4) ? (
        <MobilePageShell active={page === 4} scrollable align="start">
          <InspirationFeed active={page === 4} />
        </MobilePageShell>
      ) : null}
    </div>
  );
}

function StickyScrollScene() {
  const [page, setPage] = useState(0);
  const [paging, setPaging] = useState(false);
  const pageRef = useRef(0);
  const lockedRef = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchScrollable = useRef<HTMLElement | null>(null);
  const touchArmed = useRef(false);

  const activeLayer = LAYERS[page] ?? "hero";

  const goToPage = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(PAGE_COUNT - 1, next));
    if (clamped === pageRef.current || lockedRef.current) return;

    lockedRef.current = true;
    setPaging(true);
    pageRef.current = clamped;
    setPage(clamped);

    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      lockedRef.current = false;
      setPaging(false);
      lockTimerRef.current = null;
    }, SNAP_LOCK_MS);
  }, []);

  const stepPage = useCallback((direction: 1 | -1) => {
    goToPage(pageRef.current + direction);
  }, [goToPage]);

  useEffect(() => {
    const scrollY = window.scrollY;
    const previous = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;

      const scrollable = findScrollableParent(event.target);
      if (scrollable) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom =
          scrollable.scrollTop + scrollable.clientHeight >=
          scrollable.scrollHeight - 2;
        const canScroll =
          (event.deltaY > 0 && !atBottom) || (event.deltaY < 0 && !atTop);

        if (canScroll) return;
      }

      event.preventDefault();
      stepPage(event.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown" ||
        (event.key === " " && !event.shiftKey)
      ) {
        event.preventDefault();
        const scrollable = document.querySelector<HTMLElement>(
          '[aria-hidden="false"] [data-snap-scroll="true"]'
        );
        const atBottom =
          !scrollable ||
          scrollable.scrollTop + scrollable.clientHeight >=
            scrollable.scrollHeight - 2;
        if (scrollable && !atBottom) {
          scrollable.scrollBy({
            top:
              event.key === "ArrowDown"
                ? 88
                : Math.max(240, scrollable.clientHeight * 0.78),
            behavior: "smooth",
          });
          return;
        }
        stepPage(1);
      } else if (
        event.key === "ArrowUp" ||
        event.key === "PageUp" ||
        (event.key === " " && event.shiftKey)
      ) {
        event.preventDefault();
        const scrollable = document.querySelector<HTMLElement>(
          '[aria-hidden="false"] [data-snap-scroll="true"]'
        );
        if (scrollable && scrollable.scrollTop > 0) {
          scrollable.scrollBy({
            top:
              event.key === "ArrowUp"
                ? -88
                : -Math.max(240, scrollable.clientHeight * 0.78),
            behavior: "smooth",
          });
          return;
        }
        stepPage(-1);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        touchStartY.current = null;
        touchArmed.current = false;
        return;
      }
      touchStartY.current = event.touches[0]?.clientY ?? null;
      touchStartX.current = event.touches[0]?.clientX ?? null;
      touchScrollable.current = findScrollableParent(event.target);
      touchArmed.current = true;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!touchArmed.current || touchStartY.current == null) return;
      if (lockedRef.current) {
        event.preventDefault();
        return;
      }

      const y = event.touches[0]?.clientY;
      const x = event.touches[0]?.clientX;
      if (y == null || x == null || touchStartX.current == null) return;

      const dy = touchStartY.current - y;
      const dx = touchStartX.current - x;
      if (Math.abs(dx) > Math.abs(dy)) {
        touchArmed.current = false;
        return;
      }

      const scrollable = touchScrollable.current;
      if (scrollable) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom =
          scrollable.scrollTop + scrollable.clientHeight >=
          scrollable.scrollHeight - 2;
        if (dy > 0 && !atBottom) return;
        if (dy < 0 && !atTop) return;
      }

      if (Math.abs(dy) > 10) {
        event.preventDefault();
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (!touchArmed.current || touchStartY.current == null) {
        touchStartY.current = null;
        touchArmed.current = false;
        return;
      }

      const endY = event.changedTouches[0]?.clientY;
      const startY = touchStartY.current;
      const scrollable = touchScrollable.current;
      touchStartY.current = null;
      touchStartX.current = null;
      touchScrollable.current = null;
      touchArmed.current = false;
      if (endY == null || lockedRef.current) return;

      const delta = startY - endY;
      if (Math.abs(delta) < TOUCH_THRESHOLD) return;

      if (scrollable) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom =
          scrollable.scrollTop + scrollable.clientHeight >=
          scrollable.scrollHeight - 2;
        if (delta > 0 && !atBottom) return;
        if (delta < 0 && !atTop) return;
      }

      stepPage(delta > 0 ? 1 : -1);
    };

    const onTouchCancel = () => {
      touchStartY.current = null;
      touchStartX.current = null;
      touchScrollable.current = null;
      touchArmed.current = false;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchCancel);

    return () => {
      document.body.style.overflow = previous.overflow;
      document.body.style.position = previous.position;
      document.body.style.top = previous.top;
      document.body.style.width = previous.width;
      window.scrollTo(0, scrollY);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchCancel);
    };
  }, [stepPage]);

  const layerTransition = {
    duration: LAYER_DURATION_S,
    ease: pageEase,
    opacity: { duration: LAYER_DURATION_S * 0.75, ease: pageEase },
  };

  const layerShellClass =
    "pointer-events-none absolute inset-0 z-[1] flex items-center justify-center px-4 pt-[4.75rem] pb-[calc(5.6rem+env(safe-area-inset-bottom))] sm:px-5 md:px-8 md:pt-[6.5rem] md:pb-8";

  const offsets = LAYERS.map((_, index) => index - page);

  return (
    <div
      className={cn(
        "relative h-dvh w-full overflow-hidden",
        paging && "home-paging"
      )}
    >
      <AmbientBg page={page} />

      <div className="relative h-full w-full">
        <motion.div
          className={cn(layerShellClass, "z-[1]")}
          initial={false}
          animate={layerMotion(0, page)}
          transition={layerTransition}
          aria-hidden={activeLayer !== "hero"}
        >
          <div
            className={cn(
              "relative flex h-full w-full max-w-6xl flex-col items-center justify-center gap-5",
              activeLayer === "hero"
                ? "pointer-events-auto"
                : "pointer-events-none"
            )}
          >
            <HeroLayer
              offset={offsets[0] ?? 0}
              active={activeLayer === "hero"}
            />
            <ParallaxReveal
              offset={offsets[0] ?? 0}
              depth={1.9}
              active={activeLayer === "hero"}
              index={7}
            >
              <HeroScrollHint onClick={() => goToPage(1)} />
            </ParallaxReveal>
          </div>
        </motion.div>

        <motion.div
          className={cn(layerShellClass, "z-[2]")}
          initial={false}
          animate={layerMotion(1, page)}
          transition={layerTransition}
          aria-hidden={activeLayer !== "prayer"}
        >
          <div
            className={cn(
              "mx-auto flex h-full w-full max-w-6xl items-center justify-center",
              activeLayer === "prayer"
                ? "pointer-events-auto"
                : "pointer-events-none"
            )}
          >
            <ParallaxPiece offset={offsets[1] ?? 0} depth={1.15} className="w-full">
              <PrayerLayer active={activeLayer === "prayer"} />
            </ParallaxPiece>
          </div>
        </motion.div>

        <motion.div
          className={cn(layerShellClass, "z-[3]")}
          initial={false}
          animate={layerMotion(2, page)}
          transition={layerTransition}
          aria-hidden={activeLayer !== "quick"}
        >
          <div
            data-snap-scroll="true"
            className={cn(
              "flex h-full w-full max-w-6xl items-center justify-center overflow-y-auto overscroll-contain touch-pan-y px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              activeLayer === "quick"
                ? "pointer-events-auto"
                : "pointer-events-none"
            )}
          >
            <div className="flex min-h-full w-full items-center justify-center py-2">
              <ParallaxPiece offset={offsets[2] ?? 0} depth={1.2} className="w-full">
                <QuickAccessLayer active={activeLayer === "quick"} />
              </ParallaxPiece>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={cn(layerShellClass, "z-[4]")}
          initial={false}
          animate={layerMotion(3, page)}
          transition={layerTransition}
          aria-hidden={activeLayer !== "modules"}
        >
          <div
            data-snap-scroll="true"
            className={cn(
              "flex h-full w-full max-w-6xl items-start justify-center overflow-y-auto overscroll-contain touch-pan-y px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:items-center",
              activeLayer === "modules"
                ? "pointer-events-auto"
                : "pointer-events-none"
            )}
          >
            <div className="flex min-h-full w-full items-start justify-center py-2 lg:items-center">
              <ParallaxPiece offset={offsets[3] ?? 0} depth={1.25} className="w-full">
                <ModulesLayer active={activeLayer === "modules"} />
              </ParallaxPiece>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={cn(layerShellClass, "z-[5]")}
          initial={false}
          animate={layerMotion(4, page)}
          transition={layerTransition}
          aria-hidden={activeLayer !== "inspiration"}
        >
          <div
            data-snap-scroll="true"
            className={cn(
              "flex h-full w-full max-w-6xl items-start justify-center overflow-y-auto overscroll-contain touch-pan-y px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              activeLayer === "inspiration"
                ? "pointer-events-auto"
                : "pointer-events-none"
            )}
          >
            <div className="flex min-h-full w-full items-start justify-center py-2">
              <ParallaxPiece offset={offsets[4] ?? 0} depth={1.3} className="w-full">
                <InspirationFeed active={activeLayer === "inspiration"} />
              </ParallaxPiece>
            </div>
          </div>
        </motion.div>

        {/* Indicateur — desktop (droite) */}
        <div className="absolute top-1/2 right-0 z-20 hidden -translate-y-1/2 md:block">
          <nav
            aria-label="Sections de l’accueil"
            className="group/pages flex flex-col items-end gap-1.5 py-10 pr-3 pl-20 transition-[gap] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:gap-5 md:pr-5"
          >
            {LAYERS.map((id, index) => {
              const active = index === page;
              const isPrev = index === page - 1;
              const isNext = index === page + 1;
              const nearby = active || isPrev || isNext;

              return (
                <button
                  key={id}
                  type="button"
                  aria-label={`Aller à ${LAYER_LABELS[id]}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => goToPage(index)}
                  className="group/tip relative flex items-center justify-end outline-none before:absolute before:-inset-y-2 before:-left-16 before:-right-3 before:content-['']"
                >
                  {/* Label qui sort du point */}
                  <span
                    className={cn(
                      "pointer-events-none absolute right-full top-1/2 mr-0 flex -translate-y-1/2 items-center",
                      "origin-right scale-x-0 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "group-hover/pages:mr-2.5 group-hover/pages:scale-x-100 group-hover/pages:opacity-100",
                      !nearby && "group-hover/pages:opacity-40"
                    )}
                    style={{
                      transitionDelay: nearby
                        ? `${Math.abs(index - page) * 35}ms`
                        : "0ms",
                    }}
                  >
                    <span
                      className={cn(
                        "whitespace-nowrap text-right text-[11px] tracking-wide",
                        active
                          ? "font-bold text-brand-warm"
                          : isPrev || isNext
                            ? "font-semibold text-brand-pearl/85"
                            : "font-medium text-brand-steel-400"
                      )}
                    >
                      {isPrev ? "↑ " : isNext ? "↓ " : ""}
                      {LAYER_LABELS[id]}
                    </span>
                    <span
                      className={cn(
                        "ml-2 h-px w-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pages:w-3",
                        active
                          ? "bg-brand-warm"
                          : nearby
                            ? "bg-brand-gold-400/60"
                            : "bg-brand-gold-400/30"
                      )}
                      style={{
                        transitionDelay: nearby
                          ? `${Math.abs(index - page) * 35}ms`
                          : "0ms",
                      }}
                      aria-hidden
                    />
                  </span>

                  <motion.span
                    className={cn(
                      "relative z-[1] block rounded-full transition-colors duration-300",
                      active
                        ? "bg-brand-warm shadow-[0_0_10px_rgba(240,209,188,0.45)]"
                        : "bg-brand-gold-400/40 group-hover/tip:bg-brand-gold-400/80"
                    )}
                    animate={{
                      height: active ? 22 : 6,
                      width: 6,
                      opacity: active ? 1 : nearby ? 0.65 : 0.4,
                    }}
                    transition={{ duration: 0.45, ease: pageEase }}
                  />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

export function HomeScrollScene() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobileLayout();

  if (reduceMotion) {
    return <MobileHomeFlow />;
  }

  if (isMobile) {
    return <MobileSnapPager />;
  }

  return <StickyScrollScene />;
}
