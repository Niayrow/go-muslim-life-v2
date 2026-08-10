"use client";

import { Users } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/story-ui";

export function SocialContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={5}
        total={6}
        chip="Voisinage"
        icon={Users}
        title="Le Voisinage"
        intro="L'Islam ne se vit pas seul sur une montagne, mais parmi les gens."
      />

      <StoryScene scene={1} title="La Soupe du Voisin">
        <p>
          Abu Dharr (رضي الله عنه) rapporte que le Prophète (ﷺ) lui a dit :{" "}
          <i>
            &laquo;Ô Abu Dharr, quand tu fais cuire un bouillon, augmente
            l&apos;eau et prends soin de tes voisins.&raquo;
          </i>
        </p>
        <p>
          Ce n&apos;est pas une suggestion — c&apos;est un ordre prophétique.
          Le voisin a des droits sur vous.
        </p>
        <StoryCallout variant="tip" title="Défi pratique">
          Cette semaine, donnez quelque chose à un voisin : un plat cuisiné,
          des fruits, ou même un simple salam sincère à sa porte. Commencez
          petit.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="La Sadaqa Facile">
        <p>
          Le Prophète (ﷺ) a dit :{" "}
          <i>
            &laquo;Ton sourire à ton frère est une aumône (sadaqa).&raquo;
          </i>
        </p>
        <StoryCallout variant="tip" title="Sourire = Aumône">
          Vous n&apos;avez pas besoin d&apos;argent pour être généreux. Un
          visage ouvert, une poignée de main chaleureuse, un regard bienveillant
          — tout cela compte dans votre balance.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={3} title="L'Honneur des Gens">
        <p>
          Le Prophète (ﷺ) a déclaré lors du dernier pèlerinage :{" "}
          <i>
            &laquo;Votre sang, vos biens et votre honneur sont sacrés entre
            vous.&raquo;
          </i>
        </p>
        <StoryCallout variant="tip" title="La Paix comme défaut">
          Avant de parler d&apos;une personne absente, demandez-vous :
          &laquo;Est-ce qu&apos;il aimerait entendre cela de moi ?&raquo; Si
          non, l&apos;honneur de votre frère vaut plus que votre histoire.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
