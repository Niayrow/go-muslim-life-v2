"use client";

import { Heart } from "lucide-react";

import {
  SagaBeat,
  SagaHero,
  SagaNote,
  SagaPage,
} from "@/components/histoires/saga-ui";

export function MariageContent() {
  return (
    <SagaPage>
      <SagaHero
        step={3}
        era="25 – 40 ans"
        chip="Avant la prophétie"
        icon={Heart}
        title="Mariage et vie avant la prophétie"
        intro="Une union de vingt-cinq ans avec Khadîja, puis les retraites dans la grotte de Hirâ’ — le silence avant la Révélation."
      />

      <SagaBeat beat={1} title="Khadîja bint Khuwaylid">
        <p>
          À 25 ans (vers 595), Muhammad est engagé par{" "}
          <strong className="text-brand-pearl">Khadîja bint Khuwaylid</strong>,
          une riche veuve commerçante d&apos;environ 40 ans, pour diriger une
          caravane vers la Syrie.
        </p>
        <p>
          Impressionnée par son honnêteté et son caractère, elle lui propose le
          mariage. Il accepte.
        </p>
      </SagaBeat>

      <SagaBeat beat={2} title="Vingt-cinq ans d'union">
        <p>
          Leur union dure 25 ans. Ils ont plusieurs enfants : des fils (Qâsim,
          Abdullah, et d&apos;autres) qui meurent en bas âge, et quatre filles
          qui survivent :{" "}
          <strong className="text-brand-pearl">
            Zaynab, Ruqayyah, Umm Kulthûm et Fâtima
          </strong>
          .
        </p>
        <SagaNote>
          Muhammad reste monogame tant que Khadîja est en vie. Il affranchit et
          adopte Zayd ibn Hâritha, et prend en charge son cousin Ali ibn Abi
          Talib.
        </SagaNote>
      </SagaBeat>

      <SagaBeat beat={3} title="La grotte de Hirâ'">
        <p>
          À partir de la quarantaine, Muhammad a l&apos;habitude de se retirer
          régulièrement dans la grotte de Hirâ&apos; — sur le Jabal an-Nûr, près
          de La Mecque — pour méditer et s&apos;éloigner du polythéisme et des
          pratiques de l&apos;époque.
        </p>
        <p className="text-brand-pearl">
          Le silence du désert prépare ce qui va venir.
        </p>
      </SagaBeat>
    </SagaPage>
  );
}
