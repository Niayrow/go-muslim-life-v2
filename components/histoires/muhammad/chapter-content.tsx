import type { ComponentType } from "react";

import { AdieuContent } from "@/components/histoires/muhammad/content/Adieu";
import { CombatsContent } from "@/components/histoires/muhammad/content/Combats";
import { HegireContent } from "@/components/histoires/muhammad/content/Hegire";
import { MariageContent } from "@/components/histoires/muhammad/content/Mariage";
import { NaissanceContent } from "@/components/histoires/muhammad/content/Naissance";
import { OrphelinatContent } from "@/components/histoires/muhammad/content/Orphelinat";
import { PersecutionsContent } from "@/components/histoires/muhammad/content/Persecutions";
import { RevelationContent } from "@/components/histoires/muhammad/content/Revelation";
import type { MuhammadChapterId } from "@/lib/histoires/muhammad-chapters";

export const MUHAMMAD_CONTENT: Record<MuhammadChapterId, ComponentType> = {
  naissance: NaissanceContent,
  orphelinat: OrphelinatContent,
  mariage: MariageContent,
  revelation: RevelationContent,
  persecutions: PersecutionsContent,
  hegire: HegireContent,
  combats: CombatsContent,
  adieu: AdieuContent,
};
