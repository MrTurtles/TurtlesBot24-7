const Discord = require('discord.js');
exports.run = (client, message) => {
  message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .setAuthor("Protosmasher Information", "")
      .addField(`Updated?`, `NO`)
      .addField(`Issues?`, `-`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'protoinfo',
  rank: 'Member',
  description: '(MEMBER) - Command for Protosmasher Information.',
  usage: 'protoinfo'
};
