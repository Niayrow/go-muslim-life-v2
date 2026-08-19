import type { Metadata } from "next";

import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Sîra de Muhammad ﷺ",
  description:
    "De l'Année de l'Éléphant au Pèlerinage d'Adieu — 8 chapitres selon la tradition classique.",
  path: "/histoires/muhammad",
});

export default function MuhammadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
