import type { MetadataRoute } from "next";
import { site } from "@/data/icerik";

export const dynamic = "force-static";

// Joker kuralı olmayan botlar yalnızca kendi gruplarını okur; bu yüzden
// arama, alıntı ve eğitim tarayıcıları ayrı ayrı izinli.
const aiTarayicilar = [
  "Googlebot",
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Meta-WebIndexer",
  "Meta-ExternalFetcher",
  "Amazonbot",
  "Amzn-SearchBot",
  "CCBot",
  "MistralAI-Training",
  "MistralAI-Index",
  "MistralAI-User",
];

const icerikSinyali = "search=yes, ai-input=yes, ai-train=yes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        other: { "Content-Signal": icerikSinyali },
      },
      {
        userAgent: aiTarayicilar,
        allow: "/",
        other: { "Content-Signal": icerikSinyali },
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
