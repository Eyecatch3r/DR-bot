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
// this is the code for the guides
app.use(require("./guides"));

//simple test query
let sql = `SELECT Birthdate FROM Birthdates;`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach(row => {
    console.log(row.Birthdate);
  });
});

//compare dates with the current date
const dateformat = require("dateformat");
console.log(dateformat("isoDate"));
var dates = dateformat("isoDate").split("-");
console.log(dates[1] + dates[2]);

let query =
  `SELECT * FROM Birthdates WHERE Birthdate LIKE ` +
  "'" +
  dates[1] +
  dates[2] +
  "'";

db.all(query, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach(row => {
    console.log(row.DiscordID);
    clientdc.channels
      .get("514135876909924354")
      .send("happy Birthday" + "<@" + row.DiscordID + ">");
  });

  //clientdc.channels.get("514135876909924354").send("test");
clientdc.channels.cache.get("514135876909924354");
      
  
  });

  clientdc.on("message", message => {
    // If the message is "ping"
    if (message.content === "ping") {
      // Send "pong" to the same channel
      message.channel.send("https://www.youtube.com/watch?v=L4miye-UICo");
    }
    
  clientdc.on("message", message => {
    if(!message.author.bot)
      {
    if (
      message.content.includes("Istanbul") ||
      message.content.includes("istanbul")
    ) {
      message.channel.send("its Constantinople smh");
    }

    if (
      message.content.includes("HRE") ||
      message.content.includes("Holy Roman Empire")
    ) {
      message.channel.send("shame on you");
    }

    if (
      message.content.includes("Imperator") ||
      message.content.includes("Emperor") ||
      message.content.includes("imperator") ||
      message.content.includes("emperor")
    ) {
      
      message.channel.send("All hail the Imperator https://media.4teachers.de/images/thumbs/image_thumb.1146.jpg");
    }
      }
  });
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
