#!/usr/bin/env bash
# 一次性生成站点自托管的中文字体子集
#
#   1. 标题    思源宋体 Bold   → source-han-serif-bold.woff2（只含 h1~h3 用字，约 116KB，全局预加载）
#   2. Callout 楷体_GB2312     → kaiti.woff2          （常用字，约 654KB，仅在使用页加载）
#   3. 引用块  仿宋_GB2312     → fangsong.woff2       （常用字，约 550KB，仅在使用页加载）
#
# 依赖：python3 -m pip install fonttools brotli
# 用法：bash scripts/subset-fonts.sh

set -euo pipefail
cd "$(dirname "$0")/.."

OUT_DIR="docs/public/fonts"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

FONT_HEADING="$HOME/Library/Fonts/SourceHanSerifCN-Bold-2.otf"
FONT_FS="$HOME/Library/Fonts/仿宋_GB2312.ttf"
FONT_KAI="$HOME/Library/Fonts/楷体_GB2312.TTF"
FONT_LXGW="$PWD/docs/.vitepress/cache/LXGWWenKai-Regular.ttf"

SUBSET="pyftsubset"
command -v pyftsubset >/dev/null 2>&1 || SUBSET="python3 -m fontTools.subset"

mkdir -p "$OUT_DIR"

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

# 标题：思源宋体 Bold（源字体在本机）
subset "$FONT_HEADING" "$TMP/heading-chars.txt" "$OUT_DIR/source-han-serif-bold.woff2"

# Callout 楷体（源字体在本机；手机端没有楷体，必须自带）
subset "$FONT_KAI" "$TMP/common-chars.txt" "$OUT_DIR/kaiti.woff2"

# 引用块：仿宋（源字体在本机）
subset "$FONT_FS" "$TMP/common-chars.txt" "$OUT_DIR/fangsong.woff2"

# 正文字体切换：霞鹜文楷（缓存的 ttf，缺失时跳过）
if [ -f "$FONT_LXGW" ]; then
  subset "$FONT_LXGW" "$TMP/common-chars.txt" "$OUT_DIR/lxgw-wenkai.woff2"
else
  echo "跳过霞鹜文楷：找不到 $FONT_LXGW" >&2
fi

ls -lh "$OUT_DIR"
