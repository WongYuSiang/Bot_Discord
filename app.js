const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '嗨') {
    msg.reply('嗨');
  }
  if (msg.content === '加油') {
      msg.reply('嗚姆！！！');
  }
});

bot.login(config.token);
