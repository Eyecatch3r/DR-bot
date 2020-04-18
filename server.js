// server.js
// where your node app starts

// init project
const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
var Client = require("uptime-robot");

const app = express();

const discordBot = require("./bot");
const Discord = require("discord.js");
const clientdc = new Discord.Client();
clientdc.login('NzAwNjYyNDY0ODU2OTgxNTY0.XpnikQ.pHMQ0NYjTeYp-YSvf3D0tav0qCI');
// this is the code for the guides
app.use(require("./guides"));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


