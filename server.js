// server.js
// where your node app starts

// init project
const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
var Client = require("uptime-robot");

const app = express();

//init sqlite API
const dbFile = "./.data/DR.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);

//simple test query
let sql = `SELECT Birthdate FROM Birthdates;`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach(row => {
    console.log(row.name);
  });
});

const discordBot = require("./bot");
const Discord = require("discord.js");
const clientdc = new Discord.Client();
clientdc.login("NzAwNjYyNDY0ODU2OTgxNTY0.XpnikQ.pHMQ0NYjTeYp-YSvf3D0tav0qCI");
// this is the code for the guides
app.use(require("./guides"));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
