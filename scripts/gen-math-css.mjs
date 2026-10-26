/**
 * 生成 CHTML 需要的样式表，并把 MathJax 的 woff 字体复制到 public/fonts/mathjax。
 *
 * 用法：node scripts/gen-math-css.mjs
 * 改动公式字体/选项后重新运行一次即可。
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mathjax } from 'mathjax-full/js/mathjax.js'
import { TeX } from 'mathjax-full/js/input/tex.js'
import { CHTML } from 'mathjax-full/js/output/chtml.js'
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js'
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js'
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const cssOut = path.join(root, 'docs/.vitepress/theme/styles/mathjax-chtml.css')
const fontSrc = path.join(root, 'node_modules/mathjax-full/es5/output/chtml/fonts/woff-v2')
const fontDst = path.join(root, 'docs/public/fonts/mathjax')

const adaptor = liteAdaptor()
RegisterHTMLHandler(adaptor)
const doc = mathjax.document('', {
  InputJax: new TeX({ packages: AllPackages }),
  OutputJax: new CHTML({ fontURL: '/fonts/mathjax', adaptiveCSS: false }),
})

const css = adaptor.textContent(doc.outputJax.styleSheet(doc))
fs.mkdirSync(path.dirname(cssOut), { recursive: true })
fs.writeFileSync(
  cssOut,
  '/* 由 scripts/gen-math-css.mjs 生成，请勿手动修改 */\n' + css + '\n',
  'utf8'
)

fs.mkdirSync(fontDst, { recursive: true })
let copied = 0
for (const file of fs.readdirSync(fontSrc)) {
  if (!file.endsWith('.woff')) continue
  fs.copyFileSync(path.join(fontSrc, file), path.join(fontDst, file))
  copied += 1
}

console.log(`CSS: ${(css.length / 1024).toFixed(0)} KB -> ${path.relative(root, cssOut)}`)
console.log(`字体: ${copied} 个 -> ${path.relative(root, fontDst)}`)
