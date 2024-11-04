import type { DefaultTheme } from "vitepress/types";

// 菜单
const nav: DefaultTheme.NavItem[] = [

  { text: 'Home', link: '/' },
  {text: 'Summary',items:[
    {text:'真题',link: '/zhenti/2020.md'},
    {text:'语法',link: '/yufa/语法基础.md'},
    {text:'作文',link: '/composition/第一周 主语从句.md'},
  ]},
  
  { text: '外刊精读', items:[
    {text:'Eli精读',link: '/zhenti/2020.md'},
    {text:'经济学人外刊',link: '/yufa/语法基础.md'},
  ]},

];
export default nav;
