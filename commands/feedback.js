const Discord = require("discord.js");
const config = require('../botconfig.json');
const prefix = ("/");

exports.run = (client, message, args) => {
    
  const melding = "Feedback";
  let reviewmessage = args.slice(0).join(" ");
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.content.startsWith("/feedback")) return;
    if (!args[0]) return message.channel.send("Usage: " + prefix + "feedback <message>");
    {
      message.guild.channels.find('name', "feedback-log") .send({
        embed: {
          color: 16318464,
          title: "Feedback",
          description: `Hello leads, a feedback is sended by: \n**@${message.author.tag}** \nreason of the feedback: **${reviewmessage}**`,
          timestamp: new Date(),
          footer: {
            text: "Feedback | TheEagle"
          }
        }
      });
    }
    message.author.send(":white_check_mark: You have succesfully sended a feedback. You know feedbacks help us to make the server better! You will get an answer from our admin(s), leads or owner(s) if your feedback has been processed. Thank you for your feedback!")
    message.channel.send(":white_check_mark: Succesful sended!");


}

module.exports.help = {
  name: "feedback"
}