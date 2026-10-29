/**
 * 折叠插件（构建期，不靠运行时改 DOM）：
 * - h1~h3：把标题与它之后、下一个同级/更高级标题之前的内容包成
 *   <div class="vp-fold"><h2>…<button class="vp-fold-btn"></button></h2><div class="vp-fold-body">…</div></div>
 * - 嵌套列表：在子列表前的文字末尾插入 <button class="vp-list-btn">，
 *   点击时给父 <li> 加 is-collapsed 隐藏子列表。
 * 运行时只切换 class，不移动节点，因此不会破坏 Vue 的 SPA 更新。
 */
export function foldPlugin(md: any): void {
  md.core.ruler.push('fold_sections', (state: any) => {
    const tokens = state.tokens as any[]
    const out: any[] = []
    const stack: number[] = []

    const htmlBlock = (content: string) => ({
      type: 'html_block',
      tag: '',
      attrs: null,
      map: null,
      nesting: 0,
      level: 0,
      children: null,
      content,
      markup: '',
      info: '',
      meta: null,
      block: true,
      hidden: false,
    })

    const htmlInline = (content: string) => ({
      type: 'html_inline',
      tag: '',
      attrs: null,
      map: null,
      nesting: 0,
      level: 0,
      children: null,
      content,
      markup: '',
      info: '',
      meta: null,
      block: false,
      hidden: false,
    })

    const foldButton = (kind: 'heading' | 'list') => {
      const cls = kind === 'heading' ? 'vp-fold-btn' : 'vp-list-btn'
      return htmlInline(
        `<button type="button" class="${cls}" aria-expanded="true" title="折叠 / 展开"></button>`
      )
    }

    const closeTo = (level: number) => {
      while (stack.length && stack[stack.length - 1] >= level) {
        out.push(htmlBlock('</div>')) // .vp-fold-body
        out.push(htmlBlock('</div>')) // .vp-fold
        stack.pop()
      }
    }

    let pendingHeading: number | null = null
    let lastInline: any = null

    for (const token of tokens) {
      if (token.type === 'heading_open' && /^h[1-3]$/.test(token.tag)) {
        const level = Number(token.tag[1])
        closeTo(level)
        out.push(htmlBlock('<div class="vp-fold">'))
        stack.push(level)
        pendingHeading = level
        out.push(token)
        continue
      }

      if (token.type === 'inline' && pendingHeading !== null) {
        // 标题里的行内内容：把折叠按钮放到标题文字末尾
        token.children = token.children || []
        token.children.unshift(foldButton('heading'))
        lastInline = token
        out.push(token)
        continue
      }

      if (token.type === 'heading_close' && pendingHeading !== null) {
        out.push(token)
        out.push(htmlBlock('<div class="vp-fold-body">'))
        pendingHeading = null
        continue
      }

      if (
        (token.type === 'bullet_list_open' || token.type === 'ordered_list_open') &&
        token.level >= 2 &&
        lastInline &&
        Array.isArray(lastInline.children)
      ) {
        // 子列表：把按钮放到前一段文字的开头（左侧）
        lastInline.children.unshift(foldButton('list'))
      }

      if (token.type === 'inline') lastInline = token
      out.push(token)
    }

    closeTo(0)
    state.tokens = out
  })
}
