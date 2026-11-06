import type { DefaultTheme } from "vitepress/types";

// 菜单
const nav: DefaultTheme.NavItem[] = [
  { text: 'CPA', 
    items:[
      {text:'《会计》',link: '/cpa/会计/0.目录.md'},
      {text:'《审计》',link: '/cpa/审计/0.目录.md'},
      {text:'《税法》',link: '/cpa/税法/0.目录.md'},
      {text:'《财务成本管理》',link: '/cpa/财务成本管理/0.目录.md'},
      {text:'《经济法》',link: '/cpa/经济法/0.目录.md'},
      {text:'《公司战略与风险管理》',link: '/cpa/公司战略与风险管理/0.目录.md'},
    ]},
  {text: 'TAX',
    items:[
    {text:'《税法一》',link: '/taxlaw/index.md'},
    {text:'《税法二》',link: '/taxlaw/税法二/'},
    {text:'《涉税实务》',link: '/composition/第一周 主语从句.md'},
    {text:'《财务与会计》',link: '/taxlaw/财务与会计/00-目录.md'},
    {text:'《涉税法律》',link: '/taxlaw/涉税服务相关法律/0.目录.md'},
    ]
  },
  { text: 'Finance', 
    items:[
      {text:'《会计实务》',link: '/accounting/初级会计实务/0.目录.md'},
      {text:'《初级经济法》',link: '/waikan/10-12eli/首页.md'},
    ]},

  { text: 'Economy', 
    items:[
    {text:'Statistics',link: '/statistics/index.md'},
  ]},
  { text: 'Math', 
    items:[
    {text:'《高等数学》',link: '/math/index.md'},
    {text:'《线性代数》',link: '/xxds/index.md'},
    {text:'《概率论与数理统计》',link: '/gailvlun/index.md'},
  ]},
  { text: 'English', 
    items:[
    {text:'1',link: '/english/index.md'},
    {text:'2',link: '/xxds/index.md'},
    {text:'3',link: '/gailvlun/index.md'},
  ]}
];
export default nav;
