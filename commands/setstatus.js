const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete()
  let login = args.join(' ');
  if(!login) login = ',help | I Like Turtles!';
  client.user.setGame(login, 'https://www.twitch.tv/roblox');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 6
};

exports.help = {
  name: 'setstatus',
  rank: 'Owner',
  description: '(OWNER) - Sets the status of the bot to streaming.',
  usage: 'status'
};
