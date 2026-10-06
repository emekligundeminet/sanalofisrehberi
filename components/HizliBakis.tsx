import type { Firma } from "@/data/firmalar";
import { icerik } from "@/data/icerik";
import { Fiyat } from "./Fiyat";
import { OneCikanRozet, Rozet } from "./Rozet";

const metin = icerik.ilSayfasi;

export function HizliBakis({ il, firmalar }: { il: string; firmalar: Firma[] }) {
  return (
    <section id="hizli-bakis" aria-labelledby="hizli-bakis-baslik" className="rounded-xl bg-yuzey p-6">
      <h2 id="hizli-bakis-baslik" className="text-[13px] font-semibold leading-snug text-soluk">
        {metin.hizliBakisBaslik(il)}
      </h2>
      <ol className="mt-4 grid gap-4 md:grid-cols-3">
        {firmalar.map((f) => (
          <li
            key={f.slug}
            className={`relative flex flex-col rounded-xl bg-zemin p-4 shadow-kart ${f.oneCikan ? "border-2 border-olumlu" : "border border-cizgi"}`}
          >
            {f.oneCikan && <OneCikanRozet className="absolute right-3 top-0 -translate-y-1/2" />}
            <div className="flex items-center gap-2">
              <span
                aria-label={metin.siraRozeti(f.sira)}
                className="rakam flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-vurgu text-[13px] font-semibold text-white"
              >
                {f.sira}
              </span>
              <span className="truncate font-semibold text-baslik">{f.ad}</span>
            </div>
            <Rozet className="mt-3 self-start">{f.rozet}</Rozet>
            <div className="mt-4">
              <Fiyat fiyat={f.fiyatGosterim} boyut="text-[22px]" />
            </div>
            <a href={`#${f.slug}`} className="metin-link mt-3 text-[15px] font-medium">
              {metin.detaylar}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
