"use client";

import { useEffect, useState, type ComponentType } from "react";
import {
  GraduationCap as GraduationCapStatic,
  Home as HomeStatic,
  MoreHorizontal as MoreStatic,
  type LucideIcon,
} from "lucide-react";

import type { NavId } from "@/components/layout/nav-items";

export type NavTabIcon = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
  trigger?: "hover" | "click" | "mount" | "in-view" | "parent-hover" | "manual";
  mode?: "draw" | "signature";
  duration?: number;
}>;

type NavMotionModule = typeof import("@/components/icons/nav-motion");

const STATIC: Record<NavId, NavTabIcon> = {
  home: HomeStatic as NavTabIcon,
  savoir: GraduationCapStatic as NavTabIcon,
  plus: MoreStatic as NavTabIcon,
};

/**
 * Static Lucide icons first, then upgrade to lucide-react-motion after idle.
 */
export function useNavMotionIcons() {
  const [mod, setMod] = useState<NavMotionModule | null>(null);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const load = () => {
      void import("@/components/icons/nav-motion").then((loaded) => {
        if (!cancelled) setMod(loaded);
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(load, { timeout: 2200 });
    } else {
      timeoutId = setTimeout(load, 900);
    }

    return () => {
      cancelled = true;
      if (
        idleId !== undefined &&
        typeof window.cancelIdleCallback === "function"
      ) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  const ready = Boolean(mod);

  const icons: Record<NavId, NavTabIcon> = {
    home: (mod?.House as NavTabIcon | undefined) ?? STATIC.home,
    savoir: (mod?.GraduationCap as NavTabIcon | undefined) ?? STATIC.savoir,
    plus: (mod?.Ellipsis as NavTabIcon | undefined) ?? STATIC.plus,
  };

  return {
    ready,
    MotionIconConfig: mod?.MotionIconConfig ?? null,
    icons,
  };
}

export type { LucideIcon };
