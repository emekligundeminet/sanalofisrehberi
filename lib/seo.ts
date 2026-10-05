import type { Metadata } from "next";
import { site } from "@/data/icerik";
import { mutlakUrl } from "@/lib/veri";

type SayfaMeta = {
  title: string;
  description: string;
  yol: string;
  tur?: "website" | "article";
};

export function sayfaMetadata({ title, description, yol, tur = "website" }: SayfaMeta): Metadata {
  const url = mutlakUrl(yol);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: tur,
      url,
      title,
      description,
      siteName: site.ad,
      locale: site.ogLocale,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
