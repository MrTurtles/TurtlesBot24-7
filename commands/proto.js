const Discord = require('discord.js');
exports.run = (client, message) => {
    let user = message.author;
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.channe;
    if (message.channel.id == "295877326762278912") {
        if (message.author.id == "275303108589125633") return message.delete();
        message.guild.member(user).addRole(muteRole).then(() => {
      message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x0013CF0E)
            .setTimestamp()
            .addField(`Auto-Mute ✅`, `Succesfully muted **${user}** for **30** Minutes.\n**Reason:** Use fking #bot-commands`));
       setTimeout(function() {
        message.guild.member(user).removeRole(muteRole);
       }, 30*60000); 
      }); 
    } else {
        message.channel.sendEmbed(
       new Discord.RichEmbed()
       .setColor(0x11B8D6)
       .setAuthor("Protosmasher Information", "https://i.imgur.com/lw8NlD2.png")
       .setDescription("Info about updates and stuff.")
       .setThumbnail("https://i.imgur.com/lw8NlD2.png")
       .addBlankField(true)
       .addBlankField(true)
       .addField(`:arrows_counterclockwise: Update Status:`, `UPDATED!`, true)
       .addField(`:warning: Issues with?`, `Execution + Injection`, true)
       .addField(`:arrows_counterclockwise: Website Status:`, `DOWN`, true));
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'protoinfo',
  rank: 'Member',
  description: '(MEMBER) - Command for Protosmasher Information.',
  usage: 'protoinfo'
};
