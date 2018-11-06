const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

    let fUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.roles.find('name', 'Lead')) return message.channel.send(":warning: You don't have permissions for this command. Only Lead(s) can do this. :warning:");
    if(!fUser) return message.channel.send(":warning: Can't find the user, make sure to check your spelling mistake's. :warning:");
    let fReason = args.join(" ").slice(22);

    let dmEmbed = new Discord.RichEmbed()
    .setTitle("✅ Feedback processed ✅")
    .setDescription(`**Hello, ${fUser}!** \nThank you for sending your feedback. Your feedback has been processed! \nSended by: ${message.author.tag} \nReason of the process: ${fReason} \n\nIf you have a new feedback, you can use the command /feedback <message> for a new feedback!`)
    .setColor("#0099cc")
    .setFooter("Feedback | TheEagle")
    .setTimestamp()

    message.delete();
    message.channel.send(":white_check_mark: Sended!")
    fUser.send(dmEmbed);


}

module.exports.help = {
  name: "send"
}