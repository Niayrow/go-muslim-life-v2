import type { Metadata } from "next";
import { Coins } from "lucide-react";

import { ModuleHub } from "@/components/savoir/module-hub";
import { ZAKAT_CHAPTERS } from "@/lib/savoir/zakat-chapters";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Guide de la Zakat",
  description:
    "Comprends et calcule ta Zakat en 7 chapitres : nisab, biens, bénéficiaires, Zakat al-Fitr et erreurs fréquentes.",
  path: "/savoir/zakat",
});

export default function SavoirZakatHubPage() {
  return (
    <ModuleHub
      badge={`Module · ${ZAKAT_CHAPTERS.length} chapitres`}
      badgeIcon={Coins}
      title="Guide de la Zakat"
      description="De la définition au calculateur basé sur l'or, des bénéficiaires à la Zakat al-Fitr — tout pour accomplir ce pilier avec sérénité."
      startHref="/savoir/zakat/definition"
      basePath="/savoir/zakat"
      chapters={ZAKAT_CHAPTERS}
    />
  );
}
