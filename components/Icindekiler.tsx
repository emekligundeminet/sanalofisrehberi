"use client";

import { useEffect, useState } from "react";

export type IcindekilerOgesi = { id: string; ad: string; alt?: boolean };

export function Icindekiler({ baslik, ogeler }: { baslik: string; ogeler: IcindekilerOgesi[] }) {
  const [aktif, setAktif] = useState(ogeler[0]?.id);

  useEffect(() => {
    const hedefler = ogeler
      .map((o) => document.getElementById(o.id))
      .filter((el): el is HTMLElement => el !== null);

    const gozlemci = new IntersectionObserver(
      (girdiler) => {
        const gorunen = girdiler
          .filter((g) => g.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (gorunen) setAktif(gorunen.target.id);
      },
      { rootMargin: "0px 0px -70% 0px" },
    );

    hedefler.forEach((el) => gozlemci.observe(el));
    return () => gozlemci.disconnect();
  }, [ogeler]);

  return (
    <nav aria-labelledby="icindekiler-baslik">
      <p id="icindekiler-baslik" className="mb-3 text-[13px] font-semibold text-soluk">
        {baslik}
      </p>
      <ul className="space-y-0.5 border-l border-cizgi text-[14px] leading-snug">
        {ogeler.map((o) => {
          const secili = o.id === aktif;
          return (
            <li key={o.id}>
              <a
                href={`#${o.id}`}
                aria-current={secili ? "location" : undefined}
                className={`-ml-px block border-l-2 py-1.5 ${o.alt ? "pl-6" : "pl-3"} ${
                  secili
                    ? "border-vurgu font-medium text-vurgu"
                    : "border-transparent text-soluk hover:text-baslik"
                }`}
              >
                {o.ad}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
