import { ilSayfalari, urlKumesi, xmlYanit } from "@/lib/site-haritasi";

export const dynamic = "force-static";

export function GET() {
  return xmlYanit(urlKumesi(ilSayfalari()));
}
