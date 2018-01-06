exports.run = function(client, message, args) {
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear2', 'c2'],
  permLevel: 4
};

exports.help = {
  name: 'purge',
  rank: 'Admin',
  description: '(ADMIN) - Clears X amount of messages from a given channel without\n                       messaging back.',
  usage: 'purge <number>'
};
