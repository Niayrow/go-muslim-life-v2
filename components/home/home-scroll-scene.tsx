"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";

import { PrayerLayer } from "@/components/home/prayer-layer";
import { QuickAccessLayer } from "@/components/home/quick-access";
import { ModulesLayer } from "@/components/home/modules-section";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type LayerId = "hero" | "prayer" | "quick" | "modules";

function HeroLayer() {
  return (
    <div className="flex max-w-4xl flex-col items-center gap-8 text-center md:gap-10">
      <p
        className="hero-bismillah-gradient font-arabic text-3xl leading-relaxed sm:text-4xl md:text-5xl lg:text-6xl"
        dir="rtl"
      >
        بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </p>

      <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-gold-400/60 to-transparent md:w-24" />

      <h1 className="hero-title-gradient text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        GoMuslimLife
      </h1>

      <h2 className="max-w-2xl text-xl font-bold tracking-tight text-brand-pearl/90 sm:text-2xl md:text-3xl">
        Apprenez et Apaisez votre Cœur.
      </h2>

      <p className="max-w-xl text-base text-brand-mist sm:text-lg md:text-xl">
        Découvrez la vie des{" "}
        <span className="hero-word-halo font-semibold text-brand-warm">
          Prophètes
        </span>{" "}
        et maîtrisez les bases de votre religion.
      </p>
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

function AmbientBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-warm/10 blur-[100px] md:h-[28rem] md:w-[28rem]" />
      <div className="absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-brand-steel-400/10 blur-[90px]" />
    </div>
  );
}

/** Mobile : sections empilées + apparition au scroll (pas de sticky 400vh). */
function MobileRevealSection({
  children,
  className,
  amount = 0.35,
  forceActive = false,
}: {
  children: (active: boolean) => React.ReactNode;
  className?: string;
  amount?: number;
  forceActive?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(forceActive);

  return (
    <motion.section
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
            : { opacity: 0, y: 32, scale: 0.98 }
        }
        transition={{ duration: 0.55, ease }}
      >
        {children(active || Boolean(reduceMotion))}
      </motion.div>
    </motion.section>
  );
}

function MobileHomeFlow() {
  return (
    <div className="relative flex w-full flex-col">
      <AmbientBg />

      <MobileRevealSection
        className="min-h-[88dvh]"
        amount={0.2}
        forceActive
      >
        {() => <HeroLayer />}
      </MobileRevealSection>

      <MobileRevealSection className="min-h-[90dvh]" amount={0.3}>
        {(active) => (
          <motion.div
            initial={false}
            animate={active ? { opacity: 1 } : { opacity: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <PrayerLayer />
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

function DesktopStickyScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<LayerId>("hero");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0.72) setActiveLayer("modules");
    else if (value > 0.45) setActiveLayer("quick");
    else if (value > 0.2) setActiveLayer("prayer");
    else setActiveLayer("hero");
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.2, 1],
    [1, 1, 0, 0]
  );
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [1, 0.98, 0.98]
  );

  const prayerOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.32, 0.42, 0.52, 1],
    [0, 1, 1, 1, 0, 0]
  );
  const prayerScale = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.42, 0.52],
    [0.98, 1, 1, 0.98]
  );

  const quickOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.62, 0.72, 0.82, 1],
    [0, 1, 1, 1, 0, 0]
  );
  const quickScale = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.72, 0.82],
    [0.98, 1, 1, 0.98]
  );

  const modulesOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.82, 0.9, 1],
    [0, 1, 1, 1]
  );
  const modulesScale = useTransform(
    scrollYProgress,
    [0.72, 0.82, 1],
    [0.98, 1, 1]
  );

  const prayerVeilOpacity = useTransform(
    scrollYProgress,
    [0.06, 0.18, 0.42, 0.52],
    [0, 0.97, 0.97, 0.97]
  );

  const quickVeilOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.72, 0.82],
    [0, 0.97, 0.97, 0.97]
  );

  const modulesVeilOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 1],
    [0, 0.97, 0.97]
  );

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 flex h-dvh w-full items-center justify-center overflow-hidden px-4 sm:px-5 md:px-8">
        <AmbientBg />

        <div className="relative h-full w-full touch-pan-y">
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{
              opacity: heroOpacity,
              scale: heroScale,
              zIndex: 1,
            }}
          >
            <div
              className={
                activeLayer === "hero"
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }
            >
              <HeroLayer />
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center"
            style={{
              opacity: prayerOpacity,
              scale: prayerScale,
            }}
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-brand-night"
              style={{ opacity: prayerVeilOpacity }}
            />
            <div
              className={
                activeLayer === "prayer"
                  ? "pointer-events-auto relative z-[1] w-full"
                  : "pointer-events-none relative z-[1] w-full"
              }
            >
              <PrayerLayer />
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center"
            style={{
              opacity: quickOpacity,
              scale: quickScale,
            }}
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-brand-night"
              style={{ opacity: quickVeilOpacity }}
            />
            <div
              className={
                activeLayer === "quick"
                  ? "pointer-events-auto relative z-[1] w-full"
                  : "pointer-events-none relative z-[1] w-full"
              }
            >
              <QuickAccessLayer active={activeLayer === "quick"} />
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-[4] flex items-center justify-center"
            style={{
              opacity: modulesOpacity,
              scale: modulesScale,
            }}
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-brand-night"
              style={{ opacity: modulesVeilOpacity }}
            />
            <div
              className={
                activeLayer === "modules"
                  ? "pointer-events-auto relative z-[1] w-full"
                  : "pointer-events-none relative z-[1] w-full"
              }
            >
              <ModulesLayer active={activeLayer === "modules"} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function HomeScrollScene() {
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Mobile (et reduced motion) : stack + apparitions. Desktop : sticky crossfade.
  if (reduceMotion || !isDesktop) {
    return <MobileHomeFlow />;
  }

  return <DesktopStickyScene />;
}
