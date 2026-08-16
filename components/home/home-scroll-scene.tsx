"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Headphones } from "lucide-react";

import { PrayerLayer } from "@/components/home/prayer-layer";
import { QuickAccessLayer } from "@/components/home/quick-access";
import { ModulesLayer } from "@/components/home/modules-section";
import { HomeSearchBar } from "@/components/search/home-search-bar";
import { cn } from "@/lib/utils";

type LayerId = "hero" | "prayer" | "quick" | "modules";

const LAYERS: LayerId[] = ["hero", "prayer", "quick", "modules"];
const LAYER_LABELS: Record<LayerId, string> = {
  hero: "Accueil",
  prayer: "Horaires",
  quick: "Accès rapide",
  modules: "Modules",
};
const PAGE_COUNT = LAYERS.length;
const LAYER_DURATION_S = 1.05;
const SNAP_LOCK_MS = 1100;
const WHEEL_THRESHOLD = 12;
const TOUCH_THRESHOLD = 48;

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
}: {
  onClick?: () => void;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-label="Défiler vers le bas"
      onClick={onClick}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col items-center gap-3 outline-none",
        className
      )}
    >
      <span className="text-[10px] font-bold tracking-[0.28em] text-brand-gold-300/80 uppercase transition-colors group-hover:text-brand-warm">
        Explorer
      </span>

      {/* Souris élégante */}
      <span className="relative flex h-11 w-7 items-start justify-center rounded-full border border-brand-gold-400/45 bg-brand-panel/30 shadow-[0_0_24px_rgba(206,166,135,0.18)] backdrop-blur-sm">
        <motion.span
          aria-hidden
          className="mt-2 h-1.5 w-1 rounded-full bg-brand-warm"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 10, 0],
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
      <span className="relative flex h-8 w-6 flex-col items-center">
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute left-1/2 top-0 -ml-[5px] h-2.5 w-2.5 rotate-45 border-r border-b border-brand-gold-400/70"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 10],
                    opacity: [0.15, 0.95, 0.15],
                  }
            }
            transition={{
              duration: 1.55,
              repeat: Infinity,
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
}: {
  offset?: number;
  active?: boolean;
}) {
  return (
    <div className="flex max-w-4xl flex-col items-center gap-5 text-center sm:gap-7 md:gap-10">
      <ParallaxReveal offset={offset} depth={0.45} active={active} index={0}>
        <p
          className="hero-bismillah-gradient font-arabic text-3xl leading-relaxed sm:text-4xl md:text-5xl lg:text-6xl"
          dir="rtl"
        >
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
      </ParallaxReveal>

      <ParallaxReveal offset={offset} depth={0.7} active={active} index={1}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-gold-400/60 to-transparent md:w-24" />
      </ParallaxReveal>

      <ParallaxReveal offset={offset} depth={1} active={active} index={2}>
        <h1 className="hero-title-gradient text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          GoMuslimLife
        </h1>
      </ParallaxReveal>

      <ParallaxReveal offset={offset} depth={1.25} active={active} index={3}>
        <h2 className="max-w-2xl text-xl font-bold tracking-tight text-brand-pearl/90 sm:text-2xl md:text-3xl">
          Apprenez et Apaisez votre Cœur.
        </h2>
      </ParallaxReveal>

      <ParallaxReveal offset={offset} depth={1.45} active={active} index={4}>
        <p className="max-w-xl text-base text-brand-mist sm:text-lg md:text-xl">
          Découvrez la vie des{" "}
          <span className="hero-word-halo font-semibold text-brand-warm">
            Prophètes
          </span>{" "}
          et maîtrisez les bases de votre religion.
        </p>
      </ParallaxReveal>

      <ParallaxReveal
        offset={offset}
        depth={1.55}
        active={active}
        index={5}
        className="w-full max-w-xl"
      >
        <HomeSearchBar />
      </ParallaxReveal>

      <ParallaxReveal offset={offset} depth={1.7} active={active} index={6}>
        <Link
          href="/sawra"
          className="btn-bronze-shine group inline-flex max-w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-3.5 text-sm font-bold sm:px-7 sm:py-4 sm:text-[15px]"
        >
          <Headphones className="size-4 shrink-0 opacity-90 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-balance">
            Écouter le Coran et bien plus encore avec Sawra
          </span>
        </Link>
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
}: {
  offset: number;
  depth: number;
  active: boolean;
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
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

function AmbientBg({ page = 0 }: { page?: number }) {
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
        "relative flex w-full flex-col items-center justify-center px-4 py-12",
        className
      )}
      viewport={{ amount, once: true, margin: "0px 0px -8% 0px" }}
      onViewportEnter={() => setActive(true)}
    >
      <motion.div
        className="w-full"
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
        className="relative min-h-[88dvh]"
        amount={0.2}
        forceActive
      >
        {() => (
          <>
            <HeroLayer />
            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center sm:bottom-8">
              <div className="pointer-events-auto">
                <HeroScrollHint
                  onClick={() =>
                    prayerRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                />
              </div>
            </div>
          </>
        )}
      </MobileRevealSection>

      <MobileRevealSection
        className="min-h-[90dvh]"
        amount={0.3}
        sectionRef={prayerRef}
      >
        {(active) => (
          <motion.div
            initial={false}
            animate={active ? { opacity: 1 } : { opacity: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <PrayerLayer active={active} />
          </motion.div>
        )}
      </MobileRevealSection>

      <MobileRevealSection className="py-14" amount={0.25}>
        {(active) => <QuickAccessLayer active={active} />}
      </MobileRevealSection>

      <MobileRevealSection className="py-14 pb-20" amount={0.2}>
        {(active) => <ModulesLayer active={active} />}
      </MobileRevealSection>
    </div>
  );
}

function StickyScrollScene() {
  const [page, setPage] = useState(0);
  const pageRef = useRef(0);
  const lockedRef = useRef(false);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartY = useRef<number | null>(null);

  const activeLayer = LAYERS[page] ?? "hero";

  const goToPage = (next: number) => {
    const clamped = Math.max(0, Math.min(PAGE_COUNT - 1, next));
    if (clamped === pageRef.current || lockedRef.current) return;

    lockedRef.current = true;
    pageRef.current = clamped;
    setPage(clamped);

    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      lockedRef.current = false;
      lockTimerRef.current = null;
    }, SNAP_LOCK_MS);
  };

  const stepPage = (direction: 1 | -1) => {
    goToPage(pageRef.current + direction);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
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
        stepPage(1);
      } else if (
        event.key === "ArrowUp" ||
        event.key === "PageUp" ||
        (event.key === " " && event.shiftKey)
      ) {
        event.preventDefault();
        stepPage(-1);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current == null) return;
      const endY = event.changedTouches[0]?.clientY;
      const startY = touchStartY.current;
      touchStartY.current = null;
      if (endY == null) return;

      const delta = startY - endY;
      if (Math.abs(delta) < TOUCH_THRESHOLD) return;
      stepPage(delta > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const layerTransition = {
    duration: LAYER_DURATION_S,
    ease: pageEase,
    opacity: { duration: LAYER_DURATION_S * 0.75, ease: pageEase },
  };

  const layerShellClass =
    "pointer-events-none absolute inset-0 z-[1] flex will-change-transform items-stretch justify-start px-4 pt-[4.25rem] pb-[calc(4.35rem+env(safe-area-inset-bottom)+0.5rem)] sm:px-5 md:items-center md:justify-center md:px-8 md:pt-6 md:pb-6";

  const offsets = LAYERS.map((_, index) => index - page);

  return (
    <div className="relative h-dvh w-full overflow-hidden [perspective:1200px]">
      <AmbientBg page={page} />

      <div className="relative h-full w-full touch-none">
        <motion.div
          className={cn(layerShellClass, "z-[1]")}
          initial={false}
          animate={layerMotion(0, page)}
          transition={layerTransition}
        >
          <div
            className={cn(
              "relative flex h-full w-full max-w-6xl flex-col items-center justify-start pt-6 md:justify-center md:pt-0",
              activeLayer === "hero"
                ? "pointer-events-auto"
                : "pointer-events-none"
            )}
          >
            <HeroLayer
              offset={offsets[0] ?? 0}
              active={activeLayer === "hero"}
            />

            <div
              className={cn(
                "absolute inset-x-0 bottom-2 flex justify-center md:bottom-4",
                activeLayer === "hero"
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              )}
            >
              <ParallaxReveal
                offset={offsets[0] ?? 0}
                depth={1.9}
                active={activeLayer === "hero"}
                index={7}
              >
                <HeroScrollHint onClick={() => goToPage(1)} />
              </ParallaxReveal>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={cn(layerShellClass, "z-[2]")}
          initial={false}
          animate={layerMotion(1, page)}
          transition={layerTransition}
        >
          <div
            className={cn(
              "mx-auto flex h-full w-full max-w-6xl items-start justify-center md:items-center",
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
        >
          <div
            className={cn(
              "h-full w-full max-w-6xl overflow-y-auto overscroll-contain px-1",
              activeLayer === "quick"
                ? "pointer-events-auto"
                : "pointer-events-none"
            )}
          >
            <div className="flex min-h-full w-full items-start justify-center md:items-center">
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
        >
          <div
            className={cn(
              "h-full w-full max-w-6xl overflow-y-auto overscroll-contain px-1",
              activeLayer === "modules"
                ? "pointer-events-auto"
                : "pointer-events-none"
            )}
          >
            <div className="flex min-h-full w-full items-start justify-center md:items-center">
              <ParallaxPiece offset={offsets[3] ?? 0} depth={1.25} className="w-full">
                <ModulesLayer active={activeLayer === "modules"} />
              </ParallaxPiece>
            </div>
          </div>
        </motion.div>

        {/* Indicateur — points serrés, écartés + labels au survol */}
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

  // Reduced motion : stack + apparitions. Sinon : snap 1 geste = 1 page.
  if (reduceMotion) {
    return <MobileHomeFlow />;
  }

  return <StickyScrollScene />;
}
