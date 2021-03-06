// server.js
// where your node app starts

// init project
const express = require("express");
var assets = require("./assets");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
const bible = require("bible-english");
const app = express();
let portunus = require('romans');
const http = require("http");
const can = require("canvas");
const { Client } = require('unb-api');
const client = new Client('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI3Mjg5NjU5MTQ0NzY4MDY2ODUiLCJpYXQiOjE1OTM4Njk0MTd9._E6dCtkLswWgDySTPihh32Al9tvHPxFuxqY_eBk8waQ');
const GuildID = "514135876909924352";
const Tree = require("treeify");
var CronJob = require('node-cron');
const ImageCharts = require('image-charts');
//init sqlite API
const dbFile = "./DR.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);
const randomfacts = require('@dpmcmlxxvi/randomfacts');
const wikiFacts = require('wikifakt');
const tr = require('translate');
tr.key = 'trnsl.1.1.20200515T222139Z.a68c11f6ccb16bd4.b2bb25b5f6b3c103701bbe0015c7998ab237fa98';
tr.engine = 'yandex';
app.use("/assets", assets);

const discordBot = require("./bot");
const Discord = require("discord.js");
const clientdc = new Discord.Client();



clientdc.login(process.env.DISCORD_TOKEN);
app.use(require("./guides"));

var MotionListChannel;

//compare dates with the current date
const dateformat = require("dateformat");
var date = new Date();
console.log(dateformat("isoDate"));
var dates = dateformat("isoDate").split("-");
var time = dateformat(date, "longTime", true).split(":");
if (dates[1].startsWith("0")) {
  dates[1] = dates[1].substring(1);
}
console.log(dates[1] + dates[2]);
console.log(dateformat(date, "longTime", true));
console.log(time[0] + time[1]);


function updateEmbed() {
  var mainEmb = new Discord.MessageEmbed();

  mainEmb.setTitle("Motions");
  mainEmb.setColor("0xcc0000");
  mainEmb.setFooter(
    "Senate Meeting discussions powered by our most humble Imperator"
  );
  mainEmb.setThumbnail(
    "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
  );
  mainEmb.setAuthor(
    "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
    "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
  );
  mainEmb.setDescription("Motions to discuss in Senate meetings");

  let msgs = new Array();
  let sql2 = `SELECT * FROM Motions;`;
  db.all(sql2, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      //message.channel.send(row.motion);
      if (clientdc.users.cache.get(row.creator) != undefined) {
        let msg =
          row.motion +
          "\n" +
          "From:" +
          clientdc.users.cache.get(row.creator).toString() +
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
      var args2 = new Array();
      for (var i = msgs.length; i > msgs.length / 2; i--) {
        args2.push(msgs[i]);
        msgs.pop();
      }
      msgs.forEach(msg => mainEmb.addField(msg));

      var secEmb = new Discord.MessageEmbed();

      secEmb.setTitle("Motions");
      secEmb.setColor("0xcc0000");
      secEmb.setFooter(
        "Senate Meeting discussions powered by our most humble Imperator"
      );
      secEmb.setThumbnail(
        "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
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
    "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
  );
  embed.setAuthor(
    "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
    "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
  );

  let msgs = new Array();
  let sql2 = `SELECT * FROM Motions;`;
  db.all(sql2, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      //message.channel.send(row.motion);
      if (message.guild.members.cache.get(row.creator) != undefined) {
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
      } else {
        message.channel.send("im sorry but this is the wrong Server");
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
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
        );
        secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
        );
        secEmb.setDescription("Motions to discuss in Senate meetings");
      
      message.guild.channels.cache
        .get("705136080105767004")
        .messages.fetch({ around: "705898782935613501", limit: 1 })
        .then(messages => messages.first().edit(embed));
      
      message.guild.channels.cache
          .get("705136080105767004")
          .messages.fetch({ around: "705898783757565995", limit: 1 })
          .then(messages => messages.first().edit(secEmb));
    } else {
      
        var args2 = new Array();
      var length = (msgs.length % 2 == 0) ? (msgs.length) : (msgs.length+1)
      
        for (var i = length / 2; i <= length; i++) {
          args2.push(msgs[i]);
          
          
          msgs.splice(i,1);
          
        }
  for(var i = args2.length-1; i >= 0; i--){if(args2[i] == undefined){args2.pop()}}

        var secEmb = new Discord.MessageEmbed();

        secEmb.setTitle("Motions");
        secEmb.setColor("0xcc0000");
        secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
        );
        secEmb.setThumbnail(
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
        );
        secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
        );
        secEmb.setDescription("Motions to discuss in Senate meetings");

        args2.forEach(msg => secEmb.addField("motion", msg+"/"+parseInt(args2.indexOf(msg)+msgs.length,10), false));
        msgs.forEach(msg2 => embed.addField("motion", msg2+"/"+msgs.indexOf(msg2), false));
        message.guild.channels.cache
          .get("705136080105767004")
          .messages.fetch({ around: "705898782935613501", limit: 1 })
          .then(messages => messages.first().edit(embed));
        message.guild.channels.cache
          .get("705136080105767004")
          .messages.fetch({ around: "705898783757565995", limit: 1 })
          .then(messages => messages.first().edit(secEmb));
      }
    
  });
}

