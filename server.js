// server.js
// where your node app starts

// init project

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const bible = require("bible-english");
let portunus = require('romans');
const http = require("http");
require('dotenv').config()
const can = require("canvas");
const { Client } = require('unb-api');
const client = new Client('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI3Mjg5NjU5MTQ0NzY4MDY2ODUiLCJpYXQiOjE1OTM4Njk0MTd9._E6dCtkLswWgDySTPihh32Al9tvHPxFuxqY_eBk8waQ');
const GuildID = "514135876909924352";
var CronJob = require('node-cron');
const ImageCharts = require('image-charts');
const ms = require('ms');
let numberOfProvinces;
const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet('1Mci7KdAbGP3s_VWzzTCvLT3wEDN7XbO_zoRrHr0_Lfw');
const db2 = require('better-sqlite3-with-prebuilds')('DR.db', {timeout: 5000});


doc.useServiceAccountAuth({
  client_email: "dr-bot@dr-bot-313315.iam.gserviceaccount.com",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQD5hHjK2Lw0MDtE\ns4XCKFRP8gfRXquD4xBZDZoScRWWHrV0jo5ar38SjocO2MoTib0TMOiq9lg4/qfo\nd7sloOB6jUuH5EAspN9K3G2PQmU/a8b+00ROUd7mqYmy3BplEE/Hx1CUqBIfcsl0\nX+JafHW9l7/5Oaf0pX9c/pmKMNJi6l0cC/o4QM1Gtqmi3D5GAe19xQW3wCrvRmpE\nRBk4Bwt3yeD6oKoORX9ac5771QeCbP47GtohTF2s4bayeohdlfz5Sv7SrFGQiiE9\nMmHfNffbIY0XyV/WZNh5vuVi3B2IACGUsoPn4mm+UCDBF2ZGZC97ZVZfrFPYPXc2\n7tiNZOQpAgMBAAECggEAec5ijVu6nJuDA2nD/WFkr1ZO3LWjcxHQtDiAo0oTKKK7\nIDhLZBfSJ8PuSKAqHdmatJimrHbv4HroiwKQGLFthEYfvin97g1aeBgdX9cgyBIc\nJeAKs1UiRGY1M1xhgj6xQ6yYOMnHdxS5JZd9T4D8lV5UOB0eUb7M6x/a4mws+F3L\n647w0jBKBMhMvDtJWjwXcPa2pI3vvneAJJfAos9GqLhW0KM6f3chKI8EkTlCYzXf\n+SBnXFJK+ywAkqH5PGWIzvgTKGAugqMtF3C3DmIVuBOQbbFm/7H9ae8XSuTTKSR1\nezMkdn+Q/MCoIte9r8js9WNV/vA8/zmGdLtUZE1StQKBgQD+0iJVnOi9mmVPNUt4\nBlAz0txYoLUOJOt4MX6t0L2YvybUwCOazBSCwxWBknCyeNnoFQjrqHr8j5fpWUdL\n5BxSW2xN2tq2kHgqZpCtx9kx7vVmkiGKmbxqZy8BxYH6CKbYsORoxm1TUydgEpPY\ni5nePNorHGXFiO7x3MejTzrpHwKBgQD6rA4k2Y6E/HgBa5bDVwov7M9gtAJVCBIf\n8lU5pOKU9fRPK9pb4sHozjG4XRg4/tmg5BvNQkXRguL7UDva7BYPHVjByLvXdHdV\nIlRrKZryJ6nIK+CXgrq2jY+ZaBNUqyEfmoMXnuyxoEDvUeUEyp7xIf2z9maiq6ij\noPRQ3BzhtwKBgB/pErGj76Vmw08S/ntuVvbWbg+POH0n9HDdyd5caJHLRkKYOR02\nd08UvQm32/MNnUQp9i8ErzoXhU+MhZgkXcOWfU6WnJMGLnYo1+9bOoC9Su/oVtjz\nfZvZhhJzuF4mXTZ/mGrihmhL3n9ydB9HBCLHfg6uBLSi/EE/g6SY1GjDAoGAfpa0\n7dcQKgh1cgIrOKqT8m/cqjE9nENfI9L1Rw8FfcRXhEPZGd4BntfCNCCPQvkwXhfU\nEmwNZih7B/8UuxHOcgOX9wSwF7YxLUUQ7K0uGmv9SaEe4mSadeY3RnlQicmCCLu2\nyA7x6SHMqQ7qYOkSKyPHQ0KDwlJ972Qw/USrMTECgYBFaXCjbmy5JfPiVmawUdod\nuBgtUzAjmQHusyY6ZABLnBqqg4AkfpZu+642RwsWIZghkwTdR1C1fXHBmxo6TBL5\n1uNzEGrnuEyl9vy1vFfcjuERPGauNYM1F2cQ0m+TuNjEDU6mxO9BzKRsNEQ7OrqD\nF/eBdUnQpaDL0xbV4U92VA==\n-----END PRIVATE KEY-----\n",

});
//init sqlite API
const dbFile = "./DR.db";
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);
const randomfacts = require('@dpmcmlxxvi/randomfacts');
const wikiFacts = require('wikifakt');
const tr = require('translate');
tr.key = 'trnsl.1.1.20200515T222139Z.a68c11f6ccb16bd4.b2bb25b5f6b3c103701bbe0015c7998ab237fa98';
tr.engine = 'yandex';

const arrayList = require("arraylist");
const Discord = require("discord.js");
let allIntents = new Discord.Intents(32767);
const clientdc = new Discord.Client({ partials: ["CHANNEL"],intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES]});
const interactions = require("discord-slash-commands-client");
//global variables
let BattleAlreadyCommenced = false;
let taxRate = 0.6;
let taxRateTop5 = 0.65;

clientdc.login(process.env.DISCORD_TOKEN);



//register Slash interactions with the client

clientdc.interactions = new interactions.Client(
    process.env.DISCORD_TOKEN,
    "700662464856981564"
);

//compare dates with the current date
const dateformat = require("dateformat");
const {Intents} = require("discord.js");
let date = new Date();
//console.log(dateformat("isoDate"));
let dates = dateformat("isoDate").split("-");
let time = dateformat(date, "longTime", true).split(":");
if (dates[1].startsWith("0")) {
  dates[1] = dates[1].substring(1);
}

async function updateProvinceIncome(){

  doc.loadInfo().then(() => {

    const sheet = doc.sheetsByIndex[0];
    sheet.loadCells('A1:Q26').then(() => {
      for (let i = 2; i <= 26; i++) {
        let number = new Intl.NumberFormat('latin', { style: 'decimal', useGrouping: 'true' }).format(sheet.getCellByA1('Q' + i).formattedValue);

        db.run(`UPDATE Province SET income = ${sheet.getCellByA1('Q' + i).formattedValue} WHERE prov_id = ${i - 1}`);
      }
    });
    const sheetPop = doc.sheetsByIndex[2];
    sheetPop.loadCells('AN4:AO28').then(() => {
      for (let i = 4; i <= 28; i++) {


        let number = new Intl.NumberFormat('latin', { style: 'decimal', useGrouping: 'true' }).format(sheetPop.getCellByA1('AN' + i).formattedValue);
        db.run(`UPDATE Province SET population = '${sheetPop.getCellByA1('AN' + i).formattedValue}' WHERE prov_id = '${i - 3}'`);
      }

      for (let i = 4; i <= 28; i++) {

        db.run(`UPDATE Province SET population_growth = '${sheetPop.getCellByA1('AO' + i).formattedValue}' WHERE prov_id = ${i - 3}`);
      }
    });

    updateProvinceMessage();
  });

}

function updateEmbed() {
  const mainEmb = new Discord.MessageEmbed();

  mainEmb.setTitle("Motions");
  mainEmb.setColor("0xcc0000");
  mainEmb.setFooter(
      "Senate Meeting discussions powered by our most humble Imperator"
  );
  mainEmb.setThumbnail(
      "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
  );
  mainEmb.setAuthor(
      "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
      "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
  );
  mainEmb.setDescription("Motions to discuss in Senate meetings");

  let msgs = [];
  let sql2 = 'SELECT * FROM Motions';
  db.all(sql2, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      //message.channel.send(row.motion);
      if (clientdc.users.cache.get(row.creator) !== undefined) {
        let msg =
            row.motion +
            "\n" +
            "From:" +
            "<@!"+row.creator+">"+
            "\n" +
            "motion ID:" +
            row.mID +
            "\n" +
            "--------------------" +
            "\n";
        msgs.push(msg);
      }
    });

    if (msgs.length <= 25) {
      msgs.forEach(msg => mainEmb.addField(msg));
    } else {
      const args2 = [];
      for (let i = msgs.length; i > msgs.length / 2; i--) {
        args2.push(msgs[i]);
        msgs.pop();
      }
      msgs.forEach(msg => mainEmb.addField(msg));

      const secEmb = new Discord.MessageEmbed();

      secEmb.setTitle("Motions");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
      );
      secEmb.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
      );
      secEmb.setDescription("Motions to discuss in Senate meetings");

      args2.forEach(msg => secEmb.addField(msg));
    }
    //clientdc.channels.cache.get("705136080105767004").send(test);
  });
}

function updateEmbedMessage(message) {
  let embed = new Discord.MessageEmbed();

  embed.setTitle("Motions");
  embed.setColor("0xcc0000");
  embed.setFooter(
      "Senate Meeting discussions powered by our most humble Imperator"
  );
  embed.setThumbnail(
      "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
  );
  embed.setAuthor(
      "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
      "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
  );

  let msgs = [];
  let sql2 = `SELECT * FROM Motions`;
  db.all(sql2, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      //message.channel.send(row.motion);
      if (message.guild.members.cache.get(row.creator) !== undefined) {
        let msg =
            row.motion +
            "\n" +
            "From:" +
            message.guild.members.cache.get(row.creator).toString() +
            "\n" +
            "motion ID:" +
            row.mID +
            "";
        msgs.push(msg);
      }

      //message.channel.send(row.mID);
    });
    if (msgs.length <= 25) {
      msgs.forEach(msg => embed.addField("motions", msg+"/"+msgs.indexOf(msg)));
      var secEmb = new Discord.MessageEmbed();

      secEmb.setTitle("Motions");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
      );
      secEmb.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
      );
      secEmb.setDescription("Motions to discuss in Senate meetings");

      message.guild.channels.cache
          .get("705136080105767004")
          .messages.fetch({ around: "705898782935613501", limit: 1 })
          .then(messages => messages.first().edit({embeds: [embed]}));

      message.guild.channels.cache
          .get("705136080105767004")
          .messages.fetch({ around: "705898783757565995", limit: 1 })
          .then(messages => messages.first().edit({embeds: [secEmb]}));
    } else {

      const args2 = [];
      const length = (msgs.length % 2 === 0) ? (msgs.length) : (msgs.length + 1);

      for (var i = length / 2; i <= length; i++) {
        args2.push(msgs[i]);


        msgs.splice(i,1);

      }
      for(var i = args2.length-1; i >= 0; i--){if(args2[i] === undefined){args2.pop()}}

      var secEmb = new Discord.MessageEmbed();

      secEmb.setTitle("Motions");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
      );
      secEmb.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
      );
      secEmb.setDescription("Motions to discuss in Senate meetings");

      args2.forEach(msg => secEmb.addField("motion", msg+"/"+parseInt(args2.indexOf(msg) + msgs.length, 10), false));
      msgs.forEach(msg2 => embed.addField("motion", msg2+"/"+msgs.indexOf(msg2), false));
      message.guild.channels.cache
          .get("705136080105767004")
          .messages.cache.get({ around: "705898782935613501", limit: 1 })
          .then(messages => messages.first().edit({embeds: [embed]}));
      message.guild.channels.cache
          .get("705136080105767004")
          .messages.cache.get({ around: "705898783757565995", limit: 1 })
          .then(messages => messages.first().edit({embeds: [secEmb]}));
    }

  });
}

function postMussoFact(){
  let order = db2.prepare("SELECT fact FROM Mussofact").all();
  const randomElement = order[Math.floor(Math.random() * order.length)].fact;

  let embed = new Discord.MessageEmbed();

  embed.setTitle("Mussolini facts");
  embed.setColor("0x000000");
  embed.setFooter(
      "Facts powered by our most humble Imperator"
  );

  embed.addField("Fact:",randomElement);
  clientdc.channels.cache
      .get("514135876909924354").send({ embeds: [embed] });

}

