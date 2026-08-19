import type { Metadata } from "next";

import { SawraLanding } from "@/components/sawra/sawra-landing";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Sawra — Écouter le Coran",
  description:
    "Sawra est le lecteur coranique gratuit : écoute, lecture et sérénité, sans publicité.",
  path: "/sawra",
});

export default function SawraPage() {
  return <SawraLanding />;
}
