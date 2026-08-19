import type { Metadata } from "next";

import { HomeScrollScene } from "@/components/home/home-scroll-scene";
import { pageSeo, SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageSeo({
    title: SITE_NAME,
    description:
      "GoMuslimLife 2.0 — horaires de prière, modules (purification, salat, jeûne, zakat), invocations, questions sourcées et Coran avec Sawra.",
    path: "/",
  }),
  title: {
    absolute: `${SITE_NAME} — ${SITE_TAGLINE}`,
  },
};

export default function HomePage() {
  return (
    <main className="relative w-full md:-mt-[calc(3.5rem+0.75rem)]">
      <HomeScrollScene />
    </main>
  );
}
