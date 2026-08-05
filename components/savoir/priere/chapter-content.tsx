import type { ComponentType } from "react";

import { ApresContent } from "@/components/savoir/priere/content/Apres";
import { ConditionsContent } from "@/components/savoir/priere/content/Conditions";
import { ErreursContent } from "@/components/savoir/priere/content/Erreurs";
import { EtapesContent } from "@/components/savoir/priere/content/Etapes";
import { MinimumContent } from "@/components/savoir/priere/content/Minimum";
import { PourquoiContent } from "@/components/savoir/priere/content/Pourquoi";
import { QuiContent } from "@/components/savoir/priere/content/Qui";
import { QuotidienContent } from "@/components/savoir/priere/content/Quotidien";
import { RecitationsContent } from "@/components/savoir/priere/content/Recitations";
import { SensContent } from "@/components/savoir/priere/content/Sens";
import { SunnahContent } from "@/components/savoir/priere/content/Sunnah";
import { WaswasContent } from "@/components/savoir/priere/content/Waswas";
import { WuduContent } from "@/components/savoir/priere/content/Wudu";
import type { PriereChapterId } from "@/lib/savoir/priere-chapters";

export const PRIERE_CONTENT: Record<PriereChapterId, ComponentType> = {
  pourquoi: PourquoiContent,
  qui: QuiContent,
  conditions: ConditionsContent,
  wudu: WuduContent,
  minimum: MinimumContent,
  etapes: EtapesContent,
  recitations: RecitationsContent,
  sens: SensContent,
  sunnah: SunnahContent,
  erreurs: ErreursContent,
  waswas: WaswasContent,
  quotidien: QuotidienContent,
  apres: ApresContent,
};
