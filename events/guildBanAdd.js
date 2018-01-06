const Discord = require('discord.js');

module.exports = (client, guild, user) => {
     let general = user.guild.channels.find('name', 'general');
     let logs = user.guild.channels.find('name', 'logs');

     client.channels.get(general.id).sendEmbed(new Discord.RichEmbed()
            .setColor(0x11B8D6)
            .setTimestamp()
            .addField(`!!`, `${user.username}#${user.discriminator} was just banned!`));
};
