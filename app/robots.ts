import type { MetadataRoute } from "next";

import { PRIVATE_PATHS, SITE_URL } from "@/lib/seo";

const LLM_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "Anthropic-AI",
  "PerplexityBot",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = [...PRIVATE_PATHS];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      {
        userAgent: LLM_BOTS,
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml"],
        disallow,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
