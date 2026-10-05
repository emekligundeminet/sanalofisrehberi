#!/usr/bin/env bash
# Çalışan bir `next start` sunucusuna karşı mobil Lighthouse ölçümü.
# Kullanım: npx next start -p 3100 & ./scripts/lighthouse.sh [http://127.0.0.1:3100]
set -euo pipefail

TABAN="${1:-http://127.0.0.1:3100}"
CIKTI="lighthouse"
export CHROME_PATH="${CHROME_PATH:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
mkdir -p "$CIKTI"

for SAYFA in "/:anasayfa" "/ankara-sanal-ofis:ankara" "/sanal-ofis-secim-rehberi:rehber" "/hakkinda:hakkinda"; do
  YOL="${SAYFA%%:*}"
  AD="${SAYFA##*:}"
  npx --yes lighthouse@13 "$TABAN$YOL" --quiet --form-factor=mobile \
    --chrome-flags="--headless=new --no-first-run" \
    --output=json --output=html --output-path="$CIKTI/$AD-mobil" >/dev/null 2>&1
  node -e "
    const r = require('./$CIKTI/$AD-mobil.report.json');
    const s = Object.values(r.categories).filter(c => c.id !== 'agentic-browsing')
      .map(c => c.title + ' ' + Math.round(c.score * 100)).join(' · ');
    const a = r.audits;
    console.log('$YOL'.padEnd(28), s, '| FCP', a['first-contentful-paint'].displayValue,
      'LCP', a['largest-contentful-paint'].displayValue, 'TBT', a['total-blocking-time'].displayValue,
      'CLS', a['cumulative-layout-shift'].displayValue);
  "
done
