/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb5281576c0b35b8a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2a6aa74a415eda7e6b80bb3b1588ba57',

  PROVINCE: '山东',
  CITY: '潍坊',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oWR05vrqZtGp8vVGZcLT61XNC0i0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AKSBz9R6WdvxuilyOwbifRjd5-vBUjC-Q4rxdY4QQ0c',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-29',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'you', year: '2001', date: '12-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2025-06-23' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oWR05vjW1OTekNBsuGbD0XJXvfek',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AKSBz9R6WdvxuilyOwbifRjd5-vBUjC-Q4rxdY4QQ0c',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-29',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'you', year: '2001', date: '12-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2025-06-23' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'wxbDiGyuUA0xvfMFx8M648ZEEmncRht0AN25gv1uurI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oWR05vjW1OTekNBsuGbD0XJXvfek',
    }
  ],

}

module.exports = USER_CONFIG

