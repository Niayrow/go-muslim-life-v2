"use client";

import { BookOpen, Sparkles } from "lucide-react";

import { DigitalTasbih } from "@/components/savoir/priere/digital-tasbih";
import {
  ChapterHero,
  StoryCallout,
  StoryPage,
  StoryScene,
} from "@/components/savoir/priere/story-ui";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ApresContent() {
  return (
    <StoryPage>
      <ChapterHero
        step={13}
        chip="Post-Prière"
        icon={Sparkles}
        title="Ne partez pas tout de suite !"
        intro={
          'La prière est finie, mais la connexion est encore ouverte. C\'est le moment du "Service Après-Vente" spirituel : le Dhikr. C\'est ici que l\'on verrouille les récompenses.'
        }
      />

      <StoryScene scene={1} title='Le "Reset" Immédiat'>
        <p>
          Dès le salut final, la première chose à faire est de demander pardon
          à Allah 3 fois (pour toutes les petites baisses de concentration ou
          erreurs dans la prière).
        </p>
        <p className="font-serif text-lg text-brand-pearl">
          &quot;Astaghfirullāh&quot;{" "}
          <span className="font-sans text-xs text-brand-steel-400">
            (Je demande pardon à Allah)
          </span>{" "}
          <span className="font-sans font-bold text-brand-warm">×3</span>
        </p>
      </StoryScene>

      <StoryScene scene={2} title="Le Ticket pour le Paradis">
        <p>
          Le Prophète (ﷺ) a dit :{" "}
          <i>
            &quot;Celui qui récite <strong>Ayat Al-Kursi</strong> après chaque
            prière obligatoire, rien ne l&apos;empêche d&apos;entrer au Paradis
            si ce n&apos;est la mort.&quot;
          </i>
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="rounded-xl">
              <BookOpen className="mr-2 size-4" /> Lire Ayat Al-Kursi
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl border-brand-gold-400/20 bg-brand-night/95 text-brand-soft backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-brand-gold-400">
                Le Verset du Trône (Ayat Al-Kursi)
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 pt-2">
              <p
                className="rounded-2xl border border-brand-gold-400/20 bg-brand-gold-400/10 p-6 text-right font-serif text-2xl leading-[1.8] text-brand-soft md:text-3xl"
                dir="rtl"
                lang="ar"
              >
                اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ
                تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ
                وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلاَّ
                بِإِذْنِهِ...
              </p>
              <div className="space-y-2">
                <h4 className="text-xs font-bold tracking-wider text-brand-gold-400/70 uppercase">
                  Phonétique &amp; Sens global
                </h4>
                <p className="border-l-2 border-brand-gold-400/20 py-2 pl-4 text-sm text-brand-mist italic">
                  &quot;Allāhu lā ilāha illā huwal ḥayyul qayyūm...&quot;
                  <br />
                  (Allah ! Point de divinité à part Lui, le Vivant, Celui qui
                  subsiste par lui-même. Ni somnolence ni sommeil ne Le
                  saisissent...)
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </StoryScene>

      <StoryScene scene={3} title="Le Tasbih (33 × 33 × 33)">
        <p>
          La formule pour alourdir la balance des bonnes actions et expier les
          péchés.{" "}
          <span className="text-brand-warm">Touchez l&apos;écran pour compter.</span>
        </p>
        <DigitalTasbih />
      </StoryScene>

      <StoryScene scene={4} title="La Zone Libre (Invocations)">
        <StoryCallout variant="tip">
          À ce moment précis, la ligne est ouverte rien que pour vous. Levez
          les mains et demandez ce que vous voulez, dans votre langue, avec vos
          propres mots (Santé, succès, famille, paradis...). Allah écoute tout.
        </StoryCallout>
      </StoryScene>

      <div className="space-y-3 border-t border-brand-line/25 pt-8 text-center">
        <p className="text-[10px] font-bold tracking-widest text-brand-steel-500 uppercase">
          Fin du Guide d&apos;Initiation
        </p>
        <p className="inline-flex items-center gap-2 text-sm text-brand-warm">
          <Sparkles className="size-4" /> Qu&apos;Allah accepte vos actions.
        </p>
      </div>
    </StoryPage>
  );
}
