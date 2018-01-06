const Discord = require('discord.js');

module.exports = (client, guild, user) => {
  let general = user.guild.channels.find('name', 'general');
  let logs = user.guild.channels.find('name', 'logs');

  client.channels.get(general.id).sendEmbed(new Discord.RichEmbed()
            .setColor(0x11B8D6)
            .setTimestamp()
            .addField(`!!`, `${user.username}#${user.discriminator} was just unbanned!`));

  const embed = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .addField('Action:', 'Unban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${guild.client.unbanAuth.username}#${guild.client.unbanAuth.discriminator}`)
    .addField('Reason', guild.client.unbanReason);
  if (!modlog) return client.channels.get(general.id).sendEmbed(embed);
  return guild.channels.get(logs.id).sendEmbed(embed);

};
