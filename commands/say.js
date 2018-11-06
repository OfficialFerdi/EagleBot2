const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete();
    message.delete();
    if (!message.member.roles.find('id', `507287214284341252`)) return message.channel.send(":warning: You don't have permissions for this command. Only Devs and admins can use this. :warning:")
    return message.channel.send(`${args.join(" ")}`);

}

module.exports.help = {
  name: "say"
}