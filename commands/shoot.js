const Discord = require('discord.js');

exports.run = (client, message) => {
  if (message.mentions.users.size < 1) return message.reply('@mention some people to shoot!').then(m => m.delete(5000));

    const embed2 = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .addField(`${message.author.username} killed:`, `${message.mentions.users.map(m => `**${m}** :gun:`).join('\n')}`)

    message.delete();
    message.channel.sendEmbed(embed2);
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'shoot',
  rank: 'Member',
  description: '(MEMBER) - Shoots person you mention',
  usage: 'shoot [mention]'
};