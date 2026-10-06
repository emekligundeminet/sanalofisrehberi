import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Square } from "lucide-react";
import { BaglantiliMetin } from "@/components/BaglantiliMetin";
import { Bolum } from "@/components/Bolum";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SidebarDuzeni } from "@/components/SidebarDuzeni";
import { Sss } from "@/components/Sss";
import { icerik } from "@/data/icerik";
import { metinBloklari, type MetinBlok } from "@/lib/metin";
import { rehberSemasi } from "@/lib/schema";
import { sayfaMetadata } from "@/lib/seo";
import { aktifIller } from "@/lib/veri";

const metin = icerik.rehber;
const ilMetin = icerik.ilSayfasi;
const YOL = "/sanal-ofis-secim-rehberi";

const th = "border-b border-cizgi bg-yuzey px-3 py-3 text-left text-[13px] font-semibold text-soluk first:pl-6 last:pr-6";
const td = "border-b border-cizgi px-3 py-4 align-top text-metin first:pl-6 last:pr-6";

export const metadata: Metadata = sayfaMetadata({ ...metin.meta, yol: YOL, tur: "article" });

function MetinTablosu({ basliklar, satirlar }: { basliklar: string[]; satirlar: string[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-cizgi">
      <table className="w-full min-w-[520px] border-separate border-spacing-0 text-[14px] leading-snug">
        <thead>
          <tr>
            {basliklar.map((baslik) => (
              <th key={baslik} scope="col" className={th}>
                {baslik}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>*]:border-b-0">
          {satirlar.map((satir) => (
            <tr key={satir.join(" | ")}>
              {satir.map((hucre, i) =>
                i === 0 ? (
                  <th key={hucre} scope="row" className={`${td} text-left font-semibold text-baslik`}>
                    {hucre}
                  </th>
                ) : (
                  <td key={`${satir[0]}-${i}`} className={td}>
                    {hucre}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Govde({ blok }: { blok: MetinBlok }) {
  if (blok.tur === "h2") {
    return (
      <h2 key={blok.id} id={blok.id} className="mt-10 text-[28px]">
        {blok.metin}
      </h2>
    );
  }
  if (blok.tur === "h3") {
    return (
      <h3 key={blok.metin} className="mt-8 text-[20px]">
        {blok.metin}
      </h3>
    );
  }
  if (blok.tur === "ul" || blok.tur === "ol") {
    const Etiket = blok.tur === "ol" ? "ol" : "ul";
    return (
      <Etiket key={blok.maddeler[0]} className={`mt-4 space-y-2 pl-5 ${blok.tur === "ol" ? "list-decimal" : "list-disc"}`}>
        {blok.maddeler.map((madde) => (
          <li key={madde}>
            <BaglantiliMetin metin={madde} />
          </li>
        ))}
      </Etiket>
    );
  }
  if (blok.tur === "alinti") {
    return (
      <p key={blok.metin} className="mt-4 border-l-[3px] border-dikkat bg-[#FFFBEB] p-4">
        <BaglantiliMetin metin={blok.metin} />
      </p>
    );
  }
  if (blok.tur === "tablo") {
    return <MetinTablosu key={blok.basliklar.join("|")} basliklar={blok.basliklar} satirlar={blok.satirlar} />;
  }
  return (
    <p key={blok.metin} className="mt-4">
      <BaglantiliMetin metin={blok.metin} />
    </p>
  );
}

export default function RehberSayfasi() {
  const bloklar = metinBloklari(metin.govde);
  const iller = aktifIller();
  const icindekiler = [
    { id: "hizli-kontrol-listesi", ad: metin.kontrolBaslik },
    ...bloklar.filter((b): b is Extract<MetinBlok, { tur: "h2" }> => b.tur === "h2").map((b) => ({ id: b.id, ad: b.metin })),
    { id: "sss", ad: metin.sssBaslik },
    { id: "il-sayfalari", ad: metin.ilSayfalariBaslik },
  ];

  return (
    <SidebarDuzeni baslik={ilMetin.icindekiler} ogeler={icindekiler}>
      <JsonLd veri={rehberSemasi()} />
      <article className="max-w-[720px] text-[17px] leading-[1.7]">
        <Breadcrumb
          kirintilar={[
            { ad: ilMetin.breadcrumbAnasayfa, yol: "/" },
            { ad: metin.breadcrumb, yol: YOL },
          ]}
        />
        <h1 className="mt-4">{metin.h1}</h1>
        <p className="mt-3 text-[14px] leading-normal text-soluk">
          {ilMetin.sonGuncelleme(metin.guncellemeTarihi)} · {metin.okuma}
        </p>
        <div className="mt-6 space-y-4">
          {metin.giris.map((p) => (
            <p key={p}>
              <BaglantiliMetin metin={p} />
            </p>
          ))}
        </div>

        <div id="hizli-kontrol-listesi" className="mt-8 rounded-xl bg-yuzey p-6">
          <p className="text-[18px] font-semibold leading-snug text-baslik">{metin.kontrolBaslik}</p>
          <ul className="mt-4 space-y-3">
            {metin.kontrol.map((madde) => (
              <li key={madde} className="flex items-start gap-3 text-[16px] leading-snug">
                <Square size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-soluk" />
                <span>{madde}</span>
              </li>
            ))}
          </ul>
        </div>

        {bloklar.map((blok) => (
          <Govde key={blok.tur === "tablo" ? blok.basliklar.join("|") : blok.tur === "ul" || blok.tur === "ol" ? blok.maddeler[0] : blok.tur === "h2" ? blok.id : blok.metin} blok={blok} />
        ))}

        <Bolum id="sss" baslik={metin.sssBaslik}>
          <Sss sorular={metin.sss} />
        </Bolum>
      </article>

      <section id="il-sayfalari" aria-labelledby="il-sayfalari-baslik" className="mt-14">
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
          <h2 id="il-sayfalari-baslik">{metin.ilSayfalariBaslik}</h2>
          <Link href="/" className="text-[14px] font-medium text-vurgu hover:text-vurgu-koyu">
            {ilMetin.anasayfayaDon}
          </Link>
        </div>
        <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {iller.map((il) => (
            <li key={il.slug} className="min-w-0">
              <Link
                href={il.yol}
                aria-label={ilMetin.itemListAdi(il.ad)}
                className="group flex items-center justify-between gap-3 rounded-xl border border-cizgi bg-zemin p-5 shadow-kart transition-colors duration-150 hover:border-vurgu"
              >
                <span className="text-[18px] font-semibold text-baslik">{ilMetin.breadcrumbIl(il.ad)}</span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-vurgu transition-transform duration-150 group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SidebarDuzeni>
  );
}
