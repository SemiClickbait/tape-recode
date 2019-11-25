const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "%"

client.on('ready', () => {
    // deprecated - do not change : client.user.setStatus('available');
    console.log("Logged in as " + client.user.tag);
    client.user.setPresence({
        game: {
            name: 'Tape Recode',
            type: 0
        }
    });
});

client.on("message", msg => {
  if (msg.content === prefix + "ping") {
    msg.channel.send(new Date().getTime() - msg.createdTimestamp + " ms");
  }
});

client.login(process.env.TOKEN);
