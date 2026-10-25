#!/usr/bin/env bash
# 重新生成标题字体子集（标题里出现生僻字、或新增大量标题后跑一次）
#
# 依赖：python3 -m pip install fonttools brotli
# 用法：bash scripts/subset-heading-font.sh [源字体路径]
# 默认源字体：~/Library/Fonts/方正小标宋简.TTF

set -euo pipefail
cd "$(dirname "$0")/.."

SRC="${1:-$HOME/Library/Fonts/方正小标宋简.TTF}"
OUT="docs/public/fonts/fzxbs-subset.woff2"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if [ ! -f "$SRC" ]; then
  echo "找不到源字体：$SRC" >&2
  exit 1
fi

# 1. 抽出所有 h1~h3 标题文字
grep -rh '^#\{1,3\} ' docs --include=*.md | sed 's/^#\{1,3\} //' >"$TMP/headings.txt"

# 2. 去重并补上 ASCII 与常用中文标点，避免标题里出现未收录字符
python3 - "$TMP/headings.txt" "$TMP/chars.txt" <<'PY'
import sys

text = open(sys.argv[1], encoding="utf-8").read().replace("\u00a0", " ")
chars = set(text)
chars.update(chr(c) for c in range(0x20, 0x7F))
chars.update("　、。，．；：？！“”‘’（）【】《》〈〉—…·％＋－×÷＝")
chars.discard("\n")
chars.discard("\r")
open(sys.argv[2], "w", encoding="utf-8").write("".join(sorted(chars)))
print(f"子集字符数：{len(chars)}")
PY

# 3. 子集化为 woff2（约 72KB，未子集的 TTF 是 3.7MB）
SUBSET="pyftsubset"
command -v pyftsubset >/dev/null 2>&1 || SUBSET="python3 -m fontTools.subset"
$SUBSET "$SRC" \
  --text-file="$TMP/chars.txt" \
  --flavor=woff2 \
  --output-file="$OUT" \
  --layout-features='*' \
  --no-hinting \
  --desubroutinize

ls -lh "$OUT"
