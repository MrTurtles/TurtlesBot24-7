//const settings = require('../settings.json');
const Discord = require('discord.js')
//const sales = require('../commands/salestatus.js');
module.exports = message => {
  let client = message.client;
  let prefix = ",";
  if (message.author.bot) return;

  //if (sales.login = `,help | Off Sale!`) {
  //  let sales2 = `Off!`;
  //} else {
  //  let sales2 = `On!`;
  //  client.channels.get('330276410709114881').sendMessage(`Sales are ${sales2}`)
  //}

  
  /*var fortunes = [
        "If you don't trust this exploit simply check the channel <#330276539956592641> or just don't buy it",
        //`Sales are ${sales2}`,
        "Checkout our website! http://orgin.cf/"
    ];
  const embed64 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A) 
    .setTimestamp()
    .addField(`Orgin`, `${fortunes[Math.floor(Math.random() * fortunes.length)]}`)

  setTimeout(function() {
        message.guild.channels.get('330276410709114881').sendEmbed(embed64);
      }, 1*60000); */
  const embed66 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `Commands do not work in Direct Messages!`)
  const embed6234 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`Error :no_entry:`, `This command is from another bot and cannot be used without the bot in the server.`)
  if (message.content.startsWith(`gn`)) return message.react('🙋' && `😘`);
  if (message.content.startsWith(`;paycode`)) return message.delete() && message.channel.sendEmbed(embed6234);
  if (message.content.startsWith(`<@304258486466904064>`)) return message.react('🎉');
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type == 'dm') return message.channel.sendEmbed(embed66);
  if (message.channel.type == 'group') return message.channel.sendEmbed(embed66);
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  const embed65 = new Discord.RichEmbed()
    .setColor(0x00EB1A1A)
    .setTimestamp()
    .addField(`:no_entry: No Permission`, `${message.author}, You have no permission for the command: **${command}**`)
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
    console.log(`${message.author.username}: ${command}\n`)
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
    console.log(`${message.author.username}: ${command}\n`)
  } else {
    const embed69 = new Discord.RichEmbed()
      .setColor(0x00EB1A1A)
      .setTimestamp()
      .addField(`:no_entry: Error`, `${message.author}, That command is not registered.`)
    //message.channel.sendEmbed(embed69).then(m => m.delete(5000))
    //message.delete()
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) {
       message.channel.sendEmbed(embed65).then(m => m.delete(5000));
       message.delete();
      return;
    }
    cmd.run(client, message, params);
  }

};
