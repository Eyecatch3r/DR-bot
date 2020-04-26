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
var time = dateformat(date,"longTime",true).split(":");
if(dates[1].startsWith("0")){dates[1] = dates[1].substring(1);}
console.log(dates[1] + dates[2]);
console.log(dateformat(date,"longTime",true))
console.log(time[0]+time[1]);

async function updateDate(){
  if(dateformat() != date){
 date = new Date();
console.log(dateformat("isoDate"));
 dates = dateformat("isoDate").split("-");
 time = dateformat(date,"longTime",true).split(":");
if(dates[1].startsWith("0")){dates[1] = dates[1].substring(1);}
console.log(dates[1] + dates[2]);
console.log(dateformat(date,"longTime",true))
console.log(time[0]+time[1]);
  }
                  }

  
let query =
  `SELECT * FROM Birthdates WHERE Birthdate LIKE ` +
  "'" +
  dates[1] +
  dates[2] +
  "'";

clientdc.on("presenceUpdate", (oldPresence,newPresence) => {
  //clientdc.channels.cache.get("514135876909924354").send("test");


db.all(query, [], (err, rows) => {
  
  if (err) {
    throw err;
  }
  rows.forEach(row => {
    updateDate();
    if(newPresence.userID == row.DiscordID && row.celebrated== 0){
    db.run("UPDATE Birthdates SET celebrated = 1 WHERE bID = "+ row.bID);
    clientdc.channels.cache.get("514135876909924354").send("happy Birthday " + newPresence.user.toString() +" :partying_face: :confetti_ball: :tada: ");
      //clientdc.channels.cache.get("514135876909924354").send("test");
    }
    //console.log(row.DiscordID);
  });
  });
});
function getUser(mention)
{
  if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return clientdc.users.cache.get(mention);
	}
}

function getRole(mention)
{
  if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('&')) {
			mention = mention.slice(1);
		}

		return clientdc.roles.cache.get(mention);
	}
}
  //clientdc.channels.cache.get("514135876909924354").send("test");
var command = process.env.Prefix;
  clientdc.on("message", message => {
    // If the message is "ping"
    if (message.content === "ping") {
      // Send "pong" to the same channel
      message.channel.send("Pong I guess");
    }
    if (message.content.includes(command + "addDate")) {
      let args = message.content.split(" ");
      
      console.log(args[1]);
      if(args[1].length === 4)
        {
          let bdate = args[1].toString();
          if(args[2] != null)
            {
             var id = message.mentions.users.first().id;
              
              let add = "INSERT INTO Birthdates(Birthdate,DiscordID,celebrated) VALUES("+bdate+","+id+",0)";
            db.run(add);
            }
          var userID = message.author.id;
          console.log(userID);
          
          let add = "INSERT INTO Birthdates(Birthdate,DiscordID,celebrated) VALUES("+bdate+","+userID+",0)";
          
          db.run(add);
          
      message.channel.send("Date added succesfully") }}
    if(message.content.includes(command+ "deleteDate")){
    
      var id = message.mentions.users.first().id;
      let add = "DELETE FROM Birthdates WHERE DiscordID ="+id+";";
      if (id != null){db.run(add); message.channel.send("Date removed succesfully") }
    }
    if(message.content.includes(command+ "addRoles")){
      let args = message.content.split(" ");
      let role = message.guild.roles.cache.findKey(role => role.name === args[1]);
      let ment = new Array;
      if(role.name === args[1])
        {
      for(var i = 2;i< args.length; i++){ment[i-2] = args[i]};
      
      ment.forEach(element => {message.guild.members.resolve(getUser(element)).roles.add(role)})
          message.channel.send("done")
    }
      else {message.channel.send("thats not a Role Broski")}
    }
    
  });

  clientdc.on("message", async message => {
    if (!message.author.bot && message.author.id != "241349696856129539") {
      if (
        
        message.content.includes("Istanbul") ||
        message.content.includes("istanbul")
      ) {
        message.channel.send("its Constantinople smh");
      }
    
      if(message.channel.type === "dm"){
        var args = message.content.split("-");
        clientdc.channels.cache.get(args[0]).send(args[1]);}
      
      if (
        message.content.includes("the General") ||
        message.content.includes("General") ||
        message.content.includes("general") ||
        message.content.includes("the general")
      ) {
        message.channel.send("hail Apicius");
        message.react("640270832115122196");
      }

      if (
        message.content.includes("HRE") ||
        message.content.includes("Holy Roman Empire") ||
        message.content.includes("hre ")
      ) {
        message.channel.send("shame on you");
      }

      if (
        message.content.includes("Civil war") ||
        message.content.includes("civil war")
      ) {
        message.channel.send("yall know who won right :wink:");
      }

      if (
        message.content.includes("Imperator") ||
        message.content.includes("Emperor") ||
        message.content.includes("imperator") ||
        message.content.includes("emperor")
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

clientdc.on("messageDelete", message => {
  if (!message.author.bot) {
    message.channel.send("u trying to hide something?");
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
