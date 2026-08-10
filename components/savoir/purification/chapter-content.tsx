import type { ComponentType } from "react";

import { AnnulatifsContent } from "@/components/savoir/purification/content/Annulatifs";
import { GhuslContent } from "@/components/savoir/purification/content/Ghusl";
import { IntroContent } from "@/components/savoir/purification/content/Intro";
import { MenstruesContent } from "@/components/savoir/purification/content/Menstrues";
import { TayammumContent } from "@/components/savoir/purification/content/Tayammum";
import { WuduContent } from "@/components/savoir/purification/content/Wudu";
import type { PurificationChapterId } from "@/lib/savoir/purification-chapters";

export const PURIFICATION_CONTENT: Record<PurificationChapterId, ComponentType> = {
  intro: IntroContent,
  wudu: WuduContent,
  ghusl: GhuslContent,
  tayammum: TayammumContent,
  annulatifs: AnnulatifsContent,
  menstrues: MenstruesContent,
};
