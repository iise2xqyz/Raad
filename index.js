const {
    Client,
    GatewayIntentBits: {
        Guilds,
        GuildMessages,
        MessageContent
    }
} = require("discord.js");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const http = require('http');
const html = require('fs').readFileSync('html/index.html');
const options = {
    intents: [Guilds, GuildMessages, MessageContent],
};
const textArray = ["水曜日のたわけ" , "NUUUUN" , "バリエーションがすくない" , "444"];
const client = new Client(options);
const cron = require('node-cron');
cron.schedule('*/30 * * * *', () => {
	var x = getRandomInt(textArray.length);
	client.channels.cache.get('1098939024430862347').send(textArray[x]);
});
http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
})
.listen(8080);

client.login(process.env.DiscordBotToken);
client.on('ready', () => {
    console.log('Oh, it\'s all ohio?');
	client.user.setPresence({
		activities: [{ name: 'ぼっち・ざ・ろっく！を視聴中……………' }], 
		status: "online"
	});
});

client.on('messageCreate', message => {
    if(message.author.bot) return;
    if(message.content === "//hello"){
        message.channel.send("はろー");
    }
});