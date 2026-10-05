import { BadgePercent, Building2, Clock, FileText, Mail, MapPin, Receipt, Users, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BaglantiliMetin } from "@/components/BaglantiliMetin";
import { Bolum } from "@/components/Bolum";
import { IlArama } from "@/components/IlArama";
import { JsonLd } from "@/components/JsonLd";
import { Sss } from "@/components/Sss";
import { TurkiyeHaritasi } from "@/components/TurkiyeHaritasi";
import { icerik } from "@/data/icerik";
import { iller } from "@/data/iller";
import { aramaAnahtari, metinBloklari, type MetinBlok } from "@/lib/metin";
import { anaSayfaSemasi } from "@/lib/schema";
import { sayfaMetadata } from "@/lib/seo";
import { aktifIller, enDusukAylikFiyat } from "@/lib/veri";

const metin = icerik.anasayfa;
const nedirIkonlari: LucideIcon[] = [MapPin, Mail, Users];
const karsilastirmaIkonlari: LucideIcon[] = [Receipt, BadgePercent, Clock, Users, FileText, Building2];

function BilgiKarti({ Ikon, baslik, aciklama, mini }: { Ikon: LucideIcon; baslik: string; aciklama: string; mini?: boolean }) {
  return (
    <li className={`h-full rounded-xl border border-cizgi bg-zemin shadow-kart ${mini ? "p-4" : "p-4 lg:p-5"}`}>
      <div className={`flex gap-3 ${mini ? "" : "flex-col sm:flex-row"}`}>
        <span className={`flex shrink-0 items-center justify-center rounded-lg bg-rozet text-vurgu ${mini ? "h-8 w-8" : "h-9 w-9"}`}>
          <Ikon size={mini ? 16 : 18} aria-hidden="true" />
        </span>
        <div>
          <p className="text-[16px] font-semibold leading-snug text-baslik">{baslik}</p>
          <p className={`mt-1 leading-snug text-metin ${mini ? "text-[14px]" : "text-[16px]"}`}>{aciklama}</p>
        </div>
      </div>
    </li>
  );
}

function SeoMetni({ kaynak }: { kaynak: string }) {
  const bloklar = metinBloklari(kaynak);
  const h2 = bloklar.find((b): b is Extract<MetinBlok, { tur: "h2" }> => b.tur === "h2");
  const h3ler = bloklar.filter((b): b is Extract<MetinBlok, { tur: "h3" }> => b.tur === "h3");
  const ilkH3 = bloklar.findIndex((b) => b.tur === "h3");
  const sehir = h3ler[1];
  if (!h2 || !h3ler[0] || !sehir || ilkH3 < 0) return null;
  const sehirBaslangici = bloklar.indexOf(sehir);
  const paragraflar = (dilim: MetinBlok[]) => dilim.filter((b): b is Extract<MetinBlok, { tur: "p" }> => b.tur === "p");

  return (
    <section className="mt-14">
      <h2 id={h2.id}>{h2.metin}</h2>
      {paragraflar(bloklar.slice(0, ilkH3)).map((p) => (
        <p key={p.metin} className="mt-4 max-w-[760px] text-[16px] leading-[1.65]">
          <BaglantiliMetin metin={p.metin} />
        </p>
      ))}

      <h3 className="mt-8">{h3ler[0].metin}</h3>
      <ul className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {metin.karsilastirmaKartlari.map((kart, i) => (
          <BilgiKarti key={kart.baslik} Ikon={karsilastirmaIkonlari[i]} baslik={kart.baslik} aciklama={kart.aciklama} />
        ))}
      </ul>

      <div className="mt-10 max-w-[720px]">
        <h3>{sehir.metin}</h3>
        {paragraflar(bloklar.slice(sehirBaslangici + 1)).map((p) => (
          <p key={p.metin} className="mt-4 text-[16px] leading-[1.65]">
            <BaglantiliMetin metin={p.metin} />
          </p>
        ))}
      </div>
    </section>
  );
}

export const metadata: Metadata = sayfaMetadata({ ...metin.meta, yol: "/" });

export default function AnaSayfa() {
  const aktif = aktifIller();
  const aktifSluglar = new Set(aktif.map((il) => il.slug));
  const pasif = iller
    .filter((il) => !aktifSluglar.has(il.slug))
    .sort((a, b) => a.ad.localeCompare(b.ad, "tr"));

  return (
    <>
      <JsonLd veri={anaSayfaSemasi()} />

      <div className="border-b border-cizgi bg-yuzey">
        <div className="kap grid items-center gap-10 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <h1>{metin.h1}</h1>
            <p className="mt-3 max-w-[48ch] text-[18px] text-soluk">{metin.heroAciklama}</p>
            <div className="mt-7">
              <IlArama
                metin={{
                  etiket: metin.arama.etiket,
                  placeholder: metin.arama.placeholder,
                  sonucYok: metin.arama.sonucYok,
                  yakinda: metin.arama.yakinda,
                }}
                aktif={aktif.map((il) => ({
                  ad: il.ad,
                  yol: il.yol,
                  firmaSayisi: metin.arama.firmaSayisi(il.firmalar.length),
                  anahtar: aramaAnahtari(il.ad),
                }))}
                pasif={pasif.map((il) => ({ ad: il.ad, anahtar: aramaAnahtari(il.ad) }))}
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <TurkiyeHaritasi aktif={aktif} />
          </div>
        </div>
      </div>

      <div className="kap">
        <Bolum id="iller" baslik={metin.illerBaslik} className="mt-14">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aktif.map((il) => {
              const fiyat = enDusukAylikFiyat(il.firmalar);
              return (
                <li key={il.slug}>
                  <Link
                    href={il.yol}
                    className="group flex h-full flex-col rounded-xl border border-cizgi bg-zemin p-5 shadow-kart hover:border-vurgu"
                  >
                    <h3 className="group-hover:text-vurgu">{il.ad}</h3>
                    <p className="mt-1 kucuk">{metin.ilFirmaSayisi(il.firmalar.length)}</p>
                    {fiyat && (
                      <p className="mt-4 border-t border-cizgi pt-4 font-sans text-[22px] font-semibold leading-snug tracking-[-0.02em] text-baslik tabular-nums">
                        {fiyat}
                      </p>
                    )}
                    <span className="mt-4 text-[15px] font-medium text-vurgu">{metin.ilKartLink}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Bolum>

        <Bolum id="sanal-ofis-nedir" baslik={metin.sanalOfisNedirBaslik}>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-10">
            <div className="space-y-4 text-[16px] leading-[1.65]">
              {metin.sanalOfisNedir.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="grid gap-3">
              {metin.nedirKartlari.map((kart, i) => (
                <BilgiKarti key={kart.baslik} Ikon={nedirIkonlari[i]} baslik={kart.baslik} aciklama={kart.aciklama} mini />
              ))}
            </ul>
          </div>
        </Bolum>

        <SeoMetni
          kaynak={metin.seoMetni
            .replaceAll("{ilSayisi}", String(aktif.length))
            .replaceAll("{toplamFirma}", String(aktif.reduce((n, il) => n + il.firmalar.length, 0)))}
        />

        <div className="max-w-[760px] text-[16px] leading-[1.65]">
          <Bolum id="sss" baslik={metin.sssBaslik}>
            <Sss sorular={metin.sss} />
          </Bolum>
        </div>
      </div>
    </>
  );
}
