/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: 'push-plus',
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: false,

    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,

    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: false,

    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,

    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,

    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: false,

    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,

    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
  // 使用微信测试号：公众号APP_ID
  APP_ID: '',
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '福州',
  CITY: '闽侯',
  IS_SHOW_COLOR: false,
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝早上好~记得带🔑!',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'c5eca7dfa93b4754bbe50a411380cc35',   // c5eca7dfa93b4754bbe50a411380cc35
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001', // 0001
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2004', date: '01-02',
        },
         {
          type: '生日', name: '小王', year: '1999', date: '11-07',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-02',
        },{
          type: '节日', name: '我们相见的日子', year: '2023', date: '04-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 恋爱纪念日
        { keyword: 'love_day', date: '2022-12-03' },
        { keyword: 'love_day', date: '2022-12-03' },
      ],
    },
  ],
  SLOT_LIST: [
    // 快递
    {
      keyword: 'no_express',
      contents: ''
    },
    // 外卖
    {
      keyword: 'waimai',
      contents: ''
    },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],
    }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '4baa2f2fa8194d6892e100e9fc2d5f71', //4baa2f2fa8194d6892e100e9fc2d5f71
    }
  ],

}

module.exports = USER_CONFIG

