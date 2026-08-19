import type { Metadata } from "next";

import { UpdatesView } from "@/components/updates/updates-view";

export const metadata: Metadata = {
  title: "Mises à jour",
  description:
    "GoMuslimLife 2.0 — journal des versions : nouvel accueil, horaires, savoir, Sawra et plus.",
};

export default function MisesAJourPage() {
  return <UpdatesView />;
}
