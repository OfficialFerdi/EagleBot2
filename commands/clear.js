const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.find('name', `EagleAccess`)) return message.channel.send(":warning: You don't have permissions for this command. Only Staff can use this. :warning:")
    if (!args[0]) return message.channel.send("no");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`:white_check_mark: Deleted ${args[0]} messages.`).then(msg => msg.delete(3000));
    });

}

module.exports.help = {
  name: "clear"
}