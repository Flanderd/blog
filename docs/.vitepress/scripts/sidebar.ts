import type { DefaultTheme } from "vitepress/types";

// 侧边栏配置
export default {
  "/my-blog": [
    {
      text: "My Blog",
      items: [
        { text: "介绍", link: "/my-blog/" },
        { text: "学习心得", link: "/my-blog/study" },
      ],
    },
  ],
} as DefaultTheme.Sidebar;
