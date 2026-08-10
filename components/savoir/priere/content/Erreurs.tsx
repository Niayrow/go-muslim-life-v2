"use client";

import { AlertTriangle } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function ErreursContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={10}
        chip="Attention"
        icon={AlertTriangle}
        title="Les Pièges à Éviter"
        intro="Parfois, de petites mauvaises habitudes se glissent silencieusement dans notre prière. Voici les erreurs les plus fréquentes avec leur solution."
      />

      <StoryScene scene={1} title='1. Prier beaucoup trop vite ("Le Picorage")'>
        <p>
          C&apos;est l&apos;erreur la plus dangereuse. Le Prophète ﷺ a vu un
          homme prier tellement vite qu&apos;il lui a dit :{" "}
          <i>&quot;Retourne prier car tu n&apos;as pas prié.&quot;</i> Ne pas
          marquer d&apos;arrêt à chaque position (le dos bien droit avant de
          redescendre) rend la prière invalide.
        </p>
        <StoryCallout variant="tip" title="Le remède">
          Marquez une pause de 1 à 2 secondes d&apos;immobilité totale
          (Tuma&apos;nina) à chaque étape avant de bouger.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="2. Regarder en l'air (Le Plafond)">
        <p>
          Interdiction absolue, sous peine de voir sa vue confisquée par Allah.
          Le regard doit être fixé vers le sol là où l&apos;on pose son front,
          jamais en haut.
        </p>
        <StoryCallout variant="tip" title="Le remède">
          Tracez un point imaginaire sur votre tapis de prière et ne le quittez
          pas des yeux, depuis le début (debout) jusqu&apos;à la prosternation.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="3. Les bras plats au sol">
        <p>
          Lors du Sujud (prosternation), vos avant-bras et vos coudes ne doivent
          pas toucher le sol, à la manière d&apos;un chien qui s&apos;affaisse.
          Seules les paumes des mains touchent le tapis.
        </p>
        <StoryCallout variant="tip" title="Le remède">
          Décollez vos coudes et gardez les aisselles bien dégagées du corps
          quand il n&apos;y a personne autour de vous.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={4} title="4. L'agitation inutile">
        <p>
          Tripoter sa montre, rajuster ses vêtements 5 fois de suite, se gratter
          sans cesse... Les mouvements répétitifs sans vraie raison annulent la
          prière.
        </p>
        <StoryCallout variant="tip" title="Le remède">
          Sentez la présence d&apos;Allah. Vous tenez-vous droit ou bougez-vous
          dans tous les sens devant votre patron ? Imaginez devant qui vous
          êtes.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
