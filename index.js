var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);
const { Client, Intents, MessageEmbed,  
 MessageActionRow, MessageSelectMenu, Message, MessageButton, Collection } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
    client.on('channelCreate', async channel => {
        if (!channel) {
            return;
          }

          if(channel.name.startsWith('ticket')) {
            
            const Embed = new MessageEmbed()
            .setDescription('اضغط الزر لتصبح مسئول التكت')
            const button = new MessageButton()
            .setLabel(`استلام`)
            .setCustomId("98541298451298")
            .setStyle('PRIMARY')
            const row = new MessageActionRow()
            .addComponents(button)
            await setTimeout( () => {
                channel.send({ embeds: [Embed], components: [row]})
            }, 2000)
          }
});  

////بائعين

client.on('interactionCreate', async interaction => {
      if (interaction.isButton()) {
        interaction.deferUpdate()
        if(interaction.customId === '98541298451298') {
          if(!interaction.member.roles.cache.has('990519578947907624')) {
            const Embed = new MessageEmbed()
            .setDescription(`*يمكن للبائعين فقط استخدام الزر*`)
            return interaction.channel.send({ embeds: [Embed]})
          }
            const button = new MessageButton()
            .setLabel(`الغاء الاستلام`)
            .setCustomId("8965419149191414")
            .setStyle('PRIMARY')
const row = new MessageActionRow()
.addComponents(button);
            const Embed = new MessageEmbed()
            .setDescription(`${interaction.user.username} قام باستلام التكت!`)
            const SecondEmbed = new MessageEmbed()
            .setDescription(`${interaction.user.username} استلم التكت ${interaction.channel.name}!`)
            interaction.message.delete().catch(() => null)
          await interaction.channel.send({ embeds: [Embed], components: [row] }).then(async () => {
            interaction.channel.setName(interaction.user.username)
interaction.channel.send({ embeds: [SecondEmbed]}); 
          })
        }
      }

if(interaction.customId === '8965419149191414') {
    if(!interaction.member.roles.cache.has('990519578947907624')) {
        const Embed = new MessageEmbed()
        .setDescription(`${interaction.user.username} يمكن للبائعين فقط استلام التكت!`)
        return interaction.channel.send({ embeds: [Embed]})
      }
            const Embed = new MessageEmbed()
            .setDescription(`قام بالغاء الاستلام يمكن لبائع اخر الاستلام الان ${interaction.user.username} `)
            const button = new MessageButton()
            .setLabel(`استلام`)
            .setCustomId("98541298451298")
            .setStyle('PRIMARY')
            const row = new MessageActionRow()
            .addComponents(button)
            interaction.message.delete().catch(() => null)
await interaction.channel.send({ embeds: [Embed], components: [row] }).then(async () => {
            interaction.channel.setName("تكت-غير مستلم")
          })
}
});



client.login(process.env.token)
