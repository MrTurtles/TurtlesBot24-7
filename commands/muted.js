const Discord = require('discord.js');

exports.run = (client, message) => {
  message.delete();
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  let users = message.guild.roles.get(muteRole.id).members.map(m=>m.user.tag).join('\n\n')
  if users = "" users = "None";
  if(!muteRole) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField('Error ❌', 'No-one has been muted with this bot!'));
  const ListEmbed = new Discord.RichEmbed()
            .setTitle('Muted users:')
            .setColor(0x11B8D6)
            .setDescription(users);
  message.channel.send(ListEmbed).then(m => m.delete(15000));  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'muted',
  rank: 'Moderator',
  description: '(MOD) - Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'muted'
};
