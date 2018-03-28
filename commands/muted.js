const Discord = require('discord.js');

exports.run = (client, message) => {
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  const ListEmbed = new Discord.RichEmbed()
            .setTitle('Muted users:')
            .setColor(0x11B8D6)
            .setDescription(message.guild.roles.get(muteRole.id).members.map(m=>m.user.tag).join('\n\n'));
  message.channel.send(ListEmbed);  
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
