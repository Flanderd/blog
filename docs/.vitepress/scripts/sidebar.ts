import type { DefaultTheme } from "vitepress/types";

// 侧边栏配置
export default {
  '税法': [
      {text: '《税法一》',collapsed: true,
          items: [
            { text: '一、增值税', link: '/subjects/taxlaw/taxlaw1/123.md',
                collapsed: true,
              items:[
                { text: '1.增值税概述', link: '/subjects/taxlaw/taxlaw1/02-01.md' },
                { text: '2.纳税人和扣缴义务人', link: '/subjects/taxlaw/taxlaw1/02-02.md' },
                { text: '3.征税范围', link: '/subjects/taxlaw/taxlaw1/02-03.md' },
                { text: '4.税率和征收率', link: '/subjects/taxlaw/taxlaw1/02-04.md' },
                { text: '5.税收优惠', link: '/subjects/taxlaw/taxlaw1/02-05.md' },
                { text: '6.一般计税方法应纳税额计算', link: '/subjects/taxlaw/taxlaw1/02-06.md' },
                { text: '7.简易计税方法应纳税额计算', link: '/subjects/taxlaw/taxlaw1/02-07.md' },
                { text: '8.进口环节增值税政策', link: '/subjects/taxlaw/taxlaw1/02-08.md' },
                { text: '9.出口业务增值税政策', link: '/subjects/taxlaw/taxlaw1/02-09.md' },
                { text: '10.预缴税款及特定应税交易的增值税政策', link: '/subjects/taxlaw/taxlaw1/02-10.md' },
                { text: '11.征收管理', link: '/subjects/taxlaw/taxlaw1/02-11.md' }
              ]
            },
            {text: '二、消费税',
              link: '/subjects/taxlaw/taxlaw1/123.md',
              collapsed: true,
            items: [
              { text: '1.消费税概述', link: '/subjects/taxlaw/taxlaw1/03-01.md' },
              { text: '2.纳税人和扣缴义务人', link: '/subjects/taxlaw/taxlaw1/03-02.md' },
              { text: '3.税目和税率', link: '/subjects/taxlaw/taxlaw1/03-03.md' },
              { text: '4.计税依据', link: '/subjects/taxlaw/taxlaw1/03-04.md' },
              { text: '5.生产销售应税消费品应纳税额的计算', link: '/subjects/taxlaw/taxlaw1/03-05.md' },
              { text: '6.委托加工应税消费品应纳税额的计算', link: '/subjects/taxlaw/taxlaw1/03-06.md' },
              { text: '7.进口应税消费品应纳消费税的计算', link: '/subjects/taxlaw/taxlaw1/03-07.md' },
              { text: '8.批发、零售环节应纳消费税的计算', link: '/subjects/taxlaw/taxlaw1/03-08.md' },
              { text: '9.出口应税消费品的相关政策', link: '/subjects/taxlaw/taxlaw1/03-09.md' },
              { text: '10.征收管理', link: '/subjects/taxlaw/taxlaw1/03-10.md' }
            ]
          },
          {
            text: '三、城市维护建设税',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.城市维护建设税概述', link: '/subjects/taxlaw/taxlaw1/04-01.md' },
              { text: '2.纳税人', link: '/subjects/taxlaw/taxlaw1/04-02.md' },
              { text: '3.征税范围', link: '/subjects/taxlaw/taxlaw1/04-03.md' },
              { text: '4.税率', link: '/subjects/taxlaw/taxlaw1/04-04.md' },
              { text: '5.税收优惠', link: '/subjects/taxlaw/taxlaw1/04-05.md' },
              { text: '6.计税依据', link: '/subjects/taxlaw/taxlaw1/04-06.md' },
              { text: '7.应纳税额的计算', link: '/subjects/taxlaw/taxlaw1/04-07.md' },
              { text: '8.征收管理', link: '/subjects/taxlaw/taxlaw1/04-08.md' }
            ]
          },
          {
            text: '四、土地增值税',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.土地增值税概述', link: '/subjects/taxlaw/taxlaw1/05-01.md' },
              { text: '2.纳税人', link: '/subjects/taxlaw/taxlaw1/05-02.md' },
              { text: '3.征税范围和税率', link: '/subjects/taxlaw/taxlaw1/05-03.md' },
              { text: '4.计税依据', link: '/subjects/taxlaw/taxlaw1/05-04.md' },
              { text: '5.税收优惠', link: '/subjects/taxlaw/taxlaw1/05-05.md' },
              { text: '6.应纳税额的计算', link: '/subjects/taxlaw/taxlaw1/05-06.md' },
              { text: '7.房地产开发企业土地增值税清算', link: '/subjects/taxlaw/taxlaw1/05-07.md' },
              { text: '8.征收管理', link: '/subjects/taxlaw/taxlaw1/05-08.md' }
            ]
          },
          {
            text: '五、资源税',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.资源税概述', link: '/subjects/taxlaw/taxlaw1/06-01.md' },
              { text: '2.纳税人', link: '/subjects/taxlaw/taxlaw1/06-02.md' },
              { text: '3.税目和税率', link: '/subjects/taxlaw/taxlaw1/06-03.md' },
              { text: '4.税收优惠', link: '/subjects/taxlaw/taxlaw1/06-04.md' },
              { text: '5.计税依据和应纳税额的计算', link: '/subjects/taxlaw/taxlaw1/06-05.md' },
              { text: '6.征收管理', link: '/subjects/taxlaw/taxlaw1/06-06.md' },
              { text: '7.水资源税', link: '/subjects/taxlaw/taxlaw1/06-07.md' }
            ]
          },
          {
            text: '六、车辆购置税',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.车辆购置税概述', link: '/subjects/taxlaw/taxlaw1/07-01.md' },
              { text: '2.纳税人', link: '/subjects/taxlaw/taxlaw1/07-02.md' },
              { text: '3.征税范围和税率', link: '/subjects/taxlaw/taxlaw1/07-03.md' },
              { text: '4.税收优惠', link: '/subjects/taxlaw/taxlaw1/07-04.md' },
              { text: '5.计税依据', link: '/subjects/taxlaw/taxlaw1/07-05.md' },
              { text: '6.应纳税额的计算', link: '/subjects/taxlaw/taxlaw1/07-06.md' },
              { text: '7.征收管理', link: '/subjects/taxlaw/taxlaw1/07-07.md' }
            ]
          },
          {
            text: '七、环境保护税',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.环境保护税概述', link: '/subjects/taxlaw/taxlaw1/08-01.md' },
              { text: '2.纳税人和征税对象', link: '/subjects/taxlaw/taxlaw1/08-02.md' },
              { text: '3.税目和税率', link: '/subjects/taxlaw/taxlaw1/08-03.md' },
              { text: '4.税收优惠', link: '/subjects/taxlaw/taxlaw1/08-04.md' },
              { text: '5.计税依据与应纳税额计算', link: '/subjects/taxlaw/taxlaw1/08-05.md' },
              { text: '6.征收管理', link: '/subjects/taxlaw/taxlaw1/08-06.md' }
            ]
          },
          {
            text: '八、烟叶税',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.烟叶税概述', link: '/subjects/taxlaw/taxlaw1/09-01.md' },
              { text: '2.纳税人', link: '/subjects/taxlaw/taxlaw1/09-02.md' },
              { text: '3.征税对象和税率', link: '/subjects/taxlaw/taxlaw1/09-03.md' },
              { text: '4.计税依据', link: '/subjects/taxlaw/taxlaw1/09-04.md' },
              { text: '5.应纳税额的计算', link: '/subjects/taxlaw/taxlaw1/09-05.md' },
              { text: '6.征收管理', link: '/subjects/taxlaw/taxlaw1/09-06.md' }
            ]
          },
          {
            text: '九、关税',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.关税概述', link: '/subjects/taxlaw/taxlaw1/10-01.md' },
              { text: '2.纳税人、扣缴义务人和征税对象', link: '/subjects/taxlaw/taxlaw1/10-02.md' },
              { text: '3.税率及税率适用', link: '/subjects/taxlaw/taxlaw1/10-03.md' },
              { text: '4.计税价格', link: '/subjects/taxlaw/taxlaw1/10-04.md' },
              { text: '5.应纳税额计算', link: '/subjects/taxlaw/taxlaw1/10-05.md' },
              { text: '6.税收优惠', link: '/subjects/taxlaw/taxlaw1/10-06.md' },
              { text: '7.征收管理', link: '/subjects/taxlaw/taxlaw1/10-07.md' }
            ]
          },
          {
            text: '十、社会保险费',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.社会保险费概述', link: '/subjects/taxlaw/taxlaw1/11-01.md' },
              { text: '2.基本养老保险费', link: '/subjects/taxlaw/taxlaw1/11-02.md' },
              { text: '3.基本医疗保险费和生育保险费', link: '/subjects/taxlaw/taxlaw1/11-03.md' },
              { text: '4.工伤保险费和职业伤害保障费', link: '/subjects/taxlaw/taxlaw1/11-04.md' },
              { text: '5.失业保险费', link: '/subjects/taxlaw/taxlaw1/11-05.md' },
              { text: '6.社会保险费征缴', link: '/subjects/taxlaw/taxlaw1/11-06.md' }
            ]
          },
          {
            text: '十一、非税收入',
            link: '/subjects/taxlaw/taxlaw1/123.md',
            collapsed: true,
            items: [
              { text: '1.非税收入概述', link: '/subjects/taxlaw/taxlaw1/12-01.md' },
              { text: '2.行政事业性收费', link: '/subjects/taxlaw/taxlaw1/12-02.md' },
              { text: '3.政府性基金', link: '/subjects/taxlaw/taxlaw1/12-03.md' },
              { text: '4.国有资源(资产)有偿使用收入', link: '/subjects/taxlaw/taxlaw1/12-04.md' },
              { text: '5.其他类别的非税收入', link: '/subjects/taxlaw/taxlaw1/12-05.md' }
            ]
          },
          ]
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
          { text: '10.28', link: 'waikan/10-12eli/eli10.28.md' },
          { text: '11.4', link: 'waikan/10-12eli/eli11.4.md' },
          { text: '11.5', link: 'waikan/10-12eli/eli11.5.md' },
          { text: '11.6', link: 'waikan/10-12eli/eli11.6.md' },
          { text: '11.7', link: 'waikan/10-12eli/eli11.7.md' },
          { text: '11.8', link: 'waikan/10-12eli/eli11.8.md' },
          { text: '11.11', link: 'waikan/10-12eli/eli11.11.md' },
          { text: '11.12', link: 'waikan/10-12eli/eli11.12.md' },
          { text: '11.13', link: 'waikan/10-12eli/eli11.13.md' },
          { text: '11.14', link: 'waikan/10-12eli/eli11.14.md' },
          { text: '11.15', link: 'waikan/10-12eli/eli11.15.md' },
          { text: '11.18', link: 'waikan/10-12eli/eli11.18.md' },
          { text: '11.19', link: 'waikan/10-12eli/eli11.19.md' },
          { text: '11.20', link: 'waikan/10-12eli/eli11.20.md' },
          { text: '11.21', link: 'waikan/10-12eli/eli11.21.md' },
          { text: '11.22', link: 'waikan/10-12eli/eli11.22.md' },
          { text: '11.25', link: 'waikan/10-12eli/eli11.25.md' },
          { text: '11.26', link: 'waikan/10-12eli/eli11.26.md' },
          { text: '2', link: '/A/a1/a1-2' },
        ],
      },
      {
        text: '经济学人',
        items: [
          { text: '说明', link: 'waikan/jjxr/首页.md' },
          { text: '10.28', link: 'waikan/jjxr/10.28.md' },
          { text: '11.4', link: 'waikan/jjxr/11.4.md' },
          { text: '11.5', link: 'waikan/jjxr/jjxr11.5.md' },
          { text: '11.6', link: 'waikan/jjxr/jjxr11.6.md' },
          { text: '11.7', link: 'waikan/jjxr/jjxr11.7.md' },
          { text: '11.8', link: 'waikan/jjxr/jjxr11.8.md' },
          { text: '11.11', link: 'waikan/jjxr/jjxr11.11.md' },
          { text: '11.12', link: 'waikan/jjxr/jjxr11.12.md' },
          { text: '11.13', link: 'waikan/jjxr/jjxr11.13.md' },
          { text: '11.14', link: 'waikan/jjxr/jjxr11.14.md' },
          { text: '11.15', link: 'waikan/jjxr/jjxr11.15.md' },
          { text: '11.18', link: 'waikan/jjxr/jjxr11.18.md' },
          { text: '11.19', link: 'waikan/jjxr/jjxr11.19.md' },
          { text: '11.20', link: 'waikan/jjxr/jjxr11.20.md' },
          { text: '11.21', link: 'waikan/jjxr/jjxr11.21.md' },
          { text: '11.22', link: 'waikan/jjxr/jjxr11.22.md' },
          { text: '11.25', link: 'waikan/jjxr/jjxr11.25.md' },
          { text: '11.26', link: 'waikan/jjxr/jjxr11.26.md' },

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
          { text: '同位语从句', link: 'yufa/同位语从句.md' },
          { text: '非谓语动词', link: 'yufa/非谓语动词.md' },
          { text: '主语从句', link: 'yufa/主语从句.md' },
          { text: '形式主语/宾语', link: 'yufa/形式主语｜宾语.md' },
          { text: 'There be 句型', link: 'yufa/There be 句型.md' },
          { text: '虚拟语气', link: 'yufa/虚拟语气.md' },
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
