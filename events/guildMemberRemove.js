const Discord = require('discord.js');
module.exports = member => {
  let guild = member.guild;
  let modlog = guild.channels.find('name', 'join-leave');
  if (!modlog) return;
  guild.channels.get(modlog.id).sendMessage(new Discord.RichEmbed()
    .setColor(0x00E90B0B)
    .setTimestamp()
    .addField('Bye..',`${member.user.username}#${member.user.discriminator} Left! :cry:`));
};
