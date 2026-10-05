import { ChevronDown } from "lucide-react";
import type { Soru } from "@/data/icerik";

export function Sss({ sorular }: { sorular: Soru[] }) {
  return (
    <div className="divide-y divide-cizgi border-y border-cizgi">
      {sorular.map((s) => (
        <details key={s.soru} className="group">
          <summary className="flex items-center justify-between gap-6 py-5 hover:text-vurgu">
            <h3 className="text-[18px] leading-snug group-hover:text-vurgu">{s.soru}</h3>
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
