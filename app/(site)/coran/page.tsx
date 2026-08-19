import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Coran",
  description:
    "Hub lecture, audio et hifz — bientôt disponible. En attendant, écoute le Coran sur Sawra.",
  path: "/coran",
  noIndex: true,
});

export default function CoranPage() {
  return (
    <PlaceholderPage
      title="Coran"
      description="Hub lecture, audio et hifz — à porter depuis la v1."
    />
  );
}
