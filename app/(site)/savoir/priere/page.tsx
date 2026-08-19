import type { Metadata } from "next";
import { Moon } from "lucide-react";

import { ModuleHub } from "@/components/savoir/module-hub";
import { PRIERE_CHAPTERS } from "@/lib/savoir/priere-chapters";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Guide de la Prière",
  description:
    "Apprends la Salat en 13 chapitres : conditions, wudu, positions, récitations, erreurs fréquentes et dhikr après la prière.",
  path: "/savoir/priere",
});

export default function SavoirPriereHubPage() {
  return (
    <ModuleHub
      badge={`Module · ${PRIERE_CHAPTERS.length} chapitres`}
      badgeIcon={Moon}
      title="Guide de la Prière"
      description="De l'essence de la Salat jusqu'au dhikr après la prière — un parcours clair, sans stress."
      startHref="/savoir/priere/pourquoi"
      basePath="/savoir/priere"
      chapters={PRIERE_CHAPTERS}
    />
  );
}
