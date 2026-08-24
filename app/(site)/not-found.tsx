import type { Metadata } from "next";

import { NotFoundView } from "@/components/layout/not-found-view";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Page introuvable",
  description: "Cette page n'existe pas ou n'est plus disponible sur GoMuslimLife.",
  path: "/404",
  noIndex: true,
});

export default function SiteNotFound() {
  return <NotFoundView />;
}
