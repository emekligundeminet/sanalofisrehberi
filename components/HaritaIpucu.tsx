"use client";

import { useEffect, useRef } from "react";

export function HaritaIpucu() {
  const kutuRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLSpanElement>(null);
  const durumRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const kutu = kutuRef.current;
    const kap = kutu?.parentElement;
    if (!kutu || !kap || !adRef.current || !durumRef.current) return;
    const adEl = adRef.current;
    const durumEl = durumRef.current;

    const gizle = () => {
      kutu.hidden = true;
    };

    const tasi = (e: PointerEvent) => {
      const hedef = (e.target as Element).closest<SVGElement>("[data-ipucu]");
      if (!hedef) return gizle();
      const sinir = kap.getBoundingClientRect();
      adEl.textContent = hedef.dataset.ad ?? "";
      durumEl.textContent = hedef.dataset.ipucu ?? "";
      kutu.style.left = `${e.clientX - sinir.left}px`;
      kutu.style.top = `${e.clientY - sinir.top}px`;
      kutu.hidden = false;
    };

    kap.addEventListener("pointermove", tasi);
    kap.addEventListener("pointerleave", gizle);
    return () => {
      kap.removeEventListener("pointermove", tasi);
      kap.removeEventListener("pointerleave", gizle);
    };
  }, []);

  return (
    <div
      ref={kutuRef}
      hidden
      aria-hidden="true"
      className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+12px)] whitespace-nowrap rounded-lg bg-baslik px-2.5 py-1 text-[13px] leading-snug text-white"
    >
      <span ref={adRef} className="font-medium" />
      <span className="px-1.5 opacity-50">·</span>
      <span ref={durumRef} />
    </div>
  );
}
