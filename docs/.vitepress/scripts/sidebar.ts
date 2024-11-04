import type { DefaultTheme } from "vitepress/types";

// 侧边栏配置
export default {
  'zhenti': [
      {
        text: '英语二真题',
        items: [
          { text: '2010', link: 'zhenti/2010.md' },
          { text: '2011', link: 'zhenti/2011.md' },
          { text: '2012', link: 'zhenti/2012.md' },
          { text: '2013', link: 'zhenti/2013.md' },
          { text: '2014', link: 'zhenti/2014.md' },
          { text: '2015', link: 'zhenti/2015.md' },
          { text: '2016', link: 'zhenti/2016.md' },
          { text: '2017', link: 'zhenti/2017.md' },
          { text: '2018', link: 'zhenti/2018.md' },
          { text: '2019', link: 'zhenti/2019.md' },
          { text: '2020', link: 'zhenti/2020.md' },
          { text: '2021', link: 'zhenti/2021.md' },
          { text: '2022', link: 'zhenti/2022.md' },
          { text: '2023', link: 'zhenti/2023.md' },
          { text: '2024', link: 'zhenti/2024.md' },
        ],
      },
      {
        text: '英语一真题',
        items: [
          { text: '2010', link: 'zhenti/（一）2010.md' },
          { text: '2011', link: 'zhenti/（一）2011.md' },
          { text: '2012', link: 'zhenti/（一）2012.md' },
          { text: '2013', link: 'zhenti/（一）2013.md' },
          { text: '2014', link: 'zhenti/（一）2014.md' },
          { text: '2015', link: 'zhenti/（一）2015.md' },
          { text: '2016', link: 'zhenti/（一）2016.md' },
          { text: '2017', link: 'zhenti/（一）2017.md' },
          { text: '2018', link: 'zhenti/（一）2018.md' },
          { text: '2019', link: 'zhenti/（一）2019.md' },
          { text: '2020', link: 'zhenti/（一）2020.md' },
          { text: '2021', link: 'zhenti/（一）2021.md' },
          { text: '2022', link: 'zhenti/（一）2022.md' },
          { text: '2023', link: 'zhenti/（一）2023.md' },
          { text: '2024', link: 'zhenti/（一）2024.md' },
        
        ],
      },
      { text: 'a2', link: '/A/a2' },
    ],
      'waikan': [
      {
        text: 'Eli外刊精读',
        items: [
          { text: '说明', link: 'waikan/10-12eli/首页.md' },
          { text: '10.28', link: 'waikan/10-12eli/11.1.md' },
          { text: '11.4 The cost-of-living crisis has hurt children and prospective parents', link: 'waikan/10-12eli/11.4.md' },
          { text: '2', link: '/A/a1/a1-2' },
        ],
      },
      {
        text: '经济学人',
        items: [
          { text: '说明', link: 'waikan/jjxr/首页.md' },
          { text: '10.28', link: 'waikan/10-12eli/11.1.md' },
          { text: '2', link: '/A/a1/a1-2' },
        ],
      },
    ],
      'yufa': [
      {
        text: 'Grammar Summary',
        items: [
          { text: '语法基础', link: 'yufa/语法基础.md' },
          { text: '定语从句', link: 'yufa/定语从句.md' },
          { text: '状语从句', link: 'yufa/状语从句.md' },
          { text: '非谓语动词', link: 'yufa/非谓语动词.md' },
          { text: '主语从句', link: 'yufa/主语从句.md' },
          { text: '形式主语/宾语', link: 'yufa/形式主语｜宾语.md' },
          { text: 'There be 句型', link: 'yufa/There be 句型.md' },
          { text: '难点积累', link: 'yufa/其他积累.md' },
          { text: '固定搭配', link: 'yufa/固定搭配.md' },
        ],
      },
    ],
      'composition': [
      {
        text: '每周积累',
        items: [
          { text: '第一周 主语从句', link: 'composition/第一周 主语从句.md' },
          { text: '第二周 There be', link: 'composition/第二周 There be.md' },
          { text: '第三周 动名词', link: 'composition/第三周 动名词.md' },
          { text: '第四周 形式主语:宾语', link: 'composition/第四周 形式主语:宾语.md' },
          { text: '第五周 So that', link: 'composition/第五周 So that.md' },
          { text: '第六周 非谓语动词', link: 'composition/第六周 非谓语动词.md' },
          { text: '第七周', link: 'composition/第七周.md' },
          { text: '第八周', link: 'composition/第八周.md' },
        ],
      },
      {
        text: 'Craft写作',
        items: [
          { text: '2010', link: '/A/a1/a1-1' },
          { text: '2021', link: '/A/a1/a1-2' },
        ],
      },
      { text: 'a2', link: '/A/a2' },
    ],
  
 } as DefaultTheme.Sidebar;
