const Discord = require('discord.js');
//const settings = require('../settings.json');
exports.run = async (client, message, args) => {
    message.delete();
    let ownerID = 275303108589125633;
    /*if(message.author.id !== ownerID) return;
    const code = args.join(" ");
    try {
      const evaled = client.clean(await eval(code));
      if(message.flags.includes("d")) message.delete();
      if(message.flags.includes("s")) return;
      message.channel.send(`\`\`\`xl\n${evaled}\n\`\`\``);
    } catch(err) {
      if(message.flags[0] && message.flags[0] === 's')
        return message.delete();
      message.channel.send(`\`ERROR\` \`\`\`xl\n${client.clean(err)}\n\`\`\``);
    }*/
    if(message.author.id !== ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 6
};

exports.help = {
  name: 'eval',
  rank: 'Creator',
  description: '(Creator) - Just not ur business',
  usage: 'eval [...code]'
};
