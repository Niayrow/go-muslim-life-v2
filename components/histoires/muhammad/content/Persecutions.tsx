"use client";

import { Shield } from "lucide-react";

import {
  SagaBeat,
  SagaHero,
  SagaNote,
  SagaPage,
  SagaQuote,
} from "@/components/histoires/saga-ui";

export function PersecutionsContent() {
  return (
    <SagaPage>
      <SagaHero
        step={5}
        era="613 – 622"
        chip="Tawhîd"
        icon={Shield}
        title="La prédication publique et les persécutions"
        intro="Quand le message devient public, La Mecque se ferme. Insultes, boycott, exil — puis l’Année de la Tristesse, et le ciel s’ouvre."
      />

      <SagaBeat beat={1} title="Prêcher à voix haute">
        <p>
          À partir de 613 environ, Muhammad prêche ouvertement l&apos;unicité
          d&apos;Allah (tawhîd), le jugement dernier, et condamne
          l&apos;idolâtrie.
        </p>
        <p>
          Les Quraych, dont le commerce repose en partie sur les pèlerinages
          polythéistes à la Kaaba, réagissent avec hostilité.
        </p>
      </SagaBeat>

      <SagaBeat beat={2} title="Persécutions et Abyssinie">
        <p>
          Les musulmans subissent insultes, boycott économique, tortures —
          surtout les esclaves et les faibles, comme{" "}
          <strong className="text-brand-pearl">Bilâl</strong>.
        </p>
        <p>
          En 615, un premier groupe émigre en Abyssinie (Éthiopie chrétienne)
          sous la protection du Négus. Un second groupe suit.
        </p>
      </SagaBeat>

      <SagaBeat beat={3} title="L'Année de la Tristesse">
        <p>
          De 616 à 619, les Quraych imposent un blocus sévère contre le clan des
          Banu Hâchim. En 619 —{" "}
          <strong className="text-brand-pearl">
            « l&apos;Année de la Tristesse »
          </strong>{" "}
          — Khadîja et Abu Talib meurent. Muhammad perd ses deux principaux
          soutiens.
        </p>
      </SagaBeat>

      <SagaBeat beat={4} title="Tâ'if, puis le ciel">
        <p>
          Il tente d&apos;obtenir protection à Tâ&apos;if, mais est rejeté et
          lapidé.
        </p>
        <SagaQuote attribution="Isrâ' & Mi'râj">
          Peu après a lieu le voyage nocturne (Isrâ’) de La Mecque à Jérusalem
          et l&apos;ascension céleste (Mi&apos;râj), où les cinq prières
          quotidiennes sont prescrites.
        </SagaQuote>
        <SagaNote title="À retenir">
          Au plus bas de l&apos;épreuve humaine, le ciel ouvre une porte — et
          la Salat devient le pilier du quotidien.
        </SagaNote>
      </SagaBeat>
    </SagaPage>
  );
}
