import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { icerik } from "@/data/icerik";
import { iletisimSemasi } from "@/lib/schema";
import { sayfaMetadata } from "@/lib/seo";

const metin = icerik.iletisim;
const YOL = "/iletisim";

export const metadata: Metadata = sayfaMetadata({ ...metin.meta, yol: YOL });

export default function IletisimSayfasi() {
  return (
    <div className="kap pt-6 md:pt-8">
      <JsonLd veri={iletisimSemasi()} />
      <div className="max-w-[760px]">
        <Breadcrumb
          kirintilar={[
            { ad: icerik.ilSayfasi.breadcrumbAnasayfa, yol: "/" },
            { ad: metin.h1, yol: YOL },
          ]}
        />
        <h1 className="mt-4">{metin.h1}</h1>
        <p className="mt-6">{metin.aciklama}</p>
        <p className="mt-4">
          <a href={`mailto:${metin.eposta}`} className="metin-link font-medium">
            {metin.eposta}
          </a>
        </p>
      </div>
    </div>
  );
}
