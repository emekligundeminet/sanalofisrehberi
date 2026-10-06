"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/app/sanal-ofis-rehberi-logo.png";
import { icerik, site } from "@/data/icerik";

const { arayuz } = icerik;

function sayfaAktif(href: string, yol: string) {
  return (href.split("#")[0] || "/") === yol;
}

export function SiteBaslik() {
  const yol = usePathname();

  return (
    <header className="border-b border-cizgi bg-zemin">
      <div className="kap flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src={logo.src} alt={site.ad} width={logo.width} height={logo.height} className="h-16 w-auto" />
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

        <details className="group relative md:hidden">
          <summary
            aria-label={arayuz.menuAc}
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-baslik hover:bg-yuzey"
          >
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav
            aria-label={arayuz.anaMenu}
            className="absolute right-0 top-12 z-20 w-56 rounded-xl border border-cizgi bg-zemin p-2 shadow-kart"
          >
            <ul>
              {arayuz.menu.map((m) => {
                const aktif = sayfaAktif(m.href, yol);
                return (
                  <li key={m.href} className="border-b border-cizgi last:border-b-0">
                    <Link
                      href={m.href}
                      aria-current={aktif ? "page" : undefined}
                      className="group flex flex-col px-3 py-2.5 text-[16px] font-medium"
                    >
                      <span className={aktif ? "text-vurgu" : "text-metin group-hover:text-vurgu"}>{m.etiket}</span>
                      <span aria-hidden="true" className={`mt-1 h-0.5 w-8 rounded-full ${aktif ? "bg-vurgu" : "bg-transparent"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
