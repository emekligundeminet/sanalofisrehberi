const KALIN_UNLULER = "aıou";
const INCE_UNLULER = "eiöü";
const SERT_UNSUZLER = "fstkçşhp";

/** "Ankara" → "Ankara'da", "İzmir" → "İzmir'de", "Kars" → "Kars'ta" */
export function bulunmaHali(ad: string): string {
  const kucuk = ad.toLocaleLowerCase("tr-TR");
  const sonUnlu = [...kucuk].reverse().find((h) => KALIN_UNLULER.includes(h) || INCE_UNLULER.includes(h));
  const unlu = sonUnlu && INCE_UNLULER.includes(sonUnlu) ? "e" : "a";
  const unsuz = SERT_UNSUZLER.includes(kucuk.at(-1) ?? "") ? "t" : "d";
  return `${ad}'${unsuz}${unlu}`;
}

/** Arama için: küçük harf + Türkçe karakterleri ASCII'ye indirger ("İstanbul" → "istanbul"). */
export function aramaAnahtari(metin: string): string {
  return metin
    .toLocaleLowerCase("tr-TR")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/[âà]/g, "a")
    .replace(/î/g, "i")
    .replace(/û/g, "u")
    .trim();
}

export type MetinBlok =
  | { tur: "h2"; id: string; metin: string }
  | { tur: "h3"; metin: string }
  | { tur: "p"; metin: string }
  | { tur: "ul"; maddeler: string[] };

export function metinBloklari(metin: string): MetinBlok[] {
  const bloklar: MetinBlok[] = [];
  let liste: string[] | null = null;
  const listeKapat = () => {
    if (liste) bloklar.push({ tur: "ul", maddeler: liste });
    liste = null;
  };
  for (const ham of metin.split("\n")) {
    const satir = ham.trim();
    if (!satir) {
      listeKapat();
      continue;
    }
    if (satir.startsWith("### ")) {
      listeKapat();
      bloklar.push({ tur: "h3", metin: satir.slice(4) });
      continue;
    }
    if (satir.startsWith("## ")) {
      listeKapat();
      const baslik = satir.slice(3);
      bloklar.push({ tur: "h2", id: idOlustur(baslik), metin: baslik });
      continue;
    }
    if (satir.startsWith("- ")) {
      liste = liste ?? [];
      liste.push(satir.slice(2));
      continue;
    }
    listeKapat();
    bloklar.push({ tur: "p", metin: satir });
  }
  listeKapat();
  return bloklar;
}

export function idOlustur(metin: string): string {
  return aramaAnahtari(metin).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function siraNo(sira: number): string {
  return String(sira).padStart(2, "0");
}

/** "Ankara Sanal Ofis" → "AS", "Regus" → "R" */
export function basHarfler(ad: string): string {
  return ad
    .split(/\s+/)
    .slice(0, 2)
    .map((k) => k.charAt(0).toLocaleUpperCase("tr-TR"))
    .join("");
}

/** "Günlük fiyatlandırma (sitesinde …)" → { ana: "Günlük fiyatlandırma", ek: "sitesinde …" } */
export function fiyatParcala(fiyat: string): { ana: string; ek?: string; sayisal: boolean } {
  const eslesme = fiyat.match(/^(.*?)\s*\((.*)\)$/);
  const ana = eslesme ? eslesme[1] : fiyat;
  return { ana, ek: eslesme?.[2], sayisal: /\d/.test(ana) };
}

/** Yalnızca rakamla başlayan (aylık) fiyatlar: "450 TL" → 450; "Yıllık 7.000 TL" → null */
export function aylikFiyatSayisi(fiyat: string): number | null {
  const eslesme = fiyat.match(/^(\d[\d.]*)\s*TL/);
  return eslesme ? Number(eslesme[1].replace(/\./g, "")) : null;
}

export function disLinkRel(dofollow: boolean): string {
  return dofollow ? "noopener" : "nofollow noopener noreferrer";
}
