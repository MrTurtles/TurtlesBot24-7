exports.run = (client, message, args) => {
  message.delete();
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  } else {
    
  } 
  if (!command) {
    return message.channel.sendMessage(`I cannot find the command: ${args[0]}`).then(m => m.delete(5000));
  } else {
    message.channel.sendMessage(`Reloading: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Successfully reloaded: ${command}`).then(m => m.delete(5000));
          })
          .catch(e => {
            m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``).then(m => m.delete(5000));
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['r'],
  permLevel: 5
};

exports.help = {
  name: 'reload',
  rank: 'Owner',
  description: '(OWNER) - Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>'
};
