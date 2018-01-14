const Discord = require('discord.js');
//const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let prefix = ",";
  message.delete();
  let time = args.slice(1).join(' ').split('?');
  let reason = args.slice(2).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  //if (!modlog) return message.reply('I cannot find a log channel named: logs').then(m => m.delete(5000)).catch(console.error);
  if (!muteRole) return;
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `Sorry, I can't unmute ghosts. :wink:`)).then(m => m.delete(5000)).catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Unmute')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `Sorry, I don't have the permission to Manage roles.`).then(m => m.delete(5000)).catch(console.error));

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole)
    message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x0013CF0E)
            .setTimestamp()
            .addField(`Succes ✅`, `Succesfully unmuted ${user}!`)).then(m => m.delete(5000));
    if (!modlog) return message.channel.sendEmbed(embed);
    client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);    
  } else {
      message.message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `That user is not muted.\nTo mute him/her use: ${prefix}mute [user] [duration] [reason]`)).then(m => m.delete(5000));
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  rank: 'Moderator',
  description: '(MOD) - Unmutes a mentioned user',
  usage: 'unmute [mention]'
};
