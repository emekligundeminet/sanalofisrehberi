import { icerik } from "@/data/icerik";

export function OneCikanRozet({ kucuk = false, className = "" }: { kucuk?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full bg-olumlu font-semibold text-white ${kucuk ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-[12px]"} ${className}`}
    >
      {icerik.ilSayfasi.oneCikan}
    </span>
  );
}

export function Rozet({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full bg-rozet px-2.5 py-0.5 text-[13px] font-medium leading-5 text-rozet-metin ${className}`}
    >
      {children}
    </span>
  );
}
