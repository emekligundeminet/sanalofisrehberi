import { ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BaglantiliMetin } from "@/components/BaglantiliMetin";
import { Bolum } from "@/components/Bolum";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FirmaKarti } from "@/components/FirmaKarti";
import { FirmaTablosu } from "@/components/FirmaTablosu";
import { HizliBakis } from "@/components/HizliBakis";
import type { IcindekilerOgesi } from "@/components/Icindekiler";
import { JsonLd } from "@/components/JsonLd";
import { SidebarDuzeni } from "@/components/SidebarDuzeni";
import { Sss } from "@/components/Sss";
import type { Firma } from "@/data/firmalar";
import { icerik, site } from "@/data/icerik";
import { bulunmaHali, metinBloklari, siraNo } from "@/lib/metin";
import { ilSayfaSemasi } from "@/lib/schema";
import { sayfaMetadata } from "@/lib/seo";
import { aktifIller, enDusukAylikFiyat, enGuncelTarih, sayfaSlugundanIl, sonGuncelleme, type AktifIl } from "@/lib/veri";

type Props = { params: Promise<{ ilSayfa: string }> };

const metin = icerik.ilSayfasi;

export const dynamicParams = false;

export function generateStaticParams() {
  return aktifIller().map((il) => ({ ilSayfa: il.sayfaSlug }));
}

async function ilBul(params: Props["params"]): Promise<AktifIl> {
  const { ilSayfa } = await params;
  const il = sayfaSlugundanIl(ilSayfa);
  if (!il) notFound();
  return il;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const il = await ilBul(params);
  return sayfaMetadata({
    title: metin.meta.title(il.ad, site.yil),
    description: metin.meta.description(il.ad, il.firmalar.length, sonGuncelleme(il.firmalar)),
    yol: il.yol,
  });
}

type RehberH2 = { tur: "h2"; id: string; metin: string };

function rehberDoldur(kaynak: string, firmalar: Firma[]) {
  const enDusuk = enDusukAylikFiyat(firmalar);
  const metin = enDusuk
    ? kaynak
    : kaynak.replace(
        /(^|[.!?]\s+)[^.!?]*\{enDusukFiyat\}[^.!?]*[.!?]/gm,
        (_eslesme, onEk: string) => `${onEk}Fiyatlar firmaya göre değişiyor.`,
      );
  const deger: Record<string, string> = {
    firmaSayisi: String(firmalar.length),
    fiyatYayimlayanSayisi: String(firmalar.filter((f) => f.aylikFiyat !== "Yayımlanmamış").length),
    enDusukFiyat: enDusuk ?? "",
  };
  return metin.replace(/\{(firmaSayisi|fiyatYayimlayanSayisi|enDusukFiyat)\}/g, (_, anahtar: string) => deger[anahtar] ?? "");
}

