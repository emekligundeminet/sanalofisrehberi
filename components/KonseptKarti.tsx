import Link from "next/link";
import { icerik } from "@/data/icerik";
import { firmaYolu, oneCikanFirma } from "@/lib/veri";
import { Avatar } from "./FirmaTablosu";

const metin = icerik.firma.konseptKart;

export function KonseptKarti() {
  const firma = oneCikanFirma();
  if (!firma) return null;

  return (
    <section className="mt-10 border-t border-cizgi pt-8" aria-labelledby="konsept-kart-baslik">
      <h2 id="konsept-kart-baslik">{metin.baslik}</h2>
      <div className="mt-4 rounded-xl border border-cizgi bg-zemin p-5 shadow-kart">
        <div className="flex items-center gap-3">
          <Avatar ad={firma.ad} oneCikan />
          <div className="min-w-0">
            <p className="font-semibold text-baslik">{firma.ad}</p>
            <p className="text-[14px] leading-snug text-soluk">{firma.semt}</p>
          </div>
        </div>
        <p className="mt-4 font-sans text-[22px] font-semibold leading-snug tracking-[-0.02em] text-baslik tabular-nums">
          {firma.fiyatGosterim}
        </p>
        <p className="mt-2 text-[15px] leading-snug">{metin.cumle}</p>
        <Link href={firmaYolu(firma.slug)} className="mt-4 inline-flex text-[15px] font-medium text-vurgu hover:text-vurgu-koyu">
          {metin.link}
        </Link>
      </div>
    </section>
  );
}
