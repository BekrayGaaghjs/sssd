const config = require("../config.json");
const db = require("quick.db");

module.exports = {
    name: "bahis",
    aliases: ["iddia"],
    cooldown: 10,
    execute: async (client, message, args, embed, author, channel) => {
      if (channel.id !== (config.channel.commandchannel)) return channel.send(embed.setDescription(`Bu komutu sadece <#${config.channel.commandchannel}> kanalında kullanabilirsin!`))
        var possibility = ["win", "lose", "lose"  ];
        const amount = args[0];
      embed.setColor("WHITE") 
      if (!amount) return channel.send(embed.setDescription("Bahis yapmadan önce geçerli bir miktar giriniz!")).then(borangkdn => borangkdn.delete({ timeout: 15000 }));
        if (isNaN(amount)) return channel.send(embed.setDescription("Öncelikle geçerli miktar sayılardan oluşsun!")).then(borangkdn => borangkdn.delete({ timeout: 15000 }));
        if (amount > db.fetch(`money_${author.id}`)) return channel.send(embed.setDescription(`Maalesef, **${amount}** dolarınız bu bahise yetmiyor!`)).then(borangkdn => borangkdn.delete({ timeout: 15000 }));
      if (amount > 10100) return channel.send(embed.setDescription("Maalesef 1000000 doları aşan bahisler geçersizdir!"))
        const conclusion = (possibility[Math.floor(Math.random() * possibility.length)])
        if (conclusion === "win") {
          embed.setColor("WHITE")  
          channel.send(embed.setDescription(`Görünüşe göre **${amount}** dolar bahise girmişsin 5 saniye sonra açıklanacaktır.`)).then(x => setTimeout(() => {
                x.edit(embed.setDescription(`Tebrikler, **${amount * 2}** dolar kazandınız!`))
            }, 100));//her bin rakam bin saniye ediyor..
            db.add(`money_${author.id}`, amount * 2);
        } else {
       embed.setColor("WHITE")
          channel.send(embed.setDescription(`Görünüşe göre **${amount}** dolar bahise girmişsin 5 saniye sonra açıklanacaktır.`)).then(x => setTimeout(() => {
                x.edit(embed.setDescription(`Maalesef, kazanamadınız **${amount}** dolar kaybettiniz!`))
            }, 5000));//her bin rakam bin saniye ediyor..
            db.add(`money_${author.id}`, -amount)
        }
    }
}