const Discord = require('discord.js');
//const settings = require('../settings.json');
exports.run = (client, message) => {
  message.delete();
  const embed2 = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .addField(`Creator`, `Dave|MrTurtles#4907 - <@275303108589125633>`)
    .addField(`Info`, `This bot is for fun and moderation.`)
    .addField(`Guilds`, `${client.guilds.array().length}`)
    .setThumbnail(client.user.avatarURL)
  message.channel.sendEmbed(embed2).then(m => m.delete(10000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['inf', 'i'],
  permLevel: 1
};

exports.help = {
  name: 'info',
  rank: 'Member',
  description: '(MEMBER) - Shows information about this bot.',
  usage: 'info'
};
