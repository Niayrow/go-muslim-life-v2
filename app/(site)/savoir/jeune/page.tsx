import type { Metadata } from "next";
import { Moon } from "lucide-react";

import { ModuleHub } from "@/components/savoir/module-hub";
import { JEUNE_CHAPTERS } from "@/lib/savoir/jeune-chapters";

export const metadata: Metadata = {
  title: "Guide du Jeûne — Savoir",
  description: "Comprendre et vivre le Ramadan en 10 chapitres",
};

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
