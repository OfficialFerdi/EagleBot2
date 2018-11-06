const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

const BytesToSize = (input, precision) => {
    const Unit = ['', 'K', 'M', 'G', 'T', 'P'];
    let index = Math.floor(Math.log(input) / Math.log(1024));
    if (Unit >= Unit.length) return input + ' B';
    return (input / Math.pow(1024, index)).toFixed(precision) + ' ' + Unit[index] + 'B';
    };

    let MemoryUsing = BytesToSize(process.memoryUsage().rss, 3);
    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    let botEmbed = new Discord.RichEmbed()

    .setDescription("Bot Information")
    .setColor("##34d0f9")
    .addField("Name of the bot", `${bot.user.username}`)
    .addField("Ping", `${bot.pings[0]}ms`)
    .addField("Channels:", `${bot.channels.size}`)
    .addField("Memory using:", `${MemoryUsing}` )
    .addField("Online time",`Dagen: ${days} | Uren: ${hours} | Minuten: ${mins} | Seconden: ${realTotalSecs}`)
    .setFooter(`Botinfo | TheEagle`)
    .setTimestamp()
    
    message.channel.send(botEmbed);

}

module.exports.help = {
  name: "botinfo"
}