const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
مساء الخيّر للذين أجادو حُب الحياة مهما كانت الظروف ..:two_hearts::sparkles:
نورنا بصوتك يا حلو :sparkling_heart:  https://discord.gg/eMpfSdU ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