function updateProvinceMessage() {
  let embed = new Discord.MessageEmbed();

  embed.setTitle("Provinces");
  embed.setColor("0xcc0000");
  embed.setFooter(
      "Provinces powered by our most humble Imperator"
  );
  embed.setThumbnail(
      "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
  );
  embed.setAuthor(
      "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
      "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
  );

  let msgs = [];
  let sql2 = `SELECT * FROM Province`;
  db.all(sql2, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      let msg =
          "income: "+
          row.income +
          "\n" +
          "population: " +
          row.population +
          "\n" +
          "influence: " +
          row.influence +
          "\n population growth: "+
          row.population_growth
      ;
      msgs.push(msg);
    });
    if (msgs.length <= 25) {
      msgs.forEach(msg => embed.addField(rows[msgs.indexOf(msg)].province, msg+"\n"+msgs.indexOf(msg)));
      var secEmb = new Discord.MessageEmbed();

      clientdc.guilds.cache.get(GuildID).channels.cache
          .get("817410470700515338")
          .messages.fetch({ around: "817410715018854410", limit: 1 })
          .then(messages =>  {messages.first().edit({embeds: [embed]})})

    } else {

      let i;
      const args2 = [];
      const length = (msgs.length % 2 === 0) ? (msgs.length) : (msgs.length + 1);

      for (i = length / 2; i <= length; i++) {
        args2.push(msgs[i]);


        msgs.splice(i,1);

      }
      for(i = args2.length-1; i >= 0; i--){if(args2[i] === undefined){args2.pop()}}

      var secEmb = new Discord.MessageEmbed();

      secEmb.setTitle("Provinces");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
      );
      secEmb.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
      );
      secEmb.setDescription("Motions to discuss in Senate meetings");

      args2.forEach(msg => secEmb.addField("Provinces", msg+"\n"+parseInt(args2.indexOf(msg) + msgs.length, 10), false));
      msgs.forEach(msg2 => embed.addField("Provinces", msg2+"\n"+msgs.indexOf(msg2), false));
      clientdc.guilds.cache.get("514135876909924352").channels.cache
          .get("817410470700515338")
          .messages.cache.get({ around: "817410715018854410", limit: 1 })
          .then(messages => messages.first().edit({embeds: [embed]}));
      clientdc.guilds.cache.get("514135876909924352").channels.cache
          .get("817410470700515338")
          .messages.cache.get({ around: "817411093537619979", limit: 1 })
          .then(messages => messages.first().edit({embeds: [secEmb]}));
    }

  });
}

function updateRPDate(RPName) {
  let date = db2.prepare("SELECT * FROM Currentdates WHERE RP_Server = ?").get(RPName);
  date.year++;

  clientdc.channels.cache
      .get("960998378265780281").send(date.year);

  db2.prepare('UPDATE Currentdates SET year = year + 1 WHERE RP_Server = ?').run(RPName);
}

clientdc.on("ready", (interaction) => {
  //Slash commands




  updateEmbed();


  db.get("SELECT COUNT(Governor) FROM Province", [], (err, row) => {
    if (err) {
      throw err;
    }

    row[0] = numberOfProvinces;
  });

  db.all("SELECT * FROM CandidateElections", [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      console.log("ceID \n" + row.ceID);
      console.log("candidate \n" + row.candidate);
      console.log("Election \n" + row.Election);
    });
  });

  db.all("SELECT * FROM Elections", [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      console.log("eID \n" + row.eID);
      console.log("Title \n" + row.Title);
      console.log("Month \n" + row.Month);
    });
  });


  CronJob.schedule('0 19 * * SUN', () => {
    clientdc.channels.cache
        .get("549645921487421495").send("<@&577587377195974656>");},{
    scheduled: true,
    timezone: "Europe/Berlin"
  });

  CronJob.schedule('0 0 * * *', () => {
    updateRPDate("Medieval");
  },{
    scheduled: true,
    timezone: "Europe/Berlin"
  });


  CronJob.schedule('0 12 * * *', () => {
    //updateRPDate("Medieval");
  },{
    scheduled: true,
    timezone: "Europe/Berlin"
  });



  CronJob.schedule('0 11 * * MON', () => {
    postMussoFact();
  },{
    scheduled: true,
    timezone: "Europe/Berlin"
  });

  CronJob.schedule('0 2 * * *', () => {

    provinceIncome()
  },{
    scheduled: true,
    timezone: "Europe/Berlin"
  });

  CronJob.schedule('* * * * *', () => {
    updateProvinceIncome();
  },{
    scheduled: true,
    timezone: "Europe/Berlin"
  });

  CronJob.schedule('0 3 * * 1', () => {
    collectTaxes();
  },{
    scheduled: true,
    timezone: "Europe/Berlin"
  });




});

function createProvinceEmbed(picURL,indexStart,indexEnd) {
  let provinces = new Discord.MessageEmbed();
  provinces.setDescription('Provinces of the Empire');
  provinces.setFooter("Provinces presented by your humble Imperator");
  provinces.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
  provinces.setTitle('Provinces');
  provinces.setImage(picURL);
  provinces.setColor('#cd1121');
  provinces.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", 'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473');
  let statement = db2.prepare("SELECT * FROM Province JOIN Governor ON Province.Governor = gov_ID")
  let rows = statement.all();
  for (let i = indexStart; i < indexEnd ; i++) {
    provinces.addField(rows[i].province, "<@" + rows[i].DiscordID + ">");
  }
  return provinces;
}

function createEmbedSingleProvince(u, provinceName) {


  let embP = new Discord.MessageEmbed();
  embP.setTitle(provinceName);
  embP.setFooter("Provinces presented by your humble Imperator");
  embP.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/846080867138011156/unknown.png');
  embP.setColor('#cd1121');

  //to Calculate income Brackets we fetch the list of all Provinces to determine its order
  let order = db2.prepare("SELECT * FROM Province ORDER BY income DESC").all();
  let rows = db2.prepare("SELECT resource, population, income, map, population_growth, DiscordID, province.province AS pro FROM Province JOIN Resources,Governor ON prov_id =    Resources.province AND Governor.gov_ID = Province.Governor WHERE Province.province = '"+provinceName+"'");
  console.log(provinceName);
  if (rows[0]) {
    rows.forEach((row) => {
      embP.addField("Resource", row.resource);
    })

    if(u.username){
      let av = u.displayAvatarURL();
      embP.setAuthor(u.username, av);
    } else {
      let av = u.user.displayAvatarURL();
      embP.setAuthor(u.displayName, av);
    }



    let provinceOrder = 0;
    for (let i = 0; i < order.length; i++) {
      provinceOrder++;
      if (order[i].province === rows[0].pro) {
        i = order.length;
      }
    }
    let actualTax = provinceOrder <= 5 ? 1 - taxRateTop5 : 1 - taxRate
    embP.setDescription(rows[0].income + " <:DNR:782312774083674163> daily (untaxed) || " + Math.floor(rows[0].income * actualTax) + " <:DNR:782312774083674163> daily (taxed) \n 🧍 Population: " + rows[0].population + "\n Population Growth: " + rows[0].population_growth)
    rows[0].map != null ? embP.setImage(rows[0].map) : embP.setImage("https://cdn.discordapp.com/attachments/559418842430963723/775017785969475634/unknown.png")
    return embP;
  }
  else {
    return embP;
  }

}





clientdc.ws.on("INTERACTION_CREATE", async interaction => {
  switch(interaction.data.name) {
    case "ping":
      if (interaction.member.roles.includes("548455006693752852")) {
        clientdc.api.interactions(interaction.id, interaction.token).callback.post({
          data: {
            type: 4,
            data: {
              content: 'Based'
            }
          }
        })
      } else {
        clientdc.api.interactions(interaction.id, interaction.token).callback.post({
          data: {
            type: 4,
            data: {
              content: 'Pleb'
            }
          }
        })
      }
      break;

    case "number":
      let n = 0;
      if (isNaN(parseInt(interaction.data.options[0].value))) {
        n = portunus.deromanize(interaction.data.options[0].value);
      } else n = portunus.romanize(parseInt(interaction.data.options[0].value));

      let emb = new Discord.MessageEmbed();
      emb.setColor('#8f0713');
      emb.setDescription(n);
      emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
      emb.setFooter("Roman numeral conversion powered by our most humble Imperator");

      clientdc.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            embeds: [emb]
          }
        }
      })
      break;
    case "mute":
      if (interaction.member.roles.includes("549712921450774556") || interaction.member.roles.includes("546654987061821440")) {
        const target = interaction.data.options[0];
        if (target) {


          let muteRole = clientdc.guilds.cache.get(interaction.guild_id).roles.cache.find(role => role.name === 'Imprisoned');

          let member = clientdc.guilds.cache.get(interaction.guild_id).members.cache.get(target.value);


          member.roles.add(muteRole.id);
          let emb = new Discord.MessageEmbed();
          emb.setColor('#8f0713');

          interaction.data.options[2] ? emb.setDescription(`<@${member.user.id}> has been muted for ${ms(ms(interaction.data.options[1].value))}, Reason: ${interaction.data.options[2].value}`) : emb.setDescription(`<@${member.user.id}> has been muted for ${ms(ms(interaction.data.options[1].value))}`);
          emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
          emb.setFooter("Muting powered by our most humble Imperator");

          clientdc.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
              type: 4,
              data: {
                embeds: [emb]
              }
            }
          })
          setTimeout(function () {
            member.roles.remove(muteRole.id);

          }, ms(interaction.data.options[1].value));
        } else {
          let emb = new Discord.MessageEmbed();
          emb.setColor('#8f0713');
          emb.setDescription("Cant find member");
          emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
          emb.setFooter("Muting powered by our most humble Imperator");

          clientdc.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
              type: 4,
              data: {
                embeds: [emb]
              }
            }
          })
        }
      } else {
        let emb = new Discord.MessageEmbed();
        emb.setColor('#8f0713');
        emb.setDescription("You do not have the permission to mute a user");
        emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
        emb.setFooter("Muting powered by our most humble Imperator");

        clientdc.api.interactions(interaction.id, interaction.token).callback.post({
          data: {
            type: 4,
            data: {
              embeds: [emb]
            }
          }
        })
      }
      break;

    case "unmute":
      if (interaction.member.roles.includes("549712921450774556") || interaction.member.roles.includes("546654987061821440")) {
        const target = interaction.data.options[0];
        if (target) {


          let muteRole = clientdc.guilds.cache.get(interaction.guild_id).roles.cache.find(role => role.name === 'Imprisoned');

          let member = clientdc.guilds.cache.get(interaction.guild_id).members.cache.get(target.value);


          member.roles.remove(muteRole.id);
          let emb = new Discord.MessageEmbed();
          emb.setColor('#8f0713');
          emb.setDescription(`<@${member.user.id}> has been unmuted`);
          emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
          emb.setFooter("Muting powered by our most humble Imperator");

          clientdc.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
              type: 4,
              data: {
                embeds: [emb]
              }
            }
          })

        }


      }
      break;
    case "ban":
      if (interaction.member.roles.includes("549712921450774556") || interaction.member.roles.includes("546654987061821440")) {
        const target = interaction.data.options[0];
        if (target) {

          let member = clientdc.guilds.cache.get(interaction.guild_id).members.cache.get(interaction.data.options[0].value);
          if(!member.roles.cache.has("546654987061821440")){
            if (interaction.data.options[1]) {
              member.ban(target.value, {reason: interaction.data.options[1].value}).then(ban => {
                let emb = new Discord.MessageEmbed();
                emb.setColor('#8f0713');
                emb.setDescription(`<@${member.user.id}> has been Executed in the name of the Imperator`);
                emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
                emb.setImage("https://i.pinimg.com/originals/7f/03/a2/7f03a2a21b82d96679788401c3ef323f.jpg");
                emb.setFooter("Banning powered by our most humble Imperator");

                clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                  data: {
                    type: 4,
                    data: {
                      embeds: [emb]
                    }
                  }
                })
              }).catch(err => clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                  type: 4,
                  data: {
                    content: "Cannot Ban this user"
                  }
                }
              }))
            } else {
              member.ban().then(ban => {
                let emb = new Discord.MessageEmbed();
                emb.setColor('#8f0713');
                emb.setDescription(`<@${member.user.id}> has been Executed in the name of the Imperator`);
                emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
                emb.setImage("https://i.pinimg.com/originals/7f/03/a2/7f03a2a21b82d96679788401c3ef323f.jpg");
                emb.setFooter("Banning powered by our most humble Imperator");

                clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                  data: {
                    type: 4,
                    data: {
                      embeds: [emb]
                    }
                  }
                })
              }).catch(err => clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                  type: 4,
                  data: {
                    content: "Cannot Ban this user"
                  }
                }
              }));
            }
          }else {
            clientdc.api.interactions(interaction.id, interaction.token).callback.post({
              data: {
                type: 4,
                data: {
                  content: "Cannot Ban this user"
                }
              }
            })
          }


        }


      }
      break;
    case "showprovince":


      let provinceName = interaction.data.options[0].value.toLowerCase();

      provinceWords = provinceName.split(" ");
      let province = "";
      provinceWords.forEach(p => {
        province += p[0].toUpperCase() + p.substring(1)+" "
      });
      province = province.trim();
      console.log(province);
      db.all("SELECT * FROM Province ORDER BY income DESC",[],(err,order) => {
        db.all("SELECT resource, population, income, map, population_growth, DiscordID, province.province AS pro FROM Province JOIN Resources,Governor ON prov_id =    Resources.province AND Governor.gov_ID = Province.Governor WHERE Province.province = '" + province + "'", [], (err, rows) => {
          if (rows[0]) {

            let id;
            id = rows[0].DiscordID;
            clientdc.guilds.cache.get('514135876909924352').members.fetch(id).then(u => {
              let embP = new Discord.MessageEmbed();
              embP.setTitle(province);
              embP.setFooter("Provinces presented by your humble Imperator");
              embP.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/846080867138011156/unknown.png');
              embP.setColor('#cd1121');

              for (let row of rows) {
                embP.addField("Resource", row.resource);
              }

              if(u.username){
                let av = u.displayAvatarURL();
                embP.setAuthor(u.username, av);
              } else {
                let av = u.user.displayAvatarURL();
                embP.setAuthor(u.displayName, av);
              }



              let provinceOrder = 0;
              for (let i = 0; i < order.length; i++) {
                provinceOrder++;
                if (order[i].province === rows[0].pro) {
                  i = order.length;
                }
              }
              let actualTax = provinceOrder <= 5 ? 1 - taxRateTop5 : 1 - taxRate
              embP.setDescription(rows[0].income + " <:DNR:782312774083674163> daily (untaxed) || " + Math.floor(rows[0].income * actualTax) + " <:DNR:782312774083674163> daily (taxed) \n 🧍 Population: " + rows[0].population + "\n Population Growth: " + rows[0].population_growth)
              rows[0].map != null ? embP.setImage(rows[0].map) : embP.setImage("https://cdn.discordapp.com/attachments/559418842430963723/775017785969475634/unknown.png")




              clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                  type: 4,
                  data: {
                    embeds: [embP]
                  }
                }
              })
            }).catch(error => {
              if(error){
                clientdc.users.fetch(id).then(u => {
                  let embed = createEmbedSingleProvince(u, province);

                  clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                      type: 4,
                      data: {
                        embeds: [embed]
                      }
                    }

                  })
                })
              }

            }).catch(error => {
              if(error){
                clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                  data: {
                    type: 4,
                    data: {
                      content: "Invalid Province name"
                    }
                  }
                });
              }

            })
          }
        })
      })

      break;
    case "provinces":

      let provinces = createProvinceEmbed("https://cdn.discordapp.com/attachments/543787157127561216/932676494466113626/unknown.png",0,25);
      let factionButton = new Discord.MessageButton()
          .setStyle('red') //default: blurple
          .setLabel('Faction Map') //default: NO_LABEL_PROVIDED
      let provinceButton = new Discord.MessageButton()
          .setStyle('red')
          .setLabel('Province Map')


      let cultureButton = new Discord.MessageButton()
          .setStyle('red')
          .setLabel('Culture Map')



      clientdc.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            embeds: [provinces],
            buttons: [cultureButton,factionButton,provinceButton]
          }
        }
      })

      break;
    case "unban":
      if(interaction.member.roles.includes("549712921450774556") || interaction.member.roles.includes("546654987061821440")) {
        const target = interaction.data.options[0];
        if (target) {

          let members = clientdc.guilds.cache.get(interaction.guild_id).members;
          members.unban(target.value).then(unban => {


            let emb = new Discord.MessageEmbed();
            emb.setColor('#8f0713');
            emb.setDescription(`<@${target.value.id}> has been pardoned in the name of the Imperator`);
            emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
            emb.setFooter("unbanning powered by our most humble Imperator");
            clientdc.api.interactions(interaction.id, interaction.token).callback.post({
              data: {
                type: 4,
                data: {
                  embeds: [emb]
                }
              }
            })
          }).catch(err => {clientdc.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
              type: 4,
              data: {
                content: "Cannot unban this user"
              }
            }
          })
            console.log(err);
          });

        }


      }
      break;
    case "kick":
      if(interaction.member.roles.includes("549712921450774556") || interaction.member.roles.includes("546654987061821440")) {
        const target = interaction.data.options[0];
        if (target) {

          let member = clientdc.guilds.cache.get(interaction.guild_id).members.cache.get(interaction.data.options[0].value);





          if(interaction.data.options[1]){
            member.kick(target.value, { reason: interaction.data.options[1].value}).then(ban => {
              let messageEmbed = new Discord.MessageEmbed();
              messageEmbed.setColor('#8f0713');
              messageEmbed.setDescription(`<@${member.id}> has been sent to Germania to fend off Barbarians in the name of the Imperator`);
              messageEmbed.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
              messageEmbed.setImage("https://i.pinimg.com/originals/22/b7/c9/22b7c9ed82e411d5c66037e820427622.jpg");
              messageEmbed.setFooter("kicking powered by our most humble Imperator");

              clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                  type: 4,
                  data: {
                    embeds: [messageEmbed]
                  }
                }
              })}).catch(err => {
              clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                  type: 4,
                  data: {
                    content: "Cannot kick this user"
                  }
                }
              })
              console.log(err);
            });
          } else {
            member.kick().then(ban => {
              let messageEmbed = new Discord.MessageEmbed();
              messageEmbed.setColor('#8f0713');
              messageEmbed.setDescription(`<@${member.id}> has been sent to Germania to fend off Barbarians in the name of the Imperator`);
              messageEmbed.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
              messageEmbed.setImage("https://i.pinimg.com/originals/22/b7/c9/22b7c9ed82e411d5c66037e820427622.jpg");
              messageEmbed.setFooter("kicking powered by our most humble Imperator");

              clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                  type: 4,
                  data: {
                    embeds: [messageEmbed]
                  }
                }
              })
            }).catch(err => {
              clientdc.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                  type: 4,
                  data: {
                    content: "Cannot kick this user"
                  }
                }
              })
              console.log(err);
            });
          }
        }


      }
      break;
    default:
      break;
  }});


