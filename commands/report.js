const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if (!args[0]) return message.channel.send("Usage: " + prefix + "report <user>");
    if(!rUser) return message.channel.send(":warning: Can't find the user, make sure to check your spelling mistake's. :warning:");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Alert, A user reported someono on the discord server pls read this.")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports-log");
    if(!reportschannel) return message.channel.send(":warning: The admins on the server didnt make **reports-log** make sure to contact the owner or admins on the server for this problem. :warning:");


    await message.author.send(":white_check_mark: **You have succesfully reported this user. our staff is going to look at the report. dont ask any staff for looking at your report.**")
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}