const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let warns = JSON.parse(fs.readFileSync("./untils/warnings.json", "utf8"));

    if (!message.member.roles.find('name', `EagleAccess`)) return message.channel.send(":warning: You don't have permissions for this command. Only Moderator(s) or highers can use this. :warning::warning: You don't have permissions for this command. Only Staff can use this. :warning:");

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!wUser) return message.channel.send(":warning: Can't find the user, make sure to check your spelling mistake's. :warning:")
    if (wUser.roles.find('name', `EagleAccess`)) return message.chann.send(":warning: You can't warn this user, because they have the same permission as you. :warning:")
    let wReason = args.join(" ").slice(22);

    if (!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./untils/warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });

    let warnEmbed = new Discord.RichEmbed()
      .setTitle("WARNED")
      .setDescription("Warned Users")
      .setColor("#fc6400")
      .addField("Warned user", `<@${wUser}>`)
      .addField("Warned by", `<@${message.author.username}>`)
      .addField("Warned in", message.channel.createdAt)
      .addField("Number of Warnings", warns[wUser.id].warns)
      .addField("Warn reason", wReason);

    let warnchannel = message.guild.channels.find(`name`, "modlogs");
    if (!warnchannel) return message.channel.send(":warning: The admins on the server didnt make **modlogs** make sure to contact the owner or admins on the server for this problem. :warning:");

    let warnedEmbed = new Discord.RichEmbed()
      .setTitle("WARNED")
      .setDescription(":warning: You have been warned in TheEagle. :warning:")
      .setColor("#fc6400")
      .addField("Warned by", `${message.author.username}`)
      .addField("Your Warnings number", warns[wUser.id].warns)
      .addField("Your warn reason", `${wReason}`)
    await wUser.send(warnedEmbed)
    message.channel.send(":white_check_mark: Warned user!").then(msg => { msg.delete(3500) });
    warnchannel.send(warnEmbed);

}

module.exports.help = {
  name: "warn"
}