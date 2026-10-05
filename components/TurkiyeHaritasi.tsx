import { haritaViewBox, ilPathleri } from "@/data/harita";
import { icerik } from "@/data/icerik";
import { iller } from "@/data/iller";
import type { AktifIl } from "@/lib/veri";
import { HaritaIpucu } from "./HaritaIpucu";

export function TurkiyeHaritasi({ aktif }: { aktif: AktifIl[] }) {
  const metin = icerik.anasayfa;
  const aktifPlakalar = new Set(aktif.map((il) => il.plaka));
  const pasifIller = iller.filter((il) => !aktifPlakalar.has(il.plaka));

  return (
    <div className="relative">
      <svg
        viewBox={haritaViewBox}
        role="group"
        aria-label={metin.haritaBaslik}
        className="block h-auto w-full"
      >
        <g aria-hidden="true">
          {pasifIller.map((il) => (
            <path
              key={il.plaka}
              d={ilPathleri[il.plaka]}
              className="harita-il"
              data-durum="pasif"
              data-ad={il.ad}
              data-ipucu={metin.haritaYakinda}
            />
          ))}
        </g>
        {aktif.map((il) => (
          <a key={il.plaka} href={il.yol} aria-label={metin.haritaLinkEtiketi(il.ad, il.firmalar.length)}>
            <path
              d={ilPathleri[il.plaka]}
              className="harita-il"
              data-durum="aktif"
              data-ad={il.ad}
              data-ipucu={metin.haritaAktif(il.firmalar.length)}
            />
          </a>
        ))}
      </svg>
      <HaritaIpucu />
    </div>
  );
}
