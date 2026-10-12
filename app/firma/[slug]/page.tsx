import { BadgeCheck, Check, CircleCheck, TriangleAlert, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { KonseptIkon, KonseptLogo } from "@/components/KonseptMarka";
import { KonseptKarti } from "@/components/KonseptKarti";
import type { Firma } from "@/data/firmalar";
import { icerik } from "@/data/icerik";
import { basHarfler, disLinkRel } from "@/lib/metin";
import { firmaProfilSemasi } from "@/lib/schema";
import { sayfaMetadata } from "@/lib/seo";
import { aktifIller, firmaYolu, profilFirmalari, slugdanFirma } from "@/lib/veri";

type Props = { params: Promise<{ slug: string }> };

const metin = icerik.firma;
const ilMetin = icerik.ilSayfasi;

export const dynamicParams = false;

export function generateStaticParams() {
  return profilFirmalari().map((firma) => ({ slug: firma.slug }));
}

async function firmaBul(params: Props["params"]): Promise<{ firma: Firma; ilAdi: string; ilYol: string }> {
  const { slug } = await params;
  const firma = slugdanFirma(slug);
  const il = firma ? aktifIller().find((aday) => aday.slug === firma.ilSlug) : undefined;
  if (!firma || !il) notFound();
  return { firma, ilAdi: il.ad, ilYol: il.yol };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { firma } = await firmaBul(params);
  return sayfaMetadata({
    title: metin.title(firma.ad, firma.semt),
    description: metin.description(firma.ad, firma.semt, firma.fiyatGosterim),
    yol: firmaYolu(firma.slug),
  });
}

function iletisimAdresi(webSitesi: string): string {
  return `${new URL(webSitesi).origin}/iletisim`;
}

function DisLink({
  href,
  rel,
  sinif,
  aria,
  children,
}: {
  href: string;
  rel: string;
  sinif: string;
  aria: string;
  children: string;
}) {
  return (
    <a href={href} target="_blank" rel={rel} aria-label={aria} className={sinif}>
      {children}
    </a>
  );
}

function MaddeListesi({
  baslik,
  ogeler,
  Ikon,
  renk,
}: {
  baslik: string;
  ogeler: string[];
  Ikon: LucideIcon;
  renk: string;
}) {
  if (ogeler.length === 0) return null;
  return (
    <div>
      <h3 className="text-[16px]">{baslik}</h3>
      <ul className="mt-3 space-y-2.5">
        {ogeler.map((oge) => (
          <li key={oge} className="flex gap-2.5 text-[16px] leading-snug">
            <Ikon size={18} aria-hidden="true" className={`mt-px shrink-0 ${renk}`} />
            <span>{oge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OzetSatiri({ etiket, deger, buyuk = false }: { etiket: string; deger: string; buyuk?: boolean }) {
  return (
    <div>
      <p className="text-[12px] leading-snug text-soluk">{etiket}</p>
      <p
        className={
          buyuk
            ? "mt-0.5 font-sans text-[20px] font-bold leading-snug tracking-[-0.02em] text-baslik tabular-nums"
            : "mt-0.5 text-[15px] leading-snug text-metin"
        }
      >
        {deger}
      </p>
    </div>
  );
}

export default async function FirmaSayfasi({ params }: Props) {
  const { firma, ilAdi, ilYol } = await firmaBul(params);
  const oneCikan = firma.oneCikan === true;
  const rel = disLinkRel(oneCikan);
  const aciklama = firma.uzunAciklama?.split(/\n\n+/).filter(Boolean) ?? [];
  const dolu =
    "flex w-full items-center justify-center rounded-[10px] bg-vurgu px-5 py-3 text-[15px] font-semibold text-white hover:bg-vurgu-koyu";
  const cerceve =
    "flex w-full items-center justify-center rounded-[10px] border border-vurgu px-5 py-3 text-[15px] font-semibold text-vurgu hover:bg-rozet hover:text-vurgu-koyu";

  return (
    <div className="kap pt-6 md:pt-8">
      <JsonLd veri={firmaProfilSemasi(firma, ilAdi)} />
      <div className="lg:grid lg:grid-cols-[minmax(0,680px)_320px] lg:items-start lg:gap-x-8 lg:gap-y-8">
        <header>
          <Breadcrumb
            kirintilar={[
              { ad: ilMetin.breadcrumbAnasayfa, yol: "/" },
              { ad: ilMetin.breadcrumbIl(ilAdi), yol: ilYol },
              { ad: firma.ad, yol: firmaYolu(firma.slug) },
            ]}
          />
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h1>{firma.ad}</h1>
            {oneCikan && (
              <span className="inline-flex items-center gap-1 rounded-full bg-olumlu px-2.5 py-1 text-[13px] font-semibold text-white">
                <BadgeCheck size={15} aria-hidden="true" />
                {metin.editorSecimi}
              </span>
            )}
          </div>
          <p className="mt-2 text-[15px] leading-snug text-soluk">{metin.altSatir(firma.semt, firma.guncellemeTarihi)}</p>
        </header>

        <aside className="mt-6 lg:sticky lg:top-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
          <div className="rounded-[16px] border border-cizgi bg-zemin p-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3">
              {oneCikan ? (
                <KonseptIkon boyut={40} />
              ) : (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rozet text-[14px] font-semibold text-vurgu">
                  {basHarfler(firma.ad)}
                </span>
              )}
              <div className="min-w-0">
                {oneCikan ? (
                  <KonseptLogo yukseklik={22} />
                ) : (
                  <p className="text-[16px] font-semibold leading-snug text-baslik">{firma.ad}</p>
                )}
                <p className={`text-[13px] leading-snug text-soluk ${oneCikan ? "mt-1" : ""}`}>{firma.semt}</p>
              </div>
            </div>
            <div className="mt-5 space-y-4 border-t border-cizgi pt-5">
              <OzetSatiri etiket={metin.ozet.fiyat} deger={firma.fiyatGosterim} buyuk />
              <OzetSatiri etiket={metin.ozet.toplanti} deger={firma.toplantiOdasiKisa} />
              <OzetSatiri etiket={metin.ozet.tebligat} deger={firma.tebligatKisa} />
              <OzetSatiri etiket={metin.ozet.adres} deger={firma.semt} />
            </div>
            <div className="mt-5 space-y-3 border-t border-cizgi pt-5">
              {oneCikan ? (
                <>
                  <DisLink href={firma.webSitesi} rel={rel} sinif={dolu} aria={metin.resmiSiteAria(firma.ad)}>
                    {metin.resmiSite}
                  </DisLink>
                  <DisLink href={iletisimAdresi(firma.webSitesi)} rel={rel} sinif={cerceve} aria={metin.teklifAlAria(firma.ad)}>
                    {metin.teklifAl}
                  </DisLink>
                </>
              ) : (
                <DisLink href={firma.webSitesi} rel={rel} sinif={cerceve} aria={metin.webSitesiAria(firma.ad)}>
                  {metin.webSitesi}
                </DisLink>
              )}
              <p className="text-[12px] leading-snug text-soluk">{metin.kaynakNot(firma.guncellemeTarihi)}</p>
            </div>
          </div>
        </aside>

        <div className="mt-8 lg:col-start-1 lg:mt-0">
          <div className="grid gap-6 sm:grid-cols-2">
            <MaddeListesi baslik={metin.oneCikanlar} ogeler={firma.artilar} Ikon={CircleCheck} renk="text-olumlu" />
            <MaddeListesi baslik={metin.dikkat} ogeler={firma.dikkat} Ikon={TriangleAlert} renk="text-dikkat" />
          </div>

          <section className="mt-10">
            <h2>{metin.hizmetler}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {firma.hizmetler.map((hizmet) => (
                <li key={hizmet} className="flex gap-2.5 text-[16px] leading-snug">
                  <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-olumlu" />
                  <span>{hizmet}</span>
                </li>
              ))}
            </ul>
          </section>

          {aciklama.length > 0 && (
            <section className="mt-10">
              <h2>{metin.hakkinda(firma.ad)}</h2>
              <div className="mt-4 space-y-4">
                {aciklama.map((paragraf) => (
                  <p key={paragraf}>{paragraf}</p>
                ))}
              </div>
            </section>
          )}

          {oneCikan ? null : <KonseptKarti />}
        </div>
      </div>
    </div>
  );
}
