const Discord = require('discord.js')
module.exports = messageDelete => {
  let actionlog = messageDelete.guild.channels.find('name', 'action-log');
  if(messageDelete.author.bot) return;
  if(messageDelete.content.startsWith(';')) return;

  //console.log(messageDelete.content)
  //messageDelete.channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)

  const embed = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .setTitle('Message Deleted')
    .addField('User', `${messageDelete.author.tag} (@<${messageDelete.author.id}>)`)
    .addField('Message', messageDelete.content);

  if (!actionlog) return messageDelete.author.sendMessage(`There is no #logs channel.\nIf you want to log important commands you have to make the channel:'#logs'`);
  messageDelete.guild.channels.get(actionlog.id).sendEmbed(embed);

};
