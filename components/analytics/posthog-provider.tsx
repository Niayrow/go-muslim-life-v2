"use client";

import { useEffect } from "react";

const INIT_DELAY_MS = 2000;

/** Identifiants du projet PostHog GoMuslimLife v1 (US). */
const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ??
  "phc_QfXOnCuFl3SZVAv5QXDMURETMwJJ0dvI1ohJPwsEEQx";
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY || !POSTHOG_HOST) {
      return;
    }

    const timer = window.setTimeout(() => {
      void import("posthog-js").then(({ default: posthog }) => {
        const loaded = (posthog as { __loaded?: boolean }).__loaded;
        if (loaded) {
          return;
        }

        posthog.init(POSTHOG_KEY, {
          api_host: POSTHOG_HOST,
          session_recording: {
            maskAllInputs: false,
          },
          capture_pageview: false,
          loaded: (ph) => {
            ph.register({ app: "gomuslimlife-v2" });
            if (process.env.NODE_ENV === "development") {
              ph.debug();
            }
          },
        });
      });
    }, INIT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
