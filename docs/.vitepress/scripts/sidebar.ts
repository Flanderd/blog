import type { DefaultTheme } from "vitepress/types";

// 侧边栏配置
export default {
  "/my-blog": [
    {
      text: "My Blog",
      items: [
        { text: "介绍", link: "/my-blog/" },
        { text: "MatLab", link: "/my-blog/study" },
        { text: "MathType试用期3万天!", link: "/my-blog/MathType试用期3万天！.md" },
      ],
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
  "/python-base": [
    {
      text: "Python基础",
      items: [
        { text: "列表", link: "/python-base/" },
        { text: "集合", link: "/python-base/" },
        { text: "字典", link: "/python-base/" },
      ],
    },
  ],
  "/visualization": [
    {
      text: "可视之美",
      items: [
        { text: "Matplotlib", link: "/visualization/Book_2_Ch_02__说图__可视之美__鸢尾花书__从加减乘除到机器学习.pdf" },
        { text: "Seaborn", link: "/python-base/" },
        { text: "Streamlit", link: "/python-base/" },
      ],
    },
  ],
 
  
 } as DefaultTheme.Sidebar;
