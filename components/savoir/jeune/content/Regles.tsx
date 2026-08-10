"use client";

import { Clock } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function ReglesContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={2}
        total={10}
        chip="Horaires"
        icon={Clock}
        title="La Règle d'Or"
        intro="De l'aube véritable au coucher du soleil — c'est la frontière du jeûne. Simple, claire, universelle."
      />

      <StoryScene scene={1} title="Aube — Fajr : le début">
        <StoryList
          items={[
            {
              title: "L'aube véritable (Fajr Sadiq)",
              description:
                "C'est la lueur blanche qui s'étend horizontalement à l'horizon — pas la lueur verticale (qui est l'aube fausse).",
            },
            {
              title: "Arrêtez de manger AVANT l'adhan",
              description:
                "L'adhan du Fajr marque la limite. Si vous mangez encore à ce moment, votre jeûne de ce jour est invalide.",
            },
          ]}
        />
        <StoryCallout variant="tip" title="Astuce pratique">
          Utilisez une application de prière fiable (Adhan, Muslim Pro…) et
          arrêtez le Suhoor 5 à 10 minutes avant l&apos;adhan, par précaution.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Coucher — Maghrib : la rupture">
        <StoryList
          items={[
            {
              title: "Dès l'adhan du Maghrib",
              description:
                "Le soleil est couché. Vous pouvez rompre immédiatement — ne tardez pas.",
            },
            {
              title: "Le Prophète ﷺ rompait avec des dattes",
              description:
                "Trois dattes et de l'eau avant la prière du Maghrib, c'est la Sunnah.",
            },
          ]}
        />
        <StoryCallout variant="quote" attribution="Prophète Muhammad ﷺ">
          &quot;Les gens resteront dans le bien tant qu&apos;ils se hâteront à rompre le
          jeûne.&quot;
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="L'Intention (Niyya)">
        <StoryCallout variant="note" title="Obligatoire chaque nuit">
          L&apos;intention doit être faite <strong>chaque nuit</strong> avant
          l&apos;aube pour le jeûne du lendemain. Elle est dans le cœur — pas
          obligatoire de la prononcer à voix haute.
        </StoryCallout>
        <p className="text-brand-mist text-sm">
          Si vous oubliez l&apos;intention et vous réveillez après le Fajr, ce jour
          de jeûne est nul. Il faudra le rattraper (Qada).
        </p>
      </StoryScene>
    </StoryPage>
  );
}
