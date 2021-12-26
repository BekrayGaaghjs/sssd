const db = require("quick.db");
const Discord = require("discord.js")
const config = require("../config.json");

module.exports = {
    name: "yardım",
    aliases: ["y"],
    owner: false,
    execute: async (client, message, args, embed, author, channel) => {
      embed.setColor("WHITE")
      message.channel.send(embed
            .setDescription(`Aşağıda botun kullanılabilir tüm komutları yer alıyor. Sorununuz olursa \n<@319827233042857985> ulaşınız!

**!bahis** - bahis oynarsınız.
**!cüzdan** - parana bakarsın.
**!parası** - herhangi bir kullanıcının parasına bakarsın.
**!gönder** - herhangi bir kullanıcıya para gönderirsiniz. 
**(KENDİ PARANIZDAN FAZLA PARA GÖNDERMEYİN)**
**!envanter** - envanterine bakarsın.
**!içerik** - içerikler hakkında bilgi alırsınız.
**!market** - ürünlerin ücretini görürsünüz.
**!satın-al** - ürün id belirterek satın alırsınız.
**!seviye** - seviyenize bakarsınız.
**!top-seviye** - top seviyelere bakarsınız.
**!çalış** - çalışıp para kazanırsınız.

İyi Oyunlar. :tada:`))
    }
}