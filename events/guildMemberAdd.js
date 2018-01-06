const Discord = require('discord.js');
//const settings = require('../settings.json');
module.exports = member => {
  let ownerid = 275303108589125633;
  //const channel = getDefaultChannel(member.guild);
  let guild = member.guild;
  let modlog = guild.channels.find('name', 'join-leave');
  if (!modlog) return;
  guild.channels.get(modlog.id).sendEmbed(new Discord.RichEmbed()
    .setColor(0x0013CF0E)
    .setTimestamp()
    .addField('Welcome!', `${member.user} Joined! :wave:`));
  //if (member.id === ownerid) {
  //  guild.defaultChannel.sendMessage('**Welcome <@275303108589125633>, the owner of me!**')
  //}
};
