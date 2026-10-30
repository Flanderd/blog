## 相关性分析（Correlation analysis）
定义：相关性分析用于度量两个变量之间的线性关系强度。常见的相关系数包括皮尔逊相关系数。

公式：`皮尔逊相关系数`
$$
  r_{xy}=\frac{\sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)\left(y_{i}-\bar{y}\right)}{\sqrt{\sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)^2\sum_{i=1}^{n}\left(y_{i}-\bar{y}\right)^2}}
$$
```py
import numpy as np
x = np.array([1,2,3,4,5])
y = np.array([2,4,6,8,10])

correlation = np.corrcoef(x,y)[0,1]
print(f"皮尔逊相关系数：{correlation}")
```

::: tip
He suggested that she _____ (go) to the doctor.
<details><summary>答案</summary>go（虚拟语气省略 should）</details>
:::
::: warning
warning
:::

---
$(ax^2 + bx + c = 0)$

`代码快突出`
```
`代码快突出`
```
---

```js
export default {
  name: 'MyComponent',
  // ...
}
```
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
在代码块中实现行高亮
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行之外，还可以指定多个单行、多行，或两者均指定：

多行：例如 {5-8}、{3-10}、{10-17}

多个单行：例如 {4,7,9}

多行与单行：例如 {4,7-13,16,23-27,40}

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

也可以使用 // [!code highlight] 注释实现行高亮。
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

## 代码块中的颜色差异

在某一行添加 // [!code --] 或 // [!code ++] 注释将会为该行创建 diff，同时保留代码块的颜色。
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## 行号
可以通过以下配置为每个代码块启用行号：
```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

可以在代码块中添加 `:line-numbers` / `:no-line-numbers` 标记来覆盖在配置中的设置。

还可以通过在 `:line-numbers` 之后添加 `= `来自定义起始行号，例如 `:line-numbers=2` 表示代码块中的行号从 2 开始。
```ts {1}
// 默认禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// 行号已启用，并从 2 开始
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

## 代码组
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::