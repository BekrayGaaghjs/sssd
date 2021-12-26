const config = require("../config.json");
const db = require("quick.db");

module.exports = {
    name: "cüzdan",
    aliases: ["sahip-olduklarım", "param", "banka", "para", "bakiye", "money"],
    execute: async (client, message, args, embed, author, channel) => {
      embed.setColor("WHITE")
      channel.send(embed.setDescription(`Şuanda \`${db.fetch(`money_${author.id}`) || 0}\` dolarınız var!`))
    }
}