clientdc.on("ready", () => {
  //db.run("DELETE FROM candidates");
  //db.run("DELETE FROM Elections");
  //db.run("DELETE FROM CandidateElections");
  
  updateEmbed();
  
  
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
  
  
  CronJob.schedule('0 20 * * SUN', () => {
  clientdc.channels.cache
          .get("549645921487421495").send("<@&577587377195974656>");},{
   scheduled: true,
   timezone: "Europe/Berlin"
});
  
  CronJob.schedule('0 1 * * *', () => {
  collectTaxes()},{
   scheduled: true,
   timezone: "Europe/Berlin"
});
});

function collectTaxes(){
  //getting member count
  let mem = clientdc.guilds.cache.get(GuildID).memberCount;
  let tax = 0;
  
    //request the leaderBoard through the API
      client.getGuildLeaderboard(GuildID).then(bal => {
        //go through every member
        for(var i = 0; i< mem; i++){
          let user = clientdc.guilds.cache.get(GuildID).members.cache.get(bal.users[i].user_id);
          //check if he is still a member
          if(user)
            {
              //check if he has the role Plebeian
          if(user.roles.cache.get("548455163044560897")){
              tax += bal.users[i].total*0.17;
            }
          else{
            tax += bal.users[i].total*0.08;
          
          }
            }else tax += bal.users[i].total*0.17;
        }
        //round the number upwards
        tax = Math.ceil(tax);
        addTransaction(tax,"Taxes");
      });
    
    
}

async function SenateMeetingTimer(){
  var senateDate = dateformat("fullDate");
  var senateTime = dateformat(senateTime,"UTC:H:MM:ss:ll");
  
  if(senateDate != dateformat("fullDate") || senateTime != dateformat("UTC:HH")){
    senateDate = dateformat("fullDate");
    senateTime = dateformat("UTC:HH"); 
  }
  console.log(senateTime);
  
    clientdc.channels.cache
          .get("514135876909924354").send("<@&577587377195974656>");
  
    
}

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



async function updateDate() {
  if (dateformat() != date) {
    date = new Date();
    console.log(dateformat("isoDate"));
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
  if(user.id == '220590173962895360' && reaction.emoji.id === '640270832115122196')
    {
      
      var available = false;
      db.all('SELECT * FROM Generals WHERE DiscordID = '+reaction.message.author,[],(err,rows) =>{
        if(err){throw err;}
      
        if(rows[0] != undefined)
        {available = true; }
        if(available){db.run('UPDATE Generals SET generals = generals-1 WHERE DiscordID = '+reaction.message.author.id);}
             });
    }
  
});


clientdc.on("messageReactionAdd",(reaction,user) => {
  if(user.id == '220590173962895360' && reaction.emoji.id === '640270832115122196')
    {
      
      var available = false;
      db.all('SELECT * FROM Generals WHERE DiscordID = '+reaction.message.author,[],(err,rows) =>{
        if(err){throw err;}
      
        if(rows[0] != undefined)
        {available = true; }
        if(available){db.run('UPDATE Generals SET generals = generals+1 WHERE DiscordID = '+reaction.message.author.id);}else{
      db.run("INSERT INTO Generals(DiscordID,generals) VALUES('"+reaction.message.author.id+"',1)");  
        }
             });
    }
  
});


