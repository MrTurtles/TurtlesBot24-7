const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let modlog = message.guild.channels.find('name', 'logs');
  const embed16 = new Discord.RichEmbed()
      .setColor(0x00E90B0B)
      .addField(`Error :no_entry:`, `You're missing a number of messages to delete!`);
  let messagecount = parseInt(args.join(' '));
  if(messagecount > 99) {
    message.delete();
    message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00E90B0B)
      .addField(`Error :no_entry:`, `Limit is 99!`));
      return;
  }
  if(!messagecount) {
    message.channel.sendEmbed(embed16).then(m => m.delete(5000));
    message.delete();
    return;
  }
  message.channel.fetchMessages({
    limit: messagecount + 1
  }).then(messages => message.channel.bulkDelete(messages));
  const embed15 = new Discord.RichEmbed()
      .setColor(0x0013CF0E)
      .addField(`Success :white_check_mark:`, `Successfully deleted ${messagecount} messages!`);
  message.channel.sendEmbed(embed15).then(m => m.delete(5000));
  
  const embed = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .addField('Action', 'Clear')
    .addField('Moderator', `${message.author.username}#${message.author.discriminator}`)
    .addField('Messages deleted', messagecount);
  if (!modlog) return message.author.sendMessage(`There is no #logs channel.\nIf you want to log important commands you have to make the channel:'#logs'`);
  message.guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'clear',
  rank: 'Admin',
  description: '(ADMIN) - Cleares X amount of messages from a given channel.',
  usage: 'clear <number>'
};
