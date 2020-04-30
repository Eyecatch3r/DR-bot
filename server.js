// server.js
// where your node app starts

// init project
const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
var Client = require("uptime-robot");

const app = express();

const http = require("http");

//init sqlite API
const dbFile = "./DR.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);

const discordBot = require("./bot");
const Discord = require("discord.js");
const clientdc = new Discord.Client();
clientdc.login(process.env.DISCORD_TOKEN);
app.use(require("./guides"));

var mainEmb = new Discord.MessageEmbed();
var MotionListChannel;


clientdc.on('ready', () =>{
  
db.all('SELECT * FROM candidates', [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach(row => {
    console.log(row.cID);
    console.log(row.DiscordID)
  });
});

  
  
  
    mainEmb.setTitle("Motions");
    mainEmb.setColor("0xcc0000");
    mainEmb.setFooter("Senate Meeting discussions powered by our most humble Imperator");
    mainEmb.setThumbnail("https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686");
    mainEmb.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");

  let msgs = new Array;
        let sql2 = `SELECT * FROM Motions;`;
    db.all(sql2, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        //message.channel.send(row.motion);
        if(clientdc.users.cache.get(row.creator) != undefined){
        let msg = row.motion+"\n"+"From:"+
          clientdc.users.cache.get(row.creator).toString()+"\n"+"motion ID:"+row.mID+"\n"+"--------------------"+"\n";
          msgs.push(msg);
        }
      });
      var output = "";
      msgs.forEach(msg => output += msg)
      mainEmb.setDescription(output);
      //clientdc.channels.cache.get("705136080105767004").send(test);
      
      });
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
  });
});



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
  "'" +
  dates[1] +
  dates[2] +
  "'";

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
//clientdc.channels.cache.get("514135876909924354").send("test");
var command = process.env.Prefix;
clientdc.on("message", message => {
  if(message.content.toLowerCase().includes(command+"prepare"))
    {
      let args = message.content.split(" ");
      switch(args[1])
        {
          case 'consul':
            
            
            clientdc.channels.cache.get('548918811391295489').send('consul Elections react here with 🔴').then(m => {
    const filter = (reaction, user) => user.id === message.author.id && reaction.emoji.name === '🔴';
              m.react("🔴");
    const collector = m.createReactionCollector(filter, { max: 1 });

    collector.on('collect', () => {
      m.edit('You did it!');
    });
  })
  .catch(console.error);
;
            break;
            
          case 'praetor':
            break;
            
          case 'aedile':
            break;
            
          case 'quaestor':
            break;
            
          case 'tribune':
            break;
            
          default:
            message.channel.send("not a valid role")
            break;
        }
      
    }
  
  
  // If the message is "ping"
  if (message.content === "ping") {
    // Send "pong" to the same channel
    message.channel.send("Pong I guess");
    message.channel.send(message.author.toString());
  }
  if(message.content.toLowerCase() === command+"imperialtree"){message.channel.send("https://cdn.discordapp.com/attachments/630588104184430643/705349480559411261/unknown.png")}
  
  if (message.content.toLowerCase() == command + "motions") {
    if(message.member.roles.cache.has('543783180130320385') || message.member.roles.cache.has("550392133991923738"))
      {
    
  let embed = new Discord.MessageEmbed();
        
        embed.setTitle("Motions");
    embed.setColor("0xcc0000");
    embed.setFooter("Senate Meeting discussions powered by our most humble Imperator");
    embed.setThumbnail("https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686");
    embed.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
    let msgs = new Array;
        let sql2 = `SELECT * FROM Motions;`;
    db.all(sql2, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        //message.channel.send(row.motion);
        if(message.guild.members.cache.get(row.creator) != undefined){
        let msg = row.motion+"\n"+"From:"+
          message.guild.members.cache.get(row.creator).toString()+"\n"+"motion ID:"+row.mID+"\n"+"--------------------"+"\n";
          msgs.push(msg);
        }
        else {message.channel.send("im sorry but this is the wrong Server");}
        
        //message.channel.send(row.mID);
        
        
        
        
      });
      var output = "";
      msgs.forEach(msg => output += msg)
      embed.setDescription(output);
      message.channel.send(embed);
    });
      } else message.channel.send("not a Senator/Tribune broski");
  }

  if (message.content.toLowerCase().includes(command + "motion ")) {
    if(message.member.roles.cache.has('543783180130320385') || message.member.roles.cache.has("550392133991923738"))
      {
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
    for(i = 1; i<args.length; i++)
      {
        inp += args[i]+" ";
      }
    db.all("INSERT INTO Motions(motion,creator) VALUES(" +
        "'" +
        inp +
        "'" +
        "," + "'"+
        message.member.id + "'"+
        ");", [], (err, rows) => {
      if (err) {
        message.channel.send("sth went wrong");
        console.log(err);
      } else {message.channel.send("duly noted"); 
              let embed = new Discord.MessageEmbed();
        
        embed.setTitle("Motions");
    embed.setColor("0xcc0000");
    embed.setFooter("Senate Meeting discussions powered by our most humble Imperator");
    embed.setThumbnail("https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686");
    embed.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
              
             let msgs = new Array;
        let sql2 = `SELECT * FROM Motions;`;
    db.all(sql2, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        //message.channel.send(row.motion);
        if(message.guild.members.cache.get(row.creator) != undefined){
        let msg = row.motion+"\n"+"From:"+
          message.guild.members.cache.get(row.creator).toString()+"\n"+"motion ID:"+row.mID+"\n"+"--------------------"+"\n";
          msgs.push(msg);
        }
        else {message.channel.send("im sorry but this is the wrong Server");}
        
        //message.channel.send(row.mID);
        
        
        
        
      });
      var output = "";
      msgs.forEach(msg => output += msg)
      embed.setDescription(output);
      message.guild.channels.cache.get("705136080105767004").messages.fetch({around: "705145698688958474", limit: 1}).then(messages => messages.first().edit(embed));
    });
      } 
             
             });
    
    
  
      }
  else {message.channel.send("you do not have any authority to propose motions, please turn to your corresponding Senator or Tribune (if you're a filthy Pleb)")}
  };
           

  if (message.content.toLowerCase().includes(command + "deleteMotion")) {
    if(message.member.roles.cache.has('649362430446796815') || message.member.roles.cache.has('565594839828398100') ||  message.member.roles.cache.has('514143501697679361') || message.member.roles.cache.has('546654987061821440'))
    {
    var args = message.content.split(" ");
    db.all("DELETE FROM Motions WHERE mID =" + args[1],[],(err,rows) => {
      if (err) {message.channel.send("wrong ID");}
      message.channel.send("motion deleted");
      
      let embed = new Discord.MessageEmbed();
        
        embed.setTitle("Motions");
    embed.setColor("0xcc0000");
    embed.setFooter("Senate Meeting discussions powered by our most humble Imperator");
    embed.setThumbnail("https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimage0.png?v=1588186014686");
    embed.setAuthor("𝐈𝐌𝐏𝐄𝐑𝐀𝐓𝐎𝐑·𝐏𝐕𝐁𝐋𝐈𝐕𝐒","https://cdn.glitch.com/24cdd29f-170e-4ac8-9dc2-8abc1cbbaeaa%2Fimageedit_1_3956664875.png?v=1588186424473");
              
             let msgs = new Array;
        let sql2 = `SELECT * FROM Motions;`;
    db.all(sql2, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach(row => {
        //message.channel.send(row.motion);
        if(message.guild.members.cache.get(row.creator) != undefined){
        let msg = row.motion+"\n"+"From:"+
          message.guild.members.cache.get(row.creator).toString()+"\n"+"motion ID:"+row.mID+"\n"+"--------------------"+"\n";
          msgs.push(msg);
        }
        else {message.channel.send("im sorry but this is the wrong Server");}
        
        //message.channel.send(row.mID);
        
        
        
        
      });
      var output = "";
      msgs.forEach(msg => output += msg)
      embed.setDescription(output);
      message.guild.channels.cache.get("705136080105767004").messages.fetch({around: "705145698688958474", limit: 1}).then(messages => messages.first().edit(embed));
    });
      
      
    });
    }
    else {message.channel.send("you do not have the permission to delete a motion");}
  }
  
  if (message.content.toLowerCase().includes(command + "deleteAllMotions")) {
    if(message.member.roles.cache.has('649362430446796815') || message.member.roles.cache.has('565594839828398100') ||  message.member.roles.cache.has('514143501697679361') || message.member.roles.cache.has('546654987061821440'))
    {
    
    db.all("DELETE FROM Motions",[],(err,rows) => {
      if (err) {message.channel.send("wrong ID");}
      message.channel.send("motions deleted");
    });
    }
    else {message.channel.send("you do not have the permission to delete a motion");}
  }

  if (message.content.toLowerCase().includes(command + "addDate")) {
    let args = message.content.split(" ");

    console.log(args[1]);
    if (args[1].length === 4) {
      let bdate = args[1].toString();
      if (args[2] != null) {
        var id = message.mentions.users.first().id;

        let add =
          "INSERT INTO Birthdates(Birthdate,DiscordID,celebrated) VALUES(" +
          bdate +
          "," +
          id +
          ",0)";
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
  if (message.content.toLowerCase().includes(command + "deleteDate")) {
    var id = message.mentions.users.first().id;
    let add = "DELETE FROM Birthdates WHERE DiscordID =" + id + ";";
    if (id != null) {
      db.run(add);
      message.channel.send("Date removed succesfully");
    }
  }
  if (message.content.toLowerCase().includes(command + "addRoles")) {
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
  if (message.content.toLowerCase() === "?pray") {message.author.send("dont listen to Dyno Byzantium is Roman");}
});

clientdc.on("message", async message => {
  if (!message.author.bot && message.author.id != "241349696856129539") {
    if (
      message.content.toLowerCase().includes("Istanbul") ||
      message.content.toLowerCase().includes("istanbul")
    ) {
      message.channel.send("its Constantinople smh");
    }

    if (message.channel.type === "dm") {
      var args = message.content.split("-");
      clientdc.channels.cache.get(args[0]).send(args[1]);
    }

    if (
      message.content.toLowerCase().includes("the General") ||
      message.content.toLowerCase().includes("General") ||
      message.content.toLowerCase().includes("general") ||
      message.content.toLowerCase().includes("the general")
    ) {
      message.channel.send("hail Apicius");
      message.react("640270832115122196");
    }

    if (
      message.content.toLowerCase().includes("HRE") ||
      message.content.toLowerCase().includes("Holy Roman Empire") ||
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
      message.content.toLowerCase().includes("Imperator") ||
      message.content.toLowerCase().includes("Emperor") ||
      message.content.toLowerCase().includes("imperator") ||
      message.content.toLowerCase().includes("emperor")
    ) {
      message.channel.send(
        "All hail the Imperator https://media.4teachers.de/images/thumbs/image_thumb.1146.jpg"
      );
      message.react("664229248944439301");
    }
  }
});

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
