const {
    Client,
    GatewayIntentBits: {
        Guilds,
        GuildMessages,
        MessageContent
    }
} = require("discord.js");
const http = require('http');
const html = require('fs').readFileSync('html/index.html');
const options = {
    intents: [Guilds, GuildMessages, MessageContent],
};
const client = new Client(options);

http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
})
.listen(8080);

client.login(process.env.DiscordBotToken);
client.on('ready', () => {
    console.log('Oh, it\'s all ohio?');
});
client.on('messageCreate', message => {
    if(message.author.bot) return;
    if(message.content === "//hello"){
        message.channel.send("はろー");
    }
});