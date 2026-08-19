import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

import { LegalDoc } from "@/components/layout/legal-doc";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Sources & crédits",
  description:
    "Sources religieuses, APIs et crédits open source utilisés par GoMuslimLife.",
  path: "/sources",
});

export default function SourcesPage() {
  return (
    <LegalDoc
      eyebrow="Crédits"
      title="Sources & licences"
      intro="GoMuslimLife s’appuie sur le Coran, la Sunna et des ressources techniques open source. Voici les principales sources utilisées."
      updated="16 août 2026"
      icon={BookOpen}
      sections={[
        {
          title: "Fondements religieux",
          body: (
            <>
              <p>
                Les enseignements présentés s’inspirent du{" "}
                <strong>Coran</strong> et de la <strong>Sunna authentique</strong>
                , ainsi que d’avis de savants reconnus lorsque cités
                explicitement (ex. questions/réponses).
              </p>
              <p>
                Ce contenu reste pédagogique : pour un jugement personnel,
                consultez un savant ou une autorité religieuse compétente.
              </p>
            </>
          ),
        },
        {
          title: "Horaires de prière",
          body: (
            <p>
              Les calculs d’horaires s’appuient notamment sur l’API{" "}
              <a
                href="https://aladhan.com/prayer-times-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aladhan Prayer Times
              </a>
              . Les résultats peuvent varier selon la méthode de calcul et la
              convention locale.
            </p>
          ),
        },
        {
          title: "Coran — textes & métadonnées",
          body: (
            <p>
              Textes arabes, traductions et métadonnées de sourates peuvent
              provenir de l’écosystème{" "}
              <a
                href="https://quran.api-docs.io/v4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quran.com API
              </a>{" "}
              et de projets associés, dans le respect de leurs conditions
              d’usage.
            </p>
          ),
        },
        {
          title: "Coran — audio & synchronisation",
          body: (
            <>
              <p>
                Les récitations peuvent être diffusées via des sources
                publiques telles que{" "}
                <a
                  href="https://mp3quran.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MP3Quran.net
                </a>
                .
              </p>
              <p>
                Les données de synchronisation verset par verset peuvent
                utiliser le travail de{" "}
                <a
                  href="http://versebyversequran.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VerseByVerseQuran.com
                </a>
                . Licence et obligation de lien :{" "}
                <a
                  href="http://versebyversequran.com/site/license"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  versebyversequran.com/site/license
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "Questions & réponses",
          body: (
            <p>
              Les réponses publiées citent autant que possible leurs sources
              (versets, hadiths, fatwas). Elles sont fournies à titre
              informatif et peuvent être mises à jour ou corrigées.
            </p>
          ),
        },
        {
          title: "Technologies",
          body: (
            <p>
              Le site est construit avec des technologies open source,
              notamment Next.js, React, Tailwind CSS, Motion, Lucide et
              composants d’interface accessibles. Merci aux communautés qui
              les maintiennent.
            </p>
          ),
        },
        {
          title: "Sawra",
          body: (
            <p>
              <strong>Sawra</strong> (
              <a
                href="https://sawra.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                sawra.app
              </a>
              ) est le site frère dédié à l’écoute et à la lecture du Coran,
              lié à GoMuslimLife. Les deux projets sont édités et gérés par{" "}
              <a
                href="https://sofianeweb.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                SofianeWeb
              </a>{" "}
              (sofianeweb.fr).
            </p>
          ),
        },
        {
          title: "Marque & médias",
          body: (
            <p>
              Le logo et l’identité visuelle GoMuslimLife sont protégés. Toute
              réutilisation hors du Service nécessite une autorisation
              préalable, sauf mention contraire.
            </p>
          ),
        },
      ]}
    />
  );
}
