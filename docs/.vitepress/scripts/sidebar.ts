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
        { text: "3", link: "/data/" },      ],
    },
  ],
  "/Python Base": [
    {
      text: "Python基础",
      items: [
        { text: "数据类型", link: "/data/未命名/" },
        { text: "列表", link: "/data/未命名/" },
        { text: "元组", link: "/data/未命名/" },
        { text: "集合", link: "/data/未命名/" },
        { text: "字典", link: "/data/未命名/" },
        { text: "If语句", link: "/data/未命名/" },
        { text: "For循环", link: "/data/未命名/" },
        { text: "While循环", link: "/data/未命名/" },
        { text: "函数", link: "/data/未命名/" },
        { text: "字符串格式化", link: "/data/" },
     ],
    },
    {
      text: "Python文件处理",
      items: [
        { text: "文件打开", link: "/data/未命名/" },
        { text: "文件读取", link: "/data/未命名/" },
        { text: "文件写入/创建", link: "/data/未命名/" },
        { text: "文件删除", link: "/data/未命名/" },
           ],
    },
  ],
  
 } as DefaultTheme.Sidebar;
