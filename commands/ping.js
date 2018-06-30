const Discord = require('discord.js');
exports.run = (client, message) => {
  message.delete();
  let modlog = message.guild.channels.find('name', 'logs');
  let guildid = message.guild.id;
  console.log(guildid);
  const embed = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .addField('Action', 'Test')
  /*message.channel.sendMessage('Ping?')
    .then(msg => {
      msg.edit(`Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`).then(m => m.delete(10000));
    });*/
  message.guild.channels.get(modlog.id).sendEmbed(new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .addField('Action', 'Test')).catch(console.error);
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
