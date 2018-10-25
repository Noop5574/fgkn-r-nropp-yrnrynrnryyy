const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** مساء الخيّر للذين أجادو حُب الحياة مهما كانت الظروف ..:two_hearts::sparkles:
نورنا بصوتك يا حلو :sparkling_heart:  https://discord.gg/eMpfSdU ** ')

}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
