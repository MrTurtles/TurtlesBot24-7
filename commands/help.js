const Discord = require('discord.js');
//const settings = require('../settings.json');
exports.run = (client, message, params) => {
  message.delete();
  let prefix = ",";
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendEmbed(
      new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .addField('= Command List = ', `Use ${prefix}help <commandname> for details\n\n${client.commands.map(c => `${prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} - ${c.help.rank}`).join('\n')}`)).then(m => m.delete(10000)).catch(console.error);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendEmbed(
        new Discord.RichEmbed()
      .setColor(0x11B8D6)
      .addField(`= ${command.help.name} =`, ` \n${command.help.description}\nusage - ${prefix}${command.help.usage}\n`)).then(m => m.delete(10000)).catch(console.error);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 1
};

exports.help = {
  name: 'help',
  rank: 'Member',
  description: 'Displays all the available commands for your permission\n                          level.\n',
  usage: 'help [command]'
};
