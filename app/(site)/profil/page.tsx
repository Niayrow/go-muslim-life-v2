import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Profil",
  description: "Compte, progression et favoris.",
  path: "/profil",
  noIndex: true,
});

export default function Page() {
  return (
    <PlaceholderPage
      title="Profil"
      description="Compte, progression et favoris."
    />
  );
}
