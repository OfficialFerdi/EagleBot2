const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setDescription(":flag_us: Here you can find help-commands for in the discord server, whit the :necktie: emoji its only for staff. \n :flag_nl: Hier kan je hulp-commands vinden voor in de discord server met de :necktie: emoji is het alleen voor staff.")
    .setColor("#34d0f9")
    .addBlankField()
    .addField(":beginner: Help Commands", `/help - A menu you just open it. :white_check_mark: \n /report - Report someone from the discord server. :white_check_mark: \n /feedback - Send a feedback to help us out. :white_check_mark: \n /suggestion - Send a suggestion. :white_check_mark:`)
    .addField(":scroll: Info Commands", `/botinfo - Get information about the bot. :white_check_mark: \n /created - Get info how I created the bot. :white_check_mark: \n /serverinfo - Get information about the server. :white_check_mark:`)
    .addField(":necktie: Moderation Commands", `/ban - Ban a person. :necktie: \n /tempban - Temp-Ban a user. :necktie: \n /kick - Kick a person. :necktie: \n /warn - Warns a user. :necktie:`)
    .addField(":gear: General/Fun Commands", `/say - Let the bot say something. :necktie: \n /clear - Delete messages. :necktie: \n /question - Tell the bot a question. :white_check_mark:`)
    .addBlankField()

    message.channel.send(helpEmbed);

}

module.exports.help = {
  name: "help"
}