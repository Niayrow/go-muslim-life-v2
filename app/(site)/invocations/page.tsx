import type { Metadata } from "next";

import { InvocationsView } from "@/components/invocations/invocations-view";

export const metadata: Metadata = {
  title: "Adhkar — Invocations",
  description:
    "La citadelle du musulman : douas et adhkar du matin, du soir, de la prière et du quotidien.",
};

export default function InvocationsPage() {
  return <InvocationsView />;
}
