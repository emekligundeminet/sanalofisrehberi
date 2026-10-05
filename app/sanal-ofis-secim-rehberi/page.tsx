import type { Metadata } from "next";
import { BaglantiliMetin } from "@/components/BaglantiliMetin";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SidebarDuzeni } from "@/components/SidebarDuzeni";
import { icerik } from "@/data/icerik";
import { idOlustur } from "@/lib/metin";
import { rehberSemasi } from "@/lib/schema";
import { sayfaMetadata } from "@/lib/seo";

const metin = icerik.rehber;
const YOL = "/sanal-ofis-secim-rehberi";

export const metadata: Metadata = sayfaMetadata({ ...metin.meta, yol: YOL, tur: "article" });

export default function RehberSayfasi() {
  const bolumler = metin.bolumler.map((b) => ({ ...b, id: idOlustur(b.baslik) }));

  return (
    <SidebarDuzeni
      baslik={icerik.ilSayfasi.icindekiler}
      ogeler={bolumler.map((b) => ({ id: b.id, ad: b.baslik }))}
    >
      <JsonLd veri={rehberSemasi()} />
      <article>
        <Breadcrumb
          kirintilar={[
            { ad: icerik.ilSayfasi.breadcrumbAnasayfa, yol: "/" },
            { ad: metin.breadcrumb, yol: YOL },
          ]}
        />
        <h1 className="mt-4">{metin.h1}</h1>
        <p className="mt-3 kucuk">
          <span className="rakam rounded-full bg-yuzey px-2.5 py-0.5 text-[13px] text-metin">
            {icerik.ilSayfasi.sonGuncelleme(metin.guncellemeTarihi)}
          </span>
        </p>
        {bolumler.map((b) => (
          <section key={b.id} id={b.id} aria-labelledby={`${b.id}-baslik`} className="mt-10">
            <h2 id={`${b.id}-baslik`}>{b.baslik}</h2>
            <div className="mt-3 space-y-4">
              {b.paragraflar.map((p) => (
                <p key={p}><BaglantiliMetin metin={p} /></p>
              ))}
            </div>
          </section>
        ))}
      </article>
    </SidebarDuzeni>
  );
}