function provinceIncome(){
  db.all("SELECT * FROM Province JOIN Governor ON Province.Governor = gov_ID ORDER BY income DESC",[],(err,rows) => {
    let totalIncomeAllProvincesBrutto = 0;
    let totalIncomeAllProvincesNetto = 0;
    let emb = new Discord.MessageEmbed();
    let emb2 = new Discord.MessageEmbed();
    let over25 = false;
    emb.setColor("0x00008b");
    emb.setFooter(dateformat());
    emb.setThumbnail("https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png");
    emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=158818642447");

    emb2.setColor("0x00008b");
    emb2.setFooter(dateformat());
    emb2.setThumbnail("https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png");
    emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=158818642447");
    for(let i = 0; i < rows.length; i++){
      let incometax = rows[i].income;
      if(i < 5){
        client.editUserBalance(GuildID, "700662464856981564", { cash: 0, bank: incometax*taxRateTop5})
        totalIncomeAllProvincesBrutto += incometax;
        incometax *= (1 - taxRateTop5);
        incometax = rows[i].Boosted? incometax+incometax*0.01 : incometax;
        //parseInt(rows[i].Admin) !== 0? client.editUserBalance(GuildID, String(rows[i].Admin), { cash: 0, bank: incometax*0.1}):
        totalIncomeAllProvincesNetto += incometax;
        client.editUserBalance(GuildID, String(rows[i].DiscordID), { cash: 0, bank: incometax})
        console.log(String(rows[i].DiscordID))
      }else{
        //client.editUserBalance(GuildID, "700662464856981564", { cash: 0, bank: incometax*taxRate})
        totalIncomeAllProvincesBrutto += incometax;
        incometax *= (1 - taxRate);
        incometax = rows[i].Boosted? incometax+incometax*0.01 : incometax;
        //parseInt(rows[i].Admin) !== 0? client.editUserBalance(GuildID, String(rows[i].Admin), { cash: 0, bank: incometax*0.1}, "province admin income"):
        totalIncomeAllProvincesNetto += incometax;
        client.editUserBalance(GuildID, String(rows[i].DiscordID), { cash: 0, bank: incometax}, "province income")
      }
      //Discord Api restriction only 25 fields allowed
      if(i < 25){
        emb.addField("Income: "+rows[i].province,"Income in denarii: "+incometax);
      }
      else {
        emb2.addField("Income: "+rows[i].province,"Income in denarii: "+incometax);
        over25 = true;
      }
    }
    emb.setTitle("total pre-tax: "+totalIncomeAllProvincesBrutto+"\n total post-tax: "+totalIncomeAllProvincesNetto)
    clientdc.channels.cache.get('791427239601766482').send({ embeds: [emb,emb2] });

    //clear boosts
    db.run("UPDATE Province SET boosted = false");
    //if secondary embed isnt empty send it
    /*if(over25){
        clientdc.channels.cache.get('791427239601766482').send(emb2);
    }*/
  })
}

function collectTaxes(){
  //getting member count
  let mem = clientdc.guilds.cache.get(GuildID).memberCount;
  let tax = 0;

  //request the leaderBoard through the API
  client.getGuildLeaderboard(GuildID).then(bal => {
    //go through every member
    for(let i = 0; i< mem; i++){
      let user = clientdc.guilds.cache.get(GuildID).members.cache.get(bal[i].user_id);
      //check if he is still a member
      if(user)
      {
        //check if he has the role Plebeian
        if(user.roles.cache.get("548455163044560897")){
          tax += bal[i].total*0.17;
          if(bal[i].bank > bal[i].cash){
            client.editUserBalance(GuildID, bal[i].user_id, { cash: 0, bank: -bal[i].total*0.17}, "taxes");
          }else{
            client.editUserBalance(GuildID, bal[i].user_id, { cash: -bal[i].total*0.17, bank: 0}, "taxes");
          }

        }
        else{
          tax += bal[i].total*0.08;
          if(bal[i].bank > bal[i].cash){
            client.editUserBalance(GuildID, bal[i].user_id, { cash: 0, bank: -bal[i].total*0.08}, "taxes");
          }else{
            client.editUserBalance(GuildID, bal[i].user_id, { cash: -bal[i].total*0.08, bank: 0}, "taxes");
          }

        }

      }else{
        tax += bal[i].total*0.17;
        if(bal[i].bank > bal[i].cash){
          client.editUserBalance(GuildID, bal[i].user_id, { cash: 0, bank: -bal[i].total*0.17}, "taxes");
        }else{
          client.editUserBalance(GuildID, bal[i].user_id, { cash: -bal[i].total*0.17, bank: 0}, "taxes");
        }
      }
    }
    //round the number upwards
    tax = Math.ceil(tax);
    addTransaction(tax,"Taxes");
    client.editUserBalance(GuildID, "700662464856981564", { cash: 0, bank: tax}, "taxes")
  });


}

clientdc.on('clickButton', async (button) => {
  if (button.id === 'faction_map') {
    let provinces = createProvinceEmbed("https://cdn.discordapp.com/attachments/543787157127561216/932676494466113626/unknown.png",0,25);
    let factionButton = new Discord.MessageButton()
        .setStyle('red') //default: blurple
        .setLabel('Faction Map') //default: NO_LABEL_PROVIDED

    let provinceButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Province Map')


    let cultureButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Culture Map')

    await button.message.edit({embeds: provinces, buttons: [factionButton,provinceButton,cultureButton]});
  }
  else
  if (button.id === 'province_map') {
    let provinces = createProvinceEmbed("https://cdn.discordapp.com/attachments/543787157127561216/932676494466113626/unknown.png",0,25);
    let factionButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Faction Map')


    let provinceButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Province Map')


    let cultureButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Culture Map')


    await button.message.edit({embeds: provinces, buttons: [factionButton,provinceButton,cultureButton]});
  }
  else
  if (button.id === 'culture_map') {
    let provinces = createProvinceEmbed("https://cdn.discordapp.com/attachments/543787157127561216/932676494466113626/unknown.pngg",0,25);
    let factionButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Faction Map')

    let provinceButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Province Map')

    let cultureButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Culture Map')

    await button.message.edit({embeds: provinces, buttons: [factionButton, provinceButton, cultureButton]});
  }
});
//simple test query
let sql = `SELECT * FROM Birthdates;`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach(row => {
    console.log(row.Birthdate);
    console.log(row.celebrated);
    console.log(row.DiscordID);
  });
});



function updateDate() {
  if (dateformat() !== date) {
    date = new Date();
    //console.log(dateformat("isoDate"));
    dates = dateformat("isoDate").split("-");
    time = dateformat(date, "longTime", true).split(":");
    if (dates[1].startsWith("0")) {
      dates[1] = dates[1].substring(1);
    }
    console.log(dates[1] + dates[2]);
    console.log(dateformat(date, "longTime", true));
    console.log(time[0] + time[1]);
  }
}

let query =
    `SELECT * FROM Birthdates WHERE Birthdate LIKE ` +
    "'%" +
    dates[1] +
    dates[2] +
    "'";

clientdc.on("messageReactionRemove",(reaction,user) => {
  if(user.id === '220590173962895360' && reaction.emoji.id === '640270832115122196')
  {

    let available = false;
    db.all('SELECT * FROM Generals WHERE DiscordID = '+reaction.message.author,[],(err,rows) =>{
      if(err){throw err;}

      if(rows[0] !== undefined)
      {available = true; }
      if(available){db.run('UPDATE Generals SET generals = generals-1 WHERE DiscordID = '+reaction.message.author.id);}
    });
  }

});


clientdc.on("messageReactionAdd",(reaction,user) => {
  if(user.id === '220590173962895360' && reaction.emoji.id === '640270832115122196')
  {

    let available = false;
    db.all('SELECT * FROM Generals WHERE DiscordID = '+reaction.message.author,[],(err,rows) =>{
      if(err){throw err;}

      if(rows[0] !== undefined)
      {available = true; }
      if(available){db.run('UPDATE Generals SET generals = generals+1 WHERE DiscordID = '+reaction.message.author.id);}else{
        db.run("INSERT INTO Generals(DiscordID,generals) VALUES('"+reaction.message.author.id+"',1)");
      }
    });
  }

});


clientdc.on("presenceUpdate", (oldPresence, newPresence) => {

  db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      updateDate();
      if (newPresence.userID === row.DiscordID && row.celebrated === 0) {
        db.run("UPDATE Birthdates SET celebrated = 1 WHERE bID = " + row.bID);
        clientdc.channels.cache
            .get("514135876909924354")
            .send(
                "happy Birthday " +
                newPresence.user.toString() +
                " :partying_face: :confetti_ball: :tada: "
            );
      }
    });
  });
});
function getUser(mention) {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    return clientdc.users.cache.get(mention);
  }
}

