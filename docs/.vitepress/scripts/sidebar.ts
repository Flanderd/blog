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
    "/statistics": [
    {
      text: "统计至简",
      items: [
        { text: "统计描述", link: "/statistics/2.统计描述.md" },
        { text: "概率",
         items:[
          { text: "古典概率模型", link: "/statistics/3.古典概率模型.md" },
          { text: "离散随机变量", link: "/statistics/4.离散随机变量.md" },
           { text: "离散分布", link: "/statistics/5.离散分布.md" },
           { text: "连续随机变量", link: "/statistics/6.连续随机变量.md" },
           { text: "连续分布", link: "/statistics/7.连续分布.md" },
           { text: "条件概率", link: "/statistics/8.条件概率.md" },
          ],
        },
        { text: "高斯",
         items:[
           {text: "一元高斯分布", link: "/statistics/9.一元高斯分布.md" },
           {text: "二元高斯分布", link: "/statistics/10.二元高斯分布.md" },
           {text: "多元高斯分布", link: "/statistics/11.多元高斯分布.md" },
           {text: "条件高斯分布", link: "/statistics/12.条件高斯分布.md" },
           {text: "协方差矩阵", link: "/statistics/13.协方差矩阵.md" },
         ],
        },
      ],
    },
  ],
  "/visualization": [
    {
      text: "可视之美",
      items: [
        { text: "Matplotlib",
         items: [
          { text: "折线图", link: "/visualization/" },
           { text: "柱状图", link: "/visualization/" },
           { text: "散点图", link: "/visualization/" },
           { text: "箱形图", link: "/visualization/" },
           { text: "三维图", link: "/visualization/" },
           { text: "热力图", link: "/visualization/" },
           
           ]},
        { text: "Seaborn", link: "/python-base/" },
        { text: "Streamlit", link: "/python-base/" },
      ],
    },
  ],
 "/application": [
    {
      text: "应用实战",
      items: [
        { text: "每周挑战", 
        items:[
          {text: "112-快餐店销售分析", link: "/application/应用实战篇——每周挑战112期.md" },
          ],
        },

        { text: "参加活动", link: "" },
        { text: "优秀经典案例", link: "" },
      ],
    },
  ],
  ],
  
 } as DefaultTheme.Sidebar;
