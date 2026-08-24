"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "motion/react";

const SCROLL_DELTA = 8;
const EXPAND_AT_TOP = 40;

function isScrollableElement(element: Element): element is HTMLElement {
  if (!(element instanceof HTMLElement)) return false;
  if (element === document.body) return false;
  if (element === document.documentElement) return true;

  const style = window.getComputedStyle(element);
  const scrollableY =
    style.overflowY === "auto" ||
    style.overflowY === "scroll" ||
    style.overflowY === "overlay";

  return scrollableY && element.scrollHeight > element.clientHeight + 8;
}

function readScrollTop(element: HTMLElement | typeof document.documentElement) {
  if (element === document.documentElement) {
    return window.scrollY || document.documentElement.scrollTop || 0;
  }
  return element.scrollTop;
}

export function useNavScrollCollapse() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [collapsed, setCollapsed] = useState(false);
  const collapsedRef = useRef(false);
  const positionsRef = useRef(new WeakMap<EventTarget, number>());

  useEffect(() => {
    collapsedRef.current = false;
    setCollapsed(false);
  }, [pathname]);

  useEffect(() => {
    if (reduceMotion) return;

    let frame = 0;

    const onScroll = (event: Event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const scrollable = isScrollableElement(target)
          ? target
          : target === document.documentElement
            ? document.documentElement
            : null;

        if (!scrollable) return;

        const current = readScrollTop(scrollable);
        const previous = positionsRef.current.get(scrollable) ?? current;
        positionsRef.current.set(scrollable, current);

        const delta = current - previous;
        if (Math.abs(delta) < SCROLL_DELTA) return;

        let next = collapsedRef.current;

        if (current <= EXPAND_AT_TOP) {
          next = false;
        } else if (delta > 0) {
          next = true;
        } else if (delta < 0) {
          next = false;
        }

        if (next === collapsedRef.current) return;
        collapsedRef.current = next;
        setCollapsed(next);
      });
    };

    document.addEventListener("scroll", onScroll, { capture: true, passive: true });
    return () => {
      document.removeEventListener("scroll", onScroll, { capture: true });
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  return collapsed;
}