function getRole(mention, server) {
  if (!mention) return;

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("&")) {
      mention = mention.slice(1);
    }

    return clientdc.guilds.cache.get(server).roles.cache.get(mention);
  }
}
const applyText = (canvas, text,fontsize) => {
  const ctx = canvas.getContext('2d');

  // Declare a base size of the font
  let fontSize = fontsize;

  do {
    // Assign the font to the context and decrement it so it can be measured again
    ctx.font = `${fontSize -= 1}px font-family: 'Pacifico', cursive;`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (ctx.measureText(text).width > canvas.width - 300);

  // Return the result to use in the actual canvas
  return ctx.font;
};

function addTransaction(amount,reason){
  db.run("INSERT INTO Treasury(amount,reason) VALUES("+amount+",'"+reason+"')");
}

const command = process.env.Prefix;

function sanitizeQuery(query) {
  for (let i = 0; i < query.length; i++) {
    if (query.charAt(i).equals("'")){
      query.substring(0,i)+"'"+query.substring(i,query.length);
    }
  }
}

clientdc.on("messageCreate", message => {


  if (message.content === command+"help") {
    let emb = new Discord.MessageEmbed();
    emb.setColor(message.member.displayHexColor);
    emb.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
    emb.setFooter("Bot commands displayed by our most humble Imperator");
    emb.setAuthor("Help commands","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

    emb.addFields({ name: 'senate commands', value: 'motions:\n Displays all current standing motions \n-----------------\n smotion (motionID) or (motionnumber): \n Displays one particular motion\n-----------------\n motion (motion to be proposed): \n propose a motion \n----------------- \n deletemotion (motion id): \n deletes the motion with the motion id \n----------------- \n deleteallmotions: \n deletes all current motions'},
        {name: 'provincial commands', value: 'provinces: \n lists all provinces \n-----------------\n showprovince (name of province): \n shows a particular province \n-----------------\n bump: if youre a censor you can bump it for extra income \n----------------- \n showlegions \n shows the current standing legions'},
        {name: 'miscellaneous', value: 'quote (text): \n puts the text into a funny quote picture \n----------------- \n number (Roman numeral) or (number): \n converts a number to Roman numerals and vice versa \n-----------------\n challenge (contender a) (contender b): \n initiate a gladiator match \n----------------- \n bet (contender a) (contender b): \n initiate a gladiator battle with bets bet using the following Syntax after invoking the command: (contender) (amount) \n----------------- \n wiki \n pulls out a random fact \n ----------------- \n random (argument): \n generates a random string of text \n----------------- \n bible+(book) (chapter):(verse) \n quotes the appropriate part of the Bible'},
        {name: 'mod commands', value: 'addgovernor (governor) (discordID): \n (Imperator only) adds a governor to the empire \n----------------- \n addprovince (province name) (governorID) \n (Imperator only) adds a new province to the empire \n ----------------- \n addresource (name of the province) :(resource) \n ((bot) mod only) adds a resource to an existing province \n ----------------- \n removeresource (province name) :(resource) \n ((bot) mod only)removes a resource from a province \n----------------- \n editincome (province) (new Income) \n ((bot) mod only) alters the income of a province \n----------------- \n registerCensor (DiscordID of the Censor) (province name): (mod and botMod only) sets up a new Censor \n----------------- \n addLegion (legionName) (province) (Location) \n (botmod only) adds a Legion to our Empire  \n----------------- \n alterLegion (value that needs altering) (new value) (Legionname) \n (Botmod only) change a certain value of a certain legion '}
    );
    message.channel.send({ embeds: [emb] });
  }



  if(message.content.toLowerCase().includes(command+"rnd")){
    let args = message.content.split(" ");
    for(let i = 1; i <= args[1]; i++){
      let emb = new Discord.MessageEmbed();
      emb.setTitle("Random number");
      emb.addField("number",Math.trunc(Math.random()*100));
      message.channel.send({ embeds: [emb] });
    }
  }

  if(message.content.toLowerCase().includes(command+"bump")){
    let args = message.content.split(" ");
    if (message.member.roles.cache.has('806244416515604571')) {
      db.run("UPDATE Province SET boosted = true WHERE HasCensorOffice = true");
      message.channel.send("successfully boosted provinces");
    }else{
      message.channel.send("only Censors can boost a province");
    }

  }

  if(message.content.toLowerCase().includes(command+"registercensoroffice")){
    if (message.member.roles.cache.has('549712921450774556') || message.member.roles.cache.has('704023155487932457')) {
      let args = message.content.split(" ");
      //concatenate the whole Province name
      let province;
      for (var i = 1; i < args.length; i++) {
        province += args[i]+" ";
      }
      db.run("UPDATE Province SET HasCensorOffice = 'true' WHERE province = '"+args[2]+"'");
      message.channel.send("CensorOffice Built");
    }else
    {
      message.channel.send("not authorized to run this command");
    }
  }


  if(message.content.toLowerCase().includes(command+"showtreasury")){
    let emb = new Discord.MessageEmbed();
    emb.setColor("0x66023c");
    emb.setFooter("Imperial treasury powered by our most humble Imperator");
    emb.setAuthor("Imperial coffers","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

    db.get("SELECT SUM(amount) AS amount FROM Treasury",[],(err,res) => {emb.setDescription(res.amount+" <:DNR:782312774083674163>"); message.channel.send({ embeds: [emb] });});
  }

  if(message.content.toLowerCase().includes("provincom")){
    if(message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') || message.member.roles.cache.has('704023155487932457')){
      provinceIncome();
    }else{
      message.channel.send("Sorry, your not authorised to do that!");
    }
  }

  if(message.content.toLowerCase().includes("addtreasury")){
    var args = message.content.split(" ");
    addTransaction(args[1],args[2]);
    message.channel.send("updated Treasury");
  }

  if (message.content === command + "showDB") {
    if(message.author.id === '325296044739133450'){

      db.all("SELECT * FROM candidates", [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
          console.log("cID \n" + row.cID);
          console.log("DiscordID \n" + row.DiscordID);
        });

      });

      db.all("SELECT * FROM CandidateElections", [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
          console.log("ceID \n" + row.ceID);
          console.log("candidate \n" + row.candidate);
          console.log("Election \n" + row.Election);
          console.log("votes \n"+row.votes);
          console.log("order \n"+row.number);
        });
      });

      db.all("SELECT * FROM Elections", [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
          console.log("eID \n" + row.eID);
          console.log("Title \n" + row.Title);
          console.log("Month \n" + row.Month);
        });
      });

      db.all("SELECT * FROM Voters", [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
          console.log("vID \n" + row.vID);
          console.log("discordID \n" + row.DiscordID);

        });

        db.all("SELECT * FROM votercandidate", [], (err, rows) => {
          if (err) {
            throw err;
          }
          rows.forEach(row => {
            console.log("vcID \n" + row.vcID);
            console.log("voter \n" + row.voter);
            console.log("candidate \n" + row.candidate);

          });
        });

        db.all("SELECT * FROM Generals", [], (err, rows) => {
          if (err) {
            throw err;
          }
          rows.forEach(row => {

            console.log("general \n" + row.DiscordID);

          });
        });
      });



    }
    else {message.channel.send("sorry but you're not the Imperator "+"<@325296044739133450>")}
  }

  if(message.content.toLowerCase().includes(command+"battle")){
    let contenders = message.content.split(" : ");
    if(contenders.length === 6) {
      if (message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') || message.member.roles.cache.has('704023155487932457')) {
        let contenders = message.content.split(" : ");
        let attackers = contenders[0].split(" | ");
        let defenders = contenders[1].split(" | ");
        //split off the battle command
        attackers[0] = attackers[0].substring(8);
        let legionsA = [];
        let nonLegionsA = [];
        let legionsD = [];
        let nonLegionsD = [];
        let percentageOfArmies = [contenders[2], contenders[3]];
        let defenseboni = [contenders[4], contenders[5]];
        //check if Legions partake in Battle
        for (let i = 0; i < attackers.length; i++) {
          if (attackers[i].includes("Legio")) {
            legionsA.push(attackers[i]);
          } else {
            nonLegionsA.push(attackers[i]);
          }
        }

        for (let i = 0; i < defenders.length; i++) {
          if (defenders[i].includes("Legio")) {
            legionsD.push(defenders[i]);
          } else {
            nonLegionsD.push(defenders[i]);
          }

          //Queue the database entries starting with the attackers
          let queryLegion = "SELECT * FROM LegionComposition JOIN Legion,units ON L_ID = Legion AND U_ID = LegionComposition.unit WHERE name = '" + legionsA[0] + "' ";
          //append all the attacking legions first
          for (let i = 1; i < legionsA.length; i++) {
            queryLegion += "OR name = '" + legionsA[i] + "' "
          }
          db.all(queryLegion, [], (error, attackingLegions) => {
            let queryNonLegions = "SELECT * FROM Factionunits JOIN Factions ON F_ID = faction WHERE Name = '" + nonLegionsA[0] + "' ";
            for (let i = 1; i < nonLegionsA.length; i++) {
              queryNonLegions += "OR Name = '" + nonLegionsA[i] + "' "
            }
            db.all(queryNonLegions, [], (error2, attackingFactions) => {
              let queryLegionsD = "SELECT * FROM LegionComposition JOIN Legion,units ON L_ID = Legion AND U_ID = LegionComposition.unit WHERE name = '" + legionsD[0] + "' ";
              for (let i = 1; i < legionsD.length; i++) {
                queryLegionsD += "OR name = '" + legionsD[i] + "' "
              }
              db.all(queryLegionsD, [], (error2, defendingLegions) => {
                let queryNonLegionsD = "SELECT * FROM Factionunits JOIN Factions ON F_ID = faction WHERE Name = '" + nonLegionsD[0] + "' ";
                for (let i = 1; i < nonLegionsD.length; i++) {
                  queryNonLegions += "OR Name = '" + nonLegionsD[i] + "' "
                }
                db.all(queryNonLegionsD, [], (error3, defendingFactions) => {
                  let hp1 = 10000;
                  let hp2 = 10000;
                  let emb = new Discord.MessageEmbed();
                  emb.setImage("https://1.bp.blogspot.com/-ZbMMWQO4toE/Vi1WyeZNqnI/AAAAAAAABKE/Htni5mZ--Xo/s1600/Roman%2BLegion.jpg");
                  let a = "Attackers: ";
                  if (attackingLegions !== undefined) {
                    if (attackingLegions[0] !== undefined) {
                      a += attackingLegions[0].name + " ";
                    }
                  }
                  if (attackingFactions !== undefined) {
                    if (attackingFactions[0] !== undefined) {
                      a += attackingFactions[0].Name + " ";
                    }
                  }
                  emb.addField(a, hp1, true);
                  let d = "Defenders: ";
                  if (defendingLegions !== undefined) {
                    if (defendingLegions[0] !== undefined) {
                      d += defendingLegions[0].name + " ";
                    }
                  }
                  if (defendingFactions !== undefined) {
                    if (defendingFactions[0] !== undefined) {
                      d += defendingFactions[0].Name + " ";
                    }
                  }
                  emb.addField(d, hp2, true);
                  emb.setFooter("Battles powered by our most humble Imperator");
                  emb.setColor("0xFFFFFF");
                  message.channel.send({ embeds: [emb] }).then(res => {
                    let cturn = false;

                    //calculate the effective damage values based on number of cohorts
                    let aLAttack = 0;
                    let aLDefense = 0;
                    let aLHealth = 0;

                    for (let i = 0; i < attackingLegions.length; i++) {
                      aLAttack += parseInt(attackingLegions[i].Attack) * parseInt(percentageOfArmies[0]) * (1 + parseInt(attackingLegions[i].attack_boni));
                      aLDefense += parseInt(attackingLegions[i].Defense) * parseInt(percentageOfArmies[0])* (1 + parseInt(attackingLegions[i].defense_boni));
                      aLHealth += parseInt(attackingLegions[i].Health) * parseInt(percentageOfArmies[0]);
                      aLDefense *= 1+parseFloat(defenseboni[0]);
                    }

                    let dLAttack = 0;
                    let dLDefense = 0;
                    let dLHealth = 0;
                    for (let i = 0; i < defendingLegions.length; i++) {
                      dLAttack += parseInt(defendingLegions[i].Attack * parseInt(percentageOfArmies[0]))* (1 + parseInt(defendingLegions[i].attack_boni));
                      dLDefense += parseInt(defendingLegions[i].Defense * parseInt(percentageOfArmies[0])) * (1 + parseInt(defendingLegions[i].attack_boni));
                      dLHealth += parseInt(defendingLegions[i].Health * parseInt(percentageOfArmies[0]));
                      dLDefense *= 1+parseFloat(defenseboni[1]);
                    }

                    let aFAttack = 0;
                    let aFDefense = 0;
                    let aFHealth = 0;
                    for (let i = 0; i < attackingFactions.length; i++) {
                      aFAttack += parseInt(attackingFactions[i].Attack) * parseFloat(attackingFactions[i].percentage);
                      aFDefense += parseInt(attackingFactions[i].Defense) * parseFloat(attackingFactions[i].percentage);
                      aFHealth += parseInt(attackingFactions[i].Health) * parseFloat(attackingFactions[i].percentage);
                      aFDefense *= 1+parseFloat(defenseboni[0]);
                    }

                    let dFAttack = 0;
                    let dFDefense = 0;
                    let dFHealth = 0;
                    for (let i = 0; i < defendingFactions.length; i++) {
                      dFAttack += parseInt(defendingFactions[i].Attack) * parseFloat(defendingFactions[i].percentage);
                      dFDefense += parseInt(defendingFactions[i].Defense) * parseFloat(defendingFactions[i].percentage);
                      dFHealth += parseInt(defendingFactions[i].Health) * parseFloat(defendingFactions[i].percentage);
                      dFDefense *= 1+parseFloat(defenseboni[1]);
                    }

                    //console.log(dFAttack+" "+dFDefense+" "+dFHealth+":"+aLAttack+" "+aLDefense+" "+aLHealth+" "+defendingFactions[0].percentage)
                    hp1 = Math.floor(10000 + (aLHealth + aFHealth));
                    hp2 = Math.floor(10000 + (dLHealth + dFHealth));
                    let int = setInterval(function () {


                      if (cturn === true) {
                        hp1 -= Math.abs(Math.floor(Math.random() * ((dFAttack + dLAttack)) - (aLDefense + aFDefense)));

                        if (hp1 < 0) {
                          hp1 = 0
                        }
                        let emb2 = new Discord.MessageEmbed();
                        emb2.setImage("https://1.bp.blogspot.com/-ZbMMWQO4toE/Vi1WyeZNqnI/AAAAAAAABKE/Htni5mZ--Xo/s1600/Roman%2BLegion.jpg");
                        emb2.addField(a, hp1, true);
                        emb2.addField(d, hp2, true);
                        emb2.setFooter("Battles powered by our most humble Imperator");
                        emb2.setColor("0x8B0000");
                        res.edit(emb2);
                        cturn = false;
                      } else {
                        hp2 -= Math.abs(Math.floor(Math.random() * (aFAttack + aLAttack) - (dLDefense + dFDefense)))

                        if (hp2 < 0) {
                          hp2 = 0
                        }
                        let emb2 = new Discord.MessageEmbed();
                        emb2.setImage("https://i.pinimg.com/originals/fa/94/71/fa94710c7832f410703bf600c903de9b.jpg");
                        emb2.addField(a, hp1, true);
                        emb2.addField(d, hp2, true);
                        emb2.setFooter("Battles powered by our most humble Imperator");
                        emb2.setColor("0x8B0000");
                        res.edit(emb2);
                        cturn = true;
                      }

                      if (hp1 === 0 || hp2 === 0) {
                        clearInterval(int);
                        let emb3 = new Discord.MessageEmbed();
                        emb3.addField("Winner", hp1 === 0 ? d : a);
                        emb3.setImage("https://digitalmapsoftheancientworld.files.wordpress.com/2019/02/2118.png");
                        emb3.setFooter("Battles powered by our most humble Imperator");
                        emb3.setColor("0xFFDF00");
                        res.edit(emb3).catch(err => console.log(err))
                      }

                    }, 1500);
                  })

                })
              })
            })

          })


        }
      } else {
        message.channel.send("only a mod/gm can initiate a battle");
      }
    }else{
      message.channel.send("invalid arguments");
    }
  }

  if (message.content.toLowerCase().includes(command+"editpopgrowth")){
    //checks if user is a mod
    if (message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') || message.member.roles.cache.has('704023155487932457')) {
      let args = message.content.split(" ");
      let prov = args[1];
      //if the province name is multiple words long iterate through all the names
      if(args.length > 3){
        for(let i = 2; i < args.length-1; i++){
          if(args[i])
          {
            prov += " "+args[i];
          }
        }
      }

      db.run("UPDATE Province SET population_growth = '"+args[args.length-1]+"' WHERE province = '"+prov+"'");
      message.channel.send("population growth changed for province:"+prov+" the new population growth is:"+args[args.length-1])
      //embed for logging purposes
      let emb = new Discord.MessageEmbed();
      emb.setColor("0x00008b");
      emb.addField("Action:","population growth changed to "+args[args.length-1]+" in "+prov+"\n by: <@!"+message.author.id+">");
      emb.setFooter(dateformat());
      clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
      updateProvinceMessage();
    }
    else message.channel.send("Sorry, but only a mod can alter the income of a province");
  }

  if (message.content.toLowerCase().includes(command+"editinfluence")){
    //checks if user is a mod
    if (message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') || message.member.roles.cache.has('704023155487932457')) {
      let args = message.content.split(" ");
      let prov = args[1];
      //if the province name is multiple words long iterate through all the names
      if(args.length > 3){
        for(let i = 2; i < args.length-1; i++){
          if(args[i])
          {
            prov += " "+args[i];
          }
        }
      }

      db.run("UPDATE Province SET influence = '"+args[args.length-1]+"' WHERE province = '"+prov+"'");
      message.channel.send("influence changed for province:"+prov+" the new influence is:"+args[args.length-1])
      //embed for logging purposes
      let emb = new Discord.MessageEmbed();
      emb.setColor("0x00008b");
      emb.addField("Action:","influence changed to "+args[args.length-1]+" in "+prov+"\n by: <@!"+message.author.id+">");
      emb.setFooter(dateformat());
      clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
      updateProvinceMessage();
    }
    else message.channel.send("Sorry, but only a mod can alter the income of a province");
  }

  if (message.content.toLowerCase().includes(command+"addlegion")) {
    let args = message.content.split(":");
    if(message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') ||    message.member.roles.cache.has('704023155487932457')){

      //remove the command from the string
      let temp = args[0].split(" ");
      let str = temp[0];
      for (var i = 1; i < temp.length; i++) {
        str += " "+temp[i];
      }

      db.run("INSERT INTO Legion(name,Province,Location) VALUES('"+str+"','"+args[1]+"','"+args[2]+"')");
      message.channel.send("Legion successfully added");
      //embed for logging purposes
      let emb = new Discord.MessageEmbed();
      emb.setColor("0x00008b");
      emb.addField("Action:","Legion :"+args[3]+" created");
      emb.setFooter(dateformat());
      clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
    }
  }

  if(message.content.toLowerCase().includes(command+"tax")){
    collectTaxes();
  }

  if(message.content.toLowerCase().includes(command+"alterlegion")){
    if(message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') ||    message.member.roles.cache.has('704023155487932457')){
      let args = message.content.split(" ");
      let changedValue;
      let legion;
      if(args[3] !== "Legio") {
        changedValue = message.content.split("|")[1];
        legion = message.content.split("|")[2];
      }
      else{
        changedValue = args[2];
        legion = args[3];
        for(let i = 4; i < args.length; i++){legion += " "+args[i];}
      }

      db.run("UPDATE Legion SET "+args[1]+" = '"+changedValue+"' WHERE name = '"+legion+"'");
      message.channel.send("Legion successfully edited");
      //embed for logging purposes
      let emb = new Discord.MessageEmbed();
      emb.setColor("0x00008b");
      emb.addField("Action:","Legion "+legion+" altered: changed "+args[1]+" to "+changedValue+"\n by: <@!"+message.author.id+">");
      emb.setFooter(dateformat());
      clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
    }
  }


  if(message.content.toLowerCase() === command+"showlegions"){
    let emb = new Discord.MessageEmbed();
    emb.setFooter("Legions presented by your humble Imperator");
    emb.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
    emb.setTitle('Legions');
    emb.setColor('#cd1121');
    emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473');

    db.all("SELECT * FROM Legion JOIN Province ON Legion.province = Province.prov_id",[],(err,rows) => {
      //API restriction embeds can only have 25 elements
      if(rows.length <= 25){
        rows.forEach(row => {
          emb.addField(row.name,"From Province: "+row.Province +"\n Legate: "+row.Legate+"\n Stationed in: "+row.Location);
        });
        message.channel.send({ embeds: [emb] });
      }else{
        let emb2 = new Discord.MessageEmbed();
        emb.setFooter("Provinces presented by your humble Imperator");
        emb.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
        emb.setTitle('Legions');
        emb.setColor('#cd1121');
        emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473');
        for(let i = 0; i < 26; i++){
          emb.addField(rows[i].name,"From Province: "+rows[i].province +"\n Legate: "+rows[i].Legate+"\n Stationed in: "+rows[i].Location);
        }
        for(let i = 26; i < 51; i++){
          emb2.addField(rows[i].name,"From Province: "+rows[i].province +"\n Legate: "+rows[i].Legate+"\n Stationed in: "+rows[i].Location);
        }
        message.channel.send({ embeds: [emb,emb2] });
      }

    });


  }

  if(message.content.toLowerCase().includes(command+"legion")){
    let args = message.content.split(" ");
    let emb = new Discord.MessageEmbed();
    emb.setFooter("Legions presented by your humble Imperator");
    emb.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
    emb.setColor('#cd1121');
    emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473');
    let inp = "";
    for (i = 1; i < args.length-1; i++) {
      inp += args[i] + " ";
    }
    //concatenate last word without a space
    inp += args[args.length-1];
    emb.setTitle(inp);
    db.all("SELECT * FROM LegionComposition JOIN Legion,Units ON L_ID = Legion AND U_ID = LegionComposition.unit WHERE name = '"+inp+"'",[],(err,rows) => {

      if(rows[0] !== undefined){
        rows.forEach(row => {
          emb.addField(row.Unit,"Size: "+row.size);
        })
        emb.setImage(rows[0].banner);
        message.channel.send({ embeds: [emb] });
      }else{
        message.channel.send("Legion not found");
      }

    })

  }

  if(message.content.toLowerCase() === command+"provinces"){
    let emb = createProvinceEmbed("https://cdn.discordapp.com/attachments/543787157127561216/932676494466113626/unknown.png",0,25);
    /*let factionButton = new Discord.MessageButton()
        .setStyle('red') //default: blurple
        .setLabel('Faction Map') //default: NO_LABEL_PROVIDED
    let provinceButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Province Map')

    let cultureButton = new Discord.MessageButton()
        .setStyle('red')
        .setLabel('Culture Map')
    console.log(emb)*/
    message.channel.send({ embeds: [emb] }).then(m => {
      m.react('⏮️');
      m.react('⏭️');
      const filter = (reaction, user) => {
        if(reaction.emoji.name === '⏮️' && user.id === message.author.id){
          return true
        } else return reaction.emoji.name === '⏭️' && user.id === message.author.id;
      };
      //saves all possible options into an array
      let currentpic = 0;
      let pics = ["https://cdn.discordapp.com/attachments/548918811391295489/846080867138011156/unknown.png","https://cdn.discordapp.com/attachments/771315528471806032/845960254520557598/unknown.png","https://cdn.discordapp.com/attachments/514135876909924354/813764720607625276/unknown.png"]
      const collector = m.createReactionCollector({filter, time: 150000 });

      collector.on('collect', (reaction, user) => {
        reaction.users.remove(user);
        if(reaction.emoji.name === '⏭️'){
          currentpic++;
          if(currentpic >= pics.length){
            currentpic = 0;
          }
          emb.setImage(pics[currentpic]);
          m.edit({ embeds: [emb] })
        }
        else{
          currentpic--;
          if(currentpic < 0){
            currentpic = pics.length-1;
          }
          emb.setImage(pics[currentpic]);
          m.edit({ embeds: [emb] })
        }
      });
    })

  }

  if (message.content.toLowerCase().includes(command+"showprovince")){
    let args = message.content.split(" ");
    let emb = new Discord.MessageEmbed();
    emb.setFooter("Provinces presented by your humble Imperator");
    emb.setThumbnail('https://cdn.discordapp.com/attachments/680733248396984330/785230951998947328/unknown.png');
    emb.setColor('#cd1121');

    let province = args[1].toLowerCase();
    province = province[0].toUpperCase() + province.substring(1);
    if(args.length >= 3){

      for (let i = 2; i < args.length; i++) {
        word = args[i];
        province += " "+word[0].toUpperCase() + word.substring(1);
      }
    }



    db.all("SELECT * FROM Province ORDER BY income DESC",[],(err,order) => {
      db.all("SELECT resource, population, income, map, population_growth, DiscordID, province.province AS pro FROM Province JOIN Resources,Governor ON prov_id =    Resources.province AND Governor.gov_ID = Province.Governor WHERE Province.province = '"+province+"'",[],(err,rows) => {

        if (err){console.log(err)}
        if (rows[0] !== undefined) {
          rows.forEach((row) => {
            emb.addField("Resource", row.resource);
          })

          let id;
          id = rows[0].DiscordID;
          clientdc.guilds.cache.get('514135876909924352').members.fetch(id).then(u =>{
            let av = u.user.displayAvatarURL();
            emb.setAuthor(u.displayName,av);
            let provinceOrder = 0;
            for(let i = 0; i < order.length; i++){
              provinceOrder++;
              if(order[i].province === rows[0].pro){
                i = order.length
              }
            }
            let actualTax = provinceOrder <= 5 ? 1 -taxRateTop5 : 1 - taxRate
            emb.setDescription(rows[0].income+" <:DNR:782312774083674163> daily (untaxed) || "+Math.floor(rows[0].income*actualTax)+" <:DNR:782312774083674163> daily (taxed) \n 🧍 Population: "+rows[0].population+"\n"+" Population Growth: "+rows[0].population_growth)
            rows[0].map != null ? emb.setImage(rows[0].map) : emb.setImage("https://cdn.discordapp.com/attachments/559418842430963723/775017785969475634/unknown.png")
            message.channel.send({ embeds: [emb] });
          })
        }else message.channel.send("not a valid province name");
      });
    });
  }

  if(message.content.toLowerCase().includes(command+"addgovernor")) {
    let args = message.content.split(" ");
    if (message.member.roles.cache.has('514143501697679361') || message.member.roles.cache.has('704023155487932457')) {
      db.run("INSERT INTO Governor(governor,DiscordID) VALUES('"+args[1]+"','"+args[2]+"')")
      message.channel.send("successfully registered Governor");
      //embed for logging purposes
      let emb = new Discord.MessageEmbed();
      emb.setColor("0x00008b");
      emb.addField("Action:","governor added: "+args[1]+"\n by: <@!"+message.author.id+">");
      emb.setFooter(dateformat());
      clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
    }
    else message.channel.send("sorry, only the Imperator is allowed to do that");
  }

  if(message.content.toLowerCase().includes(command+"addprovince")){
    let args = message.content.split(" ");
    if (message.member.roles.cache.has('514143501697679361') || message.member.roles.cache.has('704023155487932457')) {
      //check if Governor is already created if not he does nothing
      db.get("SELECT * From Governor WHERE DiscordID = '"+args[args.length-1]+"'",[],(err,row) => {

        //checks if the governor is already indexed
        if(row) {
          //checks if the name exceeds multiple lines, if that is the case then he concatenates the string accordingly
          let province = args[1]
          if(args.length > 4){

            for (let i = 2; i < args.length-2; i++) {
              province += " "+args[i];
            }
          }
          db.run("INSERT INTO Province(province,Governor,income) VALUES('"+province+"','"+row.gov_ID +"','"+args[args.length-2]+"')")
          message.channel.send("Province added successfully")
          //embed for logging purposes
          let emb = new Discord.MessageEmbed();
          emb.setColor("0x00008b");
          emb.addField("Action:","province "+province+"added with governor <@"+row.gov_ID+"> and income "+args[args.length-2]+"\n by: <@!"+message.author.id+">");
          emb.setFooter(dateformat());
          clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
        }else{message.channel.send("that governor is not assigned yet")}
      })



    }else message.channel.send("Sorry, but only the Imperator can proclaim a new province");
  }

  if (message.content.toLowerCase().includes(command+"editincome")){
    //checks if user is a mod
    if (message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') || message.member.roles.cache.has('704023155487932457')) {
      let args = message.content.split(" ");
      let prov = args[1];
      //if the province name is multiple words long iterate through all the names
      if(args.length > 3){
        for(let i = 2; i < args.length-1; i++){
          if(args[i])
          {
            prov += " "+args[i];
          }
        }
      }

      db.run("UPDATE Province SET income = '"+args[args.length-1]+"' WHERE province = '"+prov+"'");
      message.channel.send("income changed for province:"+prov+" the new income is:"+args[args.length-1])
      //embed for logging purposes
      let emb = new Discord.MessageEmbed();
      emb.setColor("0x00008b");
      emb.addField("Action:","income changed to "+args[args.length-1]+" in "+prov+"\n by: <@!"+message.author.id+">");
      emb.setFooter(dateformat());
      clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
      updateProvinceMessage();
    }
    else message.channel.send("Sorry, but only a mod can alter the income of a province");
  }

  if (message.content.toLowerCase().includes(command+"editpopulation")){
    //checks if user is a mod
    if (message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') || message.member.roles.cache.has('704023155487932457')) {
      let args = message.content.split(" ");
      let prov = args[1];
      //if the province name is multiple words long iterate through all the names
      if(args.length > 3){
        for(let i = 2; i < args.length-1; i++){
          if(args[i])
          {
            prov += " "+args[i];
          }
        }
      }

      db.run("UPDATE Province SET population = '"+args[args.length-1]+"' WHERE province = '"+prov+"'");
      message.channel.send("population changed for province:"+prov+" the new population is:"+args[args.length-1])
      //embed for logging purposes
      let emb = new Discord.MessageEmbed();
      emb.setColor("0x00008b");
      emb.addField("Action:","population changed to "+args[args.length-1]+" in "+prov+"\n by: <@!"+message.author.id+">");
      emb.setFooter(dateformat());
      clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
      updateProvinceMessage();
    }
    else message.channel.send("Sorry, but only a mod can alter the income of a province");
  }

  if (message.content.toLowerCase().includes(command+"addresource")){
    let args = message.content.split(" ");
    if(message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') || message.member.roles.cache.has('704023155487932457')) {
      let temp = message.content.split(":")[0].split(" ");
      let prov = args[1];
      //if the province name is multiple words long iterate through all the names
      for(let i = 2; i < temp.length; i++){
        if(temp[i])
        {
          prov += " "+temp[i];
        }
      }



      db.get("SELECT * From Province WHERE province = '"+prov+"'", [], (err, row) => {
        if (row) {

          let res = message.content.split(":")[1]



          db.run("INSERT INTO Resources(resource,province,Level) VALUES('"+res+"','"+row.prov_id+"',0)")
          message.channel.send("resource added successfully")


          //embed for logging purposes
          let emb = new Discord.MessageEmbed();
          emb.setColor("0x00008b");
          emb.addField("Action:","resource "+res+" added in "+prov+"\n by: <@!"+message.author.id+">");
          emb.setFooter(dateformat());
          clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
        }else message.channel.send("not a province")
      })
    } else message.channel.send("Sorry, but only mods can add a resource")
  }

  if (message.content.toLowerCase().includes(command+"removeresource")){
    let args = message.content.split(" ");
    if(message.member.roles.cache.has('546654987061821440') || message.member.roles.cache.has('565594839828398100') || message.member.roles.cache.has('704023155487932457')) {
      let temp = message.content.split(":")[0].split(" ");
      let prov = args[1];
      //if the province name is multiple words long iterate through all the names
      for(let i = 2; i < temp.length; i++){
        if(temp[i])
        {
          prov += " "+temp[i];
        }
      }



      db.get("SELECT * From Province WHERE province = '"+prov+"'", [], (err, row) => {
        if (row) {

          let res = message.content.split(":")[1]



          db.run("DELETE FROM Resources WHERE province ='"+row.prov_id+"' AND resource LIKE '%"+res+"%'")
          message.channel.send("resource removed successfully")
          //embed for logging purposes
          let emb = new Discord.MessageEmbed();
          emb.setColor("0x00008b");
          emb.addField("Action:","resource "+res+" removed in "+prov+"\n by: <@!"+message.author.id+">");
          emb.setFooter(dateformat());
          clientdc.channels.cache.get("791427239601766482").send({ embeds: [emb] });
        }else message.channel.send("not a province")
      })
    } else message.channel.send("Sorry, but only mods can add a resource")
  }

  if(message.content.toLowerCase() === command+"lb"){
    let emb = new Discord.MessageEmbed();
    emb.setColor("0xe94606");
    emb.setAuthor("Leaderboard for the most Generalissimo reactions",message.author.avatarURL());
    emb.setFooter("General reactions powered by our most humble Imperator");

    db.all('SELECT * FROM Generals ORDER BY generals DESC',[],(err,rows) => {
      if(err){throw err;}
      rows.forEach(row => {
        if(row.DiscordID !== "220590173962895360" && clientdc.users.cache.get(row.DiscordID)){emb.addField(clientdc.guilds.cache.get("514135876909924352").members.cache.get(row.DiscordID).displayName,row.generals+"\n"+message.guild.members.cache.get(row.DiscordID).toString(),false);
        }});
      message.channel.send({ embeds: [emb] });

    });

  }

  if(message.content.toLowerCase() === command+"general")
  {
    let emb = new Discord.MessageEmbed();
    emb.setColor(message.member.displayHexColor);



    emb.setTitle(message.member.nickname,message.author.avatarURL());
    emb.setFooter("General reactions powered by our most humble Imperator");
    db.get('SELECT * FROM Generals WHERE DiscordID = '+message.author.id,[],(err,row) => {
      if(err){throw err;}
      if (row === undefined){emb.addField("Generals","0",true)}else{
        emb.addField("Generals",row.generals,true);
        emb.setAuthor(
            message.member.nickname,
            clientdc.users.cache.get(message.author.id).avatarURL()
        );


      }
      if(!message.member.nickname){
        emb.setTitle(message.author.username,message.author.avatarURL());
        emb.setAuthor(
            message.author.username,
            clientdc.users.cache.get(message.author.id).avatarURL()
        );
      }
      message.channel.send({ embeds: [emb] });
    });

  }

  if(message.content.toLowerCase().includes(command+"insertcandidate"))
  {
    var args = message.content.split(" ");

    db.get(
        "SELECT cID FROM candidates WHERE DiscordID = '" +
        args[1] +
        "';",
        [],
        (err, rowss) => {
          if(rowss === undefined){db.run("INSERT INTO Candidates(DiscordID) VALUES('"+args[1]+"')");}
          let eID,cID;
          cID = rowss.cID;
          db.get("SELECT eID FROM Elections WHERE Month = '"+args[3]+"' AND Title = '"+args[2]+"'",[],(err, row)=> {
            eID = row.eID;
            db.run('INSERT INTO CandidateElections(candidate,Election,number) VALUES("' +cID +'","' +eID +'",'+args[4]+')')

          }); });
    message.channel.send("candidate manually inserted");
  }
  if(message.content.includes(command+"random"))
  {
    let statement = "";
    let args = message.content.split(" ");
    for (var i = 1; i < args.length; i++) {
      statement += " "+args[i];
    }

    let emb = new Discord.MessageEmbed();
    emb.setColor(message.member.displayHexColor);
    emb.setDescription(randomfacts.make(statement));
    emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
    emb.setFooter("random facts powered by our most humble Imperator");
    message.channel.send({ embeds: [emb] });

  }

  if(message.content.toLowerCase().includes(command+"chart"))
  {
    let args = message.content.split(" ");
    let tit = "";
    let val = "t:";
    for(let i = 1; i < args.length; i++)
    {
      if(i % 2 === 0){val += args[i]+","}else{tit += args[i]+"|";}

    }

    console.log(tit+"\n"+val);
    let pieChart = ImageCharts().cht('p3').chs('250x190') // 700px x 190px
        .chd(val) // 2 data points: 60 and 40
        .chl(tit).chtt("chart").toURL();
    let attachment = new Discord.MessageAttachment(pieChart,"test.png");
    let emb = new Discord.MessageEmbed();
    emb.setImage(pieChart);

    message.channel.send({ embeds: [emb] });

  }


  if(message.content.toLowerCase().includes(command+"wiki"))
  {

    let emb = new Discord.MessageEmbed();
    wikiFacts.getRandomFact().then(function(fact) {
      emb.setDescription(fact);
      emb.setColor(message.member.displayHexColor);

      emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
      emb.setFooter("random facts powered by our most humble Imperator");
      message.channel.send({ embeds: [emb] });


    });

  }

  if(message.content.includes(command+"number"))
  {
    var args = message.content.split(" ");

    let n = 0;
    if(isNaN(args[1]))
    {
      n = portunus.deromanize(args[1]);
    }else n = portunus.romanize(parseInt(args[1]));

    let emb = new Discord.MessageEmbed();
    emb.setColor(message.member.displayHexColor);
    emb.setDescription(n);
    emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
    emb.setFooter("Roman numeral conversion powered by our most humble Imperator");
    message.channel.send({ embeds: [emb] });
  }

  if(message.content.includes(command+"bible")){
    var args = message.content.split("+");
    const newargs = args[1].split(":");
    bible.getVerse(newargs[0]+":1",(err,data) => {

      let title = data[0].title;


      bible.getVerse(args[1],(err,datas) => {
        if(datas[0].title === undefined){
          title = data[0].title;

          var emb = new Discord.MessageEmbed();
          emb.setTitle("SCRIPTVRA SACRA");
          emb.setColor("0xe2b007");
          emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
          emb.setFooter("bible quotes powered by our most humble Imperator");
          emb.setThumbnail("https://i.imgur.com/xGz7rVU.png");

          emb.addField(title+": \n"+args[1],datas[0].text,true);
          message.channel.send({ embeds: [emb] });
        }else{

          var emb = new Discord.MessageEmbed();
          emb.setTitle("SCRIPTVRA SACRA");
          emb.setColor("0xe2b007");
          emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
          emb.setFooter("bible quotes powered by our most humble Imperator");
          emb.setThumbnail("https://i.imgur.com/xGz7rVU.png");

          emb.addField(title+": \n"+args[1],datas[0].text,true);
          message.channel.send({ embeds: [emb] });
        }
      });

    });


  }
  if(message.content.toLowerCase().includes(command+"quote"))
  {
    var args = message.content.split(" ");
    let arg = "";
    for(var i = 1; i<args.length; i++){arg += " "+args[i];}

    const canvas = can.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background =  new can.Image();
    background.src = './Rome.jpg';
    if(true){
      //ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }

    ctx.strokeStyle = '#ffffff';

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0,0,canvas.width,canvas.height);

    // Assign the decided font to the canvas
    ctx.font = applyText(canvas, arg,60);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(arg, canvas.width / 3, canvas.height / 3.5);

    const author = message.guild.members.cache.get(message.author.id).displayName;
    ctx.font = applyText(canvas,author,15);


    ctx.fillText("- "+author+"-  \n"+dateformat("longDate"), canvas.width / 2, canvas.height / 1.1);

    // Pick up the pen
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(165, 165, 0,
        225, 225, 100);

    // Opaque white in the middle
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(1, "#000");

    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = gradient;
    // Start the arc to form a circle
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    // Put the pen down
    ctx.closePath();
    // Clip off the region you drew on
    ctx.clip();

    const avatar = new can.Image();
    avatar.src = message.author.displayAvatarURL({ format: 'png' });
    avatar.onload = () => {ctx.drawImage(avatar, 25, 25, 200, 200);


      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'quote.png');

      message.channel.send(attachment);
    }
  }

  // If the message is "ping"
  if (message.content === "ping") {
    // Send "pong" to the same channel
    message.channel.send("Pong I guess");
    if(clientdc.guilds.cache.get('514135876909924352').members.cache.get(message.author.id).roles.cache.get('548455163044560897')){
      message.channel.send("Pleb");
    }
    else message.channel.send("Based");
  }
  if (message.content.toLowerCase() === command + "imperialtree") {
    message.channel.send(
        "https://cdn.discordapp.com/attachments/514135876909924354/813757877251473408/dr_imp_fam_tree2.png"
    );
  }

  if (message.content.toLowerCase() === command + "imperialballs") {
    message.channel.send(
        "https://cdn.discordapp.com/attachments/514135876909924354/819616687317975120/dynasty.png"
    );
  }

  if (message.content.toLowerCase() === command + "retardballs") {
    message.channel.send(
        "https://cdn.discordapp.com/attachments/514135876909924354/821497674174955558/dynasty3_final.png"
    );
  }

  if (message.content.toLowerCase().includes(command + "smotion")) {
    let embed = new Discord.MessageEmbed();
    var args = message.content.split(" ");
    embed.setTitle("Motion ID:" + args[1]);
    embed.setColor("0xcc0000");
    embed.setFooter(
        "Senate Meeting discussions powered by our most humble Imperator"
    );

    let available = false;
    if(args[1]){
      let sql2 = `SELECT * FROM Motions WHERE mID = ` + args[1];
      db.all(sql2, [], (err, rows) => {
        if (err) {
          throw err;
        }
        //search motion with Primary Key

        rows.forEach(row => {
          available = true;
          if(row.motion.includes(".png") || row.motion.includes(".jpg") || row.motion.includes(".jpeg"))
          {
            if(!row.motion.startsWith("http"))
            {
              const args2 = row.motion.split("http");
              embed.addField("Motion in question",args2[0],true);
              embed.setImage("http"+args2[1]);
            }else{
              embed.addField("Motion in question","Picture in question",true);
              let args3 = row.motion.split(" ");
              embed.setImage(args3[0]);
              embed.setAuthor(
                  "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                  clientdc.users.cache.get(row.creator).avatarURL()
              );
            }
          }else {

            embed.addField(
                "Motion in question",
                row.motion +
                "\n From:" +
                "<@!"+row.creator+">",
                true
            );
            console.log(row.motion);
            embed.setAuthor(
                "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                clientdc.users.cache.get(row.creator).avatarURL()
            );
          }
        });
        //if no primary key is submitted as an argument the motion is searched after its position
        if (!available) {
          let availablenumber = false;
          const mot = new Array();
          db.all('SELECT * FROM Motions',[],(err,rows) => {
            const args = message.content.split(" ");
            const link = new Array();
            const creator = new Array();
            rows.forEach(row => {mot.push(row.motion +"\n From:" +"<@!"+rows[args[1]].creator+">"); link.push(row.motion); creator.push(row.creator)});

            if(mot[args[1]].includes(".png") || mot[args[1]].includes(".jpg") || mot[args[1]].includes(".jpeg"))
            {
              if(!mot[args[1]].startsWith("http"))
              {

                var args2 = link[args[1]].split("http");
                embed.addField("Motion in question",args2[0],true);
                embed.setImage("http"+args2[1]);

                embed.setAuthor(
                    "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                    clientdc.users.cache.get(creator[args[1]]).avatarURL()
                );
                message.channel.send({ embeds: [embed] });
              }else{
                embed.addField("Motion in question","Picture in question",true);
                embed.setImage(link[args[1]]);


                embed.setAuthor(
                    "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                    clientdc.users.cache.get(creator[args[1]]).avatarURL()
                );
                message.channel.send({ embeds: [embed] });
              }
            }else {


              if(mot.length >= 25)
              {

                var args2 = [];
                const length = (mot.length % 2 == 0) ? (mot.length) : (mot.length + 1);

                for (var i = length / 2; i <= length; i++) {
                  args2.push(mot[i]);


                  mot.splice(i,1);

                }
                for(var i = args2.length-1; i >= 0; i--){if(args2[i] === undefined){args2.pop()}}

                if(mot[args[1]]) {embed.setTitle("Motion number:"+args[1])
                  embed.addField("Motion in question", mot[args[1]],false);} else if(args2[args[1]-mot.length]) {embed.addField("Motion in question", args2[args[1]-mot.length],false);} else{embed.addField("Motion in question", "no motion with such ID", false);}
                let avatarURL;
                clientdc.users.fetch(creator[args[1]]).then(member => {
                  avatarURL = member.avatarURL();
                  embed.addField("Motion in question", mot[args[1]],false); embed.setAuthor(
                      "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",avatarURL);
                  message.channel.send({ embeds: [embed] });
                })
              }
              else {
                let avatarURL;
                clientdc.users.fetch(creator[args[1]]).then(member => {
                  avatarURL = member.avatarURL();
                  embed.addField("Motion in question", mot[args[1]],false); embed.setAuthor(
                      "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",avatarURL);
                  message.channel.send({ embeds: [embed] });
                })
              }


            }
          });




        }

        if(available) message.channel.send({ embeds: [embed] });
      });
    }
  }

  if (message.content.toLowerCase() === command + "motions") {
    if (
        message.member.roles.cache.has("543783180130320385") ||
        message.member.roles.cache.has("550392133991923738")
    ) {
      let embed = new Discord.MessageEmbed();

      embed.setTitle("Motions");
      embed.setColor("0xcc0000");
      embed.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
      );
      embed.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      embed.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
      );
      let msgs = [];
      let sql2 = `SELECT * FROM Motions;`;
      db.all(sql2, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
          let msg =
              row.motion +
              "\n" +
              "From:" +
              "<@!"+ row.creator +">"+
              "\n" +
              "motion ID:" +
              row.mID +
              "";
          msgs.push(msg);
        });



        if (msgs.length <= 25) {
          msgs.forEach(msg => embed.addField("motions", msg+"\n"+msgs.indexOf(msg)));

          message.channel.send({ embeds: [embed] });
        } else {
          var secEmb = new Discord.MessageEmbed();

          secEmb.setTitle("Motions second page");
          secEmb.setColor("0xcc0000");
          secEmb.setFooter(
              "Senate Meeting discussions powered by our most humble Imperator"
          );
          secEmb.setThumbnail(
              "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
          );
          secEmb.setAuthor(
              "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
              "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
          );
          secEmb.setDescription("Motions to discuss in Senate meetings");

          const args2 = new Array();
          const length = (msgs.length % 2 == 0) ? (msgs.length) : (msgs.length + 1);

          for (var i = length / 2; i <= length; i++) {
            args2.push(msgs[i]);


            msgs.splice(i,1);

          }
          for(var i = args2.length-1; i >= 0; i--){if(args2[i] === undefined){args2.pop()}}
          var secEmb = new Discord.MessageEmbed();

          secEmb.setTitle("Motions");
          secEmb.setColor("0xcc0000");
          secEmb.setFooter(
              "Senate Meeting discussions powered by our most humble Imperator"
          );
          secEmb.setThumbnail(
              "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
          );
          secEmb.setAuthor(
              "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
              "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
          );
          secEmb.setDescription("Motions to discuss in Senate meetings");

          args2.forEach(msg => secEmb.addField("motion", msg+"/"+parseInt(args2.indexOf(msg) + msgs.length, 10), false));
          msgs.forEach(msg2 => embed.addField("motion", msg2+"/"+msgs.indexOf(msg2), false));
          message.channel.send({ embeds: [embed,secEmb] });
        }

      });
    } else message.channel.send("not a Senator/Tribune broski");
  }

  if (message.content.toLowerCase().includes(command + "motion ")) {
    if (
        message.member.roles.cache.has("543783180130320385") ||
        message.member.roles.cache.has("550392133991923738")
    ) {
      const answer = ["yes"];
      const filter = response => {return answer.includes(response.content.toLowerCase())};
      message.channel.send("do you really want to motion?").then(() => {
        const collector = message.channel.createMessageCollector({filter, max: 1, time: 5000});
        collector.on('collect', collected => {


          const args = message.content.split(" ");
          console.log(
              "INSERT INTO Motions(motion,creator) VALUES(" +
              "'" +
              args +
              "'" +
              "," +
              message.member.id +
              ");"
          );
          let inp = "";
          for (i = 1; i < args.length; i++) {
            inp += args[i] + " ";
          }

          //sanitizeQuery(inp);
          db.all(
              `INSERT INTO Motions(motion,creator) VALUES('${inp}','${message.member.id}')`,
              [],
              (err, rows) => {
                if (err) {
                  message.channel.send("sth went wrong");
                  console.log(err);
                } else {
                  message.channel.send("duly noted");
                  updateEmbedMessage(message);
                }
              }
          );


        })
        collector.on('end' ,collected => {
          if (collected.size === 0){
            message.channel.send('no motion noted');
          }

        });
      });


    }
    else {
      message.channel.send(
          "you do not have any authority to propose motions, please turn to your corresponding Senator or Tribune (if you're a filthy Pleb)"
      );
    }
  }

  if (message.content.toLowerCase().includes(command + "challenge" ) && message.channel.id === "557659811723083787") {
    let args = message.content.split(" ");
    if(args.length === 2){
      let emb = new Discord.MessageEmbed();
      emb.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
      emb.addField(message.author.username,"100",true);
      emb.addField(args[1],"100",true);
      emb.setFooter("Gladiator Matches powered by our most humble Imperator");
      emb.setColor("0xFFFFFF");
      message.channel.send({ embeds: [emb] }).then(res => {
        let cturn = false;
        let hp1 = 100;
        let hp2 = 100;

        let int = setInterval(function(php1, php2){


          let num = Math.random();
          if(cturn === true){hp1 -= Math.floor(Math.random() * 31);
            if(hp1 < 0){hp1 = 0}
            let emb2 = new Discord.MessageEmbed();
            emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
            emb2.addField(message.author.username,hp1,true);
            emb2.addField(args[1],hp2.toString(),true);
            emb2.setFooter("Gladiator Matches powered by our most humble Imperator");
            emb2.setColor("0x8B0000");
            res.edit({embeds: [emb2]});
            cturn = false;
          }else {hp2 -= Math.floor(Math.random() * 31)
            if(hp2 < 0){hp2 = 0}
            let emb2 = new Discord.MessageEmbed();
            emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
            emb2.addField(message.author.username,hp1,true);
            emb2.addField(args[1],hp2.toString(),true);
            emb2.setFooter("Gladiator Matches powered by our most humble Imperator");
            emb2.setColor("0x8B0000");
            res.edit({embeds: [emb2]});
            cturn = true;
          }
          if(hp1 === 0 || hp2 === 0){clearInterval(int); let emb3 = new Discord.MessageEmbed(); emb3.addField("Winner",hp1 === 0 ? args[1] : message.author.username); emb3.setImage("https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc4NjAzNTMwOTA1MzEx/list-10-things-you-may-not-know-about-gladiators-2.jpg"); emb3.setFooter("Gladiator Matches powered by our most humble Imperator");
            emb3.setColor("0xFFDF00");
            res.edit({embeds: [emb3]}).catch(err => console.log(err))}
        },1500);


      });
    }else if(args.length === 3){
      let emb = new Discord.MessageEmbed();
      emb.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
      emb.addField(args[1],"100",true);
      emb.addField(args[2],"100",true);
      emb.setFooter("Gladiator Matches powered by our most humble Imperator");
      emb.setColor("0xFFFFFF");
      message.channel.send({ embeds: [emb] }).then(res => {
        let cturn = false;
        let hp1 = 100;
        let hp2 = 100;

        let int = setInterval(function(php1, php2){


          const num = Math.random();
          if(cturn === true){hp1 -= Math.floor(Math.random() * 31);
            if(hp1 < 0){hp1 = 0}
            let emb2 = new Discord.MessageEmbed();
            emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
            emb2.addField(args[1],hp1.toString(),true);
            emb2.addField(args[2],hp2.toString(),true);
            emb2.setFooter("Gladiator Matches powered by our most humble Imperator");
            emb2.setColor("DARK_PURPLE");
            res.edit({embeds: [emb2]});
            cturn = false;
          }else {hp2 -= Math.floor(Math.random() * 31)
            if(hp2 < 0){hp2 = 0}
            let emb2 = new Discord.MessageEmbed();
            emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
            emb2.addField(args[1],hp1.toString(),true);
            emb2.addField(args[2],hp2.toString(),true);
            emb2.setFooter("Gladiator Matches powered by our most humble Imperator");
            emb2.setColor("DARK_PURPLE");
            res.edit({embeds: [emb2]});
            cturn = true;
          }
          if(hp1 === 0 || hp2 === 0){clearInterval(int); let emb3 = new Discord.MessageEmbed(); emb3.addField("Winner",hp1 === 0 ? args[2] : args[1]); emb3.setImage("https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc4NjAzNTMwOTA1MzEx/list-10-things-you-may-not-know-about-gladiators-2.jpg"); emb3.setFooter("Gladiator Matches powered by our most humble Imperator");
            emb3.setColor("GOLD");
            res.edit({embeds: [emb3]}).catch(err => console.log(err))}
        },1500);


      });

    }else{message.channel.send("invalid parameters given")}
  }

  if (message.content.toLowerCase().includes(command + "bet" )) {
    let args = message.content.split(" ");
    if(args.length === 3 && args[1] !== args[2] || args.length === 2 && args[1] !== message.author.username){
      if(!BattleAlreadyCommenced){
        BattleAlreadyCommenced = true;
        const filter = m => !m.author.bot;
        message.channel.send("A gladiator battle will soon ensue");
        const collector = message.channel.createMessageCollector({filter, time: 40000 });
        let bets = new arrayList;
        collector.on('collect', m => {
          let temp = m.content.split(" ");
          client.getUserBalance(message.guild.id, m.author.id).then(c => {



            if(!isNaN(temp[0]) && temp[1] === args[1] || temp[1] === args[2])
            {
              //take the absolute value since negative bets are not allowed
              let bet = Math.abs(temp[0]);
              if(bet <= 10000 && bet > 0 && bet !== 0){
                if(c.cash >= bet){
                  let st = bet+":"+temp[1]+":"+m.author.id;
                  bets.add(st);
                  client.editUserBalance(message.guild.id, m.author.id, { cash: -bet, bank: 0 }, "bet");
                  client.editUserBalance(message.guild.id, "700662464856981564", { cash: 0, bank: (bet/2) }, "bet");
                  message.channel.send("bet received")
                }
                else{
                  message.channel.send("invalid bet not enough cash, you currently have "+c.cash+" <:DNR:782312774083674163>");
                }
              }else{
                message.channel.send("invalid bet: max bet of 10000 <:DNR:782312774083674163>");
              }
            }
            else
            {
              message.channel.send("invalid bet");
            }
          })
        });

        collector.on('end', collected => {

          message.channel.send("bets closed");

          if(args.length === 2){
            let emb = new Discord.MessageEmbed();
            emb.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
            emb.addField(message.author.username,"100",true);
            emb.addField(args[1],"100",true);
            emb.setFooter("Gladiator Matches powered by our most humble Imperator");
            emb.setColor("0xFFFFFF");
            message.channel.send({ embeds: [emb] }).then(res => {
              let cturn = Math.random() < 0.5;
              let hp1 = 100;
              let hp2 = 100;

              let int = setInterval(function(php1, php2){


                let num = Math.random();
                if(cturn === true){hp1 -= Math.floor(Math.random() * 31);
                  if(hp1 < 0){hp1 = 0}
                  let emb2 = new Discord.MessageEmbed();
                  emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
                  emb2.addField(message.author.username,hp1.toString(),true);
                  emb2.addField(args[1],hp2.toString(),true);
                  emb2.setFooter("Gladiator Matches powered by our most humble Imperator");
                  emb2.setColor("DARK_PURPLE");
                  res.edit({embeds: [emb2]});
                  cturn = false;
                }else {hp2 -= Math.floor(Math.random() * 31)
                  if(hp2 < 0){hp2 = 0}
                  let emb2 = new Discord.MessageEmbed();
                  emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
                  emb2.addField(message.author.username,hp1.toString(),true);
                  emb2.addField(args[1],hp2.toString(),true);
                  emb2.setFooter("Gladiator Matches powered by our most humble Imperator");
                  emb2.setColor("DARK_PURPLE");
                  res.edit({embeds: [emb2]});
                  cturn = true;
                }
                if(hp1 === 0 || hp2 === 0){clearInterval(int); let emb3 = new Discord.MessageEmbed(); emb3.addField("Winner",hp1 === 0 ? args[1] : message.author.username); emb3.setImage("https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc4NjAzNTMwOTA1MzEx/list-10-things-you-may-not-know-about-gladiators-2.jpg"); emb3.setFooter("Gladiator Matches powered by our most humble Imperator");
                  emb3.setColor("GOLD");
                  res.edit({embeds: [emb3]})
                  let winner;
                  hp1 === 0 ? winner = args[1] : winner = message.author.username;
                  let embed = new Discord.MessageEmbed();
                  bets.forEach(c =>{

                    embed.setTitle("Winners");
                    let t = c.split(":");

                    if(t[1] === winner){
                      embed.addField("winner","<@"+t[2]+">"+" amount "+t[0]*1.85,false);

                      client.editUserBalance(message.guild.id, t[2], { cash: t[0]*1.85, bank: 0 }, "bet");
                    }

                  })
                  BattleAlreadyCommenced = false;
                  message.channel.send({ embeds: [embed] });
                }
              },1500);


            });
          }else if(args.length === 3){
            let emb = new Discord.MessageEmbed();
            emb.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
            emb.addField(args[1],"100",true);
            emb.addField(args[2],"100",true);
            emb.setFooter("Gladiator Matches powered by our most humble Imperator");
            emb.setColor("0xFFFFFF");
            message.channel.send({ embeds: [emb] }).then(res => {
              let cturn = false;
              let hp1 = 100;
              let hp2 = 100;

              let int = setInterval(function(php1, php2){


                let num = Math.random();
                if(cturn === true){hp1 -= Math.floor(Math.random() * 31);
                  if(hp1 < 0){hp1 = 0}
                  let emb2 = new Discord.MessageEmbed();
                  emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
                  emb2.addField(args[1],hp1.toString(),true);
                  emb2.addField(args[2],hp2.toString(),true);
                  emb2.setFooter("Gladiator Matches powered by our most humble Imperator");
                  emb2.setColor("DARK_PURPLE");
                  res.edit({embeds: [emb2]});
                  cturn = false;
                }else {
                  hp2 -= Math.floor(Math.random() * 31)
                  if(hp2 < 0){hp2 = 0}
                  let emb2 = new Discord.MessageEmbed();
                  emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
                  emb2.addField(args[1],hp1.toString(),true);
                  emb2.addField(args[2],hp2.toString(),true);
                  emb2.setFooter("Gladiator Matches powered by our most humble Imperator");
                  emb2.setColor("DARK_PURPLE");
                  res.edit({embeds: [emb2]});
                  cturn = true;
                }
                if(hp1 === 0 || hp2 === 0){clearInterval(int); let emb3 = new Discord.MessageEmbed(); emb3.addField("Winner",hp1 === 0 ? args[2] : args[1]); emb3.setImage("https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc4NjAzNTMwOTA1MzEx/list-10-things-you-may-not-know-about-gladiators-2.jpg"); emb3.setFooter("Gladiator Matches powered by our most humble Imperator");
                  emb3.setColor("GOLD");
                  res.edit({embeds: [emb3]})
                  let winner;
                  hp1 === 0 ? winner = args[2] : winner = args[1];
                  let embed = new Discord.MessageEmbed();
                  bets.forEach(bet =>{

                    embed.setTitle("Winners");
                    let t = bet.split(":");
                    let winnings = Math.floor(t[0]*1.7);
                    if(t[1] === winner){
                      embed.addField("winner","<@"+t[2]+">"+" amount: "+winnings,false);

                      client.editUserBalance(message.guild.id, t[2], { cash: winnings, bank: 0 }, "bet");
                    }

                  })
                  BattleAlreadyCommenced = false;
                  message.channel.send({ embeds: [embed] });
                }
              },1500);


            });

          }else{message.channel.send("invalid parameters given")}
        });
      }else{
        message.channel.send("A battle is currently occuring, concurrent battles are not allowed!");
      }
    }else{
      message.channel.send("A Gladiator cant fight itself");
    }
  }

  if (message.content.toLowerCase().includes(command + "deletemotion")) {
    if (
        message.member.roles.cache.has("649362430446796815") ||
        message.member.roles.cache.has("565594839828398100") ||
        message.member.roles.cache.has("514143501697679361") ||
        message.member.roles.cache.has("546654987061821440")
    ) {
      var args = message.content.split(" ");
      db.all("DELETE FROM Motions WHERE mID =" + args[1], [], (err, rows) => {
        if (err) {
          message.channel.send("wrong ID");
        }
        message.channel.send("motion deleted");

        updateEmbedMessage(message);
      });
    } else {
      message.channel.send("you do not have the permission to delete a motion");
    }
  }

  if (message.content.toLowerCase().includes(command + "deleteallmotions") || message.content.toLowerCase().includes("ave imperator publius") && message.channel.id === 549645921487421495) {
    if (
        message.member.roles.cache.has("649362430446796815") ||
        message.member.roles.cache.has("565594839828398100") ||
        message.member.roles.cache.has("514143501697679361") ||
        message.member.roles.cache.has("546654987061821440")
    ) {
      db.all("DELETE FROM Motions", [], (err, rows) => {
        if (err) {
          message.channel.send("sth went wrong");

        } else message.channel.send("Ave Imperator Publius Augustus -motions deleted");
        updateEmbedMessage(message);
      });
    } else {
      message.channel.send("you do not have the permission to delete a motion");
    }
  }

  if (message.content.toLowerCase().includes(command + "adddate")) {
    let args = message.content.split(" ");

    console.log(args[1]);
    if (args[1].length === 4) {
      let bdate = args[1].toString();
      if (args[2] != null) {
        var id = message.mentions.users.first().id;

        let add =
            "INSERT INTO Birthdates(Birthdate,DiscordID,celebrated) VALUES(" +
            bdate +
            ",'" +
            id +
            "',0)";
        db.run(add);
      }
      const userID = message.author.id;
      console.log(userID);

      let add =
          "INSERT INTO Birthdates(Birthdate,DiscordID,celebrated) VALUES(" +
          bdate +
          "," +
          userID +
          ",0)";

      db.run(add);

      message.channel.send("Date added succesfully");
    }
  }
  if (message.content.toLowerCase().includes(command + "deletedate")) {
    var id = message.mentions.users.first().id;
    let add = "DELETE FROM Birthdates WHERE DiscordID =" + id + ";";
    if (id != null) {
      db.run(add);
      message.channel.send("Date removed succesfully");
    }
  }
  if (message.content.toLowerCase().includes(command + "addroles")) {
    let args = message.content.split(" ");
    let role = getRole(args[1], message.guild.id);
    let ment = [];
    if (role) {
      console.log(args[1]);
      for (var i = 2; i < args.length; i++) {
        ment[i - 2] = args[i];
      }

      ment.forEach(element => {
        message.guild.members.resolve(getUser(element)).roles.add(role);
      });
      message.channel.send("done");
    } else {
      message.channel.send("thats not a Role Broski");
    }
  }
  if (message.content.toLowerCase() === "?pray") {
    message.author.send("dont listen to Dyno Byzantium is Roman");
  }

});

