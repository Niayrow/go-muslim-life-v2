import type { Metadata } from "next";
import { Crown } from "lucide-react";

import { ModuleHub } from "@/components/savoir/module-hub";
import { COMPORTEMENT_CHAPTERS } from "@/lib/savoir/comportement-chapters";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Le Comportement musulman",
  description:
    "Parfaire son caractère (Ihsan) en 6 chapitres : colère, famille, langue, relations sociales.",
  path: "/savoir/comportement",
});

export default function SavoirComportementHubPage() {
  return (
    <ModuleHub
      badge={`Module · ${COMPORTEMENT_CHAPTERS.length} chapitres`}
      badgeIcon={Crown}
      title="Le Comportement Musulman"
      description="De l'excellence du caractère (Ihsan) à la maîtrise de la colère — un parcours pour parfaire votre âme."
      startHref="/savoir/comportement/intro"
      basePath="/savoir/comportement"
      chapters={COMPORTEMENT_CHAPTERS}
    />
  );
}
