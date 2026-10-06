import type { Firma } from "@/data/firmalar";
import { icerik, site } from "@/data/icerik";
import { enGuncelTarih, mutlakUrl, type AktifIl } from "@/lib/veri";

const DIL = "tr-TR";
const WEB_ID = `${site.url}/#website`;
const KURUM_ID = `${site.url}/#organization`;

type Dugum = Record<string, unknown>;
type Soru = { soru: string; cevap: string };
type Kirinti = { ad: string; yol: string };

export function semaGrafigi(dugumler: Dugum[]): Dugum {
  return { "@context": "https://schema.org", "@graph": dugumler };
}

function kurum(): Dugum {
  return {
    "@type": "Organization",
    "@id": KURUM_ID,
    name: site.ad,
    url: site.url,
    logo: mutlakUrl("/icon.svg"),
    email: icerik.iletisim.eposta,
  };
}

function webSitesi(): Dugum {
  return {
    "@type": "WebSite",
    "@id": WEB_ID,
    name: site.ad,
    url: mutlakUrl("/"),
    inLanguage: DIL,
    publisher: { "@id": KURUM_ID },
  };
}

function sssSayfasi(url: string, sorular: Soru[]): Dugum {
  return {
    "@type": "FAQPage",
    url,
    inLanguage: DIL,
    mainEntity: sorular.map((s) => ({
      "@type": "Question",
      name: s.soru,
      acceptedAnswer: { "@type": "Answer", text: s.cevap },
    })),
  };
}

function kirintiListesi(kirintilar: Kirinti[]): Dugum {
  return {
    "@type": "BreadcrumbList",
    itemListElement: kirintilar.map((k, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: k.ad,
      item: mutlakUrl(k.yol),
    })),
  };
}

function sokakAdresi(adres: string): string | null {
  if (adres === "Yayımlanmamış" || adres === "Belirtilmemiş" || !/\d/.test(adres)) return null;
  return adres;
}

function yerelIsletme(firma: Firma, ilAdi: string): Dugum {
  const sokak = sokakAdresi(firma.adres);
  return {
    "@type": "LocalBusiness",
    name: firma.ad,
    address: {
      "@type": "PostalAddress",
      ...(sokak ? { streetAddress: sokak } : {}),
      addressLocality: firma.semt,
      addressRegion: ilAdi,
      addressCountry: "TR",
    },
    sameAs: firma.webSitesi,
  };
}

export function anaSayfaSemasi(): Dugum {
  return semaGrafigi([
    webSitesi(),
    kurum(),
    sssSayfasi(mutlakUrl("/"), icerik.anasayfa.sss),
  ]);
}

export function ilSayfaSemasi(il: AktifIl, sorular: Soru[]): Dugum {
  const url = mutlakUrl(il.yol);
  const baslik = icerik.ilSayfasi.h1(il.ad);
  const listeId = `${url}#liste`;
  return semaGrafigi([
    {
      "@type": "CollectionPage",
      name: baslik,
      url,
      inLanguage: DIL,
      dateModified: enGuncelTarih(il.firmalar).iso,
      isPartOf: { "@id": WEB_ID },
      mainEntity: { "@id": listeId },
    },
    {
      "@type": "ItemList",
      "@id": listeId,
      name: baslik,
      numberOfItems: il.firmalar.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: il.firmalar.map((firma) => ({
        "@type": "ListItem",
        position: firma.sira,
        url: `${url}#${firma.slug}`,
        item: yerelIsletme(firma, il.ad),
      })),
    },
    kirintiListesi([
      { ad: icerik.ilSayfasi.breadcrumbAnasayfa, yol: "/" },
      { ad: icerik.ilSayfasi.breadcrumbIl(il.ad), yol: il.yol },
    ]),
    sssSayfasi(url, sorular),
  ]);
}

export function rehberSemasi(): Dugum {
  const metin = icerik.rehber;
  const url = mutlakUrl("/sanal-ofis-secim-rehberi");
  return semaGrafigi([
    {
      "@type": "Article",
      headline: metin.h1,
      url,
      inLanguage: DIL,
      datePublished: site.yayinTarihi,
      dateModified: metin.guncellemeISO,
      author: { "@id": KURUM_ID },
      publisher: { "@id": KURUM_ID },
    },
    kirintiListesi([
      { ad: icerik.ilSayfasi.breadcrumbAnasayfa, yol: "/" },
      { ad: metin.breadcrumb, yol: "/sanal-ofis-secim-rehberi" },
    ]),
    sssSayfasi(url, metin.sss),
  ]);
}

export function hakkindaSemasi(): Dugum {
  const url = mutlakUrl("/hakkinda");
  return semaGrafigi([
    {
      "@type": "AboutPage",
      name: icerik.hakkinda.h1,
      url,
      inLanguage: DIL,
      dateModified: icerik.hakkinda.guncellemeISO,
      isPartOf: { "@id": WEB_ID },
    },
    kirintiListesi([
      { ad: icerik.ilSayfasi.breadcrumbAnasayfa, yol: "/" },
      { ad: icerik.hakkinda.h1, yol: "/hakkinda" },
    ]),
  ]);
}

export function iletisimSemasi(): Dugum {
  const url = mutlakUrl("/iletisim");
  return semaGrafigi([
    {
      "@type": "ContactPage",
      name: icerik.iletisim.h1,
      url,
      inLanguage: DIL,
      dateModified: icerik.iletisim.guncellemeISO,
      isPartOf: { "@id": WEB_ID },
    },
    kirintiListesi([
      { ad: icerik.ilSayfasi.breadcrumbAnasayfa, yol: "/" },
      { ad: icerik.iletisim.h1, yol: "/iletisim" },
    ]),
  ]);
}
