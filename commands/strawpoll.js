const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete();
    let question = args.join(' ');
    let user = message.author.username
    if (!question) return message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .addField(`Error :no_entry:`, `Missing Question!`)).then(m => m.delete(5000));
    message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00AB29D4)
      .addField(`Strawpoll by ${user}`, `${question}`)).then(function(message) {
        message.react('✅');
        message.react('❌');
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'strawpoll',
  rank: 'Moderator',
  description: '(Moderator) - Makes strawpoll with the discord reactions',
  usage: 'strawpoll [text]'
};

