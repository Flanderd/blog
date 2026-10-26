/**
 * 用 MathJax 的 CHTML 输出渲染公式（替代默认的 SVG）。
 *
 * markdown-it-mathjax3 只负责把 $...$ / $$...$$ 切成 token，渲染规则在这里覆盖：
 * CHTML 输出的是带 class 的 HTML（约 0.5–2KB/公式），比内联 SVG（5–20KB/公式）小一个量级，
 * 页面体积和构建内存都明显下降。
 */
import { mathjax } from 'mathjax-full/js/mathjax.js'
import { TeX } from 'mathjax-full/js/input/tex.js'
import { CHTML } from 'mathjax-full/js/output/chtml.js'
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js'
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js'
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages.js'

const adaptor = liteAdaptor()
RegisterHTMLHandler(adaptor)

// TeX / CHTML 各建一次：CHTML 初始化要加载整套字体度量，每个公式都新建会瞬间吃光内存
const inputJax = new TeX({ packages: AllPackages })
const outputJax = new CHTML({ fontURL: '/fonts/mathjax', adaptiveCSS: false })
const makeDocument = () =>
  mathjax.document('', { InputJax: inputJax, OutputJax: outputJax })

export function renderMath(content, display) {
  try {
    // 每个公式用独立 document，避免 MathJax 在同一个 document 里累积节点导致内存暴涨
    const doc = makeDocument()
    const html = adaptor.outerHTML(
      doc.convert(content, {
        display: !!display,
        em: 16,
        ex: 8,
        containerWidth: display ? 80 * 16 : Infinity,
      })
    )
    // 关键：用 v-pre 让 Vue 编译器跳过两千多个 mjx-* 节点，
    // 否则它们会被编译成海量静态 vnode，构建内存和产物都会爆炸
    return display
      ? `<div v-pre class="math-block">${html}</div>`
      : `<span v-pre class="math-inline">${html}</span>`
  } catch (err) {
    console.warn('[math-chtml] 渲染失败：', content, err?.message)
    return `<code class="math-error">${content}</code>`
  }
}
