import type { Firma } from "@/data/firmalar";
import { icerik } from "@/data/icerik";
import { basHarfler, disLinkRel } from "@/lib/metin";
import { OneCikanRozet } from "./Rozet";

const metin = icerik.ilSayfasi;
const sutun = metin.tabloSutunlar;

export function Avatar({ ad }: { ad: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rozet text-[11px] font-semibold text-rozet-metin"
    >
      {basHarfler(ad)}
    </span>
  );
}

function semtKisa(semt: string): string {
  return semt.replace(/\s*\([^)]*\)/g, "").replace(/\s{2,}/g, " ").trim();
}

function tabloMetni(deger: string): string {
  if (deger === "Belirtilmemiş" || deger === "Yayımlanmamış") return "—";
  return deger;
}

export function FirmaTablosu({ firmalar }: { firmalar: Firma[] }) {
  const th = "sticky top-0 z-10 border-b border-cizgi bg-yuzey px-3 py-3 text-left text-[13px] font-semibold text-soluk first:pl-6 last:pr-8";
  const td = "border-b border-cizgi px-3 py-4 align-top first:pl-6 last:pr-8";
  const ilkSutun = "sticky left-0 bg-zemin";

  const hucre = "block whitespace-normal break-words";

  return (
    <div>
    <div className="overflow-x-auto rounded-xl border border-cizgi">
      <table className="w-full min-w-[720px] table-fixed border-separate border-spacing-0 text-[14px] leading-snug">
        <caption className="sr-only">{metin.tabloBaslik}</caption>
        <colgroup>
          <col className="w-[30%]" />
          <col className="w-[14%]" />
          <col className="w-[12%]" />
          <col className="w-[12%]" />
          <col className="w-[12%]" />
          <col className="w-[20%]" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className={`${th} left-0 z-20 rounded-tl-xl`}>{sutun.firma}</th>
            <th scope="col" className={th}>{sutun.fiyat}</th>
            <th scope="col" className={th}>{sutun.semt}</th>
            <th scope="col" className={th}>{sutun.toplanti}</th>
            <th scope="col" className={th}>{sutun.tebligat}</th>
            <th scope="col" className={`${th} rounded-tr-xl`}>
              <span className="sr-only">{sutun.buton}</span>
            </th>
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>*]:border-b-0">
          {firmalar.map((f) => {
            const zemin = f.oneCikan ? "bg-[#F0FDF4]" : "";
            return (
            <tr key={f.slug}>
              <th scope="row" className={`${td} sticky left-0 z-[5] text-left text-[15px] font-semibold ${f.oneCikan ? zemin : ilkSutun}`}>
                <a href={`#${f.slug}`} className="flex items-center gap-2 whitespace-nowrap text-baslik hover:text-vurgu">
                  <Avatar ad={f.ad} />
                  <span>{f.ad}</span>
                  {f.oneCikan && <OneCikanRozet kucuk />}
                </a>
              </th>
              <td className={`${td} ${zemin}`}>
                <span className={`${hucre} font-sans font-semibold leading-snug tracking-[-0.02em] tabular-nums text-baslik`}>{f.fiyatGosterim}</span>
              </td>
              <td className={`${td} text-metin ${zemin}`}>
                <span className={hucre}>{semtKisa(f.semt)}</span>
              </td>
              <td className={`${td} text-soluk ${zemin}`}>
                <span className={hucre}>{tabloMetni(f.toplantiOdasiKisa)}</span>
              </td>
              <td className={`${td} text-soluk ${zemin}`}>
                <span className={hucre}>{tabloMetni(f.tebligatKisa)}</span>
              </td>
              <td className={`${td} text-right ${zemin}`}>
                <a
                  href={f.webSitesi}
                  target="_blank"
                  rel={disLinkRel(f.dofollow)}
                  aria-label={metin.tabloButonAria(f.ad)}
                  className="inline-flex whitespace-nowrap rounded-lg border border-vurgu px-3 py-1.5 text-[14px] font-medium text-vurgu hover:border-vurgu-koyu hover:bg-rozet hover:text-vurgu-koyu"
                >
                  {metin.tabloButon}
                </a>
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <p className="mt-3 text-[13px] leading-snug text-soluk">{metin.tabloEksikNot}</p>
    </div>
  );
}
