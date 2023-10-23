import type { DefaultTheme } from "vitepress/types";

// 菜单
const nav: DefaultTheme.NavItem[] = [
  { 
    text: "基础篇",
    items:[
      { text: "Python基础",link: "/my-blog/" },
      { text: "Numpy",link: "/my-blog/" },
      { text: "Pandas",link: "/my-blog/" },
      { text: "Matplotlib",link: "/my-blog/" },
      { text: "seaborn",link: "/my-blog/" }

    ]
  },
  { 
    text: "数据分析",
    items:[
      { text: "三剑客",link: "/my-blog/" },
      { text: "高数",link: "/my-blog/" },
      { text: "数学",link: "/my-blog/" }
    ]
  },
  { text: "机器学习",
   items:[
      { text: "Python基础",link: "/my-blog/" },
      { text: "统计",link: "/my-blog/" },
      { text: "数学",link: "/my-blog/" }
    ]
  },
  { text: "Github",link: "/my-blog/" },
];
export default nav;
