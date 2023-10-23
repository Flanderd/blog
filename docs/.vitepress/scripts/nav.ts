import type { DefaultTheme } from "vitepress/types";

// 菜单
const nav: DefaultTheme.NavItem[] = [
  { 
    text: "基础篇",
    items:[
      { text: "Python基础",link: "/my-blog/" },
      { text: "统计",link: "/my-blog/" },
      { text: "数学",link: "/my-blog/" }
    ]
  },
  { 
    text: "数据分析",
    items:[
      { text: "Python基础",link: "/my-blog/" },
      { text: "统计",link: "/my-blog/" },
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
export default {
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      }
    ]
  }
}
export default nav;
