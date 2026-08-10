"use client";

import { Moon } from "lucide-react";

import {
  SagaBeat,
  SagaHero,
  SagaNote,
  SagaPage,
  SagaQuote,
} from "@/components/histoires/saga-ui";

export function AdieuContent() {
  return (
    <SagaPage>
      <SagaHero
        step={8}
        era="630 – 632"
        chip="Pèlerinage d'Adieu"
        icon={Moon}
        title="Les dernières années et la mort"
        intro="Un sermon sur Arafat, une maladie, et des derniers mots tournés vers le Compagnon suprême."
      />

      <SagaBeat beat={1} title="Le Pèlerinage d'Adieu">
        <p>
          En 632 (10 AH), Muhammad accomplit le Pèlerinage d&apos;Adieu. Sur le
          mont Arafat, il prononce un célèbre sermon rappelant l&apos;égalité
          des hommes, le respect des femmes, l&apos;interdiction de
          l&apos;usure et la fraternité.
        </p>
        <SagaQuote attribution="Sermon d'Arafat">
          « J&apos;ai laissé parmi vous quelque chose qui, si vous vous y
          attachez, vous ne vous égarerez jamais : le Livre d&apos;Allah et ma
          Sunna. »
        </SagaQuote>
      </SagaBeat>

      <SagaBeat beat={2} title="La maladie">
        <p>
          Quelques mois plus tard, il tombe gravement malade (forte fièvre). Il
          continue de diriger les prières aussi longtemps que possible, puis
          confie l&apos;imamat à Abû Bakr.
        </p>
      </SagaBeat>

      <SagaBeat beat={3} title="Le lundi 12 Rabi' al-Awwal">
        <p>
          Le lundi 12 Rabi&apos; al-Awwal de l&apos;an 11 de l&apos;Hégire
          (correspondant au 8 juin 632 selon la plupart des calculs), il meurt à
          Médine, à l&apos;âge d&apos;environ 63 ans, la tête posée sur la
          poitrine de son épouse Aïcha.
        </p>
        <SagaQuote attribution="Derniers mots rapportés">
          « Allâhumma, ar-Rafîq al-A&apos;lâ » — Ô Allah, le Compagnon suprême
        </SagaQuote>
      </SagaBeat>

      <SagaBeat beat={4} title="Sépulture">
        <p>
          Il est enterré dans la chambre d&apos;Aïcha, qui devient plus tard une
          partie de la Mosquée du Prophète.
        </p>
        <SagaNote title="Fin de ce récit">
          Selon la tradition islamique classique (Sîra : Ibn Ishaq / Ibn Hisham,
          Ibn Sa&apos;d, etc.). Les dates grégoriennes sont approximatives ; la
          tradition retient généralement 570 pour la naissance et 632 pour la
          mort.
        </SagaNote>
        <p className="pt-4 text-center font-serif text-lg text-brand-gold-300">
          صلّى الله عليه وسلّم
        </p>
      </SagaBeat>
    </SagaPage>
  );
}
