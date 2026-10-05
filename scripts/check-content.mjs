// `npm run build` sonrası üretilen HTML'i denetler.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const KOK = ".next/server/app";
const SITE = "https://sanalofisrehberi.com";
const YASAK = ["bağımsız", "tarafsız", "objektif", "en iyi", "lider", "1 numara"];
const PUAN = /ratingValue|aggregateRating|"Review"|"Rating"|★|☆|⭐/;
const ESKI_TASARIM = /Fraunces|Instrument/i;

function htmlDosyalari(dizin) {
  return readdirSync(dizin).flatMap((ad) => {
    const yol = join(dizin, ad);
    if (statSync(yol).isDirectory()) return htmlDosyalari(yol);
    return ad.endsWith(".html") && !/_not-found|_global-error/.test(yol) ? [yol] : [];
  });
}

const cozumle = (s) =>
  s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");

let hata = 0;
const yaz = (dosya, mesaj) => {
  hata++;
  console.error(`✗ ${dosya}: ${mesaj}`);
};

const dosyalar = htmlDosyalari(KOK);
if (dosyalar.length < 4) yaz(KOK, `en az 4 sayfa bekleniyordu, ${dosyalar.length} bulundu`);

for (const dosya of dosyalar) {
  const html = readFileSync(dosya, "utf8");
  const gorunur = cozumle(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " "));
  const tum = cozumle(html).toLocaleLowerCase("tr-TR");

  const title = cozumle(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = cozumle(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "";
  const h1Sayisi = (html.match(/<h1[\s>]/g) ?? []).length;

  if (!/<html lang="tr"/.test(html)) yaz(dosya, 'lang="tr" yok');
  if (!title || title.length > 60) yaz(dosya, `title (${title.length}): ${title}`);
  if (!desc || desc.length > 155) yaz(dosya, `description (${desc.length}): ${desc}`);
  if (!canonical.startsWith(SITE)) yaz(dosya, `canonical: ${canonical}`);
  if (h1Sayisi !== 1) yaz(dosya, `${h1Sayisi} adet h1`);
  for (const meta of ["og:title", "og:description", "og:url", "twitter:card", "twitter:title"]) {
    if (!html.includes(`"${meta}"`)) yaz(dosya, `${meta} yok`);
  }
  if (PUAN.test(html)) yaz(dosya, "puan/yıldız işaretlemesi bulundu");
  if (ESKI_TASARIM.test(html)) yaz(dosya, "eski font referansı bulundu");
  for (const kelime of YASAK) {
    if (tum.includes(kelime)) yaz(dosya, `yasaklı ifade: "${kelime}"`);
  }
  for (const [, etiket] of html.matchAll(/(<a [^>]*href="https?:\/\/(?!sanalofisrehberi\.com)[^"]*"[^>]*>)/g)) {
    const rel = etiket.match(/rel="([^"]*)"/)?.[1];
    if (!/target="_blank"/.test(etiket)) yaz(dosya, `target yok: ${etiket}`);
    if (rel !== "noopener" && rel !== "nofollow noopener noreferrer") yaz(dosya, `rel hatalı: ${etiket}`);
  }

  console.log(`✓ ${dosya.replace(KOK, "") || "/"}  [${title.length}] ${title}  ·  desc ${desc.length}  ·  h1 ${h1Sayisi}  ·  ${gorunur.length} karakter`);
}

if (hata) {
  console.error(`\n${hata} sorun bulundu`);
  process.exit(1);
}
console.log("\nTüm kontroller geçti.");
