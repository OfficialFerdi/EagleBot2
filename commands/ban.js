const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send(":warning: Can't find the user, make sure to check your spelling mistake's. :warning:")
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":warning: You don't have permissions for this command. Only Moderator(s) or higher can use this. :warning:");
  if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(":warning: You can't ban this user, because they have the same permission as you. :warning:");

  let banEmbed = new Discord.RichEmbed()
    .setTitle("BANNED")
    .setDescription("Banned Users")
    .setColor("#3333ff")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Ban time", `PERM-BAN`)
    .addField("Reason", bReason);

  let banchannel = message.guild.channels.find('name', `modlogs`);
  if (!banchannel) return message.channel.send(":warning: The admins on the server didnt make **modlogs** make sure to contact the owner or admins on the server for this problem. :warning:")

  let BannedEmbed = new Discord.RichEmbed()
    .setTitle("BANNED")
    .setDescription("You have been banned on the Discord server. You can't appeal for an unban at the moment.")
    .setColor("#e60000")
    .addField("Banned By", `<@${message.author.id}>`)
    .addField("Reason of you ban", bReason)
    .addField("Your ban time", `PERM-BAN`)
  await bUser.send(BannedEmbed);

  message.channel.send(":white_check_mark: User has been banned!").then(msg => { msg.delete(5000) });
  message.delete()
  message.guild.member(bUser).ban(bReason);
  banchannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}