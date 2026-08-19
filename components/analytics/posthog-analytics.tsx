"use client";

import { Suspense } from "react";

import { PostHogPageView } from "@/components/analytics/posthog-page-view";
import { PostHogProvider } from "@/components/analytics/posthog-provider";

export function PostHogAnalytics() {
  return (
    <PostHogProvider>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
    </PostHogProvider>
  );
}
