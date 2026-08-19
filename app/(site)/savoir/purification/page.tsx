import type { Metadata } from "next";
import { Droplets } from "lucide-react";

import { ModuleHub } from "@/components/savoir/module-hub";
import { PURIFICATION_CHAPTERS } from "@/lib/savoir/purification-chapters";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Guide de la Purification",
  description:
    "Comprends la Tahâra en 6 chapitres : Wudu, Ghusl, Tayammum, annulatifs, règles et lochies.",
  path: "/savoir/purification",
});

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
