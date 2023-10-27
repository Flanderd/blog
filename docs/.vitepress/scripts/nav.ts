import type { DefaultTheme } from "vitepress/types";

// 菜单
const nav: DefaultTheme.NavItem[] = [
  { 
    text: "<svg t="1698383292737" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1149" width="200" height="200"><path d="M611.6 925.6V359.5c0-63.4-61.1-108.7-122.3-90.6l-203.8 63.4c-38.5 11.3-65.7 49.8-65.7 90.6v502.7h391.8z" fill="#0055FE" opacity=".1" p-id="1150"></path><path d="M439.5 426.3H278.8c-9.4 0-17-7.6-17-17s7.6-17 17-17h160.8c9.4 0 17 7.6 17 17-0.1 9.4-7.7 17-17.1 17zM439.5 564.4H278.8c-9.4 0-17-7.6-17-17s7.6-17 17-17h160.8c9.4 0 17 7.6 17 17-0.1 9.4-7.7 17-17.1 17zM439.5 702.6H278.8c-9.4 0-17-7.6-17-17s7.6-17 17-17h160.8c9.4 0 17 7.6 17 17s-7.7 17-17.1 17zM790.5 702.6H681.8c-9.4 0-17-7.6-17-17s7.6-17 17-17h108.7c9.4 0 17 7.6 17 17s-7.6 17-17 17z" fill="#0055FE" p-id="1151"></path><path d="M942.2 959.6H81.8c-12.5 0-22.6-10.1-22.6-22.6s10.1-22.6 22.6-22.6h860.5c12.5 0 22.6 10.1 22.6 22.6s-10.2 22.6-22.7 22.6z" p-id="1152"></path><path d="M611.6 925.6h-45.3V167c0-7-3.4-13.5-9.3-17.8-5.9-4.4-13.3-5.7-20.2-3.5L165.6 263.3c-2.9 1.1-15.9 7.1-15.9 21.4v640.8h-45.3V284.8c0-28.4 18.2-53.6 46.4-64.2l372.5-118.1c20.9-6.4 43-2.7 60.6 10.3 17.4 12.8 27.7 33.1 27.7 54.3v758.5z" p-id="1153"></path><path d="M912.8 923.3h-45.3V619.9c0-6.7-3.7-13.8-9.6-18.6L582.6 405.1l26.3-36.9 276.2 197c17.7 14.1 27.6 34.2 27.6 54.7v303.4z" p-id="1154"></path></svg>基础篇"，
    items:[
      { text: "Python基础",link: "/python-base/行业报告" },
      { text: "高等数学",link: "/my-blog/" },
      { text: "线性代数",link: "/my-blog/" },
      { text: "概率论与数理统计",link: "/my-blog/" },
      { text: "统计学",link: "/my-blog/" }

    ]
  },
  { 
    text: "数据分析",
    items:[
      {
        text: "数据分析三剑客",
        items:[
          { text: "Numpy",link: "/my-blog/" },
          { text: "Pandas",link: "/my-blog/" },
          { text: "Matplotlib",link: "/my-blog/" }
          
        ]
      },
      {
        text: "数据处理",
        items:[
          { text: "数据清理",link: "/my-blog/" },
          { text: "数据集成",link: "/my-blog/" },
          { text: "数据转化",link: "/my-blog/" },
          { text: "数据规约",link: "/my-blog/" }
          
          ]
      },
      
    ]
  },
  { text: "机器学习",
   items:[
      { text: "KNN算法",link: "/my-blog/" },
      { text: "线性回归",link: "/my-blog/" },
      { text: "逻辑回归",link: "/my-blog/" },
      { text: "决策树",link: "/my-blog/" }
    ]
  },
  { text: "Github"，link: "/my-blog/" },
];
export default nav;
