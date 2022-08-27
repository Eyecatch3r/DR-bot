// server.js
// where your node app starts

// init project

const { SlashCommandBuilder,ButtonBuilder,ActionRowBuilder } = require('@discordjs/builders');
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
const { GatewayIntentBits, Partials,ChannelType } = require('discord.js');
const clientdc = new Discord.Client({ partials: [Partials.Channel,Partials.GuildMember,Partials.Message,Partials.Reaction,Partials.User],intents: [GatewayIntentBits.Guilds,GatewayIntentBits.DirectMessages,GatewayIntentBits.GuildBans,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildMessageReactions,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildPresences,GatewayIntentBits.MessageContent]});
//global variables
let BattleAlreadyCommenced = false;
let taxRate = 0.6;
let taxRateTop5 = 0.65;

clientdc.login(process.env.DISCORD_TOKEN);





//compare dates with the current date
const dateformat = require("dateformat");
let date = new Date();
//console.log(dateformat("isoDate"));
let dates = dateformat("isoDate").split("-");
let time = dateformat(date, "longTime", true).split(":");
if (dates[1].startsWith("0")) {
  dates[1] = dates[1].substring(1);
}

async function updateProvinceResources(){

}

async function updateProvinceIncome(){

  doc.loadInfo().then(() => {

    const sheet = doc.sheetsByIndex[0];
    sheet.loadCells('A1:U26').then(() => {
      for (let i = 2; i <= 26; i++) {
        db.run(`UPDATE Province SET income = ${sheet.getCellByA1('S' + i).formattedValue} WHERE prov_id = ${i - 1}`);
      }
    });
    const sheetPop = doc.sheetsByIndex[3];
    sheetPop.loadCells('AN4:AO28').then(() => {
      for (let i = 4; i <= 28; i++) {

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
  const mainEmb = new Discord.EmbedBuilder();

  mainEmb.setTitle("Motions");
  mainEmb.setColor("0xcc0000");
  mainEmb.setFooter(
      {text:  "discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
  );
  mainEmb.setThumbnail(
      "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
  );
  mainEmb.setAuthor(
      {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
        iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
  mainEmb.setDescription("Motions to discuss in Senate meetings");

  let msgs = [];
  let sql2 = 'SELECT * FROM Motions';
  db.all(sql2, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
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
      msgs.forEach(msg => mainEmb.addFields({ name: "Motion", value: msg}));
    } else {
      const args2 = [];
      for (let i = msgs.length; i > msgs.length / 2; i--) {
        args2.push(msgs[i]);
        msgs.pop();
      }
      msgs.forEach(msg => mainEmb.addFields({ name: "Motion", value: msg}));

      const secEmb = new Discord.EmbedBuilder();

      secEmb.setTitle("Motions");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter(
          {text:  "discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
      );
      secEmb.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      secEmb.setAuthor(
          {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
            iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
      secEmb.setDescription("Motions to discuss in Senate meetings");

      args2.forEach(msg => secEmb.addFields({ name: "Motion", value: msg}));
    }
    //clientdc.channels.cache.get("705136080105767004").send(test);
  });
}

function updateEmbedMessage(message) {
  let embed = new Discord.EmbedBuilder();

  embed.setTitle("Motions");
  embed.setColor("0xcc0000");
  embed.setFooter(
      {text:  "discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
  );
  embed.setThumbnail(
      "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
  );
  embed.setAuthor(
      {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
        iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});

  let msgs = [];
  let sql2 = `SELECT * FROM Motions`;
  db.all(sql2, [], (err, rows) => {
    let secEmb;
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
      msgs.forEach(msg => embed.addFields({ name: "motions", value:  msg +"/"+msgs.indexOf(msg)}));
      secEmb = new Discord.EmbedBuilder();


      secEmb.setTitle("Motions");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter({text: "Senate Meeting discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
      );
      secEmb.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      secEmb.setAuthor(
          {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
            iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
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

      secEmb = new Discord.EmbedBuilder();

      secEmb.setTitle("Motions");
      secEmb.setColor("0xcc0000");
      secEmb.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      secEmb.setAuthor(
          {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
            iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
      secEmb.setDescription("Motions to discuss in Senate meetings");

      args2.forEach(msg => secEmb.addFields({ name: "motion", value:  msg +"/"+parseInt(args2.indexOf(msg) + msgs.length, 10), inline: false}));
      msgs.forEach(msg2 => embed.addFields({ name: "motion", value:  msg2 +"/"+msgs.indexOf(msg2), inline: false}));
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

  let embed = new Discord.EmbedBuilder();

  embed.setTitle("Mussolini facts");
  embed.setColor("0x000000");
  embed.setFooter({text: "Facts powered by our most humble Imperator", iconURL:  "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"})


  embed.addFields({name: "Fact:",value: randomElement});
  clientdc.channels.cache
      .get("514135876909924354").send({ embeds: [embed] });

}

function updateProvinceMessage() {
  let embed = new Discord.EmbedBuilder();

  embed.setTitle("Provinces");
  embed.setColor("0xcc0000");
  embed.setFooter({ text:
        "Provinces powered by our most humble Imperator", iconURL:  "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
  });
  embed.setThumbnail(
      "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
  );
  embed.setAuthor(
      {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
        iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});

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
      msgs.forEach(msg => embed.addFields({name: rows[msgs.indexOf(msg)].province, value: msg+"\n"+msgs.indexOf(msg)}));
      var secEmb = new Discord.EmbedBuilder();

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

      var secEmb = new Discord.EmbedBuilder();

      secEmb.setTitle("Provinces");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter(
          {text:  "discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
      );
      secEmb.setThumbnail(
          "https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png"
      );
      secEmb.setAuthor(
          {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
            iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
      secEmb.setDescription("Motions to discuss in Senate meetings");

      args2.forEach(msg => secEmb.addFields({ name: "Provinces", value:  msg+"\n"+parseInt(args2.indexOf(msg) + msgs.length, 10), inline: false}));
      msgs.forEach(msg2 => embed.addFields({ name: "Provinces", value:  msg2+"\n"+msgs.indexOf(msg2), inline: false}));
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


function registerSlashCommands() {
  const rest = new REST({version: '10'}).setToken(process.env.DISCORD_TOKEN);
  let commands = [];
  let smotion = new SlashCommandBuilder()
      .setName('smotion')
      .setDescription('Shows the motion with the corresponding ID')
      .addNumberOption(option => option.setName('motionid').setDescription('Corresponding ID of the motion')
          .setRequired(true).setMinValue(0).setMaxValue(50).setRequired(true));
  let motions = new SlashCommandBuilder()
      .setName('motions')
      .setDescription('Displays all current Motions');

  let deletemotion = new SlashCommandBuilder()
      .setName('deletemotion')
      .setDescription('deletes the motion with the corresponding ID')
      .addNumberOption(option => option.setMinValue(0).setRequired(true).setName('motionid').setDescription('Corresponding ID of the motion'));

  let motion = new SlashCommandBuilder()
      .setName('motion')
      .setDescription('propose a motion to the Senate')
      .addStringOption(option => option.setName('motion').setDescription('the proposed motion').setRequired(true))

  let globalCommands = [];

  let mute = new SlashCommandBuilder()
      .setName('mute')
      .setDescription('mutes a member')
      .addUserOption(option => option.setDescription('member to mute').setName('member').setRequired(true))
      .addStringOption(option => option.setName('duration').setDescription('Duration of the mute').setRequired(true))

  let unmute = new SlashCommandBuilder()
      .setName('unmute')
      .setDescription('unmutes a member')
      .addUserOption(option => option.setDescription('member to unmute').setName('member').setRequired(true))

  let ban = new SlashCommandBuilder()
      .setName('ban')
      .setDescription('bans a member')
      .addUserOption(option => option.setDescription('member to ban').setName('member').setRequired(true))
      .addStringOption(option => option.setName('reason').setDescription('Reason for the ban').setRequired(false))

  let unban = new SlashCommandBuilder()
      .setName('unban')
      .setDescription('unbans a member')
      .addUserOption(option => option.setDescription('member to unban').setName('member').setRequired(true))

  let kick = new SlashCommandBuilder()
      .setName('kick')
      .setDescription('kicks a member')
      .addUserOption(option => option.setDescription('member to kick').setName('member').setRequired(true))
      .addStringOption(option => option.setName('reason').setDescription('Reason for the kick').setRequired(false))

  let provinces = new SlashCommandBuilder()
      .setName('provinces')
      .setDescription('Lists all Provinces');

  let showprovinces = new SlashCommandBuilder()
      .setName('showprovince')
      .setDescription('Displays a province')
      .addStringOption(option => option.setName('province').setDescription('Name of the Province').setRequired(true))

  let challenge = new SlashCommandBuilder()
      .setName("challenge")
      .setDescription('Initiate a Gladiator battle!')
      .addStringOption(option => option.setName('first').setDescription('Name of the first Gladiator').setRequired(true))
      .addStringOption(option => option.setName('second').setDescription('Name of the second Gladiator').setRequired(true))
  globalCommands.push(ban,unban,mute,unmute,kick,provinces,showprovinces,challenge);
  commands.push(motions,smotion,deletemotion,motion);
  const clientId = "700662464856981564";
  const guildId = "514135876909924352";
  (async () => {
    try {
      await rest.put(
          Routes.applicationGuildCommands(clientId, guildId),
          {body: commands},
      );

      await rest.put(
          Routes.applicationCommands(clientId),
          { body: globalCommands },
      );
      console.log('Registered commands');
    } catch (error) {
      console.error(error);
    }
  })();
}

clientdc.on("ready", (interaction) => {
//Register slash commands here
  registerSlashCommands();


  updateEmbed();




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
  let provinces = new Discord.EmbedBuilder();
  provinces.setDescription('Provinces of the Empire');
  provinces.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
  provinces.setTitle('Provinces');
  provinces.setImage(picURL);
  provinces.setColor('#cd1121');
  provinces.setAuthor({name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: 'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473'});
  let statement = db2.prepare("SELECT * FROM Province JOIN Governor ON Province.Governor = gov_ID")
  let rows = statement.all();
  for (let i = indexStart; i < indexEnd ; i++) {
    provinces.addFields({ name: rows[i].province, value:  "<@" + rows[i].DiscordID + ">" });
  }
  return provinces;
}

function capitalizeWords(provinceName) {
  let words = provinceName.split(' ');
  let capitalizedName = '';
  for (let i = 0; i < words.length; i++) {
    capitalizedName += words[i].charAt(0).toUpperCase() + words[i].slice(1)+' ';
  }

  return capitalizedName.trim();
}

clientdc.on("interactionCreate", async interaction => {

  switch(interaction.commandName) {
    case "ping":

      if (interaction.member.roles.cache.has("548455006693752852")) {
        interaction.reply("Based");
      } else {
        interaction.reply("Pleb");
      }
      break;

    case "number":
      let convertedNumber = 0;
      let number = interaction.options.getString("number");
      if (isNaN(parseInt(number))) {
        convertedNumber = portunus.deromanize(number);
      } else convertedNumber = portunus.romanize(parseInt(number));

      let emb = new Discord.EmbedBuilder();
      emb.setColor('#8f0713');
      emb.setDescription(convertedNumber.toString());
      emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

      interaction.reply({embeds: [emb]});
      break;
    case "mute":
      if (interaction.member.roles.cache.has("549712921450774556") || interaction.member.roles.cache.has("546654987061821440")) {
        const target = interaction.options.getMember("member");
        if (target) {


          let muteRole = clientdc.guilds.cache.get(interaction.guildId).roles.cache.find(role => role.name === 'Imprisoned');

          let member = target;


          await member.roles.add(muteRole.id);
          let emb = new Discord.EmbedBuilder();
          emb.setColor('#8f0713');

          interaction.options.getString('reason') ? emb.setDescription(`<@${member.user.id}> has been muted for ${ms(ms(interaction.options.getString('duration')))}, Reason: ${interaction.options.getString('reason')}`) : emb.setDescription(`<@${member.user.id}> has been muted for ${ms(ms(interaction.options.getString('duration')))}`);
          emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

          interaction.reply({embeds: [emb]})
          setTimeout(function () {
            member.roles.remove(muteRole.id);

          }, ms(interaction.options.getString("duration")));
        } else {
          let emb = new Discord.EmbedBuilder();
          emb.setColor('#8f0713');
          emb.setDescription("Cant find member");
          emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

          interaction.reply({embeds: [emb]})
        }
      } else {
        let emb = new Discord.EmbedBuilder();
        emb.setColor('#8f0713');
        emb.setDescription("You do not have the permission to mute a user");
        emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

        interaction.reply({embeds: [emb]})
      }
      break;

    case "unmute":
      if (interaction.member.roles.cache.has("549712921450774556") || interaction.member.roles.cache.has("546654987061821440")) {
        const target = interaction.options.getMember('member');
        if (target) {


          let muteRole = clientdc.guilds.cache.get(interaction.guildId).roles.cache.find(role => role.name === 'Imprisoned');

          let member = target


          await member.roles.remove(muteRole.id);
          let emb = new Discord.EmbedBuilder();
          emb.setColor('#8f0713');
          emb.setDescription(`<@${member.user.id}> has been unmuted`);
          emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

          interaction.reply({embeds: [emb]})

        }


      }
      break;
    case "ban":
      if (interaction.member.roles.cache.has("549712921450774556") || interaction.member.roles.cache.has("546654987061821440")) {
        const member = interaction.options.getMember('member');
        const reason = interaction.options.getString('reason');
        if (reason) {
          if(!member.roles.cache.has("546654987061821440")){
            member.ban({reason: reason}).then(ban => {
              let emb = new Discord.EmbedBuilder();
              emb.setColor('#8f0713');
              emb.setDescription(`<@${member.user.id}> has been Executed in the name of the Imperator, Reason: ${reason}`);
              emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
              emb.setImage("https://i.pinimg.com/originals/7f/03/a2/7f03a2a21b82d96679788401c3ef323f.jpg");

              interaction.editReply({embeds: [emb]})
            }).catch(err => interaction.reply("Cannot Ban this user"));
          }else {
            interaction.reply("Cannot Ban this user")
          }
        } else {
          if(!member.roles.cache.has("546654987061821440")){
            member.ban().then(ban => {
              let emb = new Discord.EmbedBuilder();
              emb.setColor('#8f0713');
              emb.setDescription(`<@${member.user.id}> has been Executed in the name of the Imperator`);
              emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
              emb.setImage("https://i.pinimg.com/originals/7f/03/a2/7f03a2a21b82d96679788401c3ef323f.jpg");

              interaction.editReply({embeds: [emb]})
            }).catch(err => interaction.reply("Cannot Ban this user"));
          }else {
            interaction.reply("Cannot Ban this user")
          }
        }


      }
      break;
    case "showprovince":
      clientdc.users.fetch(interaction.user.id).then(u => {
        let provinceName = interaction.options.getString('province').toLowerCase();
        provinceName = capitalizeWords(provinceName);
        let embP = new Discord.EmbedBuilder();
        embP.setTitle(provinceName);
        embP.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/846080867138011156/unknown.png');
        embP.setColor('#cd1121');

        doc.loadInfo().then(() => {
          const sheet = doc.sheetsByIndex[0];
          sheet.loadCells('A1:J26').then(() => {
            //to Calculate income Brackets we fetch the list of all Provinces to determine its order
            let rows = db2.prepare("SELECT * FROM Province ORDER BY income DESC").all();
            let province = db2.prepare('SELECT * FROM Province JOIN Governor ON province.Governor = Governor.gov_ID WHERE province = ?').get(provinceName);
            let resource = db2.prepare('SELECT * FROM Resources WHERE province = ?').get(provinceName);
            console.log(provinceName);
            if (province) {
              let member = interaction.guild.members.cache.get(province.DiscordID);
              if(member.displayName){
                let av = member.user.displayAvatarURL();
                embP.setAuthor({name: member.displayName, iconURL: av});
              } else {
                let av = member.displayAvatarURL();
                embP.setAuthor({ name: member.user.username, iconURL: av});
              }

              let provinceOrder = 0;
              for (let i = 0; i < rows.length; i++) {

                if (rows[i].province === provinceName) {
                  i = rows.length;
                }
                provinceOrder++;
              }

              let provinceIndex = -1;
              for (let i = 2; i <= 26; i++) {
                if(sheet.getCellByA1('B'+i).formattedValue === provinceName){
                  provinceIndex = i;
                }
              }
              console.log(provinceIndex)
              if (provinceIndex === -1){
                interaction.reply('Error with Province sheet name (please contact a province admin)');
              }
              else {
                for (let i = 0; i < 7; i++) {
                  let cell = sheet.getCellByA1( String.fromCharCode(68 + i)+provinceIndex).formattedValue;
                  if (cell){
                    embP.addFields({ name: "Resource", value:  cell });
                  }
                }

                let actualTax = provinceOrder <= 5 ? 1 - taxRateTop5 : 1 - taxRate
                embP.setDescription(province.income + " <:DNR:782312774083674163> daily (untaxed) || " + Math.floor(province.income * actualTax) + " <:DNR:782312774083674163> daily (taxed) \n 🧍 Population: " + province.population + "\n Population Growth: " + province.population_growth)
                province.map != null ? embP.setImage(province.map) : embP.setImage("https://cdn.discordapp.com/attachments/559418842430963723/775017785969475634/unknown.png")

                interaction.reply({embeds: [embP]});
              }

            }
            else {
              interaction.reply('Wrong Province Name');
            }
          });
        })
      })
      break;
    case "provinces":

      let provinces = createProvinceEmbed("https://cdn.discordapp.com/attachments/543787157127561216/932676494466113626/unknown.png",0,25);
      const row = new ActionRowBuilder()
          .addComponents(
              new ButtonBuilder()
                  .setCustomId('pro')
                  .setStyle('Primary')
                  .setLabel('Province Map'),new ButtonBuilder()
                  .setCustomId('fac')
                  .setStyle('Secondary') //default: blurple
                  .setLabel('Faction Map'),new ButtonBuilder()
                  .setCustomId('cul')
                  .setStyle('Success')
                  .setLabel('Culture Map')

          );
      interaction.reply({embeds: [provinces], components: [row]});

      break;
    case "unban":
      if(interaction.member.roles.cache.has("549712921450774556") || interaction.member.roles.cache.has("546654987061821440")) {
        const target = interaction.options.getMember('member');
        if (target) {

          let members = clientdc.guilds.cache.get(interaction.guildId).members;
          members.unban(target).then(unban => {


            let emb = new Discord.EmbedBuilder();
            emb.setColor('#8f0713');
            emb.setDescription(`<@${target.id}> has been pardoned in the name of the Imperator`);
            emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
            interaction.reply({embeds: [emb]});
          }).catch(err => {
            interaction.reply("Cannot unban this user");
            console.log(err);
          });
        }
      }
      break;
    case "kick":
      if(interaction.member.roles.cache.has("549712921450774556") || interaction.member.roles.cache.has("546654987061821440")) {
        const member = interaction.options.getNumber('member');
        let EmbedBuilder = new Discord.EmbedBuilder();
        if(interaction.options.getString('reason')){
          member.kick(member, { reason: interaction.options.getString('reason')}).then(ban => {

            EmbedBuilder.setColor('#8f0713');
            EmbedBuilder.setDescription(`<@${member.id}> has been sent to Germania to fend off Barbarians in the name of the Imperator`);
            EmbedBuilder.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
            EmbedBuilder.setImage("https://i.pinimg.com/originals/22/b7/c9/22b7c9ed82e411d5c66037e820427622.jpg");

            interaction.reply({embeds: [EmbedBuilder]});
          }).catch(err => {
            EmbedBuilder.setColor('#8f0713');
            EmbedBuilder.setDescription(`Cannot ban this user!`);
            EmbedBuilder.addFields({name: 'Error', value: error});
            EmbedBuilder.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
            EmbedBuilder.setImage("https://i.pinimg.com/originals/22/b7/c9/22b7c9ed82e411d5c66037e820427622.jpg");
            interaction.reply({embeds: [EmbedBuilder]})
            console.log(err);
          });
        } else {
          member.kick().then(ban => {

            EmbedBuilder.setColor('#8f0713');
            EmbedBuilder.setDescription(`<@${member.id}> has been sent to Germania to fend off Barbarians in the name of the Imperator`);
            EmbedBuilder.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
            EmbedBuilder.setImage("https://i.pinimg.com/originals/22/b7/c9/22b7c9ed82e411d5c66037e820427622.jpg");

            interaction.reply({embeds: [EmbedBuilder]})
          }).catch(err => {
            EmbedBuilder.setColor('#8f0713');
            EmbedBuilder.setDescription(`Cannot ban this user!`);
            EmbedBuilder.addFields({name: 'Error', value: error});
            EmbedBuilder.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
            EmbedBuilder.setImage("https://i.pinimg.com/originals/22/b7/c9/22b7c9ed82e411d5c66037e820427622.jpg");
            interaction.reply({embeds: [EmbedBuilder]})
            console.log(err);
          });
        }
      }
      break;
    case "motions":
      if (
          interaction.member.roles.cache.has("543783180130320385") ||
          interaction.member.roles.cache.has("550392133991923738")
      ) {
        let embed = new Discord.EmbedBuilder();

        embed.setTitle("Motions");
        embed.setColor("0xcc0000");
        embed.setFooter(
            {text:  "discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
        );
        embed.setThumbnail(
            "https://cdn.discordapp.com/attachments/704000578568716368/1003781074528252004/unknown.png"
        );
        embed.setAuthor(
            {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
              iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
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
            msgs.forEach(msg => embed.addFields({ name: "motions", value:  msg +"\n"+msgs.indexOf(msg)}));

            interaction.reply({ embeds: [embed] });
          } else {
            var secEmb = new Discord.EmbedBuilder();

            secEmb.setTitle("Motions second page");
            secEmb.setColor("0xcc0000");
            secEmb.setFooter(
                {text:  "discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
            );
            secEmb.setThumbnail(
                "https://cdn.discordapp.com/attachments/704000578568716368/1003781074528252004/unknown.png"
            );
            secEmb.setAuthor(
                {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                  iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
            secEmb.setDescription("Motions to discuss in Senate meetings");

            const args2 = [];
            const length = (msgs.length % 2 === 0) ? (msgs.length) : (msgs.length + 1);

            for (var i = length / 2; i <= length; i++) {
              args2.push(msgs[i]);


              msgs.splice(i,1);

            }
            for(var i = args2.length-1; i >= 0; i--){if(args2[i] === undefined){args2.pop()}}
            var secEmb = new Discord.EmbedBuilder();

            secEmb.setTitle("Motions");
            secEmb.setColor("0xcc0000");
            secEmb.setFooter(
                {text:  "discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
            );
            secEmb.setThumbnail(
                "https://cdn.discordapp.com/attachments/704000578568716368/1003781074528252004/unknown.png"
            );
            secEmb.setAuthor(
                {name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                  iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473", url: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
            secEmb.setDescription("Motions to discuss in Senate meetings");

            args2.forEach(msg => secEmb.addFields({ name: "motion", value:  msg +"/"+parseInt(args2.indexOf(msg) + msgs.length, 10), inline: false}));
            msgs.forEach(msg2 => embed.addFields({ name: "motion", value:  msg2 +"/"+msgs.indexOf(msg2), inline: false}));
            interaction.reply({ embeds: [embed,secEmb] });
          }

        });
      } else interaction.reply("not a Senator/Tribune broski");

      break;
    case "smotion":
      let embed = new Discord.EmbedBuilder();
      const motionId = interaction.options.getNumber('motionid');
      embed.setTitle("Motion ID:" + motionId);
      embed.setColor("0xcc0000");
      embed.setFooter(
          {text:  "discussions powered by our most humble Imperator", iconURL: 'https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png'}
      );

      let available = false;
      let sql2 = `SELECT * FROM Motions WHERE mID = ` + motionId;
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
              embed.addFields({name: "Motion in question",value: args2[0],inline: true});
              embed.setImage("http"+args2[1]);
            }else{
              embed.addFields({name: "Motion in question",value: "Picture in question",inline: true});
              let args3 = row.motion.split(" ");
              embed.setImage(args3[0]);
              embed.setAuthor(
                  { name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                    iconURL: clientdc.users.cache.get(row.creator).avatarURL()}
              );
            }
          }else {

            embed.addFields({ name:
                      "Motion in question", value:
                      row.motion +
                      "\n From:" +
                      "<@!" + row.creator + ">", inline:
                      true
                }
            );
            console.log(row.motion);
            embed.setAuthor({ name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
              iconURL: clientdc.users.cache.get(row.creator).avatarURL()}
            );
          }
        });
        //if no primary key is submitted as an argument the motion is searched after its position
        if (!available) {
          let availablenumber = false;
          const mot = [];
          db.all('SELECT * FROM Motions',[],(err,rows) => {

            const link = [];
            const creator = [];
            if (!rows[motionId]){
              interaction.reply("Motion with this ID not found");
            }
            else {
              rows.forEach(row => {
                mot.push(row.motion + "\n From:" + "<@!" + rows[motionId].creator + ">");
                link.push(row.motion);
                creator.push(row.creator)
              });


              if (mot[motionId].includes(".png") || mot[motionId].includes(".jpg") || mot[motionId].includes(".jpeg")) {
                if (!mot[motionId].startsWith("http")) {

                  args2 = link[motionId].split("http");
                  embed.addFields({name: "Motion in question", value: args2[0], inline: true});
                  embed.setImage("http" + args2[1]);

                  embed.setAuthor({
                        name:
                            "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                        iconURL: clientdc.users.cache.get(creator[motionId[1]]).avatarURL()
                      }
                  );
                  interaction.reply({embeds: [embed]});
                } else {
                  embed.addFields({name: 'Motion in question', value: 'Picture in Question'});
                  embed.setImage(link[motionId[1]]);


                  embed.setAuthor(
                      {
                        name:
                            "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
                        iconURL: clientdc.users.cache.get(creator[motionId[1]]).avatarURL()
                      }
                  );
                  interaction.reply({embeds: [embed]});
                }
              } else {


                if (mot.length >= 25) {

                  var args2 = [];
                  const length = (mot.length % 2 === 0) ? (mot.length) : (mot.length + 1);

                  for (var i = length / 2; i <= length; i++) {
                    args2.push(mot[i]);


                    mot.splice(i, 1);

                  }
                  for (var i = args2.length - 1; i >= 0; i--) {
                    if (args2[i] === undefined) {
                      args2.pop()
                    }
                  }

                  if (mot[motionId]) {
                    embed.setTitle("Motion number:" + motionId)
                    embed.addFields({name: "Motion in question", value: mot[motionid], inline: false});
                  } else if (args2[motionId - mot.length]) {
                    embed.addFields({name: "Motion in question", value: args2[motionId - mot.length], inline: false});
                  } else {
                    embed.addFields({name: "Motion in question", value: "no motion with such ID", inline: false});
                  }
                  let avatarURL;
                  clientdc.users.fetch(creator[motionId]).then(member => {
                    avatarURL = member.avatarURL();
                    embed.addFields({name: "Motion in question", value: mot[motionId], inline: false});
                    embed.setAuthor({
                      name:
                          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: avatarURL
                    });
                    interaction.reply({embeds: [embed]});
                  })
                } else {
                  let avatarURL;
                  clientdc.users.fetch(creator[motionId]).then(member => {
                    avatarURL = member.avatarURL();
                    embed.addFields({name: "Motion in question", value: mot[motionId], inline: false});
                    embed.setAuthor(
                        {
                          name:
                              "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: avatarURL
                        });
                    interaction.reply({embeds: [embed]});
                  })
                }


              }
            }
          });
        }
        if(available) interaction.reply({ embeds: [embed] });
      });

      break;
    case "deletemotion":
      if (
          interaction.member.roles.cache.has("649362430446796815") ||
          interaction.member.roles.cache.has("565594839828398100") ||
          interaction.member.roles.cache.has("514143501697679361") ||
          interaction.member.roles.cache.has("546654987061821440")
      ) {
        let motiontodelete = interaction.options.getNumber('motionid');
        db.all("DELETE FROM Motions WHERE mID =" + motiontodelete, [], (err, rows) => {
          if (err) {
            interaction.reply("wrong ID");
          }
          interaction.reply("motion deleted");

          updateEmbedMessage(interaction);
        });
      } else {
        interaction.reply("you do not have the permission to delete a motion");
      }
      break;
    case "motion":
      if (
          interaction.member.roles.cache.has("543783180130320385") ||
          interaction.member.roles.cache.has("550392133991923738")
      ) {
        const answer = ["yes"];
        const filter = response => {return answer.includes(response.content.toLowerCase())};
        interaction.reply("do you really want to motion?").then(() => {
          const collector = interaction.channel.createMessageCollector({filter, max: 1, time: 5000});
          collector.on('collect', collected => {


            const inp = interaction.options.getString('motion');
            console.log(
                "INSERT INTO Motions(motion,creator) VALUES(" +
                "'" +
                inp +
                "'" +
                "," +
                interaction.member.id +
                ");"
            );
            db.all(
                `INSERT INTO Motions(motion,creator) VALUES('${inp}','${interaction.member.id}')`,
                [],
                (err, rows) => {
                  if (err) {
                    interaction.editReply("sth went wrong");
                    console.log(err);
                  } else {
                    interaction.editReply("duly noted");
                    updateEmbedMessage(interaction);
                  }
                }
            );


          })
          collector.on('end' ,collected => {
            if (collected.size === 0){
              interaction.editReply('no motion noted');
            }

          });
        });
      }
      else {
        interaction.reply(
            "you do not have any authority to propose motions, please turn to your corresponding Senator or Tribune (if you're a filthy Pleb)"
        );
      }
      break;
    case 'challenge':

      let args = [interaction.options.getString('first'),interaction.options.getString('second')];

        let glademb = new Discord.EmbedBuilder();
        glademb.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
        glademb.addFields({ name: args[0], value: "100" , inline: true});
        glademb.addFields({ name: args[1], value: "100",inline: true});
        glademb.setColor(0x630330);
        interaction.reply({ embeds: [glademb] }).then(res => {
          let cturn = false;
          let hp1 = 100;
          let hp2 = 100;

          let int = setInterval(function(php1, php2){


            const num = Math.random();
            if(cturn === true){hp1 -= Math.floor(Math.random() * 31);
              if(hp1 < 0){hp1 = 0}
              let emb2 = new Discord.EmbedBuilder();
              emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
              emb2.addFields({ name: args[0], value: hp1.toString(), inline: true});
              emb2.addFields({ name: args[1], value: hp2.toString(), inline: true});
              emb2.setColor(0x630330);
              interaction.editReply({embeds: [emb2]});
              cturn = false;
            }else {hp2 -= Math.floor(Math.random() * 31)
              if(hp2 < 0){hp2 = 0}
              let emb2 = new Discord.EmbedBuilder();
              emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
              emb2.addFields({ name: args[0], value: hp1.toString(), inline: true});
              emb2.addFields({ name: args[1], value: hp2.toString(), inline: true});
              emb2.setColor(0x630330);
              interaction.editReply({embeds: [emb2]});
              cturn = true;
            }
            if(hp1 === 0 || hp2 === 0){clearInterval(int); let emb3 = new Discord.EmbedBuilder(); emb3.addFields({ name: "Winner", value: hp1 === 0 ? args[1] : args[0] }); emb3.setImage("https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc4NjAzNTMwOTA1MzEx/list-10-things-you-may-not-know-about-gladiators-2.jpg");
            emb3.setColor(0xFFD700);
              interaction.editReply({embeds: [emb3]}).catch(err => console.log(err))}
          },1500);


        });



      break;
    default:
      break;
  }});


function provinceIncome(){
  db.all("SELECT * FROM Province JOIN Governor ON Province.Governor = gov_ID ORDER BY income DESC",[],(err,rows) => {
    let totalIncomeAllProvincesBrutto = 0;
    let totalIncomeAllProvincesNetto = 0;
    let emb = new Discord.EmbedBuilder();
    let emb2 = new Discord.EmbedBuilder();
    let over25 = false;
    emb.setColor("0x00008b");

    emb.setThumbnail("https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png");
    emb.setAuthor({name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: 'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473'});

    emb2.setColor("0x00008b");

    emb2.setThumbnail("https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png");
    emb2.setAuthor({name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: 'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473'});
    for(let i = 0; i < rows.length; i++){
      let incomeUntaxed = rows[i].income;
      let currentTaxrate = i < 5? taxRateTop5: taxRate;
      if(incomeUntaxed !== 0){
        client.editUserBalance(GuildID, "700662464856981564", { cash: 0, bank: incomeUntaxed*currentTaxrate}).catch(error => console.log(error));
        totalIncomeAllProvincesBrutto += incomeUntaxed;
        incomeUntaxed *= (1 - currentTaxrate);
        incomeUntaxed = rows[i].Boosted? incomeUntaxed+incomeUntaxed*0.01 : incomeUntaxed;
        parseInt(rows[i].Admin) !== 0? client.editUserBalance(GuildID, String(rows[i].Admin), { cash: 0, bank: incomeUntaxed*0.3}):
            totalIncomeAllProvincesNetto += incomeUntaxed;
        client.editUserBalance(GuildID, String(rows[i].DiscordID), { cash: 0, bank: incomeUntaxed}).catch(error => console.log(error));
        console.log(String(rows[i].DiscordID))
      }
      //Discord Api restriction only 25 fields allowed
      if(i < 25){
        emb.addFields({name: "Income: "+rows[i].province, value: "Income in denarii: "+incomeUntaxed});
      }
      else {
        emb2.addFields({name: "Income: "+rows[i].province, value: "Income in denarii: "+incomeUntaxed});
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

clientdc.on('interactionCreate', async (button) => {
  if (button.isButton()) {
    if (button.customId === 'fac') {
      let provinces = createProvinceEmbed("https://cdn.discordapp.com/attachments/543787157127561216/932970514866143262/unknown.png", 0, 25);
      const row = new ActionRowBuilder()
          .addComponents(
              new ButtonBuilder()
                  .setCustomId('pro')
                  .setStyle('Primary')
                  .setLabel('Province Map'),new ButtonBuilder()
                  .setCustomId('fac')
                  .setStyle('Secondary') //default: blurple
                  .setLabel('Faction Map'),new ButtonBuilder()
                  .setCustomId('cul')
                  .setStyle('Success')
                  .setLabel('Culture Map')

          );
      await button.update({embeds: [provinces], components: [row]});
    } else if (button.customId === 'pro') {
      let provinces = createProvinceEmbed("https://cdn.discordapp.com/attachments/543787157127561216/932676494466113626/unknown.png", 0, 25);
      const row = new ActionRowBuilder()
          .addComponents(
              new ButtonBuilder()
                  .setCustomId('pro')
                  .setStyle('Primary')
                  .setLabel('Province Map'),new ButtonBuilder()
                  .setCustomId('fac')
                  .setStyle('Secondary') //default: blurple
                  .setLabel('Faction Map'),new ButtonBuilder()
                  .setCustomId('cul')
                  .setStyle('Success')
                  .setLabel('Culture Map')

          );
      await button.update({embeds: [provinces], components: [row]});
    } else if (button.customId === 'cul') {
      let provinces = createProvinceEmbed("https://cdn.discordapp.com/attachments/514135876909924354/813764720607625276/unknown.png", 0, 25);
      const row = new ActionRowBuilder()
          .addComponents(
              new ButtonBuilder()
                  .setCustomId('pro')
                  .setStyle('Primary')
                  .setLabel('Province Map'),new ButtonBuilder()
                  .setCustomId('fac')
                  .setStyle('Secondary') //default: blurple
                  .setLabel('Faction Map'),new ButtonBuilder()
                  .setCustomId('cul')
                  .setStyle('Success')
                  .setLabel('Culture Map')

          );
      await button.update({embeds: [provinces], components: [row]});
    }
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
    let emb = new Discord.EmbedBuilder();
    emb.setColor(message.member.displayHexColor);
    emb.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
    emb.setAuthor({name: "Help commands", iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});

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
      let emb = new Discord.EmbedBuilder();
      emb.setTitle("Random number");
      emb.addFields({ name: "number", value: Math.trunc(Math.random()*100)});
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
                  let emb = new Discord.EmbedBuilder();
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
                  emb.addFields({ name: a, value:  hp1, inline: true});
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
                  emb.addFields({ name: d, value:  hp2, inline: true});
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
                        let emb2 = new Discord.EmbedBuilder();
                        emb2.setImage("https://1.bp.blogspot.com/-ZbMMWQO4toE/Vi1WyeZNqnI/AAAAAAAABKE/Htni5mZ--Xo/s1600/Roman%2BLegion.jpg");
                        emb2.addFields({ name: a, value:  hp1, inline: true});
                        emb2.addFields({ name: d, value:  hp2, inline: true});
                        emb2.
                        emb2.setColor("0x8B0000");
                        res.edit(emb2);
                        cturn = false;
                      } else {
                        hp2 -= Math.abs(Math.floor(Math.random() * (aFAttack + aLAttack) - (dLDefense + dFDefense)))

                        if (hp2 < 0) {
                          hp2 = 0
                        }
                        let emb2 = new Discord.EmbedBuilder();
                        emb2.setImage("https://i.pinimg.com/originals/fa/94/71/fa94710c7832f410703bf600c903de9b.jpg");
                        emb2.addFields({ name: a, value:  hp1, inline: true});
                        emb2.addFields({ name: d, value:  hp2, inline: true});
                        emb2.
                        emb2.setColor("0x8B0000");
                        res.edit(emb2);
                        cturn = true;
                      }

                      if (hp1 === 0 || hp2 === 0) {
                        clearInterval(int);
                        let emb3 = new Discord.EmbedBuilder();
                        emb3.addFields({ name: "Winner", value:  hp1 === 0 ? d : a });
                        emb3.setImage("https://digitalmapsoftheancientworld.files.wordpress.com/2019/02/2118.png");
                        emb3.
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




  if(message.content.toLowerCase() === command+"showlegions"){
    let emb = new Discord.EmbedBuilder();
    emb.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
    emb.setTitle('Legions');
    emb.setColor('#cd1121');
    emb.setAuthor({name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: 'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473'});

    db.all("SELECT * FROM Legion JOIN Province ON Legion.province = Province.prov_id",[],(err,rows) => {
      //API restriction embeds can only have 25 elements
      if(rows.length <= 25){
        rows.forEach(row => {
          emb.addFields({ name: row.name, value: "From Province: "+row.Province +" \n Legate: "+row.Legate+"\n Stationed in: "+row.Location});
        });
        message.channel.send({ embeds: [emb] });
      }else{
        let emb2 = new Discord.EmbedBuilder();
        emb.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
        emb.setTitle('Legions');
        emb.setColor('#cd1121');
        emb.setAuthor({name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: 'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473'});
        for(let i = 0; i < 26; i++){
          emb.addFields({ name: rows[i].name, value: "From Province: "+rows[i].province +" \n Legate: "+rows[i].Legate+"\n Stationed in: "+rows[i].Location});
        }
        for(let i = 26; i < 51; i++){
          emb2.addFields({ name: rows[i].name, value: "From Province: "+rows[i].province +" \n Legate: "+rows[i].Legate+"\n Stationed in: "+rows[i].Location});
        }
        message.channel.send({ embeds: [emb,emb2] });
      }

    });


  }

  if(message.content.toLowerCase().includes(command+"legion")){
    let args = message.content.split(" ");
    let emb = new Discord.EmbedBuilder();
    emb.setThumbnail('https://cdn.discordapp.com/attachments/548918811391295489/776740280266784778/purpleDR.png');
    emb.setColor('#cd1121');
    emb.setAuthor({name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: 'https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473'});
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
          emb.addFields({ name: row.Unit, value: "Size: "+row.size });
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
    let emb = new Discord.EmbedBuilder();
    emb.setThumbnail('https://cdn.discordapp.com/attachments/680733248396984330/785230951998947328/unknown.png');
    emb.setColor('#cd1121');
    let word;
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
            emb.addFields({ name: "Resource", value:  row.resource });
          })

          let id;
          id = rows[0].DiscordID;
          clientdc.guilds.cache.get('514135876909924352').members.fetch(id).then(u =>{
            let av = u.user.displayAvatarURL();
            emb.setAuthor({name: u.displayName,iconURL: av});
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

  if(message.content.toLowerCase() === command+"lb"){
    let emb = new Discord.EmbedBuilder();
    emb.setColor("0xe94606");
    emb.setAuthor({name: "Leaderboard for the most Generalissimo reactions",iconURL: message.author.avatarURL()});

    db.all('SELECT * FROM Generals ORDER BY generals DESC',[],(err,rows) => {
      if(err){throw err;}
      rows.forEach(row => {
        if(row.DiscordID !== "220590173962895360" && clientdc.users.cache.get(row.DiscordID)){emb.addFields({ name: clientdc.guilds.cache.get("514135876909924352").members.cache.get(row.DiscordID).displayName, value: row.generals+"\n"+message.guild.members.cache.get(row.DiscordID).toString(), inline: false});
        }});
      message.channel.send({ embeds: [emb] });

    });

  }

  if(message.content.toLowerCase() === command+"general")
  {
    let emb = new Discord.EmbedBuilder();
    emb.setColor(message.member.displayHexColor);



    emb.setTitle(message.member.nickname,message.author.avatarURL());
    db.get('SELECT * FROM Generals WHERE DiscordID = '+message.author.id,[],(err,row) => {
      if(err){throw err;}
      if (row === undefined){emb.addFields({name: "Generals", value: "0", inline: true})}else{
        emb.addFields({name: "Generals",value: row.generals,inline: true});
        emb.setAuthor({name:
          message.member.nickname, iconURL:
              clientdc.users.cache.get(message.author.id).avatarURL()}
        );


      }
      if(!message.member.nickname){
        emb.setTitle(message.author.username);
        emb.setAuthor(
            {name: message.author.username, iconURL:
                  clientdc.users.cache.get(message.author.id).avatarURL()}
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

    let emb = new Discord.EmbedBuilder();
    emb.setColor(message.member.displayHexColor);
    emb.setDescription(randomfacts.make(statement));
    emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
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
    let emb = new Discord.EmbedBuilder();
    emb.setImage(pieChart);

    message.channel.send({ embeds: [emb] });

  }


  if(message.content.toLowerCase().includes(command+"wiki"))
  {

    let emb = new Discord.EmbedBuilder();
    wikiFacts.getRandomFact().then(function(fact) {
      emb.setDescription(fact);
      emb.setColor(message.member.displayHexColor);

      emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
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

    let emb = new Discord.EmbedBuilder();
    emb.setColor(message.member.displayHexColor);
    emb.setDescription(n);
    emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
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

          var emb = new Discord.EmbedBuilder();
          emb.setTitle("SCRIPTVRA SACRA");
          emb.setColor("0xe2b007");
          emb.setAuthor({name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
          emb.setThumbnail("https://i.imgur.com/xGz7rVU.png");

          emb.addFields({name: title+": \n"+args[1], value: datas[0].text,inline: true});
          message.channel.send({ embeds: [emb] });
        }else{

          var emb = new Discord.EmbedBuilder();
          emb.setTitle("SCRIPTVRA SACRA");
          emb.setColor("0xe2b007");
          emb.setAuthor({name: "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒", iconURL: "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"});
          emb.setThumbnail("https://i.imgur.com/xGz7rVU.png");

          emb.addFields({name: title+": \n"+args[1], value: datas[0].text, inline: true});
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
            let emb = new Discord.EmbedBuilder();
            emb.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
            emb.addFields({ name: message.author.username, value: "100", inline: true});
            emb.addFields({ name: args[1], value: "100", inline: true});
            emb.setColor("0xFFFFFF");
            message.channel.send({ embeds: [emb] }).then(res => {
              let cturn = Math.random() < 0.5;
              let hp1 = 100;
              let hp2 = 100;

              let int = setInterval(function(php1, php2){


                let num = Math.random();
                if(cturn === true){hp1 -= Math.floor(Math.random() * 31);
                  if(hp1 < 0){hp1 = 0}
                  let emb2 = new Discord.EmbedBuilder();
                  emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
                  emb2.addFields({ name: message.author.username, value: hp1.toString(), inline: true});
                  emb2.addFields({ name: args[1], value: hp2.toString(), inline: true});
                  emb2.
                  emb2.setColor("DARK_PURPLE");
                  res.edit({embeds: [emb2]});
                  cturn = false;
                }else {hp2 -= Math.floor(Math.random() * 31)
                  if(hp2 < 0){hp2 = 0}
                  let emb2 = new Discord.EmbedBuilder();
                  emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
                  emb2.addFields({ name: message.author.username, value: hp1.toString(), inline: true});
                  emb2.addFields({ name: args[1], value: hp2.toString(), inline: true});
                  emb2.
                  emb2.setColor("DARK_PURPLE");
                  res.edit({embeds: [emb2]});
                  cturn = true;
                }
                if(hp1 === 0 || hp2 === 0){clearInterval(int); let emb3 = new Discord.EmbedBuilder(); emb3.addFields({ name: "Winner", value: hp1 === 0 ? args[1] : message.author.username }); emb3.setImage("https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc4NjAzNTMwOTA1MzEx/list-10-things-you-may-not-know-about-gladiators-2.jpg"); emb3.
                emb3.setColor("GOLD");
                  res.edit({embeds: [emb3]})
                  let winner;
                  hp1 === 0 ? winner = args[1] : winner = message.author.username;
                  let embed = new Discord.EmbedBuilder();
                  bets.forEach(c =>{

                    embed.setTitle("Winners");
                    let t = c.split(":");

                    if(t[1] === winner){
                      embed.addFields({name: "winner", value: "<@"+t[2]+">"+" amount "+t[0]*1.85, inline: false});

                      client.editUserBalance(message.guild.id, t[2], { cash: t[0]*1.85, bank: 0 }, "bet");
                    }

                  })
                  BattleAlreadyCommenced = false;
                  message.channel.send({ embeds: [embed] });
                }
              },1500);


            });
          }else if(args.length === 3){
            let emb = new Discord.EmbedBuilder();
            emb.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
            emb.addFields({ name: args[1], value: "100", inline: true});
            emb.addFields({ name: args[2], value: "100", inline: true});
            emb.setColor("0xFFFFFF");
            message.channel.send({ embeds: [emb] }).then(res => {
              let cturn = false;
              let hp1 = 100;
              let hp2 = 100;

              let int = setInterval(function(php1, php2){


                let num = Math.random();
                if(cturn === true){hp1 -= Math.floor(Math.random() * 31);
                  if(hp1 < 0){hp1 = 0}
                  let emb2 = new Discord.EmbedBuilder();
                  emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
                  emb2.addFields({ name: args[1], value: hp1.toString(), inline: true});
                  emb2.addFields({ name: args[2], value: hp2.toString(), inline: true});
                  emb2.
                  emb2.setColor("DARK_PURPLE");
                  res.edit({embeds: [emb2]});
                  cturn = false;
                }else {
                  hp2 -= Math.floor(Math.random() * 31)
                  if(hp2 < 0){hp2 = 0}
                  let emb2 = new Discord.EmbedBuilder();
                  emb2.setImage("https://qph.fs.quoracdn.net/main-qimg-03cc5a7d16ec433984a39059446d5c4b");
                  emb2.addFields({ name: args[1], value: hp1.toString(), inline: true});
                  emb2.addFields({ name: args[2], value: hp2.toString(), inline: true});
                  emb2.
                  emb2.setColor("DARK_PURPLE");
                  res.edit({embeds: [emb2]});
                  cturn = true;
                }
                if(hp1 === 0 || hp2 === 0){clearInterval(int); let emb3 = new Discord.EmbedBuilder(); emb3.addFields({ name: "Winner", value: hp1 === 0 ? args[2] : args[1] }); emb3.setImage("https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc4NjAzNTMwOTA1MzEx/list-10-things-you-may-not-know-about-gladiators-2.jpg"); emb3.
                emb3.setColor("GOLD");
                  res.edit({embeds: [emb3]})
                  let winner;
                  hp1 === 0 ? winner = args[2] : winner = args[1];
                  let embed = new Discord.EmbedBuilder();
                  bets.forEach(bet =>{

                    embed.setTitle("Winners");
                    let t = bet.split(":");
                    let winnings = Math.floor(t[0]*1.7);
                    if(t[1] === winner){
                      embed.addFields({name: "winner", value: "<@"+t[2]+">"+" amount:"+winnings, inline: false});

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

        if (message.channel.type === 1) {
          console.log(message.content);
          var args = message.content.split("-");
          clientdc.channels.cache.get(args[0]).send(args[1]);
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

