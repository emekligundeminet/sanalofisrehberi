import { firmalar, type Firma } from "@/data/firmalar";
import { icerik, site } from "@/data/icerik";
import { iller, type Il } from "@/data/iller";

export const MIN_FIRMA = 3;
const IL_SAYFA_EKI = "-sanal-ofis";

export type AktifIl = Il & { firmalar: Firma[]; sayfaSlug: string; yol: string };

export function ilFirmalari(ilSlug: string): Firma[] {
  return firmalar
    .filter((f) => f.ilSlug === ilSlug)
    .sort((a, b) => a.sira - b.sira);
}

export function ilSayfaSlug(ilSlug: string): string {
  return `${ilSlug}${IL_SAYFA_EKI}`;
}

export function aktifIller(): AktifIl[] {
  return iller
    .map((il) => {
      const sayfaSlug = ilSayfaSlug(il.slug);
      return { ...il, firmalar: ilFirmalari(il.slug), sayfaSlug, yol: `/${sayfaSlug}` };
    })
    .filter((il) => il.firmalar.length >= MIN_FIRMA)
    .map((il) => {
      if (!icerik.iller[il.slug]) {
        throw new Error(`data/icerik.ts içinde "${il.slug}" için il içeriği eksik`);
      }
      return il;
    });
}

export function sayfaSlugundanIl(sayfaSlug: string): AktifIl | undefined {
  return aktifIller().find((il) => il.sayfaSlug === sayfaSlug);
}

export function mutlakUrl(yol: string): string {
  return yol === "/" ? site.url : `${site.url}${yol}`;
}

/** Kart ve il tablosu: doğrulama şartı yok, aylık sayı yayımlayanların en düşüğü. */
export function enDusukYayimlananAylik(liste: Firma[]): number | null {
  const sayilar = liste.flatMap((firma) => (firma.aylikMin === null ? [] : [firma.aylikMin]));
  if (sayilar.length === 0) return null;
  return Math.min(...sayilar);
}

export function enDusukAylikFiyat(liste: Firma[]): string | null {
  const sayilar = liste
    .filter((f) => f.aylikMin !== null && f.fiyatDogrulandi)
    .map((f) => f.aylikMin as number);
  if (sayilar.length === 0) return null;
  return `${Math.min(...sayilar).toLocaleString("tr-TR")} TL + KDV'den`;
}

export type Guncelleme = { metin: string; iso: string };

export function enGuncelTarih(liste: Firma[]): Guncelleme {
  const secilen = liste.reduce<Firma | undefined>(
    (enIyi, firma) => (!enIyi || firma.guncellemeISO > enIyi.guncellemeISO ? firma : enIyi),
    undefined,
  );
  if (!secilen) return { metin: site.sonGuncellemeMetin, iso: site.sonGuncelleme };
  return { metin: secilen.guncellemeTarihi, iso: secilen.guncellemeISO };
}

export function sonGuncelleme(liste: Firma[]): string {
  return enGuncelTarih(liste).metin;
}
