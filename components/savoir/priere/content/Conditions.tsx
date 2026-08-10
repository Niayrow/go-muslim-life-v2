"use client";

import { ShieldCheck } from "lucide-react";

import {
  ChapterHero,
  StoryCallout,
  StoryList,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";

export function ConditionsContent() {
  const conditions = [
    {
      title: "1. Être Musulman(e)",
      description: "La base de tout acte d'adoration.",
    },
    {
      title: "2. La Raison (Sain d'esprit)",
      description: "Être conscient (ni ivre, ni fou, ni endormi).",
    },
    {
      title: "3. La Pureté (Wudu)",
      description: "Avoir ses ablutions (petites ou grandes).",
    },
    {
      title: "4. Couvrir la Nudité (Awrah)",
      description:
        "Vêtements amples et opaques couvrant les zones obligatoires.",
    },
    {
      title: "5. L'Heure",
      description: "Le temps de la prière doit être rentré.",
    },
    {
      title: "6. La Qibla",
      description: "S'orienter vers la Ka'ba (La Mecque).",
    },
    {
      title: "7. L'Intention (Niyya)",
      description: "Savoir dans son cœur quelle prière on fait.",
    },
  ];

  return (
    <StoryPage>
      <ChapterHero
        step={3}
        chip="Pré-requis"
        icon={ShieldCheck}
        title="Les 7 Clés de Validité"
        intro="Avant même de lever les mains, votre prière doit respecter ces conditions. Si une seule manque, la porte de la connexion ne s'ouvre pas."
      />

      <StoryScene scene={1} title="Avant de commencer">
        <StoryCallout variant="tip">
          Ce sont les <strong>conditions obligatoires</strong>. C&apos;est comme
          s&apos;assurer d&apos;avoir du réseau, de la batterie et le bon numéro
          avant de passer un appel important.
        </StoryCallout>
      </StoryScene>

      <StoryScene scene={2} title="Les sept conditions">
        <StoryList numbered items={conditions} />
      </StoryScene>
    </StoryPage>
  );
}
