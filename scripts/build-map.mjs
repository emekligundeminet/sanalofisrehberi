// Kaynak: https://github.com/dnomak/svg-turkiye-haritasi (MIT)
// Çalıştırma: node scripts/build-map.mjs  →  data/harita.ts üretir.
import { readFileSync, writeFileSync } from "node:fs";
import { optimize } from "svgo";

const kaynak = readFileSync(
  new URL("./harita-kaynak/svg-turkiye-haritasi.svg", import.meta.url),
  "utf8",
);

const viewBox = kaynak.match(/viewBox="([^"]+)"/)[1];
const grupRe = /<g id="[^"]+" data-plakakodu="(\d+)"[^>]*>([\s\S]*?)<\/g>/g;
const pathRe = /<path d="([^"]+)"/g;

const plakaPath = new Map();
for (const [, plakaStr, icerik] of kaynak.matchAll(grupRe)) {
  const plaka = Number(plakaStr);
  if (plaka < 1 || plaka > 81) continue;
  const dler = [...icerik.matchAll(pathRe)].map((m) => m[1]);
  plakaPath.set(plaka, [...(plakaPath.get(plaka) ?? []), ...dler]);
}

if (plakaPath.size !== 81) {
  throw new Error(`81 il bekleniyordu, ${plakaPath.size} bulundu`);
}

const sonuc = [];
let toplam = 0;
for (const plaka of [...plakaPath.keys()].sort((a, b) => a - b)) {
  const d = plakaPath.get(plaka).join(" ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><path d="${d}"/></svg>`;
  const { data } = optimize(svg, {
    multipass: true,
    floatPrecision: 0,
    plugins: [{ name: "preset-default", params: { overrides: { mergePaths: false } } }],
  });
  const yeniD = data.match(/ d="([^"]+)"/)[1];
  toplam += yeniD.length;
  sonuc.push({ plaka, d: yeniD });
}

const cikti = `// Bu dosya scripts/build-map.mjs tarafından üretilir; elle düzenlemeyin.
// Harita verisi: SVG Türkiye Haritası, © Doğukan Güven Nomak, MIT Lisansı.
// Lisans metni: /public/licenses/svg-turkiye-haritasi-LICENSE.txt

export const haritaViewBox = "${viewBox}";

export const ilPathleri: Record<number, string> = {
${sonuc.map((s) => `  ${s.plaka}: "${s.d}",`).join("\n")}
};
`;

writeFileSync(new URL("../data/harita.ts", import.meta.url), cikti);
console.log(`81 il yazıldı, toplam path uzunluğu: ${(toplam / 1024).toFixed(1)} KB`);
