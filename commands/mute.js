const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    /*message.delete();
    message.channel.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x00EEFF3E)
      .addField(`Under Maintance :warning:`, `This command is under maintance!\nAdd the Muted role manually.`));
      return;
  */
  let prefix = ",";
  let time = args[1];
  let reason = args.slice(2).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if(!muteRole){
    message.channel.sendEmbed(new Discord.RichEmbed()
      .setColor(0x00EEFF3E)
      .addField(`Setting up...`, `This command has never been used, setting it up.\nTry in 5 seconds`)).then(m => m.delete(15000));
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[],
        position: "5"
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  if (!reason) reason = "No reason specified.";
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `Sorry, I can't mute ghosts. :wink:`)).then(m => m.delete(5000)).catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x11B8D6)
    .setTimestamp()
    .addField('Action', 'Mute')
    .addField('User', `${user} (${user.id})`)
    .addField('Moderator', `${message.author.username}#${message.author.discriminator}`)
    .addField('Duration', `${time} Seconds`) 
    .addField('Reason:', reason)
  if (!time) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `You must set a duration!`)).then(m => m.delete(5000));
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `Sorry, I don't have the permission to Manage roles.`).then(m => m.delete(5000)).catch(console.error));

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `This user is already muted.\nTo unmute this user use: ${prefix}unmute [user]`)).then(m => m.delete(5000));
  } /*else if (!time && !reason) { 
    message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x0013CF0E)
            .setTimestamp()
            .addField(`Warning ⚠`, `Something went wrong! Forgot time?`));
    message.guild.member(user).addRole(muteRole).then(() => {
      message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x0013CF0E)
            .setTimestamp()
            .addField(`Success ✅`, `Successfully muted ${user} for **Forever** Seconds.\n**Reason:** ${reason}`));
      if (!modlog) return message.channel.sendEmbed(embed);
      client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });*/
  /*}*/ else {
    message.guild.member(user).addRole(muteRole).then(() => {
      message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x0013CF0E)
            .setTimestamp()
            .addField(`Success ✅`, `Successfully muted **${user}** for **${time}** Seconds.\n**Reason:** ${reason}`));
      if (!modlog) return message.author.sendMessage(`There is no #logs channel.\nIf you want to log important commands you have to make the channel:'#logs'`);
      message.guild.channels.get(modlog.id).sendEmbed(embed);
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
