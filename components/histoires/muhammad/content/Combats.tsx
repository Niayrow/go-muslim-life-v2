"use client";

import { Swords } from "lucide-react";

import {
  SagaBeat,
  SagaHero,
  SagaMilestone,
  SagaPage,
} from "@/components/histoires/saga-ui";

export function CombatsContent() {
  return (
    <SagaPage>
      <SagaHero
        step={7}
        era="624 – 630"
        chip="Consolidation"
        icon={Swords}
        title="Les années de combats et de consolidation"
        intro="De Badr à la Conquête de La Mecque : épreuves, trêves et une entrée pacifique dans la ville natale."
      />

      <SagaBeat beat={1} title="Le fil des années">
        <div className="pt-2">
          <SagaMilestone year="624 · 2 AH" title="Bataille de Badr">
            Victoire des musulmans (environ 300) contre une armée quraychite bien
            supérieure.
          </SagaMilestone>
          <SagaMilestone year="625 · 3 AH" title="Bataille de Uhud">
            Défaite relative des musulmans ; le Prophète est blessé.
          </SagaMilestone>
          <SagaMilestone year="627 · 5 AH" title="Bataille du Fossé">
            Les alliés quraychites et leurs alliés échouent à prendre Médine —
            aussi appelée bataille de la Tranchée.
          </SagaMilestone>
          <SagaMilestone year="628 · 6 AH" title="Traité de Hudaybiyya">
            Trêve de 10 ans avec les Quraych, considérée comme une grande
            victoire stratégique.
          </SagaMilestone>
          <SagaMilestone year="630 · 8 AH" title="Conquête de La Mecque">
            Muhammad entre pacifiquement, amnistie générale, destruction des
            idoles de la Kaaba.
          </SagaMilestone>
        </div>
      </SagaBeat>

      <SagaBeat beat={2} title="Au-delà des combats">
        <p>
          De nombreuses tribus arabes se convertissent progressivement. En
          630-631, des expéditions au nord (Tabûk) et la réception de
          délégations consolident l&apos;autorité.
        </p>
      </SagaBeat>
    </SagaPage>
  );
}
