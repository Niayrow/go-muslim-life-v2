"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const capture = () => {
      if (cancelled) return;

      void import("posthog-js").then(({ default: posthog }) => {
        if (cancelled) return;

        const loaded = (posthog as { __loaded?: boolean }).__loaded;
        if (loaded) {
          let url = window.origin + pathname;
          const query = searchParams.toString();
          if (query) {
            url = `${url}?${query}`;
          }
          posthog.capture("$pageview", { $current_url: url });
          return;
        }

        if (attempts++ < 24) {
          window.setTimeout(capture, 250);
        }
      });
    };

    capture();

    return () => {
      cancelled = true;
    };
  }, [pathname, searchParams]);

  return null;
}
