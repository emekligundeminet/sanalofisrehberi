import { icerik, site } from "@/data/icerik";
import { firmalar } from "@/data/firmalar";
import { aktifIller, enGuncelTarih, mutlakUrl } from "@/lib/veri";

export type SiteHaritaKaydi = { loc: string; lastmod: string };

function enYeni(tarihler: string[]): string {
  return tarihler.reduce((enIyi, tarih) => (tarih > enIyi ? tarih : enIyi));
}

export function ilSayfalari(): SiteHaritaKaydi[] {
  return aktifIller().map((il) => ({
    loc: mutlakUrl(il.yol),
    lastmod: enGuncelTarih(il.firmalar).iso,
  }));
}

export function sabitSayfalar(): SiteHaritaKaydi[] {
  return [
    { loc: mutlakUrl("/"), lastmod: enGuncelTarih(firmalar).iso },
    { loc: mutlakUrl("/sanal-ofis-secim-rehberi"), lastmod: icerik.rehber.guncellemeISO },
    { loc: mutlakUrl("/hakkinda"), lastmod: icerik.hakkinda.guncellemeISO },
    { loc: mutlakUrl("/iletisim"), lastmod: icerik.iletisim.guncellemeISO },
  ];
}

function kacis(deger: string): string {
  return deger.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function urlKumesi(kayitlar: SiteHaritaKaydi[]): string {
  const satirlar = kayitlar
    .map((k) => `  <url>\n    <loc>${kacis(k.loc)}</loc>\n    <lastmod>${k.lastmod}</lastmod>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${satirlar}\n</urlset>\n`;
}

export function siteHaritaIndeksi(): string {
  const dosyalar = [
    { loc: `${site.url}/sitemaps/iller.xml`, lastmod: enYeni(ilSayfalari().map((k) => k.lastmod)) },
    { loc: `${site.url}/sitemaps/sayfalar.xml`, lastmod: enYeni(sabitSayfalar().map((k) => k.lastmod)) },
  ];
  const satirlar = dosyalar
    .map((d) => `  <sitemap>\n    <loc>${kacis(d.loc)}</loc>\n    <lastmod>${d.lastmod}</lastmod>\n  </sitemap>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${satirlar}\n</sitemapindex>\n`;
}

export function xmlYanit(govde: string): Response {
  return new Response(govde, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
