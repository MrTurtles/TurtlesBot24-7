const Discord = require('discord.js')
module.exports = (oldMessage, newMessage) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .setTitle('Message Edited')
    .addField('User', `${newMessage.author.tag} (<@${newMessage.author.id}>)`)
    .addField('Old Message', `${oldMessage.content}.`)
    .addField('New Message', `${newMessage.content}.`);
  let actionlog = newMessage.guild.channels.find('name', 'action-log');
  if(newMessage.author.bot) return;
  if(newMessage.content != oldMessage.content){
       if (!actionlog) return newMessage.author.sendMessage(`There is no #action-log channel.\nIf you want to log important commands you have to make the channel:'#action-log'`);
       newMessage.guild.channels.get(actionlog.id).sendEmbed(embed);
   }
  //console.log(newMessage.content)
  //newMessage.channel.send(`The message : "${oldMessage.content}" by ${newMessage.author.tag} was edited to ${newMessage.content}.`)

  /*const embed = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .setTitle('Message Edited')
    .addField('User', `${newMessage.author.tag} (@<${newMessage.author.id}>)`)
    .addField('Message', oldMessage.content)
    .addField('Message', newMessage.content);

  if (!actionlog) return newMessage.author.sendMessage(`Er is geen #logs channel.\nAls je deze commando wilt loggen moet je deze channel aanmaken:'#logs'`);
  newMessage.guild.channels.get(actionlog.id).sendEmbed(embed);*/

};
