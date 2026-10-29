/**
 * 折叠交互：只切换 class，避免运行时移动 DOM（会破坏 Vue 的路由更新）。
 */
export function setupFold(): void {
  const root = document.querySelector<HTMLElement>('.vp-doc')
  if (!root || (root as any).__foldBound) return
  ;(root as any).__foldBound = true

  root.addEventListener('click', (event) => {
    const target = event.target as Element | null
    if (!target) return

    const headingBtn = target.closest('.vp-fold-btn')
    if (headingBtn) {
      const fold = headingBtn.closest('.vp-fold')
      const body = fold?.querySelector(':scope > .vp-fold-body')
      if (!body) return
      const collapsed = body.classList.toggle('is-collapsed')
      headingBtn.setAttribute('aria-expanded', String(!collapsed))
      return
    }

    const listBtn = target.closest('.vp-list-btn')
    if (listBtn) {
      const li = listBtn.closest('li')
      if (!li) return
      const collapsed = li.classList.toggle('is-collapsed')
      listBtn.setAttribute('aria-expanded', String(!collapsed))
    }
  })
}
