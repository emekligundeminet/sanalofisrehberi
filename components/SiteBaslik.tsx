"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "@/app/sanal-ofis-rehberi-logo.png";
import { icerik, site } from "@/data/icerik";

const { arayuz } = icerik;

function sayfaAktif(href: string, yol: string) {
  return (href.split("#")[0] || "/") === yol;
}

export function SiteBaslik() {
  const yol = usePathname();
  const [acik, setAcik] = useState(false);
  const kapatRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setAcik(false);
  }, [yol]);

  useEffect(() => {
    if (!acik) return;
    kapatRef.current?.focus();
    const kapat = (olay: KeyboardEvent) => {
      if (olay.key === "Escape") setAcik(false);
    };
    document.addEventListener("keydown", kapat);
    const onceki = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", kapat);
      document.body.style.overflow = onceki;
    };
  }, [acik]);

  return (
    <header className="border-b border-cizgi bg-zemin">
      <div className="kap flex h-16 items-center justify-between min-[480px]:h-20">
        <Link href="/" className="flex min-w-0 items-center">
          <img
            src={logo.src}
            alt={site.ad}
            width={logo.width}
            height={logo.height}
            className="h-auto max-h-9 w-auto max-w-[calc(100vw-5.5rem)] min-[480px]:max-h-12"
          />
        </Link>

        <nav aria-label={arayuz.anaMenu} className="hidden md:block">
          <ul className="flex items-center text-[15px] font-medium">
            {arayuz.menu.map((m, i) => {
              const aktif = sayfaAktif(m.href, yol);
              return (
                <li key={m.href} className="flex items-center">
                  {i > 0 && <span aria-hidden="true" className="mx-4 h-4 w-px bg-cizgi" />}
                  <Link href={m.href} className="group flex flex-col items-center" aria-current={aktif ? "page" : undefined}>
                    <span className={aktif ? "text-vurgu" : "text-metin group-hover:text-vurgu"}>{m.etiket}</span>
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 h-0.5 w-full rounded-full ${aktif ? "bg-vurgu" : "bg-transparent group-hover:bg-vurgu/30"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={arayuz.menuAc}
          aria-expanded={acik}
          onClick={() => setAcik(true)}
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-baslik hover:bg-yuzey md:hidden"
        >
          <Menu size={22} aria-hidden="true" />
        </button>

        <div className={`fixed inset-0 z-40 md:hidden ${acik ? "" : "pointer-events-none"}`} inert={!acik}>
          <button
            type="button"
            aria-label={arayuz.menuKapat}
            onClick={() => setAcik(false)}
            className={`absolute inset-0 bg-baslik/40 transition-opacity duration-200 motion-reduce:transition-none ${acik ? "opacity-100" : "opacity-0"}`}
          />
          <nav
            aria-label={arayuz.anaMenu}
            className={`absolute inset-y-0 right-0 flex w-full flex-col border-l border-cizgi bg-zemin transition-transform duration-200 motion-reduce:transition-none min-[360px]:w-1/2 ${acik ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex h-16 shrink-0 items-center justify-end pr-2 min-[480px]:h-20">
              <button
                ref={kapatRef}
                type="button"
                aria-label={arayuz.menuKapat}
                onClick={() => setAcik(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-baslik hover:bg-yuzey"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <ul className="flex flex-col px-6">
              {arayuz.menu.map((m) => {
                const aktif = sayfaAktif(m.href, yol);
                return (
                  <li key={m.href} className="border-b border-cizgi">
                    <Link
                      href={m.href}
                      aria-current={aktif ? "page" : undefined}
                      onClick={() => setAcik(false)}
                      className="group flex flex-col py-4 text-[16px] font-medium"
                    >
                      <span className={aktif ? "text-vurgu" : "text-metin group-hover:text-vurgu"}>{m.etiket}</span>
                      <span aria-hidden="true" className={`mt-1 h-0.5 w-8 rounded-full ${aktif ? "bg-vurgu" : "bg-transparent"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