export default async function IlSayfasi({ params }: Props) {
  const il = await ilBul(params);
  const ilIcerik = icerik.iller[il.slug];
  const tarih = enGuncelTarih(il.firmalar).metin;
  const digerIller = aktifIller().filter((d) => d.slug !== il.slug && d.slug !== "bursa");

  const rehber = ilIcerik.rehberMetni ? metinBloklari(rehberDoldur(ilIcerik.rehberMetni, il.firmalar)) : [];
  const sss = ilIcerik.sss.map((s) => ({
    soru: rehberDoldur(s.soru, il.firmalar),
    cevap: rehberDoldur(s.cevap, il.firmalar),
  }));

  const icindekiler: IcindekilerOgesi[] = [
    { id: "hizli-bakis", ad: metin.hizliBakisBaslik(il.ad) },
    { id: "karsilastirma", ad: metin.tabloBaslik },
    ...il.firmalar.map((f) => ({ id: f.slug, ad: `${siraNo(f.sira)} · ${f.ad}`, alt: true })),
    { id: "nasil-siraladik", ad: metin.nasilSiraladikBaslik },
    { id: "semtler", ad: metin.semtlerKisa },
    ...rehber.filter((b): b is RehberH2 => b.tur === "h2").map((b) => ({ id: b.id, ad: b.metin })),
    { id: "sss", ad: metin.sssBaslik },
    { id: "diger-iller", ad: metin.digerIllerBaslik },
  ];

  return (
    <SidebarDuzeni baslik={metin.icindekiler} ogeler={icindekiler} not={metin.sidebarNot}>
      <JsonLd veri={ilSayfaSemasi(il, sss)} />

      <Breadcrumb
        kirintilar={[
          { ad: metin.breadcrumbAnasayfa, yol: "/" },
          { ad: metin.breadcrumbIl(il.ad), yol: il.yol },
        ]}
      />

      <h1 className="mt-4">{metin.h1(il.ad)}</h1>
      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 kucuk">
        <span className="rakam rounded-full bg-yuzey px-2.5 py-0.5 text-[13px] text-metin">
          {metin.sonGuncelleme(tarih)}
        </span>
        <span aria-hidden="true">·</span>
        <span>{metin.karsilastirildi(il.firmalar.length)}</span>
        <span aria-hidden="true">·</span>
        <a href="#nasil-siraladik" className="metin-link">{metin.nasilSiraladikLink}</a>
      </p>

      <div className="mt-6 space-y-4">
        {ilIcerik.giris.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-8">
        <HizliBakis il={il.ad} firmalar={il.firmalar.slice(0, 3)} />
      </div>

      <Bolum id="karsilastirma" baslik={metin.tabloBaslik}>
        <FirmaTablosu firmalar={il.firmalar} />
      </Bolum>

      <div className="mt-10 space-y-6">
        {il.firmalar.map((f) => (
          <FirmaKarti key={f.slug} firma={f} />
        ))}
      </div>

      <Bolum id="nasil-siraladik" baslik={metin.nasilSiraladikBaslik}>
        <ol className="space-y-3">
          {icerik.olcutler.map((o, i) => (
            <li key={o} className="flex gap-3">
              <span className="rakam flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rozet text-[13px] font-semibold text-rozet-metin">
                {i + 1}
              </span>
              <span className="pt-0.5">{o}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-xl bg-yuzey p-4 kucuk">{icerik.olcutlerNot}</p>
      </Bolum>

      <section id="semtler" aria-labelledby="semtler-baslik" className="mt-14">
        <h2 id="semtler-baslik">{metin.semtlerBaslik(bulunmaHali(il.ad))}</h2>
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ilIcerik.semtler.map((s) => {
            const n = il.firmalar.filter((f) => s.eslesme.some((k) => f.semt.includes(k))).length;
            return (
              <li
                key={s.ad}
                className="flex flex-col rounded-xl border border-cizgi bg-zemin p-6 shadow-kart hover:border-vurgu"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rozet text-vurgu">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <h3>{s.ad}</h3>
                </div>
                <p className="mt-4 text-[16px] leading-[1.65] text-metin">{s.aciklama}</p>
                {n > 0 && (
                  <p className="mt-4 border-t border-cizgi pt-3 text-[14px] text-soluk">
                    {metin.semtFirmaSayisi(n)}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {rehber.length > 0 && (
        <div className="mt-14 max-w-[720px] text-[17px] leading-[1.7]">
          {rehber.map((b) => {
            if (b.tur === "h2") {
              return (
                <h2 key={b.id} id={b.id} className="mt-10 text-[28px] first:mt-0">
                  {b.metin}
                </h2>
              );
            }
            if (b.tur === "h3") return <h3 key={b.metin} className="mt-8 text-[20px]">{b.metin}</h3>;
            if (b.tur === "ul" || b.tur === "ol") {
              const Etiket = b.tur === "ol" ? "ol" : "ul";
              return (
                <Etiket key={b.maddeler[0]} className={`mt-4 space-y-2 pl-5 ${b.tur === "ol" ? "list-decimal" : "list-disc"}`}>
                  {b.maddeler.map((m) => (
                    <li key={m}><BaglantiliMetin metin={m} /></li>
                  ))}
                </Etiket>
              );
            }
            if (b.tur === "alinti") {
              return (
                <p key={b.metin} className="mt-4 border-l-[3px] border-dikkat bg-[#FFFBEB] p-4">
                  <BaglantiliMetin metin={b.metin} />
                </p>
              );
            }
            if (b.tur === "tablo") return null;
            return <p key={b.metin} className="mt-4"><BaglantiliMetin metin={b.metin} /></p>;
          })}
        </div>
      )}

      <Bolum id="sss" baslik={metin.sssBaslik}>
        <Sss sorular={sss} />
      </Bolum>

      <section id="diger-iller" aria-labelledby="diger-iller-baslik" className="mt-14">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
          <h2 id="diger-iller-baslik">{metin.digerIllerBaslik}</h2>
          <Link href="/" className="text-[14px] font-medium text-vurgu hover:text-vurgu-koyu">
            {metin.anasayfayaDon}
          </Link>
        </div>
        {digerIller.length > 0 ? (
          <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {digerIller.map((d) => (
                <li key={d.slug} className="min-w-0">
                  <Link
                    href={d.yol}
                    aria-label={metin.itemListAdi(d.ad)}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-cizgi bg-zemin p-5 shadow-kart transition-colors duration-150 hover:border-vurgu"
                  >
                    <span className="text-[18px] font-semibold text-baslik">{metin.breadcrumbIl(d.ad)}</span>
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-vurgu transition-transform duration-150 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-soluk">{metin.digerIllerBos}</p>
        )}
      </section>
    </SidebarDuzeni>
  );
}