clientdc.on("presenceUpdate", (oldPresence, newPresence) => {
  //clientdc.channels.cache.get("514135876909924354").send("test");

  db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => {
      updateDate();
      if (newPresence.userID == row.DiscordID && row.celebrated == 0) {
        db.run("UPDATE Birthdates SET celebrated = 1 WHERE bID = " + row.bID);
        clientdc.channels.cache
          .get("514135876909924354")
          .send(
            "happy Birthday " +
              newPresence.user.toString() +
              " :partying_face: :confetti_ball: :tada: "
          );
        //clientdc.channels.cache.get("514135876909924354").send("test");
      }
      //console.log(row.DiscordID);
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

/**function setRoleCollector(message,reactionEmoji)
{
  const filter = reaction => reaction.emoji.name === '🔴'; 
              m.react("🔴");
    const collector = message.createReactionCollector(filter, { max: 1000 });

    collector.on('collect', (reaction,user) => {
      if(!user.bot){
      message.guild.members.cache.get(user.id).roles.add('703401102795604079');
      }
    }
        
      
}**/
const applyText = (canvas, text,fontsize) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = fontsize;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 5}px font-family: 'Pacifico', cursive;`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

function addTransaction(amount,reason){
  db.run("INSERT INTO Treasury(amount,reason) VALUES("+amount+",'"+reason+"')");
}

var command = process.env.Prefix;
clientdc.on("message", message => {
  if (message.content === command + "clearE") {
    let args = message.content.split(" ");
    db.run("UPDATE CandidateElections SET votes = 0 WHERE Election IN (SELECT eID FROM Elections WHERE Month = 'generalprobe')");
    db.run("DELETE FROM votercandidate WHERE candidate IN (SELECT candidate FROM candidateElections WHERE Election IN (SELECT eID FROM Elections WHERE Month = '"+args[1]+"'))");
  }
  
  if (message.content === command + "clearDB") {
    if(message.author.id === '325296044739133450'){
    db.run("DELETE FROM candidates");
    db.run("DELETE FROM Elections");
    db.run("DELETE FROM CandidateElections");
    db.run("DELETE FROM Voters");
    db.run("DELETE FROM votercandidate");
    message.channel.send("all right");
  }
  else {message.channel.send("sorry but you're not the Imperator "+"<@325296044739133450>")}
  }
  
  if(message.content.toLowerCase().includes(command+"showtreasury")){
    let emb = new Discord.MessageEmbed();
    emb.setColor("0x66023c");
    emb.setFooter("Imperial treasury powered by our most humble Imperator");
    emb.setAuthor("Imperial coffers","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
    
    db.get("SELECT SUM(amount) AS amount FROM Treasury",[],(err,res) => {emb.setDescription(res.amount+" <:DNR:551048853596405788>"); message.channel.send(emb);});
  }
  
  if(message.content.toLowerCase().includes("addtreasury")){
    var args = message.content.split(" ");
    addTransaction(args[1],args[2]);  
    message.channel.send("updated Treasury");
  }
  
  if(message.content.toLowerCase().includes(" cor ") || message.content.toLowerCase().includes(" cock ") || message.content.toLowerCase().includes("byq") || message.content.toLowerCase().includes("byqerino") || message.content.toLowerCase().includes("corey") || message.content.toLowerCase().includes("naresh"))
    {
      if(!message.author.bot){
     message.channel.send("I love cor feet (sorry for the spam)");
      }
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
  
  if(message.content.toLowerCase() === command+"lb"){
    let emb = new Discord.MessageEmbed();
      emb.setColor("0xe94606");
    emb.setAuthor("Leaderboard for the most Generalissimo reactions",message.author.avatarURL());
      emb.setFooter("General reactions powered by our most humble Imperator");
   
    db.all('SELECT * FROM Generals ORDER BY generals DESC',[],(err,rows) => {
        if(err){throw err;}
      rows.forEach(row => {
        if(row.DiscordID != "220590173962895360" && clientdc.users.cache.get(row.DiscordID)){emb.addField(clientdc.guilds.cache.get("514135876909924352").members.cache.get(row.DiscordID).displayName,row.generals+"\n"+message.guild.members.cache.get(row.DiscordID).toString(),false);
                                                 }});
        message.channel.send(emb);
      
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
        if (row == undefined){emb.addField("Generals","0",true)}else{
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
        message.channel.send(emb);
      });
      
    }
  
  if(message.content.toLowerCase().includes(command+"tr"))
    {
      
      var args = message.content.split(" ");
      var arg = "";
      for(var i = 1; i<args.length-1; i++){arg += " "+args[i];}
      tr(arg,args[args.length-1]).then(t => {message.channel.send(t);
                                            message.delete();});
      
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
                  if(rowss == undefined){db.run("INSERT INTO Candidates(DiscordID) VALUES('"+args[1]+"')");}
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
     let args = message.content.split(" ");
      let emb = new Discord.MessageEmbed();
      emb.setColor(message.member.displayHexColor);
      emb.setDescription(randomfacts.make(args[1]));
      emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
      emb.setFooter("random facts powered by our most humble Imperator");
      message.channel.send(emb);
      
    }
  
  if(message.content.toLowerCase().includes(command+"chart"))
    {
      let args = message.content.split(" ");
      let tit = "";
      let val = "t:";
      for(let i = 1; i < args.length; i++)
        {
          if(i % 2 == 0){val += args[i]+","}else{tit += args[i]+"|";}
          
        }
      
      console.log(tit+"\n"+val);
      let pieChart = ImageCharts().cht('p3').chs('250x190') // 700px x 190px
.chd(val) // 2 data points: 60 and 40
.chl(tit).chtt("chart").toURL();
      let attachment = new Discord.MessageAttachment(pieChart,"test.png");
      let emb = new Discord.MessageEmbed();
      emb.setImage(pieChart);
      
     message.channel.send(emb);
      
    }
  
    
  if(message.content.toLowerCase().includes(command+"wiki"))
    {
     
      let emb = new Discord.MessageEmbed();
      wikiFacts.getRandomFact().then(function(fact) {
   emb.setDescription(fact);
emb.setColor(message.member.displayHexColor);
     
      emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
      emb.setFooter("random facts powered by our most humble Imperator");
      message.channel.send(emb);
      
      
      });
      
    }
  
  if(message.content.includes(command+"number"))
    {
      var args = message.content.split(" ");
      
      var n = 0;
      if(isNaN(args[1]))
        {
          n = portunus.deromanize(args[1]);
        }else n = portunus.romanize(parseInt(args[1]));
      
      let emb = new Discord.MessageEmbed();
      emb.setColor(message.member.displayHexColor);
      emb.setDescription(n);
      emb.setTitle("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
      emb.setFooter("Roman numeral conversion powered by our most humble Imperator");
      message.channel.send(emb);
    }
  
  if(message.content.includes(command+"bible")){
    var args = message.content.split("+");
    var newargs = args[1].split(":");
    bible.getVerse(newargs[0]+":1",(err,data) => {
      
      var title = data[0].title;
      
        
        bible.getVerse(args[1],(err,datas) => {
          if(datas[0].title == undefined){
          title = data[0].title;
            
            var emb = new Discord.MessageEmbed();
      emb.setTitle("SCRIPTVRA SACRA");
      emb.setColor("0xe2b007");
      emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
      emb.setFooter("bible quotes powered by our most humble Imperator");
      emb.setThumbnail("https://i.imgur.com/xGz7rVU.png");
      
      emb.addField(title+": \n"+args[1],datas[0].text,true);
      message.channel.send(emb);
          }else{
      
      var emb = new Discord.MessageEmbed();
      emb.setTitle("SCRIPTVRA SACRA");
      emb.setColor("0xe2b007");
      emb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
      emb.setFooter("bible quotes powered by our most humble Imperator");
      emb.setThumbnail("https://i.imgur.com/xGz7rVU.png");
      
      emb.addField(title+": \n"+args[1],datas[0].text,true);
      message.channel.send(emb);
          }
    });
        
      });
    
    
  }
  if(message.content.toLowerCase().includes(command+"quote"))
    {
      var args = message.content.split(" ");
      var arg = "";
      for(var i = 1; i<args.length; i++){arg += " "+args[i];}
      
      const canvas = can.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background =  new can.Image();
      background.src = './Rome.jpg';
      if(background != undefined){
	//ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      }

	ctx.strokeStyle = '#ffffff';
  
	ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(0,0,canvas.width,canvas.height);

      // Assign the decided font to the canvas
	ctx.font = applyText(canvas, arg,60);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(arg, canvas.width / 3, canvas.height / 2);
      
      var author = message.guild.members.cache.get(message.author.id).displayName;
      ctx.font = applyText(canvas,author,30);
      
     
      ctx.fillText("- "+author+"\n  "+dateformat("longDate")+"\n          in: #"+message.channel.name, canvas.width / 2, canvas.height / 1.4);
	  
      // Pick up the pen
	ctx.beginPath();
      var gradient = ctx.createRadialGradient(165, 165, 0,
                                            225, 225,100);

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
	

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(attachment);
    }
    }
  if (message.content.toLowerCase().includes(command + "election")) {
    let args = message.content.split(" ");
    let maxVote;
    switch(args[1])
      {
        case "consul":
          maxVote = 2;
          break;
        case "praetor":
          maxVote = 3;
          break;
        case "aedile":
          maxVote = 2;
          break;
        case "quaestor":
          maxVote = 4;
          break;
        case "tribune":
          maxVote = 2;
          break;
        case "pope":
          maxVote = 1;
          break;
      }
    
    let emb = new Discord.MessageEmbed();
    var lett = [
      "0️⃣",
      "1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣",
      "🔟",
      "🔢",
      "#️⃣",
      "*️⃣",
      "⏏️",
      "▶️",
      "⏸",
      "⏯",
      "⏹",
      "⏺",
      "⏭",
      "⏮",
      "⏩",
      "⏪",
      "⏫",
      "⏬"
    ];

    emb.setTitle(args[1] + " elections from: " + args[2]);
    emb.setColor("0x66023c");
    emb.setFooter("Elections powered by our most humble Imperator");
    emb.setThumbnail(
      "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
    );
    emb.setAuthor(
      "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
      "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
    );

    let sql4 =
      'SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +
      args[1] +
      '" AND Month = "' +
      args[2] +
      '"';

    let can = new Array();
    db.parallelize(() => {
    db.all(sql4, [], (err, rows) => {
      if (err) {
        throw err;
        message.channel.send("sth went wrong");
      }
      
      //message.guild.members.cache.get(row.cID).toString()+"\n votes: "+row.votes
      
      message.channel.send(emb).then(m => {
        let filter = reaction => lett.includes(reaction.emoji.name);
        let tit = "";
        let val = "t:";
for (i = 0; i < rows.length; i++) {
        
          emb.addField(
            "Candidate",
            lett[i]+":"+
              message.guild.members.cache.get(rows[i].DiscordID).toString() +
              "\n votes: " +
              rows[i].votes,
            true
          );
          let name = "";
      if(message.guild.members.cache.get(rows[i].DiscordID).nickname != null){
        name = message.guild.members.cache.get(rows[i].DiscordID).nickname}
      else{
       name = message.guild.members.cache.get(rows[i].DiscordID).user.username; 
      }
        val += parseInt(rows[i].votes)+",";
          tit += i+"|";
  
  let pieChart = ImageCharts().cht('p3').chs('250x190') // 700px x 190px
.chd(val) // 2 data points: 60 and 40
.chl(tit).chtt("chart").toURL();
                emb.setImage(pieChart);
  
          m.edit(emb);
          m.react(lett[i]);
          can[i] = rows[i].DiscordID;
        }

        let collector = m.createReactionCollector(filter, { time: 86400000 });

        collector.on("collect", (reaction, user) => {
          if (!user.bot) {
            db.parallelize(() => {
            
              reaction.users.remove(user);
              //check the reaction, then find the user based by its ID in the database and update the vote count
              if (lett.includes(reaction.emoji.name)  && lett.indexOf(reaction.emoji.name) < rows.length) {
                let order = lett.indexOf(reaction.emoji.name)+1;
                
                db.get('SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +args[1] +'" AND Month = "' +args[2] +'" AND number = '+order,[],(err,candidate) => {
                
                if(args[1] == "tribune" && clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('548455163044560897') || args[1] != "tribune" && clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('548455163044560897') || clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('548455006693752852') || args[1] == "pope" && clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('564496146622316556')){
                  if (lett.indexOf(reaction.emoji.name) == candidate.number-1 && !user.bot) {
                    
                    db.get("SELECT COUNT() AS c FROM Voters JOIN votercandidate ON vID = voter WHERE Voters.DiscordID = '"+user.id+"' AND votercandidate.Election = '"+candidate.eID+"' AND candidate = '"+candidate.cID+"'",[],(err,count) => {
                    db.get("SELECT * FROM Voters JOIN votercandidate ON vID = voter JOIN candidates ON cID = votercandidate.candidate JOIN CandidateElections ON cID = CandidateElections.candidate JOIN Elections ON CandidateElections.election = eID WHERE Voters.DiscordID = '"+user.id+"' AND CandidateElections.number = '"+candidate.number+"' AND Month = '"+args[2]+"' AND title = '"+args[1]+"'",[],(err,alreadyVoted) => {
                      if(count.c != 0){db.run("UPDATE CandidateElections SET votes = votes-1 WHERE number = '"+candidate.number +"' AND election IN (SELECT eID FROM Elections WHERE title = '"+args[1]+"' AND Month = '"+args[2]+"')");
                                       
                                       //updates the embed with the new votes 
              let emb2 = new Discord.MessageEmbed();
              emb2.setTitle(args[1] + " elections from: " + args[2]);
    emb2.setColor("0x66023c");
    emb2.setFooter("Elections powered by our most humble Imperator");
    emb2.setThumbnail("https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686");
    emb2.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

              db.all('SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +args[1] +'" AND Month = "' +args[2] +'"',[],(err,results) => {
                let tit = "";
      let val = "t:";
              for(var j = 0; j < results.length; j++){
                
                emb2.addField(
                  "Candidate",
                  lett[j]+": "+
                    message.guild.members.cache.get(results[j].DiscordID).toString() +
                    "\n votes: " +
                    results[j].votes,
                  true
                );
                let name = "";
      if(message.guild.members.cache.get(results[j].DiscordID).nickname != null){
        name = message.guild.members.cache.get(results[j].DiscordID).nickname}
      else{
       name = message.guild.members.cache.get(results[j].DiscordID).user.username; 
      }
     
          val += parseInt(results[j].votes)+",";
          tit += j+"|";
        
              }
               
               let pieChart = ImageCharts().cht('p3').chs('250x190') // 700px x 190px
.chd(val) // 2 data points: 60 and 40
.chl(tit).chtt("Election results").toURL();
                emb2.setImage(pieChart);
                
                m.edit(emb2);
              });
                                       
                                       
                                       db.run("DELETE FROM votercandidate WHERE vcID = '"+alreadyVoted.vcID+"'")
                                                   }
                      else {
                    db.get("SELECT COUNT() AS count FROM Voters JOIN votercandidate ON vID = voter WHERE Voters.DiscordID = '"+user.id+"' AND votercandidate.Election = '"+candidate.eID+"'",[],(err,rowt) => {
                     
              
                      if(rowt.count < maxVote || rowt.count == null){
                       
                  let cID;
                  let vID;
                        
                        //updates the embed with the new votes 
              let emb2 = new Discord.MessageEmbed();
              emb2.setTitle(args[1] + " elections from: " + args[2]);
    emb2.setColor("0x66023c");
    emb2.setFooter("Elections powered by our most humble Imperator");
    emb2.setThumbnail("https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686");
    emb2.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
                        
                      db.run("UPDATE CandidateElections SET votes = votes+1 WHERE number = "+candidate.number +" AND Election IN (SELECT eID FROM Elections WHERE Month ='"+args[2]+"' AND title = '"+args[1]+"')").all('SELECT * FROM Elections JOIN CandidateElections ON eID = Election JOIN Candidates ON candidate = cID WHERE Title = "' +args[1] +'" AND Month = "' +args[2] +'"',[],(err,results) => {
                        let tit = "";
      let val = "t:";
              for(var j = 0; j < results.length; j++){
                
                emb2.addField(
                  "Candidate",
                  lett[j]+": "+
                    message.guild.members.cache.get(results[j].DiscordID).toString() +
                    "\n votes: " +
                    results[j].votes,
                  true
                );
              let name = "";
      if(message.guild.members.cache.get(results[j].DiscordID).nickname != null){
        name = message.guild.members.cache.get(results[j].DiscordID).nickname}
      else{
       name = message.guild.members.cache.get(results[j].DiscordID).user.username; 
      }
     
          val += parseInt(results[j].votes)+",";
          tit += j+"|";
              }
                        
               let pieChart = ImageCharts().cht('p3').chs('250x190') // 700px x 190px
.chd(val) // 2 data points: 60 and 40
.chl(tit).chtt("Election results").toURL();
                emb2.setImage(pieChart);
                        
                m.edit(emb2);
              });
                        
                        db.get("SELECT * FROM Voters WHERE DiscordID = '"+user.id+"'",[],(err,rows) =>{
                      //if a voter is already registered insert the m-n relationship votercandidate
                    
                      if(rows == undefined){
                        db.run("INSERT INTO Voters(DiscordID) VALUES("+user.id+")");
                        db.get("SELECT * FROM CandidateElections WHERE number = '"+candidate.number +"'",[],(err,row) =>{ 
                          cID = row.candidate; 
                          db.get("SELECT vID FROM VOTERS WHERE DiscordID = '"+user.id+"'",[],(err,r) => {
                            vID = r.vID;
                          db.run("INSERT INTO votercandidate(voter,candidate,Election) VALUES('"+vID+"','"+cID+"','"+candidate.eID+"')")});
                        });
                      }
                      else db.get("SELECT * FROM CandidateElections WHERE number = '"+candidate.number+"'",[],(err,row) => {cID = row.candidate; 
                          db.get("SELECT vID FROM VOTERS WHERE DiscordID = '"+user.id+"'",[],(err,r) => {
                            vID = r.vID;
                          db.run("INSERT INTO votercandidate(voter,candidate,Election) VALUES('"+vID+"','"+cID+"','"+candidate.eID+"')")});
                          });
                      
                                                                                                              }); 
                    
                    
                      }
                      else { user.send("voted too many");
                        
                      }
                      
                      
                      
                   }); 
                    }  
                  });
                    });
                  }
                }
                });
             
              
              
            

            
          }
            });
          }
          
        });
        
        collector.on("dispose",(reaction,user) =>{
          if(!user.bot){
             for (i = 0; i < rows.length; i++) {
            if (reaction.emoji.name == lett[i]) {
            //db.run("UPDATE CandidateElection JOIN candidates ON candidate = cID SET votes = votes-1 WHERE DiscordID = '"+can[i]+"'");
            }
             }
          }
        });
      });
    });
      });
  }
  if (message.content.toLowerCase().includes(command + "prepare")) {
    let args = message.content.split(" ");
    if (
      args[1] == "consul" ||
      "praetor" ||
      "aedile" ||
      "quaestor" ||
      "tribune"
    ) {
      db.run("INSERT INTO Elections(Title,Month) VALUES('"+args[1]+"','"+args[2]+"')");
    }else message.channel.send("not a real role");
  }
  if (message.content.toLowerCase().includes(command + "candidate")) {
    let args = message.content.split(" ");
    if (
      args[1] == "consul" ||
      "praetor" ||
      "aedile" ||
      "quaestor" ||
      "tribune"
    ) {
      let query =
        'INSERT INTO Elections(Title,Month) VALUES("' +
        args[1] +
        '","' +
        args[2] +
        '");';
      db.all(query, [], err => {
        if (err) {
          message.channel.send("month already specified");
          throw err;
        }
      else{
      message.channel.send(args[1] + " Elections react here with 🔴").then(m => {
        var order = 0;
          const filter = (reaction, user) => reaction.emoji.name === "🔴";
          m.react("🔴");
          const collector = m.createReactionCollector(filter, { max: 1000 });

          collector.on("collect", (reaction, user) => {
            if (!user.bot) {
              if(clientdc.guilds.cache.get('514135876909924352').members.cache.get(user.id).roles.cache.get('548455163044560897') && args[1] === "tribune" || args[1] != "tribune")
                {
              order++;
              message.guild.members.cache
                .get(user.id)
                .roles.add("703401102795604079");
              //try to insert a new candidate, if already existant the exception will abort the process
              db.all(
                'INSERT INTO candidates(DiscordID) VALUES("' + user.id + '")',
                [],
                err => {
                  if (err) {
                  }
                
              db.get(
                "SELECT cID FROM candidates WHERE DiscordID = '" +
                  user.id +
                  "';",
                [],
                (err, rowss) => {
                  if (err) {
                    m.channel.send(
                      "sorry but there was an error (probably wrong ID)"
                    );
                  } else {
                    
                    let eID,cID;
                    cID = rowss.cID;
                    db.get("SELECT eID FROM Elections WHERE Month = '"+args[2]+"' AND Title = '"+args[1]+"'",[],(err, row)=> {
                    eID = row.eID;
                      db.run('INSERT INTO CandidateElections(candidate,Election,number) VALUES("' +cID +'","' +eID +'",'+order+')')
                    
                    });
                  }
                });
                  });
                }else(user.send("sorry but only plebs can candidate"))
            }
                
          });
        collector.on("dispose",(reaction,user) => {
          order--;
          db.get(
                "SELECT cID FROM candidates WHERE DiscordID = '" +
                  user.id +
                  "';",
                [],
                (err, rowss) => {
          let eID,cID;
                    cID = rowss.cID;
                    db.get("SELECT eID FROM Elections WHERE Month = '"+args[2]+"' AND Title = '"+args[1]+"'",[],(err, row)=> {
                    eID = row.eID;
          db.run("DELETE FROM candidateElections WHERE cnadidate = "+cID+"AND Election ="+eID);
                      });
                });
        });
        
        });
      }
        });
      
    } 
             
             else {
      message.channel.send("invalid role");
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
      "https://cdn.discordapp.com/attachments/630588104184430643/705349480559411261/unknown.png"
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
                var args2 = row.motion.split("http");
                embed.addField("Motion in question",args2[0],true);
                embed.setImage("http"+args2[1]);
              }else{
            embed.addField("Motion in question","Picture in question",true);
            embed.setImage(row.motion);
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
            message.guild.members.cache.get(row.creator).toString(),
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
        var mot = new Array();
        db.all('SELECT * FROM Motions',[],(err,rows) => {
          var args = message.content.split(" ");
          var link = new Array();
          var creator = new Array();
          rows.forEach(row => {mot.push(row.motion +"\n From:" +message.guild.members.cache.get(row.creator).toString()); link.push(row.motion); creator.push(row.creator)});
          
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
                message.channel.send(embed);
              }else{
            embed.addField("Motion in question","Picture in question",true);
            embed.setImage(link[args[1]]);
                
                
                embed.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          clientdc.users.cache.get(creator[args[1]]).avatarURL()
        );
            message.channel.send(embed);
              }
          }else {
          
                           
          if(mot.length >= 25)
            {
          
          var args2 = new Array();
      var length = (mot.length % 2 == 0) ? (mot.length) : (mot.length+1)
      
        for (var i = length / 2; i <= length; i++) {
          args2.push(mot[i]);
          
          
          mot.splice(i,1);
          
        }
  for(var i = args2.length-1; i >= 0; i--){if(args2[i] == undefined){args2.pop()}}
          
          if(mot[args[1]]) {embed.setTitle("Motion number:"+args[1])
          embed.addField("Motion in question", mot[args[1]],false);} else if(args2[args[1]-mot.length]) {embed.addField("Motion in question", args2[args[1]-mot.length],false);} else{embed.addField("Motion in question", "no motion with such ID", false);}
              embed.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          clientdc.users.cache.get(creator[args[1]]).avatarURL()
        );
            }
          else {embed.addField("Motion in question", mot[args[1]],false); embed.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          clientdc.users.cache.get(creator[args[1]]).avatarURL()
        );}
          
          message.channel.send(embed);
          }
        });
        
        
        
        
      }
          
      if(available) message.channel.send(embed);
    });
  }

  if (message.content.toLowerCase() == command + "motions") {
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
        "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
      );
      embed.setAuthor(
        "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
        "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
      );
      let msgs = new Array();
      let sql2 = `SELECT * FROM Motions;`;
      db.all(sql2, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
          //message.channel.send(row.motion);
          if (message.guild.members.cache.get(row.creator) != undefined) {
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
          } else {
            message.channel.send("im sorry but this is the wrong Server");
          }
        });
  
         
        
        if (msgs.length <= 25) {
      msgs.forEach(msg => embed.addField("motions", msg+"\n"+msgs.indexOf(msg)));
      message.guild.channels.cache
        .get("705136080105767004")
        .messages.fetch({ around: "705898782935613501", limit: 1 })
        .then(messages => messages.first().edit(embed) );
          message.channel.send(embed);
    } else {
        var secEmb = new Discord.MessageEmbed();

        secEmb.setTitle("Motions second page");
        secEmb.setColor("0xcc0000");
        secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
        );
        secEmb.setThumbnail(
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
        );
        secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
        );
        secEmb.setDescription("Motions to discuss in Senate meetings");
      
        var args2 = new Array();
      var length = (msgs.length % 2 == 0) ? (msgs.length) : (msgs.length+1)
      
        for (var i = length / 2; i <= length; i++) {
          args2.push(msgs[i]);
          
          
          msgs.splice(i,1);
          
        }
  for(var i = args2.length-1; i >= 0; i--){if(args2[i] == undefined){args2.pop()}}
        var secEmb = new Discord.MessageEmbed();

        secEmb.setTitle("Motions");
        secEmb.setColor("0xcc0000");
        secEmb.setFooter(
          "Senate Meeting discussions powered by our most humble Imperator"
        );
        secEmb.setThumbnail(
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686"
        );
        secEmb.setAuthor(
          "𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒",
          "https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473"
        );
        secEmb.setDescription("Motions to discuss in Senate meetings");

        args2.forEach(msg => secEmb.addField("motion", msg+"/"+parseInt(args2.indexOf(msg)+msgs.length,10), false));
        msgs.forEach(msg2 => embed.addField("motion", msg2+"/"+msgs.indexOf(msg2), false));
        message.channel.send(embed);
        message.channel.send(secEmb);
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
	message.channel.awaitMessages(filter,{ max: 1, time: 3000, errors: ['time'] }).then( collected => {
    
    
      var args = message.content.split(" ");
      console.log(
        "INSERT INTO Motions(motion,creator) VALUES(" +
          "'" +
          args[1] +
          "'" +
          "," +
          message.member.id +
          ");"
      );
      let inp = "";
      for (i = 1; i < args.length; i++) {
        inp += args[i] + " ";
      }
      db.all(
        "INSERT INTO Motions(motion,creator) VALUES(" +
          '"' +
          inp +
          '"' +
          "," +
          "'" +
          message.member.id +
          "'" +
          ");",
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
    .catch(collected => {
			message.channel.send('no motion noted');
		});
  });
      
      
  }
    else {
      message.channel.send(
        "you do not have any authority to propose motions, please turn to your corresponding Senator or Tribune (if you're a filthy Pleb)"
      );
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

  if (message.content.toLowerCase().includes(command + "deleteallmotions")) {
    if (
      message.member.roles.cache.has("649362430446796815") ||
      message.member.roles.cache.has("565594839828398100") ||
      message.member.roles.cache.has("514143501697679361") ||
      message.member.roles.cache.has("546654987061821440")
    ) {
      db.all("DELETE FROM Motions", [], (err, rows) => {
        if (err) {
          message.channel.send("sth went wrong");
          
        } else message.channel.send("motions deleted");
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
      var userID = message.author.id;
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
    let ment = new Array();
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

clientdc.on("message", async message => {
  if (!message.author.bot && message.author.id != "241349696856129539") {
    if (message.content.toLowerCase().includes("istanbul")) {
      message.channel.send("its Constantinople smh");
    }

    if (message.channel.type === "dm") {
      var args = message.content.split("-");
     clientdc.channels.cache.get(args[0]).send(args[1]);
    }

    if (
      message.content.toLowerCase().includes("the general") ||
      message.content.toLowerCase().includes("general")
    ) {
      message.channel.send("hail Apicius");
      message.react("640270832115122196");
    }

    if (
      message.content.toLowerCase().includes("hre ") ||
      message.content.toLowerCase().includes("holy Roman Empire") ||
      message.content.toLowerCase().includes("hre ")
    ) {
      message.channel.send("shame on you");
    }

    if (
      message.content.toLowerCase().includes("Civil war") ||
      message.content.toLowerCase().includes("civil war")
    ) {
      message.channel.send("yall know who won right :wink:");
    }

    if (
      message.content.toLowerCase().includes("imperator") ||
      message.content.toLowerCase().includes("emperor")
    ) {
      var num = Math.random();
      console.log(num);
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
      message.content.toLowerCase().includes("imperatrix") ||
      message.content.toLowerCase().includes("empress")
    ) {
      message.channel.send(
        "All hail the Empress https://pbs.twimg.com/profile_images/837236794387234816/megbmYw2_400x400.jpg"
      );
      message.react("636456201273475113");
    }
    
     if (
      message.content.toLowerCase().includes("boo") && !message.content.toLowerCase().includes("book")
    ) {
      message.channel.send(
        "https://cdn.discordapp.com/attachments/536547184448110602/741412013430931467/IMG-20200807-WA0082.jpg"
      );
      
    }
    
    if (
      message.content.toLowerCase().includes("canis")
    ) {
      message.channel.send(
        "https://lh3.googleusercontent.com/pw/ACtC-3ei9pLdPL1wJ3B7FtjbDyEsNHlUQeE8eCITVyQ8uUf_BxaAJaaG3LChL2mMoKjoKh_Zk35cQS9J2CdLjpqB91hOoqS_1Zvf09O4gvnafBjf_YM-kMoswDQMPH66ZI0eVd-TIlAInxWfHYBrNjadAfqG=w963-h1286-no?authuser=0"
      );
      
    }
    
    
    if (
      message.content.toLowerCase().includes("carthago")){
      message.channel.send("Carthago Delenda Est!");
          
      }
      }
  }
);


clientdc.on("messageUpdate", message => {
  if (!message.author.bot) {
    //message.channel.send("I saw that edit");
  }
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);

  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);
});