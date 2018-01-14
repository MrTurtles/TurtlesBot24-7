const Discord = require('discord.js');
exports.run = (client, message, args) => {
    /*message.delete();
    message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00EEFF3E)
      .addField(`Under Maintance :warning:`, `This command is under maintance!\nAdd the Muted role manually.`));
      return;
  */
  
  let prefix = ",";
  message.delete();
  let time = args[1];
  let reason = args.slice(2).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) {
    message.reply('I cannot find a mute role named: Muted\n (Making one...)').then(m => m.delete(5000)).catch(console.error);
    message.guild.createRole({
      name: 'Muted',
      color: 'GRAY',
      permissions: "READ_MESSAGE_HISTORY",
    })
    return message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(0xFFBB20)
    .setTimestamp()
    .addField('⚠ Todo ⚠', `Make sure to configure the Muted role in **ALL** the text channels!\nEdit Channel > Permissions > Add the Muted role > Send Message permission to :x:\nDone this on **every** text channel? Good now you're done.\nRemind to set this permission in every new channel you make in the future!`));
  }
  if (!reason) reason = "No reason specified.";
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `Sorry, I can't mute ghosts. :wink:`)).then(m => m.delete(5000)).catch(console.error);
  if (!time) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `You must set a duration!`)).then(m => m.delete(5000));
  const embed = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .addField('Action', 'Mute')
    .addField('User', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator', `${message.author.username}#${message.author.discriminator}`)
    .addField('Duration', `${time} Seconds`)
    .addField('Reason:', reason)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `Sorry, I don't have the permission to Manage roles.`).then(m => m.delete(5000)).catch(console.error));

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `This user is already muted.\nTo unmute this user use: ${prefix}unmute [user]`)).then(m => m.delete(5000));
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x0013CF0E)
            .setTimestamp()
            .addField(`Succes ✅`, `Succesfully muted ${user} for ${time} Seconds.\nReason: ${reason}`)).then(m => m.delete(5000));
      if (!modlog) return message.channel.sendEmbed(embed);
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
      setTimeout(function() {
        message.guild.member(user).removeRole(muteRole);
      }, time*1000); 
    }); 
  } 

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'mute',
  rank: 'Moderator',
  description: '(MOD) - Mute a user with specific duration and reason!',
  usage: 'mute [user] [duration] [reason]'
};
