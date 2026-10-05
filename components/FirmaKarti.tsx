import { CircleCheck, Mail, Map as SemtIkon, MapPin, TriangleAlert, Users, type LucideIcon } from "lucide-react";
import type { Firma } from "@/data/firmalar";
import { icerik } from "@/data/icerik";
import { disLinkRel } from "@/lib/metin";
import { Fiyat } from "./Fiyat";
import { OneCikanRozet, Rozet } from "./Rozet";

const kart = icerik.ilSayfasi.kart;

function Liste({ baslik, ogeler, Ikon, renk }: { baslik: string; ogeler: string[]; Ikon: LucideIcon; renk: string }) {
  return (
    <div>
      <h3 className="text-[16px]">{baslik}</h3>
      <ul className="mt-3 space-y-2.5">
        {ogeler.map((o) => (
          <li key={o} className="flex gap-2.5 text-[16px] leading-snug">
            <Ikon size={18} aria-hidden="true" className={`mt-px shrink-0 ${renk}`} />
            <span>{o}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FirmaKarti({ firma }: { firma: Firma }) {
  const rel = disLinkRel(firma.dofollow);
  const detaylar: { Ikon: LucideIcon; etiket: string; deger: string }[] = [
    { Ikon: MapPin, etiket: kart.detaylar.adres, deger: firma.adres },
    { Ikon: SemtIkon, etiket: kart.detaylar.semt, deger: firma.semt },
    { Ikon: Users, etiket: kart.detaylar.toplanti, deger: firma.toplantiOdasi },
    { Ikon: Mail, etiket: kart.detaylar.tebligat, deger: firma.tebligatBildirimi },
  ];

  return (
    <article
      id={firma.slug}
      className={`relative rounded-xl bg-zemin p-5 shadow-kart md:p-7 ${firma.oneCikan ? "border-2 border-olumlu" : "border border-cizgi"}`}
    >
      {firma.oneCikan && <OneCikanRozet className="absolute right-4 top-0 -translate-y-1/2" />}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2>{firma.ad}</h2>
            <Rozet>{firma.rozet}</Rozet>
          </div>
        </div>
        <div className="shrink-0 sm:max-w-[240px] sm:text-right">
          <Fiyat fiyat={firma.fiyatGosterim} not={firma.fiyatNotu} boyut="text-[24px]" />
          <p className="mt-1.5 text-[13px] text-soluk">
            {kart.kaynakOnek}{" "}
            <a href={firma.kaynakUrl} target="_blank" rel={rel} className="underline hover:text-vurgu">
              {kart.kaynakLink}
            </a>
            {kart.kaynakTarih(firma.guncellemeTarihi)}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 border-t border-cizgi pt-6 sm:grid-cols-2">
        <Liste baslik={kart.oneCikanlar} ogeler={firma.artilar} Ikon={CircleCheck} renk="text-olumlu" />
        <Liste baslik={kart.dikkat} ogeler={firma.dikkat} Ikon={TriangleAlert} renk="text-dikkat" />
      </div>

      <dl className="mt-6 grid gap-x-6 gap-y-4 border-t border-cizgi pt-6 sm:grid-cols-2">
        {detaylar.map(({ Ikon, etiket, deger }) => (
          <div key={etiket} className="flex gap-3">
            <Ikon size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-soluk" />
            <div>
              <dt className="text-[13px] font-medium text-soluk">{etiket}</dt>
              <dd className="text-[15px] leading-snug text-metin">{deger}</dd>
            </div>
          </div>
        ))}
      </dl>

      <div className="mt-6 border-t border-cizgi pt-6">
        <h3 className="text-[16px]">{kart.degerlendirme}</h3>
        <p className="mt-2">{firma.degerlendirme}</p>
      </div>

      <a
        href={firma.webSitesi}
        target="_blank"
        rel={rel}
        aria-label={kart.ziyaretAria(firma.ad)}
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-vurgu px-5 py-3 text-[16px] font-semibold text-white hover:bg-vurgu-koyu sm:w-auto"
      >
        {kart.ziyaret}
      </a>
    </article>
  );
}
