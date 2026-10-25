#!/usr/bin/env bash
# 一次性生成站点自托管的三套中文字体子集
#
#   1. 标题    方正小标宋      → fzxbs-subset.woff2   （只含 h1~h3 用字，约 72KB，全局预加载）
#   2. Callout 霞鹜文楷        → lxgw-wenkai.woff2    （常用字，免费可商用，约 850KB，仅在使用页加载）
#   3. 引用块  仿宋_GB2312     → fangsong.woff2       （常用字，约 550KB，仅在使用页加载）
#
# 依赖：python3 -m pip install fonttools brotli
# 用法：bash scripts/subset-fonts.sh

set -euo pipefail
cd "$(dirname "$0")/.."

OUT_DIR="docs/public/fonts"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

KAI_CACHE="docs/.vitepress/cache/LXGWWenKai-Regular.ttf"
KAI_URL="https://cdn.jsdelivr.net/gh/lxgw/LxgwWenKai@v1.510/fonts/TTF/LXGWWenKai-Regular.ttf"
FONT_XBS="$HOME/Library/Fonts/方正小标宋简.TTF"
FONT_FS="$HOME/Library/Fonts/仿宋_GB2312.ttf"

SUBSET="pyftsubset"
command -v pyftsubset >/dev/null 2>&1 || SUBSET="python3 -m fontTools.subset"

mkdir -p "$OUT_DIR" "$(dirname "$KAI_CACHE")"

# ---------- 1. 字集 ----------
# 标题：只取 h1~h3
grep -rh '^#\{1,3\} ' docs --include=*.md | sed 's/^#\{1,3\} //' >"$TMP/headings.txt"

# 常用字：GB2312 一级字（3755 个）+ 全站正文出现过的字，覆盖现有内容和常用新内容
python3 - "$TMP/headings.txt" "$TMP/heading-chars.txt" "$TMP/common-chars.txt" <<'PY'
import glob
import sys

heading_text = open(sys.argv[1], encoding='utf-8').read()

heading = set(heading_text)
heading.update(chr(c) for c in range(0x20, 0x7F))
heading.update('　、。，．；：？！“”‘’（）【】《》〈〉—…·％＋－×÷＝')
heading.discard('\n')
heading.discard('\r')

common = set()
for hi in range(0xB0, 0xD8):          # GB2312 一级汉字区
    for lo in range(0xA1, 0xFF):
        try:
            common.add(bytes([hi, lo]).decode('gb2312'))
        except UnicodeDecodeError:
            pass
for path in glob.glob('docs/**/*.md', recursive=True):
    common.update(open(path, encoding='utf-8').read())
common.update(chr(c) for c in range(0x20, 0x7F))
common.update('　、。，．；：？！“”‘’（）【】《》〈〉—…·％＋－×÷＝')
common.discard('\n')
common.discard('\r')

open(sys.argv[2], 'w', encoding='utf-8').write(''.join(sorted(heading)))
open(sys.argv[3], 'w', encoding='utf-8').write(''.join(sorted(common)))
print(f'标题字集：{len(heading)} 字；常用字集：{len(common)} 字')
PY

# ---------- 2. 子集化 ----------
subset() {
  local font="$1" chars="$2" out="$3"
  if [ ! -f "$font" ]; then
    echo "找不到字体文件：$font" >&2
    exit 1
  fi
  $SUBSET "$font" \
    --text-file="$chars" \
    --flavor=woff2 \
    --output-file="$out" \
    --layout-features='*' \
    --no-hinting \
    --desubroutinize 2>/dev/null
  echo "生成 $out"
}

# 标题（源字体在本机）
subset "$FONT_XBS" "$TMP/heading-chars.txt" "$OUT_DIR/fzxbs-subset.woff2"

# Callout：霞鹜文楷（首次运行下载源字体，缓存到 cache，不入库）
if [ ! -f "$KAI_CACHE" ]; then
  echo "下载霞鹜文楷：$KAI_URL"
  curl -fL --retry 3 -o "$KAI_CACHE" "$KAI_URL"
fi
subset "$KAI_CACHE" "$TMP/common-chars.txt" "$OUT_DIR/lxgw-wenkai.woff2"

# 引用块：仿宋（源字体在本机）
subset "$FONT_FS" "$TMP/common-chars.txt" "$OUT_DIR/fangsong.woff2"

ls -lh "$OUT_DIR"
