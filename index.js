const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Бот онлайн!'));
app.listen(3000, () => console.log('Веб-сервер запущен'));

function createBot() {
    const bot = mineflayer.createBot({
        host: 'JHJGJHHHSETRT3-RFQl.aternos.me', 
        port: 33420,
        username: 'Rodyapidar_24_7',
        version: false 
    });

    bot.on('spawn', () => console.log('Бот заспавнился!'));
    
    setInterval(() => {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);

    bot.on('end', () => {
        console.log('Вылет! Перезахожу...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log('Ошибка:', err));
}

createBot();
