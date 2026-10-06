"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { icerik } from "@/data/icerik";

export function YukariCik() {
  const [gorunur, setGorunur] = useState(false);

  useEffect(() => {
    const guncelle = () => setGorunur(window.scrollY > 400);
    guncelle();
    window.addEventListener("scroll", guncelle, { passive: true });
    return () => window.removeEventListener("scroll", guncelle);
  }, []);

  if (!gorunur) return null;

  return (
    <button
      type="button"
      aria-label={icerik.arayuz.yukariCik}
      onClick={() => {
        const yumusak = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: yumusak ? "smooth" : "auto" });
      }}
      className="fixed bottom-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-vurgu text-zemin shadow-kart hover:bg-vurgu-koyu sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}
