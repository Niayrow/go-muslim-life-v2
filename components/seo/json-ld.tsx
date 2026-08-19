import { jsonLdGraph } from "@/lib/seo";

export function JsonLd() {
  const json = JSON.stringify(jsonLdGraph());

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
