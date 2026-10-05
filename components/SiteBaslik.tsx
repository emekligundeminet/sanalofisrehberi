import { Menu } from "lucide-react";
import Link from "next/link";
import logo from "@/app/sanal-ofis-rehberi-logo.png";
import { icerik, site } from "@/data/icerik";

const { arayuz } = icerik;

export function SiteBaslik() {
  return (
    <header className="border-b border-cizgi bg-zemin">
      <div className="kap flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src={logo.src} alt={site.ad} width={logo.width} height={logo.height} className="h-16 w-auto" />
        </Link>

        <nav aria-label={arayuz.anaMenu} className="hidden md:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium">
            {arayuz.menu.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className="text-metin hover:text-vurgu">
                  {m.etiket}
                </Link>
              </li>
            ))}
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
              {arayuz.menu.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="block rounded-lg px-3 py-2.5 text-[16px] font-medium text-metin hover:bg-yuzey">
                    {m.etiket}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
