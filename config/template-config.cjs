/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '宝贝早上好呀~记得带🔑',
    desc: `
{{date.DATA}} 

美好的一天从**我爱你**开始~!

近些天要注意清淡饮食和休息哦~

达英到了的话要和我说!

下面是**闽侯县**今天的天气~

天气：**{{weather.DATA}}**

气温: **{{min_temperature.DATA}} ~ {{max_temperature.DATA}}**

男友提示: **{{notice.DATA}}哦~**

---

未拿快递: **{{no_express.DATA}}**

---

今天是我们恋爱的第**{{love_day.DATA}}**天

{{birthday_message.DATA}}

--- 

{{note_en.DATA}}
{{note_ch.DATA}}
    `
  }, 
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
      
    `
  },
]

module.exports = TEMPLATE_CONFIG
