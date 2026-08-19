import type { Metadata } from "next";
import { Moon, Palette, Type } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Design system",
  description: "Fondations visuelles GoMuslimLife 2.0.",
  path: "/design-system",
  noIndex: true,
});

const palette = [
  { name: "Night", swatch: "bg-brand-night", hex: "#07111d" },
  { name: "Panel", swatch: "bg-brand-panel", hex: "#111d2d" },
  { name: "Elevated", swatch: "bg-brand-panel-elevated", hex: "#1b2d43" },
  { name: "Steel", swatch: "bg-brand-steel-400", hex: "#7990a1" },
  { name: "Gold", swatch: "bg-brand-gold-400", hex: "#cea687" },
  { name: "Warm", swatch: "bg-brand-warm", hex: "#f0d1bc" },
  { name: "Pearl", swatch: "bg-brand-pearl", hex: "#e6edf5" },
  { name: "Success", swatch: "bg-brand-success", hex: "#a7c6b4" },
];

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-5 py-12 md:px-8 md:py-16">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-line/50 bg-brand-panel/60 px-3 py-1 text-xs font-medium text-brand-soft">
          <Palette className="size-3.5 text-brand-warm" />
          Design system · étape 1
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-pearl md:text-5xl">
          GoMuslimLife{" "}
          <span className="bg-gradient-to-r from-brand-warm to-brand-gold-400 bg-clip-text text-transparent">
            2.0
          </span>
        </h1>
        <p className="max-w-2xl text-brand-mist">
          Fondations visuelles inspirées de Sawra : nuit, acier, cuivre. Sans
          étoiles, sans galaxy — surfaces glass, typo Outfit, arabe Amiri.
        </p>
      </header>

      <Separator />

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-brand-soft">
          <Moon className="size-4 text-brand-gold-400" />
          <h2 className="text-lg font-bold text-brand-pearl">Palette</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {palette.map((color) => (
            <div
              key={color.name}
              className="glass-panel overflow-hidden rounded-2xl"
            >
              <div className={`h-16 ${color.swatch}`} />
              <div className="space-y-0.5 px-3 py-2.5">
                <p className="text-sm font-semibold text-brand-pearl">
                  {color.name}
                </p>
                <p className="font-mono text-xs text-brand-mist">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Type className="size-4 text-brand-gold-400" />
          <h2 className="text-lg font-bold text-brand-pearl">Typographie</h2>
        </div>
        <div className="glass-panel space-y-5 rounded-2xl p-6">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-brand-mist">
              Outfit · UI
            </p>
            <p className="text-3xl font-extrabold tracking-tight text-brand-pearl">
              La vie musulmane, au quotidien
            </p>
            <p className="mt-2 text-brand-soft">
              Corps de texte en Outfit — lisible, moderne, sans empattement.
            </p>
          </div>
          <Separator />
          <div dir="rtl" className="text-right">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-brand-mist">
              Amiri · Arabe
            </p>
            <p className="font-arabic text-3xl leading-relaxed text-brand-pearl">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-pearl">Boutons & chips</h2>
        <div className="glass-panel flex flex-wrap items-center gap-3 rounded-2xl p-6">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive" size="sm">
            Danger
          </Button>
          <Badge>Warm chip</Badge>
          <Badge variant="cool">Steel chip</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-pearl">Surfaces</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-sm font-semibold text-brand-warm">.glass-panel</p>
            <p className="mt-2 text-sm text-brand-mist">
              Panneau glass avec blur et bordure acier douce.
            </p>
          </div>
          <div className="glass-panel-interactive cursor-pointer rounded-2xl p-6">
            <p className="text-sm font-semibold text-brand-warm">
              .glass-panel-interactive
            </p>
            <p className="mt-2 text-sm text-brand-mist">
              Survole pour le lift et la bordure cuivre.
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Brand card · shadcn</CardTitle>
            <CardDescription>
              Card branchée sur les tokens brand (surfaces panel / pearl).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Champ de saisie…" />
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">Continuer</Button>
            <Button size="sm" variant="secondary">
              Annuler
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
