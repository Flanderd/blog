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
  "/Python-Base": [
    {
      text: "Python基础",
      items: [
        { text: "数据类型", link: "/Python-Base/" },
        { text: "列表", link: "/Python-Base/" },
        { text: "元组", link: "/Python-Base/ },
        { text: "集合", link: "/Python-Base/" },
        { text: "字典", link: "/Python-Base/" },
        { text: "If语句", link: "/Python-Base/" },
        { text: "For循环", link: "/Python-Base/" },
        { text: "While循环", link: "/Python-Base/" },
        { text: "函数", link: "/Python-Base/" },
        { text: "字符串格式化", link: "/Python-Base/" },
     ],
    },
 ],
  
 } as DefaultTheme.Sidebar;
