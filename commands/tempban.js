const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":warning: You don't have permissions for this command. Only Moderator(s) or highers can use this. :warning:");

    var tbUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!tbUser) return message.channel.send(":warning: Can't find the user, make sure to check your spelling mistake's. :warning:")

    if (tbUser.hasPermission("BAN_MEMBERS")) return message.channel.send(":warning: You can't temp-ban this user, because they have the same permission as you. :warning:")

    var tbReason = args.join(" ").slice(22);

    if (!tbReason) return message.channel.send(":warning: Give a reason for the ban. :warning:");

    var tempBanTime = args[1];

    if (ms(tempBanTime)) {


      await message.guild.member(tbUser).ban(tbReason);

      let tempbanEmbed = new Discord.RichEmbed()
        .setTitle("TEMP-BANNED")
        .setDescription("Banned Users")
        .setColor("#3333ff")
        .addField("Temp-Banned User", `${tbUser} with ID ${tbUser.id}`)
        .addField("Temp-Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Temp-Banned In", message.channel)
        .addField("Temp-Ban-Time", `${tempBanTime}`)
        .addField("Time", message.createdAt)
        .addField("Reason", tbReason);

      let TempBannedEmbed = new Discord.RichEmbed()
        .setTitle("BANNED")
        .setDescription("You have been banned on the Discord server. You can't appeal for an unban at the moment.")
        .setColor("#e60000")
        .addField("Banned By", `<@${message.author.id}>`)
        .addField("Reason of you ban", tbReason)
        .addField("Your ban time", `${tempBanTime}`)
      let tempbanchannel = message.guild.channels.find('name', `modlogs`);
      if (!tempbanchannel) return message.channel.send(":warning: The admins on the server didnt make **modlogs** make sure to contact the owner or admins on the server for this problem. :warning:")

      message.channel.send(":white_check_mark: User has been temp-banned!").then(msg => { msg.delete(5000) });
      message.delete()
      tempbanchannel.send(tempbanEmbed);

      setTimeout(function () {
        message.guild.unban(tbUser.id);

        let unbanEmbed = new Discord.RichEmbed()
          .setTitle("UNBANNED")
          .setDescription("Unbanned members")
          .setColor("#00b300")
          .addField("Unbanned user", `${tbUser}`)
          .addField("Unbanned by", `Bot (Autounban)`)

        let unbanchannel = message.guild.channels.find('name', `modlogs`);
        if (!unbanchannel) return message.channel.send(":warning: The admins on the server didnt make **modlogs** make sure to contact the owner or admins on the server for this problem. :warning:");

        unbanchannel.send(unbanEmbed);

      }, ms(tempBanTime));

    } else {
      return message.channel.send(":warning: Give a time for the temp-ban. :warning:")
    }

}

module.exports.help = {
  name: "tempban"
}