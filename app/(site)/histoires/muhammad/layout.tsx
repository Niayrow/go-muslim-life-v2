import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sîra de Muhammad ﷺ — Histoires",
  description:
    "De l'Année de l'Éléphant au Pèlerinage d'Adieu — 8 chapitres selon la tradition classique",
};

export default function MuhammadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
