const Discord = require('discord.js');
exports.run = (client, message) => {
  message.delete();
  message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .addField(`Updated?`, `NO`)
      .addField(`Issues?`, `-`)).then(m => m.delete(10000));
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
