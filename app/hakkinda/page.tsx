import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { icerik } from "@/data/icerik";
import { hakkindaSemasi } from "@/lib/schema";
import { sayfaMetadata } from "@/lib/seo";

const metin = icerik.hakkinda;
const YOL = "/hakkinda";

export const metadata: Metadata = sayfaMetadata({ ...metin.meta, yol: YOL });

export default function HakkindaSayfasi() {
  return (
    <div className="kap pt-6 md:pt-8">
      <JsonLd veri={hakkindaSemasi()} />
      <div className="max-w-[760px]">
        <Breadcrumb
          kirintilar={[
            { ad: icerik.ilSayfasi.breadcrumbAnasayfa, yol: "/" },
            { ad: metin.h1, yol: YOL },
          ]}
        />
        <h1 className="mt-4">{metin.h1}</h1>
        <div className="mt-6 space-y-4">
          {metin.paragraflar.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {metin.bolumler.map((b) => (
          <section key={b.baslik} className="mt-10">
            <h2>{b.baslik}</h2>
            <div className="mt-3 space-y-4">
              {b.paragraflar.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
