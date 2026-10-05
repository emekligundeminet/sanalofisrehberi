export function Bolum({
  id,
  baslik,
  aciklama,
  children,
  className = "mt-14",
}: {
  id: string;
  baslik: string;
  aciklama?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-baslik`} className={className}>
      <h2 id={`${id}-baslik`}>{baslik}</h2>
      {aciklama && <p className="mt-2 kucuk">{aciklama}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}
