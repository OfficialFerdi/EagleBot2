const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
        //!vraag <antwoord>
        if (!args[2]) return message.reply("Please ask a complete question!");
        let replies = ["EagleBot said yes :white_check_mark:", "EagleBot said no :x:", "EagleBot said nothing to answer :thinking:", "EagleBot said, ask the question later :timer:", "EagleBot said, What is this for question? :unamused:"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");

        let vraagEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("#007acc")
            .addBlankField()
            .addField("The question", question)
            .addField("What has the bot answered? Here's the answer: ", replies[result])
            .addBlankField()
            .setTimestamp()

        message.channel.send(vraagEmbed);
    
}

module.exports.help = {
  name: "question"
}