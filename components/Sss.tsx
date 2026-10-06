import { ChevronDown } from "lucide-react";
import type { Soru } from "@/data/icerik";

export function Sss({ sorular }: { sorular: Soru[] }) {
  return (
    <div className="divide-y divide-cizgi border-y border-cizgi">
      {sorular.map((s) => (
        <details key={s.soru} className="group">
          <summary className="flex items-center justify-between gap-3 py-4 hover:text-vurgu sm:gap-6 sm:py-5">
            <h3 className="min-w-0 text-[16px] leading-snug group-hover:text-vurgu sm:text-[18px]">{s.soru}</h3>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className="shrink-0 text-soluk transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="max-w-[68ch] pb-5 text-metin">{s.cevap}</p>
        </details>
      ))}
    </div>
  );
}
