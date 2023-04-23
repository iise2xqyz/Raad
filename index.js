const {
    Client,
    GatewayIntentBits: {
        Guilds,
        GuildMessages,
        MessageContent
    }
} = require("discord.js");
const cron = require('node-cron');
const setup = require('./features/server.js');
const options = {
    intents: [Guilds, GuildMessages, MessageContent],
};
const textArray = ["水曜日のたわけ" , "NUUUUN" , "バリエーションがすくない" , "444"];
const client = new Client(options);
//const scriptJs = fs.readFileSync('./html/js/script.js', 'UTF-8');
setup.serverSetUp();
client.login(process.env.DiscordBotToken);
client.on('ready', () => {
    console.log('Oh, it\'s all ohio?');
	client.user.setPresence({
		activities: [{ name: 'ぼっち・ざ・ろっく！を視聴中……………' }], 
		status: "online"
	});
});
cron.schedule('*/30 * * * *', () => {
	var x = getRandomInt(textArray.length);
	client.channels.cache.get('1098939024430862347').send(textArray[x]);
});
client.on('messageCreate', message => {
    if(message.author.bot) return;
    if(message.content === "//hello"){
        message.channel.send("はろー");
    }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}