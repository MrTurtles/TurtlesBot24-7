const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var fortunes = [
        "Yes",
        "No",
        "Maybe",
        "Kys",
        "Never!",
        "Fuck you",
        "Of Course!",
        "For Sure!",
        "Definitely NOT!"
    ];



    if (args[1]) {
        message.channel.sendEmbed(new Discord.RichEmbed()
           .setColor(0x11B8D6)
           .setTimestamp()
           .addField(`${message.author.username}#${message.author.discriminator}: ${args.join(" ")}`, `${fortunes[Math.floor(Math.random() * fortunes.length)]}`));
    } else {
        message.channel.sendEmbed(new Discord.RichEmbed()
            .setColor(0x00E90B0B)
            .setTimestamp()
            .addField(`Error ❌`, `Sorry, I do not understand that.`));
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ball', '8'],
  permLevel: 1
};

exports.help = {
  name: '8ball',
  rank: 'Member',
  description: '(MEMBER) - Returns messages like Yes, No, etc.',
  usage: '8ball [text]'
};
