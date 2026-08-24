"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

import { LiquidGlassFilters } from "@/components/layout/liquid-glass-filters";
import { LiquidGlassRefractLayers } from "@/components/layout/liquid-glass-refract-layers";
import {
  isNavActive,
  PRIMARY_NAV,
  type NavId,
} from "@/components/layout/nav-items";
import { useNavScrollCollapse } from "@/hooks/use-nav-scroll-collapse";
import {
  useNavMotionIcons,
  type NavTabIcon,
} from "@/hooks/use-nav-motion-icons";
import { cn } from "@/lib/utils";

type IndicatorRect = {
  x: number;
  width: number;
};

const PILL_SPRING = {
  x: {
    type: "spring" as const,
    stiffness: 175,
    damping: 35,
    mass: 1.1,
  },
  width: {
    type: "spring" as const,
    stiffness: 118,
    damping: 32,
    mass: 1.2,
  },
};

const PILL_MORPH_SPRING = {
  type: "spring" as const,
  stiffness: 420,
  damping: 30,
  mass: 0.75,
};

const DOCK_SPRING = {
  type: "spring" as const,
  stiffness: 300,
  damping: 32,
  mass: 0.95,
};

type PillDeform = {
  scaleX: number;
  scaleY: number;
  skewX: number;
  radius: number;
  origin: string;
};

const PILL_REST: PillDeform = {
  scaleX: 1,
  scaleY: 1,
  skewX: 0,
  radius: 17,
  origin: "center center",
};

type MobileNavDockProps = {
  ready: boolean;
  icons: Record<NavId, NavTabIcon>;
};

