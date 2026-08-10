"use client";

import { Heart } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function SensContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={8}
        chip="Le Coeur (Khushu')"
        icon={Heart}
        title="Au-delà des Gestes"
        intro="Faire de la gymnastique en récitant de l'arabe sans rien comprendre n'est pas le but. La prière est le repos de l'âme si on y met le cœur."
      />

      <StoryScene scene={1} title={'"Allahu Akbar"'}>
        <p>
          Quand vous levez les mains et dites &quot;Dieu est le plus Grand&quot;,{" "}
          <strong>vous jetez le monde derrière votre dos</strong>. Le stress, le
          travail, les problèmes... tout cela est plus petit qu&apos;Allah.
        </p>
      </StoryScene>

      <StoryScene scene={2} title="La Fatiha">
        <p>
          C&apos;est un dialogue. Le Prophète ﷺ a dit que pour chaque verset de
          la Fatiha que vous lisez, <strong>Allah vous répond en direct</strong>
          . Prenez une pause entre chaque verset pour &quot;entendre&quot; Sa
          réponse.
        </p>
      </StoryScene>

      <StoryScene scene={3} title="Le Sujud (Prosternation)">
        <p>
          &quot;Le moment où le serviteur est{" "}
          <strong>le plus proche de son Seigneur</strong> est lorsqu&apos;il est
          prosterné.&quot; C&apos;est le moment de se vider de son orgueil et de
          faire ses demandes secrètes.
        </p>
      </StoryScene>

      <StoryScene scene={4} title="Où regarder ?">
        <StoryCallout variant="tip">
          Ne fermez pas les yeux ! (Sauf si vous perdez votre concentration).
          Gardez les yeux ouverts et fixez{" "}
          <strong>l&apos;endroit où votre front va se poser</strong>. Cela aide
          incroyablement à vider son esprit et rester focus.
        </StoryCallout>
      </StoryScene>
    </StoryPage>
  );
}
