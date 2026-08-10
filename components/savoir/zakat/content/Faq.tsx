"use client";

import { HelpCircle } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function FaqContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={7}
        total={7}
        chip="Questions"
        icon={HelpCircle}
        title="FAQ & Erreurs Fréquentes"
        intro="Les questions les plus courantes sur la Zakat et les erreurs à éviter pour s'assurer que votre obligation est valide."
      />

      <StoryScene scene={1} title="Questions Fréquentes">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-semibold text-brand-pearl">
              Ma Zakat doit-elle être payée à la même date chaque année ?
            </p>
            <p>
              Oui, idéalement. Vous choisissez une date de référence (souvent
              le début du Ramadan pour sa praticité), et vous calculez votre
              Zakat sur la richesse possédée à cette date si elle dépasse le
              Nisab depuis un an.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-brand-pearl">
              Puis-je donner ma Zakat à ma famille ?
            </p>
            <p>
              Vous ne pouvez pas donner la Zakat aux personnes dont vous avez
              la charge (parents, conjoint, enfants). En revanche, vous pouvez
              la donner à des frères, sœurs, oncles, tantes ou cousins dans le
              besoin — et vous recevrez même une double récompense (Zakat +
              liens familiaux).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-brand-pearl">
              Peut-on payer sa Zakat à une association ?
            </p>
            <p>
              Oui, à condition que l&apos;association redistribue effectivement
              les fonds aux catégories définies par le Coran 9:60. Certaines
              associations publient des rapports de transparence — privilégiez
              celles qui précisent leurs bénéficiaires.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-brand-pearl">
              Ma Zakat est-elle valide si je la donne à des non-musulmans ?
            </p>
            <p>
              La Zakat obligatoire (Fard) doit être donnée à des musulmans
              parmi les catégories listées, ou à des non-musulmans dans la
              catégorie &quot;Mu&apos;allafati Qulubuhum&quot;. Pour les
              non-musulmans dans le besoin, vous pouvez donner de la Sadaqa
              (aumône volontaire).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-brand-pearl">
              Faut-il faire une intention (Niyya) avant de payer la Zakat ?
            </p>
            <p>
              Oui, l&apos;intention est une condition de validité. Elle doit
              être faite au moment du paiement (ou juste avant). Il suffit
              d&apos;avoir l&apos;intention dans le cœur que ce paiement est
              votre Zakat obligatoire.
            </p>
          </div>
        </div>
      </StoryScene>

      <StoryScene scene={2} title="Erreurs Fréquentes">
        <StoryList
          items={[
            {
              title: "Confondre Zakat et Sadaqa",
              description:
                "La Zakat est une obligation légale avec des règles précises. La Sadaqa est une aumône volontaire, libre dans son montant et ses bénéficiaires.",
            },
            {
              title: "Oublier des biens zakatable",
              description:
                "L'épargne dans plusieurs banques, l'or oublié dans un coffre, les actions en bourse — tous ces biens sont zakatable et doivent être inclus dans le calcul.",
            },
            {
              title: "Déduire toutes ses dettes",
              description:
                "Seules les dettes à court terme (exigibles dans l'année) se déduisent. Un crédit immobilier ne se déduit pas en totalité selon les savants majoritaires.",
            },
            {
              title: "Donner à des bénéficiaires non qualifiés",
              description:
                "Donner à une mosquée pour sa construction peut relever de « Fî Sabîlillâh », mais cela fait débat. Vérifiez auprès d'un savant de confiance.",
            },
          ]}
        />
        <StoryCallout variant="warn">
          En cas de doute sur un aspect de votre Zakat, consultez un savant ou
          un imam de confiance. Il vaut mieux payer légèrement plus que moins
          — l&apos;excédent devient Sadaqa et est récompensé par Allah.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
