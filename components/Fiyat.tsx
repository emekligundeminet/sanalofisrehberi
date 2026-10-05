export function Fiyat({
  fiyat,
  boyut,
  not,
}: {
  fiyat: string;
  boyut: string;
  not?: string;
}) {
  const sayisal = /\d/.test(fiyat);
  return (
    <>
      <span className={`block font-sans font-semibold leading-snug tracking-[-0.02em] tabular-nums ${boyut} ${sayisal ? "text-baslik" : "text-soluk"}`}>
        {fiyat}
      </span>
      {not && <span className="mt-1 block text-[13px] font-normal leading-snug tracking-normal text-soluk">{not}</span>}
    </>
  );
}
