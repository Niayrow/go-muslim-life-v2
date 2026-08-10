"use client";

import { Calculator } from "lucide-react";

import { ZakatCalculator } from "@/components/savoir/zakat/zakat-calculator";
import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function CalculContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={4}
        total={7}
        chip="Formule"
        icon={Calculator}
        title="Comment calculer sa Zakat ?"
        intro="Le calcul de la Zakat est plus simple qu'il n'y paraît. Une seule règle d'or : 2,5% sur la richesse nette au-dessus du Nisab."
      />

      <StoryScene scene={1} title="La Règle d'Or : 2,5 %">
        <p>
          Pour les biens les plus courants (argent, or, épargne, marchandises
          commerciales), la Zakat est de{" "}
          <strong className="text-brand-warm">2,5 %</strong> de la valeur
          totale de votre richesse nette — à condition qu&apos;elle dépasse le
          Nisab et qu&apos;un an (Hawl) se soit écoulé.
        </p>
        <StoryCallout variant="tip" title="Formule simple">
          Richesse nette × 2,5 % = Zakat due
        </StoryCallout>
        <StoryCallout variant="note" title="Nisab basé sur l'or">
          Le seuil classique est{" "}
          <strong className="text-brand-pearl">85 grammes d&apos;or pur</strong>{" "}
          (24K). Sa valeur en euros varie chaque jour avec le cours de
          l&apos;or — c&apos;est ce que le calculateur utilise automatiquement.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Calculateur précis (Nisab or)">
        <ZakatCalculator />
      </StoryScene>

      <StoryScene scene={3} title="Exemples Concrets">
        <StoryList
          items={[
            {
              title: "10 000 €",
              description: "10 000 × 2,5 % = 250 € de Zakat",
              meta: "Juste au-dessus du Nisab",
            },
            {
              title: "25 000 €",
              description: "25 000 × 2,5 % = 625 € de Zakat",
              meta: "Épargne intermédiaire",
            },
            {
              title: "50 000 €",
              description: "50 000 × 2,5 % = 1 250 € de Zakat",
              meta: "Épargne élevée",
            },
          ]}
        />
        <p className="text-sm text-brand-mist">
          Note : Ces exemples supposent que la totalité de la somme constitue
          la richesse nette (après déduction des dettes à court terme).
        </p>
      </StoryScene>

      <StoryScene scene={4} title="La Méthode en 3 Étapes">
        <StoryList
          numbered
          items={[
            {
              title: "Calculer votre richesse totale",
              description:
                "Additionnez espèces, comptes bancaires, or, argent, valeur des marchandises commerciales et autres biens zakatable.",
            },
            {
              title: "Déduire les dettes à court terme",
              description:
                "Soustrayez uniquement les dettes exigibles dans l'année (loyer dû, factures, dettes imminentes). Les emprunts long terme (crédit immobilier) ne se déduisent généralement pas en totalité.",
            },
            {
              title: "Appliquer le taux de 2,5 %",
              description:
                "Si le résultat dépasse le Nisab depuis un an, multipliez par 0,025 pour obtenir le montant de votre Zakat.",
            },
          ]}
        />
      </StoryScene>
    </StoryPage>
  );
}
