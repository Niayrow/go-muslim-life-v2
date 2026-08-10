import type { ComponentType } from "react";

import { BeneficiairesContent } from "@/components/savoir/zakat/content/Beneficiaires";
import { BiensContent } from "@/components/savoir/zakat/content/Biens";
import { CalculContent } from "@/components/savoir/zakat/content/Calcul";
import { DefinitionContent } from "@/components/savoir/zakat/content/Definition";
import { FaqContent } from "@/components/savoir/zakat/content/Faq";
import { FitrContent } from "@/components/savoir/zakat/content/Fitr";
import { QuiContent } from "@/components/savoir/zakat/content/Qui";
import type { ZakatChapterId } from "@/lib/savoir/zakat-chapters";

export const ZAKAT_CONTENT: Record<ZakatChapterId, ComponentType> = {
  definition: DefinitionContent,
  qui: QuiContent,
  biens: BiensContent,
  calcul: CalculContent,
  beneficiaires: BeneficiairesContent,
  fitr: FitrContent,
  faq: FaqContent,
};