function MobileNavDock({ ready, icons }: MobileNavDockProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const collapsed = useNavScrollCollapse();
  const gridRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const prevIndexRef = useRef(0);
  const hasPositionedRef = useRef(false);
  const [indicator, setIndicator] = useState<IndicatorRect | null>(null);
  const [skipTransition, setSkipTransition] = useState(true);
  const [pillDeform, setPillDeform] = useState<PillDeform>(PILL_REST);
  const [dockPulse, setDockPulse] = useState(1);

  const activeIndex = Math.max(
    0,
    PRIMARY_NAV.findIndex((item) => isNavActive(pathname, item))
  );

  const measureTarget = useCallback((): IndicatorRect | null => {
    const grid = gridRef.current;
    const tab = tabRefs.current[activeIndex];
    if (!grid || !tab) return null;

    const gridRect = grid.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();

    return {
      x: tabRect.left - gridRect.left,
      width: tabRect.width,
    };
  }, [activeIndex]);

  const applyIndicator = useCallback(
    (instant: boolean) => {
      const target = measureTarget();
      if (!target) return;

      setSkipTransition(instant);
      setIndicator(target);
      hasPositionedRef.current = true;
    },
    [measureTarget]
  );

  useLayoutEffect(() => {
    applyIndicator(!hasPositionedRef.current);
  }, [activeIndex, pathname, applyIndicator, collapsed]);

  useLayoutEffect(() => {
    if (reduceMotion || skipTransition || !hasPositionedRef.current) {
      prevIndexRef.current = activeIndex;
      return;
    }

    const previousIndex = prevIndexRef.current;
    if (previousIndex === activeIndex) return;

    const travel = Math.abs(activeIndex - previousIndex);
    const movingRight = activeIndex > previousIndex;

    setPillDeform({
      scaleX: 1 + Math.min(travel * 0.12, 0.24),
      scaleY: 0.86,
      skewX: movingRight ? 3.5 : -3.5,
      radius: 23,
      origin: movingRight ? "16% center" : "84% center",
    });
    setDockPulse(0.975);
    prevIndexRef.current = activeIndex;

    const settle = window.setTimeout(() => {
      setPillDeform(PILL_REST);
      setDockPulse(1);
    }, 160);

    return () => clearTimeout(settle);
  }, [activeIndex, reduceMotion, skipTransition]);

  useLayoutEffect(() => {
    if (reduceMotion || skipTransition) return;

    setPillDeform((current) =>
      current.scaleX === 1
        ? {
            scaleX: 0.96,
            scaleY: 0.92,
            skewX: 0,
            radius: 19,
            origin: "center center",
          }
        : current
    );

    const settle = window.setTimeout(() => {
      setPillDeform(PILL_REST);
    }, 150);

    return () => clearTimeout(settle);
  }, [collapsed, reduceMotion, skipTransition]);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let frame = 0;

    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = measureTarget();
        if (!target) return;
        setSkipTransition(true);
        setIndicator(target);
      });
    };

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(onResize);
      observer.observe(grid);
      window.addEventListener("resize", onResize);

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(frame);
      };
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, [measureTarget]);

  const dockTransition = reduceMotion ? { duration: 0 } : DOCK_SPRING;

  return (
    <nav
      aria-label="Navigation mobile"
      className="shell-mobile-only pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.55rem,env(safe-area-inset-bottom))]"
    >
      <LiquidGlassFilters />

      <motion.div
        className="liquid-glass-dock pointer-events-auto mx-auto max-w-sm"
        animate={{
          height: collapsed ? 48 : 60,
          y: collapsed ? 2 : 0,
          scaleX: collapsed ? 0.985 * dockPulse : dockPulse,
          scaleY: (collapsed ? 0.93 : 1) * dockPulse,
          borderRadius: collapsed ? 18 : 22,
        }}
        transition={dockTransition}
      >
        <LiquidGlassRefractLayers />

        <div
          ref={gridRef}
          className="liquid-glass-dock__content relative z-[1] grid h-full gap-1 p-1"
          style={{
            gridTemplateColumns: `repeat(${PRIMARY_NAV.length}, minmax(0, 1fr))`,
          }}
        >
          {indicator ? (
            <motion.div
              aria-hidden
              className="mobile-dock-liquid-pill pointer-events-none absolute left-0 z-0"
              initial={false}
              animate={{
                x: indicator.x,
                width: indicator.width,
                top: collapsed ? 5 : 4,
                bottom: collapsed ? 5 : 4,
                scaleX: pillDeform.scaleX,
                scaleY: pillDeform.scaleY,
                skewX: pillDeform.skewX,
                borderRadius: pillDeform.radius,
              }}
              transition={
                reduceMotion || skipTransition
                  ? { duration: 0 }
                  : {
                      x: PILL_SPRING.x,
                      width: PILL_SPRING.width,
                      top: dockTransition,
                      bottom: dockTransition,
                      scaleX: PILL_MORPH_SPRING,
                      scaleY: PILL_MORPH_SPRING,
                      skewX: PILL_MORPH_SPRING,
                      borderRadius: PILL_MORPH_SPRING,
                    }
              }
              style={{
                willChange: "transform, width",
                transformOrigin: pillDeform.origin,
              }}
            />
          ) : null}

          {PRIMARY_NAV.map((item, index) => {
            const Icon = icons[item.id];
            const active = index === activeIndex;

            return (
              <Link
                key={item.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                href={item.href}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                data-motion-icon-group={ready ? "" : undefined}
                className={cn(
                  "nav-tab group relative z-[1] flex flex-col items-center justify-center overflow-hidden rounded-[1.05rem] px-1 transition-colors duration-500 ease-out",
                  collapsed ? "gap-0 py-1" : "gap-1 py-1.5",
                  active ? "nav-tab--active" : "nav-tab--idle"
                )}
              >
                <motion.span
                  className="relative z-[1] flex items-center justify-center"
                  animate={{
                    scale: active ? (collapsed ? 1.04 : 1.06) : 1,
                  }}
                  transition={dockTransition}
                >
                  <Icon
                    size={collapsed ? 18 : 20}
                    strokeWidth={active ? 2.35 : 1.9}
                    {...(ready
                      ? {
                          trigger: "parent-hover" as const,
                          mode: "signature" as const,
                          duration: 0.55,
                        }
                      : {})}
                    className={cn(
                      "shrink-0 transition-colors duration-500 ease-out",
                      active
                        ? "text-brand-warm drop-shadow-[0_1px_8px_rgba(240,209,188,0.35)]"
                        : "text-brand-pearl/85 group-active:text-brand-soft"
                    )}
                  />
                </motion.span>

                <motion.span
                  animate={{
                    opacity: collapsed ? 0 : 1,
                    height: collapsed ? 0 : 11,
                    marginTop: collapsed ? 0 : 2,
                  }}
                  transition={dockTransition}
                  className={cn(
                    "relative z-[1] max-w-full truncate text-[10px] leading-none tracking-[0.02em]",
                    active
                      ? "font-semibold text-brand-warm"
                      : "font-medium text-brand-pearl/70 group-active:text-brand-soft"
                  )}
                >
                  {item.label}
                </motion.span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}

export function MobileNav() {
  const { ready, icons, MotionIconConfig } = useNavMotionIcons();

  const dock = <MobileNavDock ready={ready} icons={icons} />;

  if (MotionIconConfig) {
    return (
      <MotionIconConfig trigger="hover" mode="signature" duration={0.55}>
        {dock as ReactNode}
      </MotionIconConfig>
    );
  }

  return dock;
}
