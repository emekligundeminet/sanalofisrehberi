import type { Metadata } from "next";
import Link from "next/link";
import { icerik } from "@/data/icerik";

const metin = icerik.arayuz;

export const metadata: Metadata = {
  title: { absolute: metin.bulunamadiBaslik },
  robots: { index: false },
};

export default function Bulunamadi() {
  return (
    <div className="kap py-16 md:py-24">
      <p className="rakam kucuk">{metin.bulunamadiEtiket}</p>
      <h1 className="mt-2">{metin.bulunamadiBaslik}</h1>
      <p className="mt-4 text-soluk">{metin.bulunamadiMetin}</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-vurgu px-5 py-3 font-semibold text-white hover:bg-vurgu-koyu"
      >
        {metin.bulunamadiLink}
      </Link>
    </div>
  );
}