clientdc.on("messageCreate", async message => {
      if (!message.author.bot && message.author.id !== "241349696856129539") {
        if (message.content.toLowerCase().includes("istanbul")) {
          message.channel.send("its Constantinople smh");
        }

        if (message.channel.type === 'DM') {
          console.log(message.content);
          var args = message.content.split("-");
          clientdc.channels.cache.get(args[0]).send(args[0]);
        }

        if (
            message.content.toLowerCase().includes("the general") && message.channel.id === "543787717725519892"||
            message.content.toLowerCase().includes("general") && message.channel.id === "543787717725519892"
        ) {
          message.channel.send("hail Apicius");
          message.react("640270832115122196");
        }

        if (
            message.content.toLowerCase().includes("hre ") && message.channel.id === "543787717725519892"||
            message.content.toLowerCase().includes("holy Roman Empire") && message.channel.id === "543787717725519892"||
            message.content.toLowerCase().includes("hre ") && message.channel.id === "543787717725519892"
        ) {
          message.channel.send("shame on you");
        }

        if (
            message.content.toLowerCase().includes("civil war") && message.channel.id === "543787717725519892"
        ) {
          message.channel.send("yall know who won right :wink:");
        }

        if (
            message.content.toLowerCase().includes("imperator") && message.channel.id === "660253007916826625"||
            message.content.toLowerCase().includes("emperor") && message.channel.id === "660253007916826625"
        ) {
          const num = Math.random();

          if (num <= 0.8) {
            message.channel.send(
                "All hail the Imperator https://media.4teachers.de/images/thumbs/image_thumb.1146.jpg"
            );
          } else
            message.channel.send(
                "All hail the Imperator https://cdn.discordapp.com/attachments/543787157127561216/706809950327799848/waaw.png"
            );
          message.react("664229248944439301");
        }
        if (
            message.content.toLowerCase().includes("imperatrix") && message.channel.id === "660253007916826625"||
            message.content.toLowerCase().includes("empress") && message.channel.id === "660253007916826625"
        ) {
          message.channel.send(
              "All hail the Empress https://pbs.twimg.com/profile_images/837236794387234816/megbmYw2_400x400.jpg"
          );
          message.react("636456201273475113");
        }

        if (
            message.content.toLowerCase().includes("boo") && message.channel.id === "543787717725519892"
        ) {
          message.channel.send(
              "https://cdn.discordapp.com/attachments/536547184448110602/741412013430931467/IMG-20200807-WA0082.jpg"
          );

        }

        if (message.content.toLowerCase().includes("-musso")) {
          message.channel.send("Wait for Mussolini monday you impatient fuck");
        }

        if (message.content.toLowerCase().includes("vote here")) {
          message.react('885508940169871390');
          message.react('885508939985350666');

        }


        if (message.content.toLowerCase().includes("carthago")){
          message.channel.send("Carthago Delenda Est!");

        }

        if (message.content.startsWith("!suggest")){
          client.editUserBalance(GuildID, message.author.id, { cash: 0, bank: -300}, "suggesting a motion")

        }

        if (message.content.toLowerCase().includes("lorenzo")){
          message.react("808652176280125480");

        }
        if(message.content.toLowerCase().includes(command+"russia")){
          let args = message.content.split(" ")
          if(args[1].includes("+")){
            let prob = args[1].split("+");
            message.channel.send(parseInt((Math.random() * prob[0]) + parseInt(prob[1])).toLocaleString());
          }
          else{
            message.channel.send(parseInt(Math.random()*args[1]).toLocaleString());
          }
        }
        if (message.content.toLowerCase().startsWith("!") && message.channel.id === "630588104184430643"){
          message.channel.send("bad boy!!");
          message.channel.bulkDelete(2);

        }

        if(message.author.id === '559471648361676810'){
          //message.react('771454776336449556');
        }

        if (!message.content.toLowerCase().startsWith("!") && message.channel.id === "819602635966513172"){
          if(!message.member.roles.cache.has("805067937211351040")){
            message.channel.bulkDelete(1);
          }
        }
      }
    }
);



clientdc.on("messageDelete", message => {

  if (message.author.id === "806496535961272350" && message.guild.id === "769941406718230529") {
    let emb = new Discord.MessageEmbed()
    emb.setAuthor(message.author.username,message.author.avatarURL())
    emb.addField("What she deleted",message.content)
    clientdc.guilds.cache.get("769941406718230529").channels.cache
        .get("772843171474178050").send({ embeds: [emb] });
  }
});

