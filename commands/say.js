const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  let say = args.join(" ")
  message.channel.sendMessage(say);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ava', 'av'],
  permLevel: 6
};

exports.help = {
  name: 'say',
  rank: 'Owner',
  description: '(OWNER) - Bot will say what you want.',
  usage: 'say [text]'
};
