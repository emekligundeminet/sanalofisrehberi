import { siteHaritaIndeksi, xmlYanit } from "@/lib/site-haritasi";

export const dynamic = "force-static";

export function GET() {
  return xmlYanit(siteHaritaIndeksi());
}
