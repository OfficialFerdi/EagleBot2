const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let makerEmbed = new Discord.RichEmbed()
    .setTitle("Creator of the bot: OfficieelFerdi#5109")
    .setDescription("In Visual studio code (with javascript)")
    .setColor("#34d0f9")

    message.channel.send(makerEmbed);

}

module.exports.help = {
  name: "created"
}