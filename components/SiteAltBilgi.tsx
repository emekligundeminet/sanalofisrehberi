import Link from "next/link";
import { icerik, site } from "@/data/icerik";
import { aktifIller } from "@/lib/veri";

const { arayuz } = icerik;
const { altBilgi } = arayuz;

function Sutun({ baslik, children }: { baslik: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[14px] font-semibold text-baslik">{baslik}</p>
      <ul className="mt-3 space-y-2 text-[15px]">{children}</ul>
    </div>
  );
}

const linkSinif = "text-metin hover:text-vurgu hover:underline";

export function SiteAltBilgi() {
  return (
    <footer className="mt-24 border-t border-cizgi bg-yuzey">
      <nav aria-label={arayuz.altMenu} className="kap grid gap-10 py-12 sm:grid-cols-3">
        <Sutun baslik={altBilgi.rehberBaslik}>
          {altBilgi.rehberLinkleri.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkSinif}>{l.etiket}</Link>
            </li>
          ))}
        </Sutun>
        <Sutun baslik={altBilgi.illerBaslik}>
          {aktifIller().map((il) => (
            <li key={il.slug}>
              <Link href={il.yol} className={linkSinif}>{icerik.ilSayfasi.breadcrumbIl(il.ad)}</Link>
            </li>
          ))}
        </Sutun>
        <Sutun baslik={altBilgi.hakkindaBaslik}>
          {altBilgi.hakkindaLinkleri.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkSinif}>{l.etiket}</Link>
            </li>
          ))}
          <li>
            <a href={arayuz.haritaLisansUrl} className={linkSinif}>{arayuz.haritaLisans}</a>
          </li>
        </Sutun>
      </nav>
      <div className="border-t border-cizgi">
        <div className="kap flex flex-col gap-1 py-6 kucuk sm:flex-row sm:justify-between">
          <p>{arayuz.telif(site.yil, site.sonGuncellemeMetin)}</p>
          <p>{altBilgi.not}</p>
        </div>
      </div>
    </footer>
  );
}
