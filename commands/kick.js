const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send(":warning: Can't find the user, make sure to check your spelling mistake's. :warning:");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":warning: You don't have permissions for this command. Only Helper(s) or higher can use this. :warning:");
    if (kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(":warning: You can't kick this user, because they have the same permission as you. :warning:");

    let kickEmbed = new Discord.RichEmbed()
      .setTitle("KICKED")
      .setDescription("Kicked Users")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Tiime", message.createdAt)
      .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "modlogs");
    if (!kickChannel) return message.channel.send(":warning: The admins on the server didnt make **modlogs** make sure to contact the owner or admins on the server for this problem. :warning:");

    let kickedEmbed = new Discord.RichEmbed()
      .setTitle("KICKED")
      .setDescription("You are kicked!")
      .setColor("#e60000")
      .addField("Kicked by", `${message.author.username}`)
      .addField("Kick reason", `${kReason}`)
    message.channel.send(":white_check_mark: User has been kicked!").then(msg => { msg.delete(3000) });
    kUser.send(kickedEmbed);
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}