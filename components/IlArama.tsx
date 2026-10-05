"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import { aramaAnahtari } from "@/lib/metin";

type AktifSecenek = { ad: string; yol: string; firmaSayisi: string; anahtar: string };
type PasifSecenek = { ad: string; anahtar: string };

const PASIF_LIMIT = 5;

export function IlArama({
  aktif,
  pasif,
  metin,
}: {
  aktif: AktifSecenek[];
  pasif: PasifSecenek[];
  metin: { etiket: string; placeholder: string; sonucYok: string; yakinda: string };
}) {
  const [sorgu, setSorgu] = useState("");
  const inputId = useId();
  const listeId = useId();
  const anahtar = aramaAnahtari(sorgu);

  const aktifSonuc = anahtar ? aktif.filter((il) => il.anahtar.includes(anahtar)) : [];
  const pasifSonuc = anahtar ? pasif.filter((il) => il.anahtar.includes(anahtar)).slice(0, PASIF_LIMIT) : [];

  return (
    <div className="max-w-md">
      <label htmlFor={inputId} className="text-[14px] font-medium text-baslik">
        {metin.etiket}
      </label>
      <div className="relative mt-2">
        <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-soluk" />
        <input
          id={inputId}
          type="search"
          autoComplete="off"
          value={sorgu}
          onChange={(e) => setSorgu(e.target.value)}
          placeholder={metin.placeholder}
          aria-controls={anahtar ? listeId : undefined}
          className="h-12 w-full rounded-lg border border-cizgi bg-zemin pl-10 pr-4 text-[16px] text-baslik placeholder:text-soluk hover:border-soluk focus:border-vurgu focus:outline-none focus:ring-2 focus:ring-vurgu/20"
        />
      </div>

      {anahtar && (
      <ul id={listeId} aria-live="polite" className="mt-2 divide-y divide-cizgi rounded-lg border border-cizgi">
        {aktifSonuc.map((il) => (
          <li key={il.yol}>
            <Link href={il.yol} className="flex items-center justify-between px-4 py-3 hover:bg-yuzey">
              <span className="font-medium text-baslik">{il.ad}</span>
              <span className="text-[14px] text-vurgu">{il.firmaSayisi} →</span>
            </Link>
          </li>
        ))}
        {pasifSonuc.map((il) => (
          <li key={il.ad} className="flex items-center justify-between px-4 py-3 text-soluk">
            <span>{il.ad}</span>
            <span className="text-[13px]">{metin.yakinda}</span>
          </li>
        ))}
        {aktifSonuc.length === 0 && pasifSonuc.length === 0 && (
          <li className="px-4 py-3 text-[15px] text-soluk">{metin.sonucYok}</li>
        )}
      </ul>
      )}
    </div>
  );
}
