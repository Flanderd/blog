import type { DefaultTheme } from "vitepress/types";

// 侧边栏配置
export default {
  "/my-blog": [
    {
      text: "My Blog",
      items: [
        { text: "介绍", link: "/my-blog/" },
        { text: "学习心得", link: "/my-blog/study" },
        { text: "数据清洗", link: "/my-blog/数据清洗" },      ],
    },
  ],
   "/my-blog": [
    {
      text: "基础",
      items: [
        { text: "介绍", link: "/my-blog/" },
        { text: "学习心得", link: "/my-blog/study" },
        { text: "数据清洗", link: "/my-blog/数据清洗" },      ],
    },
  ],} as DefaultTheme.Sidebar;
