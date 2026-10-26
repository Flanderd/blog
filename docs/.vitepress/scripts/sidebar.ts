import type { DefaultTheme } from "vitepress/types";

// 侧边栏配置
export default {
  'taxlaw': [
    {text:'概述',link:'/taxlaw/概述.md'},
    {text: '《税法一》',
        collapsed: false,
        items: [
          { text: '一、增值税★★★',
            collapsed: true,
              items:[
                { text: '0.本章导读', link: '/taxlaw/税法一/01 增值税/0.本章导读.md' },
                { text: '1.增值税概述', link: '/taxlaw/税法一/01 增值税/1.增值税概述.md' },
                { text: '2.纳税人和扣缴义务人', link: '/taxlaw/税法一/01 增值税/2.纳税人和扣缴义务人.md' },
                { text: '3.征税范围', link: '/taxlaw/税法一/01 增值税/3.征税范围.md' },
                { text: '4.税率和征收率', link: '/taxlaw/税法一/01 增值税/4.税率和征收率.md' },
                { text: '5.税收优惠', link: '/taxlaw/税法一/01 增值税/5.税收优惠.md' },
                { text: '6.一般计税方法应纳税额计算', link: '/taxlaw/税法一/01 增值税/6.一般计税方法应纳税额计算.md' },
                { text: '7.简易计税方法应纳税额计算', link: '/taxlaw/税法一/01 增值税/7.简易计税方法应纳税额计算.md' },
                { text: '8.进口环节增值税政策', link: '/taxlaw/税法一/01 增值税/8.进口环节增值税政策.md' },
                { text: '9.出口业务增值税政策', link: '/taxlaw/税法一/01 增值税/9.出口业务增值税政策.md' },
                { text: '10.预缴税款及特定应税交易的增值税政策', link: '/taxlaw/税法一/01 增值税/10.预缴税款及特定应税交易的增值税政策.md' },
                { text: '11.征收管理', link: '/taxlaw/税法一/01 增值税/11.征收管理.md' }
              ]
          },
          {text: '二、消费税★★',
            collapsed: true,
            items: [
              { text: '0.本章导读', link: '/taxlaw/税法一/02 消费税/0.本章导读.md' },
              { text: '1.消费税概述', link: '/taxlaw/税法一/02 消费税/1.消费税概述.md' },
              { text: '2.纳税人和扣缴义务人', link: '/taxlaw/税法一/02 消费税/2.纳税人和扣缴义务人.md' },
              { text: '3.税目和税率', link: '/taxlaw/税法一/02 消费税/3.税目和税率.md' },
              { text: '4.计税依据', link: '/taxlaw/税法一/02 消费税/4.计税依据.md' },
              { text: '5.生产销售应税消费品应纳税额的计算', link: '/taxlaw/税法一/02 消费税/5.生产销售应税消费品应纳税额的计算.md' },
              { text: '6.委托加工应税消费品应纳税额的计算', link: '/taxlaw/税法一/02 消费税/6.委托加工应税消费品应纳税额的计算.md' },
              { text: '7.进口应税消费品应纳消费税的计算', link: '/taxlaw/税法一/02 消费税/7.进口应税消费品应纳消费税的计算.md' },
              { text: '8.批发、零售环节应纳消费税的计算', link: '/taxlaw/税法一/02 消费税/8.批发、零售环节应纳消费税的计算.md' },
              { text: '9.出口应税消费品的相关政策', link: '/taxlaw/税法一/02 消费税/9.出口应税消费品的相关政策.md' },
              { text: '10.征收管理', link: '/taxlaw/税法一/02 消费税/10.征收管理.md' }
            ]
          },
          {text: '三、城市维护建设税',
            collapsed: true,
            items: [
              { text: '1.城市维护建设税概述', link: '/taxlaw/税法一/03 城市维护建设税/1.城市维护建设税概述.md' },
              { text: '2.纳税人', link: '/taxlaw/税法一/03 城市维护建设税/2.纳税人.md' },
              { text: '3.征税范围', link: '/taxlaw/税法一/03 城市维护建设税/3.征税范围.md' },
              { text: '4.税率', link: '//taxlaw/税法一/03 城市维护建设税/4.税率.md' },
              { text: '5.税收优惠', link: '/taxlaw/税法一/03 城市维护建设税/5.税收优惠.md' },
              { text: '6.计税依据', link: '/taxlaw/税法一/03 城市维护建设税/6.计税依据.md' },
              { text: '7.应纳税额的计算', link: '/taxlaw/税法一/03 城市维护建设税/7.应纳税额的计算.md' },
              { text: '8.征收管理', link: '/taxlaw/税法一/03 城市维护建设税/8.征收管理.md' }
            ]
          },
          {text: '四、土地增值税',
            collapsed: true,
            items: [
              { text: '1.土地增值税概述', link: '/taxlaw/税法一/04 土地增值税/1.土地增值税概述.md' },
              { text: '2.纳税人', link: '/taxlaw/税法一/04 土地增值税/2.纳税人.md'},
              { text: '3.征税范围和税率', link: '/taxlaw/税法一/04 土地增值税/3.征税范围和税率.md' },
              { text: '4.计税依据', link: '/taxlaw/税法一/04 土地增值税/4.计税依据.md' },
              { text: '5.税收优惠', link: '/taxlaw/税法一/04 土地增值税/5.税收优惠.md' },
              { text: '6.应纳税额的计算', link: '/taxlaw/税法一/04 土地增值税/6.应纳税额的计算.md' },
              { text: '7.房地产开发企业土地增值税清算', link: '/taxlaw/税法一/04 土地增值税/7.房地产开发企业土地增值税清算.md' },
              { text: '8.征收管理', link: '/taxlaw/税法一/04 土地增值税/8.征收管理.md' }
            ]
          },
          {text: '五、资源税',
            collapsed: true,
            items: [
              { text: '1.资源税概述', link: '/taxlaw/税法一/05 资源税/1.资源税概述.md' },
              { text: '2.纳税人', link: '/taxlaw/税法一/05 资源税/2.纳税人.md' },
              { text: '3.税目和税率', link: '/taxlaw/税法一/05 资源税/3.税目和税率.md' },
              { text: '4.税收优惠', link: '/taxlaw/税法一/05 资源税/4.税收优惠.md' },
              { text: '5.计税依据和应纳税额的计算', link: '/taxlaw/税法一/05 资源税/5.计税依据和应纳税额的计算.md' },
              { text: '6.征收管理', link: '/taxlaw/税法一/05 资源税/6.征收管理.md' },
              { text: '7.水资源税', link: '/taxlaw/税法一/05 资源税/7.水资源税.md' }
            ]
          },
          {text: '六、车辆购置税',
            collapsed: true,
            items: [
              { text: '1.车辆购置税概述', link: '/taxlaw/税法一/06 车辆购置税/1.车辆购置税概述.md' },
              { text: '2.纳税人', link: '/taxlaw/税法一/06 车辆购置税/2.纳税人.md' },
              { text: '3.征税范围和税率', link: '/taxlaw/税法一/06 车辆购置税/3.征税范围和税率.md' },
              { text: '4.税收优惠', link: '/taxlaw/税法一/06 车辆购置税/4.税收优惠.md' },
              { text: '5.计税依据', link: '/taxlaw/税法一/06 车辆购置税/5.计税依据.md' },
              { text: '6.应纳税额的计算', link: '/taxlaw/税法一/06 车辆购置税/6.应纳税额的计算.md' },
              { text: '7.征收管理', link: '/taxlaw/税法一/06 车辆购置税/7.征收管理.md' }
            ]
          },
          {text: '七、环境保护税',
            collapsed: true,
            items: [
              { text: '1.环境保护税概述', link: '/taxlaw/税法一/07 环境保护税/1.环境保护税概述.md' },
              { text: '2.纳税人和征税对象', link: '/taxlaw/税法一/07 环境保护税/2.纳税人和征税对象.md' },
              { text: '3.税目和税率', link: '/taxlaw/税法一/07 环境保护税/3.税目和税率.md' },
              { text: '4.税收优惠', link: '/taxlaw/税法一/07 环境保护税/4.税收优惠.md' },
              { text: '5.计税依据与应纳税额计算', link: '/taxlaw/税法一/07 环境保护税/5.计税依据与应纳税额计算.md' },
              { text: '6.征收管理', link: '/taxlaw/税法一/07 环境保护税/6.征收管理.md' }
            ]
          },
          {text: '八、烟叶税',
            collapsed: true,
            items: [
              { text: '1.烟叶税概述', link: '/taxlaw/税法一/08 烟叶税/1.烟叶税概述.md' },
              { text: '2.纳税人', link: '/taxlaw/税法一/08 烟叶税/2.纳税人.md' },
              { text: '3.征税对象和税率', link: '/taxlaw/税法一/08 烟叶税/3.征税对象和税率.md' },
              { text: '4.计税依据', link: '/taxlaw/税法一/08 烟叶税/4.计税依据.md' },
              { text: '5.应纳税额的计算', link: '/taxlaw/税法一/08 烟叶税/5.应纳税额的计算.md' },
              { text: '6.征收管理', link: '/taxlaw/税法一/08 烟叶税/6.征收管理.md' }
            ]
          },
          {text: '九、关税',
            collapsed: true,
            items: [
              { text: '1.关税概述', link: '/taxlaw/税法一/09 关税/1.关税概述.md' },
              { text: '2.纳税人、扣缴义务人和征税对象', link: '/taxlaw/税法一/09 关税/2.纳税人、扣缴义务人和征税对象.md' },
              { text: '3.税率及税率适用', link: '/taxlaw/税法一/09 关税/3.税率及税率适用.md' },
              { text: '4.计税价格', link: '/taxlaw/税法一/09 关税/4.计税价格.md' },
              { text: '5.应纳税额计算', link: '/taxlaw/税法一/09 关税/5.应纳税额计算.md' },
              { text: '6.税收优惠', link: '/taxlaw/税法一/09 关税/6.税收优惠.md' },
              { text: '7.征收管理', link: '/taxlaw/税法一/09 关税/7.征收管理.md' }
            ]
          },
          {text: '十、社会保险费',
            collapsed: true,
            items: [
              { text: '1.社会保险费概述', link: '/taxlaw/税法一/10 社会保险费/1.社会保险费概述.md' },
              { text: '2.基本养老保险费', link: '/taxlaw/税法一/10 社会保险费/2.基本养老保险费.md' },
              { text: '3.基本医疗保险费和生育保险费', link: '/taxlaw/税法一/10 社会保险费/3.基本医疗保险费和生育保险费.md' },
              { text: '4.工伤保险费和职业伤害保障费', link: '/taxlaw/税法一/10 社会保险费/4.工伤保险费和职业伤害保障费.md '},
              { text: '5.失业保险费', link: '/taxlaw/税法一/10 社会保险费/5.失业保险费.md' },
              { text: '6.社会保险费征缴', link: '/taxlaw/税法一/10 社会保险费/6.社会保险费征缴.md' }
            ]
          },
          {text: '十一、非税收入',
            collapsed: true,
            items: [
              { text: '1.非税收入概述', link: '/taxlaw/税法一/11 非税收入/1.非税收入概述.md' },
              { text: '2.行政事业性收费', link: '/taxlaw/税法一/11 非税收入/2.行政事业性收费.md' },
              { text: '3.政府性基金', link: '/taxlaw/税法一/11 非税收入/3.政府性基金.md' },
              { text: '4.国有资源(资产)有偿使用收入', link: '/taxlaw/税法一/11 非税收入/4.国有资源(资产)有偿使用收入.md' },
              { text: '5.其他类别的非税收入', link: '/taxlaw/税法一/11 非税收入/5.其他类别的非税收入.md' }
            ]
          },
          ]
      },
    {text: '《税法二》',
      collapsed: false,
      items: [
        {text: '一、企业所得税★★★',
          collapsed: true,
          items: [
            { text: '1.概述', link: '/taxlaw/税法二/01 企业所得税/1.概述.md' },
            { text: '2.纳税人、征税对象与税率', link: '/taxlaw/税法二/01 企业所得税/2.纳税人、征税对象与税率.md' },
            { text: '3.应纳税所得额的计算', link: '/taxlaw/税法二/01 企业所得税/3.应纳税所得额的计算.md' },
            { text: '4.资产的所得税处理', link: '/taxlaw/税法二/01 企业所得税/4.资产的所得税处理.md' },
            { text: '5.资产损失税前扣除的所得税处理', link: '/taxlaw/税法二/01 企业所得税/5.资产损失税前扣除的所得税处理.md' },
            { text: '6.企业重组的所得税处理', link: '/taxlaw/税法二/01 企业所得税/6.企业重组的所得税处理.md' },
            { text: '7.房地产开发经营业务的所得税处理', link: '/taxlaw/税法二/01 企业所得税/7.房地产开发经营业务的所得税处理.md' },
            { text: '8.减免税优惠', link: '/taxlaw/税法二/01 企业所得税/8.减免税优惠.md' },
            { text: '9.应纳税额的计算', link: '/taxlaw/税法二/01 企业所得税/9.应纳税额的计算.md' },
            { text: '10.特别纳税调整', link: '/taxlaw/税法二/01 企业所得税/10.特别纳税调整.md' },
            { text: '11.征收管理', link: '/taxlaw/税法二/01 企业所得税/11.征收管理.md' }
          ]
        },
        {text: '二、个人所得税★★★',
          collapsed: true,
          items: [
            { text: '1.概述', link: '/taxlaw/税法二/02 个人所得税/1.概述.md' },
            { text: '2.征税对象', link: '/taxlaw/税法二/02 个人所得税/2.征税对象.md' },
            { text: '3.纳税人、税率与应纳税所得额的确定', link: '/taxlaw/税法二/02 个人所得税/3.纳税人、税率与应纳税所得额的确定.md' },
            { text: '4.减免税优惠', link: '/taxlaw/税法二/02 个人所得税/4.减免税优惠.md' },
            { text: '5.应纳税额的计算', link: '/taxlaw/税法二/02 个人所得税/5.应纳税额的计算.md' },
            { text: '6.个人取得境外所得的计税方法和申报管理', link: '/taxlaw/税法二/02 个人所得税/6.个人取得境外所得的计税方法和申报管理.md' },
            { text: '7.征收管理', link: '/taxlaw/税法二/02 个人所得税/7.征收管理.md' }
      ]
    },
    {
      text: '三、国际税收',
      collapsed: true,
      items: [
      { text: '1.概述', link: '/taxlaw/税法二/03 国际税收/1.概述.md' },
      { text: '2.国际税收协定', link: '/taxlaw/税法二/03 国际税收/2.国际税收协定.md' },
      { text: '3.非居民企业税收管理', link: '/taxlaw/税法二/03 国际税收/3.非居民企业税收管理.md' },
      { text: '4.国际税收抵免制度', link: '/taxlaw/税法二/03 国际税收/4.国际税收抵免制度.md' },
      { text: '5.国际避税与反避税', link: '/taxlaw/税法二/03 国际税收/5.国际避税与反避税.md' },
      { text: '6.国际税收征管协作', link: '/taxlaw/税法二/03 国际税收/6.国际税收征管协作.md' }
      ]
    },
    {
      text: '四、印花税',
      collapsed: true,
      items: [
      { text: '1.概述', link: '/taxlaw/税法二/04 印花税/1.概述.md' },
      { text: '2.征税范围、纳税人与税率', link: '/taxlaw/税法二/04 印花税/2.征税范围、纳税人与税率.md' },
      { text: '3.减免税优惠', link: '/taxlaw/税法二/04 印花税/3.减免税优惠.md' },
      { text: '4.计税依据与应纳税额的计算', link: '/taxlaw/税法二/04 印花税/4.计税依据与应纳税额的计算.md' },
      { text: '5.征收管理', link: '/taxlaw/税法二/04 印花税/5.征收管理.md' },
      { text: '6.应纳税额的计算', link: '/taxlaw/税法二/04 印花税/6.应纳税额的计算.md' }
      ]
    },
    {
      text: '五、房产税',
      collapsed: true,
      items: [
      { text: '1.概述', link: '/taxlaw/税法二/05 房产税/1.概述.md' },
      { text: '2.征税范围、纳税人与税率', link: '/taxlaw/税法二/05 房产税/2.征税范围、纳税人与税率.md' },
      { text: '3.减免税优惠', link: '/taxlaw/税法二/05 房产税/3.减免税优惠.md' },
      { text: '4.计税依据与应纳税额的计算', link: '/taxlaw/税法二/05 房产税/4.计税依据与应纳税额的计算.md' },
      { text: '5.征收管理', link: '/taxlaw/税法二/05 房产税/5.征收管理.md' }
      ]
    },
    {
      text: '六、车船税',
      collapsed: true,
      items: [
      { text: '1.概述', link: '/taxlaw/税法二/06 车船税/1.概述.md' },
      { text: '2.征税范围、纳税人、税目与税额', link: '/taxlaw/税法二/06 车船税/2.征税范围、纳税人、税目与税额.md' },
      { text: '3.减免税优惠', link: '/taxlaw/税法二/06 车船税/3.减免税优惠.md' },
      { text: '4.应纳税额的计算与代收代缴', link: '/taxlaw/税法二/06 车船税/4.应纳税额的计算与代收代缴.md' },
      { text: '5.征收管理', link: '/taxlaw/税法二/06 车船税/5.征收管理.md' }
      ]
    },
    {
      text: '七、契税',
      collapsed: true,
      items: [
      { text: '1.概述', link: '/taxlaw/税法二/07 契税/1.概述.md' },
      { text: '2.征税范围、纳税人与税率', link: '/taxlaw/税法二/07 契税/2.征税范围、纳税人与税率.md' },
      { text: '3.减免税优惠', link: '/taxlaw/税法二/07 契税/3.减免税优惠.md' },
      { text: '4.计税依据与应纳税额的计算', link: '/taxlaw/税法二/07 契税/4.计税依据与应纳税额的计算.md' },
      { text: '5.征收管理', link: '/taxlaw/税法二/07 契税/5.征收管理.md' }
      ]
    },
    {
      text: '八、城镇土地使用税',
      collapsed: true,
      items: [
      { text: '1.概述', link: '/taxlaw/税法二/08 城镇土地使用税/1.概述.md' },
      { text: '2.征税范围、纳税人与适用税额', link: '/taxlaw/税法二/08 城镇土地使用税/2.征税范围、纳税人与适用税额.md' },
      { text: '3.减免税优惠', link: '/taxlaw/税法二/08 城镇土地使用税/3.减免税优惠.md' },
      { text: '4.计税依据与应纳税额的计算', link: '/taxlaw/税法二/08 城镇土地使用税/4.计税依据与应纳税额的计算.md' },
      { text: '5.征收管理', link: '/taxlaw/税法二/08 城镇土地使用税/5.征收管理.md' }
      ]
    },
    {
      text: '九、耕地占用税',
      collapsed: true,
      items: [
      { text: '1.概述', link: '/taxlaw/税法二/09 耕地占用税/1.概述.md' },
      { text: '2.纳税人与征税范围', link: '/taxlaw/税法二/09 耕地占用税/2.纳税人与征税范围.md' },
      { text: '3.减免税优惠', link: '/taxlaw/税法二/09 耕地占用税/3.减免税优惠.md' }
      ]
    },
    {
      text: '十、船舶吨税',
      collapsed: true,
      items: [
      { text: '1.概述', link: '/taxlaw/税法二/10 船舶吨税/1.概述.md' },
      { text: '2.纳税人、征税范围与税率', link: '/taxlaw/税法二/10 船舶吨税/2.纳税人、征税范围与税率.md' },
      { text: '3.减免税优惠', link: '/taxlaw/税法二/10 船舶吨税/3.减免税优惠.md' },
      { text: '4.应纳税额的计算', link: '/taxlaw/税法二/10 船舶吨税/4.应纳税额的计算.md' },
      { text: '5.征收管理', link: '/taxlaw/税法二/10 船舶吨税/5.征收管理.md' }
      ]
    }
      ]
      },
    ],
  'caiwuguanli': [
      {text: '三、货币时间价值',
        collapsed:true,
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
      {text: '四、证券价值评估',
        collapsed:true,
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
      {text: '五、货币时间价值',
        collapsed:true,
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
    ],
  'yufa': [
      {text: 'Grammar Summary',
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
      {text: '每周积累',
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
      {text: 'Craft写作',
        items: [
          { text: '2010', link: '/A/a1/a1-1' },
          { text: '2021', link: '/A/a1/a1-2' },
        ],
      },
      { text: 'a2', link: '/A/a2' },
    ],
  
  'statistics': [
    { text: '统计学知识体系', link: '/statistics/index.md' },
    { text: '第一章 绪论与基本概念', link: '/statistics/01-绪论与基本概念.md' },
    { text: '第二章 数据与描述统计', link: '/statistics/02-数据与描述统计.md' },
    { text: '第三章 概率基础', link: '/statistics/03-概率基础.md' },
    { text: '第四章 随机变量与常见分布', link: '/statistics/04-随机变量与常见分布.md' },
    { text: '第五章 多维随机变量', link: '/statistics/05-多维随机变量.md' },
    { text: '第六章 大数定律与中心极限定理', link: '/statistics/06-大数定律与中心极限定理.md' },
    { text: '第七章 抽样分布', link: '/statistics/07-抽样分布.md' },
    { text: '第八章 参数估计', link: '/statistics/08-参数估计.md' },
    { text: '第九章 假设检验', link: '/statistics/09-假设检验.md' },
    { text: '第十章 方差分析', link: '/statistics/10-方差分析.md' },
    { text: '第十一章 回归分析', link: '/statistics/11-回归分析.md' },
    { text: '第十二章 非参数统计', link: '/statistics/12-非参数统计.md' },
    { text: '第十三章 时间序列与指数', link: '/statistics/13-时间序列与指数.md' },
    { text: '第十四章 抽样调查与贝叶斯', link: '/statistics/14-抽样调查与贝叶斯.md' },
  ],

  'math': [
    { text: '高等数学知识体系', link: '/math/index.md' },
    { text: '第一章 函数、极限与连续', link: '/math/01-函数极限与连续.md' },
    { text: '第二章 导数与微分', link: '/math/02-导数与微分.md' },
    { text: '第三章 微分中值定理与导数应用', link: '/math/03-微分中值定理与导数应用.md' },
    { text: '第四章 不定积分', link: '/math/04-不定积分.md' },
    { text: '第五章 定积分及其应用', link: '/math/05-定积分及其应用.md' },
    { text: '第六章 多元函数微分学', link: '/math/06-多元函数微分学.md' },
    { text: '第七章 重积分', link: '/math/07-重积分.md' },
    { text: '第八章 曲线积分与曲面积分', link: '/math/08-曲线积分与曲面积分.md' },
    { text: '第九章 无穷级数', link: '/math/09-无穷级数.md' },
    { text: '第十章 常微分方程', link: '/math/10-常微分方程.md' },
    { text: '第十一章 向量代数与空间解析几何', link: '/math/11-向量代数与空间解析几何.md' },
    { text: '第十二章 场论初步', link: '/math/12-场论初步.md' },
  ],

 } as DefaultTheme.Sidebar;
