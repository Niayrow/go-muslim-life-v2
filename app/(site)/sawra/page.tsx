import type { Metadata } from "next";

import { SawraLanding } from "@/components/sawra/sawra-landing";

export const metadata: Metadata = {
  title: "Sawra — Écouter le Coran",
  description:
    "Sawra est le lecteur coranique gratuit : écoute, lecture et sérénité, sans publicité.",
};

export default function SawraPage() {
  return <SawraLanding />;
}
