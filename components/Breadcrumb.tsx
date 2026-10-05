import Link from "next/link";
import { icerik } from "@/data/icerik";

export type Kirinti = { ad: string; yol: string };

export function Breadcrumb({ kirintilar }: { kirintilar: Kirinti[] }) {
  return (
    <>
      <nav aria-label={icerik.ilSayfasi.breadcrumbEtiket} className="kucuk">
        <ol className="flex flex-wrap items-center gap-x-2">
          {kirintilar.map((k, i) => {
            const son = i === kirintilar.length - 1;
            return (
              <li key={k.yol} className="flex items-center gap-x-2">
                {son ? (
                  <span aria-current="page" className="text-metin">{k.ad}</span>
                ) : (
                  <>
                    <Link href={k.yol} className="hover:text-vurgu hover:underline">{k.ad}</Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
