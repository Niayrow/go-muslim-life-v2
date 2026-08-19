import type { Metadata } from "next";
import { Moon } from "lucide-react";

import { ModuleHub } from "@/components/savoir/module-hub";
import { JEUNE_CHAPTERS } from "@/lib/savoir/jeune-chapters";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Guide du Jeûne",
  description:
    "Comprendre et vivre le Ramadan en 10 chapitres : règles, exemptions, Tarawih, Laylatul Qadr et Aïd.",
  path: "/savoir/jeune",
});

export default function SavoirJeuneHubPage() {
  return (
    <ModuleHub
      badge={`Module · ${JEUNE_CHAPTERS.length} chapitres`}
      badgeIcon={Moon}
      title="Guide du Jeûne"
      description="De l'esprit du Ramadan jusqu'à l'Aïd — un parcours clair pour vivre ce mois béni pleinement."
      startHref="/savoir/jeune/sens"
      basePath="/savoir/jeune"
      chapters={JEUNE_CHAPTERS}
    />
  );
}
