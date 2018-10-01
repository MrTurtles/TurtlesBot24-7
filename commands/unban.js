const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete();
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = message.guild.channels.find('name', 'logs');
  //if (!modlog) return message.reply('I cannot find a log channel named: logs').then(m => m.delete(5000));
  if (reason.length < 1) reason = "No reason specified.";
  if (!user) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `I need a user id, such as: 275303108589125633`)).then(m => m.delete(5000)).catch(console.error);
  message.guild.unban(user);
  message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x0013CF0E)
            .setTimestamp()
            .addField(`Success ✅`, `Unbanned <@${user}>!`)).then(m => m.delete(5000)).catch(console.error);
  const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('Action', 'Ban')
            .addField('User', `${user.username}#${user.discriminator}`)
            .addField('Moderator', `${message.author.username}#${message.author.discriminator}`)
            .addField('Reason', reason)
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
  name: 'unban',
  rank: 'Admin',
  description: '(ADMIN) - Unbans the user.',
  usage: 'unban [userid] [reason]'
};
