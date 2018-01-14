const Discord = require('discord.js');
exports.run = (client, message) => {
  message.delete();
  /*message.channel.sendMessage('Ping?')
    .then(msg => {
      msg.edit(`Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`).then(m => m.delete(10000));
    });*/
  message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .addField(`PONG!`, `${client.ping}ms`)).then(m => m.delete(10000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'ping',
  rank: 'Member',
  description: '(MEMBER) - Ping/Pong command.',
  usage: 'ping'
};
