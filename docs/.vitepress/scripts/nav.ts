import type { DefaultTheme } from "vitepress/types";

// 菜单
const nav: DefaultTheme.NavItem[] = [

  { text: 'Home', link: '/' },
  {text: '税务',
    items:[
    {text:'《税法一》',link: '/zhenti/2020.md'},
    {text:'《税法二》',link: '/yufa/语法基础.md'},
    {text:'《涉税实务》',link: '/composition/第一周 主语从句.md'}
    ]
  },
  { text: '财务', 
    items:[
    {text:'《财务分析》',link: '/waikan/10-12eli/首页.md'},
    {text:'《财务管理》',link: '/waikan/jjxr/首页.md基础.md'},
  ]},
  { text: 'Economy', 
    items:[
    {text:'宏观经济学',link: '/waikan/10-12eli/首页.md'},
    {text:'',link: '/waikan/jjxr/首页.md基础.md'},
  ]},
  { text: 'Math', 
    items:[
    {text:'《高等数学》',link: '/waikan/10-12eli/首页.md'},
    {text:'《线性代数》',link: '/waikan/jjxr/首页.md基础.md'},
    {text:'《概率论与数理统计》',link: '/waikan/jjxr/首页.md基础.md'},
  ]}
];
export default nav;
