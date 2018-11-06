const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

    let reviewmessage = args.slice(0).join(" ");
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.content.startsWith("/suggestion")) return;
      if (!args[0]) return message.channel.send("Usage: " + prefix + "suggestion <message>");

    let suggestionEmbed = new Discord.RichEmbed()
    .setTitle(`📦 Suggestion 📦`)
    .setColor(`#006699`)
    .setDescription("Suggestions \n" + `\n` + `\n` + `**Username:** ${message.author.tag} \n Suggestion: ${reviewmessage}\n` + `Thank you for your suggestion! if you have any suggestion then do /suggestion <message>.`)

    let suggestionchannel = message.guild.channels.find('name', `suggestions`)
    if(!suggestionchannel) return message.channel.send(":warning: The admins on the server didnt make **suggestions** make sure to contact the owner or admins on the server for this problem. :warning:")

    message.delete();
    message.author.send(":white_check_mark: Thank you for your suggestion to help the discord server better! if you have still any questions, then do /feedback <message> to contact with the leads.")
    suggestionchannel.send(suggestionEmbed);

}

module.exports.help = {
  name: "suggestion"
}