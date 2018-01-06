const Discord = require('discord.js');
//const settings = require('../settings.json'); 
exports.run = (client, message) => {
  let prefix = ",";
  message.delete();
  let guild = message.guild;
    const embed45 = new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setTimestamp()
      .addField(`Rank`, `Your rank is ${message.author.client.elevation(message)}`)
    const embed44 = new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setTimestamp()
      .addField(`Explaination`, `This means you're the owner of the bot(LMAO, Hi Dave!:wave:) Unfortunetly This doesn't mean you can manage the server without the bot having permissions!`)
    const embed46 = new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setTimestamp()
      .addField(`Explaination`, `This means you're the owner of the server **${guild.name}**!Thanks for using my bot!\nGoodluck Moderating.`)
    const embed47 = new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setTimestamp()
      .addField(`Explaination`, `This means you're a Admin in **${guild.name}**!\nThank you for Moderating in **${guild.name}**\nUse ${prefix}help (in a server!!) and look at (admin) or lower to see what commands you can use.`)
    const embed48 = new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setTimestamp()
      .addField(`Explaination`, `This means you're a Moderator in **${guild.name}**!\nThank you for Moderating in **${guild.name}**\nUse ${prefix}help (in a server!!) and look at (mod) or lower to see what commands you can use.`)
    const embed49 = new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setTimestamp()
      .addField(`Explaination`, `This means you're a Helper in **${guild.name}**!\nThank you for Helping in **${guild.name}**\nUse ${prefix}help (in a server!!) and look at (helper) or lower to see what commands you can use.`)
    const embed50 = new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setTimestamp()
      .addField(`Explaination`, `This means you're a Member in **${guild.name}**.\nThank you for supporting in **${guild.name}**\nUse ${prefix}help (in a server!!) and look at (member) or lower to see what commands you can use.`)
    const embed51 = new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setTimestamp()
      .addField(`Explaination`, `This means you're **banned** in from this bot`)

    message.author.sendEmbed(embed45);
    if (client.elevation(message) == 6) {
      message.author.sendEmbed(embed44);
    } else if (client.elevation(message) == 0) {
      message.author.sendEmbed(embed51);
    } else if (client.elevation(message) == 4) {
      message.author.sendEmbed(embed47);
    } else if (client.elevation(message) == 3) {
      message.author.sendEmbed(embed48);
    } else if (client.elevation(message) == 2) {
      message.author.sendEmbed(embed49);
    } else if (client.elevation(message) == 1) {
      message.author.sendEmbed(embed50);
    } else if (client.elevation(message) == 5) {
      message.author.sendEmbed(embed46);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mylevel', 'mylvl', 'myr', 'lvl'],
  permLevel: 0
};

exports.help = {
  name: 'myrank',
  rank: 'Member',
  description: '(MEMBER) - Shows your permission level/rank',
  usage: 'myrank'
};
