import type { Metadata } from "next";
import { Droplets } from "lucide-react";

import { ModuleHub } from "@/components/savoir/module-hub";
import { PURIFICATION_CHAPTERS } from "@/lib/savoir/purification-chapters";

export const metadata: Metadata = {
  title: "Guide de la Purification — Savoir",
  description: "Comprends la Tahâra en 6 chapitres",
};

export default function SavoirPurificationHubPage() {
  return (
    <ModuleHub
      badge={`Module · ${PURIFICATION_CHAPTERS.length} chapitres`}
      badgeIcon={Droplets}
      title="Guide de la Purification"
      description="Des fondements de la Tahâra jusqu'aux règles et lochies — un parcours clair pour maîtriser la pureté rituelle."
      startHref="/savoir/purification/intro"
      basePath="/savoir/purification"
      chapters={PURIFICATION_CHAPTERS}
    />
  );
}
