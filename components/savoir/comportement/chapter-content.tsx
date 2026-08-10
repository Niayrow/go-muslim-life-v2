import type { ComponentType } from "react";

import { BonusContent } from "@/components/savoir/comportement/content/Bonus";
import { ColereContent } from "@/components/savoir/comportement/content/Colere";
import { FamilleContent } from "@/components/savoir/comportement/content/Famille";
import { IntroContent } from "@/components/savoir/comportement/content/Intro";
import { LangueContent } from "@/components/savoir/comportement/content/Langue";
import { SocialContent } from "@/components/savoir/comportement/content/Social";
import type { ComportementChapterId } from "@/lib/savoir/comportement-chapters";

export const COMPORTEMENT_CONTENT: Record<ComportementChapterId, ComponentType> = {
  intro: IntroContent,
  colere: ColereContent,
  famille: FamilleContent,
  langue: LangueContent,
  social: SocialContent,
  bonus: BonusContent,
};
