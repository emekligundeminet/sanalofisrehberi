#!/usr/bin/env bash
# Manrope ve Geist Mono'yu (SIL OFL 1.1) google/fonts deposundan alır,
# 400–700 ağırlık aralığına indirger ve Latin + Türkçe karakterlerle sınırlı woff2 üretir.
# Gereksinim: python3. Çıktı: app/fonts/*.woff2, public/licenses/*-OFL.txt
set -euo pipefail

KOK="$(cd "$(dirname "$0")/.." && pwd)"
IS="$(mktemp -d)"
KAYNAK="https://raw.githubusercontent.com/google/fonts/main/ofl"

python3 -m venv "$IS/venv"
"$IS/venv/bin/pip" install -q fonttools brotli

curl -sfL -o "$IS/Manrope.ttf" "$KAYNAK/manrope/Manrope%5Bwght%5D.ttf"
curl -sfL -o "$IS/GeistMono.ttf" "$KAYNAK/geistmono/GeistMono%5Bwght%5D.ttf"
curl -sfL -o "$KOK/public/licenses/Manrope-OFL.txt" "$KAYNAK/manrope/OFL.txt"
curl -sfL -o "$KOK/public/licenses/GeistMono-OFL.txt" "$KAYNAK/geistmono/OFL.txt"

FT="$IS/venv/bin/fonttools"
for AD in Manrope GeistMono; do
  "$FT" varLib.instancer "$IS/$AD.ttf" wght=400:700 -o "$IS/$AD-i.ttf"
done

# Basic Latin, Latin-1 (ç ö ü â î û), Ğ ğ İ ı Ş ş, tipografik noktalama, ₺, ← ↑ → ↓, −
UNICODES="U+0020-007E,U+00A0-00FF,U+011E-011F,U+0130-0131,U+015E-015F,U+2013-2014,U+2018-201E,U+2022,U+2026,U+20BA,U+2190-2193,U+2212"
OZELLIKLER="kern,liga,calt,ccmp,locl,mark,mkmk,tnum,lnum,case"

mkdir -p "$KOK/app/fonts"
for AD in Manrope GeistMono; do
  "$IS/venv/bin/pyftsubset" "$IS/$AD-i.ttf" \
    --unicodes="$UNICODES" --layout-features="$OZELLIKLER" \
    --flavor=woff2 --output-file="$KOK/app/fonts/$AD.woff2"
done

rm -rf "$IS"
ls -la "$KOK/app/fonts"
