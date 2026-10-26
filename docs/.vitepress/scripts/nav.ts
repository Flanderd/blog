import type { DefaultTheme } from "vitepress/types";

// 菜单
const nav: DefaultTheme.NavItem[] = [
  {text: 'Tax',
    items:[
    {text:'《税法一》',link: '/taxlaw/概述.md'},
    {text:'《税法二》',link: '/yufa/语法基础.md'},
    {text:'《涉税实务》',link: '/composition/第一周 主语从句.md'},
    {text:'《财务与会计》',link: '/yufa/语法基础.md'},
    {text:'《涉税法律》',link: '/yufa/语法基础.md'},
    ]
  },
  { text: 'Finance', 
    items:[
      {text:'《会计实务》',link: '/waikan/10-12eli/首页.md'},
      {text:'《初级经济法》',link: '/waikan/10-12eli/首页.md'},
      {text:'《财务分析》',link: '/waikan/10-12eli/首页.md'},
      {text:'《财务管理》',link: '/waikan/jjxr/首页.md基础.md'}
    ]},
  { text: 'Economy', 
    items:[
    {text:'宏观经济学',link: '/waikan/10-12eli/首页.md'},
    {text:'金融学',link: '/waikan/jjxr/首页.md基础.md'},
    {text:'统计学',link: '/waikan/jjxr/首页.md基础.md'},
  ]},
  { text: 'Math', 
    items:[
    {text:'《高等数学》',link: '/waikan/10-12eli/首页.md'},
    {text:'《线性代数》',link: '/waikan/jjxr/首页.md基础.md'},
    {text:'《概率论与数理统计》',link: '/waikan/jjxr/首页.md基础.md'},
  ]}
];
export default nav;
