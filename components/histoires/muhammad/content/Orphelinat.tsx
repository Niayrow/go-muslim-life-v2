"use client";

import { Sunrise } from "lucide-react";

import {
  SagaBeat,
  SagaHero,
  SagaNote,
  SagaPage,
  SagaQuote,
} from "@/components/histoires/saga-ui";

export function OrphelinatContent() {
  return (
    <SagaPage>
      <SagaHero
        step={2}
        era="6 – 25 ans"
        chip="Al-Amîn"
        icon={Sunrise}
        title="Orphelinat et jeunesse"
        intro="Élevé par son grand-père puis son oncle, le jeune Muhammad devient celui que La Mecque appelle « le digne de confiance »."
      />

      <SagaBeat beat={1} title="Abd al-Muttalib">
        <p>
          Le grand-père paternel,{" "}
          <strong className="text-brand-pearl">Abd al-Muttalib</strong> — chef
          du clan Hâchim et gardien de la source Zamzam — le prend en charge.
        </p>
        <p>
          Deux ans plus tard, vers 8 ans, Abd al-Muttalib meurt. La charge passe
          à l&apos;oncle{" "}
          <strong className="text-brand-pearl">Abu Talib</strong>, frère
          d&apos;Abdullah, qui élève Muhammad avec ses propres enfants malgré
          des moyens limités.
        </p>
      </SagaBeat>

      <SagaBeat beat={2} title="Berger, puis voyageur">
        <p>
          Muhammad travaille d&apos;abord comme berger. Vers 12 ans, il
          accompagne son oncle dans un voyage commercial en Syrie.
        </p>
        <SagaNote title="Selon la tradition">
          Un moine chrétien nommé{" "}
          <strong className="text-brand-pearl">Bahira</strong> le reconnaît
          comme futur prophète grâce à des signes.
        </SagaNote>
      </SagaBeat>

      <SagaBeat beat={3} title="Al-Amîn · As-Sâdiq">
        <p>
          Devenu jeune homme, il se fait une réputation d&apos;honnêteté
          exceptionnelle. Les Mecquois l&apos;appellent :
        </p>
        <SagaQuote attribution="Les Quraych">
          Al-Amîn — le digne de confiance · As-Sâdiq — le véridique
        </SagaQuote>
      </SagaBeat>

      <SagaBeat beat={4} title="La Pierre Noire">
        <p>
          Il participe à la reconstruction de la Kaaba après un incendie et aide
          à trancher un conflit entre les clans sur la pose de la Pierre Noire —
          un geste de sagesse qui calme les tensions avant qu&apos;elles ne
          dégénèrent.
        </p>
      </SagaBeat>
    </SagaPage>
  );
}
