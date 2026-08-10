import type { JeuneChapterId } from "@/lib/savoir/jeune-chapters";
import type { ComponentType } from "react";

import { AidContent } from "@/components/savoir/jeune/content/Aid";
import { DestinContent } from "@/components/savoir/jeune/content/Destin";
import { ExemptionsContent } from "@/components/savoir/jeune/content/Exemptions";
import { InterditsContent } from "@/components/savoir/jeune/content/Interdits";
import { JourneeContent } from "@/components/savoir/jeune/content/Journee";
import { QuiContent } from "@/components/savoir/jeune/content/Qui";
import { ReglesContent } from "@/components/savoir/jeune/content/Regles";
import { SensContent } from "@/components/savoir/jeune/content/Sens";
import { TarawihContent } from "@/components/savoir/jeune/content/Tarawih";
import { ZakatContent } from "@/components/savoir/jeune/content/Zakat";

export const JEUNE_CONTENT: Record<JeuneChapterId, ComponentType> = {
  sens: SensContent,
  regles: ReglesContent,
  qui: QuiContent,
  exemptions: ExemptionsContent,
  journee: JourneeContent,
  interdits: InterditsContent,
  tarawih: TarawihContent,
  destin: DestinContent,
  zakat: ZakatContent,
  aid: AidContent,
};
