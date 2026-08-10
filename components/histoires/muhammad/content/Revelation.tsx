"use client";

import { BookOpen } from "lucide-react";

import {
  SagaBeat,
  SagaHero,
  SagaNote,
  SagaPage,
  SagaQuote,
} from "@/components/histoires/saga-ui";

export function RevelationContent() {
  return (
    <SagaPage>
      <SagaHero
        step={4}
        era="610 – 613"
        chip="Iqra'"
        icon={BookOpen}
        title="La Révélation et les débuts de la mission"
        intro="Dans la grotte de Hirâ’, un ordre change tout : « Lis ! » — et la première lumière descend."
      />

      <SagaBeat beat={1} title="La nuit de Hirâ'">
        <p>
          Vers 610, à 40 ans, lors d&apos;une retraite dans la grotte de
          Hirâ&apos;, l&apos;ange{" "}
          <strong className="text-brand-pearl">Jibrîl (Gabriel)</strong> lui
          apparaît et lui ordonne :
        </p>
        <SagaQuote attribution="Sourate Al-Alaq · 96:1-5">
          « Lis ! » (Iqra’). Muhammad répond qu&apos;il ne sait pas lire.
          L&apos;ange le serre et répète l&apos;ordre. Les premiers versets
          révélés : « Lis au nom de ton Seigneur qui a créé… »
        </SagaQuote>
      </SagaBeat>

      <SagaBeat beat={2} title="Le soutien de Khadîja">
        <p>
          Muhammad rentre bouleversé. Khadîja le rassure, le conduit chez son
          cousin{" "}
          <strong className="text-brand-pearl">Waraqa ibn Nawfal</strong>{" "}
          (chrétien monothéiste), qui confirme qu&apos;il s&apos;agit de la même
          révélation que celle reçue par Moïse.
        </p>
      </SagaBeat>

      <SagaBeat beat={3} title="Les premiers convertis">
        <p>
          Les trois premières années, la prédication reste secrète. Les premiers
          convertis sont :
        </p>
        <ul className="space-y-2 text-brand-mist">
          <li>
            <span className="font-semibold text-brand-pearl">Khadîja</span> —
            la première
          </li>
          <li>
            <span className="font-semibold text-brand-pearl">Ali</span> — encore
            enfant
          </li>
          <li>
            <span className="font-semibold text-brand-pearl">Zayd</span>
          </li>
          <li>
            <span className="font-semibold text-brand-pearl">Abû Bakr</span>
          </li>
        </ul>
        <SagaNote>
          Ensuite viennent Uthmân, Talha, Zubayr, et d&apos;autres compagnons
          qui formeront le noyau de la première communauté.
        </SagaNote>
      </SagaBeat>
    </SagaPage>
  );
}
