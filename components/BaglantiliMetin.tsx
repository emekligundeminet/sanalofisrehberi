import Link from "next/link";

export function BaglantiliMetin({ metin }: { metin: string }) {
  const parcalar = metin.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parcalar.map((parca, i) => {
        const es = parca.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!es) return parca;
        return (
          <Link key={i} href={es[2]} className="metin-link">
            {es[1]}
          </Link>
        );
      })}
    </>
  );
}
