export const KONSEPT_IKON = "/konsept-ofis-icon.png";
export const KONSEPT_LOGO = "/konsept-ofis-logo.webp";

export function KonseptIkon({ boyut }: { boyut: number }) {
  return (
    <img
      src={KONSEPT_IKON}
      alt=""
      width={boyut}
      height={boyut}
      className="shrink-0 rounded-full object-cover"
      style={{ width: boyut, height: boyut }}
    />
  );
}

export function KonseptLogo({ yukseklik }: { yukseklik: number }) {
  return (
    <img
      src={KONSEPT_LOGO}
      alt="Konsept Ofis"
      width={510}
      height={129}
      className="w-auto max-w-full"
      style={{ height: yukseklik, width: "auto" }}
    />
  );
}
