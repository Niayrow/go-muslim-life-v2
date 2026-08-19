import type { Metadata } from "next";

import { InvocationsView } from "@/components/invocations/invocations-view";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Adhkar — Invocations",
  description:
    "La citadelle du musulman : douas et adhkar du matin, du soir, de la prière et du quotidien.",
  path: "/invocations",
});

export default function InvocationsPage() {
  return <InvocationsView />;
}
