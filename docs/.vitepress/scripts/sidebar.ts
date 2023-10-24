import type { DefaultTheme } from "vitepress/types";

// 侧边栏配置
export default {
  "/my-blog": [
    {
      text: "My Blog",
      items: [
        { text: "介绍", link: "/my-blog/" },
        { text: "学习心得", link: "/my-blog/study" },
        { text: "简述Mean shift 算法及其实现", link: "/my-blog/简述Mean shift 算法及其实现" },      ],
    },
  ],
  "/data": [
    {
      text: "Data Analysis",
      items: [
        { text: "1", link: "/data/未命名/" },
        { text: "2", link: "/data/" },
        { text: "3", link: "/data/" },
      ],
    },
  ],
 
  
 } as DefaultTheme.Sidebar;
