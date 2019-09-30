
const TelegramBot = require('node-telegram-bot-api');
const token = '974093961:AAFPIzJFgudGkZWQO8F76Y3a5TotIROz8ic';
const bot = new TelegramBot(token, {polling: true});
//const url = 'http://api.openweathermap.org/data/2.5/find?q=Kiev&type=like&APPID=bb7bb415a2bc3847616afb5a120f94a8';

bot.onText(/\/start/, (msg, match) => {


     chatId = msg.chat.id;
    
      bot.sendMessage(chatId,"Hello World!!!");



});