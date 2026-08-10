import type { Metadata } from "next";
import { Crown } from "lucide-react";

import { ModuleHub } from "@/components/savoir/module-hub";
import { COMPORTEMENT_CHAPTERS } from "@/lib/savoir/comportement-chapters";

export const metadata: Metadata = {
  title: "Le Comportement Musulman — Savoir",
  description: "Parfaire son caractère en 6 chapitres",
};

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